import React from 'react'
import { graphql } from 'gatsby'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FaEnvelopeSquare, FaGithubSquare, FaHackerNewsSquare } from 'react-icons/fa'
import Layout from '../layout/layout'
import styles from './contact.module.css'
import SEO from '../components/site-metadata'

export default ({ data }) => (
  <Layout>
    <SEO
      title={'Contact - ' + data.site.siteMetadata.title }
    />
    <Row>
      <Col lg="2"></Col>
      <Col xs={12} lg={8}>
        <Row>
          <Col>
            <h1 className="display-4">Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Howdy, I'm Mitchell Cash and here is how to contact me:</p>
            <ul className="list-unstyled ml-0">
              <li>
                <FaEnvelopeSquare className="mr-2"/>
                <a className={styles.contactLink} href="mailto:mitchell@mitchellcash.com">mitchell@mitchellcash.com</a>
                <noscript>Email address protected from spambots; use a JavaScript-enabled browser to see it.</noscript>
              </li>
              <li>
                <FaGithubSquare className="mr-2" />
                <a className={styles.contactLink} href="https://github.com/mitchellcash ">GitHub</a>
              </li>
              <li>
                <FaHackerNewsSquare className="mr-2" />
                <a className={styles.contactLink} href="https://news.ycombinator.com/user?id=MitchellCash">Hacker News</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
      <Col lg="2"></Col>
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
