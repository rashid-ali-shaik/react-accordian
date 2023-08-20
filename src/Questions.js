import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";
function Questions() {
  const [ques, setQues] = useState(questions);
  const [activeIndex, setActiveIndex] = useState(null);

  const setActive = (e) => {
    const reset = e === activeIndex ? null : e;
    setActiveIndex(reset);
  };

  return (
    <section>
      <h1>Questions</h1>
      {ques.map((q) => {
        return (
          <SingleQuestion
            key={q.id}
            {...q}
            setActive={setActive}
            activeIndex={activeIndex}
          />
        );
      })}
    </section>
  );
}
export default Questions;
