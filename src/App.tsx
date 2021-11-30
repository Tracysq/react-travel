import React from "react";
import styles from "./App.module.css";
import { AppHeader, AppFooter, Carousel, SideMenu } from "./components";
import { Row, Col } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
