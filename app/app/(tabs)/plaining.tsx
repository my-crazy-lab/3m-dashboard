import { FlatList } from "react-native";
import { View } from "../../components/Themed";
import { useTranslation } from "react-i18next";
import H3 from "../../components/base/H3";
import { COLORS } from "../../constants";
import Light4 from "../../components/base/Light4";
import { Icon } from "react-native-elements";

export default function TabTwoScreen() {
  const { t } = useTranslation();

  const fakeDataPlans = [
    {
      _id: "dqds",
      name: "Ngan sach",
      description:
        "Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach",
    },
    {
      _id: "22esde",
      name: "Su kien",
      description:
        "Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach",
    },
    {
      _id: "dqsdazds",
      name: "giao dich dinh yk",
      description:
        "Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach",
    },
    {
      _id: "dqdszzs",
      name: "Hoa don",
      description:
        "Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach Mot ke hoach",
    },
  ];

  const ListPlans = () => (
    <View
      style={{
        backgroundColor: "transparent",
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 8,
        padding: 16,
      }}
    >
      <FlatList
        renderItem={({ item }: any) => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "transparent",
              paddingTop: 8,
              paddingBottom: 8,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                backgroundColor: "transparent",
                width: "92%",
              }}
            >
              <H3 style={{ color: COLORS.blue }}>{item.name}</H3>
              <Light4 style={{ color: COLORS.darkgray }}>
                {item.description}
              </Light4>
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                backgroundColor: "transparent",
              }}
            >
              <Icon
                onPress={() => console.log("clicked notification")} // TODO feature notification
                name="east"
                color={COLORS.darkgray}
              />
            </View>
          </View>
        )}
        data={fakeDataPlans}
        keyExtractor={(item: any) => item._id}
      />
    </View>
  );

  return (
    <View
      style={{
        padding: 16,
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <ListPlans />
    </View>
  );
}
