import { courses } from "../constants";
import LearnJS from "./LearnJS";

const LearnMain = () => {
  return (
    <div className="flex flex-col flex-[0.8] px-4 py-6">
    <h1 className="font-bold text-2xl text-primarygreen mb-4 text-center">
      Enroll in a Course
    </h1>
    
    <div className="flex gap-4 overflow-x-scroll scroll-smooth scrollbar-thin scrollbar-thumb-primarygreen/50 scrollbar-track-transparent py-4">
      {courses.map((course) => (
        <div key={course.id} className="flex-shrink-0">
          <LearnJS item={course} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default LearnMain;