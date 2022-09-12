module.exports = {
  name: "Haidor",
  slug: "haidor",
  version: "1.0.0",
  owner: "zabrador",
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
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/954240a2-35ae-4dd9-9a2e-770e0be5b04f"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  runtimeVersion: {
    policy: "sdkVersion"
  },
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
  },
  extra: {
    eas: {
      projectId: "954240a2-35ae-4dd9-9a2e-770e0be5b04f"
    }
  }
}
