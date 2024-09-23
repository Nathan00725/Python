
const Cartas_de_picas = ['A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];


function barajar(Valor) {
    for (let i = Valor.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Valor[i], Valor[j]] = [Valor[j], Valor[i]]; 
    }
}

barajar(Cartas_de_picas);
console.log("Cartas barajadas:", Cartas_de_picas);

