interface ComponentCardProps {
  name: string;
  layer: string;
  description: string;
}

export function ComponentCard({ name, layer, description }: ComponentCardProps) {
  return (
    <article className="cf-component-card">
      <p className="cf-component-card__layer">{layer}</p>
      <h3 className="cf-component-card__title">{name}</h3>
      <p className="cf-component-card__description">{description}</p>
    </article>
  );
}
