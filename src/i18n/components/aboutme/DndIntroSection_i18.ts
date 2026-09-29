import type { Multilingual } from "@/i18n";
import type { ImageMetadata } from "astro";
import hobbyGames from "@/assets/aboutme/hobby-games.webp";
import hobbyAnime from "@/assets/aboutme/hobby-anime.webp";
import hobbyRunning from "@/assets/aboutme/hobby-running.webp";

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
            title: { en: "I love video games", zh: "我热爱电子游戏", ja: "ビデオゲームが大好き", ko: "비디오 게임을 사랑합니다" },
            notes: [
                {
                    en: "Over 5,000 hours played on Steam",
                    zh: "我的 Steam 总时长超过 5000 小时",
                    ja: "Steam の総プレイ時間は 5000 時間以上",
                    ko: "Steam 총 플레이 시간 5,000시간 이상",
                },
                {
                    en: "Favourites: CRPGs and strategy games",
                    zh: "最喜欢 CRPG 和策略类游戏",
                    ja: "一番好きなのは CRPG とストラテジー",
                    ko: "가장 좋아하는 장르는 CRPG와 전략 게임",
                },
            ],
        },
        {
            icon: "fa-tv",
            image: hobbyAnime,
            title: { en: "I'm an anime fan", zh: "我是个二次元", ja: "アニメオタクです", ko: "저는 오타쿠입니다" },
            notes: [
                { en: "Love watching anime", zh: "喜欢看动画", ja: "アニメを見るのが好き", ko: "애니메이션 보는 걸 좋아해요" },
                { en: "Drawn to stream-of-consciousness direction", zh: "喜欢意识流演出风格", ja: "意識の流れ的な演出が好き", ko: "의식의 흐름 같은 연출을 좋아해요" },
            ],
        },
        {
            icon: "fa-medal",
            image: hobbyRunning,
            title: { en: "I love long-distance running", zh: "我喜欢长跑", ja: "長距離ランが好き", ko: "장거리 달리기를 좋아합니다" },
            notes: [{
                en: "Ran the Standard Chartered Hong Kong Half Marathon",
                zh: "曾参加过香港渣打半程马拉松",
                ja: "スタンダードチャータード香港マラソンのハーフに出場",
                ko: "스탠다드차타드 홍콩 하프 마라톤 완주",
            }],
        },
        {
            icon: "fa-cake-candles",
            title: { en: "I love cooking", zh: "我喜欢烹饪", ja: "料理が好き", ko: "요리를 좋아합니다" },
            notes: [{
                en: "Best at desserts and honey-glazed chicken wings",
                zh: "最擅长做甜品和蜜糖鸡翅",
                ja: "得意料理はスイーツとハニーチキンウィング",
                ko: "디저트와 허니 치킨윙이 특기",
            }],
        },
        {
            // Font Awesome 没有击剑图标，用 iconSvg 画两把交叉的花剑
            icon: "",
            iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 52 L50 10"/><path d="M52 52 L14 10"/><path d="M6 46 q6 -2 10 4 q2 6 -4 8"/><path d="M58 46 q-6 -2 -10 4 q-2 6 4 8"/><circle cx="50" cy="10" r="2" fill="currentColor"/><circle cx="14" cy="10" r="2" fill="currentColor"/></svg>`,
            title: { en: "I fence", zh: "我会击剑", ja: "フェンシングをやります", ko: "펜싱을 합니다" },
            notes: [{ en: "Foil is my weapon", zh: "我会打花剑", ja: "種目はフルーレ", ko: "플뢰레를 합니다" }],
        },
        {
            icon: "fa-music",
            title: { en: "I love music", zh: "我很喜欢音乐", ja: "音楽が大好き", ko: "음악을 정말 좋아합니다" },
            notes: [{ en: "I play a little flute and piano", zh: "我会一点长笛和钢琴", ja: "フルートとピアノを少し弾けます", ko: "플루트와 피아노를 조금 연주해요" }],
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