import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { addCategory } from '../../api/categories';
import { layout } from '../../utils/formLayout';

interface Props {
  visible: boolean;
  onClose: () => void;
}

/**新增新闻类型Modal表单 */
export default function AddCategoryModal({ visible, onClose }: Props) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOk = async (values: any) => {
    try {
      await addCategory(values);
      form.resetFields();
      onClose();
    } finally {
      setConfirmLoading(false);
    }
  };

  return (
    <>
      <Modal
        title="新增新闻类型"
        width="50%"
        visible={visible}
        destroyOnClose
        onCancel={onClose}
        onOk={() => {
          form.submit();
        }}
        cancelText="关闭"
        okText="确定"
        confirmLoading={confirmLoading}
      >
        <Form {...layout} name="category" form={form} onFinish={handleOk}>
          <Form.Item
            label="英文名称"
            name="name"
            rules={[{ required: true, message: '请输入英文名称!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="中文名称"
            name="cn_name"
            rules={[{ required: true, message: '请输入中文名称!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="描述"
            name="desc"
            rules={[{ required: true, message: '请输入描述!' }]}
          >
            <Input.TextArea autoSize />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
