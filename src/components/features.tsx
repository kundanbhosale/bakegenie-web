import React from 'react'
import FeatureCard from './featureCard'

const Features = () => {
  return (
    <>
      <div className='mx-auto my-36 max-w-screen-2xl'>
        <h2 className='mb-8 text-center text-primary-800 lg:text-left'>
          Features
        </h2>
        <div className='gap-16 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
          <FeatureCard
            image='/openmessage.png'
            title='AI-Powered Message Responses'
            description='Our software utilizes advanced AI algorithms to automatically respond to
        customer messages on platforms like WhatsApp, Facebook, and Instagram.
        Save time and provide instant assistance to your customers.'
          />

          <FeatureCard
            width={90}
            height={90}
            image='/graph.png'
            title='Order Data Collection'
            description='The software intelligently extracts order information from customer messages, eliminating the need for manual data entry. It automatically captures details such as product, quantity, delivery preferences, and more.'
          />

          <FeatureCard
            width={85}
            height={85}
            image='/laptop.png'
            title='Centralized Dashboard'
            description='Access all customer inquiries and order data in one convenient dashboard. Stay organized and never miss an important message or order request.'
          />

          <FeatureCard
            image='/bulb.png'
            title='Custom Order Management'
            description='Provide guidelines for custom orders, and our software can handle the process seamlessly. It understands customer requests from comments and messages, allowing you to approach potential customers interested in custom orders.'
          />
          <FeatureCard
            image='/search.png'
            width={65}
            height={65}
            title='Streamlined Order Tracking'
            description='Keep track of all your orders efficiently. Our software provides real-time updates on order status, ensuring smooth fulfillment and delivery processes.'
          />
          <FeatureCard
            image='/person.png'
            width={60}
            height={60}
            title='Personalized Customer Experience'
            description='With AI integration, our software can learn customer preferences and provide personalized responses, creating a more engaging and satisfying experience for your bakery customers.'
          />
        </div>
      </div>
    </>
  )
}

export default Features
