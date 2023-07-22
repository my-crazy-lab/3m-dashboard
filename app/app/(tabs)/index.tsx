import { View } from "../../components/Themed";
import H2 from "../../components/base/H2";
import { Icon } from "react-native-elements";
import { COLORS } from "../../constants";

import { useTranslation } from "react-i18next";
import H3 from "../../components/base/H3";
import { Link } from "expo-router";
import { FlatList, Pressable } from "react-native";
import Light3 from "../../components/base/Light3";

export default function TabOneScreen() {
  const { t } = useTranslation();

  const fakeDataWallet = [
    {
      name: "ACB",
      amount: 3000000,
      _id: "123",
    },
    {
      name: "Techcombank",
      amount: 1000000,
      _id: "ads",
    },
  ];
  const fakeDataTransaction = [
    {
      name: "Market",
      amount: 30000,
      _id: "grt",
      createdAt: new Date(),
    },
    {
      name: "Sport",
      amount: 200000,
      _id: "xcv",
      createdAt: new Date(),
    },
    {
      name: "Sport",
      amount: 200000,
      _id: "xc22v",
      createdAt: new Date(),
    },
    {
      name: "Sport",
      amount: 200000,
      _id: "xcdv",
      createdAt: new Date(),
    },
  ];

  const Header = () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent", // TODO update bg later
      }}
    >
      <H2 style={{ color: COLORS.primary }}>1.000.000đ</H2>
      <Icon
        onPress={() => console.log("clicked notification")} // TODO feature notification
        name="notifications"
        color={COLORS.blue}
        size={24}
        reverse
      />
    </View>
  );

  const Wallet = () => (
    <View
      style={{
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: "#fff",
        borderRadius: 8,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "transparent",
          borderBottomColor: `${COLORS.lightGray}`,
          borderBottomWidth: 1,
          padding: 16,
        }}
      >
        <H3>{t("MY_WALLET")}</H3>
        <Link href="/wallet" asChild>
          <Pressable>
            <Light3 style={{ color: COLORS.darkgreen }}>{t("SEE_ALL")}</Light3>
          </Pressable>
        </Link>
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "transparent",
        }}
      >
        <FlatList
          renderItem={({ item }: any) => (
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "transparent",
                paddingTop: 2,
                paddingBottom: 2,
              }}
            >
              <H3 style={{ color: COLORS.primary }}>{item.name}</H3>
              <Light3 style={{ color: COLORS.darkgray }}>
                {item.amount.toLocaleString()}
              </Light3>
            </View>
          )}
          data={fakeDataWallet}
          keyExtractor={(item: any) => item._id}
        />
      </View>
    </View>
  );

  const Transaction = () => (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 8,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "transparent",
          borderBottomColor: `${COLORS.lightGray}`,
          borderBottomWidth: 1,
          padding: 16,
        }}
      >
        <H3>{t("MY_TRANSACTION")}</H3>
        <Link href="/transaction" asChild>
          <Pressable>
            <Light3 style={{ color: COLORS.darkgreen }}>{t("SEE_ALL")}</Light3>
          </Pressable>
        </Link>
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "transparent",
        }}
      >
        <FlatList
          renderItem={({ item }: any) => (
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "transparent",
                paddingTop: 8,
                paddingBottom: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  backgroundColor: "transparent",
                }}
              >
                <H3 style={{ color: COLORS.primary }}>{item.name}</H3>
                <Light3 style={{ color: COLORS.darkgray }}>
                  {item.amount.toLocaleString()}
                </Light3>
              </View>
              <View>
                <Light3 style={{ color: COLORS.darkgray }}>
                  {item.createdAt.toLocaleString()}
                </Light3>
              </View>
            </View>
          )}
          data={fakeDataTransaction}
          keyExtractor={(item: any) => item._id}
        />
      </View>
    </View>
  );

  return (
    <View
      style={{
        padding: 16,
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <Header />
      <Wallet />
      <Transaction />
    </View>
  );
}
