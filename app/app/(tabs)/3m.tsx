import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Button, Text, View } from "../../components/Themed";
import Modal from "../../components/Modal";
import { useState } from "react";

export default function Tab3mScreen() {
  const [isVisible, setIsVisible] = useState(false);

  const onClose = () => setIsVisible(false);
  const onOpen = () => setIsVisible(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 3m</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/3m.tsx" />
      <Button onPress={onOpen} title="Add transaction" />
      <Modal isVisible={isVisible} onClose={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
