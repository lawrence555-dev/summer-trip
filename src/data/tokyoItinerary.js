import { Plane, ShoppingBag, Camera, Utensils, Hotel, MapPin, Coffee, Star, Palmtree, Info, Train, User, Sparkles, Award } from 'lucide-react';

export const tokyoItinerary = [
    {
        day: 1,
        date: '7/13 (週一)',
        title: '奢華開場：虎之門鐵塔之夜',
        summary: '入住虎之門艾迪遜酒店，開啟東京的奢華序幕，並用長焦鏡頭近距離捕捉鐵塔。',
        activities: [
            {
                time: '13:25',
                title: '抵達羽田機場',
                desc: '搭乘 JL508 班機自新千歲機場抵達羽田機場 (T1)。',
                icon: Plane,
                type: 'transit',
                map: 'Haneda Airport'
            },
            {
                time: '15:00',
                title: '虎之門艾迪遜 Check-in',
                desc: '開箱奢華大廳，植物綠意環繞。',
                icon: Hotel,
                type: 'stay',
                map: 'The Tokyo EDITION, Toranomon',
                camera: {
                    mode: '哈蘇大師模式 (1x 廣角)',
                    desc: '大廳綠色植栽空間',
                    settings: 'EV +0.7，色彩選用哈蘇大師標準影調，呈現透亮綠意'
                }
            },
            {
                time: '16:30',
                title: '日本橋高島屋 S.C.',
                desc: 'Goyard 專櫃補貨與商場購物任務。',
                icon: ShoppingBag,
                type: 'shopping',
                map: 'Nihombashi Takashimaya S.C.'
            },
            {
                time: '19:00',
                title: '銀座晚餐',
                desc: '品嚐道地頂級燒肉或江戶前壽司。',
                icon: Utensils,
                type: 'dining',
                map: 'Ginza dining'
            },
            {
                time: '21:00',
                title: 'HARBS 有樂町 Lumine 店',
                desc: '外帶經典千層蛋糕回飯店享用。',
                icon: Coffee,
                type: 'dining',
                map: 'HARBS Lumine Yurakucho',
                camera: {
                    mode: '3x 潛望長焦微距',
                    desc: '千層蛋糕剖面與草莓特寫',
                    settings: '使用 3x 長焦避開人影與頂光陰影，對焦邊緣，奶油影調綿密'
                }
            },
            {
                time: '22:00',
                title: '房內夜景攝影',
                desc: '關閉房內所有燈光，利用落地窗近距離拍攝發光的東京鐵塔。',
                icon: Camera,
                type: 'activity',
                highlight: true,
                map: 'The Tokyo EDITION, Toranomon',
                camera: {
                    mode: '哈蘇大師專業模式 (3x 或 6x 潛望鏡)',
                    desc: '窗外橘紅色鐵塔特寫',
                    settings: '設定 ISO 100~200，快門手動設定 (1-2s)，對焦無窮遠，防手震拍出乾淨無雜訊的鐵塔'
                }
            }
        ],
        notes: []
    },
    {
        day: 2,
        date: '7/14 (週二)',
        title: '潮流原宿與澀谷 ➜ 藝術展覽開幕日',
        summary: '感受原宿的年輕活力與澀谷的潮流氣息，下午前往觀賞藝術展覽開幕首日。',
        activities: [
            {
                time: '09:30',
                title: '移防至東京銀座 6 丁目皇家花園酒店',
                desc: '寄存大件行李，輕裝出發。',
                icon: Hotel,
                type: 'transit',
                map: 'The Royal Park Hotel Ginza 6-Chome'
            },
            {
                time: '10:45',
                title: '原宿 HUMAN MADE 旗艦店',
                desc: '購買潮流父女裝與限定單品。',
                icon: ShoppingBag,
                type: 'shopping',
                map: 'HUMAN MADE OFFLINE STORE HARAJUKU'
            },
            {
                time: '12:00',
                title: '哈拉卡多 (Harakado) 頂樓',
                desc: '前往空中花園俯拍原宿神宮前十字路口。',
                icon: Camera,
                type: 'activity',
                map: 'Tokyu Plaza Harajuku Harakado',
                camera: {
                    mode: 'XPAN 寬幅電影模式 (45mm)',
                    desc: '十字路口的繁忙人流與潮流建築',
                    settings: '經典彩色影調，低角度或對角線構圖，營造電影劇照氛圍'
                }
            },
            {
                time: '13:30',
                title: '澀谷宮下公園 (Miyashita Park)',
                desc: '空中綠地草皮，讓女兒自由奔跑，拍下生動笑容。',
                icon: Palmtree,
                type: 'activity',
                map: 'Miyashita Park',
                camera: {
                    mode: '哈蘇人像模式 (85mm / 3x)',
                    desc: '逆光下的親子溫馨笑容',
                    settings: '開啟人像模式，模擬哈蘇大光圈散景，曝光補償 EV +0.3 拍出透亮膚色'
                }
            },
            {
                time: '14:30',
                title: 'HARBS 澀谷 Scramble Square 店 (4F)',
                desc: '就在宮下公園旁，高樓落地窗環境舒適，喝茶吃點心。',
                icon: Coffee,
                type: 'dining',
                map: 'HARBS Shibuya Scramble Square'
            },
            {
                time: '15:30',
                title: '藝術展覽 (Art Exhibition - Opening Day)',
                desc: '展覽時間：15:00 – 20:00 (開幕日)。觀賞藝術展覽，感受開幕首日獨特氛圍與藝術品魅力。',
                icon: Sparkles,
                type: 'activity',
                highlight: true,
                camera: {
                    mode: '哈蘇大師專業模式 (1x 廣角)',
                    desc: '展場內部的柔和光影與藝術展品',
                    settings: '利用大師影調捕捉展場溫暖而富有質感的光影細節，適度降低曝光以保留暗部格調'
                }
            }
        ],
        notes: []
    },
    {
        day: 3,
        date: '7/15 (週三)',
        title: '核心任務：KidZania 英語體驗日',
        summary: '全天專屬於女兒的豐富職涯體驗，用超快速快門捕捉專注瞬間。',
        activities: [
            {
                time: '09:00',
                title: 'KidZania Tokyo (豐洲)',
                desc: '週三英語日：全英文環境扮演各種職業（如消防員、烘焙師）。',
                icon: Star,
                type: 'activity',
                highlight: true,
                map: 'KidZania Tokyo',
                camera: {
                    mode: '哈蘇大師模式 (3x 潛望)',
                    desc: '室內昏暗環境下的職業體驗特寫',
                    settings: 'OPPO 自動夜景計算。利用 3x 鏡頭拉近，在不打擾體驗的距離拍出自然神情，確保快門速度'
                }
            },
            {
                time: '16:00',
                title: 'LaLaport 豐洲購物',
                desc: '大型商場逛街、補給生活物資與玩具。',
                icon: ShoppingBag,
                type: 'shopping',
                map: 'Urban Dock LaLaport Toyosu'
            },
            {
                time: '18:00',
                title: '豐洲公園海濱散步',
                desc: '海濱草地，可遠眺彩虹大橋與美麗的東京灣夕陽。',
                icon: Camera,
                type: 'activity',
                map: 'Toyosu Park',
                camera: {
                    mode: '哈蘇大師模式 (6x 潛望鏡)',
                    desc: '夕陽晚霞與彩虹大橋同框',
                    settings: '點擊太陽圖標略微調低 EV -0.7，強化火燒雲的飽和度與漸層感'
                }
            },
            {
                time: '20:00',
                title: 'HARBS 銀座三越店 (2F)',
                desc: '回銀座飯店前順路外帶經典蛋糕，省時又便利。',
                icon: Coffee,
                type: 'dining',
                map: 'HARBS Ginza Mitsukoshi'
            }
        ],
        notes: []
    },
    {
        day: 4,
        date: '7/16 (週四)',
        title: '中目黑烘焙工坊 ➜ 經典鐵塔散步',
        summary: '晨光下咖啡香氣，隨後前往芝公園拍攝東京鐵塔的傳統與現代同框。',
        activities: [
            {
                time: '07:00',
                title: '星巴克臻選® 東京烘焙工坊',
                desc: '中目黑。清晨避開人潮，拍攝壯觀的銅雕大桶與烘焙工藝。',
                icon: Coffee,
                type: 'dining',
                map: 'Starbucks Reserve Roastery Tokyo',
                camera: {
                    mode: 'XPAN 寬幅電影模式 (黑白)',
                    desc: '四層樓高巨大銅雕咖啡豆桶與烘焙線條',
                    settings: 'XPAN 黑白模式，強調銅桶上的金屬錘打質感與光影對比'
                }
            },
            {
                time: '10:00',
                title: '芝公園 + 增上寺',
                desc: '拍攝增上寺古樸屋簷與後方現代東京鐵塔的強烈對比。',
                icon: MapPin,
                type: 'activity',
                map: 'Zojoji Temple',
                camera: {
                    mode: '哈蘇大師模式 (1x 或 3x)',
                    desc: '古寺與紅鐵塔的藍天大對比',
                    settings: '使用哈蘇大師影調。藍天與朱紅色鐵塔發色會非常濃郁飽滿，EV 保持預設即可'
                }
            },
            {
                time: '12:00',
                title: '麻布台之丘 Balcony by 6th',
                desc: '品嚐人氣第一的巴斯克起司蛋糕與午餐。',
                icon: Utensils,
                type: 'dining',
                highlight: true,
                map: 'Balcony by 6th Azabudai Hills'
            },
            {
                time: '15:00',
                title: '返回銀座皇家花園酒店',
                desc: '回飯店稍作休息，並啟動衣服換洗烘乾模式。',
                icon: Hotel,
                type: 'stay',
                map: 'The Royal Park Hotel Ginza 6-Chome'
            }
        ],
        notes: []
    },
    {
        day: 5,
        date: '7/17 (週五)',
        title: '晨跑與上野動物園 ➜ 頒獎典禮 ➜ 燒肉慶功宴',
        summary: '熱血奔跑皇居與上野動物園，下午盛裝出席頒獎典禮，晚上享用頂級和牛燒肉慶功。',
        activities: [
            {
                time: '06:40',
                title: '皇居熱血跑 (5km)',
                desc: '銀座出發 ➜ 抵達 Raffine 基地換裝 ➜ 07:15 繞皇居開跑 ➜ 沖澡退場，開啟充實的一天。',
                icon: User,
                type: 'activity',
                highlight: true,
                map: 'Raffine Running Style Neo',
                camera: {
                    mode: '哈蘇大師模式 (1x 廣角)',
                    desc: '清晨微光下的皇居外圍護城河與高樓群',
                    settings: '哈蘇大師影調，呈現晨光的乾淨冷色調，拍下熱血跑姿'
                }
            },
            {
                time: '09:30',
                title: '上野動物園',
                desc: '趁早晨精神好進場，看熊貓、北極熊與大象，避開中午炎熱與人潮。',
                icon: Palmtree,
                type: 'activity',
                map: 'Ueno Zoo',
                camera: {
                    mode: '6x 超長焦潛望鏡',
                    desc: '動物園熊貓或北極熊特寫',
                    settings: 'OPPO 6x 光學變焦。能將遠處動物清晰拉近，同時利用長焦壓縮感避開雜亂背景與人群'
                }
            },
            {
                time: '12:00',
                title: '阿美橫丁午餐與採購',
                desc: '在熱鬧的阿美橫丁街區享用道地午餐，並進行免稅藥妝、伴手禮與運動用品的採購。',
                icon: ShoppingBag,
                type: 'shopping',
                map: 'Ameyoko Shopping District'
            },
            {
                time: '14:00',
                title: '頒獎典禮 (Awards Ceremony)',
                desc: '所有類別頒獎典禮。典禮時間：14:00 – 17:00。盛裝出席，參與精彩的頒獎現場與榮耀時刻。',
                icon: Award,
                type: 'activity',
                highlight: true
            },
            {
                time: '17:30',
                title: '燒肉 房家 (Bouya) 上野店',
                desc: '這趟旅行的美味慶功宴！主打一頭牛採購的頂級和牛，性價比極高。',
                icon: Utensils,
                type: 'dining',
                highlight: true,
                map: 'Yakiniku Bouya Ueno',
                camera: {
                    mode: '3x 潛望鏡長焦 (大光圈)',
                    desc: '極品和牛的細緻油花與烤網上的煙霧',
                    settings: '手動微調黃色調，光圈設定在 f/2.8 左右，拍出令人垂涎欲滴的熟肉質感'
                }
            },
            {
                time: '19:30',
                title: 'HARBS 上野松坂屋店 (2F)',
                desc: '買最後一晚的慶祝蛋糕外帶回飯店，慶祝這趟旅程的圓滿成功。',
                icon: Coffee,
                type: 'dining',
                map: 'HARBS Matsuzakaya Ueno'
            }
        ],
        notes: [
            {
                icon: Info,
                text: '跑者基地資訊：Raffine Running Style Neo (日比谷站 MB1F)，置物淋浴 ¥900/次。'
            },
            {
                icon: Info,
                text: '推薦空手方案：現場提供跑鞋、運動衣褲、毛巾租借共約 ¥1,300，跑完直接還，免帶臭衣服。'
            }
        ]
    },
    {
        day: 6,
        date: '7/18 (週六)',
        title: '上野散步與伴手禮 ➜ 歸途',
        summary: '完美的最後收尾，把行李箱塞滿，帶著滿滿的回憶與美照回台灣。',
        activities: [
            {
                time: '09:00',
                title: '上野公園晨間散步',
                desc: '散步前往二木的菓子，享受最後的東京早晨。',
                icon: Palmtree,
                type: 'activity',
                map: 'Ueno Park'
            },
            {
                time: '11:00',
                title: '二木的菓子',
                desc: '最後的零食與名產大採購，裝滿行李箱。',
                icon: ShoppingBag,
                type: 'shopping',
                map: 'Niki no Kashi'
            },
            {
                time: '12:30',
                title: '京成上野站 Skyliner',
                desc: '搭乘特急 Skyliner 直達第一航廈，車程僅 41 分鐘。',
                icon: Train,
                type: 'transit',
                map: 'Keisei Ueno Station'
            },
            {
                time: '15:40',
                title: '成田機場搭機 JX803',
                desc: '辦理行李托運，搭乘星宇航空返回台北。期待下一次夏日旅行！',
                icon: Plane,
                type: 'transit'
            }
        ],
        notes: []
    }
];
