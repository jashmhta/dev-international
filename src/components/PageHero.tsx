import { ScrollHint } from "./ui/Icons";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  dark?: boolean;
  showScroll?: boolean;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  dark = true,
  showScroll = false,
  children,
}: Props) {
  return (
    <section
      className={`relative min-h-[70vh] pt-28 ${
        dark ? "bg-alethia-dark text-alethia-cream" : "bg-alethia-cream text-alethia-dark"
      }`}
    >
      <div className="site-container flex min-h-[calc(70vh-5rem)] flex-col justify-center pb-16 pt-10">
        {eyebrow && (
          <p
            className={`eyebrow mb-6 ${
              dark ? "text-alethia-lime" : "text-alethia-dark/50"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="display-xl max-w-5xl">{title}</h1>
        {subtitle && (
          <div
            className={`body-lg mt-8 max-w-2xl ${
              dark ? "text-white/70" : "text-alethia-dark/70"
            }`}
          >
            {subtitle}
          </div>
        )}
        {children}
        {showScroll && (
          <a
            href="#content"
            className={`mt-16 inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.1em] ${
              dark ? "text-white/55" : "text-alethia-dark/50"
            }`}
          >
            <ScrollHint className="h-4 w-4" />
            Scroll to discover
          </a>
        )}
      </div>
    </section>
  );
}
