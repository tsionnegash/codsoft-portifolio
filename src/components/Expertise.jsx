import React from 'react';

export const Expertise = () => {
  return (
    <section id="expertise" className="s-expertise  py-20 pl-10 bg-custom-bg5 bg-cover bg-center bg-no-repeat">
      <div className="container  pl-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-12 lg:flex xl:col-span-12">
            <div className="section-header mb-12">
              <div className="text-pretitle text-2xl font-semibold text-[#f39c12]">Expertise</div>
              <h2 className="text-display-title text-3xl lg:text-7xl font-bold text-white font-serif leading-loose">
              
  My Key Areas<br /> of Expertise
</h2>
<p className="lead text-3xl mt-20 text-white leading-loose pr-20">
  As a web developer, my expertise lies in crafting dynamic, responsive, and user-centric web applications. With a strong foundation in front-end technologies like React and CSS, I excel at building intuitive and visually appealing interfaces. I am also expanding my skills in back-end development, aiming to create seamless full-stack solutions that tackle both local and global challenges. My dedication to continuous learning and problem-solving drives me to leverage technology to address pressing issues and collaborate effectively with teams.
</p>

<div className="s-expertise__content-main">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="s-expertise__content-item px-6 rounded-lg shadow-md bg-customBrown">
      <h3 className="text-2xl font-semibold text-white font-serif">Front-End Development</h3>
      <p className="text-white mt-1 leading-loose">
        Specializing in creating responsive and interactive user interfaces using modern frameworks like React. I focus on delivering exceptional user experiences by employing best practices in design and development. My collaborative approach ensures seamless integration with team members to achieve project goals efficiently.
      </p>
    </div>

    <div className="s-expertise__content-item px-6 rounded-lg shadow-md bg-customBrown">
      <h3 className="text-2xl font-semibold text-white font-serif">Back-End Development</h3>
      <p className="text-white mt-1 leading-loose">
        Expanding my knowledge in back-end technologies to build robust and scalable server-side solutions. My goal is to integrate front-end and back-end components seamlessly, solving technical challenges with innovative solutions. I thrive in team environments, contributing my skills to collaborative projects that address diverse needs.
      </p>
    </div>

    <div className="s-expertise__content-item px-6 rounded-lg shadow-md bg-customBrown">
      <h3 className="text-2xl font-semibold text-white font-serif">Full-Stack Development</h3>
      <p className="text-white mt-1 leading-loose">
        Combining front-end and back-end skills to deliver comprehensive full-stack solutions. I focus on developing end-to-end applications that are both functional and performant, addressing diverse web development challenges. My proactive approach and problem-solving mindset enable me to tackle complex issues and contribute effectively to team success.
      </p>
    </div>
  </div>

  <div className="mt-12">
    <h3 className="text-2xl font-semibold text-white mb-4">Personal Qualities</h3>
    <ul className="list-disc pl-6 text-white">
      <li className="mb-2">Motivated and passionate about technology, constantly seeking to improve my skills and knowledge.</li>
      <li className="mb-2">Strong team collaboration skills, working effectively with others to achieve common goals.</li>
      <li className="mb-2">Dedicated to solving local problems and making a positive impact through my web development expertise.</li>
    </ul>
  </div>
</div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
  
