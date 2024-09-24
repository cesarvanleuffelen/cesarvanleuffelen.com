import Image from "next/image";
import Box from "./components/Box";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[55fr_45fr] p-4 gap-4 overflow-hidden">
      {/* Top section */}
      <div className="grid grid-cols-12 gap-4 h-full">
        {/* Top left (Quote and Metrics) */}
        <div id="container1" className="col-span-5 grid grid-rows-[60%_auto] gap-4">
          {/* Quote */}
          <div id="quote">
            <Box>
              <h1>quote</h1>
            </Box>
          </div>
          {/* 3 Metrics */}
          <div id="container2" className="grid grid-cols-3 gap-4">
            {/* green */}
            <div id="green">
              <Box>
                <h1>green</h1>
              </Box>
            </div>
            {/* yellow */}
            <div id="yellow">
              <Box>
                <h1>yellow</h1>
              </Box>
            </div>
            {/* red */}
            <div id="red">
              <Box>
                <h1>red</h1>
              </Box>
            </div>
          </div>
        </div>

        {/* Top right (Navbar, Photo, and Info) */}
        <div className="col-span-7 grid grid-rows-[auto_1fr] gap-4">
          {/* Navbar */}
          <div>
            <Box>
              <h1>Navbar</h1>
            </Box>
          </div>

          {/* Photo and Info */}
          <div className="grid grid-cols-2 gap-4">
            {/* Photo */}
            <div>
              <Box bgColor="bg-custom-blue">
                <h1>Photo</h1>
              </Box>
            </div>

            {/* Name, Location, Age */}
            <div className="grid grid-rows-3 gap-4">
              {/* name */}
              <div>
                <Box>
                  <h1>name</h1>
                </Box>
              </div>
              {/* location */}
              <div>
                <Box>
                  <h1>age</h1>
                </Box>
              </div>
              {/* age */}
              <div>
                <Box>
                  <h1>location</h1>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-12 gap-4">
        {/* Bottom left (Portfolio) */}
        <div className="col-span-7">
          <Box>
            <h1>portfolio</h1>
          </Box>
        </div>

        {/* Bottom right (About me) */}
        <div className="col-span-5">
          <Box>
            <h1>About me</h1>
          </Box>
        </div>
      </div>
    </div>
  );
}

