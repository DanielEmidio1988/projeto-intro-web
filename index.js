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
    emandamento: false,
    genero: ["Ficção de Aventura","Fantasia Cômica","Artes Marciais"],
    foto:"narutoshippuden.jpg",
    link: "https://www.crunchyroll.com/pt-br/naruto-shippuden"
}

const anime3 = {
    nome: "Hunter x Hunter",
    avaliacao: 4.8,
    emandamento: false,
    genero: ["Ficção de Aventura","Fantasia","Artes Marciais"],
    foto:"hunterxhunter.jpg",
    link: "https://www.crunchyroll.com/pt-br/hunter-x-hunter",
}

const anime4 = {
    nome: "My Hero Academia",
    avaliacao: 4.6,
    emandamento: true,
    genero: ["Ficção de Aventura","Fantasia cientifica","Super-Heroi","Comédia"],
    foto:"myheroacademia.jpg",
    link: "https://www.crunchyroll.com/pt-br/my-hero-academia",
}

const anime5 = {
    nome: "Mob Psycho 100",
    avaliacao: 4.8,
    emandamento: true,
    genero: ["Ação","Comédia","Ficção supernatural"],
    foto:"mobpsycho.jpg",
    link: "https://www.crunchyroll.com/pt-br/mob-psycho-100",
}

const anime6 = {
    nome: "SPY x FAMILY",
    avaliacao: 4.9,
    emandamento: true,
    genero: ["Ação","Comédia","Romance de Espionagem"],
    foto:"spyfamily.jpg",
    link: "https://www.crunchyroll.com/pt-br/spy-x-family",
}

const anime7 = {
    nome: "Overlord",
    avaliacao: 4.6,
    emandamento: true,
    genero: ["Ficção cientifica","Aventura","Fantasia", "Ação"],
    foto:"overlord.jpg",
    link: "https://www.crunchyroll.com/pt-br/overlord",
}

const anime8 = {
    nome: "Dr. Stone",
    avaliacao: 4.7,
    emandamento: true,
    genero: ["Ficção Cientifica","Aventura","Pós-Apocaliptica"],
    foto:"drstone.jpg",
    link: "https://www.crunchyroll.com/pt-br/dr-stone",
}

const anime9 = {
    nome: "One Punch Man",
    avaliacao: 4.4,
    emandamento: true,
    genero: ["Ação","Comédia","Super Heroi"],
    foto:"onepunchman.jpg",
    link: "https://www.crunchyroll.com/pt-br/one-punch-man",
}

//CALCULAR MÉDIA
let mediaAvaliacao = (anime1.avaliacao + anime2.avaliacao + anime3.avaliacao + anime4.avaliacao + anime5.avaliacao + anime6.avaliacao + anime7.avaliacao + anime8.avaliacao + anime9.avaliacao)/9
console.log("A média de avaliação dos animes é: "+mediaAvaliacao)

//VERIFICAÇÃO SE TODOS OS ANIMES (BOOLEANOS) ESTÃO EM ANDAMENTO (VERIFICAR SE TODOS OS BOOLEANOS SÃO VERDADEIROS)
console.log("Todos os animes foram finalizados?\n"+(anime1.emandamento&&anime2.emandamento&&anime3.emandamento&&anime4.emandamento&&anime5.emandamento&&anime6.emandamento&&anime7.emandamento&&anime8.emandamento&&anime9.emandamento))

//Exercicio 1.6 - Alternando o nome, titulo em maiusculo
anime1.nome = anime1.nome.toLocaleUpperCase()
anime2.nome = anime2.nome.toLocaleUpperCase()
anime3.nome = anime3.nome.toLocaleUpperCase()
anime4.nome = anime4.nome.toLocaleUpperCase()
anime5.nome = anime5.nome.toLocaleUpperCase()
anime6.nome = anime6.nome.toLocaleUpperCase()
anime7.nome = anime7.nome.toLocaleUpperCase()
anime8.nome = anime8.nome.toLocaleUpperCase()
anime9.nome = anime9.nome.toLocaleUpperCase()

//Novo Array vazio para armazenar todos os objetos (anime1, anime2 e anime3) criados até aqui
const listaAnime = []
const listaAnimeEncer = []

//Condicional para incluir na nova lista somente as series classificados como finalizadas (propriedade "emandamento (boolean)" dos 
console.log("VERIFICAÇÃO DOS ANIMES FINALIZADOS")
if (anime1.emandamento){
    listaAnime.push(anime1)
}else{
    console.log(`A serie ${anime1.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime1)
}
if (anime2.emandamento){
    listaAnime.push(anime2)
}else{
    console.log(`A serie ${anime2.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime2)
}
if (anime3.emandamento){
    listaAnime.push(anime3)
}else{
    console.log(`A serie ${anime3.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime3)
}
if (anime4.emandamento){
    listaAnime.push(anime4)
}else{
    console.log(`A serie ${anime4.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime4)
}
if (anime5.emandamento){
    listaAnime.push(anime5)
}else{
    console.log(`A serie ${anime5.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime5)
}
if (anime6.emandamento){
    listaAnime.push(anime6)
}else{
    console.log(`A serie ${anime6.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime6)
}
if (anime7.emandamento){
    listaAnime.push(anime7)
}else{
    console.log(`A serie ${anime7.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime7)
}
if (anime8.emandamento){
    listaAnime.push(anime8)
}else{
    console.log(`A serie ${anime8.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime8)
}
if (anime9.emandamento){
    listaAnime.push(anime9)
}else{
    console.log(`A serie ${anime9.nome} já foi finalizada!`)
    listaAnimeEncer.push(anime9)
}

//SEMANA 3
//Exercicio 1 - Retaforação
console.log("LISTA DE ANIMES EM ANDAMENTO (REFATORAÇÃO)")
for (let i in listaAnime ){
    listaAnime[i].genero = listaAnime[i].genero.toString()
    console.log(listaAnime[i])
}

console.log("LISTA DE ANIMES EM FINALIZADOS (REFATORAÇÃO)")
for (let i in listaAnimeEncer ){
    listaAnimeEncer[i].genero = listaAnimeEncer[i].genero.toString()
    console.log(listaAnimeEncer[i])
}

//Exercicio 2 - Novo relatório criado utilizando laço
console.log("NOVO RELATÓRIO CRIADO UTILIZANDO LAÇO")
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
    console.log("Lista de Animes Encerrados:\n"+ recebeObj(listaAnimeEncer[i]))
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


//SEMANA 6 - APLICAÇÃO DOM
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

function buscaAnime(event){
    event.preventDefault()
    let novaLista = document.getElementById("id-box-catalogo")
    let nomeAnime = document.getElementById("id-busca").value.toLocaleUpperCase()
    if(nomeAnime === ""){
        alert("Digite um valor válido!")
        document.getElementById("id-busca").value = "";
        return;
    }
    for (let i = 0; i < listaAnime.length; i++) {
        if(nomeAnime === listaAnime[i].nome){
            return (novaLista.innerHTML = `<section class="filmes">
            <img src="./assets/${listaAnime[i].foto}" alt="-Imagem-Serie">
            <ul id="lista-0"><li><a href="${listaAnime[i].link}" target="_blank">${listaAnime[i].nome}</a></li>
                <li>Avaliação: ${listaAnime[i].avaliacao}</li>
                <li>Em andamento: ${listaAnime[i].emandamento}</li>
                <li>Genero: ${listaAnime[i].genero}</li>
            </ul>
        </section>`)
        }
    }
    alert("Nada foi encontrado!");
    document.getElementById("id-busca").value = "";
    return;
}