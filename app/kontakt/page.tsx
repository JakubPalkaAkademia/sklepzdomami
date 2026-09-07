import type { Metadata } from "next";
import { kontakt, studio } from "@/lib/site";

export const metadata: Metadata = {
  title: kontakt.title,
  description: kontakt.intro,
};

export default function KontaktPage() {
  return (
    <div className="page">
      <h1 className="page__title">{kontakt.title}</h1>
      <p className="page__text">{kontakt.intro}</p>
      <div style={{ marginTop: 32, display: "grid", gap: 20, fontSize: 14, lineHeight: "22px" }}>
        <div>
          <p className="t-neue-13-caps" style={{ color: "rgba(0,0,0,0.45)", marginBottom: 4 }}>osoby</p>
          <p>{studio.partners.map((p) => p.name).join(" · ")}</p>
        </div>
        <div>
          <p className="t-neue-13-caps" style={{ color: "rgba(0,0,0,0.45)", marginBottom: 4 }}>telefon</p>
          <p><a href={studio.phoneHref}>{studio.phone}</a></p>
        </div>
        <div>
          <p className="t-neue-13-caps" style={{ color: "rgba(0,0,0,0.45)", marginBottom: 4 }}>e-mail</p>
          <p><a href={studio.emailHref}>{studio.email}</a></p>
        </div>
        <div>
          <p className="t-neue-13-caps" style={{ color: "rgba(0,0,0,0.45)", marginBottom: 4 }}>pracownia</p>
          <p>{studio.address}<br />{studio.postalCode} {studio.city}</p>
        </div>
      </div>
    </div>
  );
}
