import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Yo Dawg</h1>
    <p>This is some Gatsby shizzle.</p>
    <p>Now go build something wunderbar.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Here's <Link to="/page-2/">page 2</Link>...</p>
  </Layout>
)

export default IndexPage
