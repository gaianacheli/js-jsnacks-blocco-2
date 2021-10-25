const squadreCalcio = [
    {
        name: 'inter',
        punti: 0,
        falli: 0

    },
    {
        name: 'milan',
        punti: 0,
        falli: 0
    },
    {
        name: 'roma',
        punti: 0,
        falli: 0
    },
    {
        name: 'torino',
        punti: 0,
        falli: 0
    },
]

for (let i = 0; i < squadreCalcio.length; i++){
    squadreCalcio[i]
    squadreCalcio.punti = numero()
    squadreCalcio.falli = numero()
    
}







function numero() {
    return Math.round(Math.random() * 100);
}


console.log(squadreCalcio);
