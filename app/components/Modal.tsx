import {
  Modal as DefaultModal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";

export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal = ({ isVisible, onClose }: ModalProps) => {
  const onCreateTransaction = () => {
    return fetch("http://172.16.12.76:6600/3m/api/transaction/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "EXPENDITURE",
        label: {
          value: 9999,
          type: "EAT",
        },
      }),
    })
      .then((response) => response.json())
      .then((msg) => {
        console.log(msg);
      })
      .catch((error: string) => {
        console.log(error);
      });
  };

  return (
    <DefaultModal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add transaction</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onCreateTransaction}
          >
            <Text style={styles.textStyle}>add transaction</Text>
          </Pressable>
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
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
