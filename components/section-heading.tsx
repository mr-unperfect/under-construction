export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {copy ? <p className="section-copy mt-5">{copy}</p> : null}
    </div>
  );
}
