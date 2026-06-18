import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1
        className="text-4xl font-semibold  text-[#001F3F]   dark:text-white "
      >
        Malak<span className="text-[#8B5CF6]">.</span>
      </h1>
    </Link>
  );
};

export default Logo;
