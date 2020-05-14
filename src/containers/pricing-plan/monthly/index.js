import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col } from '../../../components/ui/wrapper'
import PricingTable from '../../../components/ui/pricing-table/layout-one'

const MonthlPricing = () => {
    const getMonthlyPricing = useStaticQuery(graphql`
        query GET_MONTHLY_PRICING {
            pricingJson(period: {eq: "monthly"}) {
                period
                items {
                    id
                    title
                    price 
                    is_featured
                    path
                    features {
                        id
                        text
                    }
                    image {
                        childImageSharp {
                            fixed(width: 90, height: 90, quality: 100) {
                                ...GatsbyImageSharpFixed_tracedSVG
                            }
                        }
                    }
                }
            }
        } 
    `)
    const { pricingJson: { period, items: pricings } } = getMonthlyPricing;
    return (
        <Row>
            {pricings && pricings.map(pricing => (
                <Col lg={4} md={6} key={pricing.id}>
                    <PricingTable
                        period={period}
                        title={pricing.tiele}
                        price={pricing.price}
                        path={pricing.path}
                        features={pricing.features}
                        image={pricing.image}
                        isFeatured={pricing.is_featured}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default MonthlPricing
