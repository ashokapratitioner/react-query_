import { useCallback, useState } from "react";
import PaginationRoundedComponent from "../../components/PaginationComponent/PaginationRoundedComponent";
import TodoItem from "../../components/TodoComponent/TodoItemComponent";
import { useTodosQuery } from "../../hooks/react-query/query/query";
import styles from "./todos.module.css";

// consider making this dynamic, or change as per your requirement
const limit = 5;

const TodoPage = () => {
  const [page, setPage] = useState(1);
  const { isError, error, data, isLoading, isPlaceholderData } = useTodosQuery(
    limit,
    page
  );

  const onPageChange = useCallback((_page) => {
    setPage(_page);
  });

  if (isLoading && !isPlaceholderData) return <>Loading...</>;

  if (isError) return <>{error.message}</>;

  const {
    data: { data: todos, pages },
  } = data;

  return (
    <div className={styles.custom_card}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} data={todo} />
      ))}
      <PaginationRoundedComponent count={pages} onPageChange={onPageChange} />
    </div>
  );
};

export default TodoPage;
