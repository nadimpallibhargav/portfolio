//imports
export default function Navbar() {
  return (
    <nav className="lg:flex lg:justify-between z-50 relative container mx-auto pt-8">
      <h1 className="text-center text-2xl cursor-pointer font-black italic text-green-400">
      &#60;&#47;&#62;
      </h1>
      <ul className="hidden lg:flex gap-12 items-center">
        <li className="relative">
          <a
            href="#"
            className="uppercase font-bold text-sm"
          >
            home
          </a>
        </li>
        <li>
          <a href="#work" className="uppercase font-bold text-sm">
            work
          </a>
        </li>
        <li>
          <a href="#about" className="uppercase font-bold text-sm ">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
}
