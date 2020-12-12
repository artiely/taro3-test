export default {
  tabBar: {
    color: "#a6a6a6",
    selectedColor: "#000000",
    backgroundColor: "#FFFFFF",
    borderStyle: "white", //black / white
    position: "bottom",
    list: [
      {
        pagePath: "pages/index/demo",
        text: "demo1",
        iconPath: "./img/tab_home.png",
        selectedIconPath: "./img/tab_home1.png",
      },
      {
        pagePath: "pages/index/demo2",
        text: "demo2",
        iconPath: "./img/tab_home.png",
        selectedIconPath: "./img/tab_home1.png",
      },
    ],
  },
  pages: ["pages/index/demo", "pages/index/demo2"],
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于匹配最近的朋友",
    },
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
