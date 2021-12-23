import { useState } from "react";
import AppLayout from "./AppLayout/AppLayout";
import Select from "./Select/Select";
import MyTable from "./Table/Table";
import useFetch from "../hooks/useFetch";

export default function App() {
  // * States of App Component
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [page, setPage] = useState(1);

  // * Get Todos
  const apiTodos = "https://jsonplaceholder.typicode.com/todos";
  const queryTodos = { userId: selectedUser };
  const { data: todos, loading, error } = useFetch(apiTodos, queryTodos);

  // * Get Users
  const apiUsers = "https://jsonplaceholder.typicode.com/users";
  const { data: users } = useFetch(apiUsers);

  return (
    <AppLayout>
      <Select options={users} setSelectedOption={setSelectedUser} setPage={setPage} />
      <MyTable data={todos} page={page} setPage={setPage} />
    </AppLayout>
  );
}
