//tentando fazer a query das categorias e extrair os dados para uma classe
/*

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();
const categoria = firestore.collection('categoria');
const query = categoria.orderBy('createdAt').limit(25);

const [categoria] = useCollectionData(query, { idField: 'id' });

*/
import { auth, db, firebase } from '../core/conexao';

const CategoriaModel = {
  async getCategoria() {
    
    return db
      .collection('categoria')
      .then(categoria => {
        let _categoria = []
        categoria.forEach(categoria => {
          _categoria.push(categoria.data())
        })
        return _categoria
      })
  },

  observeCategoria (callback) {
    db.collection('categoria').onSnapshot(callback)
  },

  async novaCategoria (categoria) {
    const user = auth().currentUser
    //ToDo: checa se o usuario eh admin

    db.collection('categoria').add({
      categoria
      //categoria.nome,
      //categoria.imagem
    })
  },
}

export default CategoriaModel