from influxdb import InfluxDBClient

class DBInflux():
    def __init__(self, host="0.0.0.0", port=8086):
        try:
            self._influxdb = InfluxDBClient(host=host, port=port)
        except Exception:
            raise Exception

    def verifica_conexao(self):
        return self._influxdb.ping()

    def verifica_database(self):
        return self._influxdb.get_list_database()

    def busca_dados(self, lista_de_tags_da_query=None, database='oximetro'):
        '''Monta a string de busca de acordo com a lista de tags e o banco informados como parametros de entrada e
        retorna uma lista de dicionarios com os valores identificados pelas tags'''

        query_string = 'SELECT '
        for tag in lista_de_tags_da_query:
            indice_do_item = lista_de_tags_da_query.index(tag)
            if indice_do_item is len(lista_de_tags_da_query) - 1:
                query_string += tag
            else:
                query_string += tag + ", "

        query_string += ' FROM "%s"."autogen"."oximetro" ORDER BY "time"' % database
        resultado_da_query = self._influxdb.query(query_string)
        pontos = list(resultado_da_query.get_points())
        return pontos

    def fecha_conexao(self):
        self._influxdb.close()