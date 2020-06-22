# -*- coding: utf-8 -*-

import unittest
from backend.test_instance import test_const
from backend.db import DBInflux

class Teste_DB(unittest.TestCase):
  def setUp(self):
    self.db = DBInflux(host=test_const.DB_ADDRESS, port=test_const.DB_PORT)

  def test_verifica_conexao_com_sucesso(self):
    '''Teste que verifica se InfluxDB esta conectado atraves de um ping.
        O banco deve retornar seu numero de versao'''
    self.assertEqual('1.8.0', self.db.verifica_conexao())

  # TODO: Testar erro na conexao com o banco
  # def test_verifica_conexao_sem_sucesso(self):
  #   '''Teste que verifica se InfluxDB esta conectado atraves de um ping.
  #       O banco deve retornar seu numero de versao'''
  #   db = DBInflux(host='0.0.0.0', port=8080)
  #   self.assertRaises(Exception, db.verifica_conexao())

  def test_verifica_banco(self):
    self.assertIn({'name': test_const.DB_NAME}, self.db.verifica_database())

  def test_busca_de_dados_atraves_de_query(self):
    dados_teste = {'time': '2020-05-20T13:08:20.665284Z',
             'hearthate': '74',
             'sp02': '97'}
    query_tags = ["hearthate", "sp02"]
    dados_banco = self.db.busca_dados(query_tags, test_const.DB_NAME)
    self.assertEqual(dados_teste, dados_banco[0])

  def tearDown(self):
    self.db.fecha_conexao()

if __name__ == '__main__':
    unittest.main()