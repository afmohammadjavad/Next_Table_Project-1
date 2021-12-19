import { Table } from "antd";
// import { useEffect, useState } from "react";
import useFetch from '../../hooks/useFetch'

const MyTable = () => {


  // const [todos, setTodos] = useState([]);


  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos')

  // useEffect(() => {
  //   const getTodos = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const data = await response.json();
  //     setTodos(data);
  //   }

  //   getTodos();
  // })

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
    },
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default MyTable;