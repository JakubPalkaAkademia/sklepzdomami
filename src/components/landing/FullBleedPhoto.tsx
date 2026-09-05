import Image from "next/image";

type FullBleedPhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export function FullBleedPhoto({ src, alt, className }: FullBleedPhotoProps) {
  return (
    <figure className={className ?? "relative h-[70vh] min-h-[26rem] w-full"}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </figure>
  );
}
