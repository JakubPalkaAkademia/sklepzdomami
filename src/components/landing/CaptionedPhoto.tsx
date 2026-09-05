import Image from "next/image";

type CaptionedPhotoProps = {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
};

export function CaptionedPhoto({ src, alt, caption, tall }: CaptionedPhotoProps) {
  const dash = caption.indexOf(" — ");
  const lead = dash > 0 ? caption.slice(0, dash) : null;
  const rest = dash > 0 ? caption.slice(dash + 3) : caption;

  return (
    <figure className="bg-[var(--vipp-dark)]">
      <div
        className={`relative w-full overflow-hidden bg-black ${
          tall ? "h-[88vh] min-h-[480px]" : "h-[62vh] min-h-[340px] sm:h-[80vh]"
        }`}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      </div>
      <figcaption className="px-4 py-4 text-[13px] font-light leading-snug text-white sm:px-10 sm:py-5">
        {lead ? (
          <>
            <span className="font-normal">{lead}</span>
            {" — "}
            {rest}
          </>
        ) : (
          rest
        )}
      </figcaption>
    </figure>
  );
}
