import React from "react";
import logo from "../../assets/logo.svg";
import styles from './Header.module.css'
import { Layout, Typography, Input, Menu, Button, Dropdown, Radio } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item key={1}>中文</Menu.Item>
    <Menu.Item key={2}>English</Menu.Item>
  </Menu>
);

export const AppHeader: React.FC = () => {
  return (
    <div className={styles["app-header"]}>
        {/* top header */}
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Text>让旅游更幸福</Text>
            <Dropdown
              className={styles.language}
              overlay={menu}
              placement="bottomLeft"
            >
              <Button icon={<GlobalOutlined />}>语言</Button>
            </Dropdown>
            <Radio.Group value="large" className={styles["button-group"]}>
              <Radio.Button value="large">登录</Radio.Button>
              <Radio.Button value="default">注册</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <Header className={styles["main-header"]}>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Title level={3} className={styles.title}>
            React Travel
          </Title>
          <Search
            className={styles["search-input"]}
            placeholder="请输入旅游目的地、主题或关键字"
          />
        </Header>
        <Menu mode="horizontal" className={styles["main-menu"]}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key={4}>自由行</Menu.Item>
          <Menu.Item key={5}>私家团</Menu.Item>
          <Menu.Item key={6}>邮轮</Menu.Item>
          <Menu.Item key={7}>酒店+景点</Menu.Item>
          <Menu.Item key={8}>当地玩乐</Menu.Item>
          <Menu.Item key={9}>主题游</Menu.Item>
          <Menu.Item key={10}>定制游</Menu.Item>
          <Menu.Item key={11}>游学</Menu.Item>
          <Menu.Item key={12}>签证</Menu.Item>
          <Menu.Item key={13}>企业游</Menu.Item>
          <Menu.Item key={14}>高端游</Menu.Item>
          <Menu.Item key={15}>爱玩户外</Menu.Item>
          <Menu.Item key={16}>保险</Menu.Item>
        </Menu>
      </div>
  )
}