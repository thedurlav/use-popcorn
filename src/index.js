import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// const TextRating = () => {
//   const [rating, setRating] = useState(0);
//   return (
//     <>
//       <p>The rating of start is {rating} </p>
//       <StarRating
//         onSetRating={setRating}
//         maxRating={5}
//         messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//       />
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>{<App />}</React.StrictMode>);
