// DUMMY

/*Essa classe será responsável por lidar com as rotas do site e com o tratamento de URL,
para garantir maior facilidade na gestão de rotas e maior segurança em esconder os nomes
reais das classes, parametros e maior legibilidade das URLs pelos usuarios. Exemplo:
uma URL wings.com/Produto_control/ProdutoPaging/getPaged?hashid=pASpoK214qspdaoj124A&quantidade=20
seria transformada em wings.com/Produtos/1
*/

//Por enquanto as rotas estão sendo implementadas em App.js
import { Routes } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
    </BrowserRouter>,
    rootElement,
  );