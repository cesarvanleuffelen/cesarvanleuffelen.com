import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "../components/Box";
import { IoMdPin } from "react-icons/io";
import ContactBox from "../components/ContactBox";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

export default function Contact() {
  return (
    <div className="min-h-screen h-screen flex flex-col p-4 ">
      <Header />
      <div className="lg:h-full my-3">
        <Box>
          <div className="flex flex-col lg:flex-row justify-around items-center h-full lg:space-x-5 space-y-3">
            <ContactBox
              icon={<IoMdPin size={60} />}
              title="Address"
              text="Itegemsesteenweg 26, 2560 Bevel"
              link="https://maps.app.goo.gl/y4nxCwi4KQSsqCh2A"
            />
            <ContactBox
              icon={<BsFillTelephoneFill size={60} />}
              title="Telephone"
              text="+32 489 89 65 85"
              link="tel:+32489896585"
            />
            <ContactBox
              icon={<MdAlternateEmail size={60} />}
              title="Email"
              text="cesar_vl@icloud.com"
              link="mailto:cesar_vl@icloud.com"
            />
            <ContactBox
              icon={<CiGlobe size={60} />}
              title="My Company"
              text="netbrew.be"
              link="https://www.netbrew.be"
            />
          </div>
        </Box>
      </div>
      <Footer />
    </div>
  );
}
