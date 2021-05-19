import React, { useState } from 'react';
import { New } from '../../utils/types';
import NewsPreviewModal from './NewsCheckModal';
import { NewsEditFormModal } from './NewsEditFormModal';
import NewsTable from './NewsTable';

/**新闻管理页 */
export function NewsManagePage() {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [content, setContent] = useState<string>('');
  const [newData, setNewData] = useState<New>();

  return (
    <div>
      <NewsTable
        showModal={() => {
          setVisible(true);
        }}
        getContent={(content: string) => {
          setContent(content);
        }}
        getNewData={(newData: New) => {
          setNewData(newData);
        }}
        showEditModal={() => {
          setEditVisible(true);
        }}
      />
      <NewsPreviewModal
        visible={visible}
        content={content}
        onClose={() => {
          setVisible(false);
        }}
      />
      <NewsEditFormModal
        newData={newData!}
        visible={editVisible}
        onClose={() => {
          setEditVisible(false);
        }}
      />
    </div>
  );
}
