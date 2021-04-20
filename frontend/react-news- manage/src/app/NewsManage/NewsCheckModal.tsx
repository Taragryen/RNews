import { Button, Modal } from 'antd';
import React from 'react';

interface Props {
  content: string;
  visible: boolean;
  onClose: () => void;
}

export default function NewsPreviewModal({ content, visible, onClose }: Props) {
  return (
    <>
      <Modal
        width="70%"
        visible={visible}
        destroyOnClose
        onCancel={onClose}
        cancelText="关闭"
        okText="确定"
        footer={[
          <Button key="close" onClick={onClose} type="primary">
            关闭
          </Button>,
        ]}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Modal>
    </>
  );
}
