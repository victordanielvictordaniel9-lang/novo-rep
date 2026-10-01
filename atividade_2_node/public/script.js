function MostrarAutores() {
     fetch("/autores").then(res => res.json()).then(autores => {

    const tabela = document.getElementById("tabelaAutores");

    autores.forEach(autor => {

        tabela.innerHTML += `
            <tr>
                <td>${autor.id_autor}</td>
                <td>${autor.nome}</td>
                <td>${autor.nacionalidade}</td>
            </tr>
        `;

    });

})
.catch(erro => {
    console.log(erro);
    alert("Erro ao carregar os autores.");
});
}

function MostrarCategorias() {
    fetch("/categorias").then(res => res.json()).then(categorias => {

        const tabela = document.getElementById("tabelaCategorias");

        categorias.forEach(categoria => {

            tabela.innerHTML += `
                <tr>
                    <td>${categoria.id_categoria}</td>
                    <td>${categoria.nome}</td>
                    <td>${categoria.descricao}</td>
                </tr>
            `;

        });

    })
    .catch(erro => {
        console.log(erro);
        alert("Erro ao carregar as categorias.");
    });
}

function MostrarLivros() {
    fetch("/livros").then(res => res.json()).then(livros => {

        const tabela = document.getElementById("tabelaLivros");

        livros.forEach(livro => {

            tabela.innerHTML += `
                <tr>
                    <td>${livro.id_livro}</td>
                    <td>${livro.titulo}</td>
                    <td>${livro.genero}</td>
                    <td>${livro.autor}</td>
                    <td>${livro.categoria}</td>
                    <td>${livro.ano_publicacao}</td>
                    <td>${livro.quantidade_disponivel}</td>
                </tr>
            `;

        });

    })
    .catch(erro => {
        console.log(erro);
        alert("Erro ao carregar os livros.");
    });
}


function MostrarUsuarios() {
    fetch("/usuarios").then(res => res.json()).then(usuarios => {

        const tabela = document.getElementById("tabelaUsuarios");

        usuarios.forEach(usuario => {

            tabela.innerHTML += `
                <tr>
                    <td>${usuario.id_usuario}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.telefone}</td>
                    <td>${usuario.data_cadastro}</td>
                </tr>
            `;

        });

    })
    .catch(erro => {
        console.log(erro);
        alert("Erro ao carregar os usuários.");
    });
}

function MostrarEmprestimos() {
    fetch("/emprestimos").then(res => res.json()).then(emprestimos => {

        const tabela = document.getElementById("tabelaEmprestimos");

        emprestimos.forEach(emprestimo => {

            tabela.innerHTML += `
                <tr>
                    <td>${emprestimo.id_emprestimo}</td>
                    <td>${emprestimo.usuario}</td>
                    <td>${emprestimo.livro}</td>
                    <td>${emprestimo.data_emprestimo}</td>
                    <td>${emprestimo.data_devolucao_prevista}</td>
                    <td>${emprestimo.data_devolucao_real}</td>
                </tr>
            `;

        });

    })
    .catch(erro => {
        console.log(erro);
        alert("Erro ao carregar os empréstimos.");
    });
}
