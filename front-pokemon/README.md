# INSTALACIONES

* Dcumnetación de LIT: 
    * https://www.npmjs.com/package/lit
    * https://lit.dev/
    
* Isntalar LIT utilizando bundles :

  * import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

3. Servidor WEB

* Instalar servidor web para correr la aplicación :  npm install -g http-server

* http-server -- --port 4173


# ESTRUCTURA DEL PROYECTO

1. index.html : Archivo de entrada de la aplicación.

2. Page : se define la pagina que va utilizar la aplixación

3. components: Se crean los componentes que se reutilizaran en la aplicación

4. utils: Se crean componentes de utilización general, como alert , modales ...

5. service: Se crear archivos para consumo de API o fuente de datos

6. config : se definen las variables de configuracion de la aplicación como la URL del servicio

7. assets:  recursos de la aplicación como img, text, json ...

