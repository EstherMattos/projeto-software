// "FUNCIONAL"

/*Usa o autenticador do google para autenticar usuarios do sistema e
gerar um token. Essa classe é usada no login de usuários.
*/
import { auth } from '../core/conexao'

const AuthenticationService = {
  async isLoggedIn () {
    const user = await auth().currentUser
    return !!user
  },

  observeStatus (callback) {
    auth().onAuthStateChanged(callback)
  },
 
  async loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider();

    return auth()
      .signInWithPopup(provider)
      .then(res => {
        const token = res.credential.accessToken
        const user = res.user

        return {
          token, user
        }
      })
  }
}

export default AuthenticationService