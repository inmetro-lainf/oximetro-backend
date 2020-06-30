from flask import (Blueprint, current_app, send_from_directory)
from flask_cors import cross_origin
from backend.db import DBInflux
from datetime import datetime

oximeter_blueprint = Blueprint('oximeter-blueprint', __name__)


@oximeter_blueprint.route('/')
def index():
    return send_from_directory("backend/static/", "index.html")

@oximeter_blueprint.route("/<path:path>")
@cross_origin()
def static_files(path):
    # TODO: Arquivos estaticos devem ser providos por outro web server...
    #  Please keep in mind that how you are actually "serving" the files will probably differ between production (on your web server) and development (on your local computer, or some other test area). As some answers have pointed out, you will probably NOT want to serve your static files with flask, but instead have them in their own directory and then have your actual web server (Apache, nginx, etc.) server those files directly.

    return send_from_directory("backend/static/", path)

@oximeter_blueprint.route("/dados_oximetro", methods=["GET"])
@cross_origin()
def leitura_simples():
    lista_tags = ["hearthate", "sp02"]
    dados = le_dados_do_banco(lista_tags)
    dados_dict = {dados.index(item): item for item in dados}
    return dados_dict

@oximeter_blueprint.route("/busca_dados_para_grafico/<tag>", methods=["GET"])
@cross_origin()
def leitura_para_grafico(tag):
    dados = le_dados_do_banco([tag])
    dados_list = [[formata_data(item['time']), float(item[tag])] for item in dados]
    graph_data = {'graph_data': dados_list}
    return graph_data

def formata_data(data_no_formato_iso):
    data_novo_formato = datetime \
        .fromisoformat(data_no_formato_iso[:len(data_no_formato_iso) - 1]) \
        .strftime("%d/%m/%Y %H:%M:%S")
    return data_novo_formato

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