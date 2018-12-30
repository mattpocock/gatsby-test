import React from 'react';
import ReactMarkdown from 'react-markdown';

import AsyncLoadInlineImage from '../components/AsyncLoadInlineImage';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = props => {
  return (
    <Layout>
      <SEO
        title={props.pageContext.title}
        keywords={props.pageContext.keywords}
      />
      <ReactMarkdown
        source={props.pageContext.markdown}
        renderers={{
          image: imageProps => {
            return <AsyncLoadInlineImage {...imageProps} />;
          },
        }}
      />
    </Layout>
  );
};

export default IndexPage;
