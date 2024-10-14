import { skills } from "../data";

const Skills = () => {
  return (
    <div className="sm:mt-24 mt-20 lg:px-28 px-6">
      <div>
        <h1 className="font-bold  text-3xl text-center ">SKILLS</h1>
        <p className="font-semibold text-base text-center pt-4">
          Here are some of my skills on which I have been working on for the
          past 2 years
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-5  mt-9">
        {skills.map((skill, i) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={i}>
            <div className="font-bold text-xl px-5 py-2">{skill.title}</div>
            <div className="px-6 pt-4 pb-2">
              <div className="grid grid-cols-2 ">
                {skill.skills.map((i, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center  gap-3 bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 "
                  >
                    <img src={i.image} alt="" className="h-5 w-auto" />
                    <h5>{i.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
