import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import background from "../../assets/background.jpg";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import Taro from "@tarojs/taro";

/**
 * 主页
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI 性格测试</View>
      <View className="at-article__h2 subtitle">
        只需2分钟，就能非常准确的描述出你是谁，以及你的性格特点
      </View>
      <AtButton
        className="enterBtn"
        type="primary"
        circle
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/doQuestion/index",
          });
        }}
      >
        开始测试
      </AtButton>
      <Image
        className="background"
        src={background}
        style={{ width: "100%" }}
      />
      <GlobalFooter />
    </View>
  );
};
