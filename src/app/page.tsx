import { getCaptionedBlock, photos } from "@/lib/company";
import { CaptionedPhoto } from "@/components/landing/CaptionedPhoto";
import { ContactForm } from "@/components/landing/ContactForm";
import { Coordinates } from "@/components/landing/Coordinates";
import { FullBleedPhoto } from "@/components/landing/FullBleedPhoto";
import { Hero } from "@/components/landing/Hero";
import { InfoAccordion } from "@/components/landing/InfoAccordion";
import { Intro } from "@/components/landing/Intro";
import { NatureSeat } from "@/components/landing/NatureSeat";
import { Partners } from "@/components/landing/Partners";
import { PostcardRow } from "@/components/landing/PostcardRow";
import { SplitLines } from "@/components/landing/SplitLines";
import { Story } from "@/components/landing/Story";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FullBleedPhoto src={photos.fullBleed.src} alt={photos.fullBleed.alt} />
      <Story />
      <Partners />
      <NatureSeat />
      <CaptionedPhoto block={getCaptionedBlock("budowa")} />
      <Coordinates />
      <SplitLines />
      <CaptionedPhoto block={getCaptionedBlock("architektura")} />
      <CaptionedPhoto block={getCaptionedBlock("sprzedaz")} />
      <PostcardRow />
      <InfoAccordion />
      <ContactForm />
    </>
  );
}
