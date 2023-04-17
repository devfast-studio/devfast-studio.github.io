import Layout from 'components/layout';
import { client } from '../../../tina/__generated__/client';
import { Prism } from 'tinacms/dist/rich-text/prism';
import {
  TinaMarkdown,
  TinaMarkdownContent,
  Components
} from 'tinacms/dist/rich-text';

const components: Components = {
  h1: (props) => <h1 className="text-4xl font-bold p-10" {...props} />,
  h2: (props) => <h2 className="text-3xl font-bold p-10" {...props} />,
  h3: (props) => <h3 className="text-2xl font-bold p-10" {...props} />,
  h4: (props) => <h4 className="text-xl font-bold p-10" {...props} />,
  h5: (props) => <h5 className="text-lg font-bold p-10" {...props} />,
  h6: (props) => <h6 className="text-base font-bold p-10" {...props} />,
  p: (props) => <p className="p-10" {...props} />,
  ul: (props) => <ul className="p-10" {...props} />,
  ol: (props) => <ol className="p-10" {...props} />,
  li: (props) => <li className="p-10" {...props} />,
  code_block: (props) => (
    <div className="p-10">
      <Prism {...props} />
    </div>
  )
};

export default function Post(props: {
  post: {
    title: string;
    date: string;
    body: any;
  };
}) {
  const { post } = props;

  return (
    <Layout>
      {/* <h1>{post.title}</h1>
      <p>{post.date}</p> */}
      <TinaMarkdown components={components} content={post.body} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.queries.postConnection();

  const paths = data.postConnection.edges.map((edge) => {
    return { params: { slug: edge?.node?._sys?.filename } };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(ctx: { params: { slug: string } }) {
  const {
    params: { slug }
  } = ctx;

  const { data } = await client.queries.post({
    relativePath: slug + '.md'
  });

  return {
    props: {
      post: data.post
    }
  };
}
