const Lojas = require("../models/Lojas");

class LojasController {
  static async paginaLojas(req, res) {
    let query = {};
    const { nomeLoja } = req.query;

    if (nomeLoja) {
      query = { nome: { $regex: `${nomeLoja}`, $options: "i" } };
    }

    const lojas = await Lojas.find(query).lean();
    res.render("lojas", { lojas, nomeLoja });
  }

  static async paginaAdicionarLojas(req, res) {
    res.render("add_lojas");
  }

  static async addLojas(req, res) {
    const { nome, endereco, categoria } = req.body;
    const loja = Lojas({ nome, endereco, categoria });
    await loja.save();

    res.redirect("/lojas");
  }
  static async paginaEditLojas(req, res){//irar trazer e mostrar os produtos
    const { id } = req.params;
    const lojas = await Lojas.findById(id).lean();

    res.render("editar_lojas", { lojas });
  }

  static async editLojas(req, res){//ira modificar e alterar os produtos
    const {id, nome, endereco, categoria } = req.body;

    await Lojas.findByIdAndUpdate(id, { nome, endereco, categoria });

    res.redirect("/lojas");
  }

  static async deleteLojas(req, res){
    const { id } = req.body;
    await Lojas.findByIdAndDelete(id);
    res.redirect("/lojas")
  }
}

module.exports = LojasController;
