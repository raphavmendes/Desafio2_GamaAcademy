function cadastrar(){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser .push(
    {
        nomeCad: nome.value,
        cpfCad: cpf.value,
        enderecoCad: endereco.value,
        emailCad: email.value,
        senhaCad: senha.value
    }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    alert('Cliente Registrado')
}

function cadastrar2(){
    let listaProduct = JSON.parse(localStorage.getItem('listaProduct') || '[]')

    listaProduct .push(
    {
        produtoCad: produto.value,
        modeloCad: modelo.value,
        marcaCad: marca.value,
        precoCad: preco.value,
    }
    )
    localStorage.setItem('listaProduct', JSON.stringify(listaProduct))
    alert('Produto Registrado')
}