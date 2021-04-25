const http = require("http");

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  const { method } = request;

  if (method === "GET") {
    // Response ketika GET
    response.end("<h1>Hello!</h1>");
  }

  if (method === "POST") {
      // Response ketika POST
    response.end("<h1>Hai!</h2>");
  }

  if (method === "PUT") {
      // Response ketika PUT
    response.end("<h1>Bonjour!</h1>");
  }

  if (method === "DELETE") {
      // Response ketika DELETE
    response.end("<h1>Salam!</h1>");
  }

  //  Anda bisa mengevaluasi tipe method lainnya
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
