import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import MobileNav from "../Nav/MobileNav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Logo />

        <div className="hidden lg:flex  items-center gap-8">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
