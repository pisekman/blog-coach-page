import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      <article>
      Pariatur nulla esse irure ut excepteur aute adipisicing non aliquip.
      Pariatur nulla esse irure ut excepteur aute adipisicing non aliquip.
      Pariatur nulla esse irure ut excepteur aute adipisicing non aliquip.

      </article>
    {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
          <h2>
          <Link to={`/blog/${node.slug}`}>
            {node.frontmatter.title}
          </Link>
        </h2>
        <p>Posted: {node.frontmatter.date}</p>

          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        slug
      }
    }
  }
`

export default BlogPage