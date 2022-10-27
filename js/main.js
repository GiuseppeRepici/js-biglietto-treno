
const userDistanza = parseInt( prompt( "Inserisci la distanza" ) );
const eta = parseInt( prompt( "Inserisci la tua eta" ) );

let y = 0.21;
const prezzoperdistanza = userDistanza * y;

if (eta < 18) {
    const prezzominorenne = parseFloat(prezzoperdistanza - (prezzoperdistanza * 20 / 100));

    console.log( "prezzo minorenne" , prezzominorenne );

    const prova = document.getElementById("costobiglietto");

    prova.innerHTML = prezzominorenne.toFixed(2) ;
} else if(eta < 65) {
            const prova = document.getElementById("costobiglietto");

            prova.innerHTML = prezzoperdistanza.toFixed(2) ;
        } else {
            const prezzomaggiore60 = parseFloat(prezzoperdistanza - (prezzoperdistanza * 40 / 100));
            
            console.log( "prezzo per chi ha 65 anni o più" , prezzomaggiore60 );
        
            const prova = document.getElementById("costobiglietto");
        
            prova.innerHTML = prezzomaggiore60.toFixed(2)  ;
        }




















