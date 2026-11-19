const photos = {
  conversation: { file: "nairobi-conversation", alt: "People talking outdoors on a hill in Nairobi", credit: "Nairobi, Kenya · MC G’Zay" },
  desk: { file: "nairobi-desk", alt: "A developer working at a desk in Nairobi", credit: "At work in Nairobi · Naboth Otieno" },
  skyline: { file: "nairobi-skyline", alt: "A view across Nairobi’s city centre", credit: "Nairobi skyline · Ken Mwaura" },
};

export function EditorialPhoto({ photo, priority = false }: { photo: keyof typeof photos; priority?: boolean }) {
  const image = photos[photo];
  const src = `/photos/${image.file}`;
  const sizes = "(max-width: 760px) calc(100vw - 32px), (max-width: 1240px) 50vw, 640px";
  return (
    <figure className={`editorial-photo photo-${photo}`}>
      <img src={`${src}.webp`} alt={image.alt} width="1440" height="960"
        srcSet={[384, 640, 768, 1152].map(width => `${src}-${width}.webp ${width}w`).join(", ")}
        sizes={sizes} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" />
      <figcaption>{image.credit}</figcaption>
    </figure>
  );
}
