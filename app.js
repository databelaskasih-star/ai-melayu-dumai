// ==================================================
// AI MELAYU DUMAI – DUMAI BERKHIDMAT
// FREE • OFFLINE • TANPA TOKEN • ANAK MUDA
// ==================================================

// ====== GAYA BAHASA AI ======
function gayaJawab(teks) {
  const pembuka = [
    "Baik awak, dengar elok-elok ya 👌\n\n",
    "Ooo, pasal tu ya 😄\n\n",
    "Baik, aku ceritokan sikit 👇\n\n",
    "Menarik soalan awak tu 👍\n\n"
  ];
  return pembuka[Math.floor(Math.random() * pembuka.length)] + teks;
}

// ====== ILMU DUMAI ======
const DATA = {
  aplikasi: `
Aplikasi DUMAI BERKHIDMAT adalah portal layanan terpadu Pemerintah Kota Dumai.
Digagas dan dikembangkan oleh Bapak Muhammad Hafizan
berdasarkan proposal “Pengembangan Aplikasi Dumai Berkhidmat”.

Aplikasi ni dibuat untuk menyatukan semua layanan pemerintah
dalam satu platform supaya dak ribet, cepat, dan telus.
`,

  tujuan: `
Tujuan utama Aplikasi Dumai Berkhidmat:
1. Gabungkan seluruh layanan pemerintah
2. Mudahkan masyarakat Dumai
3. Tingkatkan transparansi & kepercayaan publik
4. Dukung Dumai sebagai Smart City moden
`,

  pengguna: `
Pengguna aplikasi Dumai Berkhidmat:
- Warga Kota Dumai
- Pemerintah daerah
- UMKM & pelaku usaha
- Investor
- Anak muda
- Pengunjung Kota Dumai
`,

  pemimpin: `
Pemimpin Kota Dumai 2025–2030:
Wali Kota: H. Paisal, SKM., MARS
Wakil Wali Kota: Sugiyarto
Dilantik 20 Februari 2025
Ketua DPRD (2026): Agus Miswandi, S.A.B.

Tagline pembangunan:
"Dumai Kota Idaman"
"Dumai Berkhidmat"
`,

  sejarah: `
Dumai bermula dari perkampungan Melayu pesisir.
Resmi jadi kota otonom pada 20 April 1999 melalui UU No.16 Tahun 1999.
Hasil pemekaran dari Kabupaten Bengkalis.
Kini Dumai dikenal sebagai kota industri, pelabuhan, dan perdagangan.
`,

  pemimpinLama: `
Daftar Wali Kota Dumai:
- Wan Dahlan Ibrahim (1999–2004)
- Zulkifli AS (2005–2010 & 2016–2020)
- Khairul Anwar (2010–2015)
- Paisal (2021–2024 & 2025–2030)

Pj & Plt:
- Arlizman Agus
- Jonli
- Teuku Raja Fahsul Falah
`,

  putriTujuh: `
Legenda Putri Tujuh berasal dari Kerajaan Seri Bunga Tanjung
yang dipimpin Ratu Cik Sima.
Putri bungsu Mayang Mengurai sangat jelita.
Akibat perang dan pengkhianatan,
ketujuh putri wafat di persembunyian.
Nama Dumai berasal dari ucapan “di Umai”.
`,

  adat: `
Adat Melayu Dumai berpegang pada prinsip:
Adat bersendi syarak, syarak bersendi Kitabullah.

Tanjak melambangkan marwah dan akal.
Pakaian adat: baju kurung & teluk belanga.
`,

  makanan: `
Masakan khas Dumai:
- Gulai asam pedas
- Ikan bakar pesisir
- Sambal belacan
- Ipubun
- Ontam
- Panintuak
- Suman
`,

  bahasa: `
Bahasa Melayu Dumai menggunakan dialek lembut & pekat.
Contoh kata:
ape (apa), dak (tidak), awak (kamu/saya),
omak (ibu), jumpe (jumpa), kemane (ke mana).
`,

  geografi: `
Dumai terletak di pesisir Riau.
Wilayah rawa gambut, ketinggian ±3 mdpl.
Memiliki 15 sungai yang bisa dilayari.
Iklim tropis basah, suhu 22–34°C.
`,

  nasihat: `
Orang Melayu berpesan:
Kalau hidup nak selamat,
adat jangan ditinggalkan,
ilmu jangan disia-siakan,
dan budi jangan dilupakan.
`
};

// ====== PANTUN ======
function buatPantun() {
  const pantun = [
    "Pergi ke Dumai membawa harap,\nSinggah sebentar di tepi dermaga.\nAdat dijunjung, negeri dijaga,\nItulah Melayu bermaruah tegap.",

    "Pagi hari memukat ikan,\nPetang disimpan di dalam peti.\nKalau pemimpin jujur dan beriman,\nRakyat pun hidup aman dan harmoni.",

    "Ke hutan mencari kayu nibung,\nKayu dianyam jadi bidai.\nIlmu dijaga, adat dijunjung,\nDumai melangkah sampai ke jaya."
  ];
  return pantun[Math.floor(Math.random() * pantun.length)];
}

// ====== OTAK AI ======
function jawab() {
  const input = document.getElementById("input").value.toLowerCase();
  let isi = "";

  if (input.includes("pantun")) isi = buatPantun();
  else if (input.includes("aplikasi")) isi = DATA.aplikasi;
  else if (input.includes("tujuan")) isi = DATA.tujuan;
  else if (input.includes("fitur") || input.includes("pengguna")) isi = DATA.pengguna;
  else if (input.includes("wali") || input.includes("pemimpin")) isi = DATA.pemimpin;
  else if (input.includes("sejarah")) isi = DATA.sejarah;
  else if (input.includes("wali kota dulu")) isi = DATA.pemimpinLama;
  else if (input.includes("putri tujuh")) isi = DATA.putriTujuh;
  else if (input.includes("adat") || input.includes("tanjak")) isi = DATA.adat;
  else if (input.includes("makanan")) isi = DATA.makanan;
  else if (input.includes("bahasa")) isi = DATA.bahasa;
  else if (input.includes("geografi") || input.includes("iklim")) isi = DATA.geografi;
  else if (input.includes("nasihat")) isi = DATA.nasihat;
  else {
    isi =
      "Aku paham awak tanyo pasal Dumai 👍\n" +
      "Cubo sebutkan topik, macam:\n" +
      "- Sejarah Dumai\n" +
      "- Wali Kota Dumai\n" +
      "- Adat Melayu\n" +
      "- Makanan khas\n" +
      "- Pantun\n";
  }

  document.getElementById("output").innerText = gayaJawab(isi);
  document.getElementById("input").value = "";
}

// ====== SUARA ======
function dengar() {
  const teks = document.getElementById("output").innerText;
  if (!teks) return;

  const suara = new SpeechSynthesisUtterance(teks);
  suara.lang = "id-ID";
  suara.rate = 1.05;
  suara.pitch = 1.15;
  speechSynthesis.cancel();
  speechSynthesis.speak(suara);
}
