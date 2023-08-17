import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";

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
  const [file, setFile] = React.useState(null);

  const onFinish = (values) => {
    console.log("Form values:", values);
    console.log("Selected file:", file);
  };

  return (
    <div>
      <h1>회원 게시물 등록</h1>

      <Form
        {...layout}
        name="nest-messages"
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
          name="bFile"
          label="파일 업로드"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              setFile(e[0]); // 업로드된 파일을 상태로 설정
            }
            return e && e.fileList;
          }}
        >
          <Upload name="file" fileList={file ? [file] : []}>
            <Button icon={<UploadOutlined />}>파일 선택</Button>
          </Upload>
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
};

export default RegistFileBoard;
