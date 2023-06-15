Como o javascrip dou ninamismo a minha pagina

CTRL + J = ABRE O TERMINAL NO VSCODE

fabio.costa@invitatech.com.br

suporte

////////////////////////////////////////////////////////////////////////////////////////////
                  LOCAL DA TECLA TEG SCRIPT


JavaScript que vamos adicionar depende de elementos que estão no body, por exemplo um querySelector que espera receber determinado seletor, o local mais apropriado para sua inserção é dentro da tag body e na linha anterior ao fechamento da tag </body>. No head podemos inserir scripts, porém eles não devem ter dependencias de elementos do body, por exemplo uma biblioteca de funcionalidades.


///////////////////////////////////////////////////////////////////////////////////////////
          ocument.querySelector(aqui dentro coloco ou nome da teg, classe ou id)

document.querySelector('.tecla_pom')= utilizando esse seletor posso buscar qualquer teg no meu codigo htm

<button onclick=​"alet" class=​"tecla tecla_pom">​Pom​</button>​



//////////////////////////////////////////////////////////////////////////////////////////
                GUARDANDO UMA FUNÇÃO DENTRO DO ONCLICK

EX:
            

function tocaSomPom(){
     document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play()
}


document.querySelector('.tecla_pom').onclick = tocaSomPom;  MODO CORRETO PQ AQUI EM GUARDO A FUNÇÃO DENTRO DO ONCLICK ELA SÓ É CHAMADA PELO ONCLIUCK 

document.querySelector('.tecla_pom').onclick = tocaSomPom(); MOODO ERRADO PQ ASSIM QUE CARREGAR O NAVEGADOR VAI EXECUTAR O PLAY QUANDO CARREGA ELE CHAMA A FUNÇÃO

document.querySelector('.tecla_clap').onclick =tocaSomClap;


//////////////////////////////////////////////////////


Eventos no teclado:
O que são eventos do teclado e como usá-los: onkeydowne onkeyup. Como adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList.

Condições no código e operadores lógicos:
O que é o objeto event, como declarar e acessar ele através do parâmetro de uma função atrelada a um evento. A estrutura condicional if e para que ele serve, além de conhecer o operador de igualdade ==, estritamente igual (===), e o operador or (||).

Mais condições:
A estruturas condicionais if e else juntas. O operador not equals (!=), operador lógico and (&&) e o valor null.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            JavaScript: manipulando o DOM



document.getElementById('producao').value="Teste JavaScript"
'Teste JavaScript' = aqui busquei a teg pelo id e alterei momentaneamente seu no pq foi no console do navegador

//////////////////////////////////

document.getElementsByClassName()= buscando pela classe.

/////////////////////////////////

Se realmente quisermos o id de produção, colocamos #producao ou .produção. E como no css, ele nos retorna o input cujo id é producao


document.querySelector('#producao')
<input type="submit" value="Teste JavaScript" class="producao" id="producao">

///////////////////////////
document.URL

ele nos retornará qual é a url que estamos usando no navegador.

///////////////////////////
document.title, ele retorna o título que está dentro da tag <title>

////////////////////////////////////////////////////////////////////////////

O DOM (Document Object Model) e o JavaScript, juntos, possuem grande poder de modificar dinamicamente a estrutura de um documento HTML. Sendo possível, por exemplo:

Adicionar/modificar/remover tags, textos, imagens e qualquer elemento no HTML.
Alterar estilos CSS da página.
Criar novos eventos HTML.
Vamos conferir formas de realizar os itens listados acima.

Métodos para selecionar elementos no HTML

document.getElementByID(id) - Recupera um elemento pelo ID.
document.getElementsByTagName(name) - Recupera um elemento pelo nome.
document.getElementsByClassName(name) - Recupera um elemento pelo nome da classe.
Propriedades e métodos para alterar elementos no HTML

element.innerHTML - Esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags.
element.innerText - Esta propriedade permite inserir textos no HTML.
element.value - Esta propriedade altera o valor de um elemento HTML
element.setAttribute(atributo, valor) - Este método altera o valor de um atributo de um elemento HTML.
Adicionando e excluindo elementos

document.write() - Escreve no fluxo de saída do HTML.
document.appendChild() - Adiciona um elemento HTML.
document.removeChild() - Remove um elemento HTML.
document.replaceChild() - Substitui um elemento HTML.
document.createElement() - Cria um elemento HTML.

/////////////////////////////////////////////////////////////   
                 arrow function


forma diferente de declaramos uma função anônima. No lugar de usarmos function(), nós abrimos parênteses e colocamos uma seta formada por um sinal de igual e um maior =>.

robotron.addEventLeitener("click", () => {
    console.log('Cliquei nno robô.')
})

///////////////////////////////////////////////////////////


No somar toda vez que clicarmos queremos pegar o braco e no value dele incrimentar 1.

precisamos tranformar o valor de braco.value em um número. A operção parseInt() faz isso.

somar.addEventListener("click", (evento) => {
    braco.value += 1;
})

///////////////////////////////////////////////////
         .textContent.

.textContent. Toda vez que é um input é um value e toda vez que é um texto, é um textContent.

EX
controle.forEach((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        console.log(evento.target.textContent);
    })
})

////////////////////////////////////////////////////////////
       chamar uma função dentro de uma função anonima

somar.addEventListener('click',()=>{manipulaDados("somar")})

subtrair.addEventListener('click',()=>{manipulaDados("subtrair")}

/////////////////////////////////////////////////////////////

Vamos fazer isso agora para vocÊs verem funcionando. Daremos um console.log() em evento.target, ou seja, no elemento que foi clicado. Porém, como queremos navegar pela árvore do html, vamos usar o parentNode porque queremos ir no pai, que é o parent.

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent)
        console.log(evento.target.parentNode)
    })
})
///////////////////////////////////////////////////////////////////////////////////////////////
                          Data-attributes


Data-attributes são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu data-attribute. Essa funcionalidade é bem recente no mundo do desenvolvimento, sendo lançada na última versão do HTML(HTML5).

Data-attributes não devem ser utilizados para dados visíveis, pois tecnologias de acessibilidade podem não identificar seus valores.

Sua estrutura é dividida em duas partes:

A primeira parte é o identificador deste dado, que consiste em data- + o nome de sua escolha que melhor identifica o tipo de dado a ser atribuído.
A segunda parte é o valor atribuído à este data-attribute, este valor deve sempre estar entre aspas “”, e dessa maneira é lido como uma string.


//////////////////////////////////////////////////////////////////////////////////////////////////////////
             JavaScript na Web: armazenando dados no navegador 

/////////////////////////////////////////////////////////////////////////////
                   Recuperando dados de um formulario

 <form action="" class="adicionar" id="novoItem">
   <label for="item">Nome</label>
   <input type="text" name="nome" id="nome">
   <label for="item">Quantidade</label>
   <input type="number" name="quantidade" id="quantidade">
   <input type="submit" value="Adicionar" class="cadastrar">              
</form>

const form = document.querySelector('#novoItem') =pego o id do form dou uma seleção nos dados desse form


agora abaixo crio pego os dados do form com addeventlist para ficar olhando o submiti do form crio uma aerofuction anonima para pegar esses dados crio um parametro evento na minha fuciotion para pegar esses dados, dou um console em evento.target pq os dados são guardados no target

OBS:evento.preventDefault() = UTILIZO PARA DAR UM STOP NO SUBMIT PQ QUANDO CLICO EM SUBMIT ELE ENVIA OS DADOS QUANDO NÃO TEM evento.preventDefault() NO CONSOLE DO NAVEGADOR NÃO CONSIGO VERIFICAR SE  ESTÁ FUNCIONANDO 



form.addEventListener("submit",(evento)=>{
    evento.preventDefault()
/////////////////////////////////////////////////    
NESSE CASO ABAIXO EM PEGO OS DADOS DO FORM DEACORDO A POSSIÇÃO NO FORM MAS SE O FOR ADICIONADO UM VO CAMPO

   console.log(evento.target[0].value) 
   console.log(evento.target[1].value)
/////////////////////////////////////////////////
AGORA PEGANDO ATRAVÉS DO ELEMENTS QUE É UM OBJETO QUE GUARDA OS DADOS DO FORM POSSO   PEGAR CADA DADO ATRÉS DOS NOMES DO CAMPO COMO PODE VE ABAIXO

    console.log(evento.target.elements['nome'].value);
    console.log(evento.target.elements['quantidade'].value);

})

//////////////////////////////////////////////////////////////////////////////////////////


const form = document.getElementById('novoItem');  // nesse caso aqui estou pegando a teg form

const lista =document.getElementById('lista'); // nesse caso aq1ui estou pegando a teg ul que contem minha lista


form.addEventListener("submit", (evento)=>{  // nesse caso pego minha teg form dou um addeventlist para escutar um evento que no caso é meu submint 
    
    evento.preventDefault(); // evento.preventDefault() utilizo para dar um stop no meu submint se não não consigo ve o que meu evento está trazendo
    criaElemento(evento.target.elements['nome'].value,evento.target.elements['quantidade'].value); //aqui chamo a função cria elementos já passando os dados no parametro

})


function criaElemento(nome, quantidade){
 //<li class="item"><strong>7</strong>Camisas</li> é padrão do form do meu html como está estruturado

    const novoItem = document.createElement('li');  // nessa parte estou criando uma nova teg dinamicamente
    
    novoItem.classList.add("item"); // agora estou adicionando uma classe a minha nova teg como está na estrutura do meu html           

    const numeroItem =document.createElement('strong');  // nessa parte estou criando uma outra teg dinamicamente
    
    numeroItem.innerHTML=quantidade; // nessa parte o innerHTML serve para colocar um dado dentro da minha teg html

    novoItem.appendChild(numeroItem);  // para colocar uma teg dentro da outra utilizo  appendChild

   // novoItem.innerHTML=numeroItem + nome // agora aqui estou colocando a teg strong que é a numeroItem dentro da minha teg li que é novoItem e colocando o nome que fica dentro da minha teg novoItem
     novoItem.innerHTML += nome
    console.log(novoItem)

    lista.appendChild(novoItem) aqui eu coloco minha li pronta dentro da minha lista
   
}

//////////////////////////////////////////////////////////////////////////////////////////////
                                      LOCALSTORAGE


const form = document.getElementById("novoItem"); // nesse caso aqui estou pegando a teg form

const lista = document.getElementById("lista"); // nesse caso aq1ui estou pegando a teg ul que contem minha lista

const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
  criaElemento(elemento)
});

form.addEventListener("submit", (evento) => {
  // nesse caso pego minha teg form dou um addeventlist para escutar um evento que no caso é meu submint

  evento.preventDefault(); // evento.preventDefault() utilizo para dar um stop no meu submint se não não consigo ve o que meu evento está trazendo

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  const existe = itens.find(elemento=>elemento.nome === nome.value)

  console.log(existe);

  const itemAtual = {
    // objeto armazena os dados que quero para o local storage pq vai ser mais de um dados
    nome: nome.value,
    quantidade: quantidade.value,
  };

  if (existe) {
    itemAtual.id = existe.id;

    atualizaElemento(itemAtual);

    itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    
  } else {
    itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id+1 :0;

    criaElemento(itemAtual); //aqui chamo a função cria elementos já passando os dados no parametro

    itens.push(itemAtual); // agora coloco meu objeto dentro do arrey item pq se eu colocar só o objeto meu local storage vai sobreescrever e com o array não
  }
  
  localStorage.setItem("itens", JSON.stringify(itens)); // salvando meu array de objetos dentro do meu local storage o local storage só aceita string então transformo meu array de objetos em string
  //localStorage.setItem("nome",nome); // aqui estou salvando um dadono meu localStorade ex("chave_identifica o dado",dado)

  nome.value = "";
  quantidade.value = "";
});

function criaElemento(item) {
  //<li class="item"><strong>7</strong>Camisas</li> é padrão do form do meu html como está estruturado

  const novoItem = document.createElement("li"); // nessa parte estou criando uma nova teg dinamicamente

  novoItem.classList.add("item"); // agora estou adicionando uma classe a minha nova teg como está na estrutura do meu html

  const numeroItem = document.createElement("strong"); // nessa parte estou criando uma outra teg dinamicamente

  numeroItem.innerHTML = item.quantidade; // nessa parte o innerHTML serve para colocar um dado dentro da minha teg html

  numeroItem.dataset.id= item.id

  novoItem.appendChild(numeroItem); // para colocar uma teg dentro da outra utilizo  appendChild

  
  novoItem.innerHTML += item.nome; // aqui coloco o nome dentro da teg strong

  novoItem.appendChild(botaoDelete(item.id))

  lista.appendChild(novoItem); // agora pego minha li que já contem o strong e jogo dentro da minha lista
}


function atualizaElemento (item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
    
}


function botaoDelete(id) {
  const elementoBotao = document.createElement("button");
  elementoBotao.innerHTML = "x";

  elementoBotao.addEventListener("click", function() {
     deletaElemento(this.parentNode, id);
  });

  return elementoBotao;
}

function deletaElemento(tag,id) {
  tag.remove();

  itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
  localStorage.setItem("itens", JSON.stringify(itens));
  console.log(itens);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                   JavaScript: consumindo e tratando dados de uma API


Por padrão o JavaScript funciona de modo síncrono, executando as tarefas linha a linha. Funções como as descritas anteriormente podem atrasar essa execução por terem um tempo de espera relativo a fatores externos (como o usuário ou a API). Para isso não afetar o nosso projeto, temos o que é chamado de programação assíncrona.




const consultaCep =  fetch('https://vdiacep.com.br/ws/01001000/json/')//O método global fetch()inicia o processo de busca de um recurso da rede, retornando uma promessa que é iniciada assim que a resposta está disponível.

.then(resposta => resposta.json()) // agora com o the(agora crio uma variavel que me trás a resposta ou o erro crio uma aero function e coloco a variavel.json() que retorna os danos em um obj)

.then(r =>console.log(r))// coloco novamente . the(dentro outra variavel crio outra aero function para dar um console.log(r) que me trás o obj) 
.catch(erro => console.log(erro));


   const consultaCep = fetch("https://viacep.com.br/ws/01001000/json/") //O método global fetch()inicia o processo de busca de um recurso da rede, retornando uma promessa que é iniciada assim que a resposta está disponível.
  .then((resposta) => resposta.json()) // agora com o the(agora crio uma variavel que me trás a resposta ou o erro crio uma aero function e coloco a variavel.json() que retorna os danos em um obj)
  .then((r) => {
    if (r.erro) {
      throw Error("Esse cep não existe!");
    } else 
       console.log(r);
  }) // coloco novamente . the(dentro outra variavel crio outra aero function para dar um console.log(r) que me trás o obj)

.catch((erro) => console.log(erro))

.finally(mensagem => console.log('Processamento concluido'));


console.log(consultaCep);





/* async function buscaEndereco(){
    O AWAIT SÓ É UTILIZADO DENTRO DE UMA FUNCTION ASYNC 
    const consultaCep = await fetch("https://viacep.com.br/ws/01001000/json/") 
    const consultaCepConvertida = await consultaCep.json()
    console.log(consultaCepConvertida);

    //A declaração async function define uma função assíncrona e o operador await é utilizado para esperar por uma Promise.
    // Dessa maneira, nossa requisição funcionará corretamente.
}
 */

  // Agora utilizando o try,catch para fazer a validação de erro
 //

async function buscaEndereco(cep){
    const mensagemErro = document.getElementById('erro');
      mensagemErro.innerHTML="";
    try {
      

    const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`) 
    const consultaCepConvertida = await consultaCep.json()

    if(consultaCepConvertida.erro){
        throw Error('Cep não existente!');
    
    }

    const cidade = document.getElementById('cidade');
    const logradouro = document.getElementById('endereco');
    const estado = document.getElementById('estado');

    cidade.value =consultaCepConvertida.localidade;
    logradouro.value =consultaCepConvertida.logradouro;
    estado.value= consultaCepConvertida.uf;

    } catch (erro) {
        mensagemErro.innerHTML=`<p>Cep inválido. Tente novamente </p>`
        console.log(erro)        
    }
    
}




   cep.addEventListener("focusout", ()=> buscaEndereco(cep.value));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                             JavaScript: métodos de array
 

//////////////////////////////////////////////////////////////
                     forEach()      

O método forEach() executa uma dada função em cada elemento de um array.

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//////////////////////////////////////////////////////////////
                       map()

O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
/////////////////////////////////////////////////////////////
           toFixed(2)   


livro.preco.toFixed(2)// utilizo para dizer quantos numeros iram aparecer após a virgula de valores


///////////////////////////////////////////////////////////////////////////////////////////
                   filter()

O filter()método cria uma cópia superficial de uma parte de uma determinada matriz, filtrada apenas para os elementos da matriz fornecida que passam no teste implementado pela função fornecida.

const idade = [10,5,18,32];

const podeDirigir = idade.filter(idade => {
   return idade >=18
});

console.log(podeDirigir);
// Expected output: Array ["exuberant", "destruction", "present"]


Result= > idade [18, 32]


const botoes = document.querySelectorAll('.btn'); // aqui faço o querrySelectorAll em todos os botoes


botoes.forEach(btn=>btn.addEventListener('click',filtrarLivros)) // aqui eu faço o forEach no array de botoes faço btn=>btn.addEventListener('click',filtrarLivros)) toda vez que o botao é clicado chamo a função





function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id); // this.id serve para indwentificar o botao clicado toda vez que a func é chamada ai guardo esse id
    const categoria =elementoBtn.value // agora pegor o valor desse id que é a categoria de cada botão ex(front, back,dados) salvo em uma variavel
    const livrosFiltrados = livros.filter((livro)=>{
        return livro.categoria == categoria // agora que tenho a categoria do livro clicado trago esse array com esses livros

     }) 
    exibirOsLivrosNaTela(livrosFiltrados)
     
}

//////////////////////////////////////////////////////////////////////////////////////////
                                   array.sort()

O método sort()ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável . A ordenação padrão é de acordo com a marcação de código unicode.



let precos = [29.98,11,101,110]


let precosOrdenados = precos.sort((a,b)=> a-b)

console.log(precosOrdenados)

11,29.98,101,110




const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');


btnOrdenarPorPreco.addEventListener('click',ordenarLivrosPorPreco)



function ordenarLivrosPorPreco(){
    let livrosOrdenados=livros.sort((a,b)=>{
        return a.preco-b.preco;
    })
  exibirOsLivrosNaTela(livrosOrdenados)
}



///////////////////////////////////////////////////////////////
                    ternario


let disponibilidade = livro.quantidade > 0 ? 'livros__imagens' : 'livros__imagens indisponivel'
                        CONDIÇÃO        SETRUE    FAÇAISSO   SEFALSE  FAÇAISSO  




///////////////////////////////////////////////////////////////////////////////////////////////
                                  Array.reduce()


O reduce()método executa uma função de retorno de chamada "redutor" fornecida pelo usuário em cada elemento da matriz, em ordem, passando o valor de retorno do cálculo no elemento anterior. O resultado final da execução do redutor em todos os elementos da matriz é um único valor.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Método .concat( )
[ 🏀 , 🏀 , 🏀 ].concat( [ ⚾ , ⚾ ] ) => [🏀 , 🏀 , 🏀, ⚾ , ⚾ ]

O método concat junta dois (ou mais) arrays em um novo array, sem alterar os já existentes.

Método .pop( )
[ 🏀 , 🏀 , 🏀, 🏀 , ⚽ ].pop( ) => [🏀 , 🏀 , 🏀, 🏀]

O método pop remove o último elemento de um array.

Método .push( )
[🏀 , 🏀 , 🏀].push(🏈) => [ 🏀 , 🏀 , 🏀, 🏈 ]

O método push adiciona um novo elemento no final do array, aumentando seu tamanho.

Método .includes()
[ ⚾ , 🏈, ⚽, 🏀 ].includes( ⚽ ) => true

O método includes verifica se um elemento está contido em um array e retorna true se o elemento estiver contido ou false caso contrário.

Método .fill( )
[ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽, 1 ) => [ ⚾ , ⚽, ⚽, 🏀 ] [ ⚾ , 🏈, ⚽, 🏀 ].fill( ⚽ ) => [ ⚽, ⚽, ⚽, ⚽ ]

O método fill preenche os elementos especificados em um array com um determinado valor.

Método .indexOf( )
[ ⚾ , 🏈, ⚽, 🏀, ⚽ ].indexOf( ⚽ ) => 2

O método indexOf retorna o primeiro índice encontrado de um valor especificado. Se o valor não for encontrado o método retorna -1.

Método .reverse( )
[ ⚾ ,🏈, ⚽, 🏀 ].reverse( ) => [🏀, ⚽,🏈, ⚾]

O método reverse inverte a ordem dos elementos de um array e substitui o array original.

Método .slice( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].slice( 1, 3 ) => [ 🏈, ⚽ ]

O método slice retorna elementos de um array, selecionados de determinada posição de início até determinada posição final. O elemento na posição final não é incluso.

Método .some( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].some( ( 🏐 ) ⇒ { return bola === 🏐 } ) => true

O método some verifica se algum elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para um dos elementos, e false se o teste for false para todos os elementos. Além disso, o método não executa a função callback para arrays vazios e não altera o array.

Método .join( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join() ⇒ ⚾,🏈,⚽,🏀,🏐 [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘ ’) ⇒ ⚾🏈⚽🏀🏐 [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].join(‘-’) ⇒ ⚾-🏈-⚽-🏀-🏐

O método join puxa elementos de um array e lista no formato de string, o resultado da operação puxou as propriedades do array e as listou de acordo com o que foi determinado.

Método .shift( )
[⚽, 🏐 , 🏐 , 🏐, 🏐].shift( ) ⇒[🏐 , 🏐 , 🏐, 🏐]

O método shift é parecido com o método .pop() mas ao invés de remover o último elemento do array, ele é usado para remover o primeiro elemento do array.

Método .unshift( )
[🏀 , 🏀 , 🏀].unshift(🏐) ⇒ [ 🏐, 🏀 , 🏀 , 🏀]

O método unshift é parecido com o que método .push() realiza, mas ao invés de adicionar no final do array, ele é utilizado para adicionar um elemento no início de um array.

Método .splice( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 1, 2, 🎱 ) ⇒ [⚾ ,🎱, 🏀, 🏐 ] [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].splice( 2, 3) ⇒ [⚾, 🏈 ]

Com o método splice conseguimos escolher um índice inicial e final para substituirmos valores no lugar deles. E também podemos remover itens, no segundo exemplo, foram removidos três elementos a partir da posição dois.

Método .length( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length(3) ⇒ ⚾ , 🏈, ⚽ [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].length() ⇒ 5

O método length define ou retorna o número de elementos em um array.

Método .sort( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].sort() ⇒ ⚽,⚾,🏀,🏈,🏐

O método sort ordena os elementos do próprio array e retorna o array. A ordenação padrão é de acordo com a pontuação de código unicode.

Método .toString( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].toString ⇒ ⚾,🏈,⚽,🏀,🏐

O método toString retorna uma string com todos os valores do array separados por vírgulas.

Método .findIndex( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].findIndex(emoji => emoji === “⚽”) ⇒ 2

O método findIndex retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

Método .find( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].find( bola ⇒ bola.formato === “redonda” ) => ⚾

O método find é utilizado para procurar um elemento dentro do array que atenda a condição atribuída a ele, que retornará o primeiro elemento encontrado. Ele percorre todo o array buscando o elemento que atenda a condição e retorna o primeiro que foi encontrado, caso não encontre retorna undefined. Este método não executa caso o array esteja vazio e não altera o array original

Método .at( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(-1) ⇒ 🏐 / [ ⚾ , 🏈, ⚽, 🏀, 🏐 ].at(1) ⇒ 🏈

O at acessar os elementos de um array usando um índice inteiro positivo e negativo, sendo que o índice negativo enumera os itens de trás para frente, portando o 🏐 está posicionado no índice -1.

Método .isArray( )
var bolas = [ ⚾ , 🏈, ⚽, 🏀, 🏐 ] Array.isArray(bolas) ⇒ true

O método Array.isArray verifica se a variável é um array e retorna true ou false.

Método .every( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].every( ( bola ) ⇒ { return bola === 🏐 } ) => false

O método every verifica se cada elemento do array passa em um teste. Esse teste é feito através de uma função callback. O método executa a função de callback para cada elemento uma vez e retorna true se o teste for true para todos os elementos, e false se o teste for false para pelo menos um elemento. Além disso, o método não executa a função callback para arrays vazios e não altera o array.

Método .filter( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].filter( ( bola ) ⇒ { return bola !== 🏈 } ) => [ ⚾, ⚽, 🏀, 🏐 ]

O método filter usa uma função callback de teste e executa ela para cada elemento do array. Ele retorna um novo array com os elementos que passarem no teste.

Método .map( )
[🏀, 🏀,🏀,🏀 ].map( console.log(( bola ) ⇒ { return 🏈 }) ) => [ 🏈, 🏈, 🏈, 🏈 ]

O método map usa uma função callback de teste e executa ela para cada elemento do array, retornando um novo array modificado. Não executa a função de callback para arrays vazios.

Método .forEach( )
[🏀, 🏀,🏀,🏀 ].forEach( ( bola ) ⇒ { console.log( bola + ⚽)} ) => 🏀⚽🏀⚽🏀⚽

O método forEach usa uma função callback e executa ela para cada elemento do array. Não executa a função de callback para arrays vazios e não retorna um novo array, diferente do método map.

Método .copyWithin( )
[ ⚾ , 🏈, ⚽, 🏀 ].copyWithin(2,0) ⇒ [ ⚾ , 🏈, ⚾ , 🏈 ]

O método copyWithin copia os elementos do array para outra posição no array, ele não adiciona itens apenas substitui os valores existentes.

Método .lastIndexOf( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].lastIndexOf(⚽) ⇒ 2

O método lastIndexOf retorna o valor do último índice especificado, se o valor não for encontrado ele retorna -1.

Método .valueOf( )
[ ⚽, ⚾ , 🏀, 🏐 ].valueOf() ⇒ [ ⚽, ⚾ , 🏀, 🏐 ]

O método valueOf é usado para retornar o array. É um método padrão do objeto Array. Este método retorna todos os itens na mesma matriz. Ele não altera o conteúdo original da matriz e não contém nenhum valor de parâmetro.

Método .reduce( )
[ 🥦, 🍅, 🥕, 🍆 ].reduce((valor, elemento) => valor + elemento, 0)) ⇒ 🥗

O método reduce executa uma função redutora para o elemento array, ele retorna um único valor que é o resultado acumulado da função. Ele não executa a função para elementos de array vazios e não altera a matriz original.

Método .keys( )
[ ⚾ , 🏈, ⚽, 🏀, 🏐 ].keys() => ["0","1","2","3"]

O método keys retorna um novo array composto pelas chaves (posições) do array o qual ele foi aplicado.
 


