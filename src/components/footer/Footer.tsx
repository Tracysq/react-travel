import React from "react";
import styles from './Footer.module.css'
import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Title } = Typography;

export const AppFooter: React.FC = () => {
  return (
    <Footer>
      <Title className={styles["footer-title"]} level={3}>
        版权所有 @ React Travel
      </Title>
    </Footer>
  );
};
