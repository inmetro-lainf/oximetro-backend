from flask import Flask
from .blueprints.oximeter import oximeter_blueprint

def create_app(config_env_var="FLASK_CONFIG"):
    app = Flask("backend")
    if config_env_var:
        app.config.from_envvar(config_env_var, silent=False)

    app.register_blueprint(oximeter_blueprint)

    return app