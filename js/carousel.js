// CAROUSEL INFINITA DI IMMAGINI
// Questo script crea un effetto di scorrimento orizzontale infinito
// per una galleria di immagini (carousel) duplicando il contenuto
// e spostandolo continuamente verso sinistra. I commenti spiegano
// ogni passaggio e la logica dietro le scelte.

// 1. Trova l'elemento con classe 'carousel' nella pagina.
//    Questo è il contenitore che contiene tutte le immagini da scorrere.
let carousel = document.querySelector('.carousel'); // Selettore carousel

// 2. Duplica il contenuto della carousel:
//    - Aggiunge di nuovo tutto l'HTML interno (immagini) alla fine del contenitore.
//    - In questo modo, quando le immagini originali finiscono, ricominciano subito dopo,
//      creando l'illusione di uno scorrimento infinito senza interruzioni visive.
carousel.innerHTML += carousel.innerHTML; // Doppio contenuto per loop

// 3. Inizializza la posizione di partenza dello scorrimento a 0 pixel.
let posizione = 0; // Posizione orizzontale iniziale

// 4. Calcola la larghezza della metà del contenuto totale:
//    - carousel.scrollWidth è la larghezza totale del contenitore (dopo la duplicazione).
//    - Dividendo per 2 otteniamo la larghezza della parte "originale".
//    - Quando lo scorrimento raggiunge questa distanza, si può ricominciare da capo
//      senza che l'utente noti il salto.
let larghezzaMax = Math.round(carousel.scrollWidth / 2); // Larghezza metà carousel

// 5. Imposta un intervallo temporale (ogni 15 millisecondi):
//    - Ad ogni intervallo, aumenta la posizione di 1 pixel.
//    - Quando la posizione raggiunge la larghezza massima, la riporta a 0 (loop infinito).
//    - Aggiorna la trasformazione CSS per spostare la carousel verso sinistra.
setInterval(function () {
  posizione += 1; // Avanza di 1 pixel

  // Se abbiamo scrollato tutta la prima metà, ricomincia da capo
  if (posizione >= larghezzaMax) {
    posizione = 0; // Reset posizione
  }

  // Applica la trasformazione CSS per spostare il contenuto
  carousel.style.transform = 'translateX(-' + posizione + 'px)'; // Sposta carousel
}, 15); // 15ms = ~66 frame al secondo, scorrimento fluido