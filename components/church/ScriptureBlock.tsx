interface ScriptureBlockProps {
  quote: string;
  reference: string;
}

export default function ScriptureBlock({ quote, reference }: ScriptureBlockProps) {
  return (
    <div className="scripture-block my-8">
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
      <cite>— {reference}</cite>
    </div>
  );
}
