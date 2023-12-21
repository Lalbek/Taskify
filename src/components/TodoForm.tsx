import React, { useRef } from "react";
interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  //   const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  // setTitle(event.target.value);
  //   };

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      //   console.log(title);
      //   setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        // onChange={changeHandler}
        type="text"
        // value={title}
        id="title"
        placeholder="Write down the task"
        onKeyDown={keyDownHandler}
      />
      <label htmlFor="title" className="active">
        WRITE DOWN THE TASK
      </label>
    </div>
  );
};
