import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import micro from "../assets/micro.png";
  import dev from "../assets/devtown.png";
import { education } from "../data";

const Eduction = () => {
  return (
    <div className="mt-10 px-6" id="eduction">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Education</h1>
      <VerticalTimeline>
       {education.map((edu,i)=>(
         <VerticalTimelineElement key={i}
         contentStyle={{ background: "white", color: "black" }}
         contentArrowStyle={{ borderRight: "7px solid black" }}
         date={edu.date}
         icon={
           <img
             src={edu.img}
             style={{ borderRadius: "50%", objectFit: "cover" }}
           />
         }
       >
         <div className="flex items-center gap-4">
           <div>
             <img src={edu.img} alt="micro" className="w-auto h-10 object-cover" />
           </div>
           <div>
             <h3 className="vertical-timeline-element-title">
               {edu.school}
             </h3>
             <h6>
              {edu.degree}
             </h6>
             <h6>{edu.date}</h6>
           </div>
         </div>
         <h5>{edu.grade}</h5>
         <p>
           {edu.desc}
         </p>
       </VerticalTimelineElement>
       ))} 
      </VerticalTimeline>
    </div>
  )
}

export default Eduction