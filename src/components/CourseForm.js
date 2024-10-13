import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { changeCost, changeDescription, changeName } from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

function CourseForm() {
  const {name, description, cost} = useSelector((store) => store.form);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCourse({name,description,cost}));
  }

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input className="input is-expanded" onChange={(event) => dispatch(changeName(event.target.value))} value={name}/>
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea className="input is-expanded" onChange={(event) => dispatch(changeDescription(event.target.value))} value={description}/>
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input className="input is-expanded" type="number" onChange={(event) => dispatch(changeCost(parseInt(event.target.value)))} value={cost}/>
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
