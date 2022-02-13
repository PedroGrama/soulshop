const { model, Schema } = require("mongoose");

const Lojas = model(
  "Loja",
  new Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    categoria: { type: String, required: true },
  })
);

module.exports = Lojas;
