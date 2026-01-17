export const siteConfig = {
  name: "Spark8Edge",
  description: "Empowering Kenya's Next Generation through AI & Strategic Brand Intelligence.",
  url: "https://spark8edge.co.ke",
  emails: {
    contact: "info@spark8edge.co.ke", // Replaces vanessamwando@gmail
    newsletter: "subscribe@spark8edge.co.ke",
    youth: "youth@spark8edge.co.ke",
    corporate: "corporate@spark8edge.co.ke",
  },
  links: {
    whatsapp: "https://wa.me/254727712711", // Add your number if known
  },
  security: {
    turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAACHHASIDKNYMAXXH",
  }
};
