export interface PortfolioPhoto {
  id: string;
  category: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

export interface PortfolioVideo {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  poster: string;
}

export interface PortfolioProject {
  id: string;
  tabTitle: string;
  tabMeta: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  note?: string;
  specs: { label: string; value: string }[];
  tabs: { id: string; label: string; count: number }[];
  photos: PortfolioPhoto[];
  videos: PortfolioVideo[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "kelapa-gading-meinrad",
    tabTitle: "Kelapa Gading House — Meinrad Project",
    tabMeta: "Proyek Selesai · Jakarta Utara · 12 Foto & 2 Video",
    eyebrow: "PORTFOLIO PROYEK NYATA · KELAPA GADING, JAKARTA UTARA",
    title: "Kelapa Gading House — Meinrad Project",
    subtitle:
      "Hunian 2 lantai modern tropis dengan bukaan jendela, pintu geser courtyard, dan jendela sudut bernuansa Natural Black.",
    specs: [
      { label: "Lokasi Proyek", value: "Kelapa Gading, Jakarta Utara" },
      { label: "Tipologi Bangunan", value: "Hunian 2 Lantai Modern Tropis" },
      { label: "Nuansa Profil", value: "Natural Black · Bukaan Penuh" },
      { label: "Dokumentasi", value: "12 Foto Terkurasi · 2 Video Tour" },
    ],
    tabs: [
      { id: "all", label: "Semua Area", count: 12 },
      { id: "eksterior", label: "Fasad & Pintu Masuk", count: 3 },
      { id: "courtyard", label: "Courtyard & Ruang Keluarga", count: 4 },
      { id: "interior-bukaan", label: "Kamar & Skylight", count: 5 },
    ],
    photos: [
      {
        id: "kg-01",
        category: "eksterior",
        title: "Fasad Depan — Tampak Twilight",
        caption:
          "Komposisi fasad lantai 2 dengan deretan jendela aluminium hitam tinggi yang selaras dengan carport dan pagar modern.",
        image: "/images/portfolio/kelapa-gading/01-fasad-depan.webp",
        alt: "Fasad depan Kelapa Gading House dengan jendela aluminium hitam lantai dua saat senja",
      },
      {
        id: "kg-02",
        category: "eksterior",
        title: "Perspektif Eksterior Hunian 2 Lantai",
        caption:
          "Proporsi bidang kaca tinggi pada lantai atas memaksimalkan pencahayaan alami tanpa mengorbankan privasi.",
        image: "/images/portfolio/kelapa-gading/02-fasad-perspektif.webp",
        alt: "Perspektif eksterior Kelapa Gading House dengan bukaan jendela lantai atas",
      },
      {
        id: "kg-03",
        category: "eksterior",
        title: "Teras Masuk & Pintu Utama Double Door",
        caption:
          "Area teras depan berkanopi dengan taman kering serta pintu utama double door bernuansa kayu gelap.",
        image: "/images/portfolio/kelapa-gading/03-teras-pintu-utama.webp",
        alt: "Teras depan dan pintu utama double door pada Kelapa Gading House",
      },
      {
        id: "kg-04",
        category: "courtyard",
        title: "Inner Courtyard 2 Lantai & Void Kaca",
        caption:
          "Dinding kaca vertikal 2 lantai menghubungkan area duduk lantai dasar hingga skylight atas untuk sirkulasi cahaya dan udara.",
        image: "/images/portfolio/kelapa-gading/04-courtyard-2-lantai.webp",
        alt: "Inner courtyard dua lantai Kelapa Gading House dengan deretan jendela dan pintu aluminium hitam",
      },
      {
        id: "kg-05",
        category: "courtyard",
        title: "Ruang Keluarga & Pintu Geser Courtyard",
        caption:
          "Pintu geser multi-panel berbingkai hitam membuka koneksi langsung antara ruang keluarga, ruang makan, dan taman dalam.",
        image: "/images/portfolio/kelapa-gading/05-ruang-keluarga-sliding.webp",
        alt: "Ruang keluarga terbuka menghadap inner courtyard melalui pintu geser aluminium hitam",
      },
      {
        id: "kg-06",
        category: "courtyard",
        title: "Living Area & Bukaan Sisi Taman",
        caption:
          "Bukaan kaca lebar menjaga ruang keluarga tetap terang di siang hari sekaligus terlindung dari tampias hujan tropis.",
        image: "/images/portfolio/kelapa-gading/06-living-courtyard.webp",
        alt: "Sudut ruang keluarga Kelapa Gading House dengan pintu geser kaca tinggi",
      },
      {
        id: "kg-07",
        category: "courtyard",
        title: "Dining Area Menghadap Taman Dalam",
        caption:
          "Integrasi ruang makan dan ruang keluarga dengan bingkai profil hitam ramping di sepanjang sisi inner courtyard.",
        image: "/images/portfolio/kelapa-gading/07-dining-sliding.webp",
        alt: "Area makan dan ruang keluarga menghadap bukaan kaca inner courtyard",
      },
      {
        id: "kg-08",
        category: "interior-bukaan",
        title: "Kamar Tidur dengan Corner Window 90°",
        caption:
          "Jendela sudut 90° berbingkai hitam menghadirkan sudut pandang terbuka dan pencahayaan dua arah di samping tempat tidur.",
        image: "/images/portfolio/kelapa-gading/08-kamar-corner-window.webp",
        alt: "Kamar tidur dengan jendela sudut 90 derajat aluminium hitam di Kelapa Gading House",
      },
      {
        id: "kg-09",
        category: "interior-bukaan",
        title: "Kamar Mandi Utama — Awning & Fixed Window",
        caption:
          "Kombinasi jendela jungkit (awning) dan kaca mati berprofil hitam di samping bathtub untuk ventilasi alami.",
        image: "/images/portfolio/kelapa-gading/09-kamar-mandi-awning.webp",
        alt: "Kamar mandi utama dengan jendela awning dan fixed window aluminium hitam",
      },
      {
        id: "kg-10",
        category: "interior-bukaan",
        title: "Kamar Tidur Utama — Deretan Jendela Tinggi",
        caption:
          "Deretan jendela dari lantai ke plafon di sisi kamar tidur utama memberi kesan ruang yang lega dan tenang.",
        image: "/images/portfolio/kelapa-gading/10-kamar-utama-jendela.webp",
        alt: "Kamar tidur utama dengan deretan jendela tinggi lantai ke plafon",
      },
      {
        id: "kg-11",
        category: "interior-bukaan",
        title: "Ruang Bermain Anak — Bukaan Lebar Terang",
        caption:
          "Bukaan jendela lebar lantai 2 menghadirkan cahaya alami melimpah dan sirkulasi nyaman untuk aktivitas anak.",
        image: "/images/portfolio/kelapa-gading/11-ruang-anak-jendela.webp",
        alt: "Ruang bermain anak dengan bukaan jendela kaca lebar",
      },
      {
        id: "kg-12",
        category: "interior-bukaan",
        title: "Koridor Lantai 2 & Skylight Tangga",
        caption:
          "Selasar lantai atas dengan pencahayaan skylight alami dan partisi kaca berbingkai hitam yang rapi.",
        image: "/images/portfolio/kelapa-gading/12-koridor-skylight.webp",
        alt: "Koridor lantai dua dan tangga dengan skylight di Kelapa Gading House",
      },
    ],
    videos: [
      {
        id: "kg-video-1",
        title: "Video Tour 1 — Kelapa Gading House",
        subtitle:
          "Draft 1 · Tinjauan menyeluruh fasad, ruang keluarga & courtyard",
        src: "/videos/portfolio/kelapa-gading-draft-1.mp4",
        poster: "/images/portfolio/kelapa-gading/01-fasad-depan.webp",
      },
      {
        id: "kg-video-2",
        title: "Video Tour 2 — Kelapa Gading House",
        subtitle:
          "Draft 2 · Eksplorasi detail ruang, bukaan jendela & pencahayaan",
        src: "/videos/portfolio/kelapa-gading-draft-2.mp4",
        poster: "/images/portfolio/kelapa-gading/04-courtyard-2-lantai.webp",
      },
    ],
  },
  {
    id: "semarang-3-storey",
    tabTitle: "Semarang 3-Storey House — Progres Instalasi",
    tabMeta: "Tahap Pemasangan · Semarang · 6 Foto Lapangan",
    eyebrow: "PROGRES INSTALASI LAPANGAN · SEMARANG, JAWA TENGAH",
    title: "Semarang 3-Storey House — Progres Pemasangan",
    subtitle:
      "Dokumentasi progres pemasangan jendela dan pintu geser TOSTEM pada hunian bertingkat 3 lantai, lengkap dengan pengiriman unit pabrikan asli di lokasi proyek.",
    note: "Foto diambil pada tahap survei & instalasi lapangan — plastik pelindung profil dan tanda pengaman kaca pabrik masih terpasang.",
    specs: [
      { label: "Lokasi Proyek", value: "Semarang, Jawa Tengah" },
      { label: "Tipologi Bangunan", value: "Hunian Bertingkat 3 Lantai" },
      { label: "Status Proyek", value: "Tahap Pemasangan & Inspeksi" },
      { label: "Dokumentasi", value: "6 Foto Progres & Material TOSTEM" },
    ],
    tabs: [
      { id: "all", label: "Semua Foto", count: 6 },
      { id: "eksterior", label: "Fasad 3 Lantai", count: 3 },
      { id: "instalasi", label: "Bukaan & Material TOSTEM", count: 3 },
    ],
    photos: [
      {
        id: "smg-01",
        category: "eksterior",
        title: "Fasad 3 Lantai dengan Bukaan Kaca Luas",
        caption:
          "Tampak depan bangunan bertingkat 3 lantai dengan jendela dan balkon kaca aluminium yang sudah terpasang.",
        image: "/images/portfolio/semarang/01-fasad-3-lantai.webp",
        alt: "Fasad hunian 3 lantai di Semarang dengan bukaan jendela dan pintu aluminium TOSTEM",
      },
      {
        id: "smg-02",
        category: "eksterior",
        title: "Tampak Depan Balkon & Pintu Bertingkat",
        caption:
          "Proporsi bukaan pintu balkon dan jendela di tiap lantai dirancang selaras dengan garis fasad modern.",
        image: "/images/portfolio/semarang/02-fasad-balkon.webp",
        alt: "Tampak depan balkon dan pintu bertingkat hunian 3 lantai di Semarang",
      },
      {
        id: "smg-03",
        category: "eksterior",
        title: "Perspektif Samping Bangunan Bertingkat",
        caption:
          "Penerapan jendela aluminium bertingkat pada sisi bangunan yang menghadap area terbuka perbukitan.",
        image: "/images/portfolio/semarang/03-perspektif-samping.webp",
        alt: "Perspektif samping bangunan 3 lantai di Semarang saat tahap pemasangan",
      },
      {
        id: "smg-04",
        category: "instalasi",
        title: "Pintu Geser Multi-Panel & Jendela Atas",
        caption:
          "Pemasangan pintu geser bentang lebar dengan kombinasi transom kaca atas untuk pencahayaan maksimal.",
        image: "/images/portfolio/semarang/04-sliding-door-lebar.webp",
        alt: "Pemasangan pintu geser multi-panel dan jendela atas pada proyek Semarang",
      },
      {
        id: "smg-05",
        category: "instalasi",
        title: "Deretan Jendela Lebar 2 Lantai",
        caption:
          "Susunan jendela geser dan kaca mati berjajar pada area void bertingkat dengan pelindung kaca selama konstruksi.",
        image: "/images/portfolio/semarang/05-jendela-2-lantai.webp",
        alt: "Deretan jendela lebar 2 lantai terpasang pada tahap konstruksi proyek Semarang",
      },
      {
        id: "smg-06",
        category: "instalasi",
        title: "Pengiriman Kemasan Resmi Pabrikan TOSTEM",
        caption:
          "Unit pre-engineered dan komponen asli TOSTEM tiba dalam kemasan dus pabrikan berlabel resmi di lokasi proyek.",
        image: "/images/portfolio/semarang/06-kemasan-resmi-tostem.webp",
        alt: "Tumpukan dus kemasan resmi komponen TOSTEM di lokasi proyek Semarang",
      },
    ],
    videos: [],
  },
];

export const KELAPA_GADING_PORTFOLIO = PORTFOLIO_PROJECTS[0];

export const DEDICATED_PRODUCT_PAGES = [
  {
    href: "/produk/grants",
    eyebrow: "SERI FLAGSHIP · 21 TIPE WINDOW & DOOR",
    title: "TOSTEM GRANTS Series",
    description:
      "Pintu & jendela panorama flagship (GRANTS & GRANTS PLUS) dengan opsi flat rail 4,5 m dan corner sliding.",
  },
  {
    href: "/jendela-kedap-suara",
    eyebrow: "SOLUSI BISING & HUJAN TROPIS",
    title: "Jendela Kedap Suara (ATIS · VIEW Plus · WE 70)",
    description:
      "Perbandingan sistem jendela aluminium Jepang tahan angin hingga 1.600 Pa dan opsi kaca ganda.",
  },
  {
    href: "/pintu-utama-giesta",
    eyebrow: "PINTU MASUK · SIMULASI WARNA",
    title: "Pintu Utama GIESTA",
    description:
      "Pintu depan motif kayu & metalik tahan cuaca tropis dengan simulator warna interaktif.",
  },
] as const;

export const GOOGLE_MAPS_STUDIO_URL =
  "https://www.google.com/maps/search/?api=1&query=TOSTEM+Studio+Alam+Sutera+Ruko+The+Element+C15+25BC";
