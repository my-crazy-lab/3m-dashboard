import {
  Modal as DefaultModal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Alert,
  ToastAndroid,
} from "react-native";
import { Formik } from "formik";
import { Input, Select, SelectItem } from "@ui-kitten/components";

export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal = ({ isVisible, onClose }: ModalProps) => {
  const onCreateTransaction = (values: {
    type: string;
    label: { value: string; type: string };
    userCode: string;
  }) => {
    const valuesFormatted = {
      type: "EXPENDITURE",
      label: {
        ...values.label,
        value: Number(values.label.value),
        type: labelsType[Number(values.label.type) - 1]?.value,
      },
      userCode: Number(values.userCode),
    };
    console.log(valuesFormatted);

    Alert.alert("Confirmation", "Are you sure ?", [
      {
        text: "Yes",
        onPress: () =>
          fetch("http://172.16.12.76:6600/3m/api/transaction/create", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(valuesFormatted),
          })
            .then((response) => response.json())
            .then((msg) => {
              console.log(msg);

              onClose();
              ToastAndroid.show("Successful !", ToastAndroid.SHORT);
            })
            .catch((error: string) => {
              ToastAndroid.show("Error !", ToastAndroid.SHORT);
              console.log(error);
            }),
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };
  const labelsType = [
    {
      label: "Eat",
      value: "EAT",
    },
    {
      label: "Play sport",
      value: "PLAY_SPORT",
    },
    {
      label: "Accommodation fee",
      value: "ACCOMMODATION_FEE",
    },
  ];

  return (
    <DefaultModal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.modalText}>Add transaction</Text>
          </View>
          <Formik
            initialValues={{
              userCode: "3",
              type: "",
              label: {
                value: "",
                type: "",
                description: "",
                date: new Date(),
              },
            }}
            onSubmit={(values) => onCreateTransaction(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <View>
                <Input
                  style={styles.item}
                  placeholder="Price"
                  keyboardType="numeric"
                  onChangeText={handleChange("label.value")}
                  value={values.label.value}
                />
                <Input
                  style={styles.item}
                  multiline={true}
                  placeholder="Description"
                  onChangeText={handleChange("label.description")}
                  value={values.label.description}
                />
                <Select
                  placeholder="Choose"
                  style={styles.item}
                  value={labelsType[Number(values.label.type) - 1]?.label}
                  onSelect={(index) => {
                    handleChange("label.type")(index.toString());
                  }}
                >
                  {labelsType.map((item, index) => (
                    <SelectItem key={index} title={item.label} />
                  ))}
                </Select>

                <View style={styles.footer}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => handleSubmit()}
                  >
                    <Text style={styles.textStyle}>Save</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onClose}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </DefaultModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    marginLeft: 8,
    marginRight: 8,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  header: { alignItems: "flex-start" },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 24,
  },
  item: {
    marginTop: 8,
    marginBottom: 8,
  },
});
