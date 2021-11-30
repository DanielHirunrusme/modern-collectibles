import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Seo, Table } from "../components/index"

/* 
  Renders a shop table via Airtable
*/
const ShopPage = ({ data }) => {
  const allAirtableData = data.allAirtable.edges
  const flattenedData = allAirtableData?.map(({ node }) => node.data)
  const memoData = React.useMemo(() => flattenedData, [flattenedData])

  const testData = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  )

  const testColumns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "ID",
      },
      {
        Header: "Title",
        accessor: row => (<span className="uppercase">{row.Title}</span>)
      },
      // {
      //   Header: "Collection",
      //   accessor: "Collection",
      // },
      // {
      //   Header: "Year",
      //   accessor: "Year",
      // },
      {
        Header: "Price",
        accessor: row => <span>${row.Price}</span>,
      },
      {
        Header: "Status",
        accessor: row => (
          <span>
            {row.Status === "Available" ? (
              <a className="group" href="https://www.google.com">
                {/* <span className="group-hover:hidden">I</span> */}
                <span className="block">Purchase</span>
              </a>
            ) : (
              <s>Sold</s>
            )}
          </span>
        ),
      },
    ],
    []
  )

  return (
    <Layout>
      <Seo title="Shop" />
      <div id="Shop" className="pt-20 max-w-6xl mx-auto">
        <div className="pb-20">
          {/* <h1 className="md:text-base uppercase">Louis Vuitton x Supreme</h1> */}
          {/* <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et.</p> */}
         </div>
        <Table columns={columns} data={memoData} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allAirtable {
      edges {
        node {
          data {
            Collection
            ID
            Price
            Status
            Year
            Title
          }
        }
      }
    }
  }
`

export default ShopPage