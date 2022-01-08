//por favor nao bugue denovo

import{db} from '../core/conexao';
import {collection} from 'firebase/firestore';

const Categoria_model = {

    async novaCategoria (nome, imagem) {
    
        db.collection('categoria').add({
          nome: nome,
          imagem: imagem
        })
      },
}

export default Categoria_model;