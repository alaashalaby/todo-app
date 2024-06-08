interface Todo {
  title: string;
  id: string;
  isCompleted: boolean;
}
interface TodosProps {
  todos: Todo[];
  filter: string;
}
