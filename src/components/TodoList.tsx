import TodoItem from './TodoItem';
import { type Todo } from '../App';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodoList({
  todos,
  onToggle,
  onRemove,
}: TodoListProps) {
  return (
    <ul className="TodoList">
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}