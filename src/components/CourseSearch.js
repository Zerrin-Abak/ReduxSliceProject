import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { changeSearchTerm } from '../store/slices/courseSlice';

function CourseSearch() {
  const dispatch = useDispatch();
  const {searchTerm} = useSelector((store) => store.courses)
  return (
    <div className='list-header'>
      <h3 className='title is-3'>Kurslarım</h3>
      <div className='search field is-horizontal'>
        <label className='label'>Ara</label>
        <input className='input' onChange={(event) => dispatch(changeSearchTerm(event.target.value))} value={searchTerm}/>
      </div>
    </div>
  )
}

export default CourseSearch