// DUMMY

/*Essa classe representa a tabela produto do DB, e o objeto produto pode
ser usado pelas demais classes e passado como parametro.
*/

class Produto {

    constructor(id, nome, imagem, categoria, estoque, preco) {
        this.imagem = imagem;
        this.categoria = categoria;
        this.estoque = estoque;
        this.preco = preco;
        this.nome = nome;
        this.id = id;
    }

}