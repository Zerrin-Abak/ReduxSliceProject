import React from "react";
import { useSelector } from "react-redux";

function CourseValue() {
  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) => {
    return data
      .filter((course) => {
        return course.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, course) => {
        return acc = acc + course.cost;
      }, 0);
  });

  return <div className="course-price">Toplam Tutar: {totalCost} TL</div>;
}

export default CourseValue;
