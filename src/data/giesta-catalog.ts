export interface GiestaFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface GiestaSubProduct {
  id: string;
  modelCode: "P01" | "P02" | "P03" | "D01" | "D02" | "D03" | "G01" | "G02" | "G03" | "G04";
  category: "p-series" | "d-series" | "g-series";
  name: string;
  shortName: string;
  summary: string;
  frameDepth: string;
  sillSpec: string;
  finishType: string;
  highlights: string[];
}

export const GIESTA_FEATURES: GiestaFeature[] = [
  {
    id: "anti-pinch",
    title: "Desain Cerdas Anti-Jepit Jari",
    description:
      "Celah engsel dirancang khusus agar jari anak-anak maupun anggota keluarga aman dari risiko terjepit saat pintu ditutup.",
    image: "/images/giesta/feature-1.webp",
    alt: "Detail desain anti-jepit jari pada pintu utama TOSTEM GIESTA",
  },
  {
    id: "insulated-steel",
    title: "Panel Baja Berlapis & Insulasi Anti Rayap",
    description:
      "Struktur panel baja berlapis dengan inti insulasi tahan cuaca tropis, bebas rayap, dan membantu menghambat rambatan panas ke dalam rumah.",
    image: "/images/giesta/feature-2.webp",
    alt: "Potongan struktur panel baja berlapis insulasi pada TOSTEM GIESTA",
  },
  {
    id: "double-lock-triple-latch",
    title: "Keamanan Tinggi: 2 Kunci & 3 Kait Sabit",
    description:
      "Sistem penguncian ganda (double lock) yang mengendalikan tiga kait berbentuk sabit (triple sickle latches) untuk perlindungan ekstra.",
    image: "/images/giesta/feature-3.webp",
    alt: "Detail sistem penguncian 2 kunci 3 kait sabit pada TOSTEM GIESTA",
  },
  {
    id: "push-pull-handle",
    title: "Handle Push & Pull Bar Ergonomis",
    description:
      "Pegangan Push & Pull bar yang nyaman digenggam dan ringan dibuka untuk tipe bukaan ke luar (out-swing).",
    image: "/images/giesta/feature-4.webp",
    alt: "Detail handle Push & Pull bar ergonomis pada TOSTEM GIESTA",
  },
  {
    id: "reversible-key",
    title: "Anak Kunci Reversible Dua Sisi",
    description:
      "Kunci dimple presisi yang dapat dimasukkan menghadap atas maupun bawah sehingga lebih praktis saat digunakan sehari-hari.",
    image: "/images/giesta/feature-5.webp",
    alt: "Detail anak kunci reversible TOSTEM GIESTA",
  },
  {
    id: "removable-thumb-turn",
    title: "Removable Thumb-Turn Pengaman Tambahan",
    description:
      "Kenop pengunci bagian dalam yang dapat dilepas untuk mencegah pintu dibuka tanpa izin atau secara tidak sengaja tanpa kunci.",
    image: "/images/giesta/feature-6.webp",
    alt: "Detail removable thumb-turn pada sistem kunci TOSTEM GIESTA",
  },
];

export const GIESTA_PERFORMANCE_ROWS = [
  {
    variant: "GIESTA Out-Swing (Bukaan Keluar)",
    wind: "JIS S-2: 1.200 Pa · ASTM: 1.200 Pa",
    water: "JIS W-2: 150 Pa · ASTM: 150 Pa",
    air: "JIS A-4: 2 m³/(h·m²)",
    sound: "Tidak dicantumkan",
  },
  {
    variant: "GIESTA In-Swing (Bukaan Ke Dalam)",
    wind: "JIS S-2: 1.200 Pa · ASTM: 1.200 Pa",
    water: "Tidak ditentukan",
    air: "With sill: ASTM 75 Pa · Non-sill: N/A",
    sound: "Tidak dicantumkan",
  },
] as const;

export const GIESTA_SUBPRODUCT_TABS = [
  { id: "p-series", label: "P-Series (Minimal)", count: 3 },
  { id: "d-series", label: "D-Series (Wood Accent)", count: 3 },
  { id: "g-series", label: "G-Series (Glass Accent)", count: 4 },
] as const;

export const GIESTA_SUBPRODUCTS: GiestaSubProduct[] = [
  // === P-SERIES (3 · IDs 101–103) ===
  {
    id: "giesta-p01",
    modelCode: "P01",
    category: "p-series",
    name: "Entrance Door P01",
    shortName: "Model P01",
    summary:
      "Pintu utama berbidang solid minimalis dengan permukaan rata bersih yang menonjolkan tekstur motif kayu maupun warna metalik modern.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "8 warna (5 motif kayu + 3 metalik)",
    highlights: [
      "Tampilan panel polos modern yang cocok untuk fasad minimalis kontemporer",
      "Tersedia dalam 8 pilihan warna: 5 motif kayu alami & 3 finishing metalik",
      "Dilengkapi sistem keamanan 2 kunci 3 kait sabit & inti insulasi anti rayap",
    ],
  },
  {
    id: "giesta-p02",
    modelCode: "P02",
    category: "p-series",
    name: "Entrance Door P02",
    shortName: "Model P02",
    summary:
      "Pintu utama solid dengan aksen alur garis vertikal tipis yang memberi kesan pintu lebih tinggi dan proporsional pada fasad rumah.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "8 warna (5 motif kayu + 3 metalik)",
    highlights: [
      "Aksen alur vertikal tegas memperkaya tekstur tanpa mengurangi privasi",
      "Tersedia dalam 8 pilihan warna motif kayu dan metalik",
      "Mendukung opsi handle Push & Pull bar pada konfigurasi out-swing",
    ],
  },
  {
    id: "giesta-p03",
    modelCode: "P03",
    category: "p-series",
    name: "Entrance Door P03",
    shortName: "Model P03",
    summary:
      "Pintu utama panel solid dengan garis horizontal seimbang yang menghadirkan nuansa arsitektural hangat dan kokoh di area foyer.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "8 warna (5 motif kayu + 3 metalik)",
    highlights: [
      "Detail panel horizontal simetris cocok untuk hunian modern tropis",
      "Tersedia dalam 8 pilihan warna motif kayu dan metalik",
      "Struktur baja berlapis insulasi menjaga ruang dalam lebih sejuk",
    ],
  },

  // === D-SERIES (3 · IDs 104–106) ===
  {
    id: "giesta-d01",
    modelCode: "D01",
    category: "d-series",
    name: "Entrance Door D01",
    shortName: "Model D01",
    summary:
      "Desain pintu utama bermotif kayu alami dengan susunan panel berkarakter hangat yang menghadirkan kesan mewah layaknya kayu solid tanpa risiko rayap.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "5 warna motif kayu (Turin Pine, CREA Moca, CREA Rusk, Teak, Chestnut)",
    highlights: [
      "Fokus pada 5 tekstur serat kayu pilihan yang tahan cuaca tropis & anti rayap",
      "Desain anti-jepit jari dan sistem penguncian 2 kunci 3 kait sabit",
      "Garansi sistem & komponen 5 tahun serta garansi warna 10 tahun",
    ],
  },
  {
    id: "giesta-d02",
    modelCode: "D02",
    category: "d-series",
    name: "Entrance Door D02",
    shortName: "Model D02",
    summary:
      "Pintu utama seri D dengan komposisi panel kayu modern dan aksen garis yang menyatu apik pada hunian bergaya Japandi maupun kontemporer.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "5 warna motif kayu (Turin Pine, CREA Moca, CREA Rusk, Teak, Chestnut)",
    highlights: [
      "Estetika serat kayu alami dengan kemudahan perawatan material aluminium & baja",
      "Tersedia opsi bukaan out-swing maupun in-swing sesuai layout teras",
      "Dilengkapi anak kunci reversible dua sisi dan removable thumb-turn",
    ],
  },
  {
    id: "giesta-d03",
    modelCode: "D03",
    category: "d-series",
    name: "Entrance Door D03",
    shortName: "Model D03",
    summary:
      "Pintu utama motif kayu dengan aksen panel dekoratif elegan yang memperkuat titik fokus fasad depan sekaligus menjaga privasi penuh.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "5 warna motif kayu (Turin Pine, CREA Moca, CREA Rusk, Teak, Chestnut)",
    highlights: [
      "Panel berkarakter tegas tanpa bukaan kaca untuk privasi penuh area masuk",
      "Ketahanan tekanan angin hingga 1.200 Pa (JIS S-2 / ASTM)",
      "Inti insulasi terintegrasi membantu meredam panas matahari langsung",
    ],
  },

  // === G-SERIES (4 · IDs 107–110) ===
  {
    id: "giesta-g01",
    modelCode: "G01",
    category: "g-series",
    name: "Entrance Door G01",
    shortName: "Model G01",
    summary:
      "Pintu utama motif kayu dengan aksen bukaan kaca ramping yang memasukkan cahaya alami ke area foyer tanpa mengorbankan keamanan.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "5 warna motif kayu alami",
    highlights: [
      "Aksen kaca terintegrasi membawa cahaya alami ke ruang masuk (foyer)",
      "Tersedia dalam 5 pilihan motif kayu premium TOSTEM GIESTA",
      "Sistem keamanan 2 kunci 3 kait sabit & removable thumb-turn",
    ],
  },
  {
    id: "giesta-g02",
    modelCode: "G02",
    category: "g-series",
    name: "Entrance Door G02",
    shortName: "Model G02",
    summary:
      "Pintu utama beraksen kaca vertikal modern yang tersedia lengkap dalam pilihan motif kayu maupun finishing metalik elegan.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "8 warna (5 motif kayu + 3 metalik)",
    highlights: [
      "Tersedia dalam 8 pilihan warna lengkap (motif kayu & metalik)",
      "Aksen kaca ramping membuat foyer terasa lebih terang dan menyambut",
      "Ketahanan air W-2 (150 Pa) & kedap udara A-4 pada tipe out-swing",
    ],
  },
  {
    id: "giesta-g03",
    modelCode: "G03",
    category: "g-series",
    name: "Entrance Door G03",
    shortName: "Model G03",
    summary:
      "Pintu utama seri G dengan komposisi garis dan aksen kaca geometris yang tampil menonjol pada arsitektur modern minimalis.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "8 warna (5 motif kayu + 3 metalik)",
    highlights: [
      "Aksen kaca geometris memberi identitas visual kuat pada pintu depan",
      "Pilihan 8 warna kayu & metalik mudah diselaraskan dengan kusen jendela TOSTEM",
      "Mendukung handle Push & Pull bar untuk kenyamanan buka-tutup",
    ],
  },
  {
    id: "giesta-g04",
    modelCode: "G04",
    category: "g-series",
    name: "Entrance Door G04",
    shortName: "Model G04",
    summary:
      "Pintu utama seri G dengan aksen bukaan kaca modern dan pilihan warna kayu maupun metalik yang cocok untuk berbagai gaya fasad hunian.",
    frameDepth: "101,6 mm",
    sillSpec: "Out-swing: 50 mm · In-swing: Luar 30 mm / Dalam 14 mm",
    finishType: "8 warna (5 motif kayu + 3 metalik)",
    highlights: [
      "Kombinasi panel kokoh dan aksen kaca menghadirkan keseimbangan privasi & cahaya",
      "Tersedia dalam 8 warna motif kayu & metalik",
      "Teruji angin 1.200 Pa dengan garansi warna 10 tahun dan komponen 5 tahun",
    ],
  },
];
