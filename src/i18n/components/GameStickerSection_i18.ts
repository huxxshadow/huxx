// src/i18n/components/GameStickerSection_i18.ts
import type { Multilingual } from "@/i18n";
import { COLORS } from "@/consts";
import EmptyThronePoster from "@/assets/EmptyThornePoster.png";
import EelOnMaskPoster from "@/assets/EelOnMaskPoster.png";
import ClickClickUniversePoster from "@/assets/ClickClickUniversePoster.png";
export interface GameData {
    id: string;
    title: Multilingual;
    platformText: Multilingual;
    desc: Multilingual;
    theme: { light: string; dark: string };
    image: any;
    link: string;
}

// UI界面的翻译（标题、按钮等）
export const gameSectionUI = {
    sectionTitle: { en: "Game Projects", zh: "游戏项目", ja: "ゲームプロジェクト", ko: "게임 프로젝트" },
    shake: { en: "Shake", zh: "震动", ja: "シェイク", ko: "흔들기" },
    reset: { en: "Reset", zh: "重置", ja: "リセット", ko: "초기화" },
    learnMore: { en: "Learn More", zh: "了解更多", ja: "詳細を見る", ko: "더 알아보기" }
};

export const gamesListData: GameData[] = [
    {
        id: "game-1",
        title: {
            en: "Empty Throne",
            zh: "空王座 Empty Throne",
            ja: "空の玉座 Empty Throne",
            ko: "빈 왕좌 Empty Throne"
        },
        platformText: {
            en: "Available on Steam",
            zh: "就在 Steam",
            ja: "Steamで配信中",
            ko: "Steam 이용 가능"
        },
        desc: {
            en: "\"Empty Throne\" is a story-driven dark fairy tale puzzle game. You are a composer summoned to the royal court to write a story for the Snow Queen. But this script seems to have more than one draft...",
            zh: "《空王座》是一款剧情驱动的黑暗童话风格解谜游戏。你是一位作曲家，被皇室召入宫廷，为白雪皇后谱写她的“故事”。 但这剧本似乎不止一稿。 有的在街头传唱，有的藏在森林的尘土里。她称之为自传，魔镜却冷冷回应——那只是她希望你记住的部分。你在谱曲，也在解谜。而那把空着的王座，终将因谁的结局而落幕？",
            ja: "「空の玉座」はストーリー主導のダークファンタジーパズルゲームです。あなたは作曲家として宮廷に召喚され、白雪の女王の物語を書きます。しかし、この脚本には複数の原稿があるようです...",
            ko: "\"빈 왕좌\"는 스토리 중심의 다크 동화 퍼즐 게임입니다. 당신은 눈의 여왕을 위한 이야기를 쓰기 위해 왕궁으로 소환된 작곡가입니다. 하지만 이 대본에는 한 가지 초안만 있는 것이 아닌 것 같습니다..."
        },
        theme: COLORS.blue,
        image: EmptyThronePoster,
        link: "https://store.steampowered.com/app/3907100"
    },
    {
        id: "game-4",
        title: {
            en: "Eel On Mask",
            zh: "鳗！",
            ja: "Eel On Mask",
            ko: "Eel On Mask"
        },
        platformText: {
            en: "Available on Steam",
            zh: "就在 Steam",
            ja: "Steamで配信中",
            ko: "Steam 이용 가능"
        },
        desc: {
            en: "Eel On Mask is a 2D puzzle-platformer game where you play as the main character, Eel, who possesses the mysterious power of the “Clipping Mask.” Use this ability to freely alter the materials of stickers, solve puzzles across different worlds, and uncover the ultimate truth!",
            zh: "欢迎来到这个由贴纸构成的世界。《鳗！》是一款解谜 2D 平台跳跃游戏。你将扮演主角 Eel，利用奇妙的“剪贴蒙版”能力，自由改变贴纸的材质，解开不同世界的谜题，并找到最后的真相！",
            ja: "Eel On Mask は、主人公 Eel として不思議な「クリッピングマスク」の力を使い、ステッカーの材質を自在に変えながら様々な世界の謎を解いて真実に迫る、2D パズルプラットフォーマーです。",
            ko: "Eel On Mask는 주인공 Eel이 신비한 “Clipping Mask”의 힘을 사용해 스티커의 재질을 자유롭게 바꾸고, 다양한 세계의 퍼즐을 풀며 마지막 진실을 찾아가는 2D 퍼즐 플랫포머 게임입니다."
        },
        theme: COLORS.orange,
        image: EelOnMaskPoster,
        link: "https://store.steampowered.com/app/4391180"
    },
    {
        id: "game-5",
        title: {
            en: "Click Click Universe",
            zh: "点点世界",
            ja: "Click Click Universe",
            ko: "Click Click Universe"
        },
        platformText: {
            en: "Available on Steam",
            zh: "就在 Steam",
            ja: "Steamで配信中",
            ko: "Steam 이용 가능"
        },
        desc: {
            en: "Click Click Universe is a relaxing and delightful top-down 3D clicker game. Players are free to explore an open world made up of polyhedral shapes, where they can collect items, trigger interactions, and observe how everything changes with each click.",
            zh: "《点点世界》是一款轻松愉快的俯视角 3D 点击游戏。玩家可以自由探索一个由多面体构成的开放世界，在这里收集物品、触发互动，并观察万物随着每一次点击而发生变化。",
            ja: "Click Click Universe は、心地よく楽しい見下ろし型 3D クリッカーゲームです。多面体で構成されたオープンワールドを自由に探索し、アイテムを集めたり、さまざまなインタラクションを発生させたり、クリックのたびに変化していく世界を楽しめます。",
            ko: "Click Click Universe는 편안하고 유쾌한 탑다운 3D 클리커 게임입니다. 플레이어는 다면체로 이루어진 오픈 월드를 자유롭게 탐험하며, 아이템을 수집하고, 상호작용을 일으키고, 클릭할 때마다 변화하는 세계를 관찰할 수 있습니다."
        },
        theme: COLORS.green,
        image: ClickClickUniversePoster,
        link: "https://store.steampowered.com/app/4287740"
    }
];