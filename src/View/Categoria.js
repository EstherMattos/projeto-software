import CategoriaModel from "../Model/categoria_model";
import { auth, db, firebase } from '../core/conexao';

function Categoria () {

  return <div className="Categoria">
    <p>categoria</p>
    <p>
    {
      CategoriaModel.getCategoria
    }
    </p>
  </div>
}

export default Categoria