import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investers</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>It is a clone</p>
            <p>Get in Touch</p>
            <p>Paddy</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
            <p>Paddy</p>
            <p>Presents</p>
            <p>Airbnb Clone</p>
            <p>See Other Projects</p>
            <p>On My Github</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust and Safety</p>
            <p>Say Hi on LinkedIn</p>
            <p>Or My Portfolio</p>
            <p>Get in Touch</p>
        </div>
    </div>
  )
}

export default Footer