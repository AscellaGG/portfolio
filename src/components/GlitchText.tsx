export default function GlitchText({ text }: { text: string }) {
  const stacks = 3;

  return (
    <div
      className="stack"
      style={{ "--stacks": stacks } as React.CSSProperties}
    >
      {Array.from({ length: stacks }).map((_, index) => (
        <span key={index} style={{ "--index": index } as React.CSSProperties}>
          {text}
        </span>
      ))}
    </div>
  );
}
