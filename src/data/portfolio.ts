export interface LocalCaseStudy {
  id: string;
  area: string;
  title: string;
  series: string;
  image: string;
  alt: string;
  summary: string;
  highlights: string[];
  href: string;
}

export const LOCAL_CASE_STUDIES: LocalCaseStudy[] = [
  {
    id: "alam-sutera-grants",
    area: "Alam Sutera · Tangerang",
    title: "Bukaan Panorama Ruang Keluarga Menghadap Taman",
    series: "GRANTS Sliding Door",
    image: "/images/KV_Grants-02.webp",
    alt: "Aplikasi pintu geser bukaan lebar TOSTEM GRANTS untuk hunian modern",
    summary:
      "Solusi pintu geser bentang lebar dengan pilihan flat rail untuk menyatukan ruang keluarga dan area taman tanpa halangan visual.",
    highlights: ["Angin hingga 1.200 Pa", "Air W-3 (250 Pa)", "Opsi Flat Rail"],
    href: "/grants-sliding-door",
  },
  {
    id: "gading-serpong-atis",
    area: "Gading Serpong · Tangerang",
    title: "Jendela Kedap Suara & Anti Bocor untuk Kamar Utama",
    series: "ATIS & VIEW Plus",
    image: "/images/series-atis.webp",
    alt: "Aplikasi jendela aluminium kedap suara TOSTEM ATIS dengan profil ramping",
    summary:
      "Mengurangi kebisingan lalu lintas cluster dan rembesan hujan tropis melalui sistem kerapatan udara A-4 serta opsi kaca ganda.",
    highlights: ["Kerapatan Udara A-4", "Redam Suara T-1 / T-2", "Hardware Tersembunyi"],
    href: "/jendela-kedap-suara",
  },
  {
    id: "pik-giesta",
    area: "PIK & Jakarta Barat",
    title: "Pintu Utama Motif Kayu Tahan Cuaca Pesisir",
    series: "GIESTA Entrance Door",
    image: "/images/series-giesta.webp",
    alt: "Aplikasi pintu utama aluminium motif kayu TOSTEM GIESTA",
    summary:
      "Tampilan kayu hangat dengan rangka aluminium pre-engineered Jepang yang anti rayap, tahan lembap, dan dilengkapi sistem 2 kunci 3 kait.",
    highlights: ["2 Kunci · 3 Kait", "Finishing Kayu & Metalik", "Angin S-2 (1.200 Pa)"],
    href: "/pintu-utama-giesta",
  },
  {
    id: "puri-pondok-indah-we70",
    area: "Puri Indah & Pondok Indah",
    title: "Renovasi Bukaan Menyeluruh Hunian 2 Lantai",
    series: "WE 70 & IN16 Interior",
    image: "/images/home-2.webp",
    alt: "Konfigurasi jendela dan pintu aluminium TOSTEM untuk renovasi hunian",
    summary:
      "Kombinasi jendela eksterior berkinerja stabil untuk aktivitas harian dengan partisi kaca interior ramping IN16.",
    highlights: ["Ragam Konfigurasi Bukaan", "Profil Interior Minimal", "Survei Jabodetabek"],
    href: "/jendela-kedap-suara",
  },
];

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
