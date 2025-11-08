import TodoItem from './TodoItem';
import { type Todo } from '../App'; // App.tsx에서 export한 Todo 타입 임포트

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
      {/* todos 배열을 map으로 순회하며 TodoItem 컴포넌트 렌더링 */}
      {todos.map((t) => (
        <TodoItem
          key={t.id} // React 리스트 렌더링 시 고유 key가 필수
          todo={t}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}