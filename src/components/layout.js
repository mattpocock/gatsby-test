import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import Theme from './Theme';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        markdownRemark(frontmatter: { type: { eq: "config" } }) {
          frontmatter {
            siteName
          }
        }
      }
    `}
    render={data => (
      <>
        <Theme>
          {theme => (
            <Container {...theme}>
              <Header siteTitle={data.markdownRemark.frontmatter.siteName} />
              <div
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: 0,
                }}
              >
                {children}
              </div>
            </Container>
          )}
        </Theme>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Container = styled.div`
  * {
    color: ${props => props.bodyTextColor};
    font-family: ${props => props.bodyFontFamily};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.headerTextColor};
    font-family: ${props => props.headerFontFamily};
  }
`;
