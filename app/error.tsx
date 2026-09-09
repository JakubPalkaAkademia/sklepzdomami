"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div
      style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "14px", lineHeight: "22px" }}>Coś poszło nie tak.</p>
      <button
        type="button"
        onClick={reset}
        style={{
          padding: "12px 24px",
          fontSize: "12px",
          border: "1px solid currentColor",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        Spróbuj ponownie
      </button>
      {process.env.NODE_ENV === "development" && error.message ? (
        <pre style={{ fontSize: "11px", opacity: 0.7, maxWidth: "40rem", overflow: "auto" }}>
          {error.message}
        </pre>
      ) : null}
    </div>
  );
}
