def transform_kline_for_chart(kline):
    return {
        'time': kline['start'] // 1000,
        'open': float(kline['open']),
        'high': float(kline['high']),
        'low': float(kline['low']),
        'close': float(kline['close']),
    }