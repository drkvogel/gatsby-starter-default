import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>This is page 2</p>
    <p>Go <Link to="/">back</Link> to the homepage</p>
  </Layout>
)

export default SecondPage
