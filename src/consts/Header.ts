// src/consts/Header.ts

export interface BadgeLevelConfig {
    bonusRate: number;
}

export interface BadgeConfig {
    key: string;
    icon: string;
    label: string;
    maxLevel: number;
    levels: Record<number, BadgeLevelConfig>;
    storageKey: string;
    startedKey: string;
    eventName: string;
}

export const BADGE_CONFIGS: BadgeConfig[] = [
    {
        key: "pong",
        icon: "fa-solid fa-table-tennis-paddle-ball",
        label: "Pong",
        maxLevel: 6,
        levels: {
            1: { bonusRate: 1 },
            2: { bonusRate: 2 },
            3: { bonusRate: 3 },
            4: { bonusRate: 4 },
            5: { bonusRate: 5 },
            6: { bonusRate: 6 },
        },
        storageKey: "pongLevel",
        startedKey: "pongHasStarted",
        eventName: "pong-level-update",
    },
    {
        key: "brick",
        icon: "fa-solid fa-cubes-stacked",
        label: "Brick",
        maxLevel: 6,
        levels: {
            1: { bonusRate: 1 },
            2: { bonusRate: 2 },
            3: { bonusRate: 3 },
            4: { bonusRate: 4 },
            5: { bonusRate: 5 },
            6: { bonusRate: 6 },
        },
        storageKey: "brickLevel",
        startedKey: "brickHasStarted",
        eventName: "brick-level-update",
    },
];

export const getRequiredExp = (level: number): number => {
    if (level === 0) return 10;
    return Math.floor(10 * Math.pow(1.5, level));
};