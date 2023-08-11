const AboutMe = () => {
  return (
    <section
      className="transition-all duration-300 ease-in-out w-full px-6 py-16 md:flex md:gap-5 md:px-16 bg-slate-100/60 dark:bg-gray-800"
      id="aboutme"
    >
      <div className="md:w-1/2">
        <h6 className="text-2xl font-semibold text-cyan-600 mb-2 dark:text-white">
          About Me
        </h6>
        <p className="text-gray-600 md:pr-6 text-sm md:text-base dark:text-gray-100">
          I am very interested in programming, especially in web programming. I
          studied web programming from 2016 when I was still in college. <br />I
          studied{" "}
          <span className="text-cyan-600 font font-semibold">HTML &nbsp;</span>
          and <span className="text-cyan-600 font font-semibold">CSS</span> as
          well as several programming languages like
          <span className="text-cyan-600 font font-semibold">
            &nbsp;Java, PHP, JavaScript
          </span>
          &nbsp; and I also learned several web programming frameworks and
          tools. Like
          <span className="text-cyan-600 italic font font-semibold">
            &nbsp; Bootsraps, Tailwindcss, React.js, Codeigniter, & Laravel.
          </span>
        </p>
      </div>

      <div className="md:w-1/2">
        <h6 className="text-2xl font-semibold text-cyan-600 mb-2 mt-5 md:mt-0 dark:text-white">
          My Hobies
        </h6>
        <p className="text-gray-600 text-sm md:text-base dark:text-gray-100">
          I like learning new things, especially in web programming, to learn
          the latest frameworks, tools or technologies. learn through paid
          courses or self-taught.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
