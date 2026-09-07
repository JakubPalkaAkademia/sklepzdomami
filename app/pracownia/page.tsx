import type { Metadata } from "next";
import { pracownia } from "@/lib/site";

export const metadata: Metadata = {
  title: pracownia.title,
  description: pracownia.paragraphs[0],
};

export default function PracowniaPage() {
  return (
    <div className="page">
      <h1 className="page__title">{pracownia.title}</h1>
      {pracownia.paragraphs.map((p) => (
        <p key={p.slice(0, 20)} className="page__text">{p}</p>
      ))}
    </div>
  );
}
