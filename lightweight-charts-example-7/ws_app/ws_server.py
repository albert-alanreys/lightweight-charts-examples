import threading
import json
from queue import Queue
from websockets.sync.server import serve


clients = []
queue = Queue()

def handler(websocket):
    clients.append(websocket)

    try:
        for _ in websocket:
            pass
    finally:
        clients.remove(websocket)

def broadcast():
    while True:
        message = json.dumps(queue.get())

        for ws in clients[:]:
            try:
                ws.send(message)
            except Exception as e:
                print(f'[Broadcast] Failed to send: {e}')
                clients.remove(ws)

def start_ws_server():
    print('WebSocket server started on ws://localhost:6790')
    
    threading.Thread(
        target=lambda: serve(handler, 'localhost', 6790).serve_forever(),
        daemon=True
    ).start()
    threading.Thread(target=broadcast, daemon=True).start()

    return queue