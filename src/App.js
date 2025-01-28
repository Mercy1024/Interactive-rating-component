import { useEffect, useState } from "react";
import starIcon from "./images/icon-star.svg";
import thankYouIllustration from "./images/illustration-thank-you.svg";

export default function App() {
  const [rating, setRating] = useState(0);
  const [thankYouState, setThankYouState] = useState(true);

  useEffect(() => {
    console.log(rating);
  }, [rating]);
  function handleRating(id) {
    if (id !== rating) {
      setRating(id);
    } else {
      return;
    }
  }

  return (
    <div className="App">
      {thankYouState ? (
        <div className="container1">
          <Star />
          <Main />
          <Interaction rating={rating} handleRating={handleRating} />
          <Submit
            rating={rating}
            thankYouState={thankYouState}
            setThankYouState={setThankYouState}
          />
        </div>
      ) : (
        <ThankYouComponent rating={rating} />
      )}
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
}

function Star() {
  return (
    <div className="star">
      <img src={starIcon} alt="star" loading="lazy" />
    </div>
  );
}

function Interaction({ rating, handleRating }) {
  return (
    <div className="ratings">
      <span
        className={rating === 1 ? "rating_click" : "rating_unclick"}
        onClick={() => handleRating(1)}
        id="1"
      >
        1
      </span>
      <span
        className={rating === 2 ? "rating_click" : "rating_unclick"}
        onClick={() => handleRating(2)}
        id="2"
      >
        2
      </span>
      <span
        className={rating === 3 ? "rating_click" : "rating_unclick"}
        onClick={() => handleRating(3)}
        id="3"
      >
        3
      </span>
      <span
        className={rating === 4 ? "rating_click" : "rating_unclick"}
        onClick={() => handleRating(4)}
        id="4"
      >
        4
      </span>
      <span
        className={rating === 5 ? "rating_click" : "rating_unclick"}
        onClick={() => handleRating(5)}
        id="5"
      >
        5
      </span>
    </div>
  );
}

function Submit({ rating, thankYouState, setThankYouState }) {
  function handleSubmit() {
    return rating >= 1 ? setThankYouState(!thankYouState) : "";
  }
  return (
    <div onClick={() => handleSubmit()} className="submit">
      SUBMIT
    </div>
  );
}

function ThankYouComponent({ rating }) {
  return (
    <div className="container2">
      <img src={thankYouIllustration} alt="illustration" loading="lazy" />
      <p className="selection">You selected {rating} out of 5</p>
      <div className="content">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give rating. If you ever more
          support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
