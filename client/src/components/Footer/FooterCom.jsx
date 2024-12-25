import React from 'react'
import { Footer } from "flowbite-react";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function FooterCom() {
  return (
    <Footer container className="bg-gray-800 text-white">
      <div className="w-full max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 py-8 px-6">
          {/* Logo Section */}
          <div className="flex justify-center sm:justify-start">
            <Footer.Brand
            href="#"
              src="../../../../src/assets/logo.png"
              alt="Amrit Organics Logo"
              width="150px"
            />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-8 sm:col-span-3 sm:grid-cols-3 sm:gap-6 ">
          
          
        <div className="space-y-2">
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col className="space-y-2">
              <Footer.Link href="#">WhatsApp</Footer.Link>
              <Footer.Link href="https://www.linkedin.com/company/amrit-organics-jaipur/">LinkedIn</Footer.Link>
              <Footer.Link href="#">Instagram</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div className="space-y-2">
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col className="space-y-2">
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
          <div className="space-y-2">
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-white" />
                  <Footer.Link href="tel: +91 9569501586" target='_blank'>+91 9569501586</Footer.Link>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-white" />
                  <Footer.Link href="mailto:sales@amritorganics.in" target='_blank'>sales@amritorganics.in</Footer.Link>
                </div>
                <div className="flex items-start space-x-2">
                  <FaMapMarkerAlt className="text-white" />
                  <Footer.Link href="https://maps.app.goo.gl/xAAT4BADbVacRKMd9" target='_blank'>
                    <div>
                      Amrit Organics Plant,<br/> Baramsar Fanta, 
                      Ramgarh Road, <br />Jaisalmer, Rajasthan
                    </div>
                  </Footer.Link>
                </div>
              </Footer.LinkGroup>
            </div>          

          </div>
        </div>
      
        {/* Social Media Icons */}
        <div className="w-full flex flex-col sm:flex sm:flex-row sm:items-center sm:justify-center py-4 px-6 lg:px-16 xl:px-20 border-t border-gray-700 bg-gray-1000">
          <Footer.Copyright href='#' by='Amrit Organics™ All Right Reserved' year={2024} className="mt-4 mb-2 sm:mt-0 flex justify-center sm:justify-center space-x-6 flex-1"/>
          <div className="mt-4 mb-2 sm:mt-0 flex justify-center sm:justify-center space-x-6 flex-1">
            <Footer.Icon href="#" icon={BsWhatsapp} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterCom;


{/*  <Footer.Divider className="border-gray-700" /> */}

