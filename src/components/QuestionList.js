import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setQuestions(data);
      });
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          /* display QuestionItem components here after fetching */
          questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))
        }
      </ul>
    </section>
  );
}

export default QuestionList;
