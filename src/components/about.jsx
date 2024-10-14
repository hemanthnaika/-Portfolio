import me from "../assets/me.jpg";
import git from "../assets/icons/github.png";
import link from "../assets/icons/linked.png";
import email from "../assets/icons/email.png";
const About = () => {
  return (
    <div
      id="about"
      className="grid sm:grid-cols-2  items-center justify-center gap-1 lg:px-32 px-6"
    >
      <div>
        <div className="flex items-center justify-center ">
          <img
            alt=""
            src={me}
            className="inline-block h-[500px] w-auto ring-2 ring-white rounded-xl "
          />
        </div>
      </div>
      <div className="lg:pr-8 lg:pt-4  pt-5">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            About Me
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hi, am Hemanth
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600  text-justify">
            Enthusiastic about building scalable, user-centric web applications
            with passion; a detail-oriented person with good experience in
            Python and web technologies, pursuing MCA. Full Stack Development
            and Full Stack Web Development are the specialized courses that I
            have already completed, meaning I have hands-on experience with
            front-end and back-end technology such as HTML, CSS, JavaScript,
            Django, and Node.js. I solve problems with a drive for improvement.
            I worked on real-world projects meant to enhance the seamless user
            experience. I am actively seeking to bring my skills to bear in
            dynamic environments where I would work on impactful projects.
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={git} alt="" className="h-10 w-auto rounded-full" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={link} alt="" className="h-10 w-auto rounded-full" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="" className="h-10 w-auto rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
