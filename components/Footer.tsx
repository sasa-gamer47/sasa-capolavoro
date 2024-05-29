import React from 'react'

const Footer = () => {
  return (

    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold mb-4">Company Name</h2>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus eget nunc tincidunt laoreet.</p>
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <ul className="list-none">
                <li className="mb-4">
                    <a href="tel:555-555-5555" className="text-gray-400 hover:text-white">555-555-5555</a>
                </li>
                <li className="mb-4">
                    <a href="mailto:omma.francesco@iismariapia.edu.it" className="text-gray-400 hover:text-white">omma.francesco@iismariapia.edu.it</a>
                </li>
                <li className="mb-4">
                    <a href="#https://www.companyname.com" className="text-gray-400 hover:text-white">www.companyname.com</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

