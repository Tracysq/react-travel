import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown, Radio } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RadioChangeEvent } from "antd/lib/radio";
import { MenuInfo } from "rc-menu/lib/interface";
import { useTranslation } from "react-i18next";
import { changeLanguageActionCreator } from "../../redux/language/languageActions";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";

const { Header } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

// const menu = (
//   <Menu>
//     <Menu.Item key={1}>中文</Menu.Item>
//     <Menu.Item key={2}>English</Menu.Item>
//   </Menu>
// );

export const AppHeader: React.FC = () => {
  const language = useSelector((state) => state.language);
  const languageList = useSelector((state) => state.languageList);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const onChange = (e: RadioChangeEvent) => {
    navigate(`/${e.target.value}`);
  };

  const handleMenuClick = (e: MenuInfo) => {
    console.log(e);
    const action = changeLanguageActionCreator(e.key);
    dispatch(action);
    i18n.changeLanguage(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {languageList.map((l) => (
        <Menu.Item key={l.code}>{l.name}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={styles["app-header"]}>
      {/* top header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Text>{t("header.slogan")}</Text>
          <Dropdown
            className={styles.language}
            overlay={menu}
            placement="bottomLeft"
          >
            <Button icon={<GlobalOutlined />}>
              {language === "zh" ? "中文" : "English"}
            </Button>
          </Dropdown>
          <Radio.Group
            value={value}
            optionType="button"
            className={styles["button-group"]}
            onChange={onChange}
          >
            <Radio.Button value="signIn">{t("header.signin")}</Radio.Button>
            <Radio.Button value="signUp">{t("header.register")}</Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <Header className={styles["main-header"]}>
        <span onClick={() => navigate("/")}>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Title level={3} className={styles.title}>
            React Travel
          </Title>
        </span>
        <Search
          className={styles["search-input"]}
          placeholder="请输入旅游目的地、主题或关键字"
        />
      </Header>
      <Menu mode="horizontal" className={styles["main-menu"]}>
        <Menu.Item key={1}>{t("header.home_page")}</Menu.Item>
        <Menu.Item key={2}>{t("header.weekend")}</Menu.Item>
        <Menu.Item key={3}>{t("header.group")}</Menu.Item>
        <Menu.Item key={4}>{t("header.backpack")}</Menu.Item>
        <Menu.Item key={5}>{t("header.private")}</Menu.Item>
        <Menu.Item key={6}>{t("header.cruise")}</Menu.Item>
        <Menu.Item key={7}>{t("header.hotel")}</Menu.Item>
        <Menu.Item key={8}>{t("header.local")}</Menu.Item>
        <Menu.Item key={9}>{t("header.theme")}</Menu.Item>
        <Menu.Item key={10}>{t("header.custom")}</Menu.Item>
        <Menu.Item key={11}>{t("header.study")}</Menu.Item>
        <Menu.Item key={12}>{t("header.visa")}</Menu.Item>
        <Menu.Item key={13}>{t("header.enterprise")}</Menu.Item>
        <Menu.Item key={14}>{t("header.high_end")}</Menu.Item>
        <Menu.Item key={15}>{t("header.outdoor")}</Menu.Item>
        <Menu.Item key={16}>{t("header.insurance")}</Menu.Item>
      </Menu>
    </div>
  );
};
