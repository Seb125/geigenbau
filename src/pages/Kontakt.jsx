import { useState } from 'react';
import axios from 'axios';

function Kontakt() {

  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {from: from, subject: subject, text: text};

      await axios.post("http://localhost:5005/api/send-email", postData)


    } catch (error) {
      console.log(error);
    }

  };

  

  return (
    <div>
      <h2>Kontakt Formular</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Email</label>
        <input value={from} onChange={(e) => setFrom(e.target.value)}></input>
        <label>Subject</label>
        <input value={subject} onChange={(e) => setSubject(e.target.value)}></input>
        <label>Text</label>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button type="submit"> Send message </button>
      </form>
    </div>
  )
}

export default Kontakt