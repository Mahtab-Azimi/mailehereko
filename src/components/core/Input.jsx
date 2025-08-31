import { useState } from "react";
import { Search } from "lucide-react";

export default function Input({ onChange }) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className="relative mb-2 mt-[24px] w-full max-w-[588px]">
      <div className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none">
        <Search className="w-6 h-6 text-[#475069]" />
      </div>

      <input
        type="text"
        placeholder="Search movies or tv shows"
        value={value}
        onChange={handleInput}
        className="peer w-full h-16 pl-[56px] pr-4 text-base text-gray-200 rounded-xl border-2 bg-[#0000001a] placeholder-transparent focus:border-blue-500 outline-none border-[#20283e] transition-all"
      />

      <label className="absolute left-[56px] top-0 h-16 flex items-center text-[14px] leading-[16px] font-poppins font-normal  text-[#475069] transition-all duration-300 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-[#475069] peer-focus:-translate-y-6 peer-focus:text-gray-200">
        Search movies or tv shows
      </label>
    </div>
  );
}
