const Cupom = require("../models/Cupom");

class CupomController {

  
    static async paginaCupom(req, res) {
        let query = {};
        const { codigo } = req.query;
    

      if(codigo){
        query = { codCupom: { $regex: `${codigo}`, $options: "i" } };
      }

      const cupom = await Cupom.find(query).lean();
      res.render("cupom", {cupom, codigo }); 
    }

    static async paginaAdicionarCupom(req, res){
      res.render("add_cupom")
    }

    static async addCupom(req, res) {
      const { codCupom, dataValidade, descricao, quantidade, valor } = req.body;
      const cupom = Cupom( { codCupom, dataValidade, descricao, quantidade, valor });
      await cupom.save();
  
      res.redirect("/cupom");
    }

    
    static async paginaEditCupom(req, res){//irar trazer e mostrar os produtos
      const { id } = req.params;
      const cupom = await Cupom.findById(id).lean();
  
      res.render("editar_cupom", { cupom });
    }
  
    static async editCupom(req, res){//ira modificar e alterar os produtos
      const { id, codCupom, dataValidade, descricao, quantidade,valor } = req.body;
  
      await Cupom.findByIdAndUpdate(id, { codCupom, dataValidade, descricao, quantidade,valor });
  
      res.redirect("/cupom");
    }
  
    static async deleteCupom(req, res){
      const { id } = req.body;
      await cupom.findByIdAndDelete(id);
      res.redirect("/cupom")
    }
  }

  module.exports = CupomController