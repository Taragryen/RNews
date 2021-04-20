import React, { useEffect, useState } from 'react';
import { Divider, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { New } from '../../utils/types';
import { newsList, deleteNew } from '../../api/news';
import dateFormat from '../../utils/dateFormat';

export default function NewsTable({
  showModal,
  getContent,
}: {
  showModal: () => void;
  getContent: (content: string) => void;
}) {
  const [data, setData] = useState<New[]>([]);

  const getNewsList = async () => {
    const resp = await newsList();
    setData(resp.data.data.list);
  };

  const deleteOneNew = async (_id: string) => {
    await deleteNew(_id);
    await getNewsList();
  };

  useEffect(() => {
    getNewsList();
  }, []);

  const columns: ColumnsType<New> = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '发布时间',
      dataIndex: 'releaseTime',
      render: value => {
        return dateFormat(value);
      },
    },
    {
      title: '来源',
      dataIndex: 'src',
    },
    {
      title: '操作',
      render: (value, record) => {
        return (
          <>
            <a
              onClick={e => {
                e.preventDefault();
                getContent(record.content);
                showModal();
              }}
            >
              查看
            </a>
            <Divider type="vertical" />
            <a>编辑</a>
            <Divider type="vertical" />
            <Popconfirm
              placement="topRight"
              title="你确定要删除该新闻吗?"
              okText="确定"
              cancelText="取消"
              onConfirm={() => {
                deleteOneNew(record._id);
              }}
            >
              <a>删除</a>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  return (
    <Table rowKey={record => record._id} columns={columns} dataSource={data} />
  );
}
