export interface We40SubProduct {
  id: string;
  category: "sliding" | "casement-fixed";
  name: string;
  shortName: string;
  image: string;
  summary: string;
  frameDepth: string;
  sizeRange: string;
  glassSpec: string;
  highlights: string[];
}

export const WE40_USP_CARDS = [
  {
    index: "01",
    title: "Profil Ramping 41 mm Presisi Pabrikan",
    description:
      "Dirancang untuk pasar residensial dan perumahan skala luas dengan standar pre-engineered TOSTEM yang konsisten di setiap unit.",
  },
  {
    index: "02",
    title: "Teruji Standar JIS Jepang",
    description:
      "Memenuhi standar ketahanan angin 500 Pa (hingga 800 Pa pada dimensi tertentu, JIS A 1515), kedap air W-1: 100 Pa, dan kedap udara A-3: 10 m³/(h·m²).",
  },
  {
    index: "03",
    title: "Efisien untuk Cluster & Renovasi Menyeluruh",
    description:
      "Pilihan ideal untuk pengembangan perumahan, renovasi rumah tinggal, maupun pengadaan unit berulang dengan finishing Anodized TEXGUARD tahan lama.",
  },
] as const;

export const WE40_PERFORMANCE_ROWS = [
  {
    variant: "WE 40 (Standar JIS · Hunian & Proyek Massal)",
    wind: "500 Pa (hingga 800 Pa pada ukuran tertentu · JIS A 1515)",
    water: "W-1: 100 Pa (JIS A 1517)",
    air: "A-3: 10 m³/(h·m²) (JIS A 1516)",
    sound: "N/A (JIS A 1416)",
  },
] as const;

export const WE40_SUBPRODUCT_TABS = [
  { id: "all", label: "Semua Tipe WE 40", count: 5 },
  { id: "sliding", label: "Sliding Window", count: 2 },
  { id: "casement-fixed", label: "Casement, Awning & Fixed", count: 3 },
] as const;

export const WE40_SUBPRODUCTS: We40SubProduct[] = [
  {
    id: "win-single-sliding",
    category: "sliding",
    name: "Single Sliding Window",
    shortName: "Single Sliding",
    image: "/images/we40/win-single-sliding.webp",
    summary:
      "Jendela geser 2 panel (1 geser + 1 tetap) berprofil ramping 41 mm yang praktis untuk kamar tidur, ruang kerja, maupun unit cluster residensial.",
    frameDepth: "41 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Lebar 740–1.900 mm × Tinggi 400–1.500 mm (JIS 500–800 Pa)",
    glassSpec: "5, 6 mm · Glazing finish: Glazing channel",
    highlights: [
      "Tersedia opsi kasa nyamuk bagian luar (outside insect screen)",
      "Posisi daun geser dapat dipilih kiri atau kanan (L/R)",
      "Sistem glazing channel menjaga tampilan bingkai tetap rapi dan rapat",
    ],
  },
  {
    id: "win-center-sliding",
    category: "sliding",
    name: "Center Sliding Window (FSSF)",
    shortName: "Center Sliding FSSF",
    image: "/images/we40/win-center-sliding.webp",
    summary:
      "Jendela geser 4 panel simetris (Fix–Slide–Slide–Fix) dengan bukaan tengah hingga lebar 3,2 meter untuk ruang keluarga atau fasad depan.",
    frameDepth: "41 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Lebar 1.480–3.200 mm × Tinggi 400–1.500 mm (JIS 500–800 Pa)",
    glassSpec: "5, 6 mm · Glazing finish: Glazing channel",
    highlights: [
      "Tersedia opsi kasa nyamuk bagian luar (outside insect screen)",
      "Posisi panel dapat disesuaikan dari kiri/kanan (L/R)",
      "Bukaan tengah ganda memberi ventilasi dan cahaya alami lebih lega",
    ],
  },
  {
    id: "win-casement",
    category: "casement-fixed",
    name: "Casement Window",
    shortName: "Casement Window",
    image: "/images/we40/win-casement.webp",
    summary:
      "Jendela ayun samping (bukaan ke luar) berprofil 41 mm yang efektif menangkap aliran udara alami untuk kamar tidur dan ruang hunian.",
    frameDepth: "41 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Lebar 380–800 mm × Tinggi 500–1.600 mm",
    glassSpec: "5, 6 mm · Glazing finish: Glazing channel",
    highlights: [
      "Proporsi ramping 41 mm cocok untuk bukaan vertikal pada fasad modern",
      "Finishing kaca menggunakan glazing channel standar pabrikan TOSTEM",
      "Catatan teknis: kasa nyamuk (insect screen) tidak tersedia pada tipe ini",
    ],
  },
  {
    id: "win-awning",
    category: "casement-fixed",
    name: "Awning Window",
    shortName: "Awning Window",
    image: "/images/we40/win-awning.webp",
    summary:
      "Jendela jungkit atas yang membuka miring ke luar dari sisi bawah, ideal untuk kamar mandi, area servis, dapur, dan ventilasi koridor.",
    frameDepth: "41 mm · Tinggi ambang bawah 35 mm",
    sizeRange: "Lebar 340–790 mm × Tinggi 480–1.200 mm",
    glassSpec: "5, 6 mm · Glazing finish: Glazing channel",
    highlights: [
      "Pilihan orientasi pengoperasian kiri atau kanan (L/R)",
      "Bukaan miring dari bawah membantu melindungi interior dari gerimis ringan",
      "Catatan teknis: kasa nyamuk (insect screen) tidak tersedia pada tipe ini",
    ],
  },
  {
    id: "win-fixed",
    category: "casement-fixed",
    name: "Fixed Window",
    shortName: "Fixed Window",
    image: "/images/we40/win-fixed.webp",
    summary:
      "Jendela kaca mati hingga tinggi 2,4 meter dengan sistem glazing bead untuk memaksimalkan pencahayaan alami pada area tangga, void, maupun ruang keluarga.",
    frameDepth: "41 mm",
    sizeRange: "Lebar 350–2.100 mm × Tinggi 350–2.400 mm",
    glassSpec: "5, 6 mm · Glazing finish: Glazing bead",
    highlights: [
      "Menggunakan glazing bead untuk tampilan kaca mati yang bersih dan kokoh",
      "Performa beban angin menyesuaikan ketebalan kaca — konsultasikan dengan teknisi",
      "Mendukung dimensi tinggi hingga 2.400 mm untuk bukaan cahaya maksimal",
    ],
  },
];
