const path = require('path');

const template = path.resolve('./src/templates/page.js');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    type
                  }
                  rawMarkdownBody
                  html
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
          return;
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          if (node.frontmatter.path) {
            createPage({
              path: node.frontmatter.path,
              component: template,
              context: {
                markdown: node.rawMarkdownBody,
                html: node.html,
              },
            });
          }
        });
      }),
    );
  });
};
