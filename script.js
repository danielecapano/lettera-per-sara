const titleText = "Emozioni";

const date = "14 Giugno 2024";

const paragraphs = [
  "Caro amore mio,",
  "è da qualche giorno che stavo pensando di scriverti una lettera, non so neanche bene perché, ma ho questo inpulso e ho deciso di assecondarlo.",
  "Sono passati quasi nove mesi da quando ci conosciamo, e il mio amore per te è diventato sempre più grande e forte, ma allo stesso tempo anche la lontananza è diventata sempre più pesante.",
  "Ormai la voglia di stare insieme a te non mi abbandona mai, e mi ritrovo a passare le mie giornate a pensarti e a fantasticare su cosa potremmo fare insieme.",
  "Immagino la nostra vita futura, noi due in un a casa tutta nostra, liberi di poterci vivere ogni istante, facendo tutto quello che amiamo, ma sotto lo stesso tetto.",
  "Vedo noi felici, sereni e innamorati più che mai.",
  "La ricerca del lavoro si sta rivelando più difficile del previsto, e sai benissimo che ho avuto i miei momenti di sconforto, ma questi pensieri mi aiutano ad andare avanti, mi danno la forza per continuare a cercare.",
  "Non ti nascondo che ho avuto e ho tuttora i miei momenti di paura, ma non riguardano me, io sento dentro di me che nonostante tutte le difficoltà riuscirò ad aspettare tutto il tempo necessario affinché i nostri sogni possano diventare realtà, ma a volte mi chiedo se anche tu riuscirai ad avere tutta questa forza.",
  "Non capire male, non metto assolutamente in dubbio i tuoi sentimenti nei miei confronti, ma a volte ti sento davvero demoralizzata, come se pensassi che non riusciremo mai a stare insieme.",
  "Per me è molto importante sapere che tu ci credi almeno quanto me, perché so che siamo in due a combattere per raggiungere i risultati sperati, serve a darmi la forza di cui ho bisogno per lottare contro tutte le avversità che si stanno ponendo davanti alla nostra felicità.",
  "Ma adesso basta parlare di cose tristi, ti ho voluto scrivere questa lettera per rinnovare il mio amore per te, per ringraziarti ancora una volta di tutte le emozioni speciali che mi stai facendo provare.",
  "Tu sei diventata in poco tempo indispensabile per me, non riesco più nemmeno a immaginare una vita in cui tu non sei al mio fianco.",
  "Io in te ho trovato il mio ideale di donna, quello che sognavo sin da quando ho iniziato a capire cos’è l’amore, anche se era un qualcosa di vago, di non ben definito. Con il tempo ho affinato sempre più questo mio quadro, e quando ti ho conosciuto finalmente ho potuto dare un volto e un nome a qualcosa che fino a un attimo prima era solo nella mia testa.",
  "Tu sei stata la realizzazione di un sogno, la meta di un viaggio che è durato per tutta la vita, e che finalmente è giunto a destinazione.",
  "Come ti dico spesso non è facile descrivere a parole quello che provo, perché mi sembra sempre che non ci sia descrizione che possa corrispondere all’immensità dei miei sentimenti, ma so anche che con te le parole non servono, sei in grado di leggermi dentro come nessun’altro, a volte ho l’impressione che tu mi capisca più di me stesso.",
  "Io mi reputo una persona trasparente, tutto quello che è dentro di me si vede anche all’esterno, ma tu ci riesci in una maniera unica, e non sai quante volte questa cosa mi lascia stupito.",
  "Tu sei veramente la persona più straordinaria che io abbia mai conosciuto, sei bellissima fuori, tanto che mi incanto spesso a guardarti, e tutte le volte che mi chiedi cosa c’è quando ti fisso la risposta è sempre la stessa: “Sei bellissima, e io mi sento davvero fortunato ad averti nella mia vita”.",
  "Ma per quanto tu possa essere stupenda fuori, la tua più grande bellezza è nascosta agli occhi, o almeno a chi non riesce a vederla. Quello che ti rende davvero speciale è tutto ciò che sei dentro, tu sei l’incarnazione dell’amore, ne hai così tanto da non riuscire a trattenerlo, e io sono stato travolto da questa ondata.",
  "Tu sei una persona pura Sara, tu sei per pochi, e io sono entusiasta di essere riuscito ad aver fatto breccia nel tuo cuore.",
  "Mentre ti scrivo queste righe mi stai mandando un sacco di messaggi in cui mi fai capire quanto sia grande il tuo amore per me, e ogni volta il mio cuore batte nel petto come una grancassa.",
  "Voglio solo dirti che puoi stare tranquilla, il mio cuore e tutto quello che mi appartiene è tuo, solo tuo, completamente tuo.",
  "Dopo averti conosciuto non ho altro da chiedere alla vita, se non la possibilità di potere vivere il resto del mio tempo con te, sposandoti non appena sarà possibile.",
  "Voglio che tu resti legata a me per il resto della tua vita, ed io sarò l’uomo più felice e fortunato del pianeta, ma che dico del pianeta, dell’intero universo, e anche se ci sono altre forme di vita, nessuna sarà mai felice come me da quanto fai parte della mia vita.",
  "Ti amo Sara, ti amo ogni giorno di più e voglio che sia così sempre.",
  "Con infinito amore,",
  "tuo per sempre Daniele",
];

const titleBox = document.getElementById("title");
const dateBox = document.getElementById("date");

function typeWriterTitle(title, DOMElement) {
  let index = 0;

  function type() {
    DOMElement.textContent = title.slice(0, index);
    index++;

    if (index <= title.length) {
      setTimeout(type, 50); // Imposta la velocità di scrittura
    }
  }

  type();
}

function typeWriterPharagraphs(paragraphIndex, charIndex) {
  const container = document.getElementById("text-container");
  const currentParagraph = document.createElement("p");

  if (paragraphIndex < paragraphs.length) {
    container.appendChild(currentParagraph);
    const paragraph = paragraphs[paragraphIndex];

    function writeChar() {
      if (charIndex <= paragraph.length) {
        const currentText = paragraph.substring(0, charIndex);
        currentParagraph.textContent = currentText;
        charIndex++;
        setTimeout(writeChar, 50);
      } else {
        // Passa al paragrafo successivo dopo un breve ritardo
        setTimeout(() => typeWriterPharagraphs(paragraphIndex + 1, 0), 1000);
      }
    }

    writeChar();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Inizia con il primo paragrafo
  typeWriterTitle(titleText, titleBox);
  setTimeout(() => typeWriterTitle(date, dateBox), 3000);
  setTimeout(() => typeWriterPharagraphs(0, 0), 5000);
});
