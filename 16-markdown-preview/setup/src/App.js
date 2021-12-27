import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { light } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  dark,
  darcula,
  duotoneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

// const markdown = `Here is some JavaScript code:

// ~~~js
// console.log('It works!')
// ~~~
// `;
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={darcula}
        language={match[1]}
        PreTag='div'
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

function App() {
  // const [text, setText] = useState("# text editor");
  const [markdown, setMarkdown] = useState("# text editor");
  console.log("🚀TCL: ~ file: App.js ~ line 15 ~ App ~ markdown", markdown);

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          placeholder='# text'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          {/* <ReactMarkdown
            children={markdown}
            rehypePlugins={[rehypeHighlight]}
          /> */}
          <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
