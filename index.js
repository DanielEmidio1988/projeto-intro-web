//Itens piratas de One Piece

//(A) Passando os antigos items para Objeto:
const pirata1 = {
    nome: "Monkey D. Luffy",
    recompensa: 3000000000,
    pirata: true,
    haki: ["Haki do Rei","Haki do Armamento", "Haki da Observação"]
}

const pirata2 = {  
    nome: "\"God\" Usopp", 
    recompensa: 500000000,
    pirata: true,
    haki: ["Haki da Observação"]
}

const pirata3 = {
    nome: "Kizaro",
    recompensa: 0,
    pirata: false,
    haki: ["Haki do Armamento", "Haki da Observação"]
}

//(B) Criar um array vazio para guardar os objetos
const listaPirata = []

//(C) Adicionar os objetos criados do item 1 (pirata1, 2 e 3) para o item 2 (listaPirata)
//listaPirata.push(pirata1,pirata2,pirata3) desabilitando para executar o item D

//(D) Alterar o item C para fazer uma verificação antes de aplicar o push
if (pirata1.pirata === true){
    listaPirata.push(pirata1)
}else{
    console.log("ALERTA! O personagem ",pirata1.nome," é um Marinheiro!")
}
if (pirata2.pirata === true){
    listaPirata.push(pirata2)
}else{
    console.log("ALERTA! O personagem ",pirata2.nome," é um Marinheiro!")
}
if (pirata3.pirata === true){
    listaPirata.push(pirata3)
}else{
    console.log("ALERTA! O personagem ",pirata3.nome," é um Marinheiro!")
}

console.log("Mural de Piratas: ", listaPirata)

// //3. Faça uma média entre os valores númericos respectivos de cada item. Imprima o valor da média utilizando um console.log. 
// //Guarde em uma const

// console.log("A média de recompensas é de "+(recompensa1+recompensa2+recompensa3)/contagem+" de berries")

// //4. Imprima o resultado se todos os valores booleanos são verdadeiros

// console.log("Todos os personagens são piratas? ",pirata1&&pirata2&&pirata3)

// //5. Crie mais um item, deve ser um array. (Ok)

// console.log("")
// console.log("Nome: "+nome1.toUpperCase())
// console.log("Recompensa: B. "+recompensa1)
// console.log("Pirata(S/N): "+pirata1)
// console.log("Haki: "+haki1)

// console.log("Nome: "+nome2.toUpperCase())
// console.log("Recompensa: B. "+recompensa2)
// console.log("Pirata(S/N): "+pirata2)
// console.log("Haki: "+haki2)

// console.log("Nome: "+nome3.toUpperCase())
// console.log("Recompensa: B. "+recompensa3)
// console.log("Pirata(S/N): "+pirata3)
// console.log("Haki: "+haki3)