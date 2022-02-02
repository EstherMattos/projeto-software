// "FUNCIONAL"

/*Usa a conexão para acessar o DB e realizar operações como CRUD e retorna a
informação em formato json. A operação de Read não é feita aqui pois retorna
uma promessa, então é necessário o uso de Hooks, que também garantem a
atualização em tempo real.
 */

import{db} from '../core/conexao';

const Categoria_model = {
    
    // Cria categoria no banco
    
    async novaCategoria (nome, imagem) {
    
        db.collection('categoria').add({
          nome: nome,
          imagem: imagem
        })
      },

    // Altera categoria no banco
    
    async updateCategoria ( nome, imagem, id) {

        db.collection("categoria").doc(id).update({nome: nome,imagem: imagem});
    },

    // Deleta categoria do banco
    
    async deleteCategoria (id) {

        db.collection("categoria").doc(id).delete();
    },
}

export default Categoria_model;
