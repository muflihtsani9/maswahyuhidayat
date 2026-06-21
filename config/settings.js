/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "1111";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Mas Wahyu Hidayat";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Abadi",             // ← GANTI JUDUL LAGU
    artist: "Perunggu",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 86,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "Partner kerja terbaik, saudara seperjuangan." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "Selalu ada di saat susah maupun senang." },
  { file: "img3.jpeg", caption: "Banyak belajar tentang hidup dari sosok seorang Mas." },
  { file: "img4.jpeg", caption: "Lebih dari sekadar rekan, tapi layaknya abang kandung." },
  { file: "img5.jpeg", caption: "Terima kasih atas semua bimbingan dan kesabarannya." },
  { file: "img6.jpeg", caption: "Semoga sehat dan sukses selalu di setiap langkah." },
  { file: "img7.jpeg", caption: "Doa terbaik untuk Mas Wahyu dan keluarga." },
  { file: "img8.jpeg", caption: "Barakallahu fii umrik, Masku!" },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "Assalamualaikum Mas Wahyu..",
  "Selamat ulang tahun, Masku..",
  "Hari ini aziz ingin mengucapkan sesuatu yang mungkin selama ini tidak pernah benar-benar aziz sampaikan.",
  "Hidup ini mengajarkan aziz bahwa tidak semua orang yang datang akan bertahan. Tidak semua yang tertawa bersama akan tetap ada saat kita menangis. Tidak semua yang dekat akan menerima kekurangan kita dengan tulus.",
  "Tapi Allah mempertemukan aziz dengan mas.",
  "Awalnya hanya sebagai partner kerja dari perusahaan yang berbeda. Hubungan yang mungkin bagi orang lain biasa saja. Namun seiring berjalannya waktu, Allah menunjukkan bahwa pertemuan itu bukan sekadar kebetulan. Dari seorang rekan kerja, Mas berubah menjadi sosok yang aziz anggap saudara sendiri.",
  "Terima kasih, Mass...",
  "Terima kasih karena telah menerima aziz ketika aziz tidak memiliki apa-apa untuk dibanggakan.",
  "Terima kasih karena tetap menghargai aziz saat aziz dipenuhi kekurangan.",
  "Terima kasih karena tidak menjauh ketika aziz berada di titik terburuk dalam hidup.",
  "Terima kasih karena tetap percaya kepada aziz saat aziz sendiri bahkan sulit percaya pada diri aziz sendiri.",
  "Mungkin mas ngga pernah sadar, ada banyak hari yang aziz lalui terasa lebih ringan karena kehadiran mas.",
  "Ada banyak luka yang terasa lebih tenang karena nasihat mas.",
  "Ada banyak masalah yang tidak jadi membuat aziz jatuh karena aziz tahu masih ada seseorang yang menerima aziz apa adanya.",
  "Di dunia yang begitu mudah menghakimi, Mas memilih memahami.",
  "Di dunia yang begitu mudah meninggalkan, mas memilih bertahan.",
  "Di dunia yang sering menilai dari kelebihan, mas menerima bahkan saat melihat kekurangan aziz.",
  "Dan jujur, Mas...",
  "Sampai hari ini aziz masih sering bertanya dalam hati, amalan apa yang pernah aziz lakukan hingga Allah menghadirkan sosok seperti Mas wahyu dalam hidup aziz.",
  "Karena tidak semua orang beruntung memiliki saudara kandung yang baik.",
  "Tetapi Allah menghadirkan seseorang yang tidak terikat darah, namun mampu memberikan kasih sayang, perhatian, kesabaran, dan ketulusan layaknya seorang abang kandung.",
  "Jika suatu saat nanti hidup membawa kita ke jalan yang berbeda, aziz ingin mas tahu satu hal...",
  "Aziz akan selalu mengenang mas sebagai salah satu nikmat terbesar yang Allah kirimkan dalam perjalanan hidup aziz.",
  "Saat orang lain hanya melihat aziz ketika aziz berhasil, mas mengenal aziz saat aziz jatuh.",
  "Saat orang lain datang karena keadaan baik, mas tetap ada bahkan ketika keadaan buruk.",
  "Dan itu adalah kebaikan yang tidak akan pernah bisa aziz balas dengan apa pun.",
  "Di hari ulang tahun mas ini, yang paling aziz syukuri bukan hanya bertambahnya usia mas, tetapi karena Allah masih memberi kesempatan kepada aziz untuk mengenal dan berjalan sejauh ini dengan orang sebaik mas.",
  "Semoga Allah menjaga setiap langkah mas.",
  "Semoga setiap air mata yang pernah mas sembunyikan diganti dengan kebahagiaan yang berlipat.",
  "Semoga setiap kebaikan yang mas berikan kepada orang lain kembali kepada mas dengan cara yang paling indah.",
  "Semoga Allah melapangkan rezeki, menguatkan hati, menjaga keluarga, mengangkat derajat, dan mengabulkan seluruh doa terbaik mas.",
  "Dan semoga mas dan mba selalu menjadi keluarga sakinah, mawadah dan warahmah selamanya. Dan semoga Allah segera memberikan amanah terindah sesosok kehadiran buah hati untuk mas dan mba. Aamiin allahumma aamiin",
  "Dan jika suatu hari nanti aziz ditanya siapa orang yang paling berjasa dalam perjalanan hidup aziz selain keluarga, maka nama mas yg akan selalu ada dalam jawaban itu.",
  "Once more..",
  "Selamat ulang tahun, Mas.",
  "Terima kasih karena sudah menjadi saudara yang tidak lahir dari rahim yang sama, tetapi memiliki tempat yang begitu besar di hati aziz.",
  "Semoga Allah selalu menjaga Mas di mana pun berada.",
  "Barakallahu fii umrik, mas.",
  "Xx : Dari adik yang akan selalu bersyukur karena pernah dipertemukan dengan sosok yang sangat baik yaitu mas wahyu !"
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Awal Pertemuan",
    title: "Partner Kerja Biasa",
    text:  "Berawal dari rekan kerja beda perusahaan, tak disangka jadi saudara yang luar biasa.",
  },
  {
    depth: "8m",
    year:  "Titik Terendah",
    title: "Momen Pendewasaan",
    text:  "Saat aku sedang di titik terburuk, Mas tidak pernah menjauh dan tetap percaya padaku.",
  },
  {
    depth: "16m",
    year:  "Nasihat & Pelajaran",
    title: "Belajar Kehidupan",
    text:  "Banyak luka yang terasa lebih tenang dan masalah yang tak jadi menjatuhkan berkat nasihat dari Mas.",
  },
  {
    depth: "24m",
    year:  "Saudara Tak Sedarah",
    title: "Rasa Syukur",
    text:  "Bersyukur Allah mengirimkan sosok seperti Mas Wahyu. Nikmat terbesar dalam perjalanan hidupku.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "compass", text: "Semoga Allah senantiasa membimbing langkah dan melapangkan rezekimu, Mas." },
  { icon: "star",    text: "Semoga setiap kebaikan yang Mas berikan berbalik menjadi kebahagiaan yang berlipat ganda." },
  { icon: "anchor",  text: "Semoga kelak segera diberi amanah buah hati yang menjadi penyejuk mata bagi keluarga." },
  { icon: "heart",   text: "Semoga menjadi keluarga sakinah, mawaddah, warahmah bersama Mbak selamanya." },
  { icon: "wave",    text: "Di saat orang lain pergi, Mas memilih bertahan. Semoga Allah menggantinya dengan kemudahan di setiap urusan." },
  { icon: "star",    text: "Barakallahu fii umrik, Masku. Semoga sehat, bahagia, dan selalu dalam lindungan-Nya." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281234567890";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hey, I just opened the bottle. Thank you for making my day! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
