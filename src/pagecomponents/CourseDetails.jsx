import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseData } from "../context/CourseContext";
import { server } from "..";
import Loading from "../Pages/Loading/Loading";

const CourseDetails = () => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();

  

  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id]);

  const checkoutHandler = async () => {
    
  }




  return (
    <div>
      {course === undefined ? (
        <div><Loading/></div> 
      ) : (
        <div className="card">
          <div className="row mx-2 py-3">
            <div className="rounded-md ">
              <img
                src={`${server}/${course.image}`}
                alt="Courses"
                height={250}
                width={350}
                className="br-5"
              />
            </div>
            <div className="details">
              <div className="mentor py-3">
                <p className="fs-4 m-0 text-danger fw-bold ">{course.createdBy}</p>
                <div className=" m-0 fw-bold fs-3">{course.title}</div>
                <div className="description m-0">
                  <p className="m-0 my-1">
                    Learn React basics like components, props, state, hooks, and
                    routing. Build real-world projects, optimize performance,
                    and deploy your apps online!
                  </p>
                </div>

                <div className="modules">
                  <div className=" m-0 fw-bold fs-3">Modules</div>
                  <div className="modulesList">
                    <ul className="mt-2">
                      <li>Module Name</li>
                      <li>Module Name</li>
                    </ul>
                  </div>
                </div>

                <div className="prices m-0">
                  <s>₹1500</s>{" "}
                  <span className="fw-bold fs-5 my-1">
                    Just ₹ {course.price}
                  </span>
                </div>
                <button
                onClick={checkoutHandler}
                className="btn primary-bg text-white mt-3 fw-bold my-1">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// const CourseDetails = () => {
//   const params = useParams();
//   const { fetchCourse, course } = CourseData();
// console.log(fetchCourse, course);

//   useEffect(() => {
//   fetchCourse(params.id);
// }, [params.id]);

//   console.log(params.id);
//   return (
//     <div>
//       {course && (
//         <div className="card">
//           <div className="row mx-2 py-3">
//             <div className="rounded-md ">
//               <img
//                 src={`${server}/${course.image}`}
//                 alt="Courses"
//                 height={300}
//                 width={300}
//                 className="br-5"
//               />
//             </div>
//             <div className="details">
//               <div className="mentor py-3">
//                 <p className="fs-4 m-0">{course.createdBy}</p>
//                 <div className=" m-0 fw-bold fs-3">
//                   {course.title}
//                 </div>
//                 <div className="description m-0">
//                   <p className="m-0 my-1">
//                     Learn React basics like components, props, state, hooks, and
//                     routing. Build real-world projects, optimize performance,
//                     and deploy your apps online!
//                   </p>
//                 </div>
//                 <div className="prices m-0">
//                   <s>₹1500</s>{" "}
//                   <span className="fw-bold fs-5 my-1">Just ₹ 499</span>
//                 </div>
//                 <div className="languages m-0 my-4">
//                   <h6>Languages : </h6>
//                   <ul>
//                     <li>Tamil</li>
//                     <li>English</li>
//                     <li>French</li>
//                     <li>Spanish</li>
//                   </ul>
//                 </div>
//                 <button className="btn primary-bg text-white fw-bold  my-1">
//                   Register
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default CourseDetails;
