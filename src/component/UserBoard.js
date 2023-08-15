
import { useEffect, useState } from "react";
import { Space, Table, Tag } from 'antd';
import { PORT } from '../set';

/*
 회원 게시판 화면
 김선규
*/

const columns = [
    {
      title: '순번',
      dataIndex: 'bSeq',
      key: 'bSeq',
      width: '10%',
    },
    {
      title: '작성자',
      dataIndex: 'uSeq',
      key: 'uSeq',
    },
    {
      title: '제목',
      dataIndex: 'bTitle',
      key: 'bTitle',
      width: '40%',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '조회수',
      dataIndex: 'bCount',
      key: 'bCount',
    },
    {
      title: '작성일',
      dataIndex: 'CDT',
      key: 'CDT',
    },

    //<나중에 사용할 태그 형식>
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },

    //<나중에 사용할 Space 형식>
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

export default function UserBoard() {
    // const [boardData, setBoardData] = useState([]);/
    const [boardDataSec, setBoardDataSec] = useState([]);

    let dataSec = [
      {
        key: 0,
        bSeq: 0,
        uSeq: 0,
        bTitle: '',
        bCount: 0,
        CDT: '',
    
        // tags: ['nice', 'developer'],
      },
    ];

	useEffect(() => {
		fetch(`${PORT}/test/userBoard`, {
			method: "get",
		})
        .then((res) => res.json())  // 데이터를 텍스트로 추출
        .then((data) => {
            const boardData = data.data;  // 데이터를 상태에 설정, 첫번째 data는 response의 data, 두번째 data는 Spring ApiResult 클래스의 List 이름이 data

            console.log(boardData);

            const updatedDataSec = dataSec.map((boardItem, index) => {

              console.log(boardData[index].bseq);

              return {
                key: index,
                bSeq: boardData[index].bseq,
                uSeq: boardData[index].useq,
                bTitle: boardData[index].btitle,
                bCount: boardData[index].bcount,
                CDT: boardData[index].cdt,
                
                // tags: ['강아지', '고양이'], 
              };
            });

            setBoardDataSec(updatedDataSec);

        });
	}, []);

    return (
        <div>

            <Table columns={columns} dataSource={boardDataSec}/> 

            {/* <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Test</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {boardData.map((boardItem, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{boardItem.cdt}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

            </Table> */}

        </div>



    )

}
