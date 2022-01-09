import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;

/* firebase.initializeApp({
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
        <SignOut />
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
      <img src={auth.currentUser.photoURL}/>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
} */
