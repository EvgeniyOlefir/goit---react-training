import { useState } from "react";
import s from "../Todos/todosInputForm.module.scss";

const TodosInputForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const [urgency, setUrgency] = useState("low");

  const toggleForm = () => setShowForm((prevValue) => !prevValue);
  const handleInputChange = (e) => setValue(e.target.value);
  const handleUrgencyChange = (e) => setUrgency(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={s.todosInputForm}>
      {showForm ? (
        <form className={s.form} onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleInputChange} />
          <div>
            <span>urgency</span>
            <label>
              <input
                type="radio"
                value="low"
                checked={urgency === "low"}
                onChange={handleUrgencyChange}
              />
              <span>low</span>
            </label>

            <label>
              <input
                type="radio"
                value="medium"
                checked={urgency === "medium"}
                onChange={handleUrgencyChange}
              />
              <span>medium</span>
            </label>

            <label>
              <input
                type="radio"
                value="high"
                checked={urgency === "high"}
                onChange={handleUrgencyChange}
              />
              <span>high</span>
            </label>
          </div>
          <div className={s.buttons}>
            <button onClick={toggleForm}>Cancel</button>
            <button type="submit">Add todo</button>
          </div>
        </form>
      ) : (
        <button onClick={toggleForm}>+ Add todo</button>
      )}
    </div>
  );
};

export default TodosInputForm;
