module.exports = {
  name: "hodor",
  slug: "hodor",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/wave.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/wave.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/wave.png",
      backgroundColor: "#ffffff"
    }
  },
  web: {
    favicon: "./assets/images/wave.png"
  }
}
