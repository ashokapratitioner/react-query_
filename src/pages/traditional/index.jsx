import { useEffect, useReducer } from "react";
import axios from "axios";
import TodoItem from "../../components/TodoComponent/TodoItemComponent";
import styles from "./todos.module.css";

const apiUrl = process.env.REACT_APP_API_URL;

const getTodos = async (callback) => {
  try {
    const response = await axios.get(`${apiUrl}/todos/1`);
    const data = response.data;
    if (callback) {
      callback(data);
    } else {
      return data;
    }
  } catch (err) {
    if (callback) {
      callback(null);
    } else {
      return null;
    }
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case "pending":
      return { ...state, data: null, loading: true };

    case "error":
      return { ...state, data: null, error: true };

    default:
      return state;
  }
};

const initialState = {
  data: null,
  error: false,
  loading: true,
};

const TodoPageTraditional = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, error, loading } = state;

  useEffect(() => {
    getTodos((data) => {
      if (data) {
        dispatch({ type: "success", payload: data });
      } else {
        dispatch({ type: "error" });
      }
    });
  }, []);

  if (loading) return <>Loading...</>;

  if (error) return <>Oops, something went wrong!</>;

  return (
    <div className={styles.custom_card}>
      <TodoItem data={data} />
    </div>
  );
};

export default TodoPageTraditional;
