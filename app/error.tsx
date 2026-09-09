"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <div className="page error-page">
      <h1 className="page__title">Coś poszło nie tak</h1>
      <p className="page__text">Spróbuj odświeżyć stronę lub wróć później.</p>
      <button type="button" className="error-page__button" onClick={reset}>
        Spróbuj ponownie
      </button>
    </div>
  );
}
