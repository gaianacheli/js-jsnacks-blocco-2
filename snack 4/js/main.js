
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
    biciCorsa.forEach(bici => {
        if(bici.peso < variabileAppoggio.peso){
            variabileAppoggio = bici
          };
          console.log(variabileAppoggio);
    });