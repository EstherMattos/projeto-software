// Create feito, o Read está junto do hook 'useCategoria' 
// ToDo: update e delete

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