type BookingStepProgressProps = {
  current: "datetime" | "details" | "success";
  stepDateTime: string;
  stepDetails: string;
  label: string;
};

export function BookingStepProgress({
  current,
  stepDateTime,
  stepDetails,
  label,
}: BookingStepProgressProps) {
  const stepOneDone = current === "details" || current === "success";
  const stepTwoActive = current === "details";
  const stepTwoDone = current === "success";

  return (
    <div className="book-progress" aria-label={label}>
      <div className="book-progress__item">
        <span
          className={[
            "book-progress__dot",
            current === "datetime" ? "book-progress__dot--active" : "",
            stepOneDone ? "book-progress__dot--done" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {stepOneDone ? "✓" : "1"}
        </span>
        <span
          className={[
            "book-progress__label",
            current === "datetime" || stepOneDone ? "book-progress__label--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {stepDateTime}
        </span>
      </div>
      <div
        className={[
          "book-progress__line",
          stepOneDone ? "book-progress__line--done" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      />
      <div className="book-progress__item">
        <span
          className={[
            "book-progress__dot",
            stepTwoActive ? "book-progress__dot--active" : "",
            stepTwoDone ? "book-progress__dot--done" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {stepTwoDone ? "✓" : "2"}
        </span>
        <span
          className={[
            "book-progress__label",
            stepTwoActive || stepTwoDone ? "book-progress__label--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {stepDetails}
        </span>
      </div>
    </div>
  );
}
