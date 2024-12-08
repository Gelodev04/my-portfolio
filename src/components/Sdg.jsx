import React from "react";
import icon from "./images/goodhealth.png";

import background from "./images/backgroundsdg.jpeg";
import sdgicon from "./images/sdgicon.png";

function Sdg() {
  return (
    <>
      <div className="">
        <div
          className="page-heading__panel rounded-lg max-w-[950px] mx-auto"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            position: 'relative',
          }}
        >
         
          <div className="rounded-lg "
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)', 
            }}
          ></div>

          <div className="page-heading__panel__inner text-center relative z-10 py-12 rounded-lg">
            <div className="page-heading__media mx-auto rounded-lg">
              <img
                className="mx-auto rounded-lg"
                loading="lazy"
                decoding="async"
                width="161"
                height="112"
                src={sdgicon}
                alt="SDG Icon"
              />
            </div>
            <h1 className="page-heading__heading text-white font-semibold text-2xl lg:text-3xl">
              GOAL 3: GOOD HEALTH AND WELL-BEING
            </h1>
            <h2 className="page-heading__subheading italic text-white text-sm lg:text-base">
              Ensure healthy lives and promote well-being for all at all ages
            </h2>
          </div>
        </div>

        <div className="text-left p-1 rounded-lg  bg-opacity-90 max-w-[850px] mx-auto dark:text-gray-300">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-green-600">
            Good Health and Well-Being
          </h2>
          <p className="mb-4 text-sm">
            <img
              className="float-left lg:h-[150px] lg:w-[170px] w-[130px] h-[120px] object-cover "
              src={icon}
              alt="Good Health and Well-Being Icon"
            />
            <span>
              <strong>Good Health and Well-Being (SDG 3)</strong> aims to ensure
              healthy lives and promote well-being for all at all ages. It
              focuses on reducing mortality, combating diseases, and improving
              mental and physical health globally. This goal is central to
              achieving sustainable development and reducing inequality
              worldwide.
            </span>
          </p>

          <p className="mb-4 text-sm">
            As a web developer, I strive to use my skills to support this
            crucial goal. My projects emphasize user-friendly and accessible
            interfaces, ensuring that digital tools contribute to the well-being
            of all users. For instance, my portfolio includes tools designed to
            promote awareness about health, productivity apps, and accessible
            web platforms tailored to diverse user needs.
          </p>
          <p className="mb-4 text-sm">
            My technical expertise in modern web technologies like ReactJS,
            TailwindCSS, and TypeScript enables me to build applications that
            are responsive, accessible, and scalable. These skills can be
            leveraged to create platforms that support healthcare initiatives,
            mental health awareness, and fitness tracking, aligning directly
            with the objectives of SDG 3.
          </p>
          <p className="mb-4 text-sm">
            My aspirations include collaborating on projects that bridge the gap
            between technology and healthcare, creating digital solutions that
            enhance well-being and improve the quality of life for communities
            around the world. By aligning my work with this SDG, I aim to make a
            meaningful impact on society through technology.
          </p>
          <p className="text-green-500 font-semibold text-center italic text-sm mb-5">
            Together, through innovation and commitment, we can make good health
            and well-being a reality for everyone.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sdg;
