import { Question } from '../types';
import pancasilaImg from '../assets/images/pancasila_shield_symbols_1795776001622.jpg';
import bpupkiImg from '../assets/images/bpupki_sidang_sejarah_1795776001823.jpg';
import gotongRoyongImg from '../assets/images/gotong_royong_lingkungan_1795776002493.jpg';
import normaJalanImg from '../assets/images/tertib_norma_jalan_1795776003053.jpg';
import musyawarahImg from '../assets/images/musyawarah_kelas_sd_1795776005203.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // PILIHAN GANDA (18 SOAL) - ID 1 s.d. 18
  // ============================================================================

  // --- BAB 1: BELAJAR PANCASILA DENGAN MENYENANGKAN (ID 1 - 5) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Bab 1 - Sejarah Perumusan Pancasila',
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    difficulty: 'Mudah',
    imageUrl: bpupkiImg,
    imageCaption: 'Ilustrasi suasana sidang BPUPKI dalam merumuskan dasar negara Indonesia merdeka tahun 1945.',
    text: 'Perhatikan gambar ilustrasi sidang bersejarah di atas! Sidang pertama BPUPKI pada tanggal 29 Mei hingga 1 Juni 1945 dilaksanakan untuk merumuskan dasar negara Indonesia merdeka. Tokoh yang bertugas sebagai Ketua BPUPKI dalam sidang tersebut adalah...',
    options: [
      { id: 'A', text: 'Ir. Soekarno' },
      { id: 'B', text: 'dr. K.R.T. Radjiman Wedyodiningrat' },
      { id: 'C', text: 'Drs. Mohammad Hatta' },
      { id: 'D', text: 'Mr. Soepomo' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sidang pertama BPUPKI (Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia) berlangsung pada 29 Mei – 1 Juni 1945 dengan agenda utama membahas dasar negara. BPUPKI diketuai oleh dr. K.R.T. Radjiman Wedyodiningrat.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Bab 1 - Tokoh Perumus Pancasila',
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    difficulty: 'Mudah',
    text: 'Pada sidang pertama BPUPKI tanggal 1 Juni 1945, seorang tokoh menyampaikan pidato berisi lima asas dasar negara dan untuk pertama kalinya mengusulkan nama "Pancasila". Tokoh yang dimaksud adalah...',
    options: [
      { id: 'A', text: 'Mr. Mohammad Yamin' },
      { id: 'B', text: 'Prof. Dr. Mr. Soepomo' },
      { id: 'C', text: 'Ir. Soekarno' },
      { id: 'D', text: 'Ki Hajar Dewantara' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada tanggal 1 Juni 1945, Ir. Soekarno menyampaikan pidato mengenai calon dasar negara dan menamainya "Pancasila". Peristiwa ini kemudian diperingati setiap tanggal 1 Juni sebagai Hari Lahir Pancasila.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Bab 1 - Panitia Sembilan & Penetapan Pancasila',
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    difficulty: 'Sedang',
    text: 'Setelah masa persidangan pertama BPUPKI berakhir, dibentuklah Panitia Sembilan yang berhasil menyepakati rancangan pembukaan hukum dasar pada tanggal 22 Juni 1945. Dokumen hasil kesepakatan Panitia Sembilan tersebut dikenal dengan nama...',
    options: [
      { id: 'A', text: 'Teks Proklamasi Kemerdekaan' },
      { id: 'B', text: 'Piagam Jakarta (Jakarta Charter)' },
      { id: 'C', text: 'Sumpah Pemuda' },
      { id: 'D', text: 'Dekrit Presiden' },
    ],
    correctAnswer: 'B',
    explanation:
      'Panitia Sembilan yang diketuai Ir. Soekarno merumuskan rancangan Mukadimah UUD yang disebut Piagam Jakarta (Jakarta Charter) pada tanggal 22 Juni 1945, yang kemudian menjadi cikal bakal Pembukaan UUD NRI Tahun 1945.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Bab 1 - Kedudukan dan Fungsi Pancasila',
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    difficulty: 'Sedang',
    text: 'Pancasila dijadikan pedoman dalam penyelenggaraan pemerintahan, pembuatan undang-undang, dan pengaturan kehidupan bernegara di Indonesia. Pernyataan tersebut menunjukkan kedudukan Pancasila sebagai...',
    options: [
      { id: 'A', text: 'Dasar negara' },
      { id: 'B', text: 'Lambang daerah' },
      { id: 'C', text: 'Adat istiadat lokal' },
      { id: 'D', text: 'Peraturan sekolah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kedudukan Pancasila sebagai dasar negara berarti Pancasila menjadi sumber dari segala sumber hukum serta landasan utama dalam mengatur pemerintahan dan kehidupan bernegara.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Bab 1 - Nilai Dasar & Simbol Pancasila',
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    difficulty: 'Mudah',
    imageUrl: pancasilaImg,
    imageCaption: 'Lima lambang sila Pancasila pada perisai Garuda Pancasila.',
    text: 'Perhatikan gambar lima lambang sila Pancasila di atas! Simbol rantai emas bermata persegi dan lingkaran melambangkan nilai dasar kemanusiaan yang adil dan beradab serta hubungan antarsesama manusia yang saling membantu. Simbol tersebut merupakan lambang sila ke-...',
    options: [
      { id: 'A', text: 'Sila pertama' },
      { id: 'B', text: 'Sila kedua' },
      { id: 'C', text: 'Sila ketiga' },
      { id: 'D', text: 'Sila kelima' },
    ],
    correctAnswer: 'B',
    explanation:
      'Urutan lambang sila Pancasila: (1) Bintang emas = Ketuhanan, (2) Rantai emas = Kemanusiaan yang adil dan beradab, (3) Pohon beringin = Persatuan Indonesia, (4) Kepala banteng = Kerakyatan/Musyawarah, (5) Padi dan kapas = Keadilan sosial.',
  },

  // --- BAB 2: MENGAMALKAN PANCASILA (ID 6 - 10) ---
  {
    id: 6,
    type: 'pg',
    topic: 'Bab 2 - Pengamalan Sila Pertama',
    elemen: 'Bab 2: Mengamalkan Pancasila',
    difficulty: 'Mudah',
    text: 'Di kelas VI terdapat siswa yang berasal dari berbagai latar belakang agama. Saat jam istirahat bertepatan dengan waktu beribadah salah satu teman, sikap yang paling tepat sebagai wujud pengamalan sila pertama Pancasila adalah...',
    options: [
      { id: 'A', text: 'Mengajaknya bermain agar ia lupa waktu beribadah' },
      { id: 'B', text: 'Memberikan kesempatan dan menjaga ketenangan saat ia beribadah' },
      { id: 'C', text: 'Memintanya mengikuti cara ibadah kita sendiri' },
      { id: 'D', text: 'Menertawakan tata cara ibadah teman yang berbeda' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sila pertama (Ketuhanan Yang Maha Esa) mengajarkan sikap toleransi, menghormati kebebasan beragama, serta memberi kesempatan orang lain menjalankan ibadah dengan tenang.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Bab 2 - Pengamalan Sila Kedua',
    elemen: 'Bab 2: Mengamalkan Pancasila',
    difficulty: 'Sedang',
    text: 'Made melihat temannya terjatuh dari sepeda di halaman sekolah hingga lututnya terluka. Made segera menolongnya, mengantar ke ruang UKS, dan membantu membersihkan lukanya tanpa membeda-bedakan latar belakang teman tersebut. Sikap Made mencerminkan nilai sila ke-...',
    options: [
      { id: 'A', text: 'Kesatu (Ketuhanan Yang Maha Esa)' },
      { id: 'B', text: 'Kedua (Kemanusiaan yang Adil dan Beradab)' },
      { id: 'C', text: 'Keempat (Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan)' },
      { id: 'D', text: 'Kelima (Keadilan Sosial bagi Seluruh Rakyat Indonesia)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menolong sesama yang kesusahan dengan penuh kasih sayang, empati, dan tanpa membeda-bedakan merupakan pengamalan nilai Sila Kedua: Kemanusiaan yang Adil dan Beradab.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Bab 2 - Pengamalan Sila Ketiga (Gotong Royong)',
    elemen: 'Bab 2: Mengamalkan Pancasila',
    difficulty: 'Mudah',
    imageUrl: gotongRoyongImg,
    imageCaption: 'Kegiatan kerja bakti dan gotong royong membersihkan serta menghijaukan lingkungan bersama.',
    text: 'Perhatikan gambar kegiatan warga dan siswa di atas! Seluruh warga dari berbagai usia dan latar belakang bahu-membahu membersihkan taman, menanam pohon, serta membuang sampah bersama-sama. Kegiatan tersebut mencerminkan pengamalan Pancasila terutama sila ke-...',
    options: [
      { id: 'A', text: 'Sila Pertama' },
      { id: 'B', text: 'Sila Kedua' },
      { id: 'C', text: 'Sila Ketiga' },
      { id: 'D', text: 'Sila Keempat' },
    ],
    correctAnswer: 'C',
    explanation:
      'Gotong royong, kerja bakti, dan kebersamaan menjaga lingkungan tanpa membedakan suku maupun golongan memperkuat persatuan dan kesatuan bangsa, yang merupakan inti Sila Ketiga: Persatuan Indonesia.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Bab 2 - Analisis Perilaku Sila Pancasila',
    elemen: 'Bab 2: Mengamalkan Pancasila',
    difficulty: 'Sedang',
    text: 'Perhatikan daftar perilaku berikut di lingkungan sekolah:\n1. Memilih ketua kelas dengan bermusyawarah.\n2. Mengejek logat bicara teman dari daerah lain.\n3. Mengantre dengan tertib saat membeli makanan di kantin.\n4. Mengambil barang milik teman tanpa izin.\n\nPerilaku yang sesuai dengan nilai-nilai Pancasila ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '1 dan 2' },
      { id: 'B', text: '1 dan 3' },
      { id: 'C', text: '2 dan 4' },
      { id: 'D', text: '3 dan 4' },
    ],
    correctAnswer: 'B',
    explanation:
      'Memilih ketua kelas lewat musyawarah (sila ke-4) dan mengantre dengan tertib untuk menghormati hak orang lain (sila ke-2 dan ke-5) adalah perilaku terpuji sesuai Pancasila. Sebaliknya, mengejek teman dan mengambil barang tanpa izin melanggar Pancasila.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Bab 2 - Pengamalan Sila Kelima',
    elemen: 'Bab 2: Mengamalkan Pancasila',
    difficulty: 'Sukar',
    text: 'Di rumah, Ibu membagi tugas membersihkan rumah secara adil sesuai usia dan kemampuan masing-masing anggota keluarga. Kakak membersihkan halaman, adik merapikan mainan, dan semua anggota keluarga ikut menjaga kebersihan tanpa sikap boros air dan listrik. Sikap keluarga tersebut mencerminkan penerapan nilai sila ke-...',
    options: [
      { id: 'A', text: 'Pertama' },
      { id: 'B', text: 'Ketiga' },
      { id: 'C', text: 'Keempat' },
      { id: 'D', text: 'Kelima' },
    ],
    correctAnswer: 'D',
    explanation:
      'Pembagian tugas secara adil, menjaga keseimbangan hak dan kewajiban, serta bersikap hemat dan tidak boros mencerminkan pengamalan Sila Kelima: Keadilan Sosial bagi Seluruh Rakyat Indonesia.',
  },

  // --- BAB 3: MENGENAL NORMA, HAK, DAN KEWAJIBAN (ID 11 - 14) ---
  {
    id: 11,
    type: 'pg',
    topic: 'Bab 3 - Pengertian dan Fungsi Norma',
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Mudah',
    text: 'Norma merupakan aturan atau kaidah yang berlaku dalam kehidupan bermasyarakat. Berikut ini yang merupakan fungsi utama adanya norma dalam kehidupan berbangsa dan bernegara adalah...',
    options: [
      { id: 'A', text: 'Membatasi kebebasan warga agar tidak bisa berpendapat' },
      { id: 'B', text: 'Menciptakan ketertiban, keamanan, dan keharmonisan bersama' },
      { id: 'C', text: 'Menguntungkan kelompok masyarakat tertentu saja' },
      { id: 'D', text: 'Menghilangkan seluruh perbedaan budaya daerah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma berfungsi sebagai pedoman tingkah laku warga masyarakat agar tercipta ketertiban, keamanan, keadilan, dan kehidupan yang harmonis.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Bab 3 - Jenis-Jenis Norma',
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Sedang',
    text: 'Seorang siswa berkata jujur kepada gurunya bahwa ia belum sempat menyelesaikan tugas karena sakit, karena hati nuraninya merasa bersalah jika harus berbohong. Sikap siswa tersebut menaati aturan yang bersumber dari hati nurani manusia, yaitu...',
    options: [
      { id: 'A', text: 'Norma Kesopanan' },
      { id: 'B', text: 'Norma Hukum' },
      { id: 'C', text: 'Norma Kesusilaan' },
      { id: 'D', text: 'Norma Adat' },
    ],
    correctAnswer: 'C',
    explanation:
      'Norma kesusilaan adalah peraturan hidup yang bersumber dari suara hati nurani manusia (seperti bersikap jujur, tidak berdusta, dan berbuat baik). Sanksi pelanggarannya berupa rasa penyesalan batin.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Bab 3 - Penerapan Norma Hukum',
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Mudah',
    imageUrl: normaJalanImg,
    imageCaption: 'Siswa menyeberang di zebra cross dan pengendara motor memakai helm berhenti di belakang garis batas saat lampu merah.',
    text: 'Perhatikan gambar suasana di depan sekolah pada ilustrasi di atas! Pengendara sepeda motor memakai helm dan berhenti tepat di belakang garis batas ketika lampu merah menyala agar siswa dapat menyeberang di zebra cross dengan aman. Perilaku tersebut merupakan kepatuhan terhadap...',
    options: [
      { id: 'A', text: 'Norma Hukum karena diatur oleh undang-undang negara dan memiliki sanksi tegas' },
      { id: 'B', text: 'Norma Kesopanan karena hanya berlaku di lingkungan keluarga saja' },
      { id: 'C', text: 'Norma Kesusilaan karena tidak tertulis dan tidak memiliki sanksi' },
      { id: 'D', text: 'Norma Agama karena hanya berlaku pada hari raya tertentu' },
    ],
    correctAnswer: 'A',
    explanation:
      'Peraturan lalu lintas (memakai helm, mematuhi lampu merah, mendahulukan pejalan kaki di zebra cross) termasuk Norma Hukum yang dibuat lembaga berwenang dan bersifat memaksa dengan sanksi tegas.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Bab 3 - Keseimbangan Hak dan Kewajiban',
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Sedang',
    text: 'Sebagai seorang pelajar sekaligus warga negara, seorang anak berhak memperoleh lingkungan kelas yang bersih dan nyaman untuk belajar. Agar hak dan kewajiban berjalan secara seimbang, sikap yang seharusnya dilakukan anak tersebut adalah...',
    options: [
      { id: 'A', text: 'Menuntut petugas kebersihan saja untuk menyapu kelas setiap hari' },
      { id: 'B', text: 'Melaksanakan jadwal piket kebersihan kelas dengan penuh tanggung jawab' },
      { id: 'C', text: 'Menggunakan fasilitas kelas tanpa peduli kebersihannya' },
      { id: 'D', text: 'Meminta nilai bagus meskipun tidak mengerjakan tugas sekolah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Keseimbangan antara hak dan kewajiban berarti kita menjalankan kewajiban terlebih dahulu (seperti piket kelas dan menjaga kebersihan) seiring dengan memperoleh hak menikmati kelas yang nyaman.',
  },

  // --- BAB 4: BELAJAR BERMUSYAWARAH (ID 15 - 18) ---
  {
    id: 15,
    type: 'pg',
    topic: 'Bab 4 - Pengertian dan Tujuan Musyawarah',
    elemen: 'Bab 4: Belajar Bermusyawarah',
    difficulty: 'Mudah',
    text: 'Musyawarah merupakan ciri khas bangsa Indonesia dalam menyelesaikan persoalan bersama. Tujuan utama dilaksanakannya musyawarah adalah...',
    options: [
      { id: 'A', text: 'Memenangkan pendapat kelompok yang paling kuat' },
      { id: 'B', text: 'Mencapai kata mufakat atau kesepakatan bersama yang adil' },
      { id: 'C', text: 'Memperpanjang perdebatan agar rapat berlangsung lama' },
      { id: 'D', text: 'Menghindari tanggung jawab saat mengambil keputusan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tujuan utama musyawarah adalah mencapai mufakat (kesepakatan bersama) yang dapat diterima dan dilaksanakan bersama demi kepentingan umum.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Bab 4 - Prinsip Musyawarah untuk Mufakat',
    elemen: 'Bab 4: Belajar Bermusyawarah',
    difficulty: 'Sedang',
    text: 'Dalam musyawarah desa tentang perbaikan saluran air, usulan Pak Wayan tidak terpilih sebagai keputusan akhir. Meskipun demikian, Pak Wayan tetap ikut membantu kerja bakti perbaikan saluran air sesuai hasil kesepakatan rapat. Sikap Pak Wayan menunjukkan prinsip musyawarah yaitu...',
    options: [
      { id: 'A', text: 'Mengutamakan kepentingan pribadi di atas kepentingan umum' },
      { id: 'B', text: 'Menerima dan melaksanakan hasil keputusan bersama dengan lapang dada' },
      { id: 'C', text: 'Memaksakan kehendak kepada warga lain agar rapat diulang' },
      { id: 'D', text: 'Menolak hasil musyawarah secara diam-diam' },
    ],
    correctAnswer: 'B',
    explanation:
      'Salah satu prinsip penting musyawarah adalah menerima serta melaksanakan hasil keputusan bersama dengan ikhlas dan penuh tanggung jawab, meskipun pendapat pribadi tidak terpilih.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Bab 4 - Menghargai Perbedaan Pendapat',
    elemen: 'Bab 4: Belajar Bermusyawarah',
    difficulty: 'Mudah',
    imageUrl: musyawarahImg,
    imageCaption: 'Siswa kelas VI bermusyawarah memilih ketua kelas dengan tertib dan mengangkat tangan secara bergantian.',
    text: 'Perhatikan gambar musyawarah kelas VI di atas! Ketika seorang teman sedang menyampaikan pendapatnya mengenai calon ketua kelas, sikap yang mencerminkan penghargaan terhadap perbedaan pendapat adalah...',
    options: [
      { id: 'A', text: 'Memotong pembicaraan teman jika pendapatnya berbeda dengan kita' },
      { id: 'B', text: 'Mendengarkan dengan tenang dan mengangkat tangan sebelum berbicara' },
      { id: 'C', text: 'Mengajak teman sebangku mengobrol agar tidak perlu mendengarkan' },
      { id: 'D', text: 'Menyoraki teman yang menyampaikan usulan kurang populer' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menghargai perbedaan pendapat saat musyawarah ditunjukkan dengan mendengarkan pembicara dengan penuh perhatian, tidak menyela, dan menyampaikan tanggapan secara sopan setelah dipersilakan.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Bab 4 - Pengambilan Keputusan Bersama',
    elemen: 'Bab 4: Belajar Bermusyawarah',
    difficulty: 'Sukar',
    text: 'Kelas VI ingin menentukan tujuan kegiatan karya wisata. Setelah berdiskusi cukup lama, terdapat dua pilihan tempat yang sama kuat dan belum tercapai kata mufakat meskipun sudah dimusyawarahkan dengan baik. Langkah pengambilan keputusan yang paling tepat sesuai tata cara musyawarah adalah...',
    options: [
      { id: 'A', text: 'Membatalkan kegiatan karya wisata secara sepihak' },
      { id: 'B', text: 'Menyerahkan keputusan kepada satu siswa yang paling vokal' },
      { id: 'C', text: 'Melakukan pemungutan suara (voting) secara adil dan demokratis' },
      { id: 'D', text: 'Membiarkan tiap siswa pergi ke tempat yang berbeda-beda sendiri' },
    ],
    correctAnswer: 'C',
    explanation:
      'Dalam pengambilan keputusan bersama, musyawarah untuk mufakat selalu diutamakan. Namun apabila mufakat benar-benar tidak tercapai setelah diskusi maksimal, keputusan dapat diambil melalui pemungutan suara (voting) secara jujur dan adil.',
  },

  // ============================================================================
  // PILIHAN GANDA KOMPLEKS (3 SOAL) - ID 19 s.d. 21
  // Ketentuan: Kemungkinan > 1 jawaban benar, setiap soal memiliki 3 pilihan jawaban (A, B, C)
  // ============================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Bab 1 & 2 - Kedudukan & Nilai Dasar Pancasila',
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    difficulty: 'Sedang',
    imageUrl: pancasilaImg,
    imageCaption: 'Perisai lima lambang sila Pancasila.',
    text: 'Perhatikan gambar lima lambang sila Pancasila di atas! Pilihlah SEMUA pernyataan yang BENAR mengenai kedudukan dan nilai dasar Pancasila berikut ini! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Pancasila berkedudukan sebagai dasar negara dan pandangan hidup bangsa Indonesia' },
      { id: 'B', text: 'Simbol pohon beringin melambangkan sila keempat tentang musyawarah dan perwakilan' },
      { id: 'C', text: 'Kelima sila Pancasila saling berkaitan dan menjiwai satu sama lain sebagai satu kesatuan utuh' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      '- Pernyataan A BENAR: Pancasila adalah dasar negara sekaligus pandangan hidup bangsa.\n- Pernyataan B SALAH: Pohon beringin adalah lambang sila ketiga (Persatuan Indonesia), sedangkan sila keempat dilambangkan oleh kepala banteng.\n- Pernyataan C BENAR: Kelima sila merupakan satu kesatuan yang bulat dan saling menjiwai.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Bab 3 - Jenis Norma & Keseimbangan Hak-Kewajiban',
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Sedang',
    text: 'Manakah pernyataan yang BENAR mengenai jenis-jenis norma serta keseimbangan hak dan kewajiban dalam kehidupan berbangsa dan bernegara? (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Norma kesopanan bersumber dari tata pergaulan masyarakat dengan sanksi berupa teguran atau celaan sosial' },
      { id: 'B', text: 'Pelaksanaan kewajiban sebagai warga negara, seperti menaati hukum dan membayar pajak, harus seimbang dengan pemenuhan hak' },
      { id: 'C', text: 'Norma hukum bersifat sukarela sehingga warga negara bebas memilih untuk mematuhi atau mengabaikannya' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '- Pernyataan A BENAR: Norma kesopanan berasal dari pergaulan masyarakat dan pelanggarnya mendapat sanksi sosial seperti teguran atau cemoohan.\n- Pernyataan B BENAR: Hak dan kewajiban harus dilaksanakan secara seimbang.\n- Pernyataan C SALAH: Norma hukum bersifat mengikat dan memaksa dengan sanksi hukum yang tegas.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Bab 4 - Prinsip & Etika Bermusyawarah',
    elemen: 'Bab 4: Belajar Bermusyawarah',
    difficulty: 'Sedang',
    imageUrl: musyawarahImg,
    imageCaption: 'Musyawarah siswa di dalam kelas.',
    text: 'Perhatikan gambar kegiatan musyawarah kelas di atas! Pilihlah SEMUA pernyataan yang BENAR tentang prinsip musyawarah dan sikap menghargai pendapat! (Pilihan benar bisa lebih dari satu)',
    options: [
      { id: 'A', text: 'Setiap peserta musyawarah memiliki hak yang sama untuk menyampaikan pendapat secara sopan' },
      { id: 'B', text: 'Keputusan hasil musyawarah harus mengutamakan kepentingan bersama di atas kepentingan pribadi' },
      { id: 'C', text: 'Perbedaan pendapat dalam musyawarah disikapi dengan kepala dingin untuk mencari solusi terbaik bersama' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Ketiga pernyataan (A, B, dan C) merupakan prinsip utama musyawarah untuk mufakat: kesetaraan hak berpendapat secara santun, mengutamakan kepentingan umum, serta sikap bijak menghargai perbedaan pendapat demi solusi bersama.',
  },

  // ============================================================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL) - ID 22 s.d. 30
  // Ketentuan: Setiap soal memiliki 3 deskripsi pernyataan dengan pilihan BENAR / SALAH
  // ============================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Bab 1 - Sejarah Perumusan & Tokoh Pancasila',
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    difficulty: 'Sedang',
    imageUrl: bpupkiImg,
    imageCaption: 'Suasana sidang perumusan dasar negara pada masa BPUPKI.',
    text: 'Amati ilustrasi sidang BPUPKI di atas serta ingat kembali sejarah perumusan Pancasila. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Tiga tokoh yang menyampaikan usulan rumusan dasar negara pada sidang pertama BPUPKI adalah Mr. Mohammad Yamin, Prof. Dr. Mr. Soepomo, dan Ir. Soekarno.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada sidang PPKI tanggal 18 Agustus 1945, rumusan final Pancasila disahkan dalam Pembukaan UUD NRI Tahun 1945.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Hari Lahir Pancasila diperingati setiap tanggal 17 Agustus bersamaan dengan pembacaan teks Proklamasi Kemerdekaan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Tiga tokoh pengusul dasar negara di sidang I BPUPKI adalah Moh. Yamin (29 Mei), Soepomo (31 Mei), dan Ir. Soekarno (1 Juni) (BENAR).\n2. Pancasila secara resmi disahkan oleh PPKI pada 18 Agustus 1945 dalam Pembukaan UUD 1945 (BENAR).\n3. Hari Lahir Pancasila diperingati setiap tanggal 1 Juni, bukan 17 Agustus (SALAH).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Bab 1 - Kedudukan, Fungsi, & Nilai Dasar Pancasila',
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    difficulty: 'Sedang',
    text: 'Pancasila memiliki kedudukan mulia bagi bangsa Indonesia sejak awal kemerdekaan hingga masa kini. Tentukan kebenaran dari masing-masing pernyataan mengenai fungsi dan nilai dasar Pancasila berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Sebagai pandangan hidup bangsa, Pancasila menjadi pedoman perilaku sehari-hari masyarakat Indonesia agar hidup rukun dan bermartabat.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sebagai sumber dari segala sumber hukum, tidak boleh ada peraturan perundang-undangan di Indonesia yang bertentangan dengan nilai Pancasila.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Nilai dasar Pancasila hanya berlaku bagi pejabat pemerintahan dan tidak perlu diamalkan oleh anak usia sekolah dasar.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pancasila sebagai pandangan hidup menuntun perilaku seluruh warga dalam kehidupan sehari-hari (BENAR).\n2. Pancasila sebagai dasar negara dan sumber segala sumber hukum mengharuskan seluruh aturan negara selaras dengannya (BENAR).\n3. Nilai Pancasila wajib diamalkan oleh seluruh warga negara, termasuk siswa sekolah dasar (SALAH).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Bab 2 - Pengamalan Sila 1, 2, dan 3 Pancasila',
    elemen: 'Bab 2: Mengamalkan Pancasila',
    difficulty: 'Mudah',
    text: 'Sila pertama hingga sila ketiga Pancasila mengajarkan hubungan harmonis dengan Tuhan, sesama manusia, dan persatuan bangsa. Tentukan kebenaran dari masing-masing pernyataan penerapan Pancasila berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Berdoa sebelum dan sesudah belajar serta menghormati teman yang berbeda agama merupakan contoh penerapan sila pertama.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Menggunakan produk buatan dalam negeri dan mencintai budaya daerah Indonesia merupakan wujud penerapan sila ketiga.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Hanya mau berteman dan duduk sebangku dengan teman yang berasal dari suku yang sama merupakan pengamalan sila kedua.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Berdoa dan toleransi beragama adalah wujud sila pertama (BENAR).\n2. Bangga menggunakan produk dalam negeri dan mencintai budaya Nusantara menguatkan persatuan bangsa sesuai sila ketiga (BENAR).\n3. Memilih-milih teman berdasarkan suku bertentangan dengan nilai kemanusiaan (sila ke-2) dan persatuan (sila ke-3) (SALAH).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Bab 2 - Analisis Perilaku Masyarakat Sesuai Pancasila',
    elemen: 'Bab 2: Mengamalkan Pancasila',
    difficulty: 'Sedang',
    imageUrl: gotongRoyongImg,
    imageCaption: 'Gotong royong warga dan pelajar membersihkan lingkungan desa.',
    text: 'Perhatikan gambar suasana gotong royong di lingkungan masyarakat pada ilustrasi di atas. Tentukan kebenaran analisis perilaku berikut berdasarkan nilai-nilai Pancasila (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Ikut serta menanam pohon dan membersihkan lingkungan sekitar bersama warga menunjukkan sikap peduli dan tanggung jawab sosial sesuai Pancasila.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membagi tugas kerja bakti secara adil sehingga anak-anak melakukan pekerjaan ringan sementara orang dewasa mengerjakan tugas berat sesuai dengan nilai keadilan sosial.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Membuang sampah sembarangan di taman setelah warga selesai membersihkannya merupakan perilaku yang sesuai dengan nilai kebebasan berpendapat.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Berpartisipasi dalam penghijauan dan kebersihan lingkungan mencerminkan semangat gotong royong dan persatuan (BENAR).\n2. Pembagian tugas sesuai kemampuan adalah wujud keadilan dan kepedulian antargenerasi (BENAR).\n3. Membuang sampah sembarangan merusak lingkungan serta tidak menghargai jerih payah bersama, sehingga bertentangan dengan Pancasila (SALAH).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Bab 3 - Pengertian, Fungsi, & Jenis-Jenis Norma',
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Sedang',
    text: 'Dalam kehidupan bermasyarakat dikenal empat macam norma utama, yaitu norma agama, norma kesusilaan, norma kesopanan, dan norma hukum. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Norma agama bersumber dari wahyu Tuhan Yang Maha Esa yang termuat dalam kitab suci setiap agama.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mengucapkan salam dan berbicara dengan bahasa yang santun kepada orang tua atau guru merupakan contoh penerapan norma kesopanan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Sanksi bagi pelanggar norma kesopanan di masyarakat adalah hukuman penjara dan denda dari pengadilan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Norma agama bersumber dari ajaran dan wahyu Tuhan Yang Maha Esa (BENAR).\n2. Bersikap santun dan mengucapkan salam kepada orang tua/guru adalah bagian dari norma kesopanan (BENAR).\n3. Hukuman penjara dan denda adalah sanksi norma hukum, bukan norma kesopanan yang sanksinya berupa teguran atau cemoohan sosial (SALAH).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Bab 3 - Penerapan Norma dalam Kehidupan Sehari-hari',
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Mudah',
    imageUrl: normaJalanImg,
    imageCaption: 'Ketertiban berlalu lintas dan penyeberangan siswa di depan sekolah.',
    text: 'Amati gambar penerapan aturan di depan sekolah pada ilustrasi di atas. Tentukan kebenaran dari masing-masing pernyataan tentang penerapan norma berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Menyeberang jalan melalui zebra cross merupakan bentuk kepatuhan siswa terhadap norma dan aturan keselamatan jalan raya.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Berhenti di belakang garis putih saat lampu lalu lintas berwarna merah melindungi keselamatan para pejalan kaki.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pengendara sepeda motor boleh menerobos lampu merah di depan sekolah apabila sedang terburu-buru.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Menyeberang di zebra cross mematuhi aturan keselamatan lalu lintas (BENAR).\n2. Berhenti di belakang garis batas saat lampu merah menjaga hak keselamatan pejalan kaki (BENAR).\n3. Menerobos lampu merah melanggar norma hukum lalu lintas dan membahayakan keselamatan orang lain (SALAH).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Bab 3 - Hak, Kewajiban, & Keseimbangannya',
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    difficulty: 'Sukar',
    text: 'Setiap warga negara Indonesia memiliki hak dan kewajiban yang dijamin serta diatur dalam aturan negara dan sekolah. Tentukan kebenaran dari masing-masing pernyataan mengenai hak dan kewajiban berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Mendapatkan pendidikan dan pengajaran yang layak di sekolah merupakan salah satu hak dasar anak dan warga negara.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Menjaga fasilitas umum seperti taman sekolah, perpustakaan, dan rambu jalan adalah kewajiban setiap warga agar hak bersama tetap terjaga.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Seseorang boleh menuntut haknya secara penuh meskipun selalu menghindari seluruh kewajibannya di rumah maupun di sekolah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Memperoleh pendidikan yang layak dijamin UUD 1945 Pasal 31 sebagai hak warga negara (BENAR).\n2. Menjaga fasilitas bersama adalah kewajiban agar semua orang dapat menikmati hak menggunakan fasilitas tersebut (BENAR).\n3. Hak dan kewajiban harus dijalankan secara seimbang; kita tidak boleh hanya menuntut hak sambil melalaikan kewajiban (SALAH).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Bab 4 - Pengertian, Prinsip, & Etika Musyawarah',
    elemen: 'Bab 4: Belajar Bermusyawarah',
    difficulty: 'Sedang',
    text: 'Bermusyawarah merupakan wujud pengamalan nilai kerakyatan dalam kehidupan siswa di sekolah dan warga di masyarakat. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Musyawarah dilakukan dengan semangat kekeluargaan untuk mencari jalan keluar terbaik atas suatu masalah bersama.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam musyawarah, pendapat seorang siswa tetap berhak didengar dan dipertimbangkan tanpa memandang status atau kedudukan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Apabila pendapat kita tidak disetujui peserta rapat, kita berhak meninggalkan rapat dan menolak mematuhi keputusan bersama.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Semangat kekeluargaan adalah landasan musyawarah untuk mencari solusi bersama (BENAR).\n2. Semua peserta musyawarah memiliki kedudukan setara untuk mengemukakan gagasan (BENAR).\n3. Meninggalkan rapat dan menolak hasil keputusan bersama bertentangan dengan prinsip mufakat dan tanggung jawab bersama (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Bab 4 - Pengambilan Keputusan & Penyelesaian Masalah',
    elemen: 'Bab 4: Belajar Bermusyawarah',
    difficulty: 'Sukar',
    text: 'Kelas VI menghadapi perbedaan pilihan jadwal kerja bakti kelas menjelang lomba kebersihan sekolah. Sebagian siswa mengusulkan hari Jumat pagi, sedangkan sebagian lain mengusulkan Sabtu pagi. Tentukan kebenaran langkah penyelesaian masalah melalui musyawarah berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Ketua kelas memimpin musyawarah dengan mempersilakan kedua pihak menyampaikan alasan dan mempertimbangkan jadwal pelajaran terlebih dahulu.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jika melalui diskusi sudah ditemukan kesepakatan waktu yang tidak mengganggu pelajaran dan disetujui bersama, itulah hasil mufakat.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Setelah keputusan diambil bersama dalam rapat kelas, hanya siswa yang setuju saja yang wajib ikut kerja bakti.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pemimpin musyawarah memfasilitasi penyampaian alasan secara adil agar keputusan mempertimbangkan kondisi nyata (BENAR).\n2. Kesepakatan bersama hasil dialog terbuka yang diterima semua pihak merupakan mufakat (BENAR).\n3. Keputusan musyawarah yang telah sah mengikat seluruh anggota kelas, sehingga semua siswa wajib melaksanakannya bersama (SALAH).',
  },
];
