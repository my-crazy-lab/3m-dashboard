import { Card, Descriptions, Col, Row, Divider } from "antd";
import {
  IN_OUT,
  TRANSACTION_TYPE_EXPENDITURE,
  TRANSACTION_TYPE_REVENUE,
} from "../../constants";

const ExplainTransactionType = () => {
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
