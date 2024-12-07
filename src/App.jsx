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
import "animate.css";
import Button from "./components/Backbutton";
import { useEffect } from "react";
import darkmodebg from "./assets/darkmode.png";
import githubdark from "./assets/githubdark.png";
import DarkModeCheckbox from "./components/DarkmodeCheck";
import LightModeCheckbox from "./components/LightmodeCheck";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [sdgSection, setSdgSection] = useState(false);
  const [fadeExit, setFadeExit] = useState(false);
  const [fadeSdgExit, setFadeSdgExit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
      setIsFirstLoad(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleDarkModeChange = () => {
    setIsDarkMode(false);
  };

  const handleLightModeChange = () => {
    setIsDarkMode(true);
  };

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
      <div className={`relative ${!isDarkMode ? "dark" : ""} bg-transition`}>
        <div
          className={`fixed flex ${
            sdgSection ? "hidden" : "block"
          }  -rotate-90 bottom-[6rem] gap-2 -left-[4.2rem]`}
        >
          <div
            className={`animate__animated ${
              fadeExit ? "animate__fadeOut" : "animate__fadeIn"
            } flex gap-1 items-center `}
          >
            <LightModeCheckbox
              isChecked={isDarkMode}
              onChange={handleLightModeChange}
            />
            <p className="dark:text-gray-300 text-xs font-bold">Light Mode</p>
          </div>
          <div
            className={`animate__animated ${
              fadeExit ? "animate__fadeOut" : "animate__fadeIn"
            } flex gap-1 items-center`}
          >
            <DarkModeCheckbox
              isChecked={!isDarkMode}
              onChange={handleDarkModeChange}
            />
            <p className="dark:text-gray-300 text-xs font-bold">Dark Mode</p>
          </div>
        </div>

        <div
          className={`min-h-screen transition-all bg-transition ease-in-out duration-300  ${
            !isDarkMode ? "dark" : ""
          } `}
        >
          <main
            className={` min-h-screen cursor-default transition-all duration-700 ease-in-out overflow-hidden object-cover text-[#333333]   ${
              activeSection === "skills" ? "" : ""
            }`}
            style={{
              backgroundImage: `url(${!isDarkMode ? darkmodebg : lightmodebg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <ParticlesGroup />
            {/* Me section */}
            <div
              className={`py-10  min-h-screen main-section  px-[20px]   md:px-[50px]    lg:px-[100px]    ${
                sdgSection ? "hidden" : "block"
              }`}
            >
              <div className="flex flex-col gap-12  lg:flex-row justify-between">
                <div
                  className={`lg:pt-[50px] w-full animate__animated ${
                      fadeExit
                      ? "animate__fadeOut"
                      : "animate__fadeIn"
                  }`}
                >
                  <section className=" pt-[15px] ">
                    <div className="flex items-center    gap-1">
                      <div>
                        <h1 className=" text-4xl dark:text-gray-300 my-name text-gray-800 font-semibold lg:text-5xl">
                          Angelo Manalo
                        </h1>
                      </div>
                      <div class="loading">
                        <svg width="48px" height="36px">
                          <polyline
                            points="0.157 17.965, 10.5 17.965, 16.383 36, 32.25 0, 37.5 18, 48 18"
                            id="back"
                          ></polyline>
                          <polyline
                            points="0.157 17.965, 10.5 17.965, 16.383 36, 32.25 0, 37.5 18, 48 18"
                            id="front"
                          ></polyline>
                        </svg>
                      </div>
                    </div>

                    <p className="lg:text-lg text-gray-800 dark:text-gray-300">
                      Web Developer
                    </p>
                    <p className="text-green-600 lg:text-lg">
                      Good Health and Well-Being
                    </p>
                    <ul className="flex gap-3 items-center">
                      <li className="w-[21px] lg:w-[26px] cursor-pointer">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/angelo-manalo-4b0200337/"
                        >
                          <img src={linkedin} alt="linkedinicon" />
                        </a>
                      </li>
                      <li className="w-[21px] lg:w-[26px]  cursor-pointer">
                        <a target="_blank" href="https://github.com/Gelodev04">
                          <img
                            src={!isDarkMode ? githubdark : githublight}
                            alt="githubicon"
                          />
                        </a>
                      </li>
                      <li className="w-[21px] lg:w-[26px] cursor-pointer">
                        <a
                          target="_blank"
                          href="mailto:manaloangelo273@gmail.com"
                        >
                          <img src={gmail} alt="gmailicon" />
                        </a>
                      </li>
                    </ul>
                  </section>

                  {/* Nav section */}
                  <section className="pt-[50px]  text-lg font-semibold">
                    <ul className="flex flex-col gap-3 text-[#333333] dark:text-gray-200">
                      <div>
                        <li
                          className="cursor-pointer relative group inline-block lg:text-2xl"
                          onClick={() => setActiveSection("about")}
                        >
                          About Me
                          <div
                            className={`absolute rounded-xl bottom-0 left-0 w-0 h-[2px] dark:bg-[#e7e6e6] lg:h-[3px] bg-[#18272F] transition-all duration-500 group-hover:w-full ${
                              activeSection === "about" ? "w-full" : "w-0"
                            }`}
                          ></div>
                        </li>
                      </div>
                      <div>
                        <li
                          onClick={() => setActiveSection("projects")}
                          className="cursor-pointer relative group inline-block lg:text-2xl"
                        >
                          Projects
                          <div
                            className={`absolute dark:bg-[#e7e6e6] bottom-0 left-0 w-0 h-[2px] lg:h-[3px] bg-[#18272F] transition-all duration-500 group-hover:w-full ${
                              activeSection === "projects" ? "w-full" : "w-0"
                            }`}
                          ></div>
                        </li>
                      </div>
                      <div>
                        <li
                          onClick={() => setActiveSection("skills")}
                          className="cursor-pointer relative group inline-block lg:text-2xl"
                        >
                          Technical Skills
                          <div
                            className={`absolute bottom-0 dark:bg-[#e7e6e6] left-0 w-0 h-[2px] lg:h-[3px] bg-[#18272F] transition-all duration-500 group-hover:w-full ${
                              activeSection === "skills" ? "w-full" : "w-0"
                            }`}
                          ></div>
                        </li>
                      </div>
                      <div>
                        <li
                          onClick={handleSdgClick}
                          className="cursor-pointer relative group inline-block lg:text-2xl"
                        >
                          SDG
                          <div
                            className={`absolute bottom-0 dark:bg-[#e7e6e6] left-0 w-0 h-[2px] lg:h-[3px] bg-[#18272F] transition-all duration-500 group-hover:w-full ${
                              activeSection === "sdg" ? "w-full" : "w-0"
                            }`}
                          ></div>
                        </li>
                      </div>
                    </ul>
                  </section>
                </div>

                {/* content section */}
                <div
                  className={`flex items-center   w-full  animate__animated ${sdgSection ? fadeSdgExit ? "animate_fadeOut" : "animate_fadeIn" : 
                    fadeExit ? "animate__fadeOutRight" : "animate__fadeInRight"
                  }`}
                >
                  {/* About Me */}
                  <section className="w-[280px] ml-auto  text-[0.8rem] lg:text-[1rem]">
                    {activeSection === "about" && (
                      <div className="flex flex-col lg:pt-[11rem] lg:gap-4 gap-3 dark:text-gray-200   animate__animated animate__fadeInRight ">
                        <p>
                          Hello! I’m Angelo, a passionate web developer with a
                          focus on creating responsive, user-friendly, and
                          impactful websites. My journey in web development
                          combines my technical skills with a strong dedication
                          to building solutions that enhance user experience and
                          align with the principles of sustainability.
                        </p>
                        <p>
                          I chose{" "}
                          <span className="text-green-500">
                            Good Health and Well Being
                          </span>{" "}
                          because it focuses on ensuring access to quality
                          healthcare, promoting wellness, and addressing both
                          physical and mental health. It is crucial for reducing
                          inequalities, boosting productivity, and fostering a
                          healthier, more sustainable society.
                        </p>
                      </div>
                    )}

                    {/* Projects */}
                    {activeSection === "projects" && (
                      <div className="animate__animated lg:pt-[5rem] animate__fadeInRight">
                        <div className="">
                          <HorizontalScrollCards />
                        </div>
                      </div>
                    )}

                    {/* Technical Skills */}
                    {activeSection === "skills" && (
                      <div className="lg:pt-[11rem]">
                        <Skills />
                      </div>
                    )}

                    {/* SDG */}
                  </section>
                </div>
              </div>
            </div>

            {/* sdg section */}
            <section
              className={`px-[24px] sdg-section animate__animated ${
                fadeSdgExit ? "animate__fadeOut" : "animate__fadeIn"
              } ${sdgSection ? "block" : "hidden"}`}
            >
              <Button handleBackToHome={handleBackToHome} />
              <Sdg />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
