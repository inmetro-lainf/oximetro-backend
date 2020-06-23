import pytest
import unittest
from backend.oxi_app import create_app
from flask import request, json


class AppTest(unittest.TestCase):
    def setUp(self):
        self.app = create_app(mode="test")

    @pytest.mark.xfail
    def test_request_args(self):
        with self.app.test_request_context('/?name=PauloNascimento'):
            self.assertEqual(request.args.get('name'), 'PauloNascimento')

    def test_leitura_de_dados_de_oximetro(self):
        # Faz assert do path
        with self.app.test_request_context('/dados_oximetro'):
            self.assertEqual(request.path, '/dados_oximetro')

        # Faz assert da resposta para requisiçao GET
        dados_teste = {'time': '2020-05-20T13:08:20.665284Z',
                       'hearthate': '74',
                       'sp02': '97'}
        with self.app.test_client() as cliente:
            resposta = cliente.get('/dados_oximetro')
            dados = json.loads(resposta.data)
            self.assertEqual(dados_teste, dados["0"])
