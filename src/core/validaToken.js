// DUMMY

/*Checa se o token enviado é igual ao guardado na sessão, para garantir que o usuário 
está realmente logado, validando o token e os seus dados.
*/

if (token == sessionStorage.getItem("token") && username == sessionStorage.getItem("username")){
    //continua com a solicitacao
    return true;
} else {
    //erro 404
    <Route path="*" component={NotFound} status={404} />
}