
import { useEffect, useState } from "react";
import { Space, Table, Tag } from 'antd';
import { PORT } from '../set';

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

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

export default function UserBoard() {
    const [boardData, setBoardData] = useState([]);

	useEffect(() => {
		fetch(`${PORT}/test/userBoard`, {
			method: "get",
		})
        .then((res) => res.json())  // 데이터를 텍스트로 추출
        .then((data) => {
            setBoardData(data.data);  // 데이터를 상태에 설정
            console.log(data.data);
        });
	}, []);

    return (
        <div>

            <Table columns={columns} dataSource={data}/> 

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
