import { Link, StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Theme from './Theme';

const Header = ({ siteTitle }) => (
  <Theme>
    {({ primaryColor }) => (
      <div
        style={{
          background: primaryColor,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h3>
          <StaticQuery
            query={graphql`
              {
                allMarkdownRemark(limit: 1000) {
                  edges {
                    node {
                      id
                      frontmatter {
                        title
                        path
                        type
                      }
                    }
                  }
                }
              }
            `}
            render={data => (
              <Nav>
                {data.allMarkdownRemark.edges
                  .filter(({ node }) => node.frontmatter.type !== 'config')
                  .map(({ node }) => (
                    <h4 key={node.id} style={{ margin: 10 }}>
                      <Link
                        style={{
                          color: `white`,
                          textDecoration: `none`,
                        }}
                        to={node.frontmatter.path}
                      >
                        {node.frontmatter.title}
                      </Link>
                    </h4>
                  ))}
              </Nav>
            )}
          />
        </div>
      </div>
    )}
  </Theme>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

const Nav = styled.nav`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  @media (max-width: 450px) {
    mask-image: -webkit-linear-gradient(
      to right,
      transparent,
      black 20px,
      black 90%,
      transparent
    );
    mask-image: -moz-linear-gradient(
      to right,
      transparent,
      black 20px,
      black 90%,
      transparent
    );
    mask-image: linear-gradient(
      to right,
      transparent,
      black 20px,
      black 90%,
      transparent
    );
    -webkit-mask-image: -webkit-linear-gradient(
      to right,
      transparent,
      black 20px,
      black 90%,
      transparent
    );
    -webkit-mask-image: -moz-linear-gradient(
      to right,
      transparent,
      black 20px,
      black 90%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 20px,
      black 90%,
      transparent
    );
  }
`;
