
const valor_de_pica = {'A♠': 1, '2♠': 2, '3♠': 3, '4♠': 4, '5♠': 5, '6♠': 6, '7♠': 7, '8♠': 8, '9♠': 9, '10♠': 10, 'J♠': 11, 'Q♠': 12, 'K♠': 13};

//No puede ser una constante por que el valor puede ir cambiando
function ordenar  (cartas) {
    let Jugada = [];
    for (let carta of cartas) {
        if (Jugada.length === 0) {
            Jugada.push(carta); 
        } else {
            let insertado = false;
            for (let i = 0; i < Jugada.length; i++) {
                if (valor_de_pica[carta] < valor_de_pica[Jugada[i]]) {
                    Jugada.splice(i, 0, carta); 
                    insertado = true;
                    break;
                }
            }
            if (!insertado) {
                Jugada.push(carta); 
            }
        }
    }
    return Jugada;
}

const cartasOrdenadas = ordenar(cartasPicas);
console.log("Cartas ordenadas en la Jugada:", cartasOrdenadas);

//Full JavaScript