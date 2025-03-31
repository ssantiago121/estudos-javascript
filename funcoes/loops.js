
// 📌 Estudos sobre Loops em JavaScript

// 🟢 FOR - Loop tradicional
for (let i = 0; i < 5; i++) {
console.log(`For tradicional: ${i}`);
}

// 🟢 FOR IN - Percorre as chaves de um objeto ou índices de um array
const pessoa = { nome: "Fábio", idade: 30, cidade: "São Paulo" };
for (let chave in pessoa) {
console.log(`For in: ${chave} -> ${pessoa[chave]}`);
}

// 🟢 FOR OF - Percorre os valores de um array ou string
const numeros = [10, 20, 30, 40];
for (let numero of numeros) {
console.log(`For of: ${numero}`);
}

// 🟢 FOR EACH - Método de array que executa uma função para cada elemento
numeros.forEach((numero, index) => {
console.log(`ForEach: índice ${index} -> ${numero}`);
});

// 🟢 WHILE - Executa enquanto a condição for verdadeira
let contador = 0;
while (contador < 3) {
console.log(`While: ${contador}`);
contador++;
}

// 🟢 DO WHILE - Executa pelo menos uma vez antes de verificar a condição
let contador2 = 0;
do {
console.log(`Do While: ${contador2}`);
contador2++;
} while (contador2 < 3);
