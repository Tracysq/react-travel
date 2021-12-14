import React from "react";
import styles from "./HomePage.module.css";
import {
  AppHeader,
  AppFooter,
  Carousel,
  SideMenu,
  ProductionCollection,
  Partners,
} from "../../components";
import { Row, Col, Typography, Spin } from "antd";
import { productList1, productList2, productList3 } from "./mockup";
import sideImage1 from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import { withTranslation, WithTranslation } from "react-i18next";
import axios from "axios";

const { Title } = Typography;

interface State {
  loading: boolean;
  error: string | null;
  productList: any[];
}
class HomePageComponent extends React.Component<WithTranslation, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      productList: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "http://123.56.149.216:8080/api/productCollections"
      );
      this.setState({
        loading: false,
        error: null,
        productList: data,
      });
    } catch (error: any) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  render() {
    const { t } = this.props;
    const { productList, loading, error } = this.state;
    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
      );
    }
    if (error) {
      return <div>网站出错：{error}</div>;
    }
    return (
      <>
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
          <ProductionCollection
            title={
              <Title level={3} type="warning">
                {t("home_page.hot_recommended")}
              </Title>
            }
            sideImage={sideImage1}
            products={productList[0].touristRoutes}
          ></ProductionCollection>
          <ProductionCollection
            title={
              <Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          ></ProductionCollection>
          <ProductionCollection
            title={
              <Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
          ></ProductionCollection>
          <Partners />
        </div>
        <AppFooter />
      </>
    );
  }
}

export const HomePage = withTranslation()(HomePageComponent);
