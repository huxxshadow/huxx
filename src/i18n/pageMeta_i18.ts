// src/i18n/pageMeta_i18.ts
// 各页面的 <meta name="description">（也用作分享卡片的描述）。
// 页面标题直接用导航栏的词（navTranslations），这里只放描述。

import type { Multilingual } from "@/i18n";

export const pageDescriptions = {
    home: {
        en: "Jeffery Hu (huxx) — game designer, game developer and technical artist. Led the team behind the Steam games Empty Throne and Eel, and now studying game development at USC.",
        zh: "Jeffery Hu（huxx）的个人网站：游戏设计、游戏开发与技术美术。曾带队在 Steam 发布《空王座》与《鳗》，目前在南加州大学攻读游戏开发硕士。",
        ja: "Jeffery Hu（huxx）の個人サイト。ゲームデザイン、ゲーム開発、テクニカルアート。チームを率いて『エンプティ・スローン』『イール・オン・マスク』をSteamでリリースし、現在は南カリフォルニア大学でゲーム開発を学んでいます。",
        ko: "Jeffery Hu(huxx)의 개인 사이트. 게임 디자인·게임 개발·테크니컬 아트. 팀을 이끌고 Steam에 《엠프티 스론》과 《일 온 마스크》를 출시했으며, 현재 서던캘리포니아대학교에서 게임 개발 석사 과정을 밟고 있습니다.",
    } as Multilingual,

    aboutme: {
        en: "About Jeffery Hu (huxx): hobbies, and the games and anime that have stayed with me.",
        zh: "关于 Jeffery Hu（huxx）：我的爱好，以及一路陪伴我的游戏与动画。",
        ja: "Jeffery Hu（huxx）について：趣味と、これまで出会ってきたゲームやアニメ。",
        ko: "Jeffery Hu(huxx)에 대해: 취미, 그리고 함께해 온 게임과 애니메이션.",
    } as Multilingual,
};
