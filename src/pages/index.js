import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  font-weight: 600;

  a {
    padding-bottom: 1rem;
  }
`
//#043C51
//#18627C
//#2F8AAA
//#A6CBD8
//#E1F1F7

export const Date = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  color: #82888a;
  font-size: 1rem;
`

const Post = styled.div`
  padding-bottom: 0.5rem;
  box-shadow: 0 3px 2px -2px hsla(0, 0%, 0%, 0.2);
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    console.log("this.props", this.props)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Latest posts" keywords={[`blog`, `food`, `systems`]} />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Post key={node.fields.slug}>
              <Title>
                <Link to={node.fields.slug}>{title}</Link>
              </Title>
              <Date>{node.frontmatter.date}</Date>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </Post>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
