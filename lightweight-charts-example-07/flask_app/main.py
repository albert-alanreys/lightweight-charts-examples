import requests
from flask import Flask, render_template, jsonify

from chart_formatter import transform_klines_for_chart


class FlaskApp(Flask):
    def __init__(self, **args):
        super().__init__(**args)
        
        self.route('/')(self.index)
        self.route('/get_history_klines')(self.get_history_klines)
  
    def index(self):
        return render_template('index.html')

    def get_history_klines(self):
        url = 'https://api.bybit.com/v5/market/kline'
        params = {
            'category': 'linear', 'symbol': 'BTCUSDT', 'interval': '1',
        }

        try:
            response = requests.get(url, params=params)
            response.raise_for_status()
            return jsonify(
                transform_klines_for_chart(
                    response.json()['result']['list'][::-1]
                )
            )
        except Exception as e:
            return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    FlaskApp(
        import_name=__name__,
        static_folder='view/static',
        template_folder='view/templates'
    ).run()