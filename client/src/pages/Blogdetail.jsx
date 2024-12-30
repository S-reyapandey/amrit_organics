import { Breadcrumbs, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Blogdetail() {
  return (
    <div  className="px-4 mb-20">
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
              Blogs
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
              <Typography sx={{ color: "#fff" }}>Blogs</Typography>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      
      
    </Stack>
  </div>
  )
}

export default Blogdetail
