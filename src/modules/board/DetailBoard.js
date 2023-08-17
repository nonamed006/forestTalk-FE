import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import React from 'react';
import { PORT } from '../../set';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, List, Space, Table, Button } from 'antd';

import './Board.css';

export default function DetailBoard() {

  console.log("디테일 보드 인");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const bSeq = params.get('bSeq');

  //좋아요 상태 변경
  const [liked, setLiked] = useState(0);

  console.log("디테일보드에서!! : " + bSeq);

  const [boardDataSec, setBoardDataSec] = useState([]);

  // 조회수 올리기
  useEffect(() => {

    fetch(`${PORT}/userBoard/updateView?bSeq=${bSeq}`, {
      method: "get",
    })
      .then((res) => res.json())  // 데이터를 텍스트로 추출
      .then((data) => {
        console.log("View update complete!");
      });
  }, []);

  // bSeq에 따른 상세 정보들 가져오기
  useEffect(() => {
    fetch(`${PORT}/userBoard/selectDetailBoard?bSeq=${bSeq}`, {
      method: "get",
    })
      .then((res) => res.json())  // 데이터를 텍스트로 추출
      .then((data) => {
        const boardData = data.voData;  // 데이터를 상태에 설정, 첫번째 data는 response의 data, 두번째 data는 Spring ApiResult 클래스의 List 이름이 data

        console.log("데이터 리스트 훗" + boardData.liked);

        const updatedDataSec = {
          key: 0,
          bSeq: boardData.bseq,
          uSeq: boardData.useq,
          bTitle: boardData.btitle,
          bContents: boardData.bcontents,
          bCount: boardData.bcount,
          cdt: boardData.cdt,
          liked: boardData.liked,

        };


        let list = [];
        list.push(updatedDataSec);

        setBoardDataSec(list);


        console.log("updateDataSec.key : " + updatedDataSec.cdt);

      });
  }, [liked]);


  console.log(boardDataSec[0]?.bTitle);

  //--------------------------------------------------------------
  const data = Array.from({
    length: 1,
  }).map((_, i) => ({
    href: 'https://ant.design',
    title: boardDataSec[0]?.bTitle,
    description: (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          작성자 : {boardDataSec[0]?.uSeq}
        </div>
        <div>
          작성일 : {boardDataSec[0]?.cdt}
        </div>
        <div>
          조회수 : {boardDataSec[0]?.bCount}
        </div>
      </div>
    ),
    content:
      boardDataSec[0]?.bContents,
  }));
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  //----------------돌아가기 버튼
  const BackToList = () => {
    console.log("돌아가라!");
    navigate('/board/userboard');
  };
  //----------------삭제버튼
  const navigate = useNavigate();
  const DeleteButton = () => {
    console.log("삭제해라!");

    fetch(`${PORT}/userBoard/deleteBoard?bSeq=${bSeq}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Delete Board complete!");
      });

    navigate('/board/userboard');
  };

  //-----------------좋아요 버튼
  const likeClick = () => {
    console.log("좋아욥!");

    fetch(`${PORT}/userBoard/likeBoard?bSeq=${bSeq}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Like Board complete!");

        setLiked(prevLiked => prevLiked + 1);
      
      });

    console.log("---------liked !! : " + liked);
  };

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        <li> <h1>상세 페이지</h1></li>
        <li>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 1,
          }}
          dataSource={data}




          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <a href="#" onClick={likeClick}>
                  <IconText icon={LikeOutlined} text={boardDataSec[0]?.liked} key="list-vertical-like-o" />
                </a>,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              ]}
            >

              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              ></List.Item.Meta>

              <div>
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              </div>

              {item.content}

              <li className="registButton">

        </li>
            </List.Item>

            


          )}

          footer={
            
            <div>
              <Button onClick={BackToList}>돌아가기</Button>
              <Button onClick={DeleteButton}>삭제</Button>
              <br/>
              <br/>
              <b>여기에 댓글 넣으면 됨</b> 뽀잉
            </div>
          }
        />
        </li>
      </ul>
    </div>
  );
}