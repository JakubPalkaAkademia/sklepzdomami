import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page">
      <h1 className="page__title">Strona nie została znaleziona</h1>
      <p className="page__text">
        Adres, którego szukasz, nie istnieje lub został przeniesiony.
      </p>
      <p className="page__text">
        <Link href="/">Wróć na stronę główną</Link>
      </p>
    </div>
  );
}
