import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products : allDatoCmsProduct {
          edges {
            node {
              id
              description
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        Entrees : allDatoCmsProductCopy2 {
          edges {
            node {
              id
              description
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        Plats : allDatoCmsProductCopy3 {
          edges {
            node {
              id
              description
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        Desserts : allDatoCmsProductCopy1 {
          edges {
            node {
              id
              description
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={(data) => (
      <Layout site={data.site}>
      
        <p0 className="category">Menu végétarien</p0><br />
        <p1 className="category">Entrées</p1>
        <div className="Catalogue">
          {data.Entrees.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div>
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div>{" "}
                <div className="Product__description">
                  {product.description}
                </div><br />
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price} €</div>
                  </div>
                  <button
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`https://jevendstout.netlify.app/`}
                  >
                    Ajouter au panier
                  </button>                 
                </div>
              </div>
            </div>
          ))}
        </div><p1 className="category">Plats</p1>
        <div className="Catalogue">
          {data.Plats.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div>
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div>{" "}
                <div className="Product__description">
                  {product.description}
                </div><br />
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price} €</div>
                  </div>
                  <button
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`https://jevendstout.netlify.app/`}
                  >
                    Ajouter au panier
                  </button>                 
                </div>
              </div>
            </div>
          ))}
        </div>
        <p1 className="category">Desserts</p1>
        <div className="Catalogue">
          {data.Desserts.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div>
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div>{" "}
                <div className="Product__description">
                  {product.description}
                </div><br />
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price} €</div>
                  </div>
                  <button
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`https://jevendstout.netlify.app/`}
                  >
                    Ajouter au panier
                  </button>                 
                </div>
              </div>
            </div>
            ))}
        </div>
        <h4 className="category">Bric à Brac</h4>
        <div className="Catalogue">
          {data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div>
                <div className="Product__image">
                  <Img sizes={product.image.sizes} />
                </div>{" "}
                <div className="Product__description">
                  {product.description}
                </div><br />
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price} €</div>
                    </div>
                  <button
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url={`https://jevendstout.netlify.app/`}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>         
      </Layout>
    )}
  />
);
