import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseList.css';

function CourseList({ collegeId }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    if (collegeId) {
      // Fetch courses by collegeId when the component mounts or collegeId changes
      axios.get(`http://localhost:8080/api/colleges/${collegeId}/courses`)
        .then(response => {
          setCourses(response.data);
          setLoading(false); // Stop loading once data is fetched
        })
        .catch(error => {
          console.error('Error fetching courses:', error);
          setError('Error fetching courses');
          setLoading(false);
        });
    }
  }, [collegeId]);

  if (loading) {
    return <p>Loading courses...</p>; // Show loading text
  }

  if (error) {
    return <p>{error}</p>; // Display error if any occurs
  }

  if (courses.length === 0) {
    return <p>No courses available for this college.</p>; // Show message if no courses are found
  }

  return (
    <div className="course-list">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <h3>{course.courseName}</h3>
          <p><strong>Fee:</strong> ${course.courseFee}</p>
          <p><strong>Duration:</strong> {course.duration} years</p>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
