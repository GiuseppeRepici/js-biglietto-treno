
const userDistanza = parseInt( prompt( "Inserisci la distanza" ) );
const eta = parseInt( prompt( "Inserisci la tua eta" ) );

let y = 0.21;
const prezzoperdistanza = userDistanza * y;

if (eta < 18) {
    const prezzominorenne = parseFloat(prezzoperdistanza - (prezzoperdistanza * 20 / 100));

    console.log( "prezzo minorenne" , prezzominorenne );

    const prova = document.getElementById("costobiglietto");

    prova.innerHTML = prezzominorenne.toFixed(2) ;
} else {
    const prezzomaggiorenne = parseFloat(prezzoperdistanza - (prezzoperdistanza * 40 / 100));
    
    console.log( "prezzo maggiorenne" , prezzomaggiorenne );

    const prova = document.getElementById("costobiglietto");

    prova.innerHTML = prezzomaggiorenne.toFixed(2)  ;
}




