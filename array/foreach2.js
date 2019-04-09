const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEach2 = function(callback){
    for(let i = 1; i<= this.length; i++){
        callback(this[i], i, this)
    }
}
aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1} ${nome}`)
})