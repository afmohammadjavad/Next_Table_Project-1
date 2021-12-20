import { Table } from "antd";
import useFetch from "../../hooks/useFetch";

const MyTable = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

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
