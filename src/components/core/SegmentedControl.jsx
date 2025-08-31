import { useState, useRef, useEffect } from "react";

export default function SegmentedControl() {
  const [selected, setSelected] = useState("movies");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const moviesRef = useRef(null);
  const tvshowsRef = useRef(null);
  const suggestionsRef = useRef(null);

  const updateIndicator = (id) => {
    let el = null;
    if (id === "movies") el = moviesRef.current;
    else if (id === "tvshows") el = tvshowsRef.current;
    else if (id === "suggestions") el = suggestionsRef.current;

    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    updateIndicator(selected);
    window.addEventListener("resize", () => updateIndicator(selected));
    return () =>
      window.removeEventListener("resize", () => updateIndicator(selected));
  }, [selected]);

  return (
    <div className="segmented-control relative flex justify-center items-center w-[max-content] bg-[#00000033] rounded-[12px] p-[8px] mt-[80px] mb-[24px]">
      {/* Active indicator */}
      <div
        className="active-indicator absolute top-2 bottom-2 bg-[#7c6ef6] rounded-lg z-10 transition-all duration-150 pointer-events-none"
        style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
      ></div>

      {/* Option 1 */}
      <div ref={moviesRef} className="relative z-20 text-center">
        <input
          type="radio"
          name="ListType"
          id="movies"
          className="hidden peer"
          checked={selected === "movies"}
          onChange={() => setSelected("movies")}
        />
        <label
          htmlFor="movies"
          className="block font-poppins font-semibold text-base leading-6 px-8 py-2 text-[#8E95A9] peer-checked:text-white cursor-pointer"
        >
          All
        </label>
      </div>

      {/* Option 2 */}
      <div ref={tvshowsRef} className="relative z-20 text-center">
        <input
          type="radio"
          name="ListType"
          id="tvshows"
          className="hidden peer"
          checked={selected === "tvshows"}
          onChange={() => setSelected("tvshows")}
        />
        <label
          htmlFor="tvshows"
          className="block font-poppins font-semibold text-base leading-6 px-8 py-2 text-[#8E95A9] peer-checked:text-white cursor-pointer"
        >
          Movies
        </label>
      </div>

      {/* Option 3 */}
      <div ref={suggestionsRef} className="relative z-20 text-center">
        <input
          type="radio"
          name="ListType"
          id="suggestions"
          className="hidden peer"
          checked={selected === "suggestions"}
          onChange={() => setSelected("suggestions")}
        />
        <label
          htmlFor="suggestions"
          className="block font-poppins font-semibold text-base leading-6 px-8 py-2 text-[#8E95A9] peer-checked:text-white cursor-pointer"
        >
          TV Shows
        </label>
      </div>
    </div>
  );
}
