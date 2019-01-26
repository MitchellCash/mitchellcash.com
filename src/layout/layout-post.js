import React from 'react'
import { graphql } from 'gatsby'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FaRegClock } from 'react-icons/fa'
import Layout from './layout'
import styles from './layout-post.module.css'
import SEO from '../components/site-metadata'

export default ({ data }) => {
  const post = data.markdownRemark
  const pageTitle = post.frontmatter.title + ' - ' + data.site.siteMetadata.title

  return (
    <Layout>
      <SEO
        title={pageTitle}
        description={post.excerpt}
        pathname={post.fields.slug}
        article
      />
      <Row>
        <Col lg="2"></Col>
        <Col xs={12} lg={8}>
          <article className={styles.postContent}>
            <h1 className="">{post.frontmatter.title}</h1>
            <p className={styles.postDate}><small className="text-muted mb-4">{post.frontmatter.date} | <FaRegClock /> {post.fields.readingTime.text}</small></p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </Col>
        <Col lg="2"></Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "D MMM YYYY")
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
