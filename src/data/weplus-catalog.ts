export interface WePlusFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface WePlusSubProduct {
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

export const WEPLUS_FEATURES: WePlusFeature[] = [
  {
    id: "high-wind-stile",
    title: "Meeting Stile Kuat Menahan Beban Angin Tinggi",
    description:
      "Profil pertemuan daun pintu geser (meeting stile) dirancang khusus untuk menahan tekanan angin tinggi hingga 1.600 Pa (ASTM E330) pada bangunan bertingkat.",
    image: "/images/weplus/feature-1.webp",
    alt: "Detail meeting stile pintu geser TOSTEM WE PLUS untuk beban angin tinggi",
  },
  {
    id: "waterproof-attachment",
    title: "Attachment Pelindung Sealant & Anti Rembes Air",
    description:
      "Struktur attachment menjaga stabilitas area keliling jendela dalam jangka panjang dan mencegah air masuk meski sealant luar mengalami penuaan.",
    image: "/images/weplus/feature-2.webp",
    alt: "Detail attachment pelindung anti rembes air pada kusen TOSTEM WE PLUS",
  },
  {
    id: "adjustable-outer-lock",
    title: "Pengunci Panel Luar Mudah Disetel",
    description:
      "Sekrup penyetel pengunci panel luar (outer-panel lock) memudahkan kalibrasi presisi agar panel geser tetap kokoh dan aman.",
    image: "/images/weplus/feature-3.webp",
    alt: "Detail penyetel pengunci panel luar pada profil TOSTEM WE PLUS",
  },
  {
    id: "security-lock",
    title: "Sistem Penguncian Keamanan Tinggi",
    description:
      "Dilengkapi high-quality security lock dengan opsi single lock maupun multi-lock untuk kerapatan dan keamanan ekstra pada lantai atas.",
    image: "/images/weplus/feature-4.webp",
    alt: "Detail sistem penguncian keamanan tinggi TOSTEM WE PLUS",
  },
  {
    id: "limit-arm",
    title: "Limit Arm (Window Restrictor) untuk Keselamatan",
    description:
      "Lengan pembatas bukaan jendela menjaga sudut bukaan tetap aman pada gedung bertingkat dan mencegah benturan akibat hembusan angin kencang.",
    image: "/images/weplus/feature-5.webp",
    alt: "Detail limit arm window restrictor pada jendela TOSTEM WE PLUS",
  },
  {
    id: "precast-sill-attachment",
    title: "Opsi Preinstalled Sill untuk Beton Pre-Cast",
    description:
      "Mendukung sill attachment terpasang awal (preinstalled) untuk konstruksi beton pre-cast sehingga pemasangan proyek high-rise lebih cepat dan presisi.",
    image: "/images/weplus/feature-6.webp",
    alt: "Detail preinstalled sill attachment beton pre-cast pada TOSTEM WE PLUS",
  },
];

export const WEPLUS_PERFORMANCE_ROWS = [
  {
    variant: "WE PLUS (Standar ASTM · High-Rise & Hunian Bertingkat)",
    wind: "ASTM E330: 1.600 Pa",
    water: "ASTM E300: 240 Pa",
    air: "ASTM E283: 10,7 m³/(h·m²)",
    sound: "JIS (A4706 & A4702): 25 dB",
  },
] as const;

export const WEPLUS_SUBPRODUCT_TABS = [
  { id: "window", label: "WE PLUS Window", count: 7 },
  { id: "sliding-door", label: "Sliding Door", count: 3 },
  { id: "swing-door", label: "Swing Door", count: 4 },
] as const;

export const WEPLUS_SUBPRODUCTS: WePlusSubProduct[] = [
  // === WE PLUS WINDOW (7 · IDs 25–31) ===
  {
    id: "win-fixed",
    category: "window",
    name: "Fixed Window",
    shortName: "Fixed Window",
    image: "/images/weplus/win-fixed.webp",
    summary:
      "Jendela kaca mati tanpa daun bukaan untuk memaksimalkan pencahayaan alami dan visibilitas pada fasad bangunan bertingkat.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Mendukung ketinggian bukaan hingga 3.000 mm (sesuai desain proyek)",
    glassSpec: "5, 6, 8 mm (performa beban angin mengikuti ketebalan kaca)",
    highlights: [
      "Performa beban angin menyesuaikan ketebalan kaca — konsultasikan dengan tim teknis",
      "Profil 72 mm presisi siap untuk fasad gedung bertingkat dan apartemen",
      "Mudah dipadukan dengan jendela casement atau awning pada kombinasi fasad",
    ],
  },
  {
    id: "win-corner-fixed",
    category: "window",
    name: "Corner Fixed Window",
    shortName: "Corner Fixed",
    image: "/images/weplus/win-corner-fixed.webp",
    summary:
      "Jendela kaca mati sudut luar (outward corner) 90° untuk membuka sudut pandang panorama pada hunian bertingkat maupun apartemen.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Khusus konfigurasi sudut luar (outward corner)",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Tersedia khusus untuk konfigurasi sudut luar (outward corner)",
      "Tersedia opsi middle bar sesuai kebutuhan proporsi dan struktur fasad",
      "Menghadirkan pencahayaan alami dua arah dengan kekedapan standar ASTM",
    ],
  },
  {
    id: "win-awning-single",
    category: "window",
    name: "Awning Window — Single Lock",
    shortName: "Awning Single Lock",
    image: "/images/weplus/win-awning-single.webp",
    summary:
      "Jendela jungkit atas dengan pengunci tunggal (single lock) yang membuka miring ke luar untuk ventilasi terlindung saat hujan ringan.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Ideal untuk kamar mandi, koridor, area servis & lantai bertingkat",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Sistem single lock ergonomis untuk pengoperasian buka-tutup harian yang ringan",
      "Kasa nyamuk (insect screen) tersedia melalui pesanan khusus (special order)",
      "Bukaan miring dari bawah membantu menahan tampias air hujan",
    ],
  },
  {
    id: "win-awning-multi",
    category: "window",
    name: "Awning Window — Multi Lock",
    shortName: "Awning Multi Lock",
    image: "/images/weplus/win-awning-multi.webp",
    summary:
      "Jendela jungkit atas dengan sistem penguncian multi-titik (multi-lock) untuk kerapatan maksimal terhadap tekanan angin dan air di lantai atas.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Direkomendasikan untuk lantai bertingkat dan area terpapar angin tinggi",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Penguncian multi-lock meningkatkan kekedapan air (240 Pa) dan angin (1.600 Pa)",
      "Mendukung integrasi limit arm (window restrictor) untuk keselamatan",
      "Catatan teknis: kasa nyamuk (insect screen) tidak tersedia pada tipe multi-lock",
    ],
  },
  {
    id: "win-casement-single",
    category: "window",
    name: "Casement Window — Single Lock",
    shortName: "Casement Single Lock",
    image: "/images/weplus/win-casement-single.webp",
    summary:
      "Jendela ayun samping dengan pengunci tunggal (single lock), pilihan arah buka kiri/kanan (L/R), serta opsi safety arm.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Cocok untuk kamar tidur, ruang kerja & hunian bertingkat",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Pilihan arah bukaan kiri atau kanan (L/R) sesuai tata letak ruang",
      "Tersedia opsi safety arm (limit arm) untuk membatasi sudut bukaan",
      "Kasa nyamuk (insect screen) tersedia melalui pesanan khusus (special order)",
    ],
  },
  {
    id: "win-casement-multi",
    category: "window",
    name: "Casement Window — Multi Lock",
    shortName: "Casement Multi Lock",
    image: "/images/weplus/win-casement-multi.webp",
    summary:
      "Jendela casement berperforma tinggi dengan multi-point lock yang mengunci rapat di beberapa titik untuk bangunan bertingkat tinggi.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Optimal untuk apartemen, kondominium & hunian bertingkat tinggi",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Penguncian multi-lock menjaga daun jendela tetap rapat saat angin kencang",
      "Dirancang memenuhi ketahanan angin ASTM E330 hingga 1.600 Pa",
      "Catatan teknis: kasa nyamuk (insect screen) tidak tersedia pada tipe multi-lock",
    ],
  },
  {
    id: "win-mixed",
    category: "window",
    name: "Combination — Mixed Window",
    shortName: "Mixed Window",
    image: "/images/weplus/win-mixed.webp",
    summary:
      "Jendela kombinasi yang menggabungkan panel kaca mati (fixed) dengan daun bukaan (awning/casement) dalam satu kesatuan kusen terintegrasi.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Fleksibel untuk bukaan tinggi hingga 3.000 mm pada fasad proyek",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Memadukan visibilitas panel kaca besar dengan fungsi ventilasi di satu unit",
      "Struktur mullion terintegrasi menjaga kekakuan profil pada bukaan tinggi",
      "Cocok untuk apartemen, ruang keluarga bertingkat, dan fasad komersial",
    ],
  },

  // === SLIDING DOOR (3 · IDs 32–34) ===
  {
    id: "sd-2p2t",
    category: "sliding-door",
    name: "Sliding Door — 2 Panels on 2 Tracks",
    shortName: "Sliding 2P2T",
    image: "/images/weplus/sd-2p2t.webp",
    summary:
      "Pintu geser 2 panel di atas 2 rel dengan meeting stile penguat beban angin dan tinggi bukaan hingga 3 meter untuk balkon maupun teras.",
    frameDepth: "72 mm · Tinggi ambang bawah 50 mm",
    sizeRange: "Mendukung ketinggian hingga 3.000 mm (opsi sill standar & floor finish)",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Pilihan ambang bawah (sill) standar maupun floor finish",
      "Kasa nyamuk bagian dalam (inside insect screen) tersedia via special order",
      "Meeting stile diperkuat untuk ketahanan angin tinggi hingga 1.600 Pa",
    ],
  },
  {
    id: "sd-4p2t",
    category: "sliding-door",
    name: "Sliding Door — 4 Panels on 2 Tracks",
    shortName: "Sliding 4P2T",
    image: "/images/weplus/sd-4p2t.webp",
    summary:
      "Pintu geser 4 panel bukaan tengah simetris di atas 2 rel dengan ambang 50 mm untuk bukaan balkon lebar pada hunian bertingkat.",
    frameDepth: "72 mm · Tinggi ambang bawah 50 mm",
    sizeRange: "Mendukung ketinggian hingga 3.000 mm untuk bentang fasad lebar",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Dua daun tengah membuka simetris ke kanan-kiri pada kedalaman kusen 72 mm",
      "Pilihan ambang bawah (sill) standar dan floor finish",
      "Tersedia opsi kasa nyamuk internal melalui pesanan khusus",
    ],
  },
  {
    id: "sd-3p3t",
    category: "sliding-door",
    name: "Sliding Door — 3 Panels on 3 Tracks",
    shortName: "Sliding 3P3T",
    image: "/images/weplus/sd-3p3t.webp",
    summary:
      "Pintu geser 3 panel di atas 3 rel terpisah (kusen 104 mm) yang membuka hingga 2/3 lebar bukaan sambil tetap memenuhi standar ASTM.",
    frameDepth: "104 mm (3 tracks) · Tinggi ambang bawah 50 mm",
    sizeRange: "Mendukung ketinggian hingga 3.000 mm untuk akses balkon luas",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Ketiga panel dapat ditumpuk sejajar untuk akses bukaan 2/3 bidang",
      "Pilihan ambang bawah standar maupun floor finish",
      "Kasa nyamuk bagian dalam tersedia melalui pesanan khusus",
    ],
  },

  // === SWING DOOR (4 · IDs 35–38) ===
  {
    id: "sw-out-single",
    category: "swing-door",
    name: "Out-Swing Door (Single)",
    shortName: "Out-Swing Single",
    image: "/images/weplus/sw-out-single.webp",
    summary:
      "Pintu ayun tunggal bukaan ke luar dengan pilihan arah buka L/R, opsi dengan/tanpa ambang bawah, serta dukungan door closer.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm (opsi tanpa sill)",
    sizeRange: "Ideal untuk akses balkon, rooftop, dan pintu samping bertingkat",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Pilihan arah bukaan kiri/kanan (L/R) serta opsi with/without sill",
      "Tersedia aksesoris opsional door closer",
      "Catatan teknis: pada konfigurasi tanpa sill, peringkat uji kedap air & udara tidak berlaku",
    ],
  },
  {
    id: "sw-out-double",
    category: "swing-door",
    name: "Out-Swing Door (Double)",
    shortName: "Out-Swing Double",
    image: "/images/weplus/sw-out-double.webp",
    summary:
      "Pintu ayun ganda bukaan ke luar yang menghadirkan akses masuk lega dengan kekokohan profil WE PLUS untuk teras dan patio bertingkat.",
    frameDepth: "72 mm · Tinggi ambang bawah 35 mm (opsi tanpa sill)",
    sizeRange: "Cocok untuk bukaan utama ruang keluarga ke teras atau patio",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Pilihan daun utama L/R serta opsi ambang bawah (with/without sill)",
      "Mendukung pemasangan door closer opsional",
      "Catatan teknis: pada konfigurasi non-sill, peringkat uji kedap air & udara tidak berlaku",
    ],
  },
  {
    id: "sw-in-single",
    category: "swing-door",
    name: "In-Swing Door (Single)",
    shortName: "In-Swing Single",
    image: "/images/weplus/sw-in-single.webp",
    summary:
      "Pintu ayun tunggal bukaan ke dalam khusus tanpa ambang bawah (non-sill) untuk transisi lantai mulus pada area beratap atau interior.",
    frameDepth: "72 mm · Non-sill only",
    sizeRange: "Desain bebas ambang lantai untuk kelancaran sirkulasi",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Tersedia khusus konfigurasi non-sill dengan pilihan arah buka L/R",
      "Mendukung aksesoris opsional door closer",
      "Catatan teknis: tipe in-swing non-sill tidak memiliki peringkat uji kedap air & udara",
    ],
  },
  {
    id: "sw-in-double",
    category: "swing-door",
    name: "In-Swing Door (Double)",
    shortName: "In-Swing Double",
    image: "/images/weplus/sw-in-double.webp",
    summary:
      "Pintu ayun ganda bukaan ke dalam tanpa ambang bawah (non-sill) untuk akses dua daun simetris bebas hambatan lantai.",
    frameDepth: "72 mm · Non-sill only",
    sizeRange: "Desain non-sill dua daun simetris untuk area semi-eksterior beratap",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Tersedia khusus konfigurasi non-sill dengan pilihan daun utama L/R",
      "Mendukung aksesoris opsional door closer",
      "Catatan teknis: tipe in-swing non-sill tidak memiliki peringkat uji kedap air & udara",
    ],
  },
];
