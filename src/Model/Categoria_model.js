/* Create feito, o Read está junto do hook 'useCategoria'
caso feito aqui ele retorna uma "promise" e provavelmente teria que usar o hook
de qualquer forma
 */

import{db} from '../core/conexao';
import {collection, getDocs} from 'firebase/firestore';

const Categoria_model = {

    async novaCategoria (nome, imagem) {
    
        db.collection('categoria').add({
          nome: nome,
          imagem: imagem
        })
      },

    async updateCategoria ( nome, imagem, id) {

        db.collection("categoria").doc(id).update({nome: nome,imagem: imagem});
    },

    async deleteCategoria (id) {

        db.collection("categoria").doc(id).delete();
    },
}

export default Categoria_model;