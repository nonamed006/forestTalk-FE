import React, { useEffect, useState } from "react";
import { Button, Input, Select, Space, Table, Tag } from "antd";
import { PORT } from "../../set";
import { Link, useNavigate } from "react-router-dom";
import "./Board.css";

/*
 자료 게시판 화면
 박은빈
*/

// colums명

const FileBoard = () => {
  // 상태가 바뀔때마다 해당 변수를 업데이트
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  let fileItems = [];

  //페이징 사이즈 설정
  const [pageSize, setPageSize] = useState(5);
  const [bottom, setBottom] = useState("bottomCenter");
  
  //검색 누르면 검색 텍스트 콘솔에 띄우기
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const handleButtonClick = () => {
    console.log("button clicked!");
    navigate("/board/registboard");
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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
      render: (text, record) => (
        <Link to={`/board/detail/${record.bseq}`}>{text}</Link>
      ),
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
      <ul style={{ listStyleType: "none" }}>
        <li>
          <h1>자료 게시판 </h1>
        </li>
        <li className="registButton">
          <Button onClick={handleButtonClick}>글 작성하기</Button>
        </li>
        <li>
          <Table
            columns={columns}
            dataSource={items}
            pagination={{
              position: [bottom],
              pageSize: [pageSize],
            }}
          />
        </li>
        <li className="liStyles">
          <Space wrap>
            <Select
              defaultValue="전체"
              style={{
                width: 80,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "searchText",
                  label: "전체",
                },
                {
                  value: "searchTitleText",
                  label: "제목",
                },
                {
                  value: "searchWriterText",
                  label: "작성자",
                },
              ]}
            />
            <Search
              placeholder="검색어를 입력하세요."
              allowClear
              enterButton="검색"
              size="large"
              onSearch={onSearch}
              className="suffix"
            />
          </Space>
        </li>
      </ul>
    </div>
  );
};

export default FileBoard;
