import { type Todo } from '../App';
import './TodoItem.css'; // 아이템용 CSS

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  // 체크박스 클릭 시
  const handleToggle = () => {
    onToggle(todo.id);
  };

  // 'X' 버튼 클릭 시
  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={handleToggle} />
      {/* todo.done이 true이면 'done' 클래스 추가 (취소선용) */}
      <span className={todo.done ? 'done' : ''}>{todo.text}</span>
      <button onClick={handleRemove}>X</button>
    </li>
  );
}