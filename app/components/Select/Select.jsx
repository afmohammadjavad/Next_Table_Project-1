// * Add Components
import { Select } from "antd";
import * as styles from "./Select.module.css";

const { Option } = Select;

function MySelect({ options, setSelectedOption, setPage }) {
  return (
    <div className={styles.select}>
      <Select
        defaultValue={undefined}
        placeholder="select user"
        style={{ width: 120 }}
        onChange={(val) => {
          setSelectedOption(val);
          setPage(1);
        }}
      >
        <Option value={undefined}>All Users</Option>
        {options.map((option) => (
          <Option key={option.id} value={option.id}>
            {option.username}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default MySelect;
