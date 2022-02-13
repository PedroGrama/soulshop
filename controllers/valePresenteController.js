const ValePresente = require("../models/valePresente");

class valePresenteController {
  static async paginaValePresente(req, res) {
    let query = {};
    const { codigoValePresente } = req.query;

    if (codigoValePresente) {
      query = { codigo: { $regex: `${codigoValePresente}`, $options: "i" } };
    }

    const valepresente = await ValePresente.find(query).lean();
    res.render("vale_presente", { valepresente, codigoValePresente });
  }

  static async paginaAdicionarValePresente(req, res) {
    res.render("add_vale_presente");
  }

  static async addValePresente(req, res) {
    const { codigo, validade, valor, quantidade, descricao } = req.body;
    const valePresente = ValePresente({ codigo, validade, valor, quantidade, descricao  });
    await valePresente.save();

    res.redirect("/valepresente");
  }
  static async paginaEditValePresente(req, res){//irar trazer e mostrar os produtos
    const { id } = req.params;
    const valepresente = await ValePresente.findById(id).lean();

    res.render("editar_vale_presente", { valepresente });
  }

  static async editValePresente(req, res){//ira modificar e alterar os produtos
    const { id, codigo, validade, valor, quantidade, descricao} = req.body;

    await ValePresente.findByIdAndUpdate(id, {codigo, validade, valor, quantidade, descricao});

    res.redirect("/valepresente");
  }

  static async deleteValePresente(req, res){
    const { id } = req.body;
    await ValePresente.findByIdAndDelete(id);
    res.redirect("/valepresente")
  }
}

module.exports = valePresenteController;