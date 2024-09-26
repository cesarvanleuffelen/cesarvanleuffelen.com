import Image from "next/image";
import Box from "./components/Box";
import { kanit } from "./fonts/fonts";
import { IoMenu } from "react-icons/io5";
import Kpi from "./components/kpi";
import Info from "./components/Info";
import Socials from "./components/Socials";
import TextBlock from "./components/TextBlock";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[62fr_37fr] p-4 gap-4 overflow-hidden">
      {/* Top section */}
      <div className="grid grid-cols-12 gap-4 h-full">
        {/* Top left (Quote and Metrics) */}
        <div id="container1" className="col-span-5 grid grid-rows-[60%_auto] gap-4">
          {/* Quote */}
          <div id="quote">
            <Box>
              <h2 className={kanit.className + " text-7xl"}>'You miss 100% of the shots you don't take'</h2>
              <h2 className="text-gray-500 text-xl">- Wayne Gretzky</h2>
              {/* let's talk button */}
              <a className="bg-customb p-3 text-xl rounded-md absolute bottom-5 right-5">Let's talk 👋</a>
            </Box>
          </div>
          {/* 3 Metrics */}
          <div id="container2" className="grid grid-cols-3 gap-4">
            {/* green */}
            <div id="green">
              <Box bgColor="bg-customg">
                <Kpi big="2+" description="Years Experience"/>
              </Box>
            </div>
            {/* yellow */}
            <div id="yellow">
              <Box bgColor="bg-customy">
                <Kpi big="5+" description="projects"/>
              </Box>
            </div>
            {/* red */}
            <div id="red">
              <Box bgColor="bg-customr">
                <Kpi big="4+" description="clients"/>
              </Box>
            </div>
          </div>
        </div>

        {/* Top right (Navbar, Photo, and Info) */}
        <div className="col-span-7 grid grid-rows-[auto_1fr] gap-4">
          {/* Navbar */}
          <div>
            <Box>
              <div className="flex justify-between items-center h-full px-2">
                <h1 className={kanit.className + " text-xl font-bold text-gray-200"}><span className="text-customb">César</span> Van Leuffelen</h1>
                <div className="cursor-pointer">
                  <IoMenu
                    size={35}
                  />
                </div>
              </div>
            </Box>
          </div>

          {/* Photo and Info */}
          <div className="grid grid-cols-2 gap-4">
            {/* Photo */}
            <div>
              <Box bgColor="bg-customb">
                <h2>Photo</h2>
              </Box>
            </div>

            {/* Name, Location, Age */}
            <div className="grid grid-rows-[auto_auto_5fr] gap-4">
              {/* name */}
              <div>
                <Box>
                  <Info value="César Van Leuffelen" title="Name:"/>
                </Box>
              </div>
              {/* age */}
              <div>
                <Box>
                  <Info value="20" title="Age:"/>
                </Box>
              </div>
              {/* socials */}
              <div>
                <Box>
                  <Socials/>
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
            <TextBlock title="Portfolio" more="See All" url="#">
              <div className="flex justify-around h-full">
                <div className="bg-slate-300 w-1/4 h-2/3 rounded-xl">
                  <p>project 1</p>
                </div>
                <div className="bg-slate-300 w-1/4 h-2/3 rounded-xl">
                  <p>project 2</p>
                </div>
                <div className="bg-slate-300 w-1/4 h-2/3 rounded-xl">
                  <p>project 3</p>
                </div>
              </div>
            </TextBlock>
          </Box>
        </div>

        {/* Bottom right (About me) */}
        <div className="col-span-5">
          <Box>
            <TextBlock title="About" more="Resume" url="#">
              <p></p>
            </TextBlock>
          </Box>
        </div>
      </div>
    </div>
  );
}

