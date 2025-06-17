import React from 'react';

const HistorySection = () => {
  return (
    <section className="bg-[#100022] text-white px-6 py-16 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">OUR HISTORY</h2>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 max-w-5xl mx-auto">
        {/* Left: Text */}
        <div className="flex-1 text-sm text-gray-300">
          <p className="mb-4">
            Established in 2018, IEEE WIE VIT Chapter has grown from a small group of passionate engineering
            students to one of the most active technical communities on campus.
          </p>
          <p className="mb-4">
            Through the years, we've organized numerous workshops, technical sessions, leadership programs, and
            outreach activities to empower women in STEM fields.
          </p>
          <p>
            Our chapter has been recognized for excellence by the IEEE WIE global committee and continues to
            expand its impact both on campus and beyond.
          </p>
        </div>

        {/* Right: Placeholder for image */}
        <div className="w-full md:w-64 h-40 bg-gray-300 rounded-md" />
      </div>
    </section>
  );
};

export default HistorySection;
