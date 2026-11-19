import Image from "next/image";
import { siteConfig } from "@/config/site";

const photos = {
  conversation: { file: "nairobi-conversation", alt: "People talking outdoors on a hill in Nairobi", credit: "Nairobi, Kenya · MC G’Zay", width: 1440, height: 960 },
  desk: { file: "nairobi-desk", alt: "A developer working at a desk in Nairobi", credit: "At work in Nairobi · Naboth Otieno", width: 1440, height: 960 },
  skyline: { file: "nairobi-skyline", alt: "A view across Nairobi’s city centre", credit: "Nairobi skyline · Ken Mwaura", width: 1440, height: 960 },
  founder: { file: siteConfig.founder.portrait, alt: siteConfig.founder.name, credit: "Vanessa Mwando, founder and CEO of Spark8Edge", width: siteConfig.founder.width, height: siteConfig.founder.height },
};

export function EditorialPhoto({ photo, preload = false }: { photo: keyof typeof photos; preload?: boolean }) {
  const image = photos[photo];
  return (
    <figure className={`editorial-photo photo-${photo}`}>
      <Image src={`/photos/${image.file}.webp`} alt={image.alt} width={image.width} height={image.height}
        sizes={photo === "founder" ? "(max-width: 416px) calc(100vw - 32px), (max-width: 760px) 384px, (max-width: 1240px) 43vw, 504px" : "(max-width: 760px) 92vw, (max-width: 1240px) 52vw, 650px"} preload={preload} />
      <figcaption>{image.credit}</figcaption>
    </figure>
  );
}
