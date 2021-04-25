import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { categoriesList } from '../../api/categories';
import { Category } from '../../utils/types';
import AddCategoryModal from './AddCategoryModal';
import CategoriesTable from './CategoriesTable';

/**类型管理页 */
export function CategoriesManagePage() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<Category[]>([]);

  const getCategoriesList = async () => {
    const resp = await categoriesList();
    setData(resp.data.categories);
  };

  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
        style={{ marginBottom: 20 }}
      >
        新增
      </Button>
      <CategoriesTable dataSource={data} reloadData={getCategoriesList} />
      <AddCategoryModal
        visible={visible}
        onClose={() => {
          setVisible(false);
          getCategoriesList();
        }}
      />
    </div>
  );
}
