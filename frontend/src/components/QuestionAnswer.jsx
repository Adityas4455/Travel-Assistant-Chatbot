import React, { useState } from "react";

function QuestionAnswer() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnswer("Feature coming soon!");
  };

  return (
    <div>
      <h2>Ask a Travel Question</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your question..." value={question} onChange={e => setQuestion(e.target.value)} />
        <button type="submit">Ask</button>
      </form>
      {answer && <p>{answer}</p>}
    </div>
  );
}

export default QuestionAnswer;
