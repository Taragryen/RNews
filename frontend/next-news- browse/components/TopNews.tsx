import { Card, Divider } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { New } from "../common/types";
import styles from "../styles/topNews.module.css";

const data: {
  _id: string;
  title: string;
  readCount: string;
}[] = [
  {
    _id: "ssg-ssr",
    title: "ssg-ssr",
    readCount: "100",
  },
  {
    _id: "pre-rendering",
    title: "pre-rendering",
    readCount: "100",
  },
  {
    _id: "ssg-ssr",
    title: "ssg-ssr",
    readCount: "100",
  },
  {
    _id: "pre-rendering",
    title: "pre-rendering",
    readCount: "100",
  },
  {
    _id: "ssg-ssr",
    title: "ssg-ssr",
    readCount: "100",
  },
  {
    _id: "pre-rendering",
    title: "pre-rendering",
    readCount: "100",
  },
  {
    _id: "ssg-ssr",
    title: "ssg-ssr",
    readCount: "100",
  },
  {
    _id: "pre-rendering",
    title: "pre-rendering",
    readCount: "100",
  },
  {
    _id: "ssg-ssr",
    title: "ssg-ssr",
    readCount: "100",
  },
  {
    _id: "pre-rendering",
    title: "pre-rendering",
    readCount: "100",
  },
];

/**
 * 新闻热榜
 */
export function TopNews() {
  const [data, setData] = useState<New[]>([]);

  const loadData = async () => {
    const res = await fetch("http://localhost:5000/api/top");
    const data = await res.json();
    setData(data.data.list);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Card title="新闻热榜" style={{ borderRadius: 5, border: "none" }}>
      {data.map((item, index) => {
        return (
          <Link href={`/news/${item._id}`} key={index}>
            <div style={{ cursor: "pointer" }}>
              {[0, 1, 2].includes(index) ? (
                <span
                  className={`${styles.order} ${styles.before}`}
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  {index + 1}
                </span>
              ) : (
                <span className={`${styles.order} ${styles.after}`}>
                  {index + 1}
                </span>
              )}
              <span>{item.title}</span>
              <span className={styles.readCount}>{item.readCount}</span>
              <Divider />
            </div>
          </Link>
        );
      })}
    </Card>
  );
}
