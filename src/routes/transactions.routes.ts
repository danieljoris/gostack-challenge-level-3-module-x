import { Router, response } from "express";

const transactionsRouter = Router();
const transactionTypes = ["income", "outcome"];

transactionsRouter.get("/", async (req, res) => {
  try {
    const { title, value, type, category } = req.body;

    if (type && !transactionTypes.includes(type))
      return res.status(400).json({ error: "Tipo da transação é inválido." });

    return res.json(req.body);
  } catch ({ message }) {
    return res.status(400).json({ error: message });
  }
});

transactionsRouter.post("/", async (req, res) => {
  return response.write("bacate");
});

transactionsRouter.delete("/", async (req, res) => {
  try {
    const { id } = req.params;

    // deletar o baguio
  } catch ({ message }) {
    return res.status(400).json({ error: message });
  }
});

transactionsRouter.post("/import", async (req, res) => {
  try {
  } catch ({ message }) {
    return res.status(400).json({ error: message });
  }
});

export default transactionsRouter;
