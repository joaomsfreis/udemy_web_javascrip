const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])

console.log(valores.length)

valores.push({i:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
console.log(valores)

delete valores[4]
console.log(valores)