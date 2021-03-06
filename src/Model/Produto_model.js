// "FUNCIONAL"

/*Usa a conexão para acessar o DB e realizar operações como CRUD e retorna a
informação em formato json. A operação de Read não é feita aqui pois retorna
uma promessa, então é necessário o uso de Hooks, que também garantem a
atualização em tempo real.
 */

import{db} from '../core/conexao';

const Produto_model = {
    
    //Insere produto no banco
    
    async novoProduto (nome, imagem, preco, categoria) {
    
        db.collection('produto').add({
          nome: nome,
          imagem: imagem
        })
      },
    
    //Altera produto no banco
    
    async updateProduto ( nome, imagem, id) {

        db.collection("produto").doc(id).update({nome: nome,imagem: imagem});
    },
    
    //Deleta produto do banco
    
    async deleteProduto (id) {

        db.collection("produto").doc(id).delete();
    },
}

export default Produto_model;
