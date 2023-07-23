
import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";
import chevron from "../assets/icon-arrow-down.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className='w-container flexBetween mx-auto my-cx'>
      <Image
        src={logo}
        alt="logo"
        width={32}
        height={32}
        className="object-contain"
      />

      <div className="flex justify-end items-center">
        <div className="flexBetween w-[100px]">
          <select name="fonts" id="fonts">
            <option value="sans serif" className="font-san">
              Sans Serif
            </option>
            <option value="serif" className="font-serif">
              Serif
            </option>
            <option value="mono" className="font-mono">
              Mono
            </option>
          </select>
          <Image src={chevron} alt="chevron" />
        </div>

        <span className="nav-divider mx-7"></span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <Image
          src={moon}
          alt="dark mode"
          width={20}
          height={20}
          className="object-contain ml-5"
        />
      </div>
    </nav>
  );
};

export default NavBar;
