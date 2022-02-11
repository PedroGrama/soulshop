const { model, Schema } = require("mongoose");

const Cupom = model(
  "Cupom",
  new Schema({
    codCupom: {type: String, required: true},
    dataValidade: { type: String, required: true },
    descricao: { type: String, required: true },
    quantidade: { type: Number, required: true },
    valor: { type: Number, required: true },
  })
);

module.exports = Cupom;
