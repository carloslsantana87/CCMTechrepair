express from "express";
routes from "./implementacaorota/routes.js";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));