from flask import Flask, render_template


class FlaskApp(Flask):
    def __init__(self, data_ids, main_data, **args):
        self.data_ids = data_ids
        self.main_data = main_data
        
        super().__init__(**args)
        self.route('/')(self.index)
        self.route('/data/ids')(self.get_data_ids)
        self.route('/data/main/<string:id>')(self.get_main_data)
  
    def index(self):
        return render_template('index.html')

    def get_data_ids(self):
        return self.data_ids

    def get_main_data(self, id):
        return self.main_data[id]