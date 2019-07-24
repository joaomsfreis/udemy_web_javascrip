const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Todos os alunos são bolsistas
const resultado1 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
})

console.log(resultado1)


//Algum aluno é bolsistas
const resultado2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual
})

console.log(resultado2)