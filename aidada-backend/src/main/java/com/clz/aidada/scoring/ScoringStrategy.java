package com.clz.aidada.scoring;

import com.clz.aidada.model.entity.App;
import com.clz.aidada.model.entity.UserAnswer;

import java.util.List;

/**
 * 评分策略
 *
 * @author <a href="https://gitee.com/ccllzz0346">ccllzz</a>
 * @from <a href="http:ccllzz.top">ccllzz`s blog</a>
 */
public interface ScoringStrategy {

    /**
     * 执行评分
     *
     * @param choices
     * @param app
     * @return
     * @throws Exception
     */
    UserAnswer doScore(List<String> choices, App app) throws Exception;
}