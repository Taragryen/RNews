import { EyeOutlined, ShareAltOutlined } from "@ant-design/icons";
import { List, Space, Tooltip, Typography } from "antd";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { New } from "../common/types";
import utilStyles from "../styles/utils.module.css";
import dateFormat from "../utils/dateFormat";

const IconText = ({
  icon,
  text,
  title,
}: {
  text: string;
  icon: any;
  title: string;
}) => (
  <Tooltip title={title}>
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  </Tooltip>
);

/**
 * 新闻列表
 */
export function NewsList({ allNewsData }: { allNewsData: New[] }) {
  return (
    <section
      className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      style={{ marginBottom: 20 }}
    >
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          simple: true,
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={allNewsData}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            actions={[
              <IconText
                title="阅读数"
                icon={EyeOutlined}
                text={item.readCount}
                key="list-vertical-star-o"
              />,
              <Tooltip title="分享">
                <ShareAltOutlined />
              </Tooltip>,
            ]}
            extra={<img width={120} alt="logo" src={item.pic} />}
          >
            <List.Item.Meta
              title={
                <Link href={`/news/${item._id}`}>
                  <a>{item.title}</a>
                </Link>
              }
              description={
                <Space size="large">
                  <span>{item.src}</span>
                  <span>{dateFormat(item.releaseTime)}</span>
                  <span>{item.category}</span>
                </Space>
              }
            />
            <Typography.Paragraph ellipsis={{ rows: 3 }}>
              {item.description}
            </Typography.Paragraph>
          </List.Item>
        )}
      />
    </section>
  );
}
