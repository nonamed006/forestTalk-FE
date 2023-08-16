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

    useEffect(() => {
        fetch(`${PORT}/userBoard/selectDetailBoard?bSeq=${bSeq}`, {
          method: "get",
        })
          .then((res) => res.json())  // 데이터를 텍스트로 추출
          .then((data) => {
            const boardData = data.voData;  // 데이터를 상태에 설정, 첫번째 data는 response의 data, 두번째 data는 Spring ApiResult 클래스의 List 이름이 data
    
            console.log("데이터 리스트 훗" + boardData.bseq);
    
            setBoardDataSec(boardData);
    
          });
      }, []);


  return (
    <div>
        <h1>상세 페이지</h1>
                <div>
                    <p>bSeq: {boardDataSec.bseq}</p>
                    <p>uSeq: {boardDataSec.useq}</p>
                    <p>bTitle: {boardDataSec.btitle}</p>
                    <p>bCount: {boardDataSec.bcount}</p>
                    <p>CDT: {boardDataSec.cdt}</p>
                </div>
    </div>
  );
}