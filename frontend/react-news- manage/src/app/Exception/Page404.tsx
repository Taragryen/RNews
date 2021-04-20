import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 404错误页面
 */
function Page404() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在"
      extra={
        <Button
          icon={<ArrowLeftOutlined />}
          type="primary"
          onClick={() => {
            navigate('/');
          }}
        >
          回到首页
        </Button>
      }
    />
  );
}

export default Page404;
