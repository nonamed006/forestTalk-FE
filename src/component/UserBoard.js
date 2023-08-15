
import { useEffect, useState } from "react";
import { Space, Table, Tag } from 'antd';
import { PORT } from '../set';

/*
 회원 게시판 화면
 김선규
*/

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

export default function UserBoard() {
    // const [boardData, setBoardData] = useState([]);/
    const [boardDataSec, setBoardDataSec] = useState([]);

    let dataSec = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
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
                name: '로시',
                age: 1, // 예시로 고정된 값을 사용
                address: boardData[index].btitle, // 예시로 고정된 값을 사용
                tags: ['강아지', '고양이'], // 예시로 고정된 값을 사용
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
