//hook para ler as categorias do DB, retorna um array com elas

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