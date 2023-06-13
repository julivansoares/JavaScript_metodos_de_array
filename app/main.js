let livros =[]

const endpointDaAPI= 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){ //  como é uma requisição utilizo o async
    const res = await fetch(endpointDaAPI) // utilizo o await para espera a resposta  
    livros= await res.json() // coloco agora os dados dentro do meu array

    let livrosComDesconto = aplicarDesconto(livros)

    exibirOsLivrosNaTela(livrosComDesconto)
}


