import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Card, Button, Descriptions, Col, Space, Row, Divider } from "antd";
import {
  IN_OUT,
  TRANSACTION_TYPE_EXPENDITURE,
  TRANSACTION_TYPE_REVENUE,
} from "../../constants";

const ExplainTransactionType = () => {
  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  return (
    <Row gutter={[12, 12]}>
      <Col span={12}>
        <Card>
          <Descriptions title={IN_OUT.EXPENDITURE}>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.EAT}
              span={3}
            >
              ăn ngoài, đặt đồ ăn, tự nấu tính riêng
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.SNACK}
              span={3}
            >
              Ăn vặt, bữa phụ
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.GO_MARKET}
              span={3}
            >
              Tiền đi chợ, đi BHX, CoopFood, mua đồ ăn dài hạn
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.PLAY_SPORT}
              span={3}
            >
              Football, Badminton, đan lưới, mua đồ liên quan thể thao
            </Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              <Divider />
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.CUT_HAIR}
              span={3}
            >
              Cắt tóc
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.MOTORCYCLE_OIL}
              span={3}
            >
              Thay nhớt 2 xe
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.MOTORCYCLE}
              span={3}
            >
              Rửa, sửa xe, xăng
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.PHONE_CARD}
              span={3}
            >
              Nạp tiền trực tiếp, momo, ...
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.BCS}
              span={3}
            >
              Ba con xói
            </Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              <Divider />
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.DRINK}
              span={3}
            >
              Nhậu, ăn chơi, tụ hợp
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.RELAX}
              span={3}
            >
              Coi phim, gấp thú
            </Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              <Divider />
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.HOME_TOOL}
              span={3}
            >
              Vật dụng gia đình, nội thất, ...
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.COSMETIC}
              span={3}
            >
              Mỹ phẩm, quần áo, tư trang cá nhân
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.TOY}
              span={3}
            >
              Đồ chơi: bàn phím
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.LEARN}
              span={3}
            >
              Tiền sách, viết, course, học phí, ...
            </Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              <Divider />
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.MINH_EM}
              span={3}
            >
              Tiền cho Minh em hàng tháng, mua quà, ...
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.ACCOMMODATION_FEE}
              span={3}
            >
              Chi phí ở
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.LIVING_EXPENSES}
              span={3}
            >
              Điện nước, phí sinh hoạt
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.FOR_LIFE}
              span={3}
            >
              Tiền phụ không có nhóm: Gửi xe, chụp hình thẻ, mua bảo hiểm xe,
              làm gplx, ...
            </Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              <Divider />
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.LOAN}
              span={3}
            >
              Cho bạn bè, gia đình vay tiền
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.PAY}
              span={3}
            >
              Trả nợ
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_EXPENDITURE.TRAVEL}
              span={3}
            >
              Du lịch, phượt, mua đồ dùng liên quan
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Descriptions title={IN_OUT.REVENUE}>
            <Descriptions.Item label={TRANSACTION_TYPE_REVENUE.SALARY} span={3}>
              My salary + Miti's salary
            </Descriptions.Item>
            <Descriptions.Item
              label={TRANSACTION_TYPE_REVENUE.FROM_MOM}
              span={3}
            >
              Tiền mượn mẹ hay mẹ cho
            </Descriptions.Item>
            <Descriptions.Item label={TRANSACTION_TYPE_REVENUE.LOAN} span={3}>
              Tiền vay nợ bạn bè, ngân hàng, ...
            </Descriptions.Item>
            <Descriptions.Item label={TRANSACTION_TYPE_REVENUE.PAY} span={3}>
              Tiền bạn bè, gia đình trả nợ
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
    </Row>
  );
};

export default ExplainTransactionType;
