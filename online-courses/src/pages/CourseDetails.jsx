import { useParams, Link } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Course Details {id}</h2>
      <p>This is course description</p>
      <Link to={`/video/${id}`}>Watch Video</Link>
    </div>
  );
}

export default CourseDetails;