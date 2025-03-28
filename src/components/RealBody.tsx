import ReactMarkdown from 'react-markdown';


interface RealBodyProps {
  markdown: string;
}

const RealBody: React.FC<RealBodyProps> = ({ markdown }) => {
  return (
    <div className="prose prose-gray dark:prose-invert">
      <ReactMarkdown>{ markdown }</ReactMarkdown>
    </div>
  );
};

export default RealBody;