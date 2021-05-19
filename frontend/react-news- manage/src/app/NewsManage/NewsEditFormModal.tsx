import { Button, Form, Input, message, Modal } from 'antd';
import BraftEditor from 'braft-editor';
import React from 'react';
import { updateNew } from '../../api/news';
import { layout, tailLayout } from '../../utils/formLayout';
import { New } from '../../utils/types';
import CategoriesSelect from '../CategoriesManage/CategoriesSelect';

const initialData = BraftEditor.createEditorState(
  '<p>经过4节激战，广东东莞大益以88比83战胜辽宁本钢，威姆斯全场贡献22分外加8个篮板，还有5次助攻，值得一提的是周鹏，10投6中，拿下18分，成为广东队的定海神针，而汤普森也值得称赞，5投3中，拿下8分，抢下13个篮板。本周四，广东与辽宁将进行系列赛的第二场比赛。</p>'
);

export function NewsEditFormModal({
  newData,
  visible,
  onClose,
}: {
  newData: New;
  visible: boolean;
  onClose: () => void;
}) {
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    values.content = values.content.toHTML();
    await updateNew(newData?._id, values);
    message.success('新闻更新成功');
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      destroyOnClose
      width={'80%'}
      visible={visible}
      onCancel={onClose}
      onOk={() => {
        form.submit();
      }}
    >
      <Form
        {...layout}
        name="newsPublishForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        initialValues={newData}
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
            value={initialData}
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
    </Modal>
  );
}
