import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { pathInfo, routeInfo } from './routeInfo';

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {


  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});


// path = board/all-board
const getItem = () => {
  return pathInfo.map((data, index) => {
    const thisMenuKeys = Object.keys(data);
    const Menu = data[thisMenuKeys[0]];
    return {
      key: thisMenuKeys[0],
      // icon: React.createElement(icon),
      label: thisMenuKeys[0],
      children: Menu.map((subMenu, index) => {
        return {
          key: subMenu,
          label: subMenu,
        };
      }),
    };
  })
}
const HeaderS = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  console.log('123',location);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={getItem()}
            onClick={(a) => { 
              const path_ = a.keyPath.reverse();
              const path =  '/' + path_.join('/');
              console.log('aazz', path);
              navigate(path); // 경로 변경
             }}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor:'white'
            }}
          >
           {routeInfo(location.pathname)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default HeaderS;