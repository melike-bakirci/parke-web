export const siteInfo = {
  name: "ZenFlor",
  url: "https://zenparke.com.tr",
  title: "ZenFlor Parke Çözümleri",
  description: "2006 yılından bu yana zemin çözümlerinde kalitenin adresi. Uzman ekibimiz ve kaliteli ürünlerimizle parke ve zemin ihtiyaçlarınızda yanınızdayız.",
  defaultKeywords: "laminat parke, lamine parke, zenflor parke, istanbul parke, zemin kaplama, süpürgelik, parke döşeme",

  contact: {
    phone: {
      raw: "+905302708487",
      formatted: "+90 (530) 270 84 87",
      tel: "tel:+905302708487"
    },
    whatsapp: {
      number: "905302708487",
      url: "https://wa.me/905302708487",
      createLink: (msg?: string) =>
        msg ? `https://wa.me/905302708487?text=${encodeURIComponent(msg)}` : "https://wa.me/905302708487"
    },
    email: {
      address: "zenflormarket@gmail.com",
      mailto: "mailto:zenflormarket@gmail.com"
    },
    address: {
      street: "Leman Sk. No:4",
      district: "Sancaktepe",
      city: "İstanbul",
      short: "Leman Sk. No:4, Sancaktepe",
      full: "Leman Sk. No:4, Sancaktepe / İstanbul",
      mapsUrl: "https://maps.app.goo.gl/cyQwTaXrGfFNJmyTA"
    },
    workingHours: {
      summary: "Pzt-Cmt: 09:00 – 19:00",
      weekdays: "Pzt - Cmt: 09:00 – 19:00",
      weekend: "Pazar: Kapalı"
    }
  },

  social: {
    instagram: "https://www.instagram.com/zenflormarket/",
    linkedin: "https://www.linkedin.com/company/zenflor",
    facebook: "https://facebook.com/people/Zenflor/61592694338862/",
    youtube: "https://www.youtube.com/@zenflormarket",
    tiktok: "https://www.tiktok.com/@zenflormarket",
    sahibinden: "https://zenflor.sahibinden.com/"
  },

  // Takip ve Analiz Kodları
  analytics: {
    microsoftClarityId: "ya1sczmqop" // Microsoft Clarity Proje Kimliği
  }
} as const;

export default siteInfo;
