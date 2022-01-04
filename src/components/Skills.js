import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-20 my-auto mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="text-3xl sm:text-4xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-lg font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Berikut merupakan skill dan teknologi yang sedang saya pelajari
            lebih lanjut untuk menjadi seorang front-end developer
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 w-full sm:w-1/2">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
