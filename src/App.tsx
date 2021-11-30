import React from "react";
import styles from "./App.module.css";
import { AppHeader, AppFooter } from "./components";
import { Row, Col } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div style={{ background: "red" }}>多重菜单</div>
          </Col>
          <Col span={18}>
            <div style={{ background: "blue" }}>走马灯</div>
          </Col>
        </Row>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
