import { LocationOn, Mail, Phone } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const formInitialDetails = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormData({
      ...formData,
      [category]: value,
    });
  };

  useEffect(() => {
    let timeoutId;
    if(status.message){
      timeoutId = setTimeout(() => {
        setStatus({});
      }, 5000);
    }
    return () => {
      if(timeoutId){
        clearTimeout(timeoutId);
      }
    } ;
  }, [status.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormData(formInitialDetails);
    if(result.code == 200){
      setStatus({success: true, message: 'Message sent successfully.'});
    }else{
      setStatus({success: false, message: 'Failed to send message.'});
    }
  };
  return (
    <div className="container mx-auto px-4 mb-16">
      <Stack spacing={6}>
        {/*Header Section */}
        <div className="relative mb-8">
          {/*Image Container */}
          <div className="relative">
            <img
              src="/other.png"
              alt="headerImage"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
              <h1
                className="text-white text-6xl font-bold slide-in mb-4"
                style={{ fontFamily: "Signika" }}
              >
                Contact Us
              </h1>
              <Breadcrumbs
                className="slide-in"
                aria-label="breadcrumb"
                sx={{
                  "& .MuiBreadcrumbs-separator": {
                    color: "white",
                  },
                }}
              >
                <Link
                  to="/"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Amrit Organics
                </Link>
                <Typography sx={{ color: "#fff" }}>Contact Us</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/*Contact information */}
        <div className="container mx-auto px-4 mb-12">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {/*Phone */}
            <Box>
              <Card
                sx={{
                  bgcolor: "#4BAF47",
                  borderRadius: "8px",
                  color: "#000",
                  height: "100%",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "20px", sm: "25px", md: "28px" },
                    "&:last-child": {
                      paddingBottom: { xs: "20px", sm: "25px", md: "28px" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.7,
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "1.1rem",
                        marginBottom: "9px",
                      }}
                    >
                      <IconButton style={{ color: "#fff" }}>
                        <Phone />
                      </IconButton>
                    </Box>

                    <Typography
                      variant="h2"
                      component="div"
                      gutterBottom
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
                        marginBottom: 1.4,
                        fontWeight: 530,
                        fontFamily: "Signika",
                        color: "#000",
                      }}
                    >
                      Contact
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "0.830rem",
                        sm: "0.840rem",
                        md: "0.880rem",
                        lg: "0.895rem",
                      },
                      fontFamily: "Roboto",
                      lineHeight: "1.6",
                    }}
                  >
                    <a href="tel: +91 95695 01586" target="_blank">
                      +91 9569501586
                    </a>
                    <br />
                    <a href="tel: +91 9755257790" target="_blank">
                      +91 97552 57790
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            {/*Mail */}
            <Box>
              <Card
                sx={{
                  bgcolor: "#C5CE38",
                  borderRadius: "8px",
                  color: "#000",
                  height: "100%",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "20px", sm: "25px", md: "28px" },
                    "&:last-child": {
                      paddingBottom: { xs: "20px", sm: "25px", md: "28px" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.7,
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "1.1rem",
                        marginBottom: "9px",
                      }}
                    >
                      <IconButton style={{ color: "#fff" }}>
                        <Mail />
                      </IconButton>
                    </Box>

                    <Typography
                      variant="h2"
                      component="div"
                      gutterBottom
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
                        marginBottom: 1.4,
                        fontWeight: 530,
                        fontFamily: "Signika",
                        color: "#000",
                      }}
                    >
                      Mail
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "0.830rem",
                        sm: "0.840rem",
                        md: "0.880rem",
                        lg: "0.895rem",
                      },
                      fontFamily: "Roboto",
                      lineHeight: "1.6",
                    }}
                  >
                    <a href="mailto:sales@amritorganics.in" target="_blank">
                      sales@amritorganics.in
                    </a>
                    <br />
                    <a href="mailto:aman@amritorganics.in" target="_blank">
                      aman@amritorganics.in
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            {/*Address */}
            <Box>
              <Card
                sx={{
                  bgcolor: "#EEC044",
                  borderRadius: "8px",
                  color: "#000",
                  height: "100%",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "20px", sm: "25px", md: "28px" },
                    "&:last-child": {
                      paddingBottom: { xs: "20px", sm: "25px", md: "28px" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.7,
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "1.1rem",
                        marginBottom: "9px",
                      }}
                    >
                      <IconButton style={{ color: "#fff" }}>
                        <LocationOn />
                      </IconButton>
                    </Box>

                    <Typography
                      variant="h2"
                      component="div"
                      gutterBottom
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
                        marginBottom: 1.4,
                        fontWeight: 530,
                        fontFamily: "Signika",
                        color: "#000",
                      }}
                    >
                      Address
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "0.830rem",
                        sm: "0.840rem",
                        md: "0.880rem",
                        lg: "0.895rem",
                      },
                      fontFamily: "Roboto",
                      lineHeight: "1.6",
                    }}
                  >
                    <b>Plant Location : </b>
                    <a
                      href="https://maps.app.goo.gl/3hhroCrdKXdrAwdw8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      XVP7+55R Baramsar With Baisakh, Rajasthan
                    </a>
                    <br />
                    <b> Office Location :</b>
                    <a
                      href="https://maps.app.goo.gl/wvoMKXMXaQXpJtv7A"
                      target="_blank"
                    >
                      WR75+R38 Jaipur, Rajasthan
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
        </div>

        {/*Contact form */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-10 max-w-6xl mx-auto">
          <div className="rounded-xl flex flex-center justify-center  overflow-hidden shadow-lg h-[730px] hover:shadow-xl transition-shadow duration-300">
            <img
              src="/contact.png"
              alt="Contact Map"
              className="w-full h-full object-cover"
              style={{ height: 730 }}
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
              Get in Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                  value={formData.name}
                  onChange={(e) => onFormUpdate("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                  value={formData.email}
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                  value={formData.subject}
                  onChange={(e) => onFormUpdate("subject", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <input
                  type="tel"
                  placeholder="Your Phone number"
                  className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                  value={formData.phone}
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 hover:bg-gray-100 resize-none"
                  value={formData.message}
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50"
              >
                {buttonText}
              </button>
              {status.message && (
                <div className={`p-3 rounded-lg ${
                  status.success === false ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700' 
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default Contact;
