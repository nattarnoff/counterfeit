interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="cf-section-heading">
      <p className="cf-section-heading__eyebrow">{eyebrow}</p>
      <h2 className="cf-section-heading__title">{title}</h2>
      <p className="cf-section-heading__description">{description}</p>
    </div>
  );
}
