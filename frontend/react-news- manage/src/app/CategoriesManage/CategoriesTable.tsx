import React, { useEffect, useState } from 'react';
import { Divider, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { New } from '../../utils/types';
import { categoriesList } from '../../api/categories';
import dateFormat from '../../utils/dateFormat';

export default function CategoriesTable() {
  const [data, setData] = useState<New[]>([]);

  const getCategoriesList = async () => {
    const resp = await categoriesList();
    setData(resp.data.categories);
  };

  // const deleteOneNew = async (_id: string) => {
  //   await deleteNew(_id);
  //   await getNewsList();
  // };

  useEffect(() => {
    getCategoriesList();
  }, []);

  const columns: ColumnsType<New> = [
    {
      title: '英文名称',
      dataIndex: 'name',
    },
    {
      title: '中文名称',
      dataIndex: 'cn_name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '操作',
      render: (value, record) => {
        return (
          <>
            <a
              onClick={e => {
                e.preventDefault();
                // getContent(record.content);
                // showModal();
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
                // deleteOneNew(record._id);
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
