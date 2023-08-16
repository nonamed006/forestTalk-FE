import React from 'react';
import { Button, Divider, Input, Space } from 'antd';

const { TextArea } = Input;

const Comment = () => {
	return (
		<div>
			<TextArea rows={4} placeholder="댓글을 입력하세요." maxLength={200} />
			<Space direction="vertical" style={{
				display: 'flex',
				flexDirection: 'row-reverse',
				marginTop: '10px'
				}}>
				<Button type="primary" size={'large'}>
					Primary
				</Button>
			</Space>
			<Divider orientation="left" orientationMargin="0" style={{backgroundColor:'lightgray'}} />
		</div>
	);
};

export default Comment;