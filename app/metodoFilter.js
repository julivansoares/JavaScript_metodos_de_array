const botoes = document.querySelectorAll('.btn'); // aqui faço o querrySelectorAll em todos os botoes


botoes.forEach(btn=>btn.addEventListener('click',filtrarLivros)) // aqui eu faço o forEach no array de botoes faço btn=>btn.addEventListener('click',filtrarLivros)) toda vez que o botao é clicado chamo a função





function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id); // this.id serve para indwentificar o botao clicado toda vez que a func é chamada ai guardo esse id
    const categoria =elementoBtn.value // agora pegor o valor desse id que é a categoria de cada botão ex(front, back,dados) salvo em uma variavel
    const livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria) // agora que tenho a categoria do livro clicado trago esse array com esses livros
    console.log(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
     
    if(categoria=='disponivel'){
     const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
      exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal)
    }
}


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal){
    valorTotalDeLivrosDisponivel.innerHTML=`
    <section id="valor_total_livros_disponiveis">
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
    </div>
  </section>
    `
}