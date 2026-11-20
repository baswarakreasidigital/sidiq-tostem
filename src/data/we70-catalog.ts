export interface We70Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface We70SubProduct {
  id: string;
  category: "window" | "sliding-door" | "swing-airflow" | "folding";
  name: string;
  shortName: string;
  image: string;
  summary: string;
  frameDepth: string;
  sizeRange: string;
  glassSpec: string;
  highlights: string[];
}

export const WE70_FEATURES: We70Feature[] = [
  {
    id: "crescent-lock",
    title: "Crescent Lock dengan Indikator Buka/Kunci",
    description:
      "Pengunci ergonomis dengan penanda visual OPEN/LOCK yang jelas, kokoh, dan mudah dioperasikan oleh seluruh anggota keluarga.",
    image: "/images/we70/feature-2.webp",
    alt: "Detail Crescent Lock dengan indikator OPEN dan LOCK pada TOSTEM WE 70",
  },
  {
    id: "drainage-sill",
    title: "Drainase Ambang Bawah Anti Tampias",
    description:
      "Katup drainase terintegrasi pada sill 35 mm membuang air hujan dengan cepat untuk melindungi interior dari kebocoran (kelas W-2: 150 Pa).",
    image: "/images/we70/feature-3.webp",
    alt: "Detail katup drainase pada ambang bawah kusen TOSTEM WE 70",
  },
  {
    id: "flush-handle",
    title: "Flush Handle Tanam yang Bersih",
    description:
      "Handle tanam rata profil yang nyaman digenggam dan menyatu rapi dengan garis bingkai jendela maupun pintu geser.",
    image: "/images/we70/feature-5.webp",
    alt: "Detail flush handle tanam pada profil pintu geser TOSTEM WE 70",
  },
  {
    id: "insect-screen",
    title: "Kasa Nyamuk Geser Terintegrasi di Rel",
    description:
      "Jalur rel khusus untuk insect screen yang menyatu dengan kusen 72 mm / 104 mm, menjaga sirkulasi udara tanpa serangga.",
    image: "/images/we70/feature-6.webp",
    alt: "Potongan rel sliding dengan kasa nyamuk terintegrasi TOSTEM WE 70",
  },
  {
    id: "mixed-facade",
    title: "Fleksibel untuk Kombinasi Fasad & Transom",
    description:
      "Mendukung kombinasi vertikal dan horizontal dengan mullion 180°, corner mullion 90°, serta transom untuk bukaan ruang keluarga dan balkon.",
    image: "/images/we70/feature-1.webp",
    alt: "Aplikasi pintu geser dan transom TOSTEM WE 70 pada hunian modern",
  },
  {
    id: "living-versatility",
    title: "26 Konfigurasi Lengkap untuk Keseharian",
    description:
      "Mencakup jendela geser, casement, awning, louver, pintu geser, pintu ayun, airflow door, hingga pintu lipat (folding door) untuk seluruh area rumah.",
    image: "/images/we70/feature-4.webp",
    alt: "Aplikasi pintu geser TOSTEM WE 70 pada ruang keluarga modern",
  },
];

export const WE70_PERFORMANCE_ROWS = [
  {
    variant: "WE 70 (Standar JIS · Hunian Harian)",
    wind: "500–800 Pa (JIS A 1515)",
    water: "W-2: 150 Pa (JIS A 1517)",
    air: "A-3: 10 m³/h·m² (JIS A 1516)",
    sound: "T-1: 25 dB (JIS A 1416)",
  },
] as const;

export const WE70_SUBPRODUCT_TABS = [
  { id: "window", label: "WE 70 Window", count: 11 },
  { id: "sliding-door", label: "Sliding Door", count: 7 },
  { id: "swing-airflow", label: "Swing & Airflow", count: 5 },
  { id: "folding", label: "Folding Door", count: 3 },
] as const;

export const WE70_SUBPRODUCTS: We70SubProduct[] = [
  // === WE 70 WINDOW (11) ===
  {
    id: "win-2p2t",
    category: "window",
    name: "Sliding Window — 2 Panels on 2 Tracks",
    shortName: "Sliding 2P2T",
    image: "/images/we70/win-2p2t.webp",
    summary:
      "Jendela geser 2 panel di atas 2 rel dengan opsi single slider (FS/SF), posisi kiri/kanan, dan kasa nyamuk bagian dalam.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Lebar 600–3.000 mm · Tinggi 400–1.600 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Inside insect screen tersedia",
      "Pilihan sill standar atau floor finish",
      "Single slider (FS, SF) & arah L/R",
    ],
  },
  {
    id: "win-4p2t",
    category: "window",
    name: "Sliding Window — 4 Panels on 2 Tracks",
    shortName: "Sliding 4P2T",
    image: "/images/we70/win-4p2t.webp",
    summary:
      "Jendela geser 4 panel di atas 2 rel (FSSF / SSSS) untuk bukaan kamar atau ruang keluarga yang lebar hingga 5,5 meter.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Lebar 1.400–5.500 mm · Tinggi 400–1.600 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Konfigurasi FSSF atau SSSS",
      "Inside insect screen tersedia",
      "Sill standar atau floor finish",
    ],
  },
  {
    id: "win-3p2t-sfs",
    category: "window",
    name: "Sliding Window — 3 Panels on 2 Tracks (SFS)",
    shortName: "Sliding 3P2T SFS",
    image: "/images/we70/win-3p2t-sfs.webp",
    summary:
      "Jendela geser 3 panel dengan kaca mati di tengah (Slide-Fixed-Slide) untuk bukaan pandangan utama tanpa tiang di tengah.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Lebar 1.400–4.500 mm · Tinggi 400–1.600 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Panel tengah fixed panorama (SFS)",
      "Inside insect screen tersedia",
      "Hemat kedalaman kusen 72 mm",
    ],
  },
  {
    id: "win-fixed",
    category: "window",
    name: "Fixed Window",
    shortName: "Fixed Window",
    image: "/images/we70/win-fixed.webp",
    summary:
      "Jendela kaca mati berbingkai rapi untuk memasukkan cahaya alami secara maksimal pada area tangga, void, atau ruang tamu.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 350–4.500 mm · Tinggi 350–3.045 mm",
    glassSpec: "5, 6, 8 mm · Glazing bead",
    highlights: [
      "Bukaan kaca mati hingga lebar 4,5 m × tinggi 3 m",
      "Kompatibel dengan transom & mullion WE 70",
      "Finishing TEXGUARD 6 pilihan warna",
    ],
  },
  {
    id: "win-corner-fixed",
    category: "window",
    name: "Corner Fixed Window",
    shortName: "Corner Fixed",
    image: "/images/we70/win-corner-fixed.webp",
    summary:
      "Jendela kaca mati sudut 90° (inward maupun outward) untuk memaksimalkan sudut pandang pada fasad rumah modern.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 430–1.800 mm per sisi · Tinggi 350–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing bead",
    highlights: [
      "Tersedia sudut inward & outward",
      "Opsi middle bar tambahan",
      "Pencahayaan alami dua arah",
    ],
  },
  {
    id: "win-awning",
    category: "window",
    name: "Awning Window",
    shortName: "Awning Window",
    image: "/images/we70/win-awning.webp",
    summary:
      "Jendela jungkit keluar untuk ventilasi hujan-aman di kamar tidur, dapur, maupun kamar mandi, dilengkapi opsi swing insect screen.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 350–1.200 mm · Tinggi 350–1.800 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Swing insect screen tersedia",
      "Tahan tampias hujan ringan saat dibuka",
      "Dapat dipadukan dengan Airflow Slot",
    ],
  },
  {
    id: "win-casement",
    category: "window",
    name: "Casement Window (Single)",
    shortName: "Casement Single",
    image: "/images/we70/win-casement.webp",
    summary:
      "Jendela buka samping tunggal dengan bukaan penuh untuk sirkulasi udara maksimal dan kemudahan pembersihan kaca.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 350–800 mm · Tinggi 500–1.800 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Pilihan arah buka kiri (L) atau kanan (R)",
      "Swing insect screen tersedia",
      "Kerapatan udara & air berstandar JIS",
    ],
  },
  {
    id: "win-double-casement",
    category: "window",
    name: "Double Casement Window",
    shortName: "Double Casement",
    image: "/images/we70/win-double-casement.webp",
    summary:
      "Jendela buka samping 2 daun yang membuka simetris ke luar untuk bukaan angin lebih luas pada kamar utama atau fasad depan.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 700–1.600 mm · Tinggi 500–1.800 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Dua daun buka simetris tanpa tiang tengah",
      "Swing insect screen tersedia",
      "Teruji beban angin 500 Pa (JIS)",
    ],
  },
  {
    id: "win-aluminium-louver",
    category: "window",
    name: "Aluminium Louver",
    shortName: "Aluminium Louver",
    image: "/images/we70/win-aluminium-louver.webp",
    summary:
      "Kisi-kisi aluminium permanen untuk ventilasi udara pasif di area servis, ruang mesin, gudang, atau ruang cuci jemur.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 350–2.000 mm · Tinggi 400–3.030 mm",
    glassSpec: "Bilah kisi aluminium ekstrusi (tanpa kaca)",
    highlights: [
      "Sirkulasi udara terus-menerus tanpa tampias",
      "Anti karat & bebas rayap dengan finishing TEXGUARD",
      "Catatan: performa kedap air & udara tidak ditentukan",
    ],
  },
  {
    id: "win-glass-louver",
    category: "window",
    name: "Glass Louver (Jendela Nako Kaca)",
    shortName: "Glass Louver",
    image: "/images/we70/win-glass-louver.webp",
    summary:
      "Jendela kisi kaca (jalusi) berbingkai aluminium WE 70 yang memungkinkan pengaturan sudut aliran udara sekaligus pencahayaan alami.",
    frameDepth: "72 mm",
    sizeRange: "Ukuran custom sesuai modul ventilasi ruangan",
    glassSpec: "Bilah kaca nako sesuai spesifikasi WE 70",
    highlights: [
      "Sudut bilah kaca dapat diatur untuk kontrol angin",
      "Cocok untuk area tangga, dapur, & koridor",
      "Warna bingkai seragam dengan jendela TOSTEM lainnya",
    ],
  },
  {
    id: "win-mixed",
    category: "window",
    name: "Mixed & Combination Window",
    shortName: "Mixed Window",
    image: "/images/we70/win-mixed.webp",
    summary:
      "Modul kombinasi yang menggabungkan jendela Sliding, Awning, Casement, Fixed, dan Swing Door menggunakan mullion 180°/90° dan transom standar.",
    frameDepth: "72 mm · Mullion 180° & 90° (outward corner)",
    sizeRange: "Custom sesuai modul bukaan arsitektur rumah",
    glassSpec: "5, 6, 8 mm sesuai masing-masing modul",
    highlights: [
      "Kombinasi fleksibel Unit Windows & Unit Doors",
      "Transom & mullion presisi pabrikan TOSTEM",
      "Estetika fasad menyatu dari lantai 1 hingga 2",
    ],
  },

  // === WE 70 SLIDING DOOR (7) ===
  {
    id: "door-2p2t",
    category: "sliding-door",
    name: "Sliding Door — 2 Panels on 2 Tracks",
    shortName: "Sliding Door 2P2T",
    image: "/images/we70/door-2p2t.webp",
    summary:
      "Pintu geser kaca 2 panel di atas 2 rel untuk akses taman belakang atau balkon dengan pengoperasian ringan dan aman.",
    frameDepth: "72 mm · Ambang bawah 35 mm (opsi floor finish)",
    sizeRange: "Lebar 1.000–3.500 mm · Tinggi 1.601–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Single slider (FS/SF) & pilihan arah L/R",
      "Inside insect screen tersedia",
      "Opsi sill standar atau floor finish",
    ],
  },
  {
    id: "door-4p2t",
    category: "sliding-door",
    name: "Sliding Door — 4 Panels on 2 Tracks",
    shortName: "Sliding Door 4P2T",
    image: "/images/we70/door-4p2t.webp",
    summary:
      "Pintu geser 4 panel (FSSF / SSSS) di atas 2 rel untuk bentang ruang keluarga hingga 5,5 meter dengan harga paling efisien di kelasnya.",
    frameDepth: "72 mm · Ambang bawah 35 mm",
    sizeRange: "Lebar 1.800–5.500 mm · Tinggi 1.601–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Konfigurasi bukaan tengah FSSF atau SSSS",
      "Inside insect screen tersedia",
      "Juga tersedia varian Partition Door (tanpa sill tinggi)",
    ],
  },
  {
    id: "door-3p2t-sfs",
    category: "sliding-door",
    name: "Sliding Door — 3 Panels on 2 Tracks (SFS)",
    shortName: "Sliding Door 3P2T SFS",
    image: "/images/we70/door-3p2t-sfs.webp",
    summary:
      "Pintu geser 3 panel dengan panel kaca mati di tengah (SFS) di atas 2 rel untuk akses dua sisi dengan kusen 72 mm yang ringkas.",
    frameDepth: "72 mm · Ambang bawah 35 mm",
    sizeRange: "Lebar 1.800–4.500 mm · Tinggi 1.601–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Panel tengah fixed panorama",
      "Inside insect screen tersedia",
      "Hemat ketebalan dinding (72 mm)",
    ],
  },
  {
    id: "door-3p3t",
    category: "sliding-door",
    name: "Sliding Door — 3 Panels on 3 Tracks",
    shortName: "Sliding Door 3P3T",
    image: "/images/we70/door-3p3t.webp",
    summary:
      "Pintu geser 3 panel di atas 3 rel yang membuka hingga 2/3 lebar bukaan, cocok untuk akses taman atau teras yang leluasa.",
    frameDepth: "104 mm (3 tracks sliding) · Ambang bawah 35 mm",
    sizeRange: "Lebar 1.800–5.500 mm · Tinggi 1.601–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Bukaan akses hingga 2/3 total lebar",
      "Inside insect screen tersedia",
      "Opsi sill standar atau floor finish",
    ],
  },
  {
    id: "door-6p3t",
    category: "sliding-door",
    name: "Sliding Door — 6 Panels on 3 Tracks",
    shortName: "Sliding Door 6P3T",
    image: "/images/we70/door-6p3t.webp",
    summary:
      "Pintu geser 6 panel di atas 3 rel untuk bukaan ruang keluarga ekstra lebar hingga 6 meter dengan sirkulasi terbuka maksimal.",
    frameDepth: "104 mm (3 tracks sliding) · Ambang bawah 35 mm",
    sizeRange: "Lebar 3.780–6.000 mm · Tinggi 1.601–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "6 daun pintu dengan bukaan tengah super lebar",
      "Inside insect screen tersedia",
      "Pilihan sill standar atau floor finish",
    ],
  },
  {
    id: "door-entrance-2p2t",
    category: "sliding-door",
    name: "Entrance Sliding Door — 2 Panels on 2 Tracks",
    shortName: "Entrance Sliding 2P2T",
    image: "/images/we70/door-entrance-2p2t.webp",
    summary:
      "Pintu geser 2 panel khusus akses masuk yang dilengkapi penguncian kunci silinder luar-dalam serta opsi outside insect screen.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 1.000–3.000 mm · Tinggi 1.601–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Dapat dikunci dari sisi luar maupun dalam",
      "Outside insect screen tersedia",
      "Single slider (FS/SF) & pilihan arah L/R",
    ],
  },
  {
    id: "door-entrance-4p2t",
    category: "sliding-door",
    name: "Entrance Sliding Door — 4 Panels on 2 Tracks",
    shortName: "Entrance Sliding 4P2T",
    image: "/images/we70/door-entrance-4p2t.webp",
    summary:
      "Pintu geser akses masuk 4 panel untuk bukaan depan atau samping yang lebar hingga 5,5 meter dengan sistem penguncian dari luar dan dalam.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 1.800–5.500 mm · Tinggi 1.601–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Akses masuk lebar hingga 5,5 meter",
      "Outside insect screen tersedia",
      "Sistem penguncian akses masuk luar-dalam",
    ],
  },

  // === SWING & AIRFLOW DOOR (5) ===
  {
    id: "door-out-swing-single",
    category: "swing-airflow",
    name: "Out-Swing Door (Single Leaf)",
    shortName: "Out-Swing Single",
    image: "/images/we70/door-out-swing-single.webp",
    summary:
      "Pintu ayun tunggal buka keluar dengan pilihan memakai ambang bawah (with sill) untuk eksterior atau tanpa sill (without sill).",
    frameDepth: "72 mm",
    sizeRange: "Lebar 500–1.000 mm · Tinggi 1.000–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Opsi door closer & pilihan buka L/R",
      "Pilihan with sill (kedap air/udara) atau without sill",
      "Cocok untuk pintu teras, balkon, & area servis",
    ],
  },
  {
    id: "door-out-swing-double",
    category: "swing-airflow",
    name: "Out-Swing Door (Double Leaf)",
    shortName: "Out-Swing Double",
    image: "/images/we70/door-out-swing-double.webp",
    summary:
      "Pintu ayun 2 daun buka keluar untuk akses lebar hingga 2 meter dengan pilihan sill eksterior dan opsi door closer.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 1.000–2.000 mm · Tinggi 1.000–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing channel",
    highlights: [
      "Bukaan ganda hingga lebar 2 meter",
      "Opsi door closer & pilihan with/without sill",
      "Profil kokoh dan rapi khas TOSTEM",
    ],
  },
  {
    id: "door-in-swing-single",
    category: "swing-airflow",
    name: "In-Swing Door (Single Leaf)",
    shortName: "In-Swing Single",
    image: "/images/we70/door-in-swing-single.webp",
    summary:
      "Pintu ayun tunggal buka ke dalam tanpa ambang bawah (without sill) untuk akses ruang dalam, area transisi, atau ruangan terbatas di sisi luar.",
    frameDepth: "72 mm (hanya tersedia without sill)",
    sizeRange: "Lebar 500–1.000 mm · Tinggi 1.000–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing bead",
    highlights: [
      "Rata lantai tanpa ambang bawah (without sill)",
      "Opsi door closer & arah buka L/R",
      "Catatan: tanpa sill, performa air/udara tidak ditentukan",
    ],
  },
  {
    id: "door-in-swing-double",
    category: "swing-airflow",
    name: "In-Swing Door (Double Leaf)",
    shortName: "In-Swing Double",
    image: "/images/we70/door-in-swing-double.webp",
    summary:
      "Pintu ayun 2 daun buka ke dalam tanpa ambang bawah untuk bukaan ruangan hingga 2 meter yang nyaman dilalui.",
    frameDepth: "72 mm (hanya tersedia without sill)",
    sizeRange: "Lebar 1.000–2.000 mm · Tinggi 1.000–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing bead",
    highlights: [
      "Bukaan ganda tanpa hambatan ambang lantai",
      "Opsi door closer & arah buka L/R",
      "Ideal untuk area semi-indoor atau ruang keluarga",
    ],
  },
  {
    id: "door-airflow",
    category: "swing-airflow",
    name: "Airflow Door (Ventilation Door)",
    shortName: "Airflow Door",
    image: "/images/we70/door-airflow.webp",
    summary:
      "Pintu ventilasi inovatif dengan kisi-kisi buka-tutup dan kasa nyamuk terintegrasi: memungkinkan udara segar mengalir meski pintu dalam keadaan terkunci.",
    frameDepth: "72 mm",
    sizeRange: "Lebar 500–1.000 mm · Tinggi 1.700–2.400 mm",
    glassSpec: "5, 6, 8 mm · Glazing bead + lattice with insect screen",
    highlights: [
      "Mode 'Least Open' 35 mm terkunci aman untuk ventilasi saat rumah kosong",
      "Mengeluarkan kelembapan & bau dapur melalui konveksi alami",
      "Dilengkapi kisi pengaman + kasa serangga & opsi door closer",
    ],
  },

  // === FOLDING DOOR (3) ===
  {
    id: "folding-4p",
    category: "folding",
    name: "Folding Door — 4 Panels",
    shortName: "Folding 4 Panels",
    image: "/images/we70/folding-4p.webp",
    summary:
      "Pintu lipat aluminium 4 daun berdesain hinge-less dengan perlindungan anti-jepit jari untuk membuka ruang keluarga ke teras hampir 100%.",
    frameDepth: "72 mm · Opsi watertight sill atau flat sill",
    sizeRange: "Lebar 1.505–3.505 mm · Tinggi 650–3.030 mm",
    glassSpec: "5, 6, 8 mm · Glazing bead (maks. 40 kg / 850 mm per panel)",
    highlights: [
      "Desain hinge-less & anti-jepit jari (finger safety)",
      "Pilihan buka one-way, both-ways, atau center open",
      "Opsi pleated insect screen & flat sill rata lantai",
    ],
  },
  {
    id: "folding-6p",
    category: "folding",
    name: "Folding Door — 6 Panels",
    shortName: "Folding 6 Panels",
    image: "/images/we70/folding-6p.webp",
    summary:
      "Pintu lipat 6 daun untuk bentang ruang hingga 5,2 meter yang menyatukan area ruang makan, teras, dan taman secara leluasa.",
    frameDepth: "72 mm · Opsi watertight sill atau flat sill",
    sizeRange: "Lebar 2.205–5.205 mm · Tinggi 650–3.030 mm",
    glassSpec: "5, 6, 8 mm · Glazing bead (maks. 40 kg / 850 mm per panel)",
    highlights: [
      "Bukaan lipat penuh hingga lebar 5,2 meter",
      "Pilihan one-way, both-ways, atau center open",
      "Opsi watertight sill dengan drainase atau flat sill",
    ],
  },
  {
    id: "folding-8p",
    category: "folding",
    name: "Folding Door — 8 Panels (Opsi hingga 16 Panels)",
    shortName: "Folding 8 Panels",
    image: "/images/we70/folding-8p.webp",
    summary:
      "Pintu lipat 8 daun untuk bentang ekstra lebar hingga 6 meter (juga tersedia konfigurasi 12 panels hingga 10,3 m & 16 panels hingga 12 m secara center open).",
    frameDepth: "72 mm · Opsi watertight sill atau flat sill",
    sizeRange: "Lebar 2.905–6.000 mm (8P) · Tinggi 650–3.030 mm",
    glassSpec: "5, 6, 8 mm · Glazing bead (maks. 40 kg / 850 mm per panel)",
    highlights: [
      "Desain hinge-less rapi & aman dari risiko jari terjepit",
      "Tersedia opsi 12 panels (10,3 m) & 16 panels (12 m)",
      "Opsi pleated insect screen terintegrasi",
    ],
  },
];
