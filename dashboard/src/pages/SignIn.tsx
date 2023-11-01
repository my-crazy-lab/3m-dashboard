import { Layout, Button, Row, Col, Typography } from "antd";
import signinbg from "../assets/images/img-signin.jpg";

const { Title } = Typography;
const { Content } = Layout;

const SignIn = () => {
  return (
    <>
      <Layout className="layout-default layout-signin">
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">Sign In</Title>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                onClick={() => {
                  window.location.href =
                    process.env.REACT_APP_DOMAIN_API + "/api/auth/google/3m";
                }}
              >
                Sign in with Google account (Gmail)
              </Button>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};
export default SignIn;
