import React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

// Zod schema for URL validation
const urlSchema = z.object({
  fullUrl: z
    .string()
    .min(1, "URL is required")
    .url("Please enter a valid URL")
    .refine((url) => {
      try {
        const parsedUrl = new URL(url);
        return ["http:", "https:"].includes(parsedUrl.protocol);
      } catch {
        return false;
      }
    }, "URL must start with http:// or https://"),
});

const AddUrlModal = ({
  visible,
  onClose,
  onSubmit,
  loading = false,
}: {
  visible: boolean;
  onClose: () => void;
  onSubmit: ({ url }: { url: string }) => Promise<void>;
  loading: boolean;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(urlSchema),
    mode: "onChange",
    defaultValues: {
      fullUrl: "",
    },
  });

  const watchedUrl = watch("fullUrl");

  const onSubmitForm = async (data: any) => {
    try {
      console.log("Submitting URL:", data);
      await onSubmit({ url: data.fullUrl });
      reset();
      onClose();
    } catch (error) {
      Alert.alert("Error", "Failed to create short URL. Please try again.");
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const getDomainFromUrl = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return "";
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <View style={styles.modalContainer}>
            <LinearGradient
              colors={["#667eea", "#764ba2"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientContainer}
            >
              {/* Header */}
              <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <View style={styles.iconContainer}>
                    <Ionicons name="link" size={24} color="#fff" />
                  </View>
                  <Text style={styles.title}>Create Short URL</Text>
                </View>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={handleClose}
                  disabled={loading}
                >
                  <Ionicons name="close" size={24} color="#fff" />
                </TouchableOpacity>
              </View>

              {/* Form */}
              <View style={styles.formContainer}>
                <Text style={styles.label}>Enter URL to shorten</Text>

                <Controller
                  control={control}
                  name="fullUrl"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.inputContainer}>
                      <View style={styles.inputWrapper}>
                        <Ionicons
                          name="globe-outline"
                          size={20}
                          color={errors.fullUrl ? "#ef4444" : "#9ca3af"}
                          style={styles.inputIcon}
                        />
                        <TextInput
                          style={[
                            styles.textInput,
                            errors.fullUrl && styles.textInputError,
                          ]}
                          placeholder="https://example.com"
                          placeholderTextColor="#9ca3af"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          autoCapitalize="none"
                          autoCorrect={false}
                          keyboardType="url"
                          returnKeyType="done"
                          onSubmitEditing={handleSubmit(onSubmitForm)}
                          editable={!loading}
                        />
                        {value && !errors.fullUrl && (
                          <Ionicons
                            name="checkmark-circle"
                            size={20}
                            color="#10b981"
                            style={styles.validIcon}
                          />
                        )}
                      </View>

                      {errors.fullUrl && (
                        <View style={styles.errorContainer}>
                          <Ionicons
                            name="alert-circle"
                            size={16}
                            color="#ef4444"
                          />
                          <Text style={styles.errorText}>
                            {errors.fullUrl.message}
                          </Text>
                        </View>
                      )}
                    </View>
                  )}
                />

                {/* URL Preview */}
                {watchedUrl && !errors.fullUrl && (
                  <View style={styles.previewContainer}>
                    <Text style={styles.previewLabel}>Preview:</Text>
                    <View style={styles.previewCard}>
                      <Ionicons name="earth" size={16} color="#6366f1" />
                      <Text style={styles.previewDomain}>
                        {getDomainFromUrl(watchedUrl)}
                      </Text>
                    </View>
                  </View>
                )}

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleClose}
                    disabled={loading}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.submitButton,
                      (!isValid || loading) && styles.submitButtonDisabled,
                    ]}
                    onPress={handleSubmit(onSubmitForm)}
                    disabled={!isValid || loading}
                  >
                    {loading ? (
                      <ActivityIndicator size="small" color="#fff" />
                    ) : (
                      <>
                        <Ionicons name="add" size={20} color="#fff" />
                        <Text style={styles.submitButtonText}>Create</Text>
                      </>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

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

export default AddUrlModal;
