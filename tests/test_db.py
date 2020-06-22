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

  def test_inicializacao_de_banco_sem_sucesso(self):
    '''Teste que inicializa conexao com banco que nao existe e verifica exceçao.'''
    try:
      db = DBInflux(host='0.0.0.0', port=8080)
    except Exception as err:
      self.assertRaises(ConnectionRefusedError, err)

  def test_verifica_banco(self):
    self.assertIn({'name': test_const.DB_NAME}, self.db.verifica_database())

  def test_busca_de_dados_com_tags_existentes_no_banco(self):
    '''Compara o resultado da busca para as tags "heartrate" e "sp02". Porem, funciona para qualquer combinaçao
    de tags que existam no banco.'''
    dados_teste = {'time': '2020-05-20T13:08:20.665284Z',
             'hearthate': '74',
             'sp02': '97'}
    query_tags = ["hearthate", "sp02"]
    dados_banco = self.db.busca_dados(query_tags, test_const.DB_NAME)
    self.assertEqual(dados_teste, dados_banco[0])

  # TODO: Testar busca de dados com tags que nao existe no banco.
  # def test_busca_de_dados_com_tags_existentes_no_banco(self):
  #   pass

  def tearDown(self):
    self.db.fecha_conexao()

if __name__ == '__main__':
    unittest.main()