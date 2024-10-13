import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourse } from "../store/slices/courseSlice";

function CourseList() {
  const courses = useSelector(({form, courses: {data, searchTerm}}) => {
    const filteredCourses = data.filter((course) => {
      return course.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    return filteredCourses;
  });
  
  const dispatch = useDispatch();

  const renderedCourses = courses.map((course) => {
    return (
      <div key={course.id} className="panel">
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost} TL</p>
        <button className="button is-danger" onClick={() => dispatch(deleteCourse(course.id))}>Sil</button>
      </div>
    );
  });

  return (
    <div className="course-list">
      {renderedCourses}
    </div>
  );
}

export default CourseList;
