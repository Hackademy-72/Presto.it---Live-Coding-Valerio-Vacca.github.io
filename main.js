// evento manina button toggler

// cattura manina navbar
let navIcon = document.querySelector('#navIcon');

// variabile d'appoggio per checkare la condizione
let confirm = false;

// evento click sul toggler
navIcon.addEventListener('click', ()=>{


    if(confirm == false){

        navIcon.classList.remove('fa-rotate-180');
        confirm = true;
    
    } else{

        navIcon.classList.add('fa-rotate-180');
        confirm = false;

    }


})


// CATTURA NAVBAR

let mainNavbar = document.querySelector('#mainNavbar');

let containerNav = document.querySelector('#container-nav');

// CATTURA LOGHI

let logoA = document.querySelector('#logoA');
let logoB = document.querySelector('#logoB');

// evento NAVBAR

window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-primaryC');

        // mainNavbar.style.height = '100px';
        mainNavbar.style.padding = '20px 0px';

        logoB.classList.remove('d-none');
        logoA.classList.add('d-none');

        

    } else {

        mainNavbar.classList.remove('background-primaryC');
        mainNavbar.classList.add('bg-transparent');

        // mainNavbar.style.height = '60px';
        mainNavbar.style.padding = '10px 0px';

        logoA.classList.remove('d-none');
        logoB.classList.add('d-none');

      

    }


})


// CHIAMATA ASINCRONA DI JAVASCRIPT
// Sono delle chiamate che JavaScript legge ed esegue SOLO DOPO IL CARICAMENTO DELLA PAGINA E L'ESECUZIONE DI TUTTO IL CODICE CHE NON E' UNA CHIAMATA ASINCRONA

// -SET INTERVAL
// mi crea un loop infinito di una operazione che si esegue con una rapidità che decido io.

// il primo parametro del setInterval è una funzione con delle istruzioni da eseguire
// il secondo parametro è l'intervallo di tempo espresso in millisecondi
// per pulire, stoppare, cessare il loop infinito, quindi l'intervallo, si usa clearInterval()

function createInterval(finalNumber, element){

    let counter = 0;

    let interval = setInterval( ()=>{


        if(counter < finalNumber){

            counter++
            element.innerHTML = counter;
            

        } else {

            clearInterval(interval);

        }

    }, 1)

}

createInterval();

// cattura degli span con numero 0

let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');

// invoco la funzione per settare i miei parametri reali

// createInterval(1000, firstSpan);
// createInterval(1500, secondSpan);
// createInterval(500, thirdSpan);


// INTERSECTION OBSERVER()

// all'interno delle parentesi tonde, quando lo andiamo ad invocare, questo oggetto accetta un parametro
// contiente una funzione anonima

// che cosa fa questa funzione?
// internamente cattura tutti gli elementi che noi diciamo di visualizzare e quando li visualizza, li incontra, deve fare qualcosa.

// il parametro formale che va all'interno delle parentesi tonde della funzione anonima dell'intersection observer prende il nome di ENTRIES

// il signor intersection observer, non sa a priori quante entries incontrerà, perciò dovrà far partire l'istruzione per ogni entries che trova, ergo vuole un forEach

// per ogni singola entry che incontri devi far qualcosa

// all'interno del forEach vuole una condizione è cioè se entry è intersecata (isIntersecting)

// infine richiamo la mia funzione observed e concateno il metodo .observe() per indicare il parametro reale da osservare


// catturo l'h2 della colonna della sezione AOS

let h2Test = document.querySelector('#h2Test');

// variabile d'appoggio per cessare l'incremento dei numeri
let intersectionCheck = true;

// funzione intersection observe

let observed = new IntersectionObserver(

    (entries)=>{

        entries.forEach( (entry)=>{

            if(entry.isIntersecting && intersectionCheck == true){

                createInterval(1000, firstSpan);
                createInterval(1500, secondSpan);
                createInterval(500, thirdSpan);

                intersectionCheck = false;

            }

        } )

    }

)  

observed.observe(h2Test);


// EVENTO MOUSE ENTER

// cattura dei camioncini
let camioncini = document.querySelectorAll('.fa-truck-fast');

// cattura delle card
let columns = document.querySelectorAll('.col-custom');

// variabile d'appoggio per far ritornare tutto alle origini
// let columnsConfirm = false;

columns.forEach( (colonna, i)=>{
    

    // alla singola colonna attacco l'evento mouseenter

    colonna.addEventListener('mouseenter', ()=>{


        camioncini[i].classList.remove('text-secondaryC');
        camioncini[i].classList.add('text-accentC');

        // alla seconda entrata
        camioncini[i].classList.remove('text-blackC');


    })

    // alla singola colonna attacco l'evento mouseleave


    colonna.addEventListener('mouseleave', ()=>{


        // if(columnsConfirm == false){

            camioncini[i].classList.remove('text-accentC');
            camioncini[i].classList.add('text-blackC');

            // alla seconda uscita
            camioncini[i].classList.add('text-secondaryC');

            // columnsConfirm = true;

        // } else {

            

        //     columnsConfirm = false;

        // }

 


    })


});