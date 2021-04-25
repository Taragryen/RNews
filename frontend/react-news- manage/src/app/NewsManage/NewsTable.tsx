import React, { useEffect, useState } from 'react';
import { Divider, message, Popconfirm, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { New } from '../../utils/types';
import { newsList, deleteNew, updateNew } from '../../api/news';
import dateFormat from '../../utils/dateFormat';

/**新闻表格 */
export default function NewsTable({
  showModal,
  getContent,
}: {
  showModal: () => void;
  getContent: (content: string) => void;
}) {
  const [data, setData] = useState<New[]>([]);

  /**获取新闻列表 */
  const getNewsList = async () => {
    const resp = await newsList();
    setData(resp.data.data.list);
  };

  /**删除单个新闻 */
  const deleteOneNew = async (id: string) => {
    await deleteNew(id);
    await getNewsList();
  };

  /**审核新闻 */
  const reviewedNew = async (id: string) => {
    await updateNew(id, {
      isReviewed: true,
    });
    message.success('审核通过');
    getNewsList();
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
      title: '审核状态',
      width: 200,
      align: 'center',
      render: (text, record) => {
        return (
          <Tag color={record.isReviewed ? 'green' : 'orange'}>
            {record.isReviewed ? '已审核' : '未审核'}
          </Tag>
        );
      },
    },
    {
      title: '来源',
      dataIndex: 'src',
    },
    {
      title: '阅读数',
      dataIndex: 'readCount',
      align: 'center',
    },
    {
      title: '操作',
      width: 200,
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
              title="你确定要审核该新闻吗? (审核通过的新闻将会直接发布)"
              okText="确定"
              cancelText="取消"
              onConfirm={() => {
                if (record.isReviewed) {
                  message.warning('此新闻已经审核通过并发布了!');
                } else {
                  reviewedNew(record._id);
                }
              }}
            >
              <a>审核</a>
            </Popconfirm>
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
