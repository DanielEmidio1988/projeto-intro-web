//Variável para armazenar o nome da Serie que o usuário deseja buscar
const buscaNome = prompt("Digite a serie que busca").toLocaleUpperCase()

//OBJETO + STRING + NUMBER + BOOLEAN + ARRAY
const anime1 = {
    nome: "One Piece",
    avaliacao: 4.7,
    emandamento: true,
    genero: ["Ficção de Aventura","Fantasia"],
    foto:""
}

const anime2 = {  
    nome: "Naruto Shippuden", 
    avaliacao: 4.7,
    emandamento: false,
    genero: ["Ficção de Aventura","Fantasia Cômica","Artes Marciais"],
    foto:""
}

const anime3 = {
    nome: "Hunter x Hunter",
    avaliacao: 4.8,
    emandamento: true,
    genero: ["Ficção de Aventura","Fantasia","Artes Marciais"],
    foto:""
}

//CALCULAR MÉDIA
let mediaAvaliacao = (anime1.avaliacao + anime2.avaliacao + anime3.avaliacao)/3
console.log("A média de avaliação dos animes é: "+mediaAvaliacao)

//VERIFICAÇÃO SE TODOS OS ANIMES (BOOLEANOS) ESTÃO EM ANDAMENTO (VERIFICAR SE TODOS OS BOOLEANOS SÃO VERDADEIROS)
console.log("Todos os animes foram finalizados?\n"+(anime1.emandamento&&anime2.emandamento&&anime3.emandamento))

//Novo Array vazio para armazenar todos os objetos (anime1, anime2 e anime3) criados até aqui
const listaAnime = []
const listaAnimeConcluido = []

//Condicional para incluir na nova lista somente as series classificados como finalizadas (propriedade "emandamento (boolean)" dos objetos
if (anime1.emandamento === true){
    listaAnime.push(anime1)
}else{
    listaAnimeConcluido.push(anime1)
    alert(`A serie ${anime1.nome.toLocaleUpperCase()} já foi finalizada!`)
}
if (anime2.emandamento === true){
    listaAnime.push(anime2)
}else{
    listaAnimeConcluido.push(anime2)
    alert(`A serie ${anime2.nome.toLocaleUpperCase()} já foi finalizada!`)
}
if (anime3.emandamento === true){
    listaAnime.push(anime3)
}else{
    listaAnimeConcluido.push(anime3)
    alert(`A serie ${anime3.nome.toLocaleUpperCase()} já foi finalizada!`)
}

//----- SEMANA 3 - ENUNCIADO 1
//Função utilizada para reescrever a propriedade dos meus objetos de array(genero) e
//que ele guarde todas as propriedades em uma mesma string.
function refatoracaoAnime (serie){
    let novoAnime ="" //declaração de uma variável vazia para receber os valores declarados na propriedade de array
    for(let i=0;i<serie.genero.length;i++){
        novoAnime += serie.genero[i]+", " //acrescentar cada valor armazenado nos indices do Array na nova variável
    }
    serie.nome = serie.nome.toLocaleUpperCase()
    serie.genero = novoAnime //devolver todo valor da nova variável a propriedade de array
    return serie
}

//A chamada da função é o que permite a modificação da propriedade com array(genero) em uma string
refatoracaoAnime(anime1)
refatoracaoAnime(anime2)
refatoracaoAnime(anime3)

//----- SEMANA 2 - ENUNCIADO 2
// //Relatório anterior para exibição da Lista de Animes
console.log("")
console.log("-----RELATÓRIO ANTERIOR-----")
console.log("Catálogo: ", listaAnime)

//Novo relatório criado utilizando laço
console.log("")
console.log("-----NOVO RELATÓRIO COM LAÇOS-----")

for(titulo of listaAnime){
    for(i in titulo){
        console.log(`${i}: ${titulo[i]}`)
    }
    console.log("------")
}

//----- SEMANA 3 - ENUNCIADO 3

function unicaString(obj) {
    let text = "";
    for (let i in obj) {
      text = text + `${i}: ${obj[i]}\n`;
    }
    return text;
  }
  
  const printObjsToStr = (titulos) => {
    console.log(unicaString(titulos[0]));
    console.log(unicaString(titulos[1]));
  };
  
  console.log("")
  console.log("-----RELATÓRIO COM TODOS OS VALORES EM STRING-----")
  printObjsToStr(listaAnime);
  printObjsToStr(listaAnimeConcluido);
  

//----- SEMANA 3 - ENUNCIADO 4
//Função para buscar uma série de acordo com o nome que o usuário digitar
function buscaAnime(serie, item){
    let buscador = ""
    for(i=0;i<serie.length;i++){
        if(item === serie[i].nome){
            serie[i].nome = serie[i].nome.toLocaleUpperCase()
            buscador = serie[i]
        }
    }
    serie = buscador
    if(serie === ""){
        console.log("Nada foi encontrado!")
    }
    return serie
}

console.log("")
console.log("-----RESULTADO DA BUSCA PELO TITULO DO ANIME -----")
console.log(buscaAnime(listaAnime,buscaNome))