

import random

Baraja_de_picas = ['A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠']

random.shuffle(Baraja_de_picas)
print("Cartas barajadas:", Baraja_de_picas)

valor_carta = {'A♠': 1, '2♠': 2, '3♠': 3, '4♠': 4, '5♠': 5, '6♠': 6, '7♠': 7, '8♠': 8, '9♠': 9, '10♠': 10, 'J♠': 11, 'Q♠': 12, 'K♠': 13}

Jugada = []

for carta in Baraja_de_picas:
    if not Jugada:
        Jugada.append(carta) 
    else:
        insertado = False
        for i in range(len(Jugada)):
            if valor_carta[carta] < valor_carta[Jugada[i]]:
                Jugada.insert(i, carta)  
                 insertado = True
                break
        if not insertado:
            Jugada.append(carta) 

print("Cartas ordenadas en la Jugada:", Jugada)


#Para que logre funcionar entre comillas
# python ordenar_cartas.py
#