def transform_klines_for_chart(klines):
    return [
        {
            'time': int(kline[0]) // 1000,
            'open': float(kline[1]),
            'high': float(kline[2]),
            'low': float(kline[3]),
            'close': float(kline[4]),
        }
        for kline in klines
    ]