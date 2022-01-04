import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-medium">
            Berikut merupakan beberapa app yang saya buat dengan tujuan belajar
            technologi yang terdapat pada app tersebut saat membangun nya
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <a
              href={project.repositories}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  src={project.image}
                  alt="project i've built"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
