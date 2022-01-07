//classe da categoria
/*
class categoria_class 
{
    String nome;
    String imagem;

    //construtor??
    function Categoria(props) {
    const { nome, imagem } = props.categoria;
    };
}*/

export class categoria_class {
    constructor(nome, imagem) {
      this.nome = nome;
      this.imagem = imagem;
    }
    
  }