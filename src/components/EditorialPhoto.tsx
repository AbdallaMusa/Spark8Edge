import Image from "next/image";

const photos = {
  conversation: { file: "nairobi-conversation", alt: "People talking outdoors on a hill in Nairobi", credit: "Nairobi, Kenya · MC G’Zay", width: 1440, height: 960 },
  desk: { file: "nairobi-desk", alt: "A developer working at a desk in Nairobi", credit: "At work in Nairobi · Naboth Otieno", width: 1440, height: 960 },
  skyline: { file: "nairobi-skyline", alt: "A view across Nairobi’s city centre", credit: "Nairobi skyline · Ken Mwaura", width: 1440, height: 960 },
  founder: { file: "vanessa-mwando", alt: "Vanessa Mwando", credit: "Vanessa Mwando, founder of Spark8Edge", width: 780, height: 698 },
};

export function EditorialPhoto({ photo, preload = false, shape = "wide" }: { photo: keyof typeof photos; preload?: boolean; shape?: "wide" | "square" }) {
  const image = photos[photo];
  return (
    <figure className={`editorial-photo photo-${shape} photo-${photo}`}>
      <Image src={`/photos/${image.file}.webp`} alt={image.alt} width={image.width} height={image.height}
        sizes="(max-width: 760px) 92vw, (max-width: 1240px) 52vw, 650px" preload={preload} />
      <figcaption>{image.credit}</figcaption>
    </figure>
  );
}
