import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Seo, Table } from "../components/index"
import { OutboundLink } from "gatsby-plugin-google-gtag"
/* 
  Renders a shop table via Airtable
*/
const ShopPage = ({ data }) => {
  const allAirtableData = data.allAirtable.edges
  const flattenedData = allAirtableData?.map(({ node }) => node.data)
  const memoData = React.useMemo(() => flattenedData, [flattenedData])

  console.log(memoData)

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: row => <p>{row.URL ? <OutboundLink  target="_blank" className="block" href={row.URL}>{row.ID}</OutboundLink> : <>{row.ID}</>}</p>,
      },
      {
        Header: "Title",
        accessor: row => <p className="truncate">{row.URL ? <OutboundLink  target="_blank" className="block" href={row.URL}>{row.Title}</OutboundLink> : <>{row.Title}</>}</p>,
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
        accessor: row => {
          return (
            <div className="text-right md:text-left">
              {row.Status === "Available" ? (
                <p>{row.URL ? <OutboundLink  className="block" target="_blank" href={row.URL}>${row.Price}</OutboundLink> : <>${row.Price}</>}</p>
              ) : (
                <s className="text-right block md:text-left">${row.Price}</s>
              )}
            </div>
          )
        },
      },
      {
        Header: "Status",
        accessor: row => (
          <span>
            {row.Status === "Available" ? (
              <>
                {row.URL ? (
                  <OutboundLink  className="group" href={row.URL} target="_blank" title="Purchase">
                    {/* <span className="group-hover:hidden">I</span> */}
                    <span className="block">Purchase</span>
                  </OutboundLink>
                ) : (
                  <OutboundLink  href="mailto:daphne@jingdaily.com" target="_blank" title="Inquire">Inquire</OutboundLink>
                )}
              </>
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
        <div className="mb-4">
          <h1 className="text-xl lg:text-3xl text-center ">
            The Louis Vuitton×Supreme Collection
          </h1>
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
            URL
          }
        }
      }
    }
  }
`

export default ShopPage
