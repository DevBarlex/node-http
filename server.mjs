import http from 'node:http'
import objeto from './data.mjs'

const server = http.createServer((req, res) => {
  console.log('request recieved')
// Enviar la respuesta con la plantilla HTML
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${objeto.title}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          color: #333;
          padding: 20px;
        }
        h1 {
          color: #555;
        }
        .content {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
      </style>
    </head>
    <body>
      <h1>${objeto.title}</h1>
      <h2>${objeto.subtitle}</h2>
      <div class="content">
        <p>${objeto.description}</p>
        <p><strong>Autor:</strong> ${objeto.author}</p>
        <p><strong>Fecha:</strong> ${objeto.date}</p>
      </div>
    </body>
    </html>
  `);
})

server.listen(0, '127.0.0.1', () => {
    console.log(
      `server listening on port http://127.0.0.1:${server.address().port}`
    );
  });

  