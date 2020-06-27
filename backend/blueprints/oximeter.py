from flask import (Blueprint, render_template, current_app, request)
from backend.db import DBInflux
import os


oximeter_blueprint = Blueprint('oximeter-blueprint', __name__)



@oximeter_blueprint.route("/")
def index():
    return render_template("index.html")

@oximeter_blueprint.route("/dados_oximetro", methods=["GET"])
def leitura_simples():
    lista_tags = ["hearthate", "sp02"]
    dados = le_dados_do_banco(lista_tags)
    dados_dict = {dados.index(item): item for item in dados}
    return dados_dict

@oximeter_blueprint.route("/busca_dados_para_grafico/<tag>", methods=["GET"])
def leitura_para_grafico(tag):
    dados = le_dados_do_banco([tag])
    print(dados)
    dados_list = [[item['time'], item[tag]] for item in dados]
    graph_data = {'graph_data': dados_list}
    return graph_data

def le_dados_do_banco(lista_tags):
    banco = init_db()
    dados = banco.busca_dados(lista_tags)
    fecha_conexao_db(banco)
    return dados

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