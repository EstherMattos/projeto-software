// "FUNCIONAL"

/*Hook react usado para ler as categorias do DB e atualizar mudanças em tempo real. Ele
é chamado por categoria_controle para o READ e implementa o padrão de projeto Observador
da GOF.
*/

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

    }

    getCategoria();

  }, []);

  return categoria;

}

export default useCategoria;