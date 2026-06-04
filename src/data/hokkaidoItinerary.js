import { Plane, ShoppingBag, Camera, Utensils, Hotel, MapPin, Palmtree, Info, Car, Sparkles, Train } from 'lucide-react';

export const hokkaidoItinerary = [
  {
    day: 1,
    date: '7/7 (週二)',
    title: '抵達札幌與薄野美食購物夜',
    summary: '飛抵北海道，OTS自駕取車後直奔札幌市區，享受帝王蟹與狸小路逛街。',
    activities: [
      {
        time: '15:10',
        title: '抵達新千歲機場 (CTS)',
        desc: '搭乘星宇航空 JX850 班機抵達，辦理入境手續。',
        icon: Plane,
        type: 'transit',
        map: 'New Chitose Airport'
      },
      {
        time: '17:00',
        title: 'OTS 千歲營業所領車',
        desc: '完成租車手續（預約 7 人座 Noah/Voxy），加購 HEP 高速公路通行證。',
        icon: Car,
        type: 'transit',
        map: 'OTS Rent-a-car Chitose'
      },
      {
        time: '18:30',
        title: '札幌萬怡酒店 Check-in',
        desc: '辦理入住，將行李放妥並停好車輛。',
        icon: Hotel,
        type: 'stay',
        map: 'Courtyard by Marriott Sapporo'
      },
      {
        time: '19:00',
        title: '薄野帝王蟹晚餐',
        desc: '享用知名螃蟹料理。推薦預約「冰雪之門」或「螃蟹家」。',
        icon: Utensils,
        type: 'dining',
        highlight: true,
        map: 'Hyousetsu no Mon',
        camera: {
          mode: '3x 潛望長焦特寫',
          desc: '烤蟹腳與蟹膏特寫',
          settings: '避開餐桌頂光陰影，利用 3x 自然微距拍出蟹肉纖維的飽滿感'
        }
      },
      {
        time: '20:30',
        title: '狸小路商店街逛街',
        desc: '逛狸小路 1~7 段，補齊藥妝，逛驚安殿堂唐吉訶德。',
        icon: ShoppingBag,
        type: 'shopping',
        map: 'Tanukikoji Shopping Street',
        camera: {
          mode: 'XPAN 寬幅模式 (黑白)',
          desc: '狸小路縱深街道與繽紛招牌',
          settings: '使用 XPAN 黑白影調，強調繁華拱廊街的光影張力'
        }
      }
    ],
    notes: [
      {
        icon: Info,
        text: '3 大 1 小加上 4 件大行李與推車，務必預約 7 人座 (如 Noah 或 Voxy) 才放得下。'
      },
      {
        icon: Info,
        text: '領車時務必加購 HEP (Hokkaido Expressway Pass)，全包高速公路路費最省錢。'
      }
    ]
  },
  {
    day: 2,
    date: '7/8 (週三)',
    title: '小樽運河漫步與三井 Outlet 大採購',
    summary: '漫步浪漫小樽運河，享用三角市場活蟹，下午在三井 Outlet Park 盡情購物。',
    activities: [
      {
        time: '09:30',
        title: '自駕前往小樽',
        desc: '自札幌市區開車前往小樽（車程約 45 分鐘）。',
        icon: Car,
        type: 'transit',
        map: 'Otaru Canal'
      },
      {
        time: '10:30',
        title: '小樽三角市場午餐',
        desc: '直奔市場享用現煮鱈場蟹、新鮮海膽與干貝海鮮丼。',
        icon: Utensils,
        type: 'dining',
        highlight: true,
        map: 'Sankaku Market',
        camera: {
          mode: '3x 潛望鏡特寫 (哈蘇標準色彩)',
          desc: '現切海膽丼與海鮮特寫',
          settings: 'EV +0.3，讓新鮮海鮮色澤晶瑩透亮'
        }
      },
      {
        time: '13:00',
        title: '小樽運河與音樂盒堂漫步',
        desc: '散步漫遊運河倉庫群，參觀北一硝子館與音樂盒堂。',
        icon: MapPin,
        type: 'activity',
        map: 'Otaru Music Box Museum',
        camera: {
          mode: 'XPAN 寬幅電影模式 (經典彩色)',
          desc: '小樽運河紅磚倉庫與水道全景',
          settings: '利用 65:24 電影寬比例，拍出運河古樸水路的寬廣意境'
        }
      },
      {
        time: '15:00',
        title: '出發前往北廣島',
        desc: '離開小樽，自駕前往三井 Outlet Park 札幌北廣島（約 50 分鐘）。',
        icon: Car,
        type: 'transit',
        map: 'MITSUI OUTLET PARK SAPPORO KITAHIROSHIMA'
      },
      {
        time: '16:00',
        title: '三井 Outlet 購物',
        desc: '在大型室內 Outlet 商場採購國際名牌與運動品牌（營業至 20:00）。',
        icon: ShoppingBag,
        type: 'shopping',
        map: 'MITSUI OUTLET PARK SAPPORO KITAHIROSHIMA'
      }
    ],
    notes: []
  },
  {
    day: 3,
    date: '7/9 (週四)',
    title: '場外市場美食 ➜ 旭山動物園親子行',
    summary: '早晨品嚐札幌場外市場炭烤海鮮，中午開車前往旭川，參觀北極熊與企鵝。',
    activities: [
      {
        time: '08:30',
        title: '退房與出發',
        desc: '退房後開車前往札幌場外市場。',
        icon: Hotel,
        type: 'transit',
        map: 'Sapporo Curb Market'
      },
      {
        time: '09:00',
        title: '札幌場外市場早餐',
        desc: '享用炭烤大干貝、現烤帝王蟹腳與香甜哈密瓜。',
        icon: Utensils,
        type: 'dining',
        map: 'Sapporo Curb Market',
        camera: {
          mode: '哈蘇大師模式 (1x)',
          desc: '炭烤海鮮攤位與哈密瓜切片',
          settings: '大師模式 HNCS 自然色彩，黃綠色澤非常飽滿逼真'
        }
      },
      {
        time: '11:00',
        title: '自駕前往旭川',
        desc: '開往旭川市區，沿途風景優美（約 2 小時）。',
        icon: Car,
        type: 'transit',
        map: 'Asahiyama Zoo'
      },
      {
        time: '13:00',
        title: '旭山動物園',
        desc: '親子最愛！近距離觀看北極熊跳水、企鵝漫步與海豹餵食秀。',
        icon: Palmtree,
        type: 'activity',
        highlight: true,
        map: 'Asahiyama Zoo',
        camera: {
          mode: '6x 潛望超長焦鏡頭',
          desc: '北極熊游泳或企鵝活動特寫',
          settings: '使用 6x 光學長焦。安全距離下拉近對焦，能拍出動物毛髮的細緻紋理，並避開參觀人群'
        }
      },
      {
        time: '17:00',
        title: '旭川 HOTEL AMANEK Check-in',
        desc: '辦理入住，頂樓設有大浴場，可泡湯消除開車疲勞。',
        icon: Hotel,
        type: 'stay',
        map: 'HOTEL AMANEK Asahikawa'
      }
    ],
    notes: [
      {
        icon: Info,
        text: '札幌到旭川路程約 2 小時。建議在高速公路休息站（如砂川服務區）稍作停留，品嚐好喝的北海道岩瀨牧場鮮乳。'
      }
    ]
  },
  {
    day: 4,
    date: '7/10 (週五)',
    title: '美瑛與富良野：盛夏紫色花海最高峰',
    summary: '搭拖拉機看四季彩之丘彩虹花田，富田農場賞薰衣草，傍晚造訪夢幻精靈露台。',
    activities: [
      {
        time: '09:00',
        title: '美瑛 四季彩之丘',
        desc: '欣賞巨大的七彩花毯拼布，搭乘拖拉機巡禮並餵食草泥馬。',
        icon: Palmtree,
        type: 'activity',
        map: 'Shikisai-no-oka',
        camera: {
          mode: 'XPAN 寬幅電影模式 (經典彩色)',
          desc: '一望無際的彩虹拼布花田',
          settings: 'XPAN 寬畫幅。將相機水平拿穩，把不同色塊的花田拍入同一個畫面，營造震撼的空間感'
        }
      },
      {
        time: '11:30',
        title: '富田哈密瓜工房',
        desc: '享用富良野盛夏現切哈密瓜、哈密瓜冰淇淋與哈密瓜麵包。',
        icon: Utensils,
        type: 'dining',
        map: 'Tomita Melon House'
      },
      {
        time: '13:30',
        title: '富良野 富田農場',
        desc: '漫步紫色薰衣草花海。全日本最代表性的花卉風光。',
        icon: Palmtree,
        type: 'activity',
        highlight: true,
        map: 'Farm Tomita',
        camera: {
          mode: '哈蘇人像模式 (85mm / 3x)',
          desc: '女兒在紫色花海中的人像照',
          settings: '開啟人像模式，模擬哈蘇大光圈背景虛化，焦距拉至 85mm，拍出空氣透亮感'
        }
      },
      {
        time: '18:00',
        title: '新富良野王子飯店 精靈露台',
        desc: '森林中的手工藝小木屋群開始點燈，呈現北國夢幻童話氛圍。',
        icon: Sparkles,
        type: 'activity',
        map: 'Ningle Terrace',
        camera: {
          mode: '哈蘇大師專業模式 (1x)',
          desc: '小木屋點燈與森林微光',
          settings: '設定 ISO 400，快門 1/15s，手動微調 EV -0.3，保留暮色森林的深邃暗部細節'
        }
      },
      {
        time: '19:30',
        title: '諾佐飯店 (Nozo Hotel) Check-in',
        desc: '登記入住，享受新穎簡約的富良野設計飯店。',
        icon: Hotel,
        type: 'stay',
        map: 'Nozo Hotel'
      }
    ],
    notes: []
  },
  {
    day: 5,
    date: '7/11 (週六)',
    title: '登別地獄谷奇觀與溫泉水樂園放電',
    summary: '開往登別溫泉，親臨震撼的地獄谷地熱奇觀，入住格蘭大飯店暢玩水上設施。',
    activities: [
      {
        time: '10:30',
        title: '自駕前往登別',
        desc: '富良野出發開往登別溫泉區（約 2.5 小時）。',
        icon: Car,
        type: 'transit',
        map: 'Noboribetsu Jigokudani'
      },
      {
        time: '14:00',
        title: '登別地獄谷與大湯沼足湯',
        desc: '沿步道觀看硫磺蒸氣與沸騰泉水，在森林大湯沼川體驗天然足浴。',
        icon: MapPin,
        type: 'activity',
        map: 'Noboribetsu Jigokudani',
        camera: {
          mode: '哈蘇大師模式 (1x)',
          desc: '火山地貌荒涼感與白色溫泉硫磺煙霧',
          settings: '哈蘇大師模式，略低 EV -0.3，增強黃灰色岩石的對比度，煙霧細節更立體'
        }
      },
      {
        time: '16:00',
        title: '登別格蘭大飯店 Check-in',
        desc: '入住知名登別溫泉大飯店，準備晚餐前泡湯。',
        icon: Hotel,
        type: 'stay',
        map: 'Noboribetsu Grand Hotel'
      },
      {
        time: '18:00',
        title: '溫泉水樂園水上放電',
        desc: '在室內大型水樂園滑水道玩耍，適合帶小孩徹底放電。',
        icon: Sparkles,
        type: 'activity',
        highlight: true,
        map: 'Noboribetsu Grand Hotel'
      }
    ],
    notes: []
  },
  {
    day: 6,
    date: '7/12 (週日)',
    title: '洞爺湖熊牧場 ➜ 頂級度假村煙火之夜',
    summary: '與昭和新山棕熊互動，搭乘環湖汽船，入住光之歌度假村並觀看房間窗外的煙火。',
    activities: [
      {
        time: '09:30',
        title: '自駕前往洞爺湖',
        desc: '退房後自駕前往洞爺湖（車程約 1 小時）。',
        icon: Car,
        type: 'transit',
        map: 'Lake Toya'
      },
      {
        time: '11:00',
        title: '昭和新山熊牧場 & 洞爺湖汽船',
        desc: '購買蘋果餵食可愛大棕熊，隨後搭乘中世紀古堡造型的環湖汽船遊湖。',
        icon: Palmtree,
        type: 'activity',
        map: 'Showa Shinzan Bear Ranch',
        camera: {
          mode: '3x 潛望鏡長焦',
          desc: '大棕熊站立討食的特寫',
          settings: '利用 3x 鏡頭拉近，快速按下快門，拍下熊接蘋果的生動瞬間'
        }
      },
      {
        time: '15:00',
        title: '入住洞爺湖鶴雅度假村光之歌',
        desc: '登記入住奢華度假村，享受露天風呂與北國法式料理晚餐。',
        icon: Hotel,
        type: 'stay',
        highlight: true,
        map: 'Lake Toya Tsuruga Resort Hikarinouta'
      },
      {
        time: '20:45',
        title: '觀賞洞爺湖煙火大會',
        desc: '躺在房間沙發或露台，近距離觀賞湖面煙火在眼前美麗綻放。',
        icon: Camera,
        type: 'activity',
        map: 'Lake Toya Tsuruga Resort Hikarinouta',
        camera: {
          mode: '哈蘇大師專業模式 (3x/6x)',
          desc: '湖面上綻放的煙火軌跡',
          settings: 'ISO 固定 100，快門手動設為 1.5s~2s，將手機固定於窗台，拍出流暢火光線條'
        }
      }
    ],
    notes: []
  },
  {
    day: 7,
    date: '7/13 (週一)',
    title: '新千歲空港巡禮 ➜ 搭機飛往東京',
    summary: 'OTS 還車後抵達新千歲機場國內線，搭機 JL508 飛往東京羽田開啟下半場行程。',
    activities: [
      {
        time: '08:30',
        title: '出發前往千歲市區',
        desc: '退房後出發，提早前往千歲以預留買機場玉米麵包的時間。',
        icon: Car,
        type: 'transit',
        map: 'OTS Rent-a-car Chitose'
      },
      {
        time: '09:15',
        title: 'OTS 附近加油站加滿油',
        desc: '遵守日本租車還車規定，在還車前至指定加油站將油箱加滿。',
        icon: Car,
        type: 'transit',
        map: 'OTS Rent-a-car Chitose'
      },
      {
        time: '09:30',
        title: 'OTS 還車手續',
        desc: '抵達 OTS 千歲營業所還車，確認無損壞與 HEP 結算。',
        icon: Car,
        type: 'transit',
        map: 'OTS Rent-a-car Chitose'
      },
      {
        time: '09:45',
        title: '接駁車前往國內線航廈',
        desc: '搭乘 OTS 免費接駁巴士直達新千歲機場國內線航廈。',
        icon: Train,
        type: 'transit',
        map: 'New Chitose Airport'
      },
      {
        time: '10:15',
        title: '日航國內線報到與行李托運',
        desc: '至 JAL 櫃檯辦理 JL508 國內線報到，隨後可在伴手禮區最後掃貨（美瑛玉米麵包）。',
        icon: ShoppingBag,
        type: 'shopping',
        map: 'New Chitose Airport'
      },
      {
        time: '11:25',
        title: '搭機前往東京羽田 (JL508)',
        desc: '搭乘日本航空 JL508 A350 班機飛往東京。再見，北海道！',
        icon: Plane,
        type: 'transit',
        highlight: true,
        camera: {
          mode: '哈蘇大師模式 (1x)',
          desc: '飛機窗外的北國陸地或雲海',
          settings: '緊貼窗戶避免機內玻璃反光，哈蘇大師模式拍出湛藍高空色調'
        }
      }
    ],
    notes: [
      {
        icon: Info,
        text: '新千歲排隊名店「美瑛之丘玉米麵包」在國內線伴手禮區，建議完成報到後第一時間去排隊。'
      }
    ]
  }
];
