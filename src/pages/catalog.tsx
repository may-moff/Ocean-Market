import React, { ReactElement } from 'react'
import Catalog from '../components/pages/Catalog/Catalog'
import Page from '../components/templates/Page'
import { graphql, PageProps } from 'gatsby'

export default function PageGatsbyCatalog(props: PageProps): ReactElement {
  const content = (props.data as any).content.edges[0].node.childPagesJson
  const { title, description } = content

  return (
    <Page title={title} description={description} uri={props.uri}>
      <Catalog />
    </Page>
  )
}
export const contentQuery = graphql`
  query CatalogPageQuery {
    content: allFile(filter: { relativePath: { eq: "pages/catalog.json" } }) {
      edges {
        node {
          childPagesJson {
            title
            description
          }
        }
      }
    }
  }
`
