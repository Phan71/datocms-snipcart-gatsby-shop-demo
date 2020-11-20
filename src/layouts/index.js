import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap" >
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">
                🛍 MA COMMANDE 🛍
              </div>
              <div className="Header__summary__line">
                Nombre d'article: <span className="snipcart-total-items"></span>
              </div>
              <div className="Header__summary__line">
                TOTAL à payer: <span className="snipcart-total-price"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrap" >
        {children}
      </div>
      <div className="Wrap" >
        <div className="Footer">
          Ma boutique en ligne "Je Vends Tout" <br /> 
          Pour commander <a href="https://jevendstout.netlify.app/">https://jevendstout.netlify.app</a><br />
          Email :  <a href="sss.rrr@gmail.com">sss.rrr@gmail</a><br />
          numéro de tétéplone : 99 99 99 99 99
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

