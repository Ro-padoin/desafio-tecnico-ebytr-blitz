function SignIn() {
  return (
    <div>
      <h2>Faça seu login aqui</h2>
    </div>
  );
}

// encaminha os dados para a rota de auth/signin DB - post
// DB controller --> Service --> Service cadastra o usuario e ja faz o login
// Model tera uma funcao para cadastro e outra para login

export default SignIn;
