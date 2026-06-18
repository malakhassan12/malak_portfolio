
const Description = () => {
  return (
    <>
      <span className="text-xl text-[#001F3F] dark:text-white">Software Developer</span>
      <h1 className="h1 mb-6 text-[#001F3F] dark:text-white">
        Hello I&apos;m <br />{" "}
        <span className={`text-[#8B5CF6]`}>Malak Hassan</span>
      </h1>
      <p className="max-w-125 mb-9 text-gray-400 leading-relaxed">
        I am a{" "}
        <strong className="text-[#001F3F] dark:text-white font-medium">
          MERN Stack Developer
        </strong>{" "}
        and IS student at Helwan University, currently specializing in
        advanced React development through the{" "}
        <strong className="text-[#8B5CF6] font-medium">
          <u>DEPI Internship</u>
        </strong>
        . I build scalable, high-performance web solutions using Next.js,
        Node.js, and TypeScript.
      </p>{" "}
    </>
  );
};

export default Description;
