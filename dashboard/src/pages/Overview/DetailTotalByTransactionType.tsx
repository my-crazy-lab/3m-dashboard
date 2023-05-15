import { Card, Descriptions, Skeleton } from "antd";
import useGetTotalValueByFilter from "../../hooks/useGetTotalValueByFilter";

const DetailTotalByTransactionType = () => {
  const { isLoading, data = [] } = useGetTotalValueByFilter();

  return (
    <Card>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Descriptions title="Total">
          {data.length
            ? data.map((item: any) => (
                <Descriptions.Item label={item._id} span={3}>
                  {`${item.total}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ₫"}
                </Descriptions.Item>
              ))
            : null}
        </Descriptions>
      )}
    </Card>
  );
};

export default DetailTotalByTransactionType;
