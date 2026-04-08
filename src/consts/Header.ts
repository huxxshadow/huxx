// src/consts/Header.ts
// 仅保留数据逻辑结构，样式交由组件处理，文本交由 i18n 处理

export interface BadgeLevelConfig {
    bonusRate: number; // 提供每秒额外的 EXP
}

// 纯数据配置
export const PONG_BADGE_DATA: Record<number, BadgeLevelConfig> = {
    1: { bonusRate: 1 },
    2: { bonusRate: 2 },
    3: { bonusRate: 3 },
    4: { bonusRate: 4 },
    5: { bonusRate: 5 },
    6: { bonusRate: 6 },
};

// 计算升级所需的经验曲线（举例公式）
export const getRequiredExp = (level: number): number => {
    if (level === 0) return 10;
    return Math.floor(10 * Math.pow(1.5, level));
};