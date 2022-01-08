//nao tem utilidade por enquanto

import { db } from '../firebase'

const MessagingService = {
  async getCategoria() {
    
    return db
      .collection('categoria')
      .then(categorias => {
        let _categorias = []
        categorias.forEach(categorias => {
          _categorias.push(categorias.data())
        })
        return _categorias
      })
  },

  observeMessages (callback) {
    db.collection('categoria').onSnapshot(callback)
  },

  async sendMessage (entrada) {

    db.collection('categoria').add({
      entrada
    })
  }
}

export default MessagingService