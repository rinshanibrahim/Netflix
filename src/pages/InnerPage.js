import React from 'react'
import InnerBanner from '../components/InnerBanner/InnerBanner'
import CardSection from '../components/CardSection/CardSection'
import cardSectionData from '../constants/cardSectionData.json'
import CardData from '../constants/CardData.json'
import Horror from '../constants/Horror.json'
import Drama from '../constants/Drama.json'
import Comedy from '../constants/Comedy.json'
import Footer from '../components/Footer/Footer'

const InnerPage = () => {
  return (
    <div>
      <InnerBanner/>
      <CardSection data={cardSectionData} />
      <CardSection data={CardData} />
      <CardSection data={Horror} />
      <CardSection data={Drama} />
      <CardSection data={Comedy} />
      <Footer/>
    </div>
  )
}

export default InnerPage