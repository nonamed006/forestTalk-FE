import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PORT } from "../../set";
import { Card, Divider, Typography, Button } from "antd"; // Import Button component
import "./FileBoardDetail.css";

const FileBoardDetail = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const bSeq = params.get("bSeq");

  const [item, setItem] = useState({});
  const { Title, Text } = Typography;

  useEffect(() => {
    fetch(`${PORT}/board/fileBoardDetail?bSeq=${bSeq}`)
      .then((response) => response.json())
      .then((data) => {
        const boardData = data.voData;
        setItem(boardData);
      });
  }, [bSeq]);

  const handleDownload = () => {
    window.location.href = `${PORT}/board/downloadFile?bSeq=${bSeq}`;
  };

  return (
    <div>
      <Card>
        <Title level={2}>{item.btitle}</Title>
        <Text className="author">작성자: {item.useq}</Text>
        <Divider />
        <div className="info-container">
          <div className="left-info">
            <Text>작성날짜: {item.cdt}</Text>
          </div>
          <div className="right-info">
            <Text>조회수: {item.bcount}</Text>
          </div>  
        </div>
        <Divider />
        <Text>{item.bcontents}</Text>
        {item.bfileOriginNm && (
          <Button type="primary" onClick={handleDownload}>
            파일 다운로드
          </Button>
        )}
      </Card>
    </div>
  );
};

export default FileBoardDetail;
