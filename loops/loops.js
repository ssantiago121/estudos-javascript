// 📌 Diferentes formas de encontrar o maior número em JavaScript

// 1. If tradicional
function maxIfTradicional(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

// 2. Sem else
function maxSemReturn(x, y) {
    if (x > y) return x;
    return y;
}

// 3. If sem chaves
function maxSemChaves(x, y) {
    if (x > y) return x;
    return y;
}

// 4. Operador ternário
function maxTernario(x, y) {
    return x > y ? x : y;
}

// 5. Arrow Function com operador ternário
const maxArrow = (x, y) => x > y ? x : y;

// Exemplo de uso
console.log(maxArrow(10, 5)); // Saída: 10
