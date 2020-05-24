import React from "react"

import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-two'
import HeroArea from '../containers/index-appointment/hero-area'
import ServicesArea from '../containers/index-appointment/services-area'
import TabsArea from '../containers/index-appointment/tabs-area'

import CTAArea from '../containers/global/cta-area/section-two'
import CaseStudyArea from '../containers/index-appointment/case-study-area'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import FunFactArea from '../containers/global/funfact-area/section-one'

import GradationArea from '../containers/index-services/gradation-area'
import ContactArea from '../containers/global/contact-area/contact-four'
import ClientsArea from '../containers/global/clients-area'
import { Grid, SimpleCard } from '@horacioh/gatsby-theme-instagram'

// removed until content writing <TabsArea/> <CTAArea/> <CaseStudyArea/> <TestimonialArea/>  <Footer/>
const IndexPage = ({location}) => (
  <Layout location={location}>
        <Header/>
    <main className="site-wrapper-reveal">
      <HeroArea/>
      <GradationArea />
      



<Grid card={SimpleCard} />
      <ServicesArea/>      
      <FunFactArea/>
      <ClientsArea />
      <ContactArea />      
    </main>
   
  </Layout>
)

export default IndexPage
 