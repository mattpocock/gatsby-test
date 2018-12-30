import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = props => {
  return (
    <Layout>
      <SEO
        title={props.pageContext.title}
        keywords={props.pageContext.keywords}
      />
      <div dangerouslySetInnerHTML={{ __html: props.pageContext.html }} />
    </Layout>
  );
};

export default IndexPage;
