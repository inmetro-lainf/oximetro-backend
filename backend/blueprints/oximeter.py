from flask import (Blueprint, render_template)

oximeter_blueprint = Blueprint('oximeter', __name__)

@oximeter_blueprint.route("/")
def index():
    return render_template("index.html")