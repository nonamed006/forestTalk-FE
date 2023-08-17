import { useEffect, useState } from "react";
import { PORT } from '../../set';
import { useLocation } from 'react-router-dom';


export default function DetailBoard() {

    console.log("디테일 보드 인");

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const bSeq = params.get('bSeq');

    console.log("디테일보드에서!! : " + bSeq);

    const [boardDataSec, setBoardDataSec] = useState({});

    // 조회수 올리기
    useEffect(() => {
      fetch(`${PORT}/userBoard/updateView?bSeq=${bSeq}`, {
        method: "get",
      })
        .then((res) => res.json())  // 데이터를 텍스트로 추출
        .then((data) => {  
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
    
            console.log("데이터 리스트 훗" + boardData.cdt);
    
            setBoardDataSec(boardData);
    
          });
      }, []);


  return (
    <div>
        <h1>상세 페이지</h1>
                <div>
                    <p>bSeq: {boardDataSec.bSeq}</p>
                    <p>uSeq: {boardDataSec.uSeq}</p>
                    <p>bTitle: {boardDataSec.bTitle}</p>
                    <p>bCount: {boardDataSec.bCount}</p>
                    <p>CDT: {boardDataSec.cdt}</p>
                </div>
    </div>
  );
}