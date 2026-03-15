import express from "express";

const host = "0.0.0.0";
const porta = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

const fornecedores = [];

const menu = `
<div class="container mt-3">
  <a href="/">Home</a> |
  <a href="/cliente">Cliente</a> |
  <a href="/fornecedor">Fornecedor</a> |
  <a href="/login">Login</a> |
  <a href="/logout">Logout</a>
  <hr>
</div>
`;

app.get("/", (req, res) => {
    res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Página Inicial</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>

      <body>
        ${menu}

        <div class="container mt-5 text-center">
          <h1 class="mb-4">Bem-vindo ao sistema</h1>
          <p class="lead">Use o menu para acessar as funcionalidades.</p>
        </div>
      </body>
    </html>
  `);
});

app.get("/cliente", (requisicao, resposta) => {
    resposta.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Cadastro de Cliente</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>

      <body>
        ${menu}

        <div class="container mt-4">
          <h1 class="mb-4">Cadastro de Cliente</h1>

          <form method="POST" action="/cliente" class="row g-3">

            <div class="col-md-6">
              <label class="form-label">Primeiro nome</label>
              <input class="form-control" type="text" name="primeiroNome">
            </div>

            <div class="col-md-6">
              <label class="form-label">Último nome</label>
              <input class="form-control" type="text" name="ultimoNome">
            </div>

            <div class="col-md-6">
              <label class="form-label">E-mail</label>
              <input class="form-control" type="text" name="email">
            </div>

            <div class="col-md-6">
              <label class="form-label">Telefone</label>
              <input class="form-control" type="text" name="telefone">
            </div>

            <div class="col-12">
              <label class="form-label">Endereço</label>
              <input class="form-control" type="text" name="endereco">
            </div>

            <div class="col-md-6">
              <label class="form-label">Cidade</label>
              <input class="form-control" type="text" name="cidade">
            </div>

            <div class="col-md-4">
              <label class="form-label">Estado</label>
              <input class="form-control" type="text" name="estado">
            </div>

            <div class="col-md-2">
              <label class="form-label">CEP</label>
              <input class="form-control" type="text" name="cep">
            </div>

            <div class="col-12">
              <button class="btn btn-primary">Cadastrar</button>
            </div>

          </form>

        </div>
      </body>
    </html>
  `);
});

app.post("/cliente", (req, res) => {

    const dados = req.body;

    res.send(`
    <html>
      <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>

      <body>
        ${menu}

        <div class="container mt-4">

        <h2>Dados cadastrados</h2>

        Primeiro nome: ${dados.primeiroNome}<br>
        Último nome: ${dados.ultimoNome}<br>
        Email: ${dados.email}<br>
        Telefone: ${dados.telefone}<br>
        Endereço: ${dados.endereco}<br>
        Cidade: ${dados.cidade}<br>
        Estado: ${dados.estado}<br>
        CEP: ${dados.cep}<br><br>

        <a class="btn btn-primary" href="/cliente">Voltar</a>

        </div>
      </body>
    </html>
  `);

});

app.get("/fornecedor", (req, res) => {

    let tabela = "";

    for (let i = 0; i < fornecedores.length; i++) {

        tabela += `
        <tr>
        <td>${fornecedores[i].cnpj}</td>
        <td>${fornecedores[i].razaoSocial}</td>
        <td>${fornecedores[i].nomeFantasia}</td>
        <td>${fornecedores[i].cidade}</td>
        <td>${fornecedores[i].uf}</td>
        <td>${fornecedores[i].email}</td>
        <td>${fornecedores[i].telefone}</td>
        </tr>
        `;
    }

    if (tabela == "") {
        tabela = `<tr><td colspan="7" class="text-center">Nenhum fornecedor cadastrado</td></tr>`;
    }

    res.send(`
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Fornecedor</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>

      <body>
        ${menu}

        <div class="container mt-4">

        <h1>Cadastro de Fornecedor</h1>

        <form method="POST" action="/fornecedor" class="row g-3">

        <div class="col-md-4">
        <label class="form-label">CNPJ</label>
        <input class="form-control" type="text" name="cnpj">
        </div>

        <div class="col-md-8">
        <label class="form-label">Razão Social</label>
        <input class="form-control" type="text" name="razaoSocial">
        </div>

        <div class="col-md-6">
        <label class="form-label">Nome Fantasia</label>
        <input class="form-control" type="text" name="nomeFantasia">
        </div>

        <div class="col-md-6">
        <label class="form-label">Endereço</label>
        <input class="form-control" type="text" name="endereco">
        </div>

        <div class="col-md-4">
        <label class="form-label">Cidade</label>
        <input class="form-control" type="text" name="cidade">
        </div>

        <div class="col-md-2">
        <label class="form-label">UF</label>
        <input class="form-control" type="text" name="uf">
        </div>

        <div class="col-md-3">
        <label class="form-label">CEP</label>
        <input class="form-control" type="text" name="cep">
        </div>

        <div class="col-md-6">
        <label class="form-label">Email</label>
        <input class="form-control" type="text" name="email">
        </div>

        <div class="col-md-6">
        <label class="form-label">Telefone</label>
        <input class="form-control" type="text" name="telefone">
        </div>

        <div class="col-12">
        <button class="btn btn-primary">Cadastrar</button>
        </div>

        </form>

        <h2 class="mt-5">Fornecedores cadastrados</h2>

        <table class="table table-bordered mt-3">

        <tr>
        <th>CNPJ</th>
        <th>Razão Social</th>
        <th>Nome Fantasia</th>
        <th>Cidade</th>
        <th>UF</th>
        <th>Email</th>
        <th>Telefone</th>
        </tr>

        ${tabela}

        </table>

        </div>
      </body>
    </html>
  `);

});

app.post("/fornecedor", (req, res) => {

    const dados = req.body;

    let erros = "";

    if (dados.cnpj == "") erros += "<li>CNPJ não preenchido.</li>";
    if (dados.razaoSocial == "") erros += "<li>Razão Social não preenchida.</li>";
    if (dados.nomeFantasia == "") erros += "<li>Nome Fantasia não preenchido.</li>";
    if (dados.endereco == "") erros += "<li>Endereço não preenchido.</li>";
    if (dados.cidade == "") erros += "<li>Cidade não preenchida.</li>";
    if (dados.uf == "") erros += "<li>UF não preenchida.</li>";
    if (dados.cep == "") erros += "<li>CEP não preenchido.</li>";
    if (dados.email == "") erros += "<li>Email não preenchido.</li>";
    if (dados.telefone == "") erros += "<li>Telefone não preenchido.</li>";

    if (erros != "") {

        res.send(`
        <html>
        <body>

        ${menu}

        <div class="container mt-4">

        <div class="alert alert-danger">
        <h4>Campos não preenchidos:</h4>
        <ul>${erros}</ul>
        </div>

        <a class="btn btn-primary" href="/fornecedor">Voltar</a>

        </div>

        </body>
        </html>
        `);

    } else {

        fornecedores.push(dados);

        res.redirect("/fornecedor");

    }

});

app.get("/login", (req, res) => {

    res.send(`
    <html>
      <head>
      <meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>

      <body class="bg-light">

      ${menu}

      <div class="container mt-5" style="max-width:400px;">

      <h2 class="mb-4">Login</h2>

      <form method="POST" action="/login">

      <input class="form-control mb-3" type="text" name="usuario" placeholder="Usuário">

      <input class="form-control mb-3" type="password" name="senha" placeholder="Senha">

      <button class="btn btn-primary w-100">Entrar</button>

      </form>

      </div>

      </body>
    </html>
  `);

});

app.post("/login", (req, res) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    let mensagem = "";
    let tipo = "";

    if (usuario == "admin" && senha == "123") {
        mensagem = "Login realizado com sucesso!";
        tipo = "success";
    } else {
        mensagem = "Usuário ou senha inválidos!";
        tipo = "danger";
    }

    res.send(`
    <html>

    <head>
<meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>

    ${menu}

    <div class="container mt-5">

    <div class="alert alert-${tipo}">
    ${mensagem}
    </div>

    <a class="btn btn-primary" href="/login">Voltar</a>

    </div>

    </body>

    </html>
  `);

});

app.get("/logout", (req, res) => {

    res.send(`
    <html>
    <body>

    ${menu}

    <div class="container mt-5">

    <div class="alert alert-success">
    Logout efetuado com sucesso!
    </div>

    </div>

    </body>
    </html>
  `);

});

app.listen(porta, host, () => {

console.log(`Servidor rodando em http://${host}:${porta}`);

});