import { projects } from "../data";
import git from "../assets/icons/github.png";
import dev from "../assets/launch.gif";
export default function Project() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Projects
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 lg:gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-lg shadow-xl p-4 "
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt="image"
                    src={project.image}
                    className="h-full w-full object-cover "
                  />
                </div>

                <div className="grid grid-cols-4 ">
                  {project.tags.map((i, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 rounded-full text-sm font-semibold text-gray-700 text-center p-1 m-1 "
                    >
                      {i}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 mb-1 text-lg text-gray-500 font-bold">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-gray-900 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-5">
                  <a
                    className="mt-3 inline-block "
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={git}
                      alt="git"
                      className="h-8 w-auto object-cover"
                    />
                  </a>
                  <a
                    className="mt-3 inline-block "
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={dev}
                      alt="git"
                      className="h-8 w-auto object-cover"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
