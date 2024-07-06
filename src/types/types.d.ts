interface Todo {
  title: string;
  id: string;
  isCompleted: boolean;
  category:Category
}
interface TodosProps {
  todos: Todo[];
  filter: string;
}
interface Category {
  name: string;
  color: string;
  id: string;
}