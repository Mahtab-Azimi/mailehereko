import Navbar from "../components/layout/Navbar";
import Input from "../components/core/Input";
import SegmentedControl from "../components/core/SegmentedControl";
import Card from "../components/layout/Card";

export default function Home() {
  // const dummyData = [
  //   {
  //     poster_path: "/img/gh4cZbhZxyTbgxQPxD0dOudNPTn.webp",
  //     original_title: "Inception",
  //     vote_average: 8.3,
  //   },
  //   {
  //     poster_path: "/img/t6HIqrRAclMCA60NsSmeqe9RmNV.webp",
  //     original_title: "Interstellar",
  //     vote_average: 8.6,
  //   },
  //   {
  //     poster_path: "/img/to0spRl1CMDvyUbOnbb4fTk3VAd.webp",
  //     original_title: "The Dark Knight",
  //     vote_average: 9.0,
  //   },
  //   {
  //     poster_path: "/img/olxpyq9kJAZ2NU1siLshhhXEPR7.webp",
  //     original_title: "Tenet",
  //     vote_average: 7.5,
  //   },
  //   {
  //     poster_path: "/img/qFmwhVUoUSXjkKRmca5yGDEXBIj.webp",
  //     original_title: "Memento",
  //     vote_average: 8.4,
  //   },
  // ];
  return (
    <>
      <Navbar />

      <main className="main min-h-[720px] mt-[80px] mb-[120px]">
        <div className="mx-auto max-w-[1440px] px-[120px]">
          <section className="hero-head max-w-[588px]">
            <h1 className="hero-head__title font-poppins font-semibold leading-[80px] tracking-[-2%] text-[64px] text-[#EBEEF5]">
              MaileHereko
            </h1>

            <p className="hero-head__caption font-poppins font-medium text-[16px] pt-[5px] leading-[24px] text-[#767e94]">
              List of movies and TV Shows, I,{" "}
              <a href="#">
                <span className="text-[#7c6ef6] font-poppins font-bold">
                  Pramod Poudel
                </span>
              </a>{" "}
              have watched till date. Explore what I have watched and also feel
              free to make a{" "}
              <a href="#">
                <span className="text-[#7c6ef6] font-poppins font-bold">
                  suggestion.
                </span>
              </a>
              😉
            </p>

            <Input />

            <section className="hero-main max-w-[588px]">
              <SegmentedControl />

              <h3 className="text-[32px] font-poppins font-semibold leading-[40px] tracking-[-2%] text-[#767E94] mt-6">
                All
                <span className="text-[16px] font-poppins font-normal leading-[24px] text-[#767E94]">
                  {" "}
                  (120)
                </span>
              </h3>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10">
                {dummyData.map((movie, index) => (
                  <Card key={index} item={movie} />
                ))}
              </div> */}
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
