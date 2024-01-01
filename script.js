const titleText = "Quello che sei per me";

const date = "1 Gennaio 2024";

const paragraphs = [
  "Caro amore mio,",
  "provo a scriverti questa lettera per l’ennesima volta, sperando di trovare le parole giuste per esprimere quello che tu rappresenti per me.",
  "L’ho scritta e cancellata non so più quante volte perché quello che veniva fuori non mi sembrava mai abbastanza.",
  "Ma forse non mi sembrerà mai abbastanza, per cui ho deciso di scrivere di getto quello che esce dal cuore e lasciarlo così com’è.",
  "Mai avrei pensato che una persona come te potesse esistere davvero, una che rappresenta il mio ideale di donna sotto tutti i punti di vista.",
  "Ho capito dal primo messaggio che tu mi piacevi, ma non potevo immaginare quanto saresti diventata importante nella mia vita.",
  "La prima volta che mi sono accorto di te è stato quel giorno in cui abbiamo postato dei selfie nel gruppo, ed è stata anche la prima volta che abbiamo interagito direttamente io e te.",
  "Ho notato che eri davvero una bella donna, ma non sapevo ancora che tipo di persona fossi, anche se mi sei risultata simpatica subito con quello scambio di battute che c'è stato. Nei giorni successivi abbiamo continuato a scrivere sul gruppo e ho avuto modo di conoscerti un po'meglio.",
  "Sono stato piacevolmente sorpreso dal tuo modo di fare, e ho capito subito di trovarmi davanti a una persona estremamente simpatica, ironica e intelligente.",
  "A quel punto mi ero deciso a scriverti, volevo conoscerti meglio, e non cercavo un'amicizia, sapevo già di volere qualcosa di più",
  "Mentre aspettavo di trovare una scusa decente per scriverti, stavo guardando le tue foto di Facebook, e ho messo un like a una di queste, ma l'ho cancellato subito, non volevo apparire troppo sfacciato, ma il danno ormai era fatto, tu hai ricevuto la notifica e mi hai scritto, e da quel momento è iniziato il periodo più bello della mia vita.",
  "Mi sei entrata dentro senza nemmeno che io avessi il tempo di realizzare quello che stavo vivendo, e così mi sono innamorato di te giorno dopo giorno. Ho ricominciato di nuovo a sentirmi vivo, ho ricominciato a sentire il mio cuore battere, in una maniera che non aveva fatto mai.",
  "Io in questi tre mesi ho capito forse per la prima volta nella mia vita cosa vuol dire amare davvero e soprattutto cosa significa sentirsi amati.",
  "Tra di noi si è creata una tale connessione che ancora oggi mi lascia stupefatto, non mi sembra vero di avere una persona che vibra con una tale sintonia con me, una persona che vede l'amore e la relazione nello stesso modo in cui la vedo io. Tu mi hai stravolto la vita, ma in senso positivo, l'hai resa piena di colori, e sei riuscita a tirare fuori da me tutto ciò che reprimevo, per paura di non essere capito o di essere giudicato.",
  "Sì perchè con te, per la prima volta nella mia vita posso essere davvero me stesso, e la cosa che se ci penso mi fa venire gli occhi lucidi è che tu ami da impazzire il mio modo di essere.",
  "Mi dici sempre che sono speciale, e anche se non mi ci sento, sono felicissimo che tu mi veda in questo modo. Io so soltanto che ti amo con una tale intensità che a volte mi blocca il respiro.",
  "Noi vorremmo viverci ogni istante della giornata, ma purtroppo non possiamo, e per questo motivo ci manchiamo da morire, la distanza che ci separa a volte è davvero difficile da sopportare, ma l'amore che ci lega è più forte, e resisterà tutto il tempo necessario affinchè noi potremo realizzare il nostro sogno di vivere insieme",
  "Queste feste le abbiamo passate stando separati, e io in vita mia non ho mai sentito in maniera così forte la mancanza di una persona, anche se sei rimasata con me tutto il tempo, perchè tu occupi ogni mio pensiero, sei dentro di me, dentro ogni fibra del mio corpo, ma soprattutto sei nel mio cuore. Ci sei entrata praticamente subito e lo hai occupato interamente, e adesso è tuo, completamente tuo, solo tuo, pertanto ti chiedo di trattarlo sempre con cura, perchè nonostante riesca a battere così forte da uscirmi dal petto quando penso a te, è altrettanto fragile se viene spezzato.",
  "Una donna come te non si incontra tutti i giorni, e un rapporto come il nostro è qualcosa che se va bene capita una sola volta nella vita, e io voglio cogliere questa opportunità e passare il resto della vita con te, guardandoti ogni giorno con gli stesso occhi con cui ti guardo adesso, innamorandomi sempre di più.",
  "Voglio passare i nostri giorni liberi facendo quello che più ci piace, come ad esempio stare una giornata intera a letto a fare l'amore, oppure accoccolati sul divano a guardare dei film mangiando popcorn e m&m's. Quansiasi cosa, l'imporante è stare insieme, poter respirare il profumo della tua pelle e assaporare il gusto dei tuoi baci.",
  "Il 2023 è passato, è stato un anno da dimenticare, ma è stato anche l'anno in cui ti ho conosciuta, ed è sicuramente la cosa più bella che mi sia mai capitata. Questo nuovo anno lo iniziamo insieme, e spero che riusciremo a mettere a posto tutti i piccoli tasselli che serviranno a far sì che i nostri sogni possano diventare al più presto realtà.",
  "Io ormai ti considero parte integrante della mia vita, non riesco nemmeno a immaginare un futuro in cui tu non ci sei, e il desiderio di viverti ogni istante è davvero fortissimo.Farò di tutto affinchè io possa stare il più vicino possibile a te, e anche se le nostre anime sono ormai diventate una cosa sola, voglio che anche i nostri corpi lo diventino.",
  "Se dovessi racchiudere in una sola frase il titolo di questa lettera potrei semplicemente dire 'Tu sei la mia vita'. In queste poche parole c'è davvero tutto.",
  "Sara Bosso, non la smetterò mai di ripeterti quanto sei speciale, unica e bellissima. Tu hai trasformato la mia vita e con te mi sento un uomo migliore.",
  "Con infinto amore,",
  "tuo per sempre Daniele",
  " ",
  "P.S. Ti amo",
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
