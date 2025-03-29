import ReactMarkdown from 'react-markdown';


interface RealBodyProps {
  markdown: string;
}

const RealBody: React.FC<RealBodyProps> = ({ markdown }) => {
  return (
    <div className="prose prose-gray dark:prose-invert w-full overflow-x-hidden h-auto" style={{ overflowWrap: 'break-word'}}>
     <ReactMarkdown
        // components={{
        //   // 确保内容支持换行
        //   code({ node, inline, className, children, ...props }) {
        //     return (
        //       <code
        //         className={className}
        //         style={{ overflowWrap: 'break-word' }}
        //         {...props}
        //       >
        //         {children}
        //       </code>
        //     );
        //   },
        //   p({ node, ...props }) {
        //     return <p style={{ overflowWrap: 'break-word' }} {...props} />;
        //   },
        // }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default RealBody;