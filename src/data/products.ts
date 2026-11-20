export interface ProductSeries {
  name: string;
  slug: string;
  landingHref: string;
  category: number;
  image: string;
  tag: string;
  text: string;
  spec: string[];
  performance: string;
  note: string;
  usp: string[];
}

export const WHATSAPP_NUMBER = "6285757192511";

export const PRODUCT_CATEGORIES = [
  "Jendela & pintu",
  "Pintu interior",
  "Pintu utama",
] as const;

export const STANDARD_COLORS = [
  "Natural White",
  "Natural Silver",
  "Shine Gray",
  "Autumn Brown",
  "Dusk Gray",
  "Natural Black",
] as const;

export const STANDARD_COLOR_HEX = [
  "#fafaf7",
  "#c4c9c6",
  "#aaa08b",
  "#65503d",
  "#4b4a49",
  "#171817",
] as const;

export const PRODUCT_SERIES: ProductSeries[] = [
  {
    name: "GRANTS",
    slug: "grants",
    landingHref: "/produk/grants",
    category: 0,
    image: "series-grants.webp",
    tag: "Bukaan luas. Desain yang menyatu.",
    text: "Seri flagship pintu dan jendela panorama dengan bingkai tengah 35 mm, pilihan flat rail hingga 4,5 meter, serta corner sliding tanpa tiang sudut.",
    spec: [
      "Kedalaman kusen|101,6 mm · sliding 2 rel: 120 mm · 3 rel: 178 mm",
      "Tinggi ambang bawah|50 mm (opsi flat rail rata lantai)",
      "Kapasitas kaca|Hingga 31,5 mm (Single & Double Glass)",
    ],
    performance:
      "GRANTS (JIS): Angin 500–1.200 Pa · Air W-3 250 Pa · Udara A-4 · Suara T-1 25 dB | GRANTS PLUS (ASTM): Angin 2.000 Pa · Air 300 Pa",
    note: "Flat rail & corner sliding: kedap air W-2 (150 Pa). Tersedia 21 tipe konfigurasi Window, Door, Flat Rail & Corner Sliding.",
    usp: [
      "Pandangan lebih luas|Tinggi hingga 4,5 m dengan bingkai tengah 50% lebih ramping.",
      "Transisi lebih mulus|Pilihan flat rail rata lantai menghubungkan ruang dalam dan luar.",
      "Sudut tanpa batas|Corner sliding membuka sudut ruangan penuh tanpa tiang.",
    ],
  },
  {
    name: "ATIS",
    slug: "atis",
    landingHref: "/produk/atis",
    category: 0,
    image: "series-atis.webp",
    tag: "Detail minimal. Fungsi maksimal.",
    text: "Desain minimal dengan hardware tersembunyi dan pilihan bukaan untuk menghubungkan hunian dengan lingkungan.",
    spec: [
      "Kedalaman kusen|88 mm · 3 rel: 131,5 mm",
      "Tinggi ambang bawah|55 mm",
      "Ketebalan kaca|5, 6, 8–15,52 dan 22 mm; 24 / 26 mm untuk fixed window",
    ],
    performance:
      "ATIS (JIS): Angin S-2 1.200 Pa · Air W-3 250 Pa · Udara A-4 · Suara T-1 25 dB / T-2 30 dB* | ATIS PLUS (ASTM): Angin 2.000 Pa · Air 300 Pa",
    note: "*T-2: 30 dB untuk tipe jendela & kaca tertentu. Tersedia 17 tipe konfigurasi Window, Sliding Door & Swing Door.",
    usp: [
      "Hardware tersembunyi|Detail yang menjaga tampilan tetap bersih.",
      "Mullion ramping|Profil mullion 40 mm.",
      "Pilihan bukaan|Sesuaikan konfigurasi dengan kebutuhan ruang.",
    ],
  },
  {
    name: "WE 70",
    slug: "we-70",
    landingHref: "/produk/we-70",
    category: 0,
    image: "series-we70.webp",
    tag: "Kenyamanan untuk keseharian.",
    text: "Pilihan jendela dan pintu aluminium untuk kebutuhan hunian sehari-hari dengan ragam konfigurasi bukaan.",
    spec: [
      "Kedalaman kusen|72 mm · 3 rel: 104 mm",
      "Tinggi ambang bawah|35 mm",
      "Ketebalan kaca|5, 6, 8 mm",
    ],
    performance:
      "Angin 500–800 Pa · Air W-2: 150 Pa · Udara A-3: 10 m³/(h·m²) · Suara T-1: 25 dB",
    note: "Tersedia 26 tipe konfigurasi: Window, Sliding Door, Swing Door, Airflow Door, Louver, hingga Folding Door. Sumber: katalog 2025, hlm. 84.",
    usp: [
      "Beragam konfigurasi|Pilihan geser, ayun dan bukaan lainnya.",
      "Untuk keseharian|Pilihan untuk kebutuhan ruang hunian.",
      "Detail fungsional|Diskusikan sistem kaca dan bukaan yang tepat.",
    ],
  },
  {
    name: "VIEW / VIEW Plus",
    slug: "view-plus",
    landingHref: "/produk/view-plus",
    category: 0,
    image: "series-view.webp",
    tag: "Pandangan terbuka. Ruang nyaman.",
    text: "Seri VIEW menawarkan visibilitas ruang; VIEW Plus memiliki pilihan solusi kaca ganda.",
    spec: [
      "Kedalaman kusen|72 mm · 3 rel: 104 mm",
      "Kaca VIEW|5, 6, 8 mm",
      "Kaca VIEW Plus|28 mm (8 mm + rongga 12 mm + 8 mm)",
    ],
    performance: "Tekanan angin VIEW: 850 Pa · VIEW Plus: 1.600 Pa",
    note: "Tersedia 18 tipe konfigurasi: Window, Sliding Door, dan Swing Door. VIEW dan VIEW Plus memiliki spesifikasi berbeda. Sumber: katalog 2025, hlm. 95–97.",
    usp: [
      "Pandangan leluasa|Bukaan untuk menikmati lingkungan sekitar.",
      "Pilihan kaca ganda|Tersedia pada VIEW Plus.",
      "Detail penggunaan|Pilihan pengunci dan perangkat bukaan.",
    ],
  },
  {
    name: "IN16",
    slug: "in16",
    landingHref: "/produk/in16",
    category: 1,
    image: "series-in16.webp",
    tag: "Ruang terhubung dengan halus.",
    text: "Seri interior dengan garis minimal dan hardware tersembunyi untuk transisi ruang yang terasa terbuka.",
    spec: [
      "Hanging door|1–4 rel: 52 / 98 / 144 / 190 mm",
      "Swing door / fixed divider|Kedalaman kusen 50 mm",
      "Kaca|Tunggal 5, 6, 8, 10 mm; laminasi 3+3, 4+4 mm",
    ],
    performance: "Produk interior: data performa eksterior tidak dicantumkan.",
    note: "Tersedia 11 tipe konfigurasi interior: IN16 (Hanging, Swing, Fixed Divider), Hanging Door tanpa rel bawah, dan Partition Door. Sumber: katalog 2025, hlm. 111–124.",
    usp: [
      "Profil minimal|Detail visual ramping dan konsisten.",
      "Hardware tersembunyi|Tampilan bersih tanpa komponen menonjol.",
      "Tiga aplikasi|Hanging door, swing door dan fixed divider.",
    ],
  },
  {
    name: "GIESTA",
    slug: "giesta",
    landingHref: "/pintu-utama-giesta",
    category: 2,
    image: "series-giesta.webp",
    tag: "Kesan pertama yang berkarakter.",
    text: "Pintu utama dengan pilihan finishing pola kayu atau metalik, pegangan yang nyaman dan sistem penguncian.",
    spec: [
      "Kedalaman kusen|101,6 mm",
      "Ambang out-swing|50 mm",
      "Ambang in-swing|Luar 30 mm / dalam 14 mm",
    ],
    performance:
      "Angin S-2: 1.200 Pa · Air W-2: 150 Pa · Udara A-4: 2 m³/(h·m²) · Insulasi suara: tidak dicantumkan",
    note: "Tersedia 10 model utama (P01–P03, D01–D03, G01–G04) dengan simulasi warna online. Finishing mengikuti model pintu. Sumber: katalog 2025, hlm. 131–139.",
    usp: [
      "Karakter finishing|Pilihan pola kayu dan metalik menurut model.",
      "Sistem penguncian|Dua kunci mengontrol tiga kait.",
      "Pilihan desain|Sesuaikan tampilan pintu dengan fasad.",
    ],
  },
  {
    name: "WE PLUS",
    slug: "we-plus",
    landingHref: "/produk/we-plus",
    category: 0,
    image: "series-weplus.webp",
    tag: "Performa tinggi untuk bangunan bertingkat.",
    text: "Dirancang untuk proyek high-rise dan bukaan tinggi hingga 3 meter dengan ketahanan angin dan air berstandar ASTM.",
    spec: [
      "Kedalaman kusen|72 mm · 3 rel: 104 mm",
      "Tinggi ambang bawah|35 mm (window/swing) · 50 mm (sliding)",
      "Ketebalan kaca|5, 6, 8 mm · Tinggi bukaan hingga 3.000 mm",
    ],
    performance:
      "Angin ASTM E330: 1.600 Pa · Air ASTM E300: 240 Pa · Udara ASTM E283: 10,7 m³/(h·m²) · Suara JIS: 25 dB",
    note: "Tersedia 14 tipe konfigurasi: Window (Fixed, Awning & Casement Single/Multi Lock, Mixed), Sliding Door, dan Swing Door. Konsultasikan shop drawing dengan tim teknis.",
    usp: [
      "Siap untuk high-rise|Dirancang menahan tekanan angin pada bangunan tinggi.",
      "Bukaan hingga 3 meter|Proporsi tinggi untuk fasad modern dan komersial.",
      "Standar uji ASTM|Konsistensi mutu pre-engineered TOSTEM.",
    ],
  },
  {
    name: "WE 40",
    slug: "we-40",
    landingHref: "/produk/we-40",
    category: 0,
    image: "series-we40.webp",
    tag: "Kualitas standar TOSTEM untuk hunian sehari-hari.",
    text: "Seri jendela aluminium pre-engineered berprofil ramping 41 mm yang efisien untuk proyek perumahan, cluster, maupun renovasi skala luas.",
    spec: [
      "Kedalaman kusen|41 mm",
      "Tinggi ambang bawah|35 mm",
      "Ketebalan kaca|5, 6 mm",
    ],
    performance:
      "Angin 500 Pa (JIS A 1515) · Air W-1: 100 Pa (JIS A 1517) · Udara A-3: 10 m³/(h·m²) (JIS A 1516) · Suara: N/A",
    note: "Tersedia 5 tipe jendela: Single Sliding, Center Sliding FSSF, Casement, Awning, dan Fixed Window. Sumber: katalog 2025, hlm. 94–95.",
    usp: [
      "Presisi pabrikan|Diproduksi dengan sistem pre-engineered TOSTEM.",
      "Efisien untuk proyek|Ideal untuk pengembangan cluster atau renovasi menyeluruh.",
      "Finishing TEXGUARD|Pilihan warna anodized tahan lama dan mudah dirawat.",
    ],
  },
];

export const GIESTA_WOOD_COLORS = [
  "Turin Pine",
  "Crea Mocha",
  "Crea Rusk",
  "Teak",
] as const;

export const GIESTA_METALLIC_COLORS = [
  "Polish Silver",
  "Silky White",
  "Autumn Brown",
] as const;

export const GIESTA_COLOR_HEX = [
  "#51473d",
  "#805b37",
  "#bc925e",
  "#8a603c",
  "#d0d0ca",
  "#f3f2eb",
  "#65503d",
] as const;

export const GIESTA_SIM_GROUPS = [
  { name: "Minimalis", models: ["P01", "P02", "P03"] },
  { name: "Modern tradisional", models: ["D01", "D02", "D03", "D04"] },
  { name: "Dengan kaca", models: ["G01", "G02", "G03", "G04", "G05"] },
  { name: "Klasik", models: ["C01"] },
  { name: "Airflow", models: ["A01"] },
];

export const GIESTA_DETAIL_GROUPS = [
  { name: "Simpel dan minimalis", models: ["P01", "P02", "P03"] },
  { name: "Modern dengan sentuhan tradisional", models: ["D01", "D02", "D03", "D04"] },
  { name: "Desain dengan kaca", models: ["G01", "G02", "G03", "G04", "G05"] },
  { name: "Klasik", models: ["C01"] },
  { name: "Airflow", models: ["A01"] },
];
