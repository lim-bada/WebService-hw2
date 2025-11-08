import { useState, type FormEvent, type ChangeEvent } from 'react';

// App.tsx로부터 onAdd 함수를 props로 받습니다.
type TodoInsertProps = {
  onAdd: (text: string) => void;
};

export default function TodoInsert({ onAdd }: TodoInsertProps) {
  const [value, setValue] = useState('');

  // input 값이 바뀔 때마다 value 상태 업데이트
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 폼이 제출(submit)되었을 때
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    const text = value.trim();
    if (!text) return; // 빈 값은 추가하지 않음

    onAdd(text); // 부모(App)로부터 받은 onAdd 함수 실행
    setValue(''); // 입력창 비우기
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하고 Enter"
        value={value}
        onChange={onChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}