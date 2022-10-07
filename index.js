// //Variável para armazenar o nome da Serie que o usuário deseja buscar
// const buscaNome = prompt("Digite a serie que busca").toLocaleUpperCase()

//OBJETO + STRING + NUMBER + BOOLEAN + ARRAY
const anime1 = {
    nome: "One Piece",
    avaliacao: 4.7,
    emandamento: true,
    genero: ["Ficção de Aventura","Fantasia"],
    foto:"onepiece.jpg",
    link: "https://www.crunchyroll.com/pt-br/one-piece",
}

const anime2 = {  
    nome: "Naruto Shippuden", 
    avaliacao: 4.7,
    emandamento: true,
    genero: ["Ficção de Aventura","Fantasia Cômica","Artes Marciais"],
    foto:"narutoshippuden.jpg",
    link: "https://www.crunchyroll.com/pt-br/naruto-shippuden"
}

const anime3 = {
    nome: "Hunter x Hunter",
    avaliacao: 4.8,
    emandamento: true,
    genero: ["Ficção de Aventura","Fantasia","Artes Marciais"],
    foto:"hunterxhunter.jpg",
    link: "https://www.crunchyroll.com/pt-br/hunter-x-hunter",
}

//CALCULAR MÉDIA
let mediaAvaliacao = (anime1.avaliacao + anime2.avaliacao + anime3.avaliacao)/3
console.log("A média de avaliação dos animes é: "+mediaAvaliacao)

//VERIFICAÇÃO SE TODOS OS ANIMES (BOOLEANOS) ESTÃO EM ANDAMENTO (VERIFICAR SE TODOS OS BOOLEANOS SÃO VERDADEIROS)
console.log("Todos os animes foram finalizados?\n"+(anime1.emandamento&&anime2.emandamento&&anime3.emandamento))

//Exercicio 1.6 - Alternando o nome, titulo em maiusculo
anime1.nome = anime1.nome.toLocaleUpperCase()
anime2.nome = anime2.nome.toLocaleUpperCase()
anime3.nome = anime3.nome.toLocaleUpperCase()

//Novo Array vazio para armazenar todos os objetos (anime1, anime2 e anime3) criados até aqui
const listaAnime = []
const listaAnimeEncer = []

//Condicional para incluir na nova lista somente as series classificados como finalizadas (propriedade "emandamento (boolean)" dos objetos
if (anime1.emandamento){
    listaAnime.push(anime1)
}else{
    alert(`A serie ${anime1.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime1)
}
if (anime2.emandamento){
    listaAnime.push(anime2)
}else{
    alert(`A serie ${anime2.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime2)
}
if (anime3.emandamento){
    listaAnime.push(anime3)
}else{
    alert(`A serie ${anime3.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime3)
}

//SEMANA 3
//Exercicio 1 - Retaforação
for (let i in listaAnime ){
    listaAnime[i].genero = listaAnime[i].genero.toString()
    console.log(listaAnime[i])
}

for (let i in listaAnimeEncer ){
    listaAnimeEncer[i].genero = listaAnimeEncer[i].genero.toString()
    console.log(listaAnimeEncer[i])
}

//Exercicio 2 - Novo relatório criado utilizando laço
for(let i=0;i<listaAnime.length;i++){
    console.log(`Série ${i+1}`)
    console.log(listaAnime[i])
}

//Exercicio 3 - Função que receba como parametro um objeto e devolva a string
function recebeObj (anime){

    return anime.nome + "\n" + anime.avaliacao +"\n" + anime.emandamento +"\n"+anime.genero
}

for(let i=0;i<listaAnime.length;i++){
    console.log("Lista de Animes em Andamento:\n"+ recebeObj(listaAnime[i]))
}

for(let i=0;i<listaAnimeEncer.length;i++){
    console.log("Lista de Animes em Andamento:\n"+ recebeObj(listaAnimeEncer[i]))
}

// //Exercicio 4 - Função para buscar uma série de acordo com o nome que o usuário digitar
// function buscaAnime(serie, item){
//     let buscador = ""
//     for(let i=0;i<serie.length;i++){
//         if(item === serie[i].nome){
//             serie[i].nome = serie[i].nome
//             buscador = serie[i]
//             console.log(serie[i].nome)
//         }
//     }
//     serie = buscador
//     if(serie === ""){
//         alert("Nada foi encontrado!")
//     }
//     return serie
// }

// console.log("\nResultado: ", buscaAnime(listaAnime,buscaNome))





const lista = document.querySelector(".box-catalogo")
listaAnime.filter(serie =>{
    function listarAnimes(){
        lista.innerHTML += `<section class="filmes">
        
        <img src="./assets/${serie.foto}" alt="-Imagem-Serie">
        <ul id="lista-0"><li><a href="${serie.link}" target="_blank">${serie.nome}</a></li>
            <li>Avaliação: ${serie.avaliacao}</li>
            <li>Em andamento: ${serie.emandamento}</li>
            <li>Genero: ${serie.genero}</li>
        </ul>
    </section>`
    }
    listarAnimes()
})

// const buscaNome = document.getElementById("id-busca").toLocaleUpperCase()
// listaAnime.filter()


// function buscaAnime(){

    
//     for(let i=0;i<serie.length;i++){
//         if(item === serie[i].nome){
//             return list.innerHTML += `<section class="filmes">
//             Itens da Lista
//             <img src="./assets/${serie.foto}" alt="-Imagem-Serie">
//             <ul id="lista-0"><li><a href="${serie.link}" target="_blank">${serie.nome}</a></li>
//                 <li>${serie.avaliacao}</li>
//                 <li>${serie.emandamento}</li>
//                 <li>${serie.genero}</li>
//             </ul>
//         </section>`
//         }//else{
//             // alert("Nada foi encontrado!")
//             // return list.innerHTML = ""
//         //}
//     }

//     return serie
// }


// buscaAnime(listaAnime,"ONE PIECE")
