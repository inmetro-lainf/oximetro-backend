from flask import (Blueprint, render_template)
import os

oximeter_blueprint = Blueprint('oximeter', __name__)

@oximeter_blueprint.route("/")
def index():
    os.read()
    return render_template("index.html")