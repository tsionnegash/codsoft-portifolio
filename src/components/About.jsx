import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons';
import geometricShape from "../assets/images/geometric_shape.svg"; 

const About = () => {
  return (
    <section id="about" className="s-about lg:flex target-section bg-custom-bg4 bg-cover bg-center bg-no-repeat">
      <div className="s-about__content max-w-7xl mx-auto">
        <div className="grid lg:flex gap-8">
          <div className="lg:flex justify-between ">

            <div className="section-header p-4">
              <div className="text-3xl text-pretitle text-orange">About</div>
              <h2 className="text-display-title text-7xl font-bold font-serif">
                Empowering Change Through Code: Tsion Negash – A Visionary Developer on a Mission to Innovate and Inspire
              </h2>
              <div className="lg:w-1/3">
                <div className="s-about__content-btn mt-8">
                  <a
                    href="about.html"
                    className="btn btn--stroke w-full lg:w-auto text-center border border-gray-900 py-2 px-4 rounded-md hover:bg-[#f39c12]"
                  >
                    More About Me
                  </a>

                  <ul className="s-about__social social-list flex mt-4 justify-center lg:justify-start">
                    <li className="mx-2">
                      <a href="https://github.com/tsionnegash" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                      <FontAwesomeIcon icon={faGithub} className="text-gray-400 hover:text-black" />
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href="https://www.linkedin.com/in/tsion-negash-7ba70231a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQwronOd1TAOcnsAEUaEhtA%3D%3Dp" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"className="hover:text-blue-400">
                      <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href="https://www.instagram.com/tinbite_elias/?target_user_id=45083037375&ndid=6205af697f38cG24bc375a22cebfG6205b402df65fG9e4&utm_medium=email&utm_campaign=ig_suspicious_login&__bp=1" aria-label="Instagram" className="hover:text-pink-600">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                  </ul>
           
            
          
                </div>
              </div>
            </div>

            <div className="s-about__content-main mt-6">
              <p className="attention-getter text-lg ">
                As a dedicated computer scince student, I am passionately pursuing my goal of becoming a full-stack developer. Currently, I am honing my skills as a  backend developer while also delving into frontend technologies. This journey is fueled by my desire to create impactful web applications that address both local and global challenges.
              </p>

              <p className="attention-getter text-lg mt-4">
                My enthusiasm for problem-solving drives me to constantly explore new technologies and methodologies. By combining creativity with technical expertise, I aim to develop innovative solutions that improve lives and contribute to the advancement of our digital world.
              </p>

              <p className="attention-getter text-lg mt-4">
                With a strong foundation in backend development and a growing knowledge of frontend systems, I am on a path to becoming a versatile and skilled full-stack developer. My ultimate goal is to leverage my abilities to build applications that make a meaningful difference in our society.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
