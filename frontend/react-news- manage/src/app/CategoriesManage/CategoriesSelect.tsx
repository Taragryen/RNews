import { Select } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import { categoriesList } from '../../api/categories';
import { Category } from '../../utils/types';

/**新闻类型选择 */
export default function CategoriesSelect({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
}) {
  const [data, setData] = useState<Category[]>([]);

  const getCategoriesList = async () => {
    const resp = await categoriesList();
    setData(resp.data.categories);
  };

  const onCategoryChange = (value: string) => {
    onChange?.(value);
  };

  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <Select value={value} onChange={onCategoryChange} placeholder="请选择类型">
      {data.map((item, index) => {
        return (
          <Select.Option value={item.name} key={index}>
            {item.cn_name}
          </Select.Option>
        );
      })}
    </Select>
  );
}
