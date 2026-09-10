import type { Dictionary } from "@/lib/i18n";
import { investmentAssets } from "@/lib/site";

function interpolate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}

export function getInvestment(dict: Dictionary) {
  const copy = dict.investment;

  return {
    title: copy.title,
    subtitle: copy.subtitle,
    tagline: copy.tagline,
    address: copy.address,
    locationLabel: copy.locationLabel,
    status: copy.status,
    intro: copy.intro,
    latitude: investmentAssets.latitude,
    longitude: investmentAssets.longitude,
    coordinatesDecimal: investmentAssets.coordinatesDecimal,
    coordinatesDms: investmentAssets.coordinatesDms,
    media: investmentAssets.media,
    featureBlock: copy.featureBlock,
    facadeBlock: {
      heading: copy.facadeBlock.heading,
      paragraphs: copy.facadeBlock.paragraphs,
      detailImages: investmentAssets.facadeDetailImages.map((src, index) => ({
        src,
        alt: copy.facadeBlock.detailAlts[index] ?? "",
      })),
    },
    quoteLines: copy.quoteLines,
    turnkeyHeading: copy.turnkeyHeading,
    livingSpace: copy.livingSpace,
    closing: copy.closing,
    sequences: [
      {
        image: investmentAssets.sequenceImages[0],
        kickerBold: copy.sequences[0].kickerBold,
        body: copy.sequences[0].body,
        alt: copy.sequences[0].alt,
      },
      {
        image: investmentAssets.sequenceImages[1],
        kickerBold: copy.sequences[1].kickerBold,
        body: copy.sequences[1].body,
        alt: copy.sequences[1].alt,
      },
      {
        image: investmentAssets.sequenceImages[2],
        alt: copy.sequences[2].alt,
        copy: copy.sequences[2].copy,
      },
    ] as const,
    captions: [
      {
        image: investmentAssets.captionImages[0],
        kickerBold: copy.captions[0].kickerBold,
        body: copy.captions[0].body,
        alt: copy.captions[0].alt,
      },
      {
        image: investmentAssets.captionImages[1],
        alt: copy.captions[1].alt,
        leadBeforeKey: copy.captions[1].leadBeforeKey,
        keyBold: copy.captions[1].keyBold,
        leadAfterKey: copy.captions[1].leadAfterKey,
        closingBold: copy.captions[1].closingBold,
      },
    ] as const,
    slider: investmentAssets.slider.map((slide, index) => ({
      ...slide,
      alt: copy.sliderAlts[index] ?? "",
    })),
    specsTitle: copy.specsTitle,
    lotSpecs: copy.lotSpecs,
    siteBasicsTitle: copy.siteBasicsTitle,
    siteBasics: copy.siteBasics,
    groundFloor: {
      label: dict.floors.ground,
      total: investmentAssets.groundFloor.total,
      rooms: investmentAssets.groundFloor.rooms.map((room) => ({
        name: dict.rooms[room.key],
        area: room.area,
      })),
    },
    upperFloor: {
      label: dict.floors.upper,
      total: investmentAssets.upperFloor.total,
      rooms: investmentAssets.upperFloor.rooms.map((room) => ({
        name: dict.rooms[room.key],
        area: room.area,
      })),
    },
  };
}

export function fillTemplate(template: string, vars: Record<string, string>): string {
  return interpolate(template, vars);
}

export type InvestmentContent = ReturnType<typeof getInvestment>;
