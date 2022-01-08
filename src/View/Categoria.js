const Categoria = (props) => {

  console.log(props.categorias);

  const categorias = props.categorias;

  return <div className="Categoria">
    {
      categorias.map( (cat) => {
        
        return (
          <div>
            <h1>Categoria: {cat.nome}</h1>
            <img src={cat.imagem} alt={cat.nome}/>
          </div>
        );
      })
    }
  </div>
}

export default Categoria;