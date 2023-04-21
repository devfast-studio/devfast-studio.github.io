/* eslint-disable @typescript-eslint/no-explicit-any */
import { TinaMarkdown, Components } from 'tinacms/dist/rich-text';
import CodeBlock from 'components/codeBlock';
import type { PostData } from 'types/data/post';

const commonClassName = 'whitespace-pre-wrap break-words';

const components: Components<object> = {
  h1: (props: any) => (
    <h1
      className={['text-4xl font-bold', commonClassName].join(' ')}
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className={['text-3xl font-bold', commonClassName].join(' ')}
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className={['text-2xl font-bold', commonClassName].join(' ')}
      {...props}
    />
  ),
  h4: (props: any) => <h4 className="text-xl font-bold" {...props} />,
  h5: (props: any) => <h5 className="text-lg font-bold" {...props} />,
  h6: (props: any) => <h6 className="text-base font-bold" {...props} />,
  p: (props: any) => (
    <p className={['my-4', commonClassName].join(' ')} {...props} />
  ),
  ul: (props: any) => (
    <ul className={['list-disc ml-5', commonClassName].join(' ')} {...props} />
  ),
  ol: (props: any) => (
    <ol
      className={['list-decimal ml-5', commonClassName].join(' ')}
      {...props}
    />
  ),
  li: (props: any) => (
    <li className={['my-2', commonClassName].join(' ')} {...props} />
  ),
  code_block: (props: any) => <CodeBlock {...props} />
};

export default function Post(props: { post: PostData }) {
  const { post } = props;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 rounded-lg shadow-md">
      {post.date && (
        <p className="text-right">{new Date(post.date).toDateString()}</p>
      )}
      {post.body && (
        <TinaMarkdown components={components} content={post.body} />
      )}
    </div>
  );
}
