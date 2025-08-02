const Slide2 = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-20 pt-8 sm:pt-10 border-b min-h-screen" style={{ height: "100vh" }}>
      {/* Header */}
      <div>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          About Me
        </h1>
        <p className="text-center py-4 text-sm sm:text-base md:text-lg text-gray-300">
          MERN Stack & Next.js Developer | Cybersecurity Enthusiast
        </p>
      </div>

      {/* Main content container */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 h-[calc(95vh-120px)]">
        {/* Image container */}
        <div className="hidden md:flex flex-col items-center rounded-t-full shadow-2xl shadow-cyan-500/40 p-4 bg-white/10 backdrop-blur-lg sticky top-24 flex-shrink-0 w-80 h-[480px]">
          <img
            src="https://res.cloudinary.com/dpbpu5b0v/image/upload/v1753950300/Screenshot_2025-07-31_134822-removebg-preview_gf6nhb.png"
            alt="my image"
            className="mt-20 w-full h-full object-contain"
          />
        </div>

        {/* Text content */}
        <div
          className="md:flex-1 overflow-y-auto px-2 sm:px-4 md:px-0 scrollbar-hide"
          style={{ maxHeight: "100%" }}
        >
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            I’m a passionate Full-Stack Developer with a strong focus on the MERN stack (MongoDB, Express.js, React.js,
            and Node.js). I specialize in building modern, responsive, and scalable web applications that are not only
            high-performing but also maintainable and user-centric.

            <br /><br />

            My expertise spans across the full development lifecycle—from designing intuitive and dynamic front-end
            interfaces using React, to crafting efficient, secure, and robust RESTful APIs with Node.js and Express. I
            have hands-on experience in working with MongoDB for handling complex, real-time data, ensuring seamless
            integration between the frontend and backend systems.

            <br /><br />

            What sets me apart is my attention to detail and commitment to writing clean, modular code that scales with
            evolving project needs. I enjoy solving real-world problems through code and translating ideas into functional
            digital experiences.

            <br /><br />

            Currently, I’m pursuing a Bachelor of Computer Applications (BCA) at Shoolini University, where I continue to
            strengthen my foundation in computer science and software engineering principles. Beyond academics, I’m
            actively engaged in building real-world projects that blend creativity with code—ranging from user-focused
            applications to backend services—all aimed at improving usability and performance.

            <br /><br />

            Whether it's developing interactive UIs, implementing multilingual features, handling user authentication,
            or deploying full-stack applications, I aim to deliver solutions that are not just functional but impressive in
            terms of design and performance.
          </p>

          <div className="w-full sm:w-auto py-6">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                hover:from-cyan-500 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-bold rounded-lg py-2 px-6 text-center mr-2 mb-2 transition shadow-md hover:shadow-xl"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
