import React from "react";
import styles from "./Footer.module.css";
import { Layout, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Footer } = Layout;
const { Title } = Typography;

export const AppFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Footer>
      <Title className={styles["footer-title"]} level={3}>
        {t('footer.detail')}
      </Title>
    </Footer>
  );
};
