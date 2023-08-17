// import { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber } from 'antd';
// import { useNavigate } from 'react-router-dom';
import { PORT } from '../../set';
import './Board.css';
import '../../App';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: '${label} is required!',

  };
  
  // submit 된 데이터들 values로 넘어옴 
  const onFinish = (values) => {
    console.log(values);


    // values 객체를 서버로 전송하는 fetch 호출
    fetch(`${PORT}/userBoard/registBoard`, {
        method: "post", // POST 요청으로 변경 (또는 필요한 HTTP 메서드로 변경)
        headers: {
            "Content-Type": "application/json", // 전송할 데이터의 형식을 지정
        },
        body: JSON.stringify(values), // values 객체를 JSON 문자열로 변환하여 전송
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("등록 Status : " + data.result);
    });
  };

/*
 게시물 등록 화면
 김선규
*/


export default function RegistBoard() {

    console.log("레지스트 보드 인");


  return (

      <div>
          <h1>회원 게시물 등록</h1>

          <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{
                  maxWidth: 600,
              }}
              validateMessages={validateMessages}
          >
              <Form.Item
                  name={['user', 'name']}
                  label="작성자"
                  rules={[
                      {
                          required: true,
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item
                  name={['user', 'title']}
                  label="제목"
                  rules={[
                      {
                        required: true,
                      },
                  ]}
              >
                  <Input />
              </Form.Item>
              <Form.Item name={['user', 'contents']} label="내용">
                  <Input.TextArea />
              </Form.Item>
              <Form.Item
                  wrapperCol={{
                      ...layout.wrapperCol,
                      offset: 8,
                  }}
              >
                  <Button type="primary" htmlType="submit">
                      작성
                  </Button>
              </Form.Item>
          </Form>
      </div>
);

}
