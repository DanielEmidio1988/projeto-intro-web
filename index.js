//Itens piratas de One Piece

//Variável para armazenar o nome do Pirata que o usuário deseja buscar
const buscaNome = prompt("Digite o nome do pirata que busca")

//3 variáveis com objetos com diferentes propriedades (string, number, boolean e array)
const pirata1 = {
    nome: "Monkey D. Luffy",
    recompensa: 3000000000,
    pirata: true,
    haki: ["Haki do Rei","Haki do Armamento", "Haki da Observação"]
}

const pirata2 = {  
    nome: "Usopp", 
    recompensa: 500000000,
    pirata: true,
    haki: ["Haki da Observação"]
}

const pirata3 = {
    nome: "Kizaro",
    recompensa: 0,
    pirata: true,
    haki: ["Haki do Armamento", "Haki da Observação"]
}

//Novo Array vazio para armazenar todos os objetos (pirata1, pirata2 e pirata 3) criados até aqui
const listaPirata = []

//Condicional para incluir na nova lista somente os personagens classificados como piratas (propriedade "pirata (boolean)" dos objetos
if (pirata1.pirata === true){
    listaPirata.push(pirata1)
}else{
    alert(`ALERTA! O personagem ${pirata2.nome} é um Marinheiro(a)`)
}
if (pirata2.pirata === true){
    listaPirata.push(pirata2)
}else{
    alert(`ALERTA! O personagem ${pirata2.nome} é um Marinheiro(a)`)
}
if (pirata3.pirata === true){
    listaPirata.push(pirata3)
}else{
    alert(`ALERTA! O personagem ${pirata3.nome} é um Marinheiro(a)`)
}

//Função utilizada para reescrever a propriedade dos meus objetos de array(haki) e
//que ele guarde todas as propriedades em uma mesma string.
function refatoracaoHaki (nakama){
    let novoHaki ="" //declaração de uma variável vazia para receber os valores declarados na propriedade de array
    for(let i=0;i<nakama.haki.length;i++){
        novoHaki += nakama.haki[i]+", " //acrescentar cada valor armazenado nos indices do Array na nova variável
    }
    nakama.haki = novoHaki //devolver todo valor da nova variável a propriedade de array
    return nakama
}

//A chamada da função é o que permite a modificação da propriedade com array(haki) em uma string
refatoracaoHaki(pirata1)
refatoracaoHaki(pirata2)
refatoracaoHaki(pirata3)

//Relatório anterior para exibição da Lista de Piratas
console.log("Mural de Piratas: ", listaPirata)

//Novo relatório criado utilizando laço
for(let i=0;i<listaPirata.length;i++){
    console.log(`Pirata ${i+1}`)
    console.log(listaPirata[i])
}

//Função para buscar um Pirata de acordo com o nome que o usuário digitar
function buscaPirata(nakama, membro){
    let buscador = ""
    for(i=0;i<nakama.length;i++){
        if(membro === nakama[i].nome){
            buscador = nakama[i]
        }
    }
    nakama = buscador
    if(nakama === ""){
        alert("Nada foi encontrado!")
    }
    return nakama
}

console.log(buscaPirata(listaPirata,buscaNome))