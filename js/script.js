// INPUT
const userAge = parseInt(prompt("Inserisci la tua età"));
const userKM = parseInt(prompt("Inserisci i chilometri da percorrere"));
console.log(userAge);
console.log(userKM);


let message = "";
let price;

// controllo dati numerici
if (isNaN(userAge) || isNaN(userKM)) {
    message = "Inserisci dati numerici. Ricarica la pagina."
    
} else {
    // calcolo prezzo
    price = (userKM * 0.21).toFixed(2);
    console.log(price);
    message = `Il prezzo che devi pagare è € ${price}`;

    // clacolo perzzo de minorenne
    if (userAge < 18) {
        price = (price - (price*0.2)).toFixed(2);
        console.log(price); 
        message = `Dato che sei minorenne, il prezzo che devi pagare è € ${price}`;


    // calcolo prezzo se over 65    
    } else if(userAge > 65){
        price = (price - (price*0.4)).toFixed(2);
        console.log(price); 
        message = `Dato che sei over 65, il prezzo che devi pagare è € ${price}`;
    }

}

// OUTPUT
document.getElementById("message-html").innerHTML = message;