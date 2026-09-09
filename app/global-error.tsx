"use client";

type GlobalErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalErrorPage({ reset }: GlobalErrorPageProps) {
  return (
    <html lang="pl">
      <body className="global-error">
        <div className="page error-page">
          <h1 className="page__title">Coś poszło nie tak</h1>
          <p className="page__text">Spróbuj odświeżyć stronę lub wróć później.</p>
          <button type="button" className="error-page__button" onClick={reset}>
            Spróbuj ponownie
          </button>
        </div>
      </body>
    </html>
  );
}
