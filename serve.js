const handler = require("serve-handler");
const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((request, response) =>
  handler(request, response, { public: "dist" })
);

server.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});
