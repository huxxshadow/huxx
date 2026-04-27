import type { Multilingual } from "@/i18n";

// ============================================================
//  Section Headers & Labels
// ============================================================
export const dndLabels = {
    equipmentHeader: { en: "Equipment", zh: "装备", ja: "装備", ko: "장비" } as Multilingual,
    traitsHeader: {
        en: "Traits",
        zh: "特质",
        ja: "特性",
        ko: "특성",
    } as Multilingual,
    featsHeader: { en: "Feats", zh: "专长", ja: "特技", ko: "특기" } as Multilingual,
    grimoireHeader: {
        en: "Arcane Codex",
        zh: "奥术法典",
        ja: "秘術典籍",
        ko: "비전 법전"
    } as Multilingual,
    questsHeader: {
        en: "Quest Log ",
        zh: "任务日志 ",
        ja: "クエストログ ",
        ko: "퀘스트 로그",
    } as Multilingual,
    adventureHeader: {
        en: "Adventure Log",
        zh: "冒险日志",
        ja: "冒険記録",
        ko: "모험 기록",
    } as Multilingual,
    spellLabel: {
        en: "Spell",
        zh: "法术",
        ja: "呪文",
        ko: "주문",
    } as Multilingual,
    slotsLabel: { en: "Spell Slots", zh: "法术位", ja: "スペルスロット", ko: "주문 슬롯" } as Multilingual,
    hobbiesLabel:{ en: "Hobbies", zh: "爱好", ja: "趣味", ko: "취미" } as Multilingual,
    likesLabel: { en: "Likes", zh: "喜好", ja: "好きなもの", ko: "좋아하는 것" } as Multilingual,
    favMusicLabel: { en: "Fav Music", zh: "喜欢的音乐", ja: "好きな音楽", ko: "좋아하는 음악" } as Multilingual,
    favAnimeLabel: { en: "Fav Anime", zh: "喜欢的动画", ja: "好きなアニメ", ko: "좋아하는 애니" } as Multilingual,
    mainQuestTag: {
        en: "Main",
        zh: "主线",
        ja: "メイン",
        ko: "메인",
    } as Multilingual,

    // 加在 dndLabels 对象内任意位置
    sectionTitle: {
        en: "Character Sheet",
        zh: "角色卡",
        ja: "キャラクターシート",
        ko: "캐릭터 시트",
    } as Multilingual,
    sectionSubtitle: {
        en: "D&D 5e · Personal Profile",
        zh: "D&D 5e · 个人档案",
        ja: "D&D 5e · パーソナルプロフィール",
        ko: "D&D 5e · 개인 프로필",
    } as Multilingual,
};

// ============================================================
//  Character Card
// ============================================================
export const characterCardData = {
    name: "huxx",
    alignment: {
        en: "LAWFUL NEUTRAL",
        zh: "守序中立",
        ja: "秩序にして中立",
        ko: "질서 중립",
    } as Multilingual,
    race: {
        en: "Human",
        zh: "人类",
        ja: "人間",
        ko: "인간",
    } as Multilingual,
    stats: [
        { label: "STR", value: 10, modifier: "+0", name: { en: "", zh: "力量", ja: "筋力", ko: "근력" } as Multilingual },
        { label: "DEX", value: 11, modifier: "+1", name: { en: "", zh: "敏捷", ja: "敏捷", ko: "민첩" } as Multilingual },
        { label: "CON", value: 9,  modifier: "-1", name: { en: "", zh: "体质", ja: "耐久", ko: "체력" } as Multilingual },
        { label: "INT", value: 14, modifier: "+4", name: { en: "", zh: "智力", ja: "知力", ko: "지능" } as Multilingual },
        { label: "WIS", value: 9,  modifier: "-1", name: { en: "", zh: "感知", ja: "判断", ko: "지혜" } as Multilingual },
        { label: "CHA", value: 10, modifier: "+0", name: { en: "", zh: "魅力", ja: "魅力", ko: "매력" } as Multilingual },
    ],
    classes: [
        {
            name: {
                en: "Wizard · Game Design School",
                zh: "法师·游戏设计学派",
                ja: "ウィザード・ゲームデザイン学派",
                ko: "마법사 · 게임 디자인 학파",
            } as Multilingual,
            level: "LV.08",
            progress: 85,
        },
        {
            name: {
                en: "Eldritch Knight · Tech Art",
                zh: "奥法骑士·技术美术",
                ja: "エルドリッチナイト・テクニカルアート",
                ko: "비전 기사 · 테크니컬 아트",
            } as Multilingual,
            level: "LV.05",
            progress: 60,
        },
        {
            name: {
                en: "Wizard · Data Science School",
                zh: "法师·数据科学学派",
                ja: "ウィザード・データサイエンス学派",
                ko: "마법사 · 데이터 과학 학파",
            } as Multilingual,
            level: "LV.04",
            progress: 60,
        },
    ],
    hobbies: {
        en: "Marathon, Fencing, Flute",
        zh: "马拉松，击剑，长笛",
        ja: "マラソン、フェンシング、フルート",
        ko: "마라톤, 펜싱, 플루트",
    } as Multilingual,
    likes: {
        en: "Anime, Web Novels, LEGO",
        zh: "动画，网络小说，乐高",
        ja: "アニメ、Web小説、レゴ",
        ko: "애니메이션, 웹소설, 레고",
    } as Multilingual,
    favMusic: [
        { en: "《Oblivious》", zh: "《Oblivious》", ja: "《Oblivious》", ko: "《Oblivious》" } as Multilingual,
        { en: "《遺サレタ場所/斜光》", zh: "《遗サレタ场所/斜光》", ja: "《遺サレタ場所/斜光》", ko: "《遺サレタ場所/斜光》" } as Multilingual,
        { en: "《Young And Beautiful》", zh: "《Young And Beautiful》", ja: "《Young And Beautiful》", ko: "《Young And Beautiful》" } as Multilingual,
    ],
    favAnime: [
        { en: "《The Garden of Sinners》", zh: "《空之境界》", ja: "《空の境界》", ko: "《공의 경계》" } as Multilingual,
        { en: "《Kizumonogatari》", zh: "《伤物语》", ja: "《傷物語》", ko: "《키즈모노가타리》" } as Multilingual,
        { en: "《Cyberpunk: Edgerunners》", zh: "《赛博朋克：边缘行者》", ja: "《サイバーパンク エッジランナーズ》", ko: "《사이버펑크: 엣지러너》" } as Multilingual,
        { en: "《Revue Starlight》", zh: "《少女歌剧》", ja: "《少女☆歌劇 レヴュースタァライト》", ko: "《소녀가극 레뷰 스타라이트》" } as Multilingual,
        { en: "《Made in Abyss》", zh: "《来自深渊》", ja: "《メイドインアビス》", ko: "《메이드 인 어비스》" } as Multilingual,
    ],
    personalityTitle: {
        en: "Idealist",
        zh: "理想主义者",
        ja: "理想主義者",
        ko: "이상주의자",
    } as Multilingual,


    personalityDesc1: {
        en: "I have always wanted to make games, and I hope to devote my whole life to it.",
        zh: "我一直想做游戏，而且希望是一辈子。",
        ja: "ずっとゲームを作りたいと思ってきたし、それを一生かけて続けていきたい。",
        ko: "나는 늘 게임을 만들고 싶었고, 그것을 평생 이어가고 싶다.",
    } as Multilingual,

    personalityDesc2: {
        en: "I want to help build worlds, design rules, and shape experiences — weaving emotion, story, art, systems, and interaction into works that can stay with people, move them, and be remembered for a long time.",
        zh: "我想参与构建世界、设计规则、塑造体验，把情绪、故事、美术、系统与交互编织在一起，做出能陪伴别人、打动别人、也能被人长久记住的作品。",
        ja: "世界を築き、ルールを設計し、体験を形作ることに関わりたい。感情、物語、美術、システム、インタラクションを織り合わせて、人に寄り添い、心を動かし、長く記憶に残る作品を作りたい。",
        ko: "나는 세계를 만들고, 규칙을 설계하고, 경험을 빚어내는 일에 참여하고 싶다. 감정, 이야기, 미술, 시스템, 인터랙션을 함께 엮어 사람 곁에 머무르고, 감동을 주며, 오래 기억되는 작품을 만들고 싶다.",
    } as Multilingual,

    quote: {
        en: '"Games once lit my way; I hope to create that same light for others someday."',
        zh: "“游戏曾经照亮过我，我也希望未来自己能做出这样的光。”",
        ja: "「ゲームはかつて私を照らしてくれた。いつか自分も、誰かにとってそんな光を作れるようになりたい。」",
        ko: "“게임은 한때 나를 비춰 주었다. 언젠가 나도 누군가에게 그런 빛을 만들 수 있기를 바란다.”",
    } as Multilingual,


};

// ============================================================
//  Equipment
// ============================================================
export interface EquipmentI18nData {
    icon: string;
    col: number;
    mt?: boolean;
    name: Multilingual;
    rarity: Multilingual;
    stats: Multilingual;
    flavor: Multilingual;
}

export const equipmentListData: EquipmentI18nData[] = [
    // ---- Row 1 ----
    {
        icon: "fa-solid fa-wand-sparkles",
        col: 1,
        mt: true,
        name: {
            en: "Game Engine Staff",
            zh: "游戏引擎法杖",
            ja: "ゲームエンジンの杖",
            ko: "게임 엔진 지팡이",
        },
        rarity: {
            en: "Legendary · Main Hand Weapon",
            zh: "传奇 · 主手武器",
            ja: "レジェンダリー · メインハンド武器",
            ko: "전설 · 주 무기",
        },
        stats: {
            en: "+1d4 Interactive Construction · +1d2 Cross-Platform Casting",
            zh: "+1d4 交互构建 · +1d2 全平台施法",
            ja: "+1d4 インタラクティブ構築 · +1d2 クロスプラットフォーム詠唱",
            ko: "+1d4 인터랙티브 구축 · +1d2 크로스 플랫폼 시전",
        },
        flavor: {
            en: '"An ancient staff driven by the twin cores of Unity and Unreal, capable of materializing imagination into interactive worlds."',
            zh: "「以 Unity 与 Unreal 双核驱动的古老法杖，能将想象实体化为可交互的世界。」",
            ja: "「UnityとUnrealの二つの核で駆動する古き杖。想像を実体化し、触れ合える世界へと変える。」",
            ko: "「Unity와 Unreal 듀얼 코어로 구동되는 고대 지팡이. 상상을 인터랙티브한 세계로 실체화한다.」",
        },
    },
    {
        icon: "fa-solid fa-headphones",
        col: 3,
        name: {
            en: "Silence Ward Headphones",
            zh: "寂静结界耳机",
            ja: "静寂結界ヘッドホン",
            ko: "침묵 결계 헤드폰",
        },
        rarity: {
            en: "Rare · Head Armor",
            zh: "稀有 · 头部护甲",
            ja: "レア · 頭部防具",
            ko: "레어 · 머리 방어구",
        },
        stats: {
            en: "+1d4 Focus Check · Immune to 1d3 rounds of noise interference",
            zh: "+1d4 专注检定 · 免疫 1d3 轮噪音干扰",
            ja: "+1d4 集中判定 · 1d3ラウンド騒音干渉を無効化",
            ko: "+1d4 집중 판정 · 1d3 라운드 소음 간섭 면역",
        },
        flavor: {
            en: '"Put them on, and the whole world fades to nothing but you and the quiet incantation of your code."',
            zh: "「戴上它，整个世界只剩下你与代码低声咏唱的回响。」",
            ja: "「装着すれば、世界はあなたとコードの低い詠唱の響きだけになる。」",
            ko: "「착용하면, 온 세계가 당신과 코드의 낮은 영창만 남는다.」",
        },
    },
    {
        icon: "fa-solid fa-mug-hot",
        col: 5,
        mt: true,
        name: {
            en: "Molten Coffee Chalice",
            zh: "熔火咖啡圣杯",
            ja: "溶炎コーヒーの聖杯",
            ko: "용화 커피 성배",
        },
        rarity: {
            en: "Common · Consumable",
            zh: "普通 · 消耗品",
            ja: "コモン · 消耗品",
            ko: "일반 · 소모품",
        },
        stats: {
            en: "Restores 1d6 energy on use · Gain 1d3 rounds of clarity",
            zh: "饮用后回复 1d6 精力值 · 获得 1d3 轮清醒",
            ja: "使用時1d6エネルギー回復 · 1d3ラウンドの覚醒を獲得",
            ko: "사용 시 1d6 정력 회복 · 1d3 라운드 각성 획득",
        },
        flavor: {
            en: '"The dark liquid churns gently in the cup, like an unextinguished casting flame in the hours before dawn."',
            zh: "「杯中黑色液体微微翻涌，像是凌晨时分仍未熄灭的施法火种。」",
            ja: "「カップの中の黒い液体が静かに蠢く。夜明け前にまだ消えぬ詠唱の火種のように。」",
            ko: "「잔 속 검은 액체가 조용히 일렁인다. 새벽녘에 아직 꺼지지 않은 시전의 불씨처럼.」",
        },
    },
    // ---- Row 2 ----
    {
        icon: "fa-solid fa-display",
        col: 2,
        name: {
            en: "Omnivision Crystal Display",
            zh: "全视界晶幕",
            ja: "全視界クリスタルディスプレイ",
            ko: "전시야 크리스탈 디스플레이",
        },
        rarity: {
            en: "Rare · Visual Equipment",
            zh: "稀有 · 视觉装备",
            ja: "レア · 視覚装備",
            ko: "레어 · 시각 장비",
        },
        stats: {
            en: "+1d4 Pixel Insight · +1d3 Layout Check",
            zh: "+1d4 像素洞察 · +1d3 排版检定",
            ja: "+1d4 ピクセル洞察 · +1d3 レイアウト判定",
            ko: "+1d4 픽셀 통찰 · +1d3 레이아웃 판정",
        },
        flavor: {
            en: '"No subtle misalignment can escape its gaze — not even a single pixel off."',
            zh: "「一切细微偏移都无法逃过它的注视，哪怕只有一像素的错位。」",
            ja: "「いかなる微細なズレもその視線からは逃れられない。たとえ1ピクセルのずれであっても。」",
            ko: "「아무리 미세한 어긋남도 그 시선을 피할 수 없다. 단 1픽셀의 오차라도.」",
        },
    },
    {
        icon: "fa-solid fa-laptop-code",
        col: 3,
        name: {
            en: "Silver Arcane Terminal",
            zh: "银辉奥术终端",
            ja: "銀輝アーケインターミナル",
            ko: "은휘 비전 터미널",
        },
        rarity: {
            en: "Legendary · Focus",
            zh: "传奇 · 法器",
            ja: "レジェンダリー · 法器",
            ko: "전설 · 법기",
        },
        stats: {
            en: "+1d4 All Ability Checks · Unlock Mobile Casting",
            zh: "+1d4 全属性检定 · 解锁移动施法",
            ja: "+1d4 全能力値判定 · モバイル詠唱解放",
            ko: "+1d4 전 능력치 판정 · 이동 시전 해금",
        },
        flavor: {
            en: '"This slender focus holds countless compiled incantations, ready to unfurl a working ward at any campsite."',
            zh: "「这件轻薄法器封存着无数编译完成的术式，可于任何营地展开工作结界。」",
            ja: "「この薄い法器には無数のコンパイル済み術式が封じられ、どの野営地でも作業結界を展開できる。」",
            ko: "「이 얇은 법기에는 무수한 컴파일된 술식이 봉인되어, 어떤 야영지에서든 작업 결계를 펼칠 수 있다.」",
        },
    },
    {
        icon: "fa-solid fa-pen-nib",
        col: 4,
        name: {
            en: "Realm-Drawing Inscriber",
            zh: "绘界刻印笔",
            ja: "界画刻印ペン",
            ko: "영역 각인 펜",
        },
        rarity: {
            en: "Uncommon · Off-Hand",
            zh: "精良 · 副手",
            ja: "アンコモン · オフハンド",
            ko: "고급 · 보조 무기",
        },
        stats: {
            en: "+1d4 Drawing Check · Unlock Hand-Drawn Constructs",
            zh: "+1d4 绘图检定 · 解锁手绘构筑",
            ja: "+1d4 描画判定 · 手描き構築解放",
            ko: "+1d4 드로잉 판정 · 핸드드로잉 구축 해금",
        },
        flavor: {
            en: '"Where the nib passes, lines become soft light, coalescing into visible form upon the screen."',
            zh: "「笔尖掠过之处，线条会化为微光，于屏幕之中凝结成可见之形。」",
            ja: "「ペン先が過ぎた場所で、線は微光となり、スクリーンの中で目に見える形に凝結する。」",
            ko: "「펜촉이 지나간 곳에서, 선은 미광이 되어 화면 속에서 보이는 형태로 응결된다.」",
        },
    },
    // ---- Row 3 ----
    {
        icon: "fa-solid fa-book",
        col: 2,
        mt: true,
        name: {
            en: "Architecture Codex",
            zh: "构型秘典",
            ja: "構型秘典",
            ko: "구조 비전서",
        },
        rarity: {
            en: "Uncommon · Spellbook",
            zh: "精良 · 法术书",
            ja: "アンコモン · 呪文書",
            ko: "고급 · 주문서",
        },
        stats: {
            en: "+1d4 Architecture Check · Reroll 1 failed System Design check per day",
            zh: "+1d4 架构检定 · 每日可重投 1 次系统设计失败",
            ja: "+1d4 アーキテクチャ判定 · 1日1回システム設計の失敗を振り直し",
            ko: "+1d4 아키텍처 판정 · 하루 1회 시스템 설계 실패 재굴림",
        },
        flavor: {
            en: '"Its pages record ancient yet efficient architectural rites; readers often hear the whispers of predecessors."',
            zh: "「书页中记载着古老而高效的构型仪式，研读者常能听见先贤于耳边低语。」",
            ja: "「書頁には古くも効率的な構型儀式が記され、読む者は先人の囁きを耳にすることがある。」",
            ko: "「서책에는 오래되었지만 효율적인 구조 의식이 기록되어 있으며, 읽는 자는 선현의 속삭임을 듣곤 한다.」",
        },
    },
    {
        icon: "fa-solid fa-gamepad",
        col: 3,
        name: {
            en: "Ludic Resonance Controller",
            zh: "游艺共鸣手柄",
            ja: "遊戯共鳴コントローラー",
            ko: "유희 공명 컨트롤러",
        },
        rarity: {
            en: "Rare · Research Tool",
            zh: "稀有 · 研究工具",
            ja: "レア · 研究道具",
            ko: "레어 · 연구 도구",
        },
        stats: {
            en: "+1d4 Game Appreciation · +1d3 Inspiration Gain",
            zh: "+1d4 游戏鉴赏 · +1d3 灵感获取",
            ja: "+1d4 ゲーム鑑賞 · +1d3 インスピレーション獲得",
            ko: "+1d4 게임 감상 · +1d3 영감 획득",
        },
        flavor: {
            en: '"Those who hold it glimpse the true laws behind mechanics, feedback, and the arrangement of fun."',
            zh: "「握住它的人能在游玩之间窥见机制、反馈与乐趣编排背后的真正法则。」",
            ja: "「握る者はプレイの合間に、メカニクス・フィードバック・楽しさの構成の裏にある真の法則を垣間見る。」",
            ko: "「이것을 쥐는 자는 플레이 중에 메커닉, 피드백, 재미 배치 뒤에 숨겨진 진정한 법칙을 엿볼 수 있다.」",
        },
    },
    {
        icon: "fa-solid fa-music",
        col: 4,
        mt: true,
        name: {
            en: "Silver Moon Flute",
            zh: "银月长笛",
            ja: "銀月のフルート",
            ko: "은월 장笛",
        },
        rarity: {
            en: "Uncommon · Musical Instrument",
            zh: "精良 · 乐器",
            ja: "アンコモン · 楽器",
            ko: "고급 · 악기",
        },
        stats: {
            en: "+1d4 Charisma Check · Allies gain 1d3 Morale",
            zh: "+1d4 魅力检定 · 友方获得 1d3 士气",
            ja: "+1d4 魅力判定 · 味方が1d3の士気を獲得",
            ko: "+1d4 매력 판정 · 아군 1d3 사기 획득",
        },
        flavor: {
            en: '"When the melody plays, faint silver notes shimmer in the air, steadying the minds of companions."',
            zh: "「当旋律响起，空气会浮现淡银色音纹，使同行者的心神重归平稳。」",
            ja: "「旋律が響くと、空気に淡い銀色の音紋が浮かび、仲間の心を落ち着かせる。」",
            ko: "「선율이 울리면, 공기 중에 연한 은색 음문이 떠올라 동행자의 마음을 안정시킨다.」",
        },
    },
    // ---- Row 5 (row 4 commented out in original) ----
    {
        icon: "fa-solid fa-code",
        col: 3,
        name: {
            en: "Blue Glow Rune Workshop",
            zh: "蓝辉符文工坊",
            ja: "蒼輝ルーン工房",
            ko: "청휘 룬 공방",
        },
        rarity: {
            en: "Rare · Enchanting Tool",
            zh: "稀有 · 附魔工具",
            ja: "レア · エンチャント道具",
            ko: "레어 · 마력 부여 도구",
        },
        stats: {
            en: "+1d4 Coding Check · Socket 1d3 extra Plugin Runes",
            zh: "+1d4 编码检定 · 额外镶嵌 1d3 插件符文",
            ja: "+1d4 コーディング判定 · 追加で1d3プラグインルーンを装着",
            ko: "+1d4 코딩 판정 · 추가 1d3 플러그인 룬 장착",
        },
        flavor: {
            en: '"This portable workshop responds to the caster in blue radiance; each startup feels like a familiar enchanting ritual."',
            zh: "「这座便携工坊以蓝色辉光回应施术者，每一次启动都像一次熟悉的附魔仪式。」",
            ja: "「この携帯型工房は蒼い輝きで術者に応え、起動するたびに馴染みの付呪儀式のようだ。」",
            ko: "「이 휴대용 공방은 푸른 빛으로 시전자에게 응답하며, 매번 기동할 때마다 익숙한 마력 부여 의식 같다.」",
        },
    },
    // ---- Row 6 ----
    {
        icon: "fa-solid fa-map",
        col: 1,
        name: {
            en: "Level Blueprint Scroll",
            zh: "关卡蓝图卷轴",
            ja: "レベルブループリントの巻物",
            ko: "레벨 블루프린트 두루마리",
        },
        rarity: {
            en: "Uncommon · Design Relic",
            zh: "精良 · 设计遗物",
            ja: "アンコモン · 設計遺物",
            ko: "고급 · 설계 유물",
        },
        stats: {
            en: "+1d4 Scene Construction · +1d3 Pathfinding",
            zh: "+1d4 场景构筑 · +1d3 路径规划",
            ja: "+1d4 シーン構築 · +1d3 経路設計",
            ko: "+1d4 씬 구축 · +1d3 경로 설계",
        },
        flavor: {
            en: '"The lines within the scroll extend with your thoughts, organizing chaotic terrain into orderly paths for adventurers."',
            zh: "「卷轴中的线条会随思绪延展，将混乱的地形整理成可供冒险者穿行的秩序。」",
            ja: "「巻物の線は思考とともに伸び、混沌とした地形を冒険者が通れる秩序へと整える。」",
            ko: "「두루마리 속 선은 사고와 함께 뻗어나가, 혼란스러운 지형을 모험자가 지나갈 수 있는 질서로 정리한다.」",
        },
    },
    {
        icon: "fa-solid fa-dragon",
        col: 2,
        name: {
            en: "Inspiration Companion Dragon",
            zh: "灵感伴生龙",
            ja: "霊感の伴竜",
            ko: "영감의 동반 드래곤",
        },
        rarity: {
            en: "Legendary · Familiar",
            zh: "传奇 · 魔宠",
            ja: "レジェンダリー · ファミリア",
            ko: "전설 · 사역수",
        },
        stats: {
            en: "Generates 1d4 creative sparks per round · +1d3 to one Design check",
            zh: "每轮产生 1d4 创意火花 · 使一次设计检定额外获得 +1d3",
            ja: "毎ラウンド1d4の創造的閃きを生成 · デザイン判定1回に+1d3",
            ko: "매 라운드 1d4 창의적 불꽃 생성 · 디자인 판정 1회에 +1d3",
        },
        flavor: {
            en: '"It perches on the corner of your desk, each wisp of white smoke coalescing into the embryo of an unnamed mechanic."',
            zh: "「它盘踞在案台一角，呼出的每一缕白烟都会在空中凝成尚未命名的玩法雏形。」",
            ja: "「机の隅に佇み、吐き出す白煙の一筋一筋が、まだ名のないゲームプレイの雛形を空中に凝らす。」",
            ko: "「책상 구석에 웅크리고 앉아, 내뿜는 하얀 연기 한 줄기마다 아직 이름 없는 플레이 원형이 공중에 응결된다.」",
        },
    },
    {
        icon: "fa-solid fa-hourglass-half",
        col: 4,
        name: {
            en: "Compile Slowtime Hourglass",
            zh: "编译缓时沙漏",
            ja: "コンパイル緩時の砂時計",
            ko: "컴파일 완시 모래시계",
        },
        rarity: {
            en: "Rare · Arcane Curiosity",
            zh: "稀有 · 奥术奇物",
            ja: "レア · 秘術の珍品",
            ko: "레어 · 비전 기물",
        },
        stats: {
            en: "Reroll 1 failed check per day · Gain 1d3 rounds of high focus",
            zh: "每日 1 次重掷失败检定 · 获得 1d3 轮高专注状态",
            ja: "1日1回の失敗判定を振り直し · 1d3ラウンドの高集中状態を獲得",
            ko: "하루 1회 실패 판정 재굴림 · 1d3 라운드 고집중 상태 획득",
        },
        flavor: {
            en: '"When flipped, the tangled threads of time realign, granting the caster moments to finish deductions that normally take hours."',
            zh: "「翻转它时，纷乱的时序将被重新排列，使施术者能在片刻之间完成常人漫长的推演。」",
            ja: "「反転させると乱れた時序が再整列し、術者は常人が長時間かかる推論を一瞬で終えられる。」",
            ko: "「뒤집으면 어지러운 시간의 순서가 재정렬되어, 시전자가 보통 오랜 시간 걸리는 추론을 순식간에 마칠 수 있다.」",
        },
    },
    {
        icon: "fa-solid fa-dungeon",
        col: 5,
        name: {
            en: "World Prototype Box",
            zh: "世界雏形匣",
            ja: "世界の雛形匣",
            ko: "세계 원형 상자",
        },
        rarity: {
            en: "Rare · Inspiration Item",
            zh: "稀有 · 灵感道具",
            ja: "レア · インスピレーション道具",
            ko: "레어 · 영감 아이템",
        },
        stats: {
            en: "+1d4 Worldbuilding · Restore 1d3 mental HP during rest",
            zh: "+1d4 世界构筑 · 休整时回复 1d3 心智",
            ja: "+1d4 世界構築 · 休憩時1d3の精神値を回復",
            ko: "+1d4 세계 구축 · 휴식 시 1d3 정신력 회복",
        },
        flavor: {
            en: '"The box holds the raw outlines of cities, dungeons, and ruins, awaiting a creator to truly name them."',
            zh: "「匣中封存着城市、秘境与遗迹的原始轮廓，只待一位造物者将其真正命名。」",
            ja: "「匣には都市・秘境・遺跡の原初の輪郭が封じられ、真に名づける創造者を待ち続けている。」",
            ko: "「상자 안에는 도시, 비경, 유적의 원시 윤곽이 봉인되어 있으며, 진정으로 이름을 붙여줄 창조자를 기다린다.」",
        },
    },
];

// ============================================================
//  Traits
// ============================================================
export interface TraitI18nData {
    icon: string;
    name: Multilingual;
    description: Multilingual;
}

export const traitListData: TraitI18nData[] = [
    {
        icon: "fa-solid fa-brain",
        name: {
            en: "Arcane Inference",
            zh: "奥术推演 (Arcane Inference)",
            ja: "秘術推論 (Arcane Inference)",
            ko: "비전 추론 (Arcane Inference)",
        },
        description: {
            en: "Thanks to years of model training and accumulated knowledge, your mind always touches the patterns hidden beneath the surface one step ahead. On the first relevant Intelligence check against the unknown, roll an additional 1d4.",
            zh: "得益于长期的模型训练与知识积累，你的意识总能先一步触及隐藏于表象之下的规律。面对未知事物时，第一次相关 智力检定 可额外掷 1d4。",
            ja: "長年のモデル訓練と知識の蓄積により、あなたの意識は常に表層の下に隠された法則に一歩先に触れる。未知の事象に対する最初の知力判定で追加の1d4を振れる。",
            ko: "오랜 모델 훈련과 지식 축적 덕분에, 당신의 의식은 항상 표면 아래 숨겨진 법칙에 한 발 먼저 닿는다. 미지의 사물에 대한 첫 번째 지능 판정에서 추가로 1d4를 굴린다.",
        },
    },
    {
        icon: "fa-solid fa-moon",
        name: {
            en: "Midnight Casting",
            zh: "烛夜施法 (Midnight Casting)",
            ja: "燭夜詠唱 (Midnight Casting)",
            ko: "촛불밤 시전 (Midnight Casting)",
        },
        description: {
            en: "In the long night and silence, your thoughts are at their clearest. Gain advantage on creation, coding, or deduction performed after midnight.",
            zh: "在长夜与寂静中，你的思绪最为清晰。午夜之后进行创作、编码或推演时，获得优势。",
            ja: "長い夜と静寂の中で、あなたの思考は最も明晰になる。深夜以降の創作・コーディング・推論に有利を得る。",
            ko: "긴 밤과 고요 속에서, 당신의 사고는 가장 명료해진다. 자정 이후 창작, 코딩 또는 추론 시 이점을 얻는다.",
        },
    },
    {
        icon: "fa-solid fa-shield",
        name: {
            en: "Unbroken Oath",
            zh: "不屈誓念 (Unbroken Oath)",
            ja: "不屈の誓い (Unbroken Oath)",
            ko: "불굴의 서약 (Unbroken Oath)",
        },
        description: {
            en: "Once you set your course, you rarely stop for doubt or exhaustion. After each long rest, you may immediately reroll the first failed Wisdom or Intelligence check.",
            zh: "一旦你认定方向，便极少因怀疑或疲惫而停下脚步。每次长休后，首次失败的 感知 或 智力检定 可立即重掷一次。",
            ja: "一度方向を定めたら、疑念や疲労で足を止めることは滅多にない。大休憩後、最初に失敗した判断力または知力判定を即座に振り直せる。",
            ko: "일단 방향을 정하면, 의심이나 피로로 발걸음을 멈추는 일은 거의 없다. 긴 휴식 후, 처음 실패한 지혜 또는 지능 판정을 즉시 재굴림할 수 있다.",
        },
    },
    {
        icon: "fa-solid fa-shuffle",
        name: {
            en: "Warmage Conversion",
            zh: "战法转化 (Warmage Conversion)",
            ja: "戦法転化 (Warmage Conversion)",
            ko: "전법 전환 (Warmage Conversion)",
        },
        description: {
            en: "You are long accustomed to switching between intuition and logic — sketching visions and forging formulae alike. On the first check involving both aesthetics and implementation, roll an additional 1d4.",
            zh: "你早已习惯在直觉与法则之间切换，既能描摹幻象，也能亲手铸成术式。面对同时涉及美感与实现的任务时，第一次相关检定可额外掷 1d4。",
            ja: "あなたは直感と法則の間を行き来することに慣れ、幻像を描くことも、術式を自ら鋳造することもできる。美的感覚と実装の両方に関わる最初の判定で追加の1d4を振れる。",
            ko: "당신은 직감과 법칙 사이를 오가는 데 익숙하며, 환상을 그리는 것도 술식을 직접 만드는 것도 가능하다. 미적 감각과 구현이 동시에 관련된 첫 번째 판정에서 추가로 1d4를 굴린다.",
        },
    },
];

// ============================================================
//  Skills (Feats table — left & right columns)
// ============================================================
export interface SkillI18nData {
    modifier: string;
    name: Multilingual;
}

export const skillsLeftData: SkillI18nData[] = [
    { modifier: "+4", name: { en: "Athletics", zh: "运动", ja: "運動", ko: "운동" } },
    { modifier: "+6", name: { en: "Persuasion", zh: "沟通", ja: "説得", ko: "설득" } },
    { modifier: "+3", name: { en: "Arcana", zh: "知识（神秘）", ja: "知識（神秘）", ko: "지식 (신비)" } },
    { modifier: "+2", name: { en: "History", zh: "知识（世界）", ja: "知識（世界）", ko: "지식 (세계)" } },
];

export const skillsRightData: SkillI18nData[] = [
    { modifier: "-1", name: { en: "Acrobatics", zh: "灵巧", ja: "軽業", ko: "곡예" } },
    { modifier: "+1", name: { en: "Perception", zh: "察觉", ja: "知覚", ko: "지각" } },
    { modifier: "+2", name: { en: "Stealth", zh: "隐匿", ja: "隠密", ko: "은신" } },
    { modifier: "+3", name: { en: "Sleight of Hand", zh: "巧手", ja: "手先", ko: "손재주" } },
];

// ============================================================
//  Spell Book
// ============================================================
export interface SpellI18nEntry {
    icon: string;
    name: string;          // canonical English spell name — kept across all locales
    subtitle: Multilingual; // localized flavour subtitle
}

export interface SpellLevelI18nData {
    label: Multilingual;
    totalSlots: number;
    filledSlots: number;
    spells: SpellI18nEntry[];
}

export const spellBookData: SpellLevelI18nData[] = [
    {
        label:  { en: "0 Level Cantrips", zh: "0环法术 — 戏法", ja: "0レベル — 初級呪文", ko: " 0레벨 — 소마법" },
        totalSlots: 0,
        filledSlots: 0,
        spells: [
            { icon: "fa-solid fa-scroll", name: "Debug Sight", subtitle: { en: "Bug-Seeking Eye", zh: "侦错之眼", ja: "デバッグの眼", ko: "디버그의 눈" } },
            { icon: "fa-solid fa-book-open", name: "Lore Query", subtitle: { en: "Knowledge Retrieval", zh: "知识检索", ja: "知識検索", ko: "지식 검색" } },
            { icon: "fa-solid fa-hourglass-half", name: "Undo Step", subtitle: { en: "Temporal Revert", zh: "时序回溯", ja: "時系列巻き戻し", ko: "시간 회귀" } },
            { icon: "fa-solid fa-feather-pointed", name: "Quick Prototype", subtitle: { en: "Swift Construct", zh: "速构咒", ja: "速構呪", ko: "속성 구축 주문" } },
            { icon: "fa-solid fa-cubes", name: "Component Conjure", subtitle: { en: "Component Shaping", zh: "组件塑形", ja: "構形", ko: "컴포넌트 성형" } },
            { icon: "fa-solid fa-diagram-project", name: "State Weave", subtitle: { en: "State Weaving", zh: "状态编织", ja: "ステート編み", ko: "상태 직조" } },
        ],
    },
    {
        label: { en: "1st Level", zh: "1环法术", ja: "1レベル", ko: "1레벨" },
        totalSlots: 6,
        filledSlots: 5,
        spells: [
            { icon: "fa-solid fa-route", name: "Path Ward", subtitle: { en: "Route Barrier", zh: "路由结界", ja: "ルーティング結界", ko: "라우팅 결계" } },
            { icon: "fa-solid fa-brush", name: "Shader Sigil", subtitle: { en: "Shader Seal", zh: "着色符印", ja: "シェーダー符印", ko: "셰이더 부인" } },
            { icon: "fa-solid fa-gears", name: "Pipeline Ritual", subtitle: { en: "Pipeline Rite", zh: "管线仪式", ja: "パイプライン儀式", ko: "파이프라인 의식" } },
            { icon: "fa-solid fa-database", name: "Config Binding", subtitle: { en: "Config Seal", zh: "配置缚印", ja: "設定縛印", ko: "설정 봉인" } },
        ],
    },
    {
        label: { en: "2nd Level", zh: "2环法术", ja: "2レベル", ko: "2레벨" },
        totalSlots: 5,
        filledSlots: 4,
        spells: [
            { icon: "fa-solid fa-bolt", name: "Deployment Surge", subtitle: { en: "Deploy Torrent", zh: "部署奔流", ja: "デプロイ奔流", ko: "배포 격류" } },
            { icon: "fa-solid fa-wind", name: "Refactor Tempest", subtitle: { en: "Refactor Storm", zh: "重构风暴", ja: "リファクタ嵐", ko: "리팩터링 폭풍" } },
            { icon: "fa-solid fa-chess-board", name: "System Architecture", subtitle: { en: "System Construct", zh: "系统构筑", ja: "システム構築", ko: "시스템 구축" } },
            { icon: "fa-solid fa-eye", name: "Review Insight", subtitle: { en: "Review True Sight", zh: "审查真视", ja: "レビュー真視", ko: "리뷰 진시" } },
        ],
    },
    {
        label:  { en: "3rd Level", zh: "3环法术", ja: "3レベル", ko: "3레벨" },
        totalSlots: 4,
        filledSlots: 3,
        spells: [
            { icon: "fa-solid fa-chart-line", name: "Data Scrying", subtitle: { en: "Data Divination", zh: "数据占视", ja: "データ占視", ko: "데이터 점시" } },
            { icon: "fa-solid fa-hammer", name: "Toolchain Rite", subtitle: { en: "Toolchain Ritual", zh: "工具链仪式", ja: "ツール儀式", ko: "툴체인 의식" } },
            { icon: "fa-solid fa-object-group", name: "Layout Alchemy", subtitle: { en: "Layout Transmutation", zh: "版式炼成", ja: "レイアウト錬成", ko: "레이아웃 연성" } },
            { icon: "fa-solid fa-circle-nodes", name: "Shader Weave", subtitle: { en: "Shader Weaving", zh: "着色编织", ja: "シェーダー編み", ko: "셰이더 직조" } },
        ],
    },
    {
        label: { en: "4th Level", zh: "4环法术", ja: "4レベル", ko: "4레벨" },
        totalSlots: 3,
        filledSlots: 2,
        spells: [
            { icon: "fa-solid fa-link", name: "Cross-Realm Sync", subtitle: { en: "Cross-Domain Sync", zh: "跨域协同", ja: "クロス同期", ko: "교차 영역 동기화" } },
            { icon: "fa-solid fa-comment-dots", name: "Prompt Whisper", subtitle: { en: "Directive Whisper", zh: "指令低语", ja: "指令の囁き", ko: "지령의 속삭임" } },
        ],
    },
    {
        label: { en: "5th Level", zh: "5环法术", ja: "5レベル", ko: "5레벨" },
        totalSlots: 2,
        filledSlots: 1,
        spells: [
            { icon: "fa-solid fa-wand-magic-sparkles", name: "Worldbuilding Rite", subtitle: { en: "Worldbuilding Ritual", zh: "世界构筑仪式", ja: "世界構築儀式", ko: "세계 구축 의식" } },
            { icon: "fa-solid fa-globe", name: "Fullstack Dominion", subtitle: { en: "Fullstack Domain", zh: "全栈领域", ja: "フルスタ領域", ko: "풀스택 영역" } },
        ],
    },
];

// ============================================================
//  Quests
// ============================================================
export interface MainQuestI18nData {
    icon: string;
    title: Multilingual;
    description: Multilingual;
    progress: number;
}

export interface SideQuestI18nData {
    icon: string;
    title: Multilingual;
    progress: number;
}

export const mainQuestData: MainQuestI18nData = {
    icon: "fa-solid fa-crown",
    title: {
        en: "World Builder of Games",
        zh: "游戏世界构筑者",
        ja: "ゲーム世界の構築者",
        ko: "게임 세계 구축자",
    },
    description: {
        en: "Using mechanics, narrative, and art to craft memorable games at the edge of fantasy.",
        zh: "以机制、叙事与美术为媒介，持续打造更多优秀的游戏作品，在秩序与幻想的交界处构筑能被玩家记住的世界。",
        ja: "メカニクス・物語・アートで、秩序と幻想が交わる記憶に残るゲーム世界を築く。",
        ko: "메커닉, 서사, 미술을 매개로, 계속해서 더 많은 훌륭한 게임 작품을 만들어내며, 질서와 환상의 경계에서 플레이어가 기억할 세계를 구축한다.",
    },
    progress: 10,
};

export const sideQuestsData: SideQuestI18nData[] = [
    {
        icon: "fa-solid fa-cube",
        title: {
            en: "Master 3D Rendering Arcana",
            zh: "精通高阶3D渲染奥术",
            ja: "3Dレンダリング秘術を極める",
            ko: "고급 3D 렌더링 비전 마스터",
        },
        progress: 40,
    },
    {
        icon: "fa-solid fa-palette",
        title: {
            en: "Refine System Architecture",
            zh: "精进系统构筑术",
            ja: "システム構築術の精進",
            ko: "시스템 구축술 정진",
        },
        progress: 70,
    },
];

// ============================================================
//  Adventure Timeline
// ============================================================
export interface TimelineI18nEntry {
    year: string;
    title: Multilingual;
    description: Multilingual;
    isNow?: boolean;
}

export const timelineData: TimelineI18nEntry[] = [
    {
        year: "2008",
        title: {
            en: "Entered the World of Games",
            zh: "踏入游戏的世界",
            ja: "ゲームの世界へ足を踏み入れる",
            ko: "게임의 세계에 발을 들이다",
        },
        description: {
            en: "First stepped into the world of video games. From that moment, the dice of fate were quietly cast, and a long adventure officially began.",
            zh: "第一次踏入电子游戏的世界。自此，命运的骰子被悄然掷下，漫长的冒险正式开始。",
            ja: "初めてビデオゲームの世界に足を踏み入れた。それ以来、運命のダイスは静かに投じられ、長い冒険が正式に始まった。",
            ko: "처음으로 비디오 게임의 세계에 발을 들였다. 이때부터 운명의 주사위는 조용히 던져졌고, 긴 모험이 공식적으로 시작되었다.",
        },
    },
    {
        year: "2020",
        title: {
            en: "The Starting Point of Adventure",
            zh: "冒险的起点",
            ja: "冒険の出発点",
            ko: "모험의 시작점",
        },
        description: {
            en: "Started learning Unreal Engine 4 and game development, turning ideas into playable worlds.",
            zh: "开始学习虚幻引擎 4 与游戏开发，初次尝试将脑海中的幻想转化为可被游玩的世界。",
            ja: "Unreal Engine 4とゲーム開発の学習を開始。脳裏の幻想をプレイ可能な世界へと変える初めての試み。",
            ko: "언리얼 엔진 4와 게임 개발을 배우기 시작했고, 머릿속의 환상을 플레이 가능한 세계로 바꾸는 첫 시도를 했다.",
        },
    },
    {
        year: "2022",
        title: {
            en: "Academy Training",
            zh: "学院修行",
            ja: "学院での修行",
            ko: "학원 수련",
        },
        description: {
            en: "Began studying Computer Science at Hong Kong Baptist University, strengthening foundations in systems, algorithms, and engineering.",
            zh: "进入香港浸会大学攻读计算机科学学士，在系统、算法与工程之道中继续打磨施法基础。",
            ja: "香港浸会大学でコンピュータサイエンスの学士課程に進学。システム・アルゴリズム・工学の道で詠唱の基礎を磨き続ける。",
            ko: "홍콩 침례대학교에서 컴퓨터 과학 학사 과정에 입학하여, 시스템, 알고리즘, 공학의 길에서 시전의 기초를 계속 연마했다.",
        },
    },
    {
        year: "2025",
        title: {
            en: "Professional Trials Begin",
            zh: "开始职业试炼",
            ja: "職業試練の開始",
            ko: "직업 시련의 시작",
        },
        description: {
            en: "Joined Tencent’s TiMi Studio as a Combat Design Intern, studying combat systems, pacing, and player feedback in the field.",
            zh: "于腾讯天美工作室担任战斗策划实习生，深入学习战斗系统、数值节奏与玩家反馈之间的平衡，继续打磨对游戏体验的理解。",
            ja: "テンセントのTiMi Studioにコンバットデザインインターンとして入社。戦闘システム・数値テンポ・プレイヤーフィードバックのバランスを深く学び、ゲーム体験への理解を磨き続ける。",
            ko: "텐센트 TiMi 스튜디오에서 전투 기획 인턴으로 합류하여, 전투 시스템, 수치 리듬, 플레이어 피드백 간의 균형을 깊이 학습하며, 게임 경험에 대한 이해를 계속 다듬었다.",
        },
    },
    {
        year: "NOW",
        isNow: true,
        title: {
            en: "Seeking the Frontier of Chaos",
            zh: "寻找混沌边界",
            ja: "混沌の境界を求めて",
            ko: "혼돈의 경계를 찾아서",
        },
        description: {
            en: "Still slowly advancing through the frontier where code, design, narrative, and visuals converge…",
            zh: "仍在代码、设计、叙事与视觉交汇的边陲缓慢前行……",
            ja: "コード・デザイン・物語・ビジュアルが交わる辺境で、今もゆっくりと前進し続けている……",
            ko: "여전히 코드, 디자인, 서사, 비주얼이 교차하는 변경에서 천천히 나아가고 있다……",
        },
    },
];