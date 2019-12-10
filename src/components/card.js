import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Card = () => (
  <StaticQuery
    query={graphql`
    allRssFeedCatDocuments {
      edges {
        node {
          ...
        }
      }
    }
    `}
    render={
      data => (
        <div className="mdc-card">
          <div className="mdc-card__primary-action">
            <div className="mdc-card__media mdc-card__media--square">
              <div className="mdc-card__media-content">Title</div>
            </div>
          </div>
          <div className="mdc-card__actions">
            <div className="mdc-card__action-buttons">
              <button className="mdc-button mdc-card__action mdc-card__action--button">
                <span className="mdc-button__label">Action 1</span>
              </button>
              <button className="mdc-button mdc-card__action mdc-card__action--button">
                <span className="mdc-button__label">Action 2</span>
              </button>
            </div>
            <div className="mdc-card__action-icons">
              <button
                className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                title="Share"
              >
                share
              </button>
              <button
                className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                title="More options"
              >
                more_vert
              </button>
            </div>
          </div>
        </div>
      )
      // console.log(data)
    }
  />
)
export default Card
