// "FUNCIONAL"

/*Usa a conexão para acessar o DB e realizar operações como CRUD e retorna a
informação em formato json. A operação de Read não é feita aqui pois retorna
uma promessa, então é necessário o uso de Hooks, que também garantem a
atualização em tempo real.
 */

import{db} from '../core/conexao';

const Admin_model = {
    
    // Cria administrador no banco
    
    async novoAdmin (nome, email, senha) {
    
        db.collection('admin').add({
          nome: nome,
          email: email,
          senha: senha
        })
      },
    
    // Altera administrador no banco
    
    async updateAdmin ( nome, imagem, id) {

        db.collection("admin").doc(id).update({nome: nome, email: email, senha: senha});
    },
    
    //Apaga admin do banco
    
    async deleteAdmin (id) {

        db.collection("admin").doc(id).delete();
    },
}

export default Admin_model;
