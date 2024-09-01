import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="s-cta p-20 bg-[#FFFDD0]">
      <div className="container mx-auto text-center">
        <h2 className="text-display-title text-3xl lg:text-7xl font-bold mb-4 font-serif px-4">
        Kickstart Your Tech Journey <br />with Me.
        </h2>
        <p className="lead mb-8 text-2xl leading-loose px-4">
        As a passionate aspiring computer scince, I am dedicated to turning innovative ideas into effective digital solutions. My enthusiasm for technology drives me to continually learn and grow in the field of web development. I may be at the beginning of my professional journey, but my commitment to leveraging technology to solve real-world problems is unwavering. Let's explore how we can collaborate to bring your vision to life.
        </p>
        <a href="/" className="btn text-2xl btn--primary bg-[#f9a826] border border-[#f9a826] text-[#f8f8f2] py-6 px-10 hover:bg-[#f39c12] rounded-lg">
        Let's Work Together
        </a>
      </div>
    </section>
  );
};

export default CTA;
