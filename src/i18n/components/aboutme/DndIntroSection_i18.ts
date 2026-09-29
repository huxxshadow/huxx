import type { Multilingual } from "@/i18n";
import type { ImageMetadata } from "astro";
import hobbyGames from "@/assets/aboutme/hobby-games.webp";
import hobbyAnime from "@/assets/aboutme/hobby-anime.webp";
import hobbyRunning from "@/assets/aboutme/hobby-running.webp";
import hobbyCooking from "@/assets/aboutme/hobby-cooking.webp";

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

    // 关于我：不写履历，只写几个爱好，每条一句话 + 若干小标签（notes，可以放多个）。
    // 加配图：在对应条目里写 image: 某张 import 进来的图片，卡片顶部就会显示这张图（没有配图时显示图标）
    hobbies: [
        {
            icon: "fa-gamepad",
            image: hobbyGames,
            title: { en: "Video game enthusiast", zh: "电子游戏爱好者", ja: "ビデオゲーム愛好家", ko: "비디오 게임 애호가" },
            notes: [
                { en: "5,000+ hours on Steam", zh: "Steam 时长 5000+ 小时", ja: "Steam 5000 時間以上", ko: "Steam 5,000시간 이상" },
                { en: "CRPGs and strategy, forever", zh: "最爱 CRPG 与策略游戏", ja: "CRPG とストラテジーが一番", ko: "최애는 CRPG와 전략 게임" },
            ],
        },
        {
            icon: "fa-tv",
            image: hobbyAnime,
            title: { en: "Anime at heart", zh: "资深二次元", ja: "根っからのアニメ好き", ko: "뼛속까지 애니 덕후" },
            notes: [
                { en: "I watch all kinds of anime", zh: "喜欢看各类动画", ja: "いろんなジャンルのアニメを観る", ko: "다양한 장르의 애니를 즐겨 봐요" },
                { en: "Soft spot for stream-of-consciousness direction", zh: "偏爱意识流演出", ja: "意識の流れ的な演出に弱い", ko: "의식의 흐름 연출을 특히 좋아해요" },
            ],
        },
        {
            icon: "fa-medal",
            image: hobbyRunning,
            title: { en: "I love long-distance running", zh: "喜欢长跑", ja: "長距離走が好き", ko: "장거리 달리기를 좋아해요" },
            notes: [{
                en: "Ran the Standard Chartered Hong Kong Half Marathon",
                zh: "跑过香港渣打半马",
                ja: "スタンダードチャータード香港マラソン（ハーフ）に出場",
                ko: "스탠다드차타드 홍콩 하프 마라톤 출전",
            }],
        },
        {
            icon: "fa-cake-candles",
            image: hobbyCooking,
            title: { en: "I love cooking", zh: "喜欢烹饪", ja: "料理が好き", ko: "요리를 좋아해요" },
            notes: [
                { en: "Best at desserts and Cantonese dishes", zh: "擅长做甜品和粤菜", ja: "得意はスイーツと広東料理", ko: "디저트와 광둥 요리가 특기" },
            ],
        },
        {
            // Font Awesome 没有击剑图标，用 iconSvg 画两把交叉的花剑
            icon: "",
            iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 52 L50 10"/><path d="M52 52 L14 10"/><path d="M6 46 q6 -2 10 4 q2 6 -4 8"/><path d="M58 46 q-6 -2 -10 4 q-2 6 4 8"/><circle cx="50" cy="10" r="2" fill="currentColor"/><circle cx="14" cy="10" r="2" fill="currentColor"/></svg>`,
            title: { en: "En garde!", zh: "会击剑", ja: "フェンシングもやります", ko: "펜싱도 해요" },
            notes: [{ en: "Foil fencer", zh: "主项花剑", ja: "種目はフルーレ", ko: "종목은 플뢰레" }],
        },
        {
            icon: "fa-music",
            title: { en: "Music lover", zh: "离不开音乐", ja: "音楽が欠かせない", ko: "음악 없이는 못 살아요" },
            notes: [
                { en: "A little flute", zh: "会一点长笛", ja: "フルートを少し", ko: "플루트 조금" },
                { en: "A little piano", zh: "也会一点钢琴", ja: "ピアノも少し", ko: "피아노도 조금" },
            ],
        },
    ] as { icon: string; iconSvg?: string; title: Multilingual; notes: Multilingual[]; image?: ImageMetadata }[],

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