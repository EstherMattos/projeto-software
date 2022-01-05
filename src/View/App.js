import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDQtQtQiIjDUs2oNd0aFYsLT97yrgGYToo",
  authDomain: "wings-d53c0.firebaseapp.com",
  projectId: "wings-d53c0",
  storageBucket: "wings-d53c0.appspot.com",
  messagingSenderId: "693489427088",
  appId: "1:693489427088:web:7a45e080aff79f42572e15"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  
  

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Teste</h1>
      </header>

      <section>
        {user ? <Logado /> : <SignIn />}
      </section>

    </div>
  );
}

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
    </>
  )

}

export default App;
