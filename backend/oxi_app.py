from flask import Flask
from .blueprints.oximeter import oximeter_blueprint
from os import path


def create_app(mode="production"):
    instance_path = path.join(
        path.abspath(path.dirname(__file__)), "%s_instance" % mode
    )

    print(instance_path)
    app = Flask("oximeter-backend",
                static_folder="/static/",
                template_folder="template",
                instance_path=instance_path,
                instance_relative_config=True)
    app.config.from_pyfile('config.cfg')
    app.register_blueprint(oximeter_blueprint)

    return app
