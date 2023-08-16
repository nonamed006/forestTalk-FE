import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { PORT } from "../../set";

/*
 자료 게시판 화면
 박은빈
*/

// colums명

const FileBoard = () => {
  // 상태가 바뀔때마다 해당 변수를 업데이트
  const [items, setItems] = useState([]);
  let fileItems = [];

  useEffect(() => {
    fetch(`${PORT}/board/fileBoard`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        data.data.map((item) => {
          item.key = item.bseq;
          fileItems.push(item);
          setItems(fileItems);
        });
      });
  }, []);

  const columns = [
    {
      title: "순번",
      dataIndex: "bseq",
      key: "bseq",
      width: "10%",
    },
    {
      title: "작성자",
      dataIndex: "useq",
      key: "useq",
    },
    {
      title: "제목",
      dataIndex: "btitle",
      key: "btitle",
      width: "40%",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "조회수",
      dataIndex: "bcount",
      key: "bcount",
    },
    {
      title: "작성일",
      dataIndex: "cdt",
      key: "cdt",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={items}
      />
    </div>
  );
};

export default FileBoard;
