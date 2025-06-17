import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a001f] to-[#1a0033] text-white px-6 py-16 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">ABOUT IEEE WIE VIT</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          IEEE Women in Engineering (WIE) at VIT is dedicated to promoting women engineers and scientists,
          inspiring girls to follow their academic interests in engineering and science careers.
        </p>
      </div>

      {/* Mission/Vision/Values */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {['Our Mission', 'Our Vision', 'Our Values'].map((title, index) => (
          <div
            key={index}
            className="bg-[#1b0033] border border-violet-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 text-sm">
              To inspire, engage, and advance women in engineering through local and global community-building,
              education, and recognition of achievements.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
