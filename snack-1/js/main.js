
const biciCorsa = [
{
    nameBici: 'Passoni',
    peso: '6,5 Kg',
},
{
    nameBici: 'Freccia',
    peso: '7,5 Kg',
},
{
    nameBici: 'Pirandello',
    peso: '8,5 Kg',
}
]
let variabileAppoggio = biciCorsa[0]

for (let i = 0 ; i < biciCorsa.length; i++) {
 const bici = biciCorsa[i];

  if(bici.peso < variabileAppoggio.peso){
    variabileAppoggio = bici
  };
}
console.log(variabileAppoggio);

document.getElementById('risultato').innerHTML = `la bici piu leggera è : ${variabileAppoggio.nameBici} e pesa: ${variabileAppoggio.peso}`
