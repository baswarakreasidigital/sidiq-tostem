export interface GrantsFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface GrantsSubProduct {
  id: string;
  category: "window" | "door" | "flat-corner";
  name: string;
  shortName: string;
  image: string;
  summary: string;
  frameDepth: string;
  sizeRange: string;
  glassSpec: string;
  highlights: string[];
}

export const GRANTS_FEATURES: GrantsFeature[] = [
  {
    id: "slim-stile",
    title: "Bingkai Tengah 35 mm (50% Lebih Ramping)",
    description:
      "Desain overlapping meeting stile menyatukan pertemuan daun pintu sehingga gangguan visual berkurang setengahnya dibanding pintu sliding konvensional.",
    image: "/images/grants/feature-2.webp",
    alt: "Detail pertemuan bingkai tengah ramping 35 mm TOSTEM GRANTS",
  },
  {
    id: "l-fit-handle",
    title: "Handle L-Fit Pemenang 4 Penghargaan Desain",
    description:
      "Handle eksklusif ergonomis peraih German Design Award 2023, iF Design Award 2022, Red Dot 2022, dan Good Design Award Best 100.",
    image: "/images/grants/feature-3.webp",
    alt: "Detail handle L-Fit ergonomis pada seri TOSTEM GRANTS",
  },
  {
    id: "double-drainage",
    title: "Struktur Rel Ganda & Kaca hingga 31,5 mm",
    description:
      "Profil multi-chamber berpresisi tinggi dengan sistem drainase terintegrasi yang mendukung kaca tunggal maupun double glass hingga 31,5 mm.",
    image: "/images/grants/feature-4.webp",
    alt: "Potongan struktur profil aluminium dan drainase TOSTEM GRANTS",
  },
  {
    id: "symmetrical-frame",
    title: "Sambungan Kusen Presisi & Simetris",
    description:
      "Garis bingkai yang seragam antara jendela awning, casement, dan fixed window menghadirkan keseimbangan arsitektural tanpa sekrup terlihat.",
    image: "/images/grants/feature-1.webp",
    alt: "Detail sambungan sudut kusen simetris TOSTEM GRANTS",
  },
  {
    id: "streamlined-transom",
    title: "Profil Transom & Kombinasi Menyatu",
    description:
      "Memungkinkan penggabungan berbagai modul jendela dan pintu secara presisi untuk bukaan fasad skala besar.",
    image: "/images/grants/feature-5.webp",
    alt: "Detail garis profil transom rata pada jendela kombinasi TOSTEM GRANTS",
  },
  {
    id: "ventilation-slot",
    title: "Opsi Ventilasi & Kasa Serangga Terintegrasi",
    description:
      "Tersedia opsi kasa nyamuk tersembunyi di dalam rel bingkai (hingga tinggi 4,5 m untuk sliding door & 3,5 m untuk jendela) yang mudah dilepas untuk dibersihkan.",
    image: "/images/grants/feature-6.webp",
    alt: "Detail slot ventilasi terintegrasi pada profil bingkai TOSTEM GRANTS",
  },
];

export const GRANTS_PERFORMANCE_ROWS = [
  {
    variant: "GRANTS PLUS (Mid to High-Rise · ASTM)",
    wind: "2.000 Pa (ASTM E330)",
    water: "300 Pa (ASTM E331)",
    air: "10,7 m³/h·m² (ASTM E283)",
    sound: "T-1: 25 dB (JIS A 1416)",
  },
  {
    variant: "GRANTS General (Low-Rise · JIS)",
    wind: "500–1.200 Pa (JIS A 1515)",
    water: "W-3: 250 Pa (JIS A 1517)",
    air: "A-4: 2 m³/h·m² (JIS A 1516)",
    sound: "T-1: 25 dB (JIS)",
  },
  {
    variant: "GRANTS Flat Rail Sliding (Low-Rise · JIS)",
    wind: "500–1.200 Pa (JIS A 1515)",
    water: "W-2: 150 Pa (JIS A 1517)",
    air: "A-4: 2 m³/h·m² (JIS A 1516)",
    sound: "T-1: 25 dB (JIS A 1416)",
  },
  {
    variant: "GRANTS Corner Sliding (Low-Rise · JIS)",
    wind: "500–1.200 Pa (JIS A 1515)",
    water: "W-2: 150 Pa (JIS A 1517)",
    air: "A-4: 2 m³/h·m² (JIS A 1516)",
    sound: "T-1: 25 dB (JIS A 1416)",
  },
] as const;

export const GRANTS_SUBPRODUCT_TABS = [
  { id: "window", label: "GRANTS Window", count: 10 },
  { id: "door", label: "GRANTS Door", count: 7 },
  { id: "flat-corner", label: "Flat Rail & Corner Sliding", count: 4 },
] as const;

export const GRANTS_SUBPRODUCTS: GrantsSubProduct[] = [
  // === GRANTS WINDOW (10) ===
  {
    id: "win-2p2t",
    category: "window",
    name: "Sliding Window — 2 Panels on 2 Tracks",
    shortName: "Sliding 2P2T",
    image: "/images/grants/win-2p2t.webp",
    summary:
      "Jendela geser 2 daun di atas 2 rel dengan bingkai ramping, tersedia konfigurasi geser kiri/kanan maupun single slider (FS/SF).",
    frameDepth: "120 mm (2 tracks sliding)",
    sizeRange: "Lebar 900–3.000 mm · Tinggi 600–2.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain hingga 31,5 mm (sealant)",
    highlights: [
      "Tipe panel A–E sesuai beban angin",
      "Opsi L-Fit diecast handle & pleated insect screen",
      "Tersedia GRANTS (JIS) & GRANTS PLUS (ASTM)",
    ],
  },
  {
    id: "win-4p2t",
    category: "window",
    name: "Sliding Window — 4 Panels on 2 Tracks",
    shortName: "Sliding 4P2T",
    image: "/images/grants/win-4p2t.webp",
    summary:
      "Jendela geser 4 daun di atas 2 rel untuk bentang bukaan lebar hingga 6 meter dengan konfigurasi SSSS atau FSSF.",
    frameDepth: "120 mm (2 tracks sliding)",
    sizeRange: "Lebar 1.750–6.000 mm · Tinggi 600–2.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain hingga 31,5 mm (sealant)",
    highlights: [
      "Konfigurasi SSSS atau FSSF",
      "Bingkai pertemuan tengah 50% lebih ramping",
      "Opsi kasa serangga lipat (pleated screen)",
    ],
  },
  {
    id: "win-3p2t-sfs",
    category: "window",
    name: "Sliding Window — 3 Panels on 2 Tracks (SFS)",
    shortName: "Sliding 3P2T SFS",
    image: "/images/grants/win-3p2t-sfs.webp",
    summary:
      "Jendela geser 3 panel dengan panel tengah mati (Slide-Fixed-Slide) di atas 2 rel untuk sirkulasi udara dua sisi sekaligus pandangan tengah luas.",
    frameDepth: "120 mm (2 tracks sliding)",
    sizeRange: "Lebar 1.730–3.000 mm · Tinggi 600–2.550 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain (sealant)",
    highlights: [
      "Panel tengah fixed panorama (SFS)",
      "Opsi L-Fit diecast handle",
      "Tipe panel A–E sesuai kebutuhan lokasi",
    ],
  },
  {
    id: "win-fixed",
    category: "window",
    name: "Fixed Window",
    shortName: "Fixed Window",
    image: "/images/grants/win-fixed.webp",
    summary:
      "Jendela kaca mati berbingkai simetris untuk memaksimalkan pencahayaan alami dan pandangan panorama pada dinding fasad.",
    frameDepth: "101,6 mm",
    sizeRange: "Lebar 350–4.500 mm · Tinggi 350–4.500 mm",
    glassSpec: "8–13,52 mm & 25–31,52 mm (glazing channel / bead)",
    highlights: [
      "Mendukung kaca double glass hingga 31,5 mm",
      "Profil simetris seragam dengan awning & casement",
      "Ukuran ekstra besar dapat dikonsultasikan dengan tim teknis",
    ],
  },
  {
    id: "win-corner-fixed",
    category: "window",
    name: "Corner Fixed Window",
    shortName: "Corner Fixed",
    image: "/images/grants/win-corner-fixed.webp",
    summary:
      "Jendela kaca mati sudut 90° untuk sudut bangunan modern, tersedia pilihan sudut menghadap ke dalam (inward) maupun keluar (outward).",
    frameDepth: "101,6 mm",
    sizeRange: "Lebar 350–2.500 mm per sisi · Tinggi 350–3.500 mm",
    glassSpec: "Hanya tersedia untuk single glass (glazing finish: sealant)",
    highlights: [
      "Tersedia sudut inward & outward",
      "Pandangan sudut luas tanpa rangka besar",
      "Tersedia pada GRANTS (JIS) & GRANTS PLUS (ASTM)",
    ],
  },
  {
    id: "win-awning",
    category: "window",
    name: "Awning Window",
    shortName: "Awning Window",
    image: "/images/grants/win-awning.webp",
    summary:
      "Jendela jungkit keluar dengan desain bingkai simetris yang menjaga sirkulasi udara tetap masuk sambil melindungi dari tampias hujan ringan.",
    frameDepth: "101,6 mm",
    sizeRange: "Lebar 500–1.500 mm · Tinggi 700–3.000 mm",
    glassSpec: "8–13,52 mm & 28–31,52 mm (glazing channel)",
    highlights: [
      "Dilengkapi handle L-Fit aluminium diecast",
      "Tersedia kasa nyamuk terintegrasi (pleated screen)",
      "Mendukung kaca tebal hingga 31,52 mm",
    ],
  },
  {
    id: "win-casement-friction",
    category: "window",
    name: "Casement Window — With Friction Stay",
    shortName: "Casement Friction Stay",
    image: "/images/grants/win-casement-friction.webp",
    summary:
      "Jendela buka samping dengan mekanisme friction stay untuk bukaan stabil, mudah dibersihkan, dan posisi buka yang dapat ditahan sesuai kebutuhan.",
    frameDepth: "101,6 mm",
    sizeRange: "Lebar 500–1.000 mm · Tinggi 700–2.000 mm",
    glassSpec: "8–13,52 mm & 28–31,52 mm (glazing channel)",
    highlights: [
      "Pilihan arah buka kiri (L) atau kanan (R)",
      "Handle L-Fit & opsi pleated insect screen",
      "Kerapatan udara tinggi kelas A-4",
    ],
  },
  {
    id: "win-casement-hinge",
    category: "window",
    name: "Casement Window — With Hinge or Pivot",
    shortName: "Casement Hinge / Pivot",
    image: "/images/grants/win-casement-hinge.webp",
    summary:
      "Jendela casement dengan engsel (hinge) berkekuatan tinggi untuk dimensi jendela vertikal yang lebih tinggi hingga 3–4 meter.",
    frameDepth: "101,6 mm",
    sizeRange: "Lebar 500–1.000 mm · Tinggi 700–3.000 mm (hingga 4.000 mm GRANTS)",
    glassSpec: "8–13,52 mm & 28–31,52 mm (glazing channel)",
    highlights: [
      "Mendukung tinggi jendela hingga 3–4 meter",
      "Pilihan arah buka kiri (L) atau kanan (R)",
      "Opsi kasa serangga terintegrasi hingga tinggi 3,5 m",
    ],
  },
  {
    id: "win-insect-screen",
    category: "window",
    name: "Insect Screen for Awning & Casement",
    shortName: "Insect Screen Window",
    image: "/images/grants/win-insect-screen.webp",
    summary:
      "Sistem kasa nyamuk lipat (pleated) terintegrasi langsung ke rel bagian dalam kusen jendela Awning dan Casement — tersembunyi rapi saat tidak dipakai.",
    frameDepth: "Terintegrasi pada rel dalam kusen 101,6 mm",
    sizeRange: "Tinggi maksimal 3.500 mm (menutup penuh lebar jendela)",
    glassSpec: "Kompatibel penuh dengan GRANTS Awning, Casement & Swing Door",
    highlights: [
      "Tersimpan penuh di dalam frame saat dibuka",
      "Pandangan keluar tetap jernih tanpa halangan",
      "Mudah dilepas untuk perawatan & pembersihan",
    ],
  },
  {
    id: "win-mixed",
    category: "window",
    name: "Mixed & Unit Combination Window",
    shortName: "Mixed Window",
    image: "/images/grants/win-mixed.webp",
    summary:
      "Kombinasi vertikal maupun horizontal (transom & mullion) yang menggabungkan jendela Fixed, Awning, Casement, Sliding, dan Swing Door dalam satu modul fasad.",
    frameDepth: "101,6 mm / 120 mm (dengan transom & mullion Type A/B/C)",
    sizeRange: "Custom sesuai modul bukaan arsitektur proyek",
    glassSpec: "Menyesuaikan tiap modul kombinasi (hingga 31,52 mm)",
    highlights: [
      "Tersedia Mullion 180° (Type A/B/C & Adjust) & Corner Mullion",
      "Kombinasi fleksibel Bottom × Top Window",
      "Garis bingkai sejajar rapi di seluruh fasad",
    ],
  },

  // === GRANTS DOOR (7) ===
  {
    id: "door-2p2t",
    category: "door",
    name: "Sliding Door — 2 Panels on 2 Tracks",
    shortName: "Door 2P2T",
    image: "/images/grants/door-2p2t.webp",
    summary:
      "Pintu geser kaca 2 panel di atas 2 rel dengan bukaan lebar dan operasi ringan untuk akses ruang keluarga ke teras atau balkon.",
    frameDepth: "120 mm (2 tracks sliding) · Ambang bawah 50 mm",
    sizeRange: "Lebar 900–3.000 mm · Tinggi 600–3.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain (sealant)",
    highlights: [
      "Pilihan single slider (FS/SF) & posisi kiri/kanan",
      "Tipe panel A–E & opsi handle L-Fit 1 sisi / 2 sisi",
      "Tersedia GRANTS (JIS) & GRANTS PLUS (ASTM 2.000 Pa)",
    ],
  },
  {
    id: "door-4p2t",
    category: "door",
    name: "Sliding Door — 4 Panels on 2 Tracks",
    shortName: "Door 4P2T",
    image: "/images/grants/door-4p2t.webp",
    summary:
      "Pintu geser 4 panel bukaan tengah (FSSF atau SSSS) di atas 2 rel untuk bentang lebar hingga 6 meter dengan visual bingkai minimal.",
    frameDepth: "120 mm (2 tracks sliding) · Ambang bawah 50 mm",
    sizeRange: "Lebar 1.750–6.000 mm · Tinggi 600–3.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain (sealant)",
    highlights: [
      "Konfigurasi bukaan SSSS atau FSSF",
      "Meeting stile 35 mm untuk pandangan panorama",
      "Opsi pleated insect screen terintegrasi",
    ],
  },
  {
    id: "door-3p2t-sfs",
    category: "door",
    name: "Sliding Door — 3 Panels on 2 Tracks (SFS)",
    shortName: "Door 3P2T SFS",
    image: "/images/grants/door-3p2t-sfs.webp",
    summary:
      "Pintu geser 3 panel dengan panel kaca mati di tengah (Slide-Fixed-Slide) di atas 2 rel yang hemat ruang kedalaman kusen.",
    frameDepth: "120 mm (2 tracks sliding) · Ambang bawah 50 mm",
    sizeRange: "Lebar 1.730–3.000 mm · Tinggi 600–3.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain (sealant)",
    highlights: [
      "Hemat kedalaman kusen (120 mm) untuk 3 panel",
      "Tipe panel A–E & opsi L-Fit handle",
      "Opsi kasa serangga lipat (pleated screen)",
    ],
  },
  {
    id: "door-3p3t",
    category: "door",
    name: "Sliding Door — 3 Panels on 3 Tracks",
    shortName: "Door 3P3T",
    image: "/images/grants/door-3p3t.webp",
    summary:
      "Pintu geser 3 panel di atas 3 rel yang memungkinkan dua pertiga bukaan terbuka penuh (SSS, FSS, atau SSF).",
    frameDepth: "178 mm (3 tracks sliding) · Ambang bawah 50 mm",
    sizeRange: "Lebar 1.320–4.500 mm · Tinggi 600–3.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain (sealant)",
    highlights: [
      "Akses bukaan hingga 2/3 total lebar kusen",
      "Konfigurasi SSS, FSS, atau SSF (L/R)",
      "Tersedia GRANTS (JIS) & GRANTS PLUS (ASTM)",
    ],
  },
  {
    id: "door-6p3t",
    category: "door",
    name: "Sliding Door — 6 Panels on 3 Tracks",
    shortName: "Door 6P3T",
    image: "/images/grants/door-6p3t.webp",
    summary:
      "Pintu geser 6 panel di atas 3 rel untuk fasad ekstra lebar hingga 9 meter, menghadirkan bukaan tengah super luas untuk ruang tamu dan taman.",
    frameDepth: "178 mm (3 tracks sliding) · Ambang bawah 50 mm",
    sizeRange: "Lebar 2.580–9.000 mm (GRANTS) · Tinggi 600–3.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain (sealant)",
    highlights: [
      "Bentang bukaan hingga 9 meter (SSSSSS / FSSSSF)",
      "Struktur profil kuat dengan tipe panel A–E",
      "Opsi handle L-Fit & pleated insect screen",
    ],
  },
  {
    id: "door-insect-screen",
    category: "door",
    name: "Insect Sliding Screen Door",
    shortName: "Insect Screen Door",
    image: "/images/grants/door-insect-screen.webp",
    summary:
      "Sistem kasa nyamuk geser/lipat terintegrasi pada rel dalam atau luar pintu sliding GRANTS hingga ketinggian 4,5 meter.",
    frameDepth: "Terintegrasi pada rel dalam atau luar kusen 120 / 178 mm",
    sizeRange: "Tinggi maksimal 4.500 mm · Lebar modul screen 800 mm",
    glassSpec: "Kompatibel dengan GRANTS Sliding 2P2T, 3P2T, 4P2T, 3P3T, 6P3T & Corner",
    highlights: [
      "Mendukung pintu super tinggi hingga 4,5 meter",
      "Tersedia pemasangan tipe inside maupun outside",
      "Tersimpan rapi di dalam kusen saat dibuka",
    ],
  },
  {
    id: "door-out-swing",
    category: "door",
    name: "Out-Swing Door (Single / Double)",
    shortName: "Out-Swing Door",
    image: "/images/grants/door-out-swing.webp",
    summary:
      "Pintu ayun buka keluar berbingkai aluminium GRANTS yang kokoh untuk akses samping, teras, atau area servis dengan estetika seragam.",
    frameDepth: "101,6 mm",
    sizeRange: "Single: L 500–1.000 × T 1.000–3.500 mm · Double: L 1.000–2.000 × T 1.000–3.000 mm",
    glassSpec: "8–13,52 mm & 28–31,52 mm (glazing channel)",
    highlights: [
      "Pilihan bukaan kiri/kanan (Single & Double leaf)",
      "Mendukung kaca double glass hingga 31,52 mm",
      "Catatan katalog: door closer tidak tersedia",
    ],
  },

  // === FLAT RAIL & CORNER SLIDING (4) ===
  {
    id: "flat-2p2t",
    category: "flat-corner",
    name: "Flat Rail Sliding Door — 2 Panels on 2 Tracks",
    shortName: "Flat Rail 2P2T",
    image: "/images/grants/flat-2p2t.webp",
    summary:
      "Pintu geser rel rata lantai (flat sill) 2 panel yang mampu mencapai ketinggian hingga 4,5 meter tanpa hambatan ambang di lantai.",
    frameDepth: "120 mm (2 tracks flat rail)",
    sizeRange: "Lebar 900–4.400 mm · Tinggi 600–4.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain hingga 31,5 mm (sealant)",
    highlights: [
      "Tinggi bukaan mencapai 4,5 meter",
      "Rel rata lantai aman & bebas tersandung (trip-free)",
      "Performa JIS: Angin 500–1.200 Pa · Air W-2 (150 Pa) · Udara A-4",
    ],
  },
  {
    id: "flat-4p2t",
    category: "flat-corner",
    name: "Flat Rail Sliding Door — 4 Panels on 2 Tracks",
    shortName: "Flat Rail 4P2T",
    image: "/images/grants/flat-4p2t.webp",
    summary:
      "Pintu geser rel rata lantai 4 panel untuk bentang super lebar hingga 8,8 meter dan tinggi hingga 4,5 meter (juga tersedia opsi 3P3T hingga 6 m & 6P3T hingga 12 m).",
    frameDepth: "120 mm (2 tracks) · Opsi 178 mm (3P3T / 6P3T hingga lebar 12 m)",
    sizeRange: "Lebar 1.750–8.800 mm (4P2T) · Tinggi 600–4.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain hingga 31,5 mm (sealant)",
    highlights: [
      "Transisi ruang dalam–luar paling mulus tanpa step",
      "Konfigurasi SSSS / FSSF dengan tipe panel A–E",
      "Opsi pleated insect screen hingga tinggi 4,5 m",
    ],
  },
  {
    id: "corner-4p2t",
    category: "flat-corner",
    name: "Corner Sliding Door — 4 Panels on 2 Tracks (2+2)",
    shortName: "Corner Sliding 2+2 (2T)",
    image: "/images/grants/corner-4p2t.webp",
    summary:
      "Pintu geser sudut 90° tanpa tiang sudut (mullion-free) konfigurasi 2P2T + 2P2T yang membuka seluruh sudut ruangan ke taman atau kolam renang.",
    frameDepth: "120 mm (2 tracks flat rail corner)",
    sizeRange: "Lebar 900–4.400 mm per sisi · Tinggi 600–3.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain (sealant)",
    highlights: [
      "Sudut ruangan terbuka 100% tanpa tiang sudut",
      "Tersedia sudut inward maupun outward (SS+SS / FS+SF)",
      "Eksklusif hanya tersedia pada seri GRANTS",
    ],
  },
  {
    id: "corner-3p3t",
    category: "flat-corner",
    name: "Corner Sliding Door — 3+3 Panels on 3 Tracks",
    shortName: "Corner Sliding 3+3 (3T)",
    image: "/images/grants/corner-3p3t.webp",
    summary:
      "Pintu geser sudut flagship 3 rel (3P3T + 3P3T, juga tersedia 2P3T + 3P3T) untuk bukaan sudut masif hingga 6 meter per sisi tanpa tiang penghalang.",
    frameDepth: "178 mm (3 tracks flat rail corner)",
    sizeRange: "Lebar 1.320–6.000 mm per sisi · Tinggi 600–3.500 mm",
    glassSpec: "8–13,52 mm (glazing channel); kaca lain (sealant)",
    highlights: [
      "Bukaan sudut super lebar hingga 6 m × 6 m tanpa tiang",
      "Konfigurasi SSS+SSS, FSS+SSF, serta 2P3T+3P3T",
      "Opsi L-Fit handle & kasa nyamuk terintegrasi",
    ],
  },
];
