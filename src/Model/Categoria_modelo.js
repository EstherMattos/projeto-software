/* Create feito, o Read está junto do hook 'useCategoria'
caso feito aqui ele retorna uma "promise" e provavelmente teria que usar o hook
de qualquer forma
 */// ToDo: update e delete

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

/*
// Retorna uma 'promise' e nao funciona direito
async leTodaCategoria (nome, imagem, id) {

    const categoriaRef = collection(db,"categoria");

    const data = await getDocs(categoriaRef);

    const categoria =data.docs.map ( 
        (doc) => ({
        ...doc.data(),
        id: doc.id
        })
    )

    return await categoria;
},*/