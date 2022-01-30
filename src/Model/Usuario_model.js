// "FUNCIONAL"

/*Usa a conexão para acessar o DB e realizar operações como CRUD e retorna a
informação em formato json. A operação de Read não é feita aqui pois retorna
uma promessa, então é necessário o uso de Hooks, que também garantem a
atualização em tempo real.
 */

import{db} from '../core/conexao';

const Usuario_model = {

    async novoUsuario (nome, email, senha) {
    
        db.collection('usuario').add({
          nome: nome,
          email: email,
          senha: senha
        })
      },

    async updateUsuario ( nome, email, senha, id) {

        db.collection("Usuario").doc(id).update({nome: nome, email: email, senha: senha});
    },

    async deleteUsuario (id) {

        db.collection("usuario").doc(id).delete();
    },
}

export default Usuario_model;