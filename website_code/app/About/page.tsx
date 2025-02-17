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
          <div className="flex flex-col lg:flex-row justify-between items-center h-full lg:space-x-5">
            <div className="w-full lg:w-1/2 h-full p-4 order-2 lg:order-1">
              <img
                src="/me.JPG"
                alt="photo of myself"
                className="mx-auto object-cover h-full w-10/12 rounded-3xl"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl font-bold uppercase mb-4">
                About <span className="text-customb">César...</span>
              </h2>
              <p className="text-justify my-3">
                My name is César, and I'm a passionate entrepreneur and applied
                computer scientist with a strong drive for digital innovation.
                My journey into technology and business started at Thomas More
                University in Geel, where I pursued a degree in Applied Computer
                Science. While my regular coursework didn't excite me,
                everything changed when I took the Business Essentials course.
                It was there that I had the opportunity to work with Seppe
                Stroobants, who introduced me to Digital Innovation. After a
                conversation about joining the program, I took a leap—despite
                not following the usual path—and it turned out to be one of the
                best decisions I ever made.
              </p>
              <p className="text-justify my-3">
                During my two semesters in Digital Innovation, I worked on
                several impactful projects, which you can explore on my
                Portfolio page. One of my favorites, and also my final project,
                was LABflow—a lab blood tracking system that allowed biomedical
                students to work with software, bridging the gap between their
                studies and real-world laboratory processes.
              </p>
              <p className="text-justify my-3">
                Beyond my studies, I have always been drawn to entrepreneurship.
                In my second semester, I founded Netbrew, a digital web
                development agency focused on helping construction companies
                establish a strong online presence. Later, I attended a
                hackathon hosted by the Cronos Group in Antwerp with a friend,
                where we won first place by presenting a business idea to
                revolutionize training for mechanics. Our concept leveraged
                Microsoft HoloLens and the Microsoft Dynamics Suite to
                accelerate hands-on learning, proving how technology can
                transform traditional industries.
              </p>
              <p className="text-justify my-3">
                Outside of work, I live for motorcycles. I've been riding since
                I was 12 and have always found freedom on two wheels. Football
                has also been a major part of my life since I was five, though
                I've shifted from playing to coaching young goalkeepers. On top
                of that, I'm currently training for a marathon, pushing my
                limits just like I do in business. The discipline I've gained
                from sports and coaching directly translates to my professional
                life—it's all about consistency, patience, and continuous
                improvement.
              </p>
              <p className="text-justify my-3">
                Looking ahead, I want to spend the next few years building the
                next big thing—something that excites me and pushes boundaries.
                Long-term, my goal is to create a company that leaves a lasting
                impact—not just on the industry but on people's lives. I'm here
                to build, innovate, and leave my mark.
              </p>
            </div>
          </div>
        </Box>
      </div>
      <Footer />
    </div>
  );
}
