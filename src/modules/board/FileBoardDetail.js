import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PORT } from "../../set";
import { Card, Divider, Typography } from "antd";
import "./FileBoardDetail.css";

const FileBoardDetail = ({hasFile}) => {
  // console.log("파일 디테일 보드 인");
  // console.log("어디서 에러가 나는거지");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const bSeq = params.get("bSeq");

  const [item, setItem] = useState({});
  const { Title, Text } = Typography;

  useEffect(() => { 
    fetch(`${PORT}/board/fileBoardDetail?bSeq=${bSeq}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const boardData = data.voData;
        setItem(boardData);
      });
  }, [bSeq]);

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
        {hasFile && (
          <div>
            {/* 파일이 있을 경우 파일 아이콘 등 표시 */}
            <Text>파일 첨부: 파일명.pdf</Text>
          </div>
        )}
      </Card>
    </div>
  );
};

export default FileBoardDetail;
