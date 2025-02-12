import React from "react";
import { Footer } from "flowbite-react";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import LazyImage from "../Loading/LazyImage";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

function FooterCom() {
  return (
    <Footer container className="bg-gray-800 text-white">
      <div className="w-full max-w-8xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-8 px-6 mb-10">
          {/* Logo Section */}
          <div className="flex justify-center sm:justify-start">
            <LazyImage src="/logo.png" alt="Logo" style={{ height: 110 }} />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-1 sm:col-span-3 sm:grid-cols-3 sm:gap-2">
            <div className="space-y-2 mb-10">
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col className="space-y-2">
                <Footer.Link
                  className="no-underline"
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="tel: +91 9569501586"
                  target="_blank"
                >
                  WhatsApp
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/company/amrit-organics-jaipur/"
                  className="no-underline"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/amrit_organics?igsh=YXN0NHZhM3VrZGY3"
                  className="no-underline"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className="space-y-2 mb-10">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col className="space-y-2">
                <Link to="/privacyPolicy" style={{textDecoration: "none", color: "inherit"}}>Privacy Policy</Link>
                <Link to='/terms&condition' style={{textDecoration: "none", color: "inherit"}}>Terms & Conditions</Link>
              </Footer.LinkGroup>
            </div>

            <div className="space-y-2">
              <Footer.Title title="Contact Us" />
              <Footer.LinkGroup col className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-white" />
                  <Footer.Link
                    href="tel: +91 9569501586"
                    target="_blank"
                    className="no-underline"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    +91 9569501586
                  </Footer.Link>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-white" />
                  <Footer.Link
                    href="mailto:sales@amritorganics.in"
                    target="_blank"
                    className="no-underline"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    sales@amritorganics.in
                  </Footer.Link>
                </div>
                <div className="flex items-start space-x-2">
                  <FaMapMarkerAlt className="text-white" />
                  <Footer.Link
                    className="no-underline"
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="https://maps.app.goo.gl/3hhroCrdKXdrAwdw8"
                    target="_blank"
                  >
                    <div>
                      Amrit Organics Plant,
                      <br />
                      Baramsar Fanta, Ramgarh Road, Jaisalmer-345001, <br />
                      Rajasthan, India
                    </div>
                  </Footer.Link>
                </div>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="w-full flex flex-col sm:flex sm:flex-row sm:items-center sm:justify-center py-4 px-6 lg:px-16 xl:px-20 border-t border-gray-700 bg-gray-1000 gap-48">
          <Footer.Copyright
            by="Amrit Organics™ All Right Reserved"
            year={2024}
            className="mt-4 mb-2 sm:mt-0 flex justify-center sm:justify-center space-x-6 flex-1"
          />
          <div className="mt-4 sm:mt-0 flex items-center justify-center gap-4 mb-2">
            <Footer.Icon
              href="tel: +91 9569501586"
              target="_blank"
              icon={BsWhatsapp}
            />
            <Footer.Icon target="_blank" href="https://www.instagram.com/amrit_organics?igsh=YXN0NHZhM3VrZGY3" icon={BsInstagram} />
            <Footer.Icon href="https://www.linkedin.com/company/amrit-organics-jaipur/" target="_blank" icon={BsLinkedin} />

            <Link to="/admin/login">
              <IconButton>
                <Lock style={{color: "#565B66"}}/>
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;

{
  /*  <Footer.Divider className="border-gray-700" /> */
}
