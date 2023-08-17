import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PORT } from "../../set";

/*
 자료 게시판 게시물 등록
 박은빈
*/

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label}는 필수입니다!",
};

const RegistFileBoard = () => {
  //작성 성공후 넘어갈 navigate 객체 생성
  const navigate = useNavigate();

  const [file, setFile] = React.useState(null);

  // submit 된 데이터들 values로 넘어옴
  const onFinish = (values) => {
    console.log(values);

    // values 객체를 서버로 전송하는 fetch 호출
    fetch(`${PORT}/board/registerFileBoard`, {
      method: "post", // POST 요청으로 변경 (또는 필요한 HTTP 메서드로 변경)
      body: values,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("등록 Status : " + data.result);
        let result = data.result;
        if (result === "SUCCESS") {
          //navigate("/board/fileBoard");
        }
      });
  };

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
          name="bTitle"
          label="제목"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="bContents" label="내용">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Form.Item
            name="bFile"
            label="파일 업로드"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }
              return e && e.fileList;
            }}
          >
            <Upload
              name="file"
              beforeUpload={(file) => {
                setFile(file); // 업로드된 파일을 상태로 설정
                return false; // 업로드 동작을 중단
              }}
              fileList={file ? [file] : []}
            >
              <Button icon={<UploadOutlined />}>파일 선택</Button>
            </Upload>
          </Form.Item>
          <Button type="primary" htmlType="submit" >
            작성
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistFileBoard;
