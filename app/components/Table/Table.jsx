// * Add Components
import { Table } from "antd";
import * as styles from "./Table.module.css";

const MyTable = ({ data, page, setPage }) => {
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

  return (
    <div className={styles.table}>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{ current: page, onChange: (val) => setPage(val) }}
      />
    </div>
  );
};

export default MyTable;
