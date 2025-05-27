import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

export default function AddUrlModal({
  isVisible = false,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const handleClose = () => {
    // reset();
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      onRequestClose={handleClose}
      //   transparent
    >
      <View>
        <Text>AddUrlModal</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    width: width * 0.9,
    maxWidth: 400,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  gradientContainer: {
    padding: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    flex: 1,
  },
  closeButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 16,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 12,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "transparent",
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#374151",
    paddingVertical: 12,
  },
  textInputError: {
    borderColor: "#ef4444",
  },
  validIcon: {
    marginLeft: 8,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    paddingHorizontal: 4,
  },
  errorText: {
    fontSize: 14,
    color: "#fecaca",
    marginLeft: 6,
    flex: 1,
  },
  previewContainer: {
    marginBottom: 20,
  },
  previewLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#e0e7ff",
    marginBottom: 8,
  },
  previewCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 8,
    padding: 12,
  },
  previewDomain: {
    fontSize: 14,
    color: "#374151",
    marginLeft: 8,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  submitButtonDisabled: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#667eea",
    marginLeft: 8,
  },
});
