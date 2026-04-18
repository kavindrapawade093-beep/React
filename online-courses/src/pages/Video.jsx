import { useParams } from "react-router-dom";

function Video() {
  const { id } = useParams();

  return (
    <div>
      <h2>Course Video {id}</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dGcsHMXbSOA"
        title="YouTube video"
      ></iframe>
    </div>
  );
}

export default Video;