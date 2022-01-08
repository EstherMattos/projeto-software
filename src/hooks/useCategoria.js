//tentando fazer a query das categorias e extrair os dados para uma classe

import { useState, useEffect } from 'react';
import{db} from '../core/conexao';
import {collection, getDocs} from 'firebase/firestore';

function useCategoria () {

  const [categoria,setCategoria] = useState([]);
  const categoriaRef = collection(db,"categoria");


  useEffect(() => {

    const getCategoria = async () =>{
      const data = await getDocs(categoriaRef);
      
      setCategoria( 
        data.docs.map ( (doc) => ({
          ...doc.data(),
          id: doc.id
          })
        )
      )
        
      console.log('useEffect');
      console.log(categoria);

    }

    getCategoria();

  }, []);

  return categoria;

}
  export default useCategoria;

/* - - - - - TESTES ANTIGOS - - - - -

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();
const categoria = firestore.collection('categoria');
const query = categoria.orderBy('createdAt').limit(25);

const [categoria] = useCollectionData(query, { idField: 'id' });

*/
/*

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
}*/