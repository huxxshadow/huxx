import type { Multilingual } from "@/i18n";
import type { ImageMetadata } from "astro";
import hobbyGames from "@/assets/aboutme/hobby-games.webp";
import hobbyAnime from "@/assets/aboutme/hobby-anime.webp";

// ============================================================
//  Intro Section i18n Data
// ============================================================

export const introLabels = {
    greeting: {
        en: "Hi, I'm Jeffery Hu",
        zh: "你好，我是 Jeffery Hu",
        ja: "こんにちは、Jeffery Huです",
        ko: "안녕하세요, Jeffery Hu입니다",
    } as Multilingual,

    // 关于我：不写履历，只写几个爱好，每条一句话 + 一行小字。
    // 加配图：在对应条目里写 image: 某张 import 进来的图片，卡片顶部就会显示这张图（没有配图时显示图标）
    hobbies: [
        {
            icon: "fa-gamepad",
            image: hobbyGames,
            title: { en: "I love video games", zh: "我热爱电子游戏", ja: "ビデオゲームが大好き", ko: "비디오 게임을 사랑합니다" },
            note: {
                en: "Over 5,000 hours played on Steam",
                zh: "我的 Steam 总时长超过 5000 小时",
                ja: "Steam の総プレイ時間は 5000 時間以上",
                ko: "Steam 총 플레이 시간 5,000시간 이상",
            },
        },
        {
            icon: "fa-tv",
            image: hobbyAnime,
            title: { en: "I'm an anime fan", zh: "我是个二次元", ja: "アニメオタクです", ko: "저는 오타쿠입니다" },
            note: { en: "Always watching something new", zh: "喜欢看动画", ja: "アニメを見るのが好き", ko: "애니메이션 보는 걸 좋아해요" },
        },
        {
            icon: "fa-medal",
            title: { en: "I love long-distance running", zh: "我喜欢长跑", ja: "長距離ランが好き", ko: "장거리 달리기를 좋아합니다" },
            note: {
                en: "Ran the Standard Chartered Hong Kong Half Marathon",
                zh: "曾参加过香港渣打半程马拉松",
                ja: "スタンダードチャータード香港マラソンのハーフに出場",
                ko: "스탠다드차타드 홍콩 하프 마라톤 완주",
            },
        },
    ] as { icon: string; title: Multilingual; note: Multilingual; image?: ImageMetadata }[],

    transition: {
        en: "Mundane resumes end here. Now then—roll the die!\n1d20... Natural 20! 'Identify' is a critical success. Character sheet revealed.",
        zh: "凡俗的履历到此为止。那么接下来，掷骰吧！\n1d20……自然 20！「鉴定术」大成功，角色面板已揭示。",
        ja: "ありふれた履歴書はここまでだ。さあ、次はダイスを振ろう！\n1d20……ナチュラル20！「鑑定」大成功、キャラクターシートを開示した。",
        ko: "평범한 이력서는 여기까지. 자, 이제 주사위를 굴려보자!\n1d20... 내추럴 20! '감정' 대성공, 캐릭터 시트가 공개되었다.",
    } as Multilingual,
};

// ============================================================
//  Roles (array per locale, not Multilingual)
// ============================================================
export const rolesData: Record<string, string[]> = {
    en: ["Game Design", "Game Development", "Technical Art"],
    zh: ["游戏设计", "游戏开发", "技术美术"],
    ja: ["ゲームデザイン", "ゲーム開発", "テクニカルアート"],
    ko: ["게임 디자인", "게임 개발", "테크니컬 아트"],
};