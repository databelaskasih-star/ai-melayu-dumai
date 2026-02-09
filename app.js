const jawapan = [
  {
    kunci: ["asal", "sejarah", "dumai"],
    teks: "Nak, Dumai ini asalnya negeri pesisir. Orang Melayu hidupnya bergantung pada laut dan adat. Dari situlah marwah Dumai bermula."
  },
  {
    kunci: ["adat"],
    teks: "Cu, adat Melayu itu panduan hidup. Orang tua-tua berpesan, adat bersendi syarak, syarak bersendi Kitabullah."
  },
  {
    kunci: ["tanjak", "pakaian"],
    teks: "Ananda, tanjak itu tanda akal dan maruah. Ia bukan hiasan, tapi lambang jati diri orang Melayu."
  }
];

function jawab() {
  const input = document.getElementById("input").value.toLowerCase();
  let respon = "Maafkan orang tua ini, nak. Hal itu belum ada dalam ingatan.";

  jawapan.forEach(item => {
    item.kunci.forEach(k => {
      if (input.includes(k)) {
        respon = item.teks;
      }
    });
  });

  document.getElementById("output").innerText = respon;
  document.getElementById("input").value = "";
}

function dengar() {
  const teks = document.getElementById("output").innerText;

  const suara = new SpeechSynthesisUtterance(teks);
  suara.lang = "id-ID";
  suara.rate = 0.85;
  suara.pitch = 0.9;

  window.speechSynthesis.cancel(); // hentikan suara lama
  window.speechSynthesis.speak(suara);
}
let pengenalSuara;

if ('webkitSpeechRecognition' in window) {
  pengenalSuara = new webkitSpeechRecognition();
  pengenalSuara.lang = 'id-ID';
  pengenalSuara.continuous = false;
  pengenalSuara.interimResults = false;
}

function mulaDengar() {
  if (!pengenalSuara) {
    alert("Cu, browser ini belum pandai dengar suara. Pakai Chrome ya.");
    return;
  }

  pengenalSuara.start();

  pengenalSuara.onresult = function(event) {
    const teks = event.results[0][0].transcript.toLowerCase();
    document.getElementById("input").value = teks;
    jawab();
    setTimeout(dengar, 600);
  };
}

