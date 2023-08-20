import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
function SingleQuestion({ id, title, info, setActive, activeIndex }) {
  //   const [toggle, setToggle] = useState(false);
  const index = id === activeIndex;
  return (
    <article>
      <header>
        <h3>{title}</h3>
        <div className="icons" onClick={() => setActive(id)}>
          {index ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </div>
      </header>
      {index && <p>{info}</p>}
    </article>
  );
}
export default SingleQuestion;
