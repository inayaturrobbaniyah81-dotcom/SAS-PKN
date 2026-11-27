import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran PKN
 * Lingkup Materi: Bab 1 s.d. Bab 4
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal PKN Kelas VI (18 PG, 3 PGK, 9 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  // --- BAB 1 (ID 1 - 5) ---
  1: {
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    tujuanPembelajaran:
      'Memahami sejarah perumusan Pancasila dan mengidentifikasi tokoh-tokoh perumus Pancasila pada sidang BPUPKI.',
    indikatorSoal:
      'Disajikan gambar ilustrasi suasana sidang BPUPKI 1945 dan narasi persidangan pertama, peserta didik dapat mengidentifikasi tokoh yang bertugas sebagai Ketua BPUPKI.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    tujuanPembelajaran:
      'Mengidentifikasi tokoh-tokoh perumus Pancasila dan sejarah kelahiran istilah Pancasila.',
    indikatorSoal:
      'Disajikan narasi peristiwa sidang pertama BPUPKI tanggal 1 Juni 1945, peserta didik dapat menentukan tokoh yang pertama kali mengusulkan nama Pancasila.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    tujuanPembelajaran:
      'Memahami sejarah perumusan Pancasila melalui peran Panitia Sembilan dan hasil kesepakatannya.',
    indikatorSoal:
      'Disajikan informasi pembentukan Panitia Sembilan pada tanggal 22 Juni 1945, peserta didik dapat mengidentifikasi nama dokumen hasil kesepakatan rancangan pembukaan hukum dasar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    tujuanPembelajaran:
      'Memahami kedudukan dan fungsi Pancasila dalam kehidupan berbangsa dan bernegara.',
    indikatorSoal:
      'Disajikan deskripsi peran Pancasila sebagai pedoman penyelenggaraan pemerintahan dan pembuatan undang-undang, peserta didik dapat menentukan kedudukan Pancasila sebagai dasar negara.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    tujuanPembelajaran:
      'Mengidentifikasi nilai-nilai dasar Pancasila dan lambang pada perisai Garuda Pancasila.',
    indikatorSoal:
      'Disajikan gambar lima lambang sila Pancasila dan deskripsi simbol rantai emas, peserta didik dapat menentukan sila yang dilambangkan oleh simbol tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAB 2 (ID 6 - 10) ---
  6: {
    elemen: 'Bab 2: Mengamalkan Pancasila',
    tujuanPembelajaran:
      'Memahami makna sila pertama dan menentukan sikap toleransi beragama di sekolah.',
    indikatorSoal:
      'Disajikan situasi keberagaman agama teman sekelas saat waktu beribadah tiba, peserta didik dapat menentukan sikap tepat sesuai sila pertama Pancasila.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bab 2: Mengamalkan Pancasila',
    tujuanPembelajaran:
      'Memahami makna sila kedua dan mengidentifikasi penerapannya dalam pergaulan di sekolah.',
    indikatorSoal:
      'Disajikan kasus seorang siswa yang menolong temannya yang terjatuh tanpa membeda-bedakan latar belakang, peserta didik dapat mengidentifikasi sila Pancasila yang diamalkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bab 2: Mengamalkan Pancasila',
    tujuanPembelajaran:
      'Memahami makna sila ketiga dan mengidentifikasi penerapan nilai persatuan melalui gotong royong.',
    indikatorSoal:
      'Disajikan gambar kegiatan warga dan siswa bergotong royong membersihkan serta menghijaukan lingkungan, peserta didik dapat menentukan sila Pancasila yang paling sesuai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bab 2: Mengamalkan Pancasila',
    tujuanPembelajaran:
      'Menganalisis perilaku yang sesuai dan tidak sesuai dengan nilai-nilai Pancasila di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan empat contoh perilaku siswa sehari-hari di sekolah, peserta didik dapat menganalisis dan memilih pasangan perilaku yang sesuai dengan nilai Pancasila.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bab 2: Mengamalkan Pancasila',
    tujuanPembelajaran:
      'Memahami makna sila kelima dan menentukan sikap yang tepat di lingkungan rumah.',
    indikatorSoal:
      'Disajikan narasi pembagian tugas rumah secara adil dan sikap hemat air serta listrik, peserta didik dapat menganalisis penerapan nilai sila kelima Pancasila.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAB 3 (ID 11 - 14) ---
  11: {
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    tujuanPembelajaran:
      'Memahami pengertian dan fungsi norma dalam kehidupan bermasyarakat, berbangsa, dan bernegara.',
    indikatorSoal:
      'Disajikan pengertian norma sebagai aturan hidup bermasyarakat, peserta didik dapat menentukan fungsi utama norma dalam kehidupan bersama.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    tujuanPembelajaran:
      'Membedakan jenis-jenis norma berdasarkan sumber dan sanksinya.',
    indikatorSoal:
      'Disajikan kasus siswa yang memilih berkata jujur karena dorongan hati nurani, peserta didik dapat menentukan jenis norma yang ditaati siswa tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    tujuanPembelajaran:
      'Mengidentifikasi penerapan norma hukum dan tata tertib dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan gambar siswa menyeberang di zebra cross dan pengendara motor taat lampu merah di depan sekolah, peserta didik dapat menentukan jenis norma serta alasannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    tujuanPembelajaran:
      'Memahami hak dan kewajiban serta menganalisis keseimbangan antara hak dan kewajiban.',
    indikatorSoal:
      'Disajikan konteks hak siswa memperoleh kelas yang bersih dan nyaman, peserta didik dapat menentukan kewajiban yang harus dijalankan agar hak dan kewajiban seimbang.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAB 4 (ID 15 - 18) ---
  15: {
    elemen: 'Bab 4: Belajar Bermusyawarah',
    tujuanPembelajaran:
      'Memahami pengertian dan tujuan musyawarah untuk mufakat.',
    indikatorSoal:
      'Disajikan deskripsi musyawarah sebagai cara khas bangsa Indonesia menyelesaikan masalah bersama, peserta didik dapat menentukan tujuan utama musyawarah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Bab 4: Belajar Bermusyawarah',
    tujuanPembelajaran:
      'Mengidentifikasi prinsip musyawarah untuk mufakat dalam kehidupan masyarakat.',
    indikatorSoal:
      'Disajikan cerita warga yang tetap ikut kerja bakti meski usulannya tidak terpilih dalam rapat desa, peserta didik dapat mengidentifikasi prinsip musyawarah yang ditunjukkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bab 4: Belajar Bermusyawarah',
    tujuanPembelajaran:
      'Menunjukkan sikap menghargai perbedaan pendapat saat bermusyawarah.',
    indikatorSoal:
      'Disajikan gambar musyawarah kelas memilih ketua kelas, peserta didik dapat menentukan sikap yang mencerminkan penghargaan terhadap teman yang sedang menyampaikan pendapat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Bab 4: Belajar Bermusyawarah',
    tujuanPembelajaran:
      'Memahami proses pengambilan keputusan bersama dan menganalisis penyelesaian masalah melalui musyawarah.',
    indikatorSoal:
      'Disajikan permasalahan perbedaan pilihan tujuan karya wisata kelas yang belum mencapai mufakat setelah diskusi panjang, peserta didik dapat menentukan langkah pengambilan keputusan demokratis yang tepat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- PILIHAN GANDA KOMPLEKS (ID 19 - 21) ---
  19: {
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    tujuanPembelajaran:
      'Memahami kedudukan, fungsi, dan nilai-nilai dasar Pancasila melalui pilihan berganda kompleks.',
    indikatorSoal:
      'Disajikan gambar lima lambang sila Pancasila dan 3 pernyataan mengenai kedudukan serta simbol sila, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    tujuanPembelajaran:
      'Membedakan jenis norma dan menganalisis keseimbangan hak dan kewajiban warga negara.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang sumber/sanksi norma dan keseimbangan hak-kewajiban warga negara, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bab 4: Belajar Bermusyawarah',
    tujuanPembelajaran:
      'Mengidentifikasi prinsip musyawarah untuk mufakat dan sikap menghargai pendapat dalam keputusan bersama.',
    indikatorSoal:
      'Disajikan gambar musyawarah kelas dan 3 pernyataan tentang etika serta prinsip musyawarah, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- PILIHAN GANDA KOMPLEKS KATEGORI (ID 22 - 30) ---
  22: {
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    tujuanPembelajaran:
      'Memahami sejarah perumusan Pancasila dan mengidentifikasi tokoh-tokoh perumus Pancasila.',
    indikatorSoal:
      'Disajikan gambar sidang BPUPKI dan 3 pernyataan tentang tokoh pengusul dasar negara, pengesahan UUD oleh PPKI, serta Hari Lahir Pancasila, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bab 1: Belajar Pancasila dengan Menyenangkan',
    tujuanPembelajaran:
      'Memahami kedudukan, fungsi, dan nilai-nilai dasar Pancasila sebagai dasar negara dan pandangan hidup.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai fungsi Pancasila sebagai pandangan hidup, sumber segala sumber hukum, dan penerapannya di sekolah, peserta didik dapat menentukan kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bab 2: Mengamalkan Pancasila',
    tujuanPembelajaran:
      'Memahami makna sila pertama sampai ketiga dan mengidentifikasi penerapannya sehari-hari.',
    indikatorSoal:
      'Disajikan 3 pernyataan perilaku sehari-hari di rumah dan sekolah terkait sila ke-1, ke-2, dan ke-3, peserta didik dapat menentukan kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Bab 2: Mengamalkan Pancasila',
    tujuanPembelajaran:
      'Menganalisis perilaku yang sesuai dan tidak sesuai dengan Pancasila serta menentukan sikap tepat di masyarakat.',
    indikatorSoal:
      'Disajikan gambar kegiatan gotong royong masyarakat dan 3 pernyataan analisis perilaku, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) dari tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    tujuanPembelajaran:
      'Memahami pengertian serta membedakan jenis-jenis norma berdasarkan sumber dan sanksinya.',
    indikatorSoal:
      'Disajikan 3 pernyataan terkait norma agama, norma kesopanan, dan sanksinya, peserta didik dapat menentukan kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    tujuanPembelajaran:
      'Mengidentifikasi penerapan norma dalam kehidupan sehari-hari di lingkungan sekolah dan jalan raya.',
    indikatorSoal:
      'Disajikan gambar ketertiban lalu lintas di depan sekolah dan 3 pernyataan penerapan aturan jalan raya, peserta didik dapat menilai kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bab 3: Mengenal Norma, Hak, dan Kewajiban',
    tujuanPembelajaran:
      'Memahami hak dan kewajiban sebagai warga negara serta menganalisis keseimbangan hak dan kewajiban.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang hak pendidikan, kewajiban menjaga fasilitas umum, dan prinsip keseimbangan hak-kewajiban, peserta didik dapat menentukan kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Bab 4: Belajar Bermusyawarah',
    tujuanPembelajaran:
      'Memahami pengertian, tujuan, prinsip musyawarah untuk mufakat, serta sikap menghargai perbedaan pendapat.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang semangat kekeluargaan, kesetaraan hak berpendapat, dan sikap terhadap hasil rapat, peserta didik dapat menilai kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Bab 4: Belajar Bermusyawarah',
    tujuanPembelajaran:
      'Memahami proses pengambilan keputusan bersama dan menganalisis penyelesaian masalah melalui musyawarah.',
    indikatorSoal:
      'Disajikan studi kasus perbedaan jadwal kerja bakti kelas VI dan 3 pernyataan langkah penyelesaiannya, peserta didik dapat menentukan kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic} dalam kehidupan sehari-hari.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus permasalahan tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('bab 1') || t.includes('perumusan') || t.includes('tokoh') || t.includes('kedudukan')) {
    return 'Bab 1: Belajar Pancasila dengan Menyenangkan';
  }
  if (t.includes('bab 2') || t.includes('pengamalan') || t.includes('sila') || t.includes('gotong royong')) {
    return 'Bab 2: Mengamalkan Pancasila';
  }
  if (t.includes('bab 3') || t.includes('norma') || t.includes('hak') || t.includes('kewajiban')) {
    return 'Bab 3: Mengenal Norma, Hak, dan Kewajiban';
  }
  if (t.includes('bab 4') || t.includes('musyawarah') || t.includes('pendapat') || t.includes('keputusan')) {
    return 'Bab 4: Belajar Bermusyawarah';
  }
  return 'Bab 1: Belajar Pancasila dengan Menyenangkan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
