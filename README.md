# Backend do serivço de Oximetria

Serviço desenvolvido com o microframework [Flask](https://flask.palletsprojects.com/en/1.1.x/) com o proposito de fornecer um frontend e conectar com um banco de dados [InfluxDB](https://www.influxdata.com/).

Projeto desenvolvido em parceria entre PUC-RJ e Inmetro

## Container Docker

A execução do Web Service é realizada através de um contêiner Docker e a configuração foi realizada através de Dockerfile e docker-compose. O arquivo `config.cfg` com os parâmetros de configuração para o ambiente de prodrução (Endereço IP do banco de dados, senhas e etc.) deve ser disponibilizado durante a configuração do contêiner. Os arquivos docker-compose.yml e Dockerfile são descritos a seguir:

docker-compose.yml
```yaml
version: "3"
services:
  oximetro-backend:
    image: lainf-inmetro/oximentro-backend
    network_mode: bridge
    build:
      context: ./
    ports:
      - "80:8080"
    restart: unless-stopped
    container_name: oximetro-backend
```

DockerFile
```Dockerfile
FROM python:3-alpine3.12

# Atualiza timezone do container
RUN apk add --no-cache tzdata
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Instala Git
RUN apk add git

# Cria diretório de trabalho
RUN mkdir -p /srv/app/
WORKDIR /srv/app

# Clona repositorio do github
RUN git clone https://github.com/inmetro-lainf/oximetro-backend
WORKDIR oximetro-backend/

# Instala dependências
RUN pip install -r requirements.txt

# Copia arquivo com configurações de produção
RUN mkdir backend/production_instance/
COPY  config.cfg backend/production_instance/

EXPOSE 8080

CMD [ "python", "run.py", "production" ]
```

É preciso estar atento que o contêiner é executado com `network_mode: bridge` e nesse caso o contêiner não conseguirá acessar outros contêiners na mesma rede através da resolução de nome, apenas realizará o acesso através do endereço IP na subrede Docker. 
