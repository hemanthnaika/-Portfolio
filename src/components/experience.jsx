import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import micro from "../assets/micro.png";
import dev from "../assets/devtown.png";
import { experiences, skills } from "../data";

const Experience = () => {
  return (
    <div className="mt-10 px-6">
      <VerticalTimeline>
        {experiences.map((item, i) => (
          <VerticalTimelineElement
            key={i}
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid black" }}
            date={item.date}
            icon={
              <img
                src={item.img}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            }
          >
            <div className="flex items-center gap-4">
              <div>
                <img src={item.img} alt="micro" className="w-auto h-10" />
              </div>
              <div>
                <h3 className="vertical-timeline-element-title">{item.role}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.company}
                  <br />
                  {item.date}
                </h4>
              </div>
            </div>

            <p >{item.desc}</p>

            <b className="mt-5 inline-block">Skills:</b>
            {item.skills.map((s, i) => (
              <span key={i} className="font-medium">
                {" "}
                · {s}
              </span>
            ))}
            <p>
              <a
                href="http://https://www.cert.shapeai.tech/verify/Z1Eo5FK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.doc} alt="" className="h-10 w-auto" />
              </a>
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
