import { useState } from "react";
import "./App.css";
import githublight from "./assets/githublight.png";
import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";
import lightmodebg from "./assets/lightmode.png";
import HorizontalScrollCards from "./components/Projects";
import Skills from "./components/Skills";
import ParticlesGroup from "./components/Particles";
import Sdg from "./components/Sdg";
import 'animate.css';
import Button from "./components/Backbutton";



function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [sdgSection, setSdgSection] = useState(false);
  const [fadeExit, setFadeExit] = useState(false);
  const [fadeSdgExit, setFadeSdgExit] = useState(false);

  const handleSdgClick = () => {
    
    setFadeExit(true);

  
    setTimeout(() => {
      setFadeExit(false); 
      setSdgSection(true);
    }, 200); 
  };

  const handleBackToHome = () => {
  
    setFadeSdgExit(true);

   
    setTimeout(() => {
      setFadeSdgExit(false); 
      setSdgSection(false); 
      setActiveSection("about"); 
    }, 300);
  };

  

  return (
    <>
      <main
        className={` min-h-screen cursor-default overflow-hidden object-cover px-[40px]  ${activeSection === "skills" ? "" : ""}`}
        style={{
          backgroundImage: `url(${lightmodebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
         
        }}
      >
        <ParticlesGroup/>
        {/* Me section */}
        <div className={`py-10 min-h-screen flex flex-col md:px-[50px] lg:px-[100px]  gap-1  lg:flex-row justify-between  ${sdgSection ? "hidden" : "block"}`}>
        
        <div className={`lg:pt-20 w-full  animate__animated ${fadeExit? "animate__fadeOutLeft" : "animate__fadeInLeft"}`}>
        
          <section className=" pt-[15px]">
            <h1 className="text-4xl font-semibold lg:text-5xl">Angelo Manalo</h1>
            <p className="lg:text-lg">Web Developer</p>
            <p className="text-green-600 lg:text-lg">Good Health and Well-Being</p>
            <ul className="flex gap-3 items-center">
              <li className="w-[21px] lg:w-[26px] cursor-pointer">
                <img src={linkedin} alt="" />
              </li>
              <li className="w-[21px] lg:w-[26px]  cursor-pointer">
                <img src={githublight} alt="" />
              </li>
              <li className="w-[21px] lg:w-[26px] cursor-pointer">
                <img src={gmail} alt="" />
              </li>
            </ul>
          </section>

          {/* Nav section */}
          <section className="pt-[50px] text-lg font-semibold">
            <ul className="flex flex-col gap-3">
              <div>
                <li
                  className="cursor-pointer relative group inline-block lg:text-2xl"
                  onClick={() => setActiveSection("about")}
                >
                  About Me
                  <div className="absolute rounded-xl bottom-0 left-0 w-0 h-[2px] lg:h-[3px] bg-[#18272F] transition-all duration-300 group-hover:w-full"></div>
                </li>
              </div>
              <div>
                <li
                  onClick={() => setActiveSection("projects")}
                  className="cursor-pointer relative group inline-block lg:text-2xl"
                >
                  Projects
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] lg:h-[3px] bg-[#18272F] transition-all duration-300 group-hover:w-full"></div>
                </li>
              </div>
              <div>
                <li
                  onClick={() => setActiveSection("skills")}
                  className="cursor-pointer relative group inline-block lg:text-2xl"
                >
                  Technical Skills
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] lg:h-[3px] bg-[#18272F] transition-all duration-300 group-hover:w-full"></div>
                </li>
              </div>
              <div>
                <li
                  onClick={handleSdgClick}
                  className="cursor-pointer relative group inline-block lg:text-2xl"
                >
                  SDG
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] lg:h-[3px] bg-[#18272F] transition-all duration-300 group-hover:w-full"></div>
                </li>
              </div>
            </ul>
          </section>
        </div>

        {/* content section */}
        <div className={`flex items-center   w-full  animate__animated ${fadeExit? "animate__fadeOutRight" : "animate__fadeInRight"}`}>
          {/* About Me */}
          <section className="w-[280px] ml-auto text-[0.8rem] lg:text-[1rem]">
            {activeSection === "about" && (
              <div className="flex flex-col gap-3 pt-16 animate__animated animate__fadeInRight">
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
              <div className="animate__animated animate__fadeInRight">
              <div className="">
                <HorizontalScrollCards />
              </div>
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
        </div>

            {/* sdg section */}
        <section className={`animate__animated ${fadeSdgExit ? "animate__fadeOut" : "animate__fadeIn"} ${sdgSection ? "block" : "hidden"}`}>
            <Button handleBackToHome={handleBackToHome}/>
            <Sdg/>
        </section>
      </main>
      

      
    </>
    );
}


export default App;
