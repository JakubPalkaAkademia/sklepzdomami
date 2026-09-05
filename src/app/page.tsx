import { AfterCabin } from "@/components/landing/AfterCabin";
import { CaptionedPhoto } from "@/components/landing/CaptionedPhoto";
import { ContactForm } from "@/components/landing/ContactForm";
import { Coordinates } from "@/components/landing/Coordinates";
import { CtaBand } from "@/components/landing/CtaBand";
import { FullBleedPhoto } from "@/components/landing/FullBleedPhoto";
import { Hero } from "@/components/landing/Hero";
import { ImageText } from "@/components/landing/ImageText";
import { InfoAccordion } from "@/components/landing/InfoAccordion";
import { Intro } from "@/components/landing/Intro";
import { Postcard } from "@/components/landing/Postcard";
import { Quote } from "@/components/landing/Quote";
import { SplitLines } from "@/components/landing/SplitLines";
import { TwinPhotos } from "@/components/landing/TwinPhotos";
import { copy, photos } from "@/lib/company";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FullBleedPhoto src={photos.fullBleed.src} alt={photos.fullBleed.alt} />
      <AfterCabin />
      <Quote />
      <ImageText src={photos.nature.src} alt={photos.nature.alt}>
        <p>{copy.natureBody}</p>
      </ImageText>
      <CaptionedPhoto
        src={photos.night.src}
        alt={photos.night.alt}
        caption={copy.captionBudowa}
      />
      <ImageText src={photos.glass.src} alt={photos.glass.alt} reverse>
        <p>{copy.glassBody}</p>
      </ImageText>
      <CaptionedPhoto
        src={photos.deck.src}
        alt={photos.deck.alt}
        caption={copy.captionArchitektura}
        tall
      />
      <Coordinates />
      <SplitLines />
      <TwinPhotos />
      <CaptionedPhoto
        src={photos.bedroom.src}
        alt={photos.bedroom.alt}
        caption={copy.captionSprzedaz}
      />
      <CaptionedPhoto
        src={photos.interior.src}
        alt={photos.interior.alt}
        caption={copy.captionSiedziba}
      />
      <Postcard />
      <CtaBand />
      <InfoAccordion />
      <ContactForm />
    </>
  );
}
