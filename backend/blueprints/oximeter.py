from flask import (Blueprint, render_template, current_app)
from backend.db import DBInflux
import os


oximeter_blueprint = Blueprint('oximeter-blueprint', __name__)



@oximeter_blueprint.route("/")
def index():
    return render_template("index.html")

@oximeter_blueprint.route("/dados_oximetro", methods=["GET"])
def le_dados_do_banco():
    lista_tags = ["hearthate", "sp02"]
    banco = init_db()
    dados = banco.busca_dados(lista_tags)
    dados_dict = {dados.index(item): item for item in dados}
    fecha_conexao_db(banco)
    return dados_dict

# TODO: Verificar melhor maneira de inicializar o banco
# o banco precisa ser inicializado dentro do contexto da aplicaçao.
def init_db():
    try:
        db = DBInflux(host=current_app.config.get('DB_ADDRESS'), port=current_app.config.get('DB_PORT'))
    except ConnectionRefusedError as err:
        raise err
    else:
        return db

def fecha_conexao_db(db):
    db.fecha_conexao()