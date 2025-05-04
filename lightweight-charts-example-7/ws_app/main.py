from ws_server import start_ws_server
from ws_client import start_ws_client


if __name__ == '__main__':
    queue = start_ws_server()
    start_ws_client(queue)

    try:
        while True:
            pass
    except KeyboardInterrupt:
        print('Shutting down')