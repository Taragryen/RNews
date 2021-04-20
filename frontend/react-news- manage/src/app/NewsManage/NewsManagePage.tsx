import React, { useState } from 'react';
import NewsPreviewModal from './NewsCheckModal';
import NewsTable from './NewsTable';

/**新闻管理页 */
export function NewsManagePage() {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<string>('');

  return (
    <div>
      <NewsTable
        showModal={() => {
          setVisible(true);
        }}
        getContent={(content: string) => {
          setContent(content);
        }}
      />
      <NewsPreviewModal
        visible={visible}
        content={content}
        onClose={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}
