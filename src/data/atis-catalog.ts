export interface AtisFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface AtisSubProduct {
  id: string;
  category: "window" | "sliding-door" | "swing-door";
  name: string;
  shortName: string;
  image: string;
  summary: string;
  frameDepth: string;
  sizeRange: string;
  glassSpec: string;
  highlights: string[];
}

export const ATIS_FEATURES: AtisFeature[] = [
  {
    id: "photo-frame",
    title: "Desain 'Photo Frame on the Wall'",
    description:
      "Filosofi desain 'It is not a window-frame; it is moving art' yang membingkai pemandangan luar dengan garis bingkai bersih dan seragam.",
    image: "/images/atis/feature-4.webp",
    alt: "Jendela TOSTEM ATIS yang membingkai pemandangan luar seperti lukisan",
  },
  {
    id: "slim-mullion",
    title: "Mullion Ramping 40 mm & Opsi Flat Attachment",
    description:
      "Profil pembatas super ramping 40 mm memaksimalkan bukaan kaca, dilengkapi opsi Flat Attachment pada rel bawah sliding yang dapat dilepas-pasang.",
    image: "/images/atis/feature-1.webp",
    alt: "Pintu geser TOSTEM ATIS dengan profil ramping di kamar tidur",
  },
  {
    id: "concealed-hardware",
    title: "Concealed Hardware (Engsel & Sub-Lock Tersembunyi)",
    description:
      "Sub-lock, engsel, balancer, dan friction arm disembunyikan di dalam kusen untuk tampilan visual tanpa komponen menonjol.",
    image: "/images/atis/feature-2.webp",
    alt: "Detail mekanisme pengunci dan hardware tersembunyi TOSTEM ATIS",
  },
  {
    id: "smart-screen",
    title: "Smart & Invisible Insect Screen + L-Fit Operator",
    description:
      "Kasa nyamuk dengan kawat 40% lebih tipis: pandangan 20% lebih jernih, celah 20% lebih rapat anti serangga kecil, dan 20% lebih banyak aliran udara.",
    image: "/images/atis/feature-5.webp",
    alt: "Detail Smart Invisible Insect Screen dan Operator Handle TOSTEM ATIS",
  },
  {
    id: "l-fit-lever",
    title: "L-Fit Design Handles Terstandarisasi",
    description:
      "Tersedia pilihan Operator Handle, Cam-Latch Handle, Lever Handle, dan Crescent Lock yang selaras di seluruh jendela dan pintu.",
    image: "/images/atis/feature-3.webp",
    alt: "Detail Lever Handle L-Fit pada pintu ayun TOSTEM ATIS",
  },
  {
    id: "slit-window",
    title: "Slit Window dengan Chain Operator",
    description:
      "Jendela ventilasi posisi tinggi yang mudah dibuka-tutup menggunakan rantai tanpa harus menjangkau ke atas, menjaga privasi sekaligus aliran udara.",
    image: "/images/atis/feature-6.webp",
    alt: "Aplikasi Slit Window dengan Chain Operator TOSTEM ATIS di kamar tidur",
  },
];

export const ATIS_PERFORMANCE_ROWS = [
  {
    variant: "ATIS PLUS (High-Rise · ASTM)",
    wind: "2.000 Pa (ASTM E330)",
    water: "300 Pa (ASTM E331)",
    air: "10,7 m³/h·m² (ASTM E283)",
    sound: "T-1: 25 dB · T-2: 30 dB* (JIS A 1416)",
  },
  {
    variant: "ATIS (Low-Rise · JIS)",
    wind: "S-2: 1.200 Pa (JIS A 1515)",
    water: "W-3: 250 Pa (JIS A 1517)",
    air: "A-4: 2 m³/h·m² (JIS A 1516)",
    sound: "T-1: 25 dB · T-2: 30 dB* (JIS A 1416)",
  },
] as const;

export const ATIS_SUBPRODUCT_TABS = [
  { id: "window", label: "ATIS Window", count: 11 },
  { id: "sliding-door", label: "ATIS Sliding Door", count: 4 },
  { id: "swing-door", label: "ATIS Swing Door", count: 2 },
] as const;

export const ATIS_SUBPRODUCTS: AtisSubProduct[] = [
  // === ATIS WINDOW (11) ===
  {
    id: "win-tilt-slide",
    category: "window",
    name: "Tilt & Slide Window",
    shortName: "Tilt & Slide",
    image: "/images/atis/win-tilt-slide.webp",
    summary:
      "Jendela multifungsi dengan 3 posisi (Closed, Tilted untuk ventilasi aman, dan Open geser penuh) dilengkapi Concealed Power Support System & safety stopper.",
    frameDepth: "88 mm",
    sizeRange: "Lebar 450–800 mm · Tinggi 800–1.600 mm",
    glassSpec: "5, 6, 8–15,52 mm (maks. 10 mm sesuai konfigurasi) · Glazing channel",
    highlights: [
      "3 mode: Tertutup, Miring (Tilt), dan Buka Geser",
      "Concealed Power Support System & safety stopper",
      "Sliding insect screen (outside) tersedia",
    ],
  },
  {
    id: "win-2p2t",
    category: "window",
    name: "Sliding Window — 2 Panels on 2 Tracks",
    shortName: "Sliding 2P2T",
    image: "/images/atis/win-2p2t.webp",
    summary:
      "Jendela geser 2 daun di atas 2 rel dengan pilihan kasa nyamuk dalam/luar, ambang standar atau rata lantai, serta opsi safety arm.",
    frameDepth: "88 mm · Tinggi ambang bawah 55 mm",
    sizeRange: "Lebar 600–3.000 mm · Tinggi 400–1.600 mm (ATIS PLUS / ATIS)",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Pilihan kasa nyamuk inside / outside",
      "Opsi safety arm & detachable flat attachment",
      "Tersedia tipe panel A–D sesuai beban angin",
    ],
  },
  {
    id: "win-4p2t",
    category: "window",
    name: "Sliding Window — 4 Panels on 2 Tracks",
    shortName: "Sliding 4P2T",
    image: "/images/atis/win-4p2t.webp",
    summary:
      "Jendela geser 4 daun di atas 2 rel untuk bentang bukaan lebar hingga 6 meter dengan garis profil yang konsisten dan halus.",
    frameDepth: "88 mm · Tinggi ambang bawah 55 mm",
    sizeRange: "Lebar 1.180–6.000 mm · Tinggi 400–1.600 mm",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Bentang bukaan jendela hingga 6 meter",
      "Pilihan kasa nyamuk inside / outside",
      "Tersedia ATIS (JIS) & ATIS PLUS (ASTM 2.000 Pa)",
    ],
  },
  {
    id: "win-awning-slit",
    category: "window",
    name: "Awning Window (Slit)",
    shortName: "Awning Slit",
    image: "/images/atis/win-awning-slit.webp",
    summary:
      "Jendela jungkit horizontal ramping untuk area tinggi seperti atas tempat tidur atau kamar mandi, dapat dioperasikan dengan rantai (chain operator).",
    frameDepth: "88 mm",
    sizeRange: "Lebar 450–1.600 mm · Tinggi 315–600 mm",
    glassSpec: "5, 6, 8–15,52 mm · Glazing channel",
    highlights: [
      "Chain operator: mudah dibuka tanpa menjangkau tinggi",
      "Menjaga privasi ruang sekaligus mengalirkan udara segar",
      "Smart & Invisible Insect Screen tersedia",
    ],
  },
  {
    id: "win-awning-operator",
    category: "window",
    name: "Awning Window (Operator)",
    shortName: "Awning Operator",
    image: "/images/atis/win-awning-operator.webp",
    summary:
      "Jendela jungkit keluar dengan L-Fit Operator Handle yang memungkinkan jendela dibuka-tutup tanpa harus membuka kasa nyamuk.",
    frameDepth: "88 mm",
    sizeRange: "Lebar 350–1.200 mm · Tinggi 500–1.800 mm",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Pengoperasian praktis dengan L-Fit Operator Handle",
      "Kompatibel dengan Smart & Invisible Insect Screen",
      "Kerapatan udara A-4 & kedap air W-3 (250 Pa)",
    ],
  },
  {
    id: "win-awning-cam-latch",
    category: "window",
    name: "Awning Window (Cam-Latch)",
    shortName: "Awning Cam-Latch",
    image: "/images/atis/win-awning-cam-latch.webp",
    summary:
      "Jendela jungkit keluar dengan pengunci Cam-Latch L-Fit (single lock) yang minimalis dan kokoh untuk ventilasi harian.",
    frameDepth: "88 mm",
    sizeRange: "Lebar 350–1.200 mm · Tinggi 500–1.800 mm",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Handle Cam-Latch L-Fit minimalis",
      "Tersedia Swing Insect Screen",
      "Tersedia pada ATIS (JIS) & ATIS PLUS (ASTM)",
    ],
  },
  {
    id: "win-casement-operator",
    category: "window",
    name: "Casement Window (Operator)",
    shortName: "Casement Operator",
    image: "/images/atis/win-casement-operator.webp",
    summary:
      "Jendela buka samping dengan mekanisme L-Fit Operator Handle dan Smart Insect Screen yang terpasang tetap di sisi dalam.",
    frameDepth: "88 mm",
    sizeRange: "Lebar 350–1.200 mm · Tinggi 500–1.800 mm",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Buka-tutup halus tanpa membuka kasa nyamuk",
      "Smart & Invisible Insect Screen (kawat 40% lebih tipis)",
      "Pilihan arah buka kiri (L) atau kanan (R)",
    ],
  },
  {
    id: "win-casement-cam-latch",
    category: "window",
    name: "Casement Window (Cam-Latch)",
    shortName: "Casement Cam-Latch",
    image: "/images/atis/win-casement-cam-latch.webp",
    summary:
      "Jendela buka samping (Single maupun Double Casement) dengan Cam-Latch Handle L-Fit, engsel tersembunyi, dan opsi limit arm pengaman.",
    frameDepth: "88 mm",
    sizeRange: "Single: L 350–900 × T 500–1.800 mm · Double: L 700–1.600 × T 500–1.640 mm",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Engsel tersembunyi (concealed hinges) & opsi limit arm",
      "Swing insect screen tersedia untuk tipe single & double",
      "Pilihan arah buka L/R",
    ],
  },
  {
    id: "win-corner-fixed",
    category: "window",
    name: "Corner Fixed Window",
    shortName: "Corner Fixed",
    image: "/images/atis/win-corner-fixed.webp",
    summary:
      "Jendela kaca mati sudut 90° untuk sudut bangunan, tersedia konfigurasi sudut menghadap ke dalam (inward) maupun keluar (outward).",
    frameDepth: "88 mm",
    sizeRange: "Lebar 350–2.500 mm per sisi · Tinggi 300–3.150 mm",
    glassSpec: "Hanya tersedia single glass (glazing finish: sealant)",
    highlights: [
      "Sudut inward & outward tersedia",
      "Opsi middle bar sesuai kebutuhan desain",
      "Tersedia ATIS (JIS) & ATIS PLUS (ASTM)",
    ],
  },
  {
    id: "win-fixed-single",
    category: "window",
    name: "Fixed Window (Single)",
    shortName: "Fixed Single",
    image: "/images/atis/win-fixed-single.webp",
    summary:
      "Jendela kaca mati tunggal berprofil tipis yang mendukung kaca ganda (IG unit) hingga ketebalan 26 mm untuk insulasi suara dan panas maksimal.",
    frameDepth: "88 mm",
    sizeRange: "Lebar 300–4.500 mm · Tinggi 300–3.150 mm",
    glassSpec: "5, 6, 8–15,52, 22, 24, 26 mm · Glazing bead",
    highlights: [
      "Mendukung kaca hingga 24 & 26 mm (IG unit)",
      "Performa insulasi suara hingga T-2 (30 dB) dengan kaca tertentu",
      "Tampilan bingkai ramping seragam dengan jendela ATIS lain",
    ],
  },
  {
    id: "win-fixed-unit",
    category: "window",
    name: "Fixed Window (Unit)",
    shortName: "Fixed Unit",
    image: "/images/atis/win-fixed-unit.webp",
    summary:
      "Modul jendela kaca mati berkombinasi mullion 40 mm atau transom untuk bukaan fasad horizontal maupun vertikal bertingkat.",
    frameDepth: "88 mm",
    sizeRange: "Horizontal: L 500–2.000 × T 300–1.600 mm · Vertikal: L 350–1.800 × T 700–3.000 mm",
    glassSpec: "5, 6, 8–15,52, 22, 24, 26 mm · Glazing bead",
    highlights: [
      "Menggunakan slim mullion 40 mm khas ATIS",
      "Kombinasi fleksibel dengan transom & jendela buka",
      "Mendukung unit kaca ganda (IG unit)",
    ],
  },

  // === ATIS SLIDING DOOR (4) ===
  {
    id: "door-2p2t",
    category: "sliding-door",
    name: "Sliding Door — 2 Panels on 2 Tracks",
    shortName: "Sliding Door 2P2T",
    image: "/images/atis/door-2p2t.webp",
    summary:
      "Pintu geser kaca 2 panel di atas 2 rel dengan profil ramping, handle profil aluminium terintegrasi, dan opsi Flat Attachment pada rel bawah.",
    frameDepth: "88 mm · Tinggi ambang bawah 55 mm",
    sizeRange: "Lebar 600–3.000 mm · Tinggi 1.601–3.200 mm (ATIS) / 2.400 mm (ATIS PLUS)",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Opsi Flat Attachment (rel datar lepas-pasang yang aman diinjak)",
      "Opsi limit arm & kasa nyamuk inside/outside",
      "Juga tersedia varian Entrance Sliding (2P2T)",
    ],
  },
  {
    id: "door-3p3t",
    category: "sliding-door",
    name: "Sliding Door — 3 Panels on 3 Tracks",
    shortName: "Sliding Door 3P3T",
    image: "/images/atis/door-3p3t.webp",
    summary:
      "Pintu geser 3 panel di atas 3 rel yang membuka hingga 2/3 lebar bukaan, cocok untuk akses balkon atau teras rumah modern.",
    frameDepth: "131,5 mm (3 tracks sliding) · Tinggi ambang bawah 55 mm",
    sizeRange: "Lebar 865–4.500 mm · Tinggi 1.038–3.200 mm",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Bukaan akses hingga 2/3 bentang pintu",
      "Pilihan kasa nyamuk inside / outside",
      "Opsi security arm & tipe panel B–D",
    ],
  },
  {
    id: "door-4p2t",
    category: "sliding-door",
    name: "Sliding Door — 4 Panels on 2 Tracks",
    shortName: "Sliding Door 4P2T",
    image: "/images/atis/door-4p2t.webp",
    summary:
      "Pintu geser 4 panel di atas 2 rel untuk bentang ruang hingga 6 meter dengan visual kaca maksimal dan rel halus.",
    frameDepth: "88 mm · Tinggi ambang bawah 55 mm",
    sizeRange: "Lebar 1.180–6.000 mm · Tinggi 1.062–3.200 mm",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Bentang bukaan hingga 6 meter dengan kusen ramping 88 mm",
      "Opsi detachable flat attachment & safety arm",
      "Juga tersedia varian Entrance Sliding (4P2T)",
    ],
  },
  {
    id: "door-6p3t",
    category: "sliding-door",
    name: "Sliding Door — 6 Panels on 3 Tracks",
    shortName: "Sliding Door 6P3T",
    image: "/images/atis/door-6p3t.webp",
    summary:
      "Pintu geser 6 panel di atas 3 rel untuk akses ruang keluarga yang super luas hingga 6 meter dengan 4 daun bergerak bebas.",
    frameDepth: "131,5 mm (3 tracks sliding) · Tinggi ambang bawah 55 mm",
    sizeRange: "Lebar 1.705–6.000 mm · Tinggi 1.023–3.200 mm",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "6 panel di atas 3 rel untuk sirkulasi & pandangan maksimal",
      "Pilihan kasa nyamuk inside / outside",
      "Opsi security arm & tipe panel B–D",
    ],
  },

  // === ATIS SWING DOOR (2) ===
  {
    id: "door-single-swing",
    category: "swing-door",
    name: "Out-Swing Door (Single Leaf)",
    shortName: "Single Swing Door",
    image: "/images/atis/door-single-swing.webp",
    summary:
      "Pintu ayun tunggal buka keluar dengan engsel tersembunyi (concealed hinges), concealed friction arm, dan L-Fit handle & lock set.",
    frameDepth: "88 mm",
    sizeRange: "Lebar 500–1.000 mm · Tinggi 1.000–3.150 mm (ATIS) / 2.400 mm (ATIS PLUS)",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Concealed hinges & concealed friction arm",
      "L-Fit design handle & lock set terintegrasi",
      "Pilihan buka kiri/kanan (door closer tidak tersedia)",
    ],
  },
  {
    id: "door-double-swing",
    category: "swing-door",
    name: "Out-Swing Door (Double Leaf)",
    shortName: "Double Swing Door",
    image: "/images/atis/door-double-swing.webp",
    summary:
      "Pintu ayun 2 daun buka keluar dengan area kaca maksimal dan bingkai pertemuan lebih tipis dibanding pintu ayun konvensional (direkomendasikan untuk hunian low-rise).",
    frameDepth: "88 mm",
    sizeRange: "Lebar 1.000–2.000 mm · Tinggi 1.200–3.150 mm",
    glassSpec: "5, 6, 8–15,52, 22 mm · Glazing channel",
    highlights: [
      "Bidang kaca jauh lebih luas dibanding double swing konvensional",
      "Engsel & friction arm tersembunyi di dalam kusen",
      "L-Fit handle & lock set (door closer tidak tersedia)",
    ],
  },
];
