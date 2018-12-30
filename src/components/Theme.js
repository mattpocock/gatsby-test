import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

/* eslint-disable react/prop-types */
export default ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: { type: { eq: "config" } }) {
            id
            frontmatter {
              primaryColor
              bodyTextColor
              headerTextColor
              bodyFontFamily
              headerFontFamily
            }
          }
        }
      `}
      render={data => {
        const theme = data.markdownRemark.frontmatter;
        return children(theme);
      }}
    />
  );
};
