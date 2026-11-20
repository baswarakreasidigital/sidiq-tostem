export interface In16SubProduct {
  id: string;
  category: "in16" | "hanging" | "partition";
  name: string;
  shortName: string;
  image: string;
  summary: string;
  frameDepth: string;
  sizeRange: string;
  glassSpec: string;
  highlights: string[];
}

export const IN16_USP_CARDS = [
  {
    index: "01",
    title: "Profil Minimal 16 mm & Flush Glazing",
    description:
      "Bingkai, daun pintu, dan handle seragam setipis 16 mm tanpa sekrup atau tutup terlihat, dengan kaca rata profil (flush glazing channel) yang elegan.",
  },
  {
    index: "02",
    title: "Hardware Tersembunyi (Concealed)",
    description:
      "Seluruh komponen mekanis — concealed suspension roller, concealed hinges, dan concealed panel catch — tersembunyi rapi di dalam profil.",
  },
  {
    index: "03",
    title: "Selaras dengan Eksterior TOSTEM",
    description:
      "Menghadirkan pilihan warna dan tekstur Anodized TEXGUARD yang menyatu dengan jendela & pintu eksterior TOSTEM untuk kesatuan arsitektur rumah.",
  },
] as const;

export const IN16_COMPARISON_ROWS = [
  {
    system: "IN16 Hanging Door (1–4 Rel)",
    frame: "52 / 98 / 144 / 190 mm",
    sill: "Tanpa rel bawah (floor-free)",
    glass: "Tunggal 5, 6, 8, 10 mm · Laminasi 3+3, 4+4 mm",
  },
  {
    system: "IN16 Swing Door & Fixed Divider",
    frame: "50 mm (profil & handle 16 mm)",
    sill: "Tanpa ambang bawah (non-sill)",
    glass: "Tunggal 5, 6, 8, 10 mm · Laminasi 3+3, 4+4 mm",
  },
  {
    system: "Interior Hanging Door (On-Wall / In-Wall)",
    frame: "Top 47,2 mm · Jamb 49,1 mm",
    sill: "Tanpa rel bawah (opsi pocket door)",
    glass: "5, 6, 8 mm",
  },
  {
    system: "Interior Partition Door (2–6 Panel)",
    frame: "72 mm (2 rel) · 104 mm (3 rel)",
    sill: "Rel bawah rendah 20 mm",
    glass: "5, 6, 8 mm",
  },
] as const;

export const IN16_SUBPRODUCT_TABS = [
  { id: "in16", label: "IN16 Innovations", count: 3 },
  { id: "hanging", label: "Hanging Door", count: 4 },
  { id: "partition", label: "Partition Door", count: 4 },
] as const;

export const IN16_SUBPRODUCTS: In16SubProduct[] = [
  // === IN16 INNOVATIONS (3 · IDs 131–133) ===
  {
    id: "in16-hanging-door",
    category: "in16",
    name: "IN16 Hanging Door",
    shortName: "IN16 Hanging Door",
    image: "/images/in16/in16-hanging-door.webp",
    summary:
      "Pintu gantung interior tanpa rel bawah dengan profil vertikal super ramping 16 mm, roller gantung tersembunyi, dan gerakan geser yang halus serta senyap.",
    frameDepth: "1 Rel: 52 mm · 2 Rel: 98 mm · 3 Rel: 144 mm · 4 Rel: 190 mm",
    sizeRange: "Mendukung 1 hingga 4 rel (termasuk sistem teleskopik in-wall)",
    glassSpec: "Kaca tunggal 5, 6, 8, 10 mm · Laminated glass 3+3, 4+4 mm",
    highlights: [
      "Tanpa rel bawah sehingga lantai antar ruang tetap rata dan bebas hambatan",
      "Concealed suspension roller & flush glazing channel tanpa sekrup terlihat",
      "Profil dan handle 16 mm yang serasi dengan seluruh ekosistem IN16",
    ],
  },
  {
    id: "in16-swing-door",
    category: "in16",
    name: "IN16 Swing Door",
    shortName: "IN16 Swing Door",
    image: "/images/in16/in16-swing-door.webp",
    summary:
      "Pintu ayun interior berdesain minimal dengan bingkai, daun, dan handle serba 16 mm serta engsel tersembunyi untuk kesan mewah yang bersih.",
    frameDepth: "50 mm · Tanpa ambang bawah (non-sill)",
    sizeRange: "Ideal untuk ruang kerja, ruang makan, walk-in closet & kamar tidur",
    glassSpec: "Kaca tunggal 5, 6, 8, 10 mm · Laminated glass 3+3, 4+4 mm",
    highlights: [
      "Engsel tersembunyi (concealed hinges) menjaga garis pintu tetap mulus",
      "Bingkai, panel, dan floating handle konsisten selebar 16 mm",
      "Dapat dikombinasikan sejajar dengan IN16 Fixed Divider",
    ],
  },
  {
    id: "in16-fixed-divider",
    category: "in16",
    name: "IN16 Fixed Divider",
    shortName: "IN16 Fixed Divider",
    image: "/images/in16/in16-fixed-divider.webp",
    summary:
      "Partisi kaca tetap berprofil 16 mm yang membagi zona ruang secara halus tanpa menghalangi cahaya alami dan keterbukaan visual interior.",
    frameDepth: "50 mm · Profil visual 16 mm",
    sizeRange: "Fleksibel untuk sekat ruang tamu, ruang kerja, studio & koridor",
    glassSpec: "Kaca tunggal 5, 6, 8, 10 mm · Laminated glass 3+3, 4+4 mm",
    highlights: [
      "Flush glazing channel mempertemukan kaca dan bingkai secara rata",
      "Tanpa sekrup atau penutup baut yang mengganggu estetika ruang",
      "Menyatu mulus dengan IN16 Swing Door maupun IN16 Hanging Door",
    ],
  },

  // === HANGING DOOR (4 · IDs 89, 90, 93, 94) ===
  {
    id: "hd-onwall-2p1t",
    category: "hanging",
    name: "Hanging Door — On-Wall 2 Panels on 1 Track",
    shortName: "On-Wall 2P1T",
    image: "/images/in16/hd-onwall-2p1t.webp",
    summary:
      "Pintu gantung 2 panel di atas 1 rel pemasangan di permukaan dinding (on-wall) tanpa rel lantai untuk bukaan ruang interior yang lega.",
    frameDepth: "Top 47,2 mm · Jamb 49,1 mm · Tanpa rel bawah",
    sizeRange: "Pemasangan on-wall praktis tanpa pembobokan dinding",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Tersedia opsi kunci (lock) dan mekanisme soft close",
      "Dapat dipilih dengan atau tanpa ending jamb",
      "Tanpa rel bawah menjaga keamanan langkah dan kemudahan pembersihan lantai",
    ],
  },
  {
    id: "hd-inwall-1p1t",
    category: "hanging",
    name: "Hanging Door — In-Wall 1 Panel on 1 Track",
    shortName: "In-Wall 1P1T",
    image: "/images/in16/hd-inwall-1p1t.webp",
    summary:
      "Pintu gantung tunggal 1 rel tipe in-wall yang juga dapat dikonfigurasi sebagai pocket door (masuk ke dalam dinding) untuk efisiensi ruang maksimal.",
    frameDepth: "Top 47,2 mm · Jamb 49,1 mm · Tanpa rel bawah",
    sizeRange: "Dapat dikonfigurasi sebagai pocket door · Pilih arah L/R",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Mendukung konfigurasi pocket door agar daun pintu tersembunyi saat dibuka",
      "Pilihan arah buka kiri/kanan (L/R) serta opsi with/without ending jamb",
      "Tersedia opsi kunci (lock) dan soft close",
    ],
  },
  {
    id: "hd-onwall-1p1t",
    category: "hanging",
    name: "Hanging Door — On-Wall 1 Panel on 1 Track",
    shortName: "On-Wall 1P1T",
    image: "/images/in16/hd-onwall-1p1t.webp",
    summary:
      "Pintu gantung tunggal 1 rel pemasangan menempel dinding (on-wall) yang ringkas untuk renovasi cepat maupun sekat ruang privat.",
    frameDepth: "Top 47,2 mm · Jamb 49,1 mm · Tanpa rel bawah",
    sizeRange: "Pemasangan on-wall ringkas · Pilih arah geser L/R",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Pilihan arah geser kiri atau kanan (L/R)",
      "Tersedia opsi kunci (lock), soft close, dan with/without ending jamb",
      "Cocok untuk dapur bersih, pantry, ruang kerja, maupun kamar mandi kering",
    ],
  },
  {
    id: "hd-2p2t",
    category: "hanging",
    name: "Hanging Door — 2 Panels on 2 Tracks",
    shortName: "Hanging 2P2T",
    image: "/images/in16/hd-2p2t-a.webp",
    summary:
      "Pintu gantung 2 panel di atas 2 rel tanpa rel bawah dengan konfigurasi single slide (Fix–Slide atau Slide–Fix) untuk sekat ruang fleksibel.",
    frameDepth: "Top 47,2 mm · Jamb 49,1 mm · Tanpa rel bawah",
    sizeRange: "Single slide L/R · Pilih konfigurasi Fix–Slide atau Slide–Fix",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Tersedia konfigurasi single slide L/R (Fix–Slide atau Slide–Fix)",
      "Mendukung opsi kunci (lock) dan soft close untuk penutupan lembut",
      "Tanpa rel bawah sehingga lantai tetap menyatu antar ruangan",
    ],
  },

  // === PARTITION DOOR (4 · IDs 95–98) ===
  {
    id: "pd-2p2t",
    category: "partition",
    name: "Partition Door — 2 Panels on 2 Tracks",
    shortName: "Partition 2P2T",
    image: "/images/in16/hd-2p2t-b.webp",
    summary:
      "Pintu partisi geser 2 panel di atas 2 rel dengan rel bawah rendah 20 mm untuk stabilitas gerak tinggi pada pembatas ruang interior.",
    frameDepth: "72 mm · Tinggi rel bawah 20 mm",
    sizeRange: "Ideal untuk pembatas ruang keluarga, ruang makan, atau ruang rapat",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Rel bawah rendah 20 mm menjaga daun pintu stabil pada bentang lebar",
      "Desain khusus interior (tanpa peringkat uji cuaca eksterior)",
      "Tersedia dalam pilihan warna Anodized TEXGUARD yang serasi",
    ],
  },
  {
    id: "pd-4p2t",
    category: "partition",
    name: "Partition Door — 4 Panels on 2 Tracks",
    shortName: "Partition 4P2T",
    image: "/images/in16/hd-4p2t.webp",
    summary:
      "Pintu partisi geser 4 panel bukaan tengah simetris di atas 2 rel untuk memisahkan atau menyatukan dua ruangan besar secara instan.",
    frameDepth: "72 mm · Tinggi rel bawah 20 mm",
    sizeRange: "Cocok untuk sekat ruang tamu–ruang makan maupun ruang serbaguna",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Dua daun tengah membuka simetris menciptakan bukaan sentral lebar",
      "Kedalaman kusen 72 mm dengan rel bawah rendah 20 mm",
      "Dirancang khusus aplikasi interior untuk kestabilan dan ketahanan jangka panjang",
    ],
  },
  {
    id: "pd-3p3t",
    category: "partition",
    name: "Partition Door — 3 Panels on 3 Tracks",
    shortName: "Partition 3P3T",
    image: "/images/in16/hd-3p3t.webp",
    summary:
      "Pintu partisi geser 3 panel di atas 3 rel (104 mm) yang menumpuk rapi ke satu sisi untuk membuka hingga 2/3 lebar ruangan.",
    frameDepth: "104 mm (3 tracks) · Tinggi rel bawah 20 mm",
    sizeRange: "Membuka hingga 2/3 bidang bukaan untuk konektivitas ruang maksimal",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Tiga rel terpisah memungkinkan ketiga daun bertumpuk sejajar",
      "Rel bawah 20 mm menopang bobot kaca besar secara stabil",
      "Ideal untuk konsep open-plan living yang sewaktu-waktu butuh privasi AC",
    ],
  },
  {
    id: "pd-6p3t",
    category: "partition",
    name: "Partition Door — 6 Panels on 3 Tracks",
    shortName: "Partition 6P3T",
    image: "/images/in16/hd-6p3t.webp",
    summary:
      "Konfigurasi partisi geser terlebar: 6 panel di atas 3 rel (104 mm) yang membuka simetris dari tengah untuk bentang interior ekstra lebar.",
    frameDepth: "104 mm (3 tracks) · Tinggi rel bawah 20 mm",
    sizeRange: "Solusi partisi untuk bentang ruang keluarga utama, hall & ruang rapat besar",
    glassSpec: "5, 6, 8 mm",
    highlights: [
      "Empat daun dapat digeser bertumpuk ke sisi kiri dan kanan secara simetris",
      "Menjaga efisiensi pendinginan AC saat ditutup dan keterbukaan penuh saat dibuka",
      "Profil presisi 104 mm dengan rel bawah rendah 20 mm",
    ],
  },
];
