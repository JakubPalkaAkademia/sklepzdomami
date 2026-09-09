import { socials } from "@/lib/site";

type SocialLinksProps = {
  className?: string;
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.02 4.388 11.013 10.125 11.913v-8.42H7.078v-3.493h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.251h3.328l-.532 3.493h-2.796v8.42C19.612 23.086 24 18.093 24 12.073z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") return <FacebookIcon />;
  if (label === "X") return <XIcon />;
  return null;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {socials.map((social) => (
        <li key={social.href}>
          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
            <SocialIcon label={social.label} />
            <span className="social-links__label">{social.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
