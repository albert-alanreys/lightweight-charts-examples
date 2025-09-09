import glob
import json

from flask_app import FlaskApp


def get_data():
    data_ids = []
    main_data = {}
   
    for id, file in enumerate(glob.glob('data/*.json')):
        data_ids.append(str(id))

        with open(file, 'r') as file:
            main_data[str(id)] = json.load(file)

    return json.dumps(data_ids), main_data


def create_flask_app(data_ids, main_data):
    flask_app = FlaskApp(
        data_ids=data_ids,
        main_data=main_data,
        import_name=__name__,
        static_folder='view/static',
        template_folder='view/templates'
    )
    flask_app.run()


def main():
    data_ids, main_data = get_data()
    create_flask_app(data_ids, main_data)


if __name__ == '__main__':
    main()