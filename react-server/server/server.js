// server.js
const port = 3050;
const uploadPath = "uploads";

const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "public/" + uploadPath));
  },
  filename: function (req, file, cb) {
    const fileName =
      file.fieldname + "-" + Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

var upload = multer({ storage });

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.db = router.db;
server.use(middlewares);
server.use(upload.any());
server.use(auth);
server.use((req, res, next) => {
  if (req.method === "POST" && req.originalUrl === "/files") {
    // req.body.createdAt = Date.now()
    req.body.filename = "/" + uploadPath + "/" + req.files[0].filename;
  }
  // Continue to JSON Server router
  next();
});
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`);
});
