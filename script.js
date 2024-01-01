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
  "Mentre aspettavo di trovare una scusa decente per scriverti, stavo guardando le tue foto di Facebook, e ho messo un like a una di queste, ma l'ho cancellato subito, non volevo apparire troppo sfacciato, ma il danno ormai era fatto, tu hai ricevuto la notifica e mi hai scritto, e da quel momento è iniziato il periodo più bello della mia vita",
];

const titleBox = document.getElementById("title");
const dateBox = document.getElementById("date");

function typeWriterTitle(title, DOMElement) {
  let index = 0;

  function type() {
    DOMElement.textContent = title.slice(0, index);
    index++;

    if (index <= title.length) {
      setTimeout(type, 90); // Imposta la velocità di scrittura
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
        setTimeout(writeChar, 90);
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
  setTimeout(() => typeWriterTitle(date, dateBox), 4000);
  setTimeout(() => typeWriterPharagraphs(0, 0), 9000);
});
