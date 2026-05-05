// GESTIONE DEL TEMA PSICHEDELICO E MENU RESPONSIVE
// Questo script gestisce il cambio tema (normale/psichedelico)
// e l'apertura/chiusura del menu di navigazione su mobile.
// Ogni passaggio è spiegato con commenti dettagliati.

window.addEventListener('DOMContentLoaded', () => { // Attende che il DOM sia caricato
  // Recupera l'elemento dell'icona del tema (immagine nella navbar)
  const themeIcon = document.getElementById('themeIcon'); // Icona tema nella navbar
  // Recupera il bottone che attiva/disattiva il tema psichedelico
  const psychedelicToggle = document.getElementById('psychedelicToggle'); // Bottone per cambiare tema

  // Funzione che aggiorna l'icona in base al tema attivo:
  // - Se la classe 'psychedelic-mode' è presente sul body, mostra l'icona "legumeclassico.png"
  // - Altrimenti mostra l'icona "cambiotema.png"
  const aggiornaIconaTema = () => { // Aggiorna l'icona del tema
    if (document.body.classList.contains('psychedelic-mode')) { // Se il body ha la classe psichedelica
      themeIcon.src = 'img/legumeclassico.png'; // Mostra icona classica
    } else { // Altrimenti
      themeIcon.src = 'img/cambiotema.png'; // Mostra icona cambio tema
    }
  };

  // All'avvio della pagina, imposta sempre il tema normale (rimuove la classe psichedelica)
  document.body.classList.remove('psychedelic-mode'); // Rimuove classe psichedelica all'avvio

  // Se l'utente aveva già scelto il tema psichedelico in una sessione precedente,
  // lo riapplica leggendo il valore da localStorage
  if (localStorage.getItem('temaPsychedelic') === 'true') { // Controlla preferenza salvata
    document.body.classList.add('psychedelic-mode'); // Applica tema psichedelico se salvato
  }

  // Aggiorna l'icona del tema in base allo stato attuale (dopo eventuale ripristino)
  aggiornaIconaTema(); // Aggiorna icona dopo eventuale ripristino tema

  // Gestione del click sul bottone per cambiare tema:
  // - Alterna la classe 'psychedelic-mode' sul body
  // - Salva la scelta dell'utente in localStorage (così resta anche dopo il refresh)
  // - Aggiorna l'icona del tema
  if (psychedelicToggle) { // Se il bottone esiste
    psychedelicToggle.addEventListener('click', () => { // Al click sul bottone
      document.body.classList.toggle('psychedelic-mode'); // Alterna la classe sul body
      const isPsychedelic = document.body.classList.contains('psychedelic-mode'); // Controlla stato attuale
      if (isPsychedelic) { // Se attivo
        localStorage.setItem('temaPsychedelic', 'true'); // Salva la preferenza
      } else { // Se disattivo
        localStorage.removeItem('temaPsychedelic'); // Rimuove la preferenza
      }
      aggiornaIconaTema(); // Aggiorna l’icona in base al nuovo tema
    });
  }
});

// FUNZIONE PER IL MENU RESPONSIVE (HAMBURGER)
// Questa funzione viene chiamata quando si clicca sull'icona hamburger.
// Alterna la classe 'active' sul menu di navigazione per mostrare o nascondere i link.
function toggleMenu() { // Funzione per mostrare/nascondere il menu mobile
  const nav = document.getElementById("navLinks"); // Recupera il menu di navigazione
  nav.classList.toggle("active"); // Alterna la visibilità del menu
}

// Funzione chiamata quando si clicca il bottone "Iscriviti"
function iscriviti() { // Funzione iscrizione
  const email = document.getElementById('emailInput').value.trim(); // Prende email
  const messaggio = document.getElementById('messaggio'); // Prende messaggio

  // Controllo se l'email è vuota o non contiene "@" o "."
  if (!email || !email.includes('@') || !email.includes('.')) { // Controllo email
    messaggio.style.color = 'red'; // Colore rosso
    messaggio.textContent = 'Per favore inserisci un indirizzo email valido.'; // Messaggio errore
    return; // Esce
  }

  messaggio.style.color = 'green'; // Colore verde
  messaggio.textContent = 'Grazie mille per esserti iscritto!'; // Messaggio successo
  document.getElementById('emailInput').value = ''; // Svuota campo
}

