import AddUrlModal from "@/components/AddUrlModal";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface UrlData {
  id: string;
  fullUrl: string;
  shortUrl: string;
  clicks: number;
  userId: number | null;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const [url, setUrls] = useState<UrlData[] | []>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePress = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Cannot open this URL");
      }
    } catch (error) {
      console.error("Failed to open URL:", error);
      Alert.alert("Error", "Failed to open URL");
    }
  };

  const copyToClipboard = (text: string) => {
    // You'll need to install @react-native-clipboard/clipboard
    // Clipboard.setString(text);
    Alert.alert("Copied!", "URL copied to clipboard");
  };

  const fetchSHortUrls = async () => {
    try {
      const response = await axios.get("http://192.168.29.70:3000/url");
      setUrls(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching short URLs:", error);
      throw new Error("Failed to fetch short URLs");
    }
  };

  useEffect(() => {
    fetchSHortUrls();
  }, []);

  const renderItem = ({ item, index }: { item: UrlData; index: number }) => (
    <View style={[styles.itemContainer, { marginTop: index === 0 ? 16 : 8 }]}>
      <LinearGradient
        colors={["#667eea", "#764ba2"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientContainer}
      >
        <View style={styles.contentContainer}>
          {/* Header with domain */}
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Ionicons name="link" size={20} color="#fff" />
            </View>
            <Text style={styles.domainText} numberOfLines={1}>
              {item.fullUrl}
            </Text>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={() => copyToClipboard(item.shortUrl)}
            >
              <Ionicons name="copy-outline" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Full URL */}
          <TouchableOpacity
            style={styles.urlContainer}
            onPress={() => handlePress(item.fullUrl)}
            activeOpacity={0.7}
          >
            <View style={styles.urlRow}>
              <Ionicons name="globe-outline" size={16} color="#e0e7ff" />
              <Text style={styles.urlLabel}>Original:</Text>
            </View>
            <Text style={styles.fullUrl} numberOfLines={2}>
              {item.fullUrl}
            </Text>
          </TouchableOpacity>

          {/* Short URL */}
          <TouchableOpacity
            style={styles.urlContainer}
            onPress={() =>
              handlePress(`http://192.168.29.70:3000/url/${item.shortUrl}`)
            }
            activeOpacity={0.7}
          >
            <View style={styles.urlRow}>
              <Ionicons name="link-outline" size={16} color="#e0e7ff" />
              <Text style={styles.urlLabel}>Short:</Text>
            </View>
            <Text style={styles.shortUrl}>
              192.168.29.70:3000/url/{item.shortUrl}
            </Text>
          </TouchableOpacity>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Ionicons name="eye-outline" size={16} color="#a5b4fc" />
              <Text style={styles.statText}>{item.clicks} clicks</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="time-outline" size={16} color="#a5b4fc" />
              <Text style={styles.statText}>
                {new Date(item.createdAt).toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );

  const handleAddUrl = async ({ url }: { url: string }) => {
    setLoading(true);
    try {
      // Replace this with your actual API call
      const response = await axios.post("http://192.168.29.70:3000/url", {
        url,
      });
      if (response.status === 201) {
        const newUrl = await response.data;
        console.log("New short URL created:", newUrl);
        Alert.alert("Success", "Short URL created successfully");
        // setUrls((prevUrls) => [newUrl, ...prevUrls]);
        fetchSHortUrls();
      }
    } catch (error) {
      console.error("Error creating short URL:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AddUrlModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        onSubmit={handleAddUrl}
        loading={loading}
      />
      <SafeAreaView className="mx-4">
        <ScrollView>
          <Text className="mt-4 text-xl font-bold text-center">My Urls</Text>
          <TouchableOpacity
            className="py-2 bg-[#667eea] rounded-xl flex flex-row justify-center items-center elevation shadow-black text-white"
            onPress={() => setModalVisible(true)}
          >
            <Text className="text-white">Add</Text>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>

          <View className="">
            <FlatList
              data={url}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              ListEmptyComponent={EmptyComponent}
            />
            <View className="flex-col justify-start gap-4 my-6">
              <Link
                href={"/about"}
                className="px-4 py-4 font-bold text-center text-white bg-red-400 rounded-xl"
              >
                <View className="flex-row items-center justify-center gap-2">
                  <Text className="font-bold text-center text-white bg-red-400 rounded-xl">
                    About
                  </Text>
                  <Ionicons name="open" size={20} color="#fff" />
                </View>
              </Link>
              <Link
                href={"/profile"}
                className="px-4 py-4 font-bold text-center text-white bg-red-400 rounded-xl"
              >
                <View className="flex-row items-center justify-center gap-2">
                  <Text className="font-bold text-center text-white bg-red-400 rounded-xl">
                    Profile
                  </Text>
                  <Ionicons name="open" size={20} color="#fff" />
                </View>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const EmptyComponent = () => (
  <View style={styles.emptyContainer}>
    <Ionicons name="link-outline" size={64} color="#9ca3af" />
    <Text style={styles.emptyTitle}>No URLs Yet</Text>
    <Text style={styles.emptySubtitle}>
      Start by creating your first short URL
    </Text>
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  itemContainer: {
    marginBottom: 8,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradientContainer: {
    borderRadius: 16,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  domainText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  copyButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  urlContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  urlRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  urlLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "#e0e7ff",
    marginLeft: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  fullUrl: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
  },
  shortUrl: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    fontSize: 12,
    color: "#a5b4fc",
    marginLeft: 6,
    fontWeight: "500",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#374151",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#9ca3af",
    textAlign: "center",
  },
});
