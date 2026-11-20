export interface ViewFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface ViewSubProduct {
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

export const VIEW_FEATURES: ViewFeature[] = [
  {
    id: "outer-panel-lock",
    title: "Pengunci Panel Luar Mudah Disetel",
    description:
      "Sekrup penyetel pengunci panel luar (outer-panel lock) memudahkan kalibrasi presisi agar panel geser tetap kokoh dan tidak mudah diangkat.",
    image: "/images/view/feature-1.webp",
    alt: "Detail sekrup penyetel pengunci panel luar pada profil TOSTEM VIEW / VIEW Plus",
  },
  {
    id: "bottom-guide",
    title: "Bottom Guide Stabil & Crescent Lock Berindikator",
    description:
      "Pemandu bawah menjaga pergerakan panel tetap halus dan tidak goyang, dipadukan dengan crescent lock berindikator visual OPEN/LOCK.",
    image: "/images/view/feature-2.webp",
    alt: "Detail bottom guide dan crescent lock berindikator OPEN/LOCK pada TOSTEM VIEW",
  },
  {
    id: "double-glass-seal",
    title: "Kaca Ganda 28 mm & Multi-Fin Weather Seal",
    description:
      "Varian VIEW Plus mendukung kaca ganda terinsulasi hingga 28 mm (8 + 12 + 8 mm) dengan seal sirip ganda untuk efisiensi energi AC dan peredaman suara.",
    image: "/images/view/feature-3.webp",
    alt: "Potongan sudut profil kaca ganda dan weather seal pada TOSTEM VIEW Plus",
  },
  {
    id: "ergonomic-lock",
    title: "Handle Pengunci Ergonomis TOSTEM",
    description:
      "Tuas pengunci solid dengan gerakan buka-tutup 90° yang ringan namun rapat, dirancang untuk penggunaan intensif jangka panjang.",
    image: "/images/view/feature-4.webp",
    alt: "Detail handle pengunci ergonomis TOSTEM VIEW / VIEW Plus posisi terkunci dan terbuka",
  },
  {
    id: "flush-handle-stopper",
    title: "Flush Handle Tanam & Stopper Pengaman",
    description:
      "Handle tanam rata bingkai dengan stopper terintegrasi meredam benturan saat panel digeser penuh dan menjaga estetika minimalis.",
    image: "/images/view/feature-5.webp",
    alt: "Detail flush handle tanam dan stopper pengaman pada pintu geser TOSTEM VIEW",
  },
  {
    id: "drain-valve",
    title: "Katup Drainase Ambang Bawah (Drain Valve)",
    description:
      "Katup drainase pada sill membuang air hujan dengan cepat ke arah luar sehingga mencegah tampias masuk ke dalam ruangan.",
    image: "/images/view/feature-6.webp",
    alt: "Detail katup drainase ambang bawah pada kusen TOSTEM VIEW / VIEW Plus",
  },
];

export const VIEW_PERFORMANCE_ROWS = [
  {
    variant: "VIEW (Single Glass · Visibilitas Standar JIS)",
    frame: "72 mm · 3 rel: 104 mm",
    glass: "Kaca tunggal 5, 6, 8 mm",
    wind: "Hingga 850 Pa",
    highlight: "Visibilitas lega & efisiensi biaya untuk hunian modern",
  },
  {
    variant: "VIEW Plus (Double Glass · Insulasi Energi & Suara)",
    frame: "72 mm · 3 rel: 104 mm",
    glass: "Kaca ganda 28 mm (8 + rongga 12 + 8 mm)",
    wind: "Hingga 1.600 Pa",
    highlight: "Hemat energi AC, redam bising & tahan angin tinggi hingga 3 m",
  },
] as const;

export const VIEW_SUBPRODUCT_TABS = [
  { id: "window", label: "VIEW Window", count: 9 },
  { id: "sliding-door", label: "Sliding Door", count: 5 },
  { id: "swing-door", label: "Swing Door", count: 4 },
] as const;

export const VIEW_SUBPRODUCTS: ViewSubProduct[] = [
  // === VIEW WINDOW (9 · IDs 70–78) ===
  {
    id: "win-2p2t",
    category: "window",
    name: "Sliding Window — 2 Panels on 2 Tracks",
    shortName: "Sliding 2P2T",
    image: "/images/view/win-2p2t.webp",
    summary:
      "Jendela geser 2 panel di atas 2 rel dengan bukaan luas, pilihan single sliding (L/G), serta dukungan kasa nyamuk terintegrasi.",
    frameDepth: "72 mm",
    sizeRange: "Tersedia hingga tinggi bukaan 3.000 mm (sesuai tipe & konfigurasi)",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Tersedia opsi kasa nyamuk bagian dalam (internal insect screen)",
      "Tersedia kasa nyamuk eksternal melalui pesanan khusus",
      "Mendukung konfigurasi single sliding (L/G) sesuai tata letak ruang",
    ],
  },
  {
    id: "win-3p2t-sfs",
    category: "window",
    name: "Sliding Window — 3 Panels on 2 Tracks (SFS)",
    shortName: "Sliding 3P2T SFS",
    image: "/images/view/win-3p2t-sfs.webp",
    summary:
      "Jendela geser 3 panel dengan panel tengah tetap (Slide–Fix–Slide) untuk bentang jendela lebar tanpa menambah ketebalan kusen.",
    frameDepth: "72 mm",
    sizeRange: "Cocok untuk bentang jendela kamar utama & ruang keluarga",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Konfigurasi SFS (Slide–Fix–Slide) menjaga pandangan tengah tetap luas",
      "Tersedia opsi kasa nyamuk internal yang menyatu di jalur rel",
      "Kasa nyamuk eksternal tersedia dengan pesanan khusus",
    ],
  },
  {
    id: "win-4p2t-fssf",
    category: "window",
    name: "Sliding Window — 4 Panels on 2 Tracks (FSSF)",
    shortName: "Sliding 4P2T FSSF",
    image: "/images/view/win-4p2t-fssf.webp",
    summary:
      "Jendela geser 4 panel simetris (Fix–Slide–Slide–Fix) dengan bukaan tengah ganda untuk fasad lebar dan sirkulasi udara maksimal.",
    frameDepth: "72 mm",
    sizeRange: "Ideal untuk bukaan panorama ruang keluarga & fasad depan",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Konfigurasi FSSF simetris membuka area tengah secara leluasa",
      "Tersedia kasa nyamuk internal; opsi eksternal tersedia via special order",
      "Stabil pada bentang lebar dengan sistem pengunci & bottom guide presisi",
    ],
  },
  {
    id: "win-casement",
    category: "window",
    name: "Casement Window",
    shortName: "Casement",
    image: "/images/view/win-casement.webp",
    summary:
      "Jendela jungkit samping (bukaan ayun keluar) dengan pilihan arah buka kiri/kanan (L/R) yang menangkap aliran angin secara optimal.",
    frameDepth: "72 mm",
    sizeRange: "Proporsional untuk kamar tidur, ruang kerja & kamar mandi kering",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Pilihan arah bukaan kiri atau kanan (L/R) sesuai orientasi ruang",
      "Tersedia kasa nyamuk (insect screen) yang rapi dan mudah dibersihkan",
      "Kerapatan profil optimal mendukung insulasi suara & efisiensi AC",
    ],
  },
  {
    id: "win-double-casement",
    category: "window",
    name: "Double Casement Window",
    shortName: "Double Casement",
    image: "/images/view/win-double-casement.webp",
    summary:
      "Jendela casement 2 daun simetris yang membuka keluar secara bersamaan untuk bukaan ventilasi dan pencahayaan alami lebih lega.",
    frameDepth: "72 mm",
    sizeRange: "Cocok untuk kamar utama, ruang makan & ruang keluarga",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Dua daun bukaan simetris memberi ventilasi silang lebih maksimal",
      "Mendukung pemasangan kasa nyamuk (insect screen)",
      "Opsi VIEW Plus kaca ganda 28 mm membantu meredam kebisingan jalan",
    ],
  },
  {
    id: "win-awning",
    category: "window",
    name: "Awning Window",
    shortName: "Awning",
    image: "/images/view/win-awning.webp",
    summary:
      "Jendela jungkit atas yang membuka miring ke luar dari sisi bawah, memungkinkan sirkulasi udara tetap berjalan saat hujan ringan.",
    frameDepth: "72 mm",
    sizeRange: "Ideal untuk area servis, koridor, kamar mandi & kombinasi jendela atas",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Bukaan miring dari bawah membantu menahan tampias gerimis",
      "Tersedia opsi kasa nyamuk (insect screen)",
      "Mudah dipadukan dengan Fixed Window pada komposisi fasad modern",
    ],
  },
  {
    id: "win-fixed",
    category: "window",
    name: "Fixed Window",
    shortName: "Fixed Window",
    image: "/images/view/win-fixed.webp",
    summary:
      "Jendela kaca mati tanpa daun bukaan untuk memaksimalkan cahaya alami dan pemandangan, mendukung hingga 4 unit tersambung mullion.",
    frameDepth: "72 mm",
    sizeRange: "Mendukung susunan hingga 4 fixed window dengan unitized mullion",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Dapat dirangkai hingga 4 panel tetap menggunakan unitized mullion",
      "Ketahanan beban angin menyesuaikan ketebalan kaca (hingga 1.600 Pa pada VIEW Plus)",
      "Profil ramping menonjolkan bidang kaca dan pemandangan luar",
    ],
  },
  {
    id: "win-corner-fixed",
    category: "window",
    name: "Corner Fixed Window",
    shortName: "Corner Fixed",
    image: "/images/view/win-corner-fixed.webp",
    summary:
      "Jendela kaca mati sudut 90° untuk sudut bangunan (dalam maupun luar) yang membuka perspektif panorama dua arah sekaligus.",
    frameDepth: "72 mm",
    sizeRange: "Tersedia untuk sudut dalam (inward) maupun sudut luar (outward)",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Mendukung konfigurasi sudut ke dalam maupun sudut ke luar (in/outward corner)",
      "Tersedia opsi middle bar untuk fleksibilitas proporsi fasad",
      "Memberikan kesan ruang lebih luas dengan pencahayaan alami dua sisi",
    ],
  },
  {
    id: "win-louver",
    category: "window",
    name: "Aluminium Louver",
    shortName: "Aluminium Louver",
    image: "/images/view/win-louver.webp",
    summary:
      "Jendela kisi-kisi aluminium untuk sirkulasi udara kontinu pada area utilitas, gudang, ruang jemur, atau area yang membutuhkan privasi.",
    frameDepth: "72 mm",
    sizeRange: "Dirancang khusus untuk kebutuhan ventilasi tetap",
    glassSpec: "Bilah kisi aluminium terintegrasi (tanpa kaca)",
    highlights: [
      "Menjaga aliran udara konstan sambil tetap menjaga privasi ruang",
      "Finishing Anodized TEXGUARD tahan korosi dan cuaca tropis",
      "Catatan teknis: tipe louver tidak menggunakan peringkat uji kedap air/udara",
    ],
  },

  // === SLIDING DOOR (5 · IDs 79–83) ===
  {
    id: "sd-2p2t",
    category: "sliding-door",
    name: "Sliding Door — 2 Panels on 2 Tracks",
    shortName: "Sliding Door 2P2T",
    image: "/images/view/sd-2p2t.webp",
    summary:
      "Pintu geser 2 panel di atas 2 rel dengan opsi tinggi hingga 3 meter untuk akses taman, teras, atau balkon yang lapang.",
    frameDepth: "72 mm",
    sizeRange: "Tersedia hingga tinggi 3.000 mm (opsi ambang standar & floor finish)",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Pilihan sill standar atau floor finish untuk transisi lantai lebih rata",
      "Mendukung konfigurasi single sliding (L/R)",
      "Tersedia opsi kasa nyamuk geser internal",
    ],
  },
  {
    id: "sd-3p2t-sfs",
    category: "sliding-door",
    name: "Sliding Door — 3 Panels on 2 Tracks (SFS)",
    shortName: "Sliding Door 3P2T",
    image: "/images/view/sd-3p2t-sfs.webp",
    summary:
      "Pintu geser 3 panel pada kusen 2 rel (Slide–Fix–Slide) yang menghadirkan bukaan lebar dengan profil kusen tetap ramping 72 mm.",
    frameDepth: "72 mm",
    sizeRange: "Tersedia hingga tinggi 3.000 mm untuk akses teras & taman",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Kombinasi 2 daun geser + 1 panel tetap pada kedalaman kusen 72 mm",
      "Pilihan ambang bawah standar maupun floor finish",
      "Tersedia kasa nyamuk internal yang meluncur halus di jalurnya",
    ],
  },
  {
    id: "sd-3p3t",
    category: "sliding-door",
    name: "Sliding Door — 3 Panels on 3 Tracks",
    shortName: "Sliding Door 3P3T",
    image: "/images/view/sd-3p3t.webp",
    summary:
      "Pintu geser 3 panel di atas 3 rel terpisah (kusen 104 mm) yang memungkinkan 2/3 lebar bukaan terbuka penuh ke satu sisi.",
    frameDepth: "104 mm (3 tracks)",
    sizeRange: "Tersedia hingga tinggi 3.000 mm untuk bukaan ruang keluarga luas",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Ketiga panel dapat ditumpuk sejajar untuk akses bukaan 2/3 bidang",
      "Pilihan ambang bawah standar dan floor finish",
      "Tersedia kasa nyamuk internal pada jalur rel khusus",
    ],
  },
  {
    id: "sd-4p2t",
    category: "sliding-door",
    name: "Sliding Door — 4 Panels on 2 Tracks",
    shortName: "Sliding Door 4P2T",
    image: "/images/view/sd-4p2t.webp",
    summary:
      "Pintu geser 4 panel bukaan tengah simetris di atas 2 rel untuk menghubungkan ruang keluarga dan area taman secara leluasa.",
    frameDepth: "72 mm",
    sizeRange: "Tersedia hingga tinggi 3.000 mm untuk bentang fasad lebar",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Dua panel tengah membuka ke kanan-kiri menciptakan akses sentral simetris",
      "Pilihan sill standar atau floor finish sesuai kebutuhan lantai",
      "Mendukung kasa nyamuk geser internal dan kaca ganda VIEW Plus 28 mm",
    ],
  },
  {
    id: "sd-6p3t",
    category: "sliding-door",
    name: "Sliding Door — 6 Panels on 3 Tracks",
    shortName: "Sliding Door 6P3T",
    image: "/images/view/sd-6p3t.webp",
    summary:
      "Konfigurasi pintu geser terlebar pada seri VIEW / VIEW Plus: 6 panel di atas 3 rel (104 mm) untuk bukaan panorama ruang utama.",
    frameDepth: "104 mm (3 tracks)",
    sizeRange: "Tersedia hingga tinggi 3.000 mm untuk bentang ruang ekstra lebar",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Empat daun dapat digeser bertumpuk ke sisi kiri dan kanan secara simetris",
      "Pilihan ambang bawah standar dan floor finish",
      "Mendukung kasa nyamuk internal serta kaca ganda 28 mm untuk insulasi optimal",
    ],
  },

  // === SWING DOOR (4 · IDs 84–87) ===
  {
    id: "sw-out-single",
    category: "swing-door",
    name: "Out-Swing Door (Single)",
    shortName: "Out-Swing Single",
    image: "/images/view/sw-out-single.webp",
    summary:
      "Pintu ayun tunggal bukaan ke luar dengan pilihan arah buka L/R, fleksibel dengan atau tanpa ambang bawah untuk akses samping maupun teras.",
    frameDepth: "72 mm",
    sizeRange: "Proporsional untuk pintu teras, balkon & akses samping hunian",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Pilihan arah bukaan kiri/kanan (L/R) serta opsi dengan atau tanpa sill",
      "Tersedia aksesoris opsional door closer",
      "Kompatibel dengan insect screen pada konfigurasi louver door",
    ],
  },
  {
    id: "sw-out-double",
    category: "swing-door",
    name: "Out-Swing Door (Double)",
    shortName: "Out-Swing Double",
    image: "/images/view/sw-out-double.webp",
    summary:
      "Pintu ayun ganda bukaan ke luar yang menghadirkan akses masuk elegan dan lega ke area taman, patio, atau ruang komersial ringan.",
    frameDepth: "72 mm",
    sizeRange: "Ideal untuk akses utama ruang keluarga menuju teras atau patio",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Pilihan daun utama L/R serta opsi ambang bawah (with/without sill)",
      "Tersedia opsi door closer untuk penutupan pintu lebih terkendali",
      "Kompatibel dengan insect screen pada konfigurasi louver door",
    ],
  },
  {
    id: "sw-in-single",
    category: "swing-door",
    name: "In-Swing Door (Single)",
    shortName: "In-Swing Single",
    image: "/images/view/sw-in-single.webp",
    summary:
      "Pintu ayun tunggal bukaan ke dalam tanpa ambang bawah (non-sill) untuk kelancaran akses area interior atau semi-eksterior beratap.",
    frameDepth: "72 mm",
    sizeRange: "Desain non-sill (tanpa ambang bawah) untuk transisi lantai bebas hambatan",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Konfigurasi non-sill only dengan pilihan arah bukaan kiri/kanan (L/R)",
      "Tersedia opsi door closer & kasa nyamuk bersama louver door",
      "Catatan teknis: tipe in-swing non-sill tidak memiliki peringkat uji kedap air/udara",
    ],
  },
  {
    id: "sw-in-double",
    category: "swing-door",
    name: "In-Swing Door (Double)",
    shortName: "In-Swing Double",
    image: "/images/view/sw-in-double.webp",
    summary:
      "Pintu ayun ganda bukaan ke dalam tanpa ambang bawah untuk akses dua arah yang simetris dan bebas halangan lantai.",
    frameDepth: "72 mm",
    sizeRange: "Desain non-sill (tanpa ambang bawah) untuk bukaan dua daun simetris",
    glassSpec: "VIEW: 5, 6, 8 mm · VIEW Plus: kaca ganda hingga 28 mm",
    highlights: [
      "Konfigurasi non-sill only dengan pilihan daun utama L/R",
      "Tersedia opsi door closer serta kasa nyamuk bersama louver door",
      "Catatan teknis: tipe in-swing non-sill tidak memiliki peringkat uji kedap air/udara",
    ],
  },
];
