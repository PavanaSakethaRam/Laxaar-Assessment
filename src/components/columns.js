import React from "react";
import { Space, Tooltip } from "antd";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  MailOutlined,
  PrinterOutlined,
} from "@ant-design/icons";

const handleIconClick = (action, record) => {
  console.log(`Icon clicked: ${action}, Record:`, record);
};

const columns = [
  {
    title: "Customer Name",
    dataIndex: "customerName",
    width: 67,
    align: "Left",
  },
  {
    title: "Date",
    dataIndex: "date",
    width: 153,
    align: "Left",
  },
  {
    title: "Job Number",
    dataIndex: "jobNumber",
    width: 93,
    align: "Left",
  },
  {
    title: "Mobile Number",
    dataIndex: "mobileNumber",
    width: 95,
    align: "Left",
  },
  {
    title: "Status",
    dataIndex: "status",
    width: 100,
    align: "Left",
    render: (status) => {
      let color = "";
      if (status === "Completed") color = "#3BB900";
      else if (status === "Processing") color = "#FFA319";
      else if (status === "Cancel") color = "#FF1943";

      return <span style={{ color }}>{status}</span>;
    },
  },
  {
    title: "Actions",
    dataIndex: "actions",
    width: 100,
    align: "Left",
    render: (_, record) => (
      <Space size="middle">
        <Tooltip title="Edit" placement="top">
          <EditOutlined
            style={{
              color: "#F87060",
            }}
            onClick={() => handleIconClick("Edit", record)}
          />
        </Tooltip>
        <Tooltip title="View" placement="top">
          <EyeOutlined
            style={{
              color: "#F87060",
            }}
            onClick={() => handleIconClick("View", record)}
          />
        </Tooltip>
        <Tooltip title="Delete" placement="top">
          <DeleteOutlined
            style={{
              color: "#F87060",
            }}
            onClick={() => handleIconClick("Delete", record)}
          />
        </Tooltip>
        <Tooltip title="Mail" placement="top">
          <MailOutlined
            style={{
              color: "#F87060",
            }}
            onClick={() => handleIconClick("Mail", record)}
          />
        </Tooltip>
        <Tooltip title="Print" placement="top">
          <PrinterOutlined
            style={{
              color: "#F87060",
            }}
            onClick={() => handleIconClick("Print", record)}
          />
        </Tooltip>
      </Space>
    ),
  },
];

export default columns;
