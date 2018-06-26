import { ArtworkFilterArtworks_filtered_artworks } from "__generated__/ArtworkFilterArtworks_filtered_artworks.graphql"
import ArtworkGrid from "Components/ArtworkGrid"
import * as React from "react"
import { createRefetchContainer, graphql, RelayRefetchProp } from "react-relay"
import { PaginationFragmentContainer as Pagination } from "Styleguide/Components/Pagination"
import { Flex } from "Styleguide/Elements/Flex"
import { Spacer } from "Styleguide/Elements/Spacer"
import { Subscribe } from "unstated"
import { FilterState } from "./ArtworkFilterState"

interface Props {
  filtered_artworks: ArtworkFilterArtworks_filtered_artworks
  relay: RelayRefetchProp
  artistID: string
  columnCount: number
}

const PAGE_SIZE = 10

class Artworks extends React.Component<Props> {
  loadPrev = () => {
    const {
      startCursor,
      hasPreviousPage,
    } = this.props.filtered_artworks.artworks.pageInfo
    if (hasPreviousPage) {
      this.loadBefore(startCursor)
    }
  }

  loadNext = () => {
    const {
      hasNextPage,
      endCursor,
    } = this.props.filtered_artworks.artworks.pageInfo
    if (hasNextPage) {
      this.loadAfter(endCursor)
    }
  }

  loadBefore(cursor) {
    this.props.relay.refetch(
      {
        first: null,
        before: cursor,
        filteredArtworksNodeID: this.props.filtered_artworks.__id,
        after: null,
        last: PAGE_SIZE,
      },
      null,
      error => {
        if (error) {
          console.error(error)
        }
      }
    )
  }

  loadAfter = cursor => {
    this.props.relay.refetch(
      {
        first: PAGE_SIZE,
        after: cursor,
        filteredArtworksNodeID: this.props.filtered_artworks.__id,
        before: null,
        last: null,
      },
      null,
      error => {
        if (error) {
          console.error(error)
        }
      }
    )
  }

  render() {
    return (
      <Subscribe to={[FilterState]}>
        {filters => {
          return (
            <div>
              <ArtworkGrid
                artworks={this.props.filtered_artworks.artworks as any}
                columnCount={this.props.columnCount}
                itemMargin={40}
              />

              <Spacer mb={4} />

              <Flex justifyContent="flex-end">
                <Pagination
                  pageCursors={
                    this.props.filtered_artworks.artworks.pageCursors as any
                  }
                  onClick={this.loadAfter}
                  onNext={this.loadNext}
                  onPrev={this.loadPrev}
                  scrollTo="#jump--artistArtworkGrid"
                />
              </Flex>
            </div>
          )
        }}
      </Subscribe>
    )
  }
}

export default createRefetchContainer(
  Artworks,
  {
    filtered_artworks: graphql`
      fragment ArtworkFilterArtworks_filtered_artworks on FilterArtworks
        @argumentDefinitions(
          first: { type: "Int", defaultValue: 10 }
          after: { type: "String", defaultValue: "" }
        ) {
        __id
        artworks: artworks_connection(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
            startCursor
            hasPreviousPage
          }
          pageCursors {
            ...Pagination_pageCursors
          }
          ...ArtworkGrid_artworks
          edges {
            node {
              __id
            }
          }
        }
      }
    `,
  },
  graphql`
    query ArtworkFilterArtworksQuery(
      $filteredArtworksNodeID: ID!
      $first: Int!
      $after: String
    ) {
      node(__id: $filteredArtworksNodeID) {
        ...ArtworkFilterArtworks_filtered_artworks
          @arguments(first: $first, after: $after)
      }
    }
  `
)