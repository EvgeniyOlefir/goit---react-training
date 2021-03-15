import TodosList from "../components/Todos/TodosList";
import TodosInputForm from "../components/Todos/TodosInputForm";

const TodosPage = () => {
  return (
    <div>
      <h1>Todos</h1>
      <TodosInputForm />
      <TodosList />
    </div>
  );
};

export default TodosPage;
