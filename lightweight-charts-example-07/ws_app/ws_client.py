import json
import threading
import time
from websockets.sync.client import connect

from chart_formatter import transform_kline_for_chart


BYBIT_WS_URL = 'wss://stream.bybit.com/v5/public/linear'
TOPICS = ['kline.1.BTCUSDT']

def subscribe(websocket):
    payload = {
        'req_id': 'sub_kline',
        'op': 'subscribe',
        'args': TOPICS
    }
    websocket.send(json.dumps(payload))
    print(f'Subscribed to: {TOPICS}')

def send_heartbeat(websocket):
    while True:
        time.sleep(20)

        try:
            ping_msg = {'op': 'ping'}
            websocket.send(json.dumps(ping_msg))
            ts = time.strftime('%H:%M:%S', time.localtime())
            print(f'[PING] Sent at {ts}')
        except Exception as e:
            print(f'Heartbeat failed: {e}')
            break

def start_ws_client(queue):
    def _run():
        try:
            with connect(BYBIT_WS_URL) as websocket:
                print('Bybit connection opened')

                subscribe(websocket)
                threading.Thread(
                    target=send_heartbeat,
                    args=(websocket,),
                    daemon=True
                ).start()

                while True:
                    message = websocket.recv()
                    data = json.loads(message)

                    if ('data' in data):
                        data = transform_kline_for_chart(data['data'][0])
                        queue.put(data)
        except Exception as e:
            print(f'[BybitClient] Error: {e}')

    threading.Thread(target=_run, daemon=True).start()