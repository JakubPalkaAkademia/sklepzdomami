export function GoogleCalendarIcon() {
  return (
    <svg
      className="book-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" fill="#fff" stroke="#dadce0" strokeWidth="1" />
      <rect x="3" y="4" width="18" height="5" rx="2" fill="#1a73e8" />
      <rect x="3" y="7" width="18" height="2" fill="#1a73e8" />
      <circle cx="7" cy="6" r="0.75" fill="#fff" />
      <circle cx="17" cy="6" r="0.75" fill="#fff" />
      <rect x="6" y="11" width="3" height="3" rx="0.5" fill="#1a73e8" opacity="0.85" />
      <rect x="10.5" y="11" width="3" height="3" rx="0.5" fill="#ea4335" opacity="0.85" />
      <rect x="15" y="11" width="3" height="3" rx="0.5" fill="#fbbc04" opacity="0.85" />
      <rect x="6" y="15.5" width="3" height="3" rx="0.5" fill="#34a853" opacity="0.85" />
      <rect x="10.5" y="15.5" width="3" height="3" rx="0.5" fill="#1a73e8" opacity="0.5" />
    </svg>
  );
}

export function AppleCalendarIcon() {
  return (
    <svg
      className="book-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="4" width="18" height="17" rx="3" fill="#fff" stroke="#d1d1d6" strokeWidth="0.75" />
      <rect x="3" y="4" width="18" height="6" rx="3" fill="#ff3b30" />
      <rect x="3" y="8" width="18" height="2" fill="#ff3b30" />
      <rect x="6.5" y="2.5" width="1.5" height="4" rx="0.75" fill="#8e8e93" />
      <rect x="16" y="2.5" width="1.5" height="4" rx="0.75" fill="#8e8e93" />
      <text
        x="12"
        y="17.5"
        textAnchor="middle"
        fontSize="7"
        fontWeight="600"
        fill="#1c1c1e"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        7
      </text>
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      className="book-icon book-icon--success"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 6 9 17l-5-5"
      />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg
      className="book-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M6 6l12 12M18 6 6 18"
      />
    </svg>
  );
}
