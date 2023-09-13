//imports
import { AiOutlineLine } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav className="lg:flex lg:justify-between z-50 relative">
      <h1 className="text-center text-2xl cursor-pointer font-black italic text-green-400">
      &#60;&#47;&#62;
      </h1>
      <ul className="hidden lg:flex gap-12 items-center">
        <li className="relative">
          <a
            href="#"
            className="text-green-400 uppercase font-bold text-sm"
          >
            home
          </a>
          <AiOutlineLine className="absolute left-2/4 -translate-x-2/4 font-bold text-2xl" />
        </li>
        <li className="">
          <a href="#work" className="uppercase font-bold text-sm">
            work
          </a>
        </li>
        <li className="">
          <a href="#about" className="uppercase font-bold text-sm ">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
}
