import express from "express";
import routes from "./routes";

import "./database/index";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at ${PORT}`);
});
