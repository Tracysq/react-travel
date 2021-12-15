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
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import {
  fetchRecommendProductsFailActionCreator,
  fetchRecommendProductsStartActionCreator,
  fetchRecommendProductsSuccessActionCreator,
} from "../../redux/recommendProducts/recommendProductsActions";

const { Title } = Typography;

interface State {
  loading: boolean;
  error: string | null;
  productList: any[];
}

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchStart: () => {
      dispatch(fetchRecommendProductsStartActionCreator());
    },
    fetchSuccess: (data: any) => {
      dispatch(fetchRecommendProductsSuccessActionCreator(data));
    },
    fetchFail: (error: any) => {
      dispatch(fetchRecommendProductsFailActionCreator(error));
    },
  };
};

type PropsType = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class HomePageComponent extends React.Component<PropsType> {
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    this.props.fetchStart();
    try {
      const { data } = await axios.get(
        "http://123.56.149.216:8080/api/productCollections"
      );
      this.props.fetchSuccess(data);
    } catch (error: any) {
      this.props.fetchFail(error.message);
    }
  }

  render() {
    const { t, productList, loading, error } = this.props;
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

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePageComponent));
