import React, { useEffect, useState } from 'react';
import { Divider, message, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { Category } from '../../utils/types';
import { deleteCategory } from '../../api/categories';

export default function CategoriesTable({
  dataSource,
  reloadData,
}: {
  dataSource: Category[];
  reloadData: () => void;
}) {
  const deleteOneCategory = async (_id: string) => {
    const resp = await deleteCategory(_id);
    message.success(`已成功删除`);
    await reloadData();
  };

  const columns: ColumnsType<Category> = [
    {
      title: '英文名称',
      dataIndex: 'name',
      width: 200,
    },
    {
      title: '中文名称',
      dataIndex: 'cn_name',
      width: 200,
    },
    {
      title: '描述',
      dataIndex: 'desc',
      width: 400,
    },
    {
      title: '操作',
      width: 100,
      render: (value, record) => {
        return (
          <>
            <a>编辑</a>
            <Divider type="vertical" />
            <Popconfirm
              placement="topRight"
              title="你确定要删除该类型吗?"
              okText="确定"
              cancelText="取消"
              onConfirm={() => {
                deleteOneCategory(record._id);
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
    <Table
      rowKey={record => record._id}
      columns={columns}
      dataSource={dataSource}
    />
  );
}
