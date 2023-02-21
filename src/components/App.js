import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then((r) => r.json())
      .then((data) => {
        // console.log("App:", data);
        setQuestions(data);
      });
  }, []);

  function handleSubmitData(userData) {
    console.log("App:", userData);
    setQuestions([...questions, userData]);
  }

  function handleDeleteItem(deleteItem) {
    // console.log("App:", deleteItem);
    const updatedItems = questions.filter(
      (question) => question.id !== deleteItem.id
    );
    setQuestions(updatedItems);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onSubmitData={handleSubmitData} />
      ) : (
        <QuestionList questions={questions} onDeleteItem={handleDeleteItem} />
      )}
    </main>
  );
}

export default App;
