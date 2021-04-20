import { Button, Form, Input, message } from 'antd';
import BraftEditor from 'braft-editor';
import React from 'react';
import { publishNew } from '../../api/news';
import { layout, tailLayout } from '../../utils/formLayout';
import CategoriesSelect from '../CategoriesManage/CategoriesSelect';

export function NewsPublishForm() {
  const onFinish = async (values: any) => {
    values.content = values.content.toHTML();
    await publishNew(values);
    message.success('新闻发布成功');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="newsPublishForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: '请输入标题' }]}
      >
        <Input placeholder="请输入标题" />
      </Form.Item>

      <Form.Item
        label="来源"
        name="src"
        rules={[{ required: true, message: '请输入来源' }]}
      >
        <Input placeholder="请输入来源" />
      </Form.Item>

      <Form.Item
        label="描述"
        name="description"
        rules={[{ required: true, message: '请输入来源' }]}
      >
        <Input placeholder="请输入描述" />
      </Form.Item>

      <Form.Item
        label="封面"
        name="pic"
        rules={[{ required: true, message: '请输入封面图片地址URL' }]}
      >
        <Input placeholder="请输入封面图片地址URL" />
      </Form.Item>

      <Form.Item
        label="类型"
        name="category"
        rules={[{ required: true, message: '请选择类型' }]}
      >
        <CategoriesSelect />
      </Form.Item>

      <Form.Item
        label="内容"
        name="content"
        rules={[{ required: true, message: '请输入内容' }]}
      >
        <BraftEditor
          style={{ border: '1px solid #d9d9d9' }}
          placeholder="请输入内容"
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
}
