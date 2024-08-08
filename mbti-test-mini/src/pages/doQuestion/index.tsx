import { View, Image, CommonEvent } from "@tarojs/components";

import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import { AtButton, AtRadio } from "taro-ui";
import questions from "../../data/questions.json";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

/**
 * 主页
 */
export default () => {
  //当前题目
  const [currentquestion, setCurrentquestion] = useState(questions[0]);
  const questionOptions = currentquestion.options.map((option) => {
    return { label: ` ${option.key}.${option.value}`, value: option.key };
  });
  //当前题目序号(从1开始)
  const [current, setCurrent] = useState<number>(1);
  //当前回答
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  //回答列表
  const [answerList] = useState<string[]>([]);
  //切换序号时，更新当前题目和当前回答
  useEffect(() => {
    setCurrentquestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  return (
    <View className="doQuestionPage">
      <View className="at-article__h2 title">
        {current}、{currentquestion.title}
      </View>
      <GlobalFooter />
      <View className="options-wrapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value) => {
            setCurrentAnswer(value);
            //记录回答
            answerList[current - 1] = value;
          }}
        />
      </View>
      {current < questions.length && (
        <AtButton
          type="primary"
          className="controlBtn"
          onClick={() => {
            setCurrent(current + 1);
          }}
          disabled={!currentAnswer}
        >
          下一题
        </AtButton>
      )}
      {current == questions.length && (
        <AtButton
          type="primary"
          className="controlBtn"
          onClick={() => {
            Taro.setStorageSync("answerList", answerList);
            Taro.navigateTo({
              url: "/pages/result/index",
            });
          }}
          disabled={!currentAnswer}
        >
          查看结果
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          className="controlBtn"
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          上一题
        </AtButton>
      )}
    </View>
  );
};
