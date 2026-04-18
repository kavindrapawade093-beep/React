import { Link } from "react-router-dom";
 
const courses = [
  {
    id: 1,
    title: "React JS Mastery",
    desc: "Learn React basics, hooks, and build modern web apps.",
    price: 499,
    image: " "
  },
  {
    id: 2,
    title: "Node JS Backend",
    desc: "Build APIs and backend apps using Node.js and Express.",
    price: 599,
    image: " "
  },
  {
    id: 3,
    title: "MongoDB Database",
    desc: "Learn MongoDB collections, queries, and data handling.",
    price: 399,
    image: "https://source.unsplash.com/300x200/?database"
  },
  {
    id: 4,
    title: "Full Stack Development",
    desc: "Build full stack apps using React, Node, and MongoDB.",
    price: 999,
    image: "https://source.unsplash.com/300x200/?coding"
  },
  {
    id: 5,
    title: "Python Programming",
    desc: "Learn Python basics and build simple real-world projects.",
    price: 449,
    image: "https://source.unsplash.com/300x200/?python"
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    desc: "Learn UI/UX design, wireframing, and user-friendly layouts.",
    price: 349,
    image: "https://source.unsplash.com/300x200/?design"
  }
];

 function CourseList() {

  const enrollCourse = (course) => {
    let existing = JSON.parse(localStorage.getItem("myCourses")) || [];
    existing.push(course);
    localStorage.setItem("myCourses", JSON.stringify(existing));
    alert(`Enrolled in ${course.title}`);
  };

  return (
    <div className="page">
      <h2 className="heading">Our Courses</h2>

      <div className="container">
        {courses.map((c) => (
          <div key={c.id} className="card">
            
            <img src={c.image} alt={c.title} className="image" />

            <h3 className="cardTitle">{c.title}</h3>

            <p className="desc">{c.desc}</p>

            <h4 className="price">₹{c.price}</h4>

            <Link to={`/course/${c.id}`} className="button">
              View Details
            </Link>

            <button
              className="enrollBtn"
              onClick={() => enrollCourse(c)}
            >
              Enroll Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
   
 
 
 