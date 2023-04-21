import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeBlock(props: {
  value: string;
  lang?: string;
  className?: string;
}) {
  const { value, lang='typescript', className='' } = props;

  return (
    <div
      className={['overflow-x-auto max-w-full my-4 rounded-lg', className].join(
        ' '
      )}
    >
      <SyntaxHighlighter
        className="whitespace-pre-wrap break-words"
        language={lang}
        style={dracula}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}
