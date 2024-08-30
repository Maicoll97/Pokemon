# configurar ambiente

1. Instalar nodeJS via npm

2. Instalar json server :  npm install -g json-server

3. Ejecutar en "api-pokemon" :  json-server -w pokemon.json -p 3002
   Nota: -p 3002 El puerto varia segun sea el caso

4. Endpoints:
  4.1. Listar todos los registros http://localhost:3002/pokemon
  4.2. Filtar por name:  http://localhost:3002/pokemon?name=Charmander