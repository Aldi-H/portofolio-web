import { Link } from "react-router-dom";
import profileImage from "../images/image.png";
import codingImage from "../images/Programming-rafiki.png";

const Home = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-[2.71rem] md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex-col md:items-start md:text-left mb-14 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">
            Hi, I'm Aldi Himawan!
          </h1>
          <p className="mb-8 leading-relaxed">
            Saya merupakan mahasiswa aktif di Universitas Brawijaya di Jurusan
            Teknologi Informasi yang sedang menempuh semester 5 pada saat ini
            yang memiliki keinginan dan semangat tinggi pada bidang front-end
            dan UI/UX
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#contact"
              className="transition ease-in-out delay-150 inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:-translate-y-1 hover:scale-110 hover:bg-green-700 rounded text-lg font-semibold duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 transition ease-in-out delay-150 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 hover:text-white rounded text-lg font-semibold duration-300"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            src={codingImage}
            alt="picture by storyset.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
