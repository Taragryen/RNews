import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  EyeOutlined,
  FormOutlined,
  ReadOutlined,
  TagsOutlined,
} from '@ant-design/icons';

/**侧边栏导航菜单 */
const LayoutMenu = () => {
  const { pathname } = useLocation();

  return (
    <Menu mode="inline" style={{ border: 'none' }} selectedKeys={[pathname]}>
      <Menu.Item key="/news/publish" icon={<FormOutlined />}>
        <Link to="/news/publish">新闻发布</Link>
      </Menu.Item>
      {/* <Menu.Item key="/news/review" icon={<EyeOutlined />}>
        <Link to="/news/review">新闻审核</Link>
      </Menu.Item> */}
      <Menu.Item key="/news/manage" icon={<ReadOutlined />}>
        <Link to="/news/manage">新闻管理</Link>
      </Menu.Item>
      <Menu.Item key="/categories/manage" icon={<TagsOutlined />}>
        <Link to="/categories/manage">类型管理</Link>
      </Menu.Item>
    </Menu>
  );
};

export default LayoutMenu;
