//Testes CRUD

import './App.css';
import Categoria from './Categoria';
import useCategoria from '../hooks/useCategoria';

function App() {

  const categorias = useCategoria();

  //logs para teste
    console.log(categorias);
    console.log('teste');

  return (
    <div className="App">
      <header>
        <h1>Teste</h1>
      </header>

      <section>
        <Categoria categorias={categorias} />
      </section>

    </div>
  );
}

export default App;


/* - - - - - CODIGO ANTIGO - - - - -
  const [logged, setLogged] = useState(AuthenticationService.isLoggedIn())
  
  AuthenticationService.observeStatus(user => {
    setLogged(!!user)
  })
  */
/* - - - - - CODIGO ANTIGO - - - - -

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