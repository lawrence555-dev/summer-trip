import React, { useState } from 'react';
import { Camera, Sun, Moon, Coffee, Utensils, Info, Film, Aperture } from 'lucide-react';

const OPPO_SETTINGS = [
    {
        id: "p1",
        name: "P1: 哈蘇經典人像 (3x / 85mm)",
        desc: "親子人像 / 街角特寫 / 柔美散景",
        icon: Camera,
        color: "bg-rose-50 text-rose-600 border-rose-200",
        modeName: "哈蘇人像模式",
        lens: "3x 潛望長焦 (等效 85mm)",
        aperture: "模擬 f/2.8 ~ f/4.0",
        ev: "+0.3 到 +0.7",
        wb: "自動 (偏暖調)",
        style: "哈蘇經典影調",
        tips: "最適合拍老婆女兒！哈蘇人像模式會模擬光學散景，將背後雜亂的澀谷街道虛化，EV 微調亮一點讓膚色更白皙。"
    },
    {
        id: "p2",
        name: "P2: XPAN 電影寬幅",
        desc: "美瑛花海 / 東京街景 / 橫向張力",
        icon: Film,
        color: "bg-blue-50 text-blue-600 border-blue-200",
        modeName: "XPAN 模式",
        lens: "1x 主鏡頭 (等效 45mm 裁切)",
        aperture: "固定光圈",
        ev: "-0.3",
        wb: "自動",
        style: "XPAN 經典彩色 / 黑白",
        tips: "經典的 65:24 電影寬幅比例。在美瑛四季彩之丘拍橫向延展的花毯，或在中目黑星巴克拍巨大銅桶，張力拉滿！"
    },
    {
        id: "p3",
        name: "P3: 哈蘇大師風光 (6x 潛望長焦)",
        desc: "遠眺鐵塔 / 煙火特寫 / 壓縮感風光",
        icon: Sun,
        color: "bg-purple-50 text-purple-600 border-purple-200",
        modeName: "哈蘇大師模式 (Master)",
        lens: "6x 超級長焦 (等效 135mm)",
        aperture: "f/2.6 / f/4.3",
        ev: "-0.3 (壓低高光)",
        wb: "5200K (黃昏時分)",
        style: "哈蘇自然色彩 (HNCS)",
        tips: "拍攝豐洲夕陽、洞爺湖煙火時，手動降低 EV 壓暗天空，可以讓晚霞與煙火的細節跟色彩更飽和，哈蘇暗角效果絕佳。"
    },
    {
        id: "p4",
        name: "P4: 長焦微距美食 (3x 長焦)",
        desc: "湯咖哩 / 烤和牛 / HARBS 千層蛋糕",
        icon: Utensils,
        color: "bg-amber-50 text-amber-600 border-amber-200",
        modeName: "普通/大師模式 + 特寫",
        lens: "3x 潛望長焦 (最近對焦 25cm)",
        aperture: "自動",
        ev: "+0.3 (明亮感)",
        wb: "自動",
        style: "鮮豔或大師標準",
        tips: "拍食物千萬別用 1x 廣角貼很近拍，手機陰影會擋住光源。請退後 30 公分，切換到 3x 鏡頭，對焦食物邊緣，景深最自然。"
    }
];

export default function CameraGuide() {
    const [activeTab, setActiveTab] = useState("p1");

    return (
        <div className="bg-zinc-50 border-x border-b border-zinc-200 rounded-b-xl p-4 transition-all duration-300">
            {/* 快速切換頁籤 */}
            <div className="grid grid-cols-4 gap-2 mb-4">
                {OPPO_SETTINGS.map((s) => (
                    <button
                        key={s.id}
                        onClick={(e) => { e.stopPropagation(); setActiveTab(s.id); }}
                        className={`
                            flex flex-col items-center justify-center p-2 rounded-xl border-2 transition-all
                            ${activeTab === s.id ? s.color + " border-current shadow-sm scale-105" : "bg-white border-transparent text-zinc-300 hover:bg-zinc-100"}
                        `}
                    >
                        <s.icon size={20} className="mb-1" strokeWidth={activeTab === s.id ? 2.5 : 2} />
                        <span className="text-[10px] font-bold">{s.id.toUpperCase()}</span>
                    </button>
                ))}
            </div>

            {/* 目前選中卡片的詳細內容 */}
            {OPPO_SETTINGS.map((s) => (
                activeTab === s.id && (
                    <div key={s.id} className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden animate-fadeIn">
                        {/* 卡片標題 */}
                        <div className={`p-4 border-b border-zinc-100 flex justify-between items-center ${s.color.replace('border-', 'border-b-').replace('text-', 'bg-').replace('50', '50/50')}`}>
                            <div>
                                <h2 className="text-zinc-800 font-bold text-sm leading-none">{s.name}</h2>
                                <span className="text-[10px] text-zinc-400 font-medium block mt-1">{s.desc}</span>
                            </div>
                            <div className={`p-2 rounded-full ${s.color}`}>
                                <s.icon size={18} />
                            </div>
                        </div>

                        {/* 規格參數表格 */}
                        <div className="p-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
                            <SpecItem label="使用模式" value={s.modeName} />
                            <SpecItem label="推薦鏡頭" value={s.lens} highlight />
                            <SpecItem label="光圈建議" value={s.aperture} />
                            <SpecItem label="曝光補償" value={s.ev} />
                            <SpecItem label="白平衡" value={s.wb} />
                            <SpecItem label="色彩影調" value={s.style} />
                        </div>

                        {/* 拍攝小撇步 */}
                        <div className="bg-zinc-50/80 p-3 border-t border-zinc-100">
                            <p className="text-xs text-zinc-600 leading-relaxed font-medium flex gap-2">
                                <Info size={14} className="shrink-0 mt-0.5 text-zinc-400" />
                                <span>{s.tips}</span>
                            </p>
                        </div>
                    </div>
                )
            ))}
        </div>
    );
}

function SpecItem({ label, value, highlight }) {
    return (
        <div className="flex justify-between items-baseline border-b border-zinc-50 pb-1">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{label}</span>
            <span className={`
                font-sans font-bold text-[11px]
                ${highlight ? "text-rose-600" : "text-zinc-600"}
            `}>
                {value}
            </span>
        </div>
    );
}
