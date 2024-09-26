import React, { useState } from 'react';
import CourseList from './CourseList';
import './CollegeList.css';

function CollegeList({ colleges }) {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };

  return (
    <div className="college-list">
      {colleges.map(college => (
        <div 
          key={college.id} 
          className="college-card" 
          onClick={() => handleCollegeClick(college)}
        >
          <h2>{college.collegeName}</h2>
          <p><strong>Accommodation:</strong> {college.accommodation}</p>
          <p><strong>Accommodation Fee:</strong> ${college.accommodationFee}</p>
        </div>
      ))}

      {selectedCollege && (
        <div className="course-details">
          <h2>Courses at {selectedCollege.collegeName}</h2>
          <CourseList collegeId={selectedCollege.id} /> {/* Pass the collegeId to CourseList */}
        </div>
      )}
    </div>
  );
}

export default CollegeList;
