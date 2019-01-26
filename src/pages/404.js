import React from 'react'
import { graphql } from 'gatsby'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Layout from '../layout/layout'
import SEO from '../components/site-metadata'

export default ({ data }) => (
  <Layout>
    <SEO
      title={'404 - ' + data.site.siteMetadata.title }
    />
    <Row>
      <Col>
        <h1 className="display-4 text-center">The page you’re looking for can’t be found.</h1>
      </Col>
    </Row>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
