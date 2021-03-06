import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {sideMenuList.map((m, index) => (
        <SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GifOutlined />
              {m.title}
            </span>
          }
        >
          {m.subMenu.map((sm, smIndex) => (
            <SubMenu
              key={`sub-menu-${index}-${smIndex}`}
              title={
                <span>
                  <GifOutlined />
                  {sm.title}
                </span>
              }
            >
              {sm.subMenu.map((sms, smsIndex) => (
                <Menu.Item key={`sub-sub-menu-${index}-${smIndex}-${smsIndex}`}>
                  <span>
                    <GifOutlined />
                    {sms}
                  </span>
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};
