import { Menu, X } from "lucide-react";

export default function Navbar() {
  return (
    <header className="box-border bg-[#121829] w-full">
      <div className="mx-auto max-w-[1440px] px-[120px] py-[16px]">
        <nav className="flex items-center justify-between">
          <a href="#" className="app-logo">
            <svg width="40px" height="40px" viewBox="0 0 1000 1000">
              <path
                fill="#1EA5FC"
                d="M231.4,394.07L669.5,119.2C752.42,67.18,860,126.99,860,225.13v549.74c0,98.13-107.58,157.95-190.5,105.93
                   L231.4,605.93C153.41,556.99,153.41,443.01,231.4,394.07z"
              />
              <path
                fill="#5A4AF4"
                d="M768.6,394.07L330.5,119.2C247.58,67.18,140,126.99,140,225.13v549.74c0,98.13,107.58,157.95,190.5,105.93
                   l438.1-274.87C846.59,556.99,846.59,443.01,768.6,394.07z"
              />
            </svg>
          </a>

          <ul className="flex items-center justify-between gap-[16px] font-poppins font-bold text-[#767e94] text-[16px] leading-[24px] tracking-[2%]">
            <li className="px-[16px] py-[12px]">
              <a href="#" className="menu__link">
                Movies
              </a>
            </li>
            <li className="px-[16px] py-[12px]">
              <a href="#" className="menu__link">
                TV Shows
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
