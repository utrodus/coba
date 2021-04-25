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
      // * Pertama, kita deklarasikan variabel body dan inisialisasikan nilainya dengan array kosong. Ini berfungsi untuk menampung buffer pada stream. 
      let body = [];

      // * Lalu, ketika event data terjadi pada request, kita isi array body dengan chunk (potongan data) yang dibawa callback function pada event tersebut.
      request.on('data', chunk =>{
        body.push(chunk);
      });

      // * Terakhir, ketika proses stream berakhir, maka event end akan terbangkitkan. 
      // * Di sinilah kita mengubah variabel body yang sebelumnya menampung buffer menjadi data sebenarnya dalam bentuk string melalui perintah Buffer.concat(body).toString().
      request.on('end', ()=>{
        body = Buffer.concat(body).toString();
        const {name} = JSON.parse(body);
        response.end(`<h1>Hai ${name}!</h1>`);
      });
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
