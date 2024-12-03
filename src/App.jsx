import { useState } from "react";
import "./App.css";
import githublight from "./assets/githublight.png";
import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";
import lightmodebg from "./assets/lightmode.png";
import HorizontalScrollCards from "./components/Projects";
import Skills from "./components/Skills";
import ParticlesGroup from "./components/Particles";


function App() {
  const [activeSection, setActiveSection] = useState("about");
  return (
    <>
      <main
        className={`h-screen  cursor-default object-cover p-[30px] flex flex-col ${activeSection === "skills" ? "gap-9" : "gap-10"}`}
        style={{
          backgroundImage: `url(${lightmodebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
         
        }}
      >
        {/* Me section */}
        <ParticlesGroup/>
        <div >
        
          <section className=" pt-[30px]">
            <h1 className="text-4xl font-semibold">Angelo Manalo</h1>
            <p>Web Developer</p>
            <p className="text-green-600">Good Health and Well-Being</p>
            <ul className="flex gap-3 items-center">
              <li className="w-[21px] cursor-pointer">
                <img src={linkedin} alt="" />
              </li>
              <li className="w-[21px] cursor-pointer">
                <img src={githublight} alt="" />
              </li>
              <li className="w-[21px] cursor-pointer">
                <img src={gmail} alt="" />
              </li>
            </ul>
          </section>

          {/* Nav section */}
          <section className="pt-[50px] text-lg font-semibold">
            <ul className="flex flex-col gap-3">
              <div>
                <li
                  className="cursor-pointer relative group inline-block "
                  onClick={() => setActiveSection("about")}
                >
                  About Me
                  <div className="absolute rounded-xl bottom-0 left-0 w-0 h-[2px] bg-[#18272F] transition-all duration-300 group-hover:w-full"></div>
                </li>
              </div>
              <div>
                <li
                  onClick={() => setActiveSection("projects")}
                  className="cursor-pointer relative group inline"
                >
                  Projects
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#18272F] transition-all duration-300 group-hover:w-full"></div>
                </li>
              </div>
              <div>
                <li
                  onClick={() => setActiveSection("skills")}
                  className="cursor-pointer relative group inline"
                >
                  Technical Skills
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#18272F] transition-all duration-300 group-hover:w-full"></div>
                </li>
              </div>
              <div>
                <li
                  onClick={() => setActiveSection("sdg")}
                  className="cursor-pointer relative group inline"
                >
                  SDG
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#18272F] transition-all duration-300 group-hover:w-full"></div>
                </li>
              </div>
            </ul>
          </section>
        </div>

        {/* content section */}
        <div className="">
          {/* About Me */}
          <section className="w-[280px] ml-auto text-[0.8rem]">
            {activeSection === "about" && (
              <div className="flex flex-col gap-3">
                <p>
                  Hello! I’m Angelo, a passionate web developer with a focus on
                  creating responsive, user-friendly, and impactful websites. My
                  journey in web development combines my technical skills with a
                  strong dedication to building solutions that enhance user
                  experience and align with the principles of sustainability.
                </p>
                <p>
                  I chose{" "}
                  <span className="text-green-500">
                    Good Health and Well Being
                  </span>{" "}
                  because it focuses on ensuring access to quality healthcare,
                  promoting wellness, and addressing both physical and mental
                  health. It is crucial for reducing inequalities, boosting
                  productivity, and fostering a healthier, more sustainable
                  society.
                </p>
              </div>
            )}

            {/* Projects */}
            {activeSection === "projects" && (
              <div className="">
                <HorizontalScrollCards/>
              </div>
            )}

            {/* Technical Skills */}
            {activeSection === "skills" && (
              <div className="">
                <Skills />
              </div>
            )}

            {/* SDG */}
            
          </section>
        </div>
        
      
      </main>

      
    </>
  );
}

export default App;
