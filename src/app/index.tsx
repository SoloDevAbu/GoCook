import { MaterialIcons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CategoryBadge } from "../components/CategoryBadge";
import { ProductCard } from "../components/ProductCard";
import { SearchBar } from "../components/SearchBar";
import { Colors, Typography } from "../constants/Colors";
import { DUMMY_CATEGORIES, DUMMY_PRODUCTS } from "../constants/dummyData";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxnv6fWOS-jvNUenhIDcQEjD8RIw9qZwPTkO5Xrfk0gTpG-aA7ur0-Yv6bp_JpcGcLIwdDRijuA4ESGsLvKO2jsumV2ZX2mu8m60cjzeT5YSNnS0KwuL-0QYyHK9d6m2tPSRho0yg_GlcRWmG7PrfiHPekPvtlvk2EAsaDGkbA_qb7rNKuLhtPwMBk3NWd1OOhjCLoxLwhxgpDAd2wC5FxRGhBRT33XFaMcnWeo1_jDpGSRISl59iEwA",
            }}
            style={styles.logo}
          />
          <Text style={styles.logoText}>GoCook</Text>
        </View>
        <Pressable style={styles.addressContainer}>
          <MaterialIcons name="location-on" size={16} color={Colors.primary} />
          <Text style={styles.addressText}>123 Fresh Ave</Text>
          <MaterialIcons name="expand-more" size={16} color={Colors.primary} />
        </Pressable>
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgI77LJ9lnZsN4CP8ANP1qGMZDGoLZ-SUSlwPvS0xw6ovYmcgyTI_MGrd3rCgreM1N_14TWFO4_Sai8YuO2RtkDQNg3GvZMEUPOB3qyRWVmFfqxcD3zGzg7-eeNdH7uRuDcc41qXTdQfTuy6YjSNo35hndKAGxpZL3K1nvs0dbO0vSSPMeQNsDIu-c8HwulRO7x1lnMZNiDQ8xRzj7-sCkmGy4h3Znkl78XU_UD8l2eSwKSkm5gpNDCw",
          }}
          style={styles.avatar}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {DUMMY_CATEGORIES.map((cat) => (
            <CategoryBadge
              key={cat.id}
              name={cat.name}
              icon={cat.icon as any}
            />
          ))}
        </ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Today</Text>
          <View style={styles.featuredCard}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB8i3rFW8-lfJnmsa43AqbPBan_yNXhfkZ0j5WloIZv5Hul25lv8hut4znVvYqvRogpnGUyRXSfgTbru8HZ3vGsw2e8YRlbyOG7EAjJtfeB8D2M7qgiG1rSLVSQcz-HsQZAvBPEi3E_eu7OsPmm7iyarIbXrnmghxmiVHbPsraZOmCjEoceVA8umJowk3Mlaw7G21nnwmNc3KcHqN5f5bJWPgONhSG19owuvOZffk4ZnbD0d2FENiRUw",
              }}
              style={styles.featuredImage}
            />
            <View style={styles.featuredOverlay}>
              <View style={styles.featuredBadge}>
                <Text style={styles.featuredBadgeText}>Farm Fresh</Text>
              </View>
              <Text style={styles.featuredTitle}>Organic Summer Box</Text>
              <Text style={styles.featuredDesc}>
                Get 20% off seasonal veggies
              </Text>
              <Pressable style={styles.shopButton}>
                <Text style={styles.shopButtonText}>Shop Now</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Fresh Picks</Text>
            <Pressable>
              <Text style={styles.seeAllText}>See All</Text>
            </Pressable>
          </View>
          <View style={styles.grid}>
            {DUMMY_PRODUCTS.map((prod) => (
              <View key={prod.id} style={styles.gridItem}>
                <ProductCard item={prod} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrayBorder,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.primary,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressText: {
    ...Typography.buttonText,
    color: Colors.primary,
    marginHorizontal: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surfaceVariant,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  categoriesContainer: {
    marginBottom: 24,
    marginHorizontal: -16,
  },
  categoriesContent: {
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  seeAllText: {
    ...Typography.bodyMd,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
  featuredCard: {
    height: 192,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: Colors.surfaceContainerLowest,
  },
  featuredImage: {
    ...StyleSheet.absoluteFill,
    width: "100%",
    height: "100%",
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(248,249,250,0.8)", // gradient fallback
    padding: 24,
    justifyContent: "center",
    width: "75%",
  },
  featuredBadge: {
    backgroundColor: "rgba(46, 204, 113, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  featuredBadgeText: {
    ...Typography.labelMd,
    color: Colors.primary,
  },
  featuredTitle: {
    ...Typography.headlineMd,
    color: Colors.onSurface,
    marginBottom: 8,
  },
  featuredDesc: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
    marginBottom: 16,
  },
  shopButton: {
    backgroundColor: Colors.primaryContainer,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  shopButtonText: {
    ...Typography.buttonText,
    color: Colors.onError, // white
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -8,
  },
  gridItem: {
    width: "50%",
  },
});
