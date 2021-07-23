# API-SPOTIFY
Creación de una API con Angular que se conecta al API-RESTFul de Spotify


Para completar este ejercicio se ha utilizado la siguiente estructura, librerías y métodos:

- Componentes:
  1. home
  2. buscador
  3. tarjetas
  4. artista
  5. shared/navBar
  6. shared/loading
  7. shared/error
- Servicios
- Pipes
- Routing personalizado
- Incluir librería de Fontawesome
- Incluir librería de Bootstrap
- Personalización de algunos estilos y animaciones con CSS

OJO! Si deseas descargar el código debes tener en cuenta lo siguiente:

0. el código está alojado en la rama MASTER del repositorio, no en la main, deberás cambiarte a la rama master
1. npm install
2. crearte una cuenta en la web para desarrolladores de spotify https://developer.spotify.com/
3. una vez creada esta cuenta te facilitarán: unas credenciales, que son client_id y client_secret
4. con estas credenciales podrás conseguir el token que necesitarás actualizar en la API, ya que expira en 1 hora y está vinculado a mi cuenta de desarrollador. 
   Una vez tengas el token, tendrás que actualizar la constante de nombre "token" que hay en el archivo cuyo path es el siguiente "src/app/services/spotify.service.ts".
   Sustituyes el string por el token que te han facilitado y ya deberías tener acceso a la API de sportify durante 1 hora. Cuando te expire, vuelves a solicitar otro token.
5. Para solicitar el token, yo usé la herramienta POSTMAN y debes hacer lo siguiente:
   - Realizar una petición POST a esta url https://accounts.spotify.com/api/token
   - Enviar a través del BODY/ x-www-form-urlencoded los siguientes parámetros:
   
      KEY           |  VALUE
      -----------------------------------
      grant_type    |  client_credentials
      client_id     |  (aquí introduces el client id que te dieron con las credenciales en el registro)
      client_secret |  (aquí introduces el client secret que te dieron con las credenciales en el registro)
      
   - Haces click en enviar y deberías recibir como respuesta un objeto con un campo llamado "access_token" que contendrá un string bastante largo, este es tu token.
