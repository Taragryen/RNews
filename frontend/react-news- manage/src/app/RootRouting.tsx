import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CategoriesManagePage } from './CategoriesManage/CategoriesManagePage';
import Page404 from './Exception/Page404';
import BasicLayout from './Layout/BasicLayout';
import { NewsManagePage } from './NewsManage/NewsManagePage';
import { NewsPublishPage } from './NewsPublish/NewsPublishPage';
import { NewsReviewPage } from './NewsReview/NewsReviewPage';

/**根路由 */
export function RootRouting() {
  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/news/publish" />} />
        <Route path="/news/publish" element={<NewsPublishPage />} />
        <Route path="/news/review" element={<NewsReviewPage />} />
        <Route path="/news/manage" element={<NewsManagePage />} />
        <Route path="/categories/manage" element={<CategoriesManagePage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BasicLayout>
  );
}
