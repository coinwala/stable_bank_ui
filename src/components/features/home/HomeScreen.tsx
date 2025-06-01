import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../../../assets/icons/Logo.png";

const trendingCoins = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$67,200",
    change: "+2.1%",
    logo: { uri: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026" },
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,100",
    change: "-1.2%",
    logo: { uri: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026" },
  },
  {
    id: "3",
    name: "Solana",
    symbol: "SOL",
    price: "$145",
    change: "+0.8%",
    logo: { uri: "https://cryptologos.cc/logos/solana-sol-logo.png?v=026" },
  },
];

const cryptoFeatures = [
  {
    id: "1",
    title: "Buy Crypto",
    icon: "trending-up-outline",
    color: "#4caf50",
  },
  {
    id: "2",
    title: "Sell Crypto",
    icon: "trending-down-outline",
    color: "#f44336",
  },
  {
    id: "3",
    title: "Portfolio",
    icon: "pie-chart-outline",
    color: "#2196f3",
  },
  {
    id: "4",
    title: "Market News",
    icon: "newspaper-outline",
    color: "#ff9800",
  },
  {
    id: "5",
    title: "Earn / Stake",
    icon: "cash-outline",
    color: "#9c27b0",
  },
  {
    id: "6",
    title: "Wallet",
    icon: "wallet-outline",
    color: "#607d8b",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={Logo} style={styles.logoImage} />
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={22} color="#fff" style={styles.icon} />
          <Ionicons
            name="qr-code-outline"
            size={22}
            color="#fff"
            style={styles.icon}
          />
          <View style={styles.pointsContainer}>
            <Ionicons name="ellipse" size={16} color="#FFB300" />
            <Text style={styles.pointsText}>120</Text>
          </View>
          <Ionicons
            name="wallet-outline"
            size={22}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Trending Coins */}
        <FlatList
          data={trendingCoins}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.offerList}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          renderItem={({ item }) => (
            <View style={styles.coinCard}>
              <Image source={item.logo} style={styles.coinLogo} />
              <Text style={styles.coinName}>
                {item.name} ({item.symbol})
              </Text>
              <Text style={styles.coinPrice}>{item.price}</Text>
              <Text
                style={[
                  styles.coinChange,
                  {
                    color: item.change.startsWith("+") ? "#4caf50" : "#f44336",
                  },
                ]}
              >
                {item.change}
              </Text>
            </View>
          )}
        />
        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Learn about staking rewards!</Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Explore</Text>
          </TouchableOpacity>
        </View>
        {/* Crypto Features Grid */}
        <View style={styles.grid}>
          {cryptoFeatures.map((feature) => (
            <View key={feature.id} style={styles.gridItem}>
              <View
                style={[
                  styles.featureIconCircle,
                  { backgroundColor: feature.color },
                ]}
              >
                <Ionicons name={feature.icon as any} size={28} color="#fff" />
              </View>
              <Text style={styles.gridTitle}>{feature.title}</Text>
            </View>
          ))}
        </View>
        {/* Footer Banner */}
        <View style={styles.footerBanner}>
          <Text style={styles.footerBannerText}>
            Track 1000+ coins in one place!
          </Text>
          <Text style={styles.footerBannerSubText}>
            Stay updated with real-time prices, news, and portfolio insights.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  logoImage: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 6,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 12,
    paddingHorizontal: 8,
    marginHorizontal: 6,
    height: 24,
  },
  pointsText: {
    color: "#fff",
    marginLeft: 4,
    fontWeight: "bold",
  },
  offerList: {
    marginBottom: 16,
  },
  coinCard: {
    backgroundColor: "#000000",
    borderRadius: 16,
    marginRight: 12,
    width: 140,
    padding: 10,
    alignItems: "center",
  },
  coinLogo: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: "#000000",
  },
  coinName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
  },
  coinPrice: {
    color: "#bdbdbd",
    fontSize: 13,
  },
  coinChange: {
    color: "#bdbdbd",
    fontSize: 13,
  },
  banner: {
    backgroundColor: "#C2185B",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 18,
    padding: 18,
    alignItems: "center",
  },
  bannerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  bannerButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  bannerButtonText: {
    color: "#C2185B",
    fontWeight: "bold",
    fontSize: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 18,
  },
  gridItem: {
    backgroundColor: "#000000",
    borderRadius: 16,
    width: "47%",
    marginBottom: 14,
    alignItems: "center",
    padding: 12,
  },
  gridImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: "#000000",
  },
  gridTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
  },
  gridPoints: {
    color: "#bdbdbd",
    fontSize: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  footerBanner: {
    backgroundColor: "#000000",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    padding: 18,
    alignItems: "center",
  },
  footerBannerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  footerBannerSubText: {
    color: "#bdbdbd",
    fontSize: 14,
    textAlign: "center",
  },
  featureIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});
