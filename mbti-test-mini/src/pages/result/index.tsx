import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import background from "../../assets/background.jpg";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import questionResult from "../../data/questions_result.json";
import Taro from "@tarojs/taro";
import { getBestQuestionResult } from "../utils/bizUtils";
import questions from "../../data/questions.json";
/**
 * 测试结果页
 */
export default () => {
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({ title: "答案为空", icon: "error", duration: 2000 });
  }
  const result = getBestQuestionResult(answerList, questions, questionResult);
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subtitle">{result.resultDesc}</View>
      <AtButton
        className="enterBtn"
        type="primary"
        circle
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
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
