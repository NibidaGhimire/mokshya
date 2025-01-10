import { useParams } from "react-router-dom";


const EscapeRoom = () => {
    const {id} = useParams();
  return (
    <div className="flex  justify-center">
      {id === "javascript" && (
        <iframe
          src="https://view.genially.com/6780ac83fded692e5e661b6f/interactive-content-escapegame"
          width="1300"
          height="800"
          frameBorder="0"
          title="Escape Room Game"
          style={{ border: "1px solid #ccc" }}
          allowFullScreen
        ></iframe>
      )}
      {id === "python" && (
        <iframe
          src="https://view.genially.com/6780afb2fded692e5e67c51d/interactive-content-pythonbreakout"
          width="1600"
          height="800"
          frameBorder="0"
          title="Escape Room Game"
          style={{ border: "1px solid #ccc" }}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default EscapeRoom
