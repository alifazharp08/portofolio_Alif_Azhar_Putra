export type Lang = "en" | "id"

export type Dict = typeof en

export const en = {
  seo: {
    title: "Alif Azhar Putra — Portfolio",
    description: "Engineering, Design Engineering, Photography, and Graphic Design portfolio of Alif Azhar Putra S.T.",
  },
  a11y: {
    primaryNav: "Primary navigation",
  },
  nav: {
    menu: "Menu",
    home: "Home",
    bio: "Bio",
    work: "Work",
    certificates: "Certificates",
    expertise: "Expertise",
    experience: "Work Experience/Internship",
  },
  images: {
    portraitAlt: "Portrait of Alif Azhar Putra",
  },
  hero: {
    kicker: "Welcome to my portfolio",
    title: "Hi, I’m Alif Azhar Putra",
    subtitle:
      "Engineer and designer focusing on design engineering, photography, and graphic design. I craft branding, promotional visuals, and product imagery.",
    hireCta: "Hire Me",
    hireHref: "#experience",
    cvCta: "Download CV",
    cvHref: "#bio",
  },
  bio: {
    heading: "Bio",
    body: "A multidisciplinary creative with an engineering background. Experienced across product imagery, branding visuals, and digital content to support brand development.",
  },
  work: {
    heading: "Selected Work",
    items: [
      { title: "Product Photography", desc: "Studio and lifestyle concepts for brands." },
      { title: "Brand Identity", desc: "Logos, systems, and guidelines." },
      { title: "Design Engineering", desc: "CAD concepts and visual documentation." },
    ],
  },
  certificates: {
    heading: "Certificates",
    items: [
      { title: "Design Fundamentals", issuer: "Online Academy" },
      { title: "Photography Workshop", issuer: "Creative Institute" },
    ],
  },
  expertise: {
    heading: "Expertise",
    items: ["Engineering", "Design Engineering", "Photography", "Graphic Design", "Branding"],
  },
  experience: {
    heading: "Work Experience / Internship",
    items: [
      {
        role: "Design Engineer Intern",
        company: "Company A",
        period: "2024",
        desc: "Assisted in CAD and documentation.",
      },
      { role: "Freelance Photographer", company: "Various", period: "2022–Present" },
    ],
  },
}

export const id = {
  seo: {
    title: "Alif Azhar Putra — Portofolio",
    description:
      "Portofolio Alif Azhar Putra S.T dalam bidang Engineering, Design Engineering, Fotografi, dan Desain Grafis.",
  },
  a11y: {
    primaryNav: "Navigasi utama",
  },
  nav: {
    menu: "Menu",
    home: "Beranda",
    bio: "Biodata",
    work: "Karya",
    certificates: "Sertifikat",
    expertise: "Keahlian",
    experience: "Pengalaman Kerja/Magang",
  },
  images: {
    portraitAlt: "Foto Alif Azhar Putra",
  },
  hero: {
    kicker: "Selamat datang di portofolio saya",
    title: "Hi, Saya Alif Azhar Putra",
    subtitle:
      "Ahli rekayasa dan desain yang fokus pada design engineering, fotografi, dan desain grafis. Membuat konten branding dan visual promosi.",
    hireCta: "Hire Me",
    hireHref: "#experience",
    cvCta: "Download CV",
    cvHref: "#bio",
  },
  bio: {
    heading: "Biodata",
    body: "Seorang kreator multidisiplin dengan latar belakang teknik. Berpengalaman pada fotografi produk, visual branding, dan konten digital untuk pengembangan brand.",
  },
  work: {
    heading: "Karya Pilihan",
    items: [
      { title: "Fotografi Produk", desc: "Studio dan lifestyle untuk brand." },
      { title: "Identitas Merek", desc: "Logo, sistem, dan panduan." },
      { title: "Design Engineering", desc: "Konsep CAD dan dokumentasi visual." },
    ],
  },
  certificates: {
    heading: "Sertifikat",
    items: [
      { title: "Dasar-dasar Desain", issuer: "Online Academy" },
      { title: "Workshop Fotografi", issuer: "Creative Institute" },
    ],
  },
  expertise: {
    heading: "Keahlian",
    items: ["Engineering", "Design Engineering", "Fotografi", "Desain Grafis", "Branding"],
  },
  experience: {
    heading: "Pengalaman Kerja / Magang",
    items: [
      {
        role: "Design Engineer Intern",
        company: "Perusahaan A",
        period: "2024",
        desc: "Membantu CAD dan dokumentasi.",
      },
      { role: "Fotografer Freelance", company: "Berbagai Klien", period: "2022–Sekarang" },
    ],
  },
}

export function getDict(lang: Lang) {
  return lang === "id" ? id : en
}
