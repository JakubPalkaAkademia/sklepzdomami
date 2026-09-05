import Image from "next/image";

type FullBleedPhotoProps = {
  src: string;
  alt: string;
};

export function FullBleedPhoto({ src, alt }: FullBleedPhotoProps) {
  return (
    <section className="relative h-[58vh] min-h-[320px] w-full overflow-hidden bg-black sm:h-[82vh]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
    </section>
  );
}
