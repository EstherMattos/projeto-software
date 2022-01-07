import './App.css';
import AuthenticationService from '../Model/autenticacao_google';
import Categoria from './Categoria';
import { useState, useEffect } from 'react';

import{db} from '../core/conexao';
import {collection, getDocs} from 'firebase/firestore';

//import { useAuthState} from 'react-firebase-hooks/auth';
//import {useCollectionData} from 'react-firebase-hooks/firestore';

function App() {
  
  const [categoria,setCategoria] = useState([]);
  const categoriaRef = collection(db,"categoria")


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

      console.log(data);
      console.log(categoria);
    }

    getCategoria();

  }, []);

  /*
  const [logged, setLogged] = useState(AuthenticationService.isLoggedIn())
  
  AuthenticationService.observeStatus(user => {
    setLogged(!!user)
  })
  */
  return (
    <div className="App">
      <header>
        <h1>Teste</h1>
      </header>

      <section>
        {
          categoria.map( (cat) => {
            
            return (
              <div>
                <h1>Categoria: {cat.nome}</h1>
                <img src={cat.imagem} alt={cat.nome}/>
              </div>
            );
          })
        }
      </section>

    </div>
  );
}

/*
function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function Logado() {

  return (
    <>
      <p>Logado com sucesso pelo google</p>
      <p>Bem vindo(a) {auth.currentUser.displayName}</p>
      <img src={auth.currentUser.photoURL}/>
      <h1>{auth.currentUser.uid}</h1>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}
*/

export default App;
