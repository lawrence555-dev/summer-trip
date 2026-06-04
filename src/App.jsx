import React, { useState } from 'react';
import { 
    Calendar, 
    MapPin, 
    Info, 
    Aperture, 
    ChevronDown, 
    ChevronUp, 
    ArrowLeft, 
    Sparkles, 
    Clock, 
    Utensils, 
    Bed, 
    Car, 
    Hotel, 
    Home, 
    Plane, 
    Camera,
    TrendingUp
} from 'lucide-react';

// 導入行程資料庫
import { hokkaidoItinerary } from './data/hokkaidoItinerary';
import { tokyoItinerary } from './data/tokyoItinerary';

// 導入組件
import CameraGuide from './components/CameraGuide';
import DashboardStatus from './components/DashboardStatus';
import ItineraryCard from './components/ItineraryCard';
import { ComparisonRadar, BloomLine } from './components/JournalCharts';

function App() {
    const [view, setView] = useState('dashboard'); // 'dashboard' | 'hokkaido' | 'tokyo'
    const [selectedHokkaidoDay, setSelectedHokkaidoDay] = useState(1);
    const [selectedTokyoDay, setSelectedTokyoDay] = useState(1);
    const [showOPPOGuide, setShowOPPOGuide] = useState(false);
    const [showCharts, setShowCharts] = useState(false);

    // 取得當前行程資料
    const currentTokyoDayData = tokyoItinerary.find(d => d.day === selectedTokyoDay);
    const currentHokkaidoDayData = hokkaidoItinerary.find(d => d.day === selectedHokkaidoDay);

    // --- 1. 主控制面板 (Master Dashboard) ---
    if (view === 'dashboard') {
        return (
            <div className="min-h-screen bg-stone-50 flex justify-center selection:bg-rose-100 p-4">
                <div className="w-full max-w-md bg-white min-h-screen shadow-xl rounded-3xl overflow-hidden border border-stone-100 relative pb-10">
                    
                    {/* Header */}
                    <header className="pt-10 pb-6 px-6 bg-gradient-to-b from-rose-50/50 to-white">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-5 h-5 text-rose-500" />
                            <span className="text-[10px] font-black tracking-[0.2em] text-rose-500 uppercase">Summer Expedition</span>
                        </div>
                        <h1 className="text-3xl font-serif font-black text-stone-850 tracking-tight leading-none">
                            Summer Trip <span className="text-rose-500 font-light text-2xl font-sans">2026</span>
                        </h1>
                        <p className="text-xs text-stone-400 mt-2 tracking-widest pl-1 border-l-2 border-rose-300">
                            日本盛夏二重奏：北海道自駕 ➜ 霓虹東京
                        </p>
                    </header>

                    {/* 即時匯率與天氣資訊 */}
                    <div className="px-6 mb-6">
                        <DashboardStatus mode="dashboard" />
                    </div>

                    {/* 聯程航班小卡 (航班銜接) */}
                    <section className="mx-6 mb-6 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                        <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                            <Plane className="w-3.5 h-3.5" /> 聯程航班資訊 (Flight Schedule)
                        </h3>
                        <div className="space-y-2.5 text-xs text-stone-600">
                            <div className="flex justify-between items-center border-b border-stone-200/50 pb-1.5">
                                <span className="font-medium text-stone-500">去程 | 07/07</span>
                                <span className="font-bold text-stone-800">星宇 JX850 (TPE ➜ CTS)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-stone-200/50 pb-1.5">
                                <span className="font-medium text-stone-500">轉移 | 07/13</span>
                                <span className="font-bold text-rose-500">日航 JL508 (CTS ➜ HND)</span>
                            </div>
                            <div className="flex justify-between items-center pb-0.5">
                                <span className="font-medium text-stone-500">回程 | 07/18</span>
                                <span className="font-bold text-stone-800">星宇 JX803 (NRT ➜ TPE)</span>
                            </div>
                        </div>
                    </section>

                    {/* 行程分區入口 */}
                    <section className="px-6 space-y-4">
                        <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1">
                            選擇目的地行程 (Select Destination)
                        </h3>

                        {/* 北海道卡片 */}
                        <div 
                            onClick={() => setView('hokkaido')}
                            className="bg-purple-50/50 border border-purple-100 rounded-3xl p-5 cursor-pointer relative overflow-hidden group hover:border-purple-200 transition-all shadow-sm"
                        >
                            <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 bg-purple-200/20 rounded-full blur-xl"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[9px] font-black bg-purple-100 text-purple-600 px-2 py-0.5 rounded uppercase tracking-wider">
                                    Part 01
                                </span>
                                <span className="text-[10px] text-stone-400 font-mono">07.07 - 07.13</span>
                            </div>
                            <h2 className="text-xl font-bold text-purple-950 font-serif leading-tight">
                                北海道自駕賞花手帖
                            </h2>
                            <p className="text-xs text-stone-500 mt-2">
                                薰衣草花田、昭和新山熊牧場、洞爺湖煙火、親子自駕溫泉假期。
                            </p>
                            <div className="mt-4 flex items-center gap-1.5 text-xs text-purple-700 font-bold">
                                <span>進入行程 (7 天)</span>
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </div>
                        </div>

                        {/* 東京卡片 */}
                        <div 
                            onClick={() => setView('tokyo')}
                            className="bg-rose-50/50 border border-rose-100 rounded-3xl p-5 cursor-pointer relative overflow-hidden group hover:border-rose-200 transition-all shadow-sm"
                        >
                            <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 bg-rose-200/20 rounded-full blur-xl"></div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[9px] font-black bg-rose-100 text-rose-600 px-2 py-0.5 rounded uppercase tracking-wider">
                                    Part 02
                                </span>
                                <span className="text-[10px] text-stone-400 font-mono">07.13 - 07.18</span>
                            </div>
                            <h2 className="text-xl font-bold text-rose-950 font-serif leading-tight">
                                東京都市攝影日記
                            </h2>
                            <p className="text-xs text-stone-500 mt-2">
                                虎之門艾迪遜、哈拉卡多、豐洲 KidZania 職業體驗、皇居晨跑。
                            </p>
                            <div className="mt-4 flex items-center gap-1.5 text-xs text-rose-700 font-bold">
                                <span>進入行程 (6 天)</span>
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="mt-12 text-center text-[10px] text-stone-400 font-medium">
                        <p>主力影像裝備：OPPO Find 9 Ultra | 哈蘇大師色彩</p>
                    </footer>

                </div>
            </div>
        );
    }

    // --- 2. 北海道手機版 UI (Hokkaido View - 已統一為與東京相同風格) ---
    if (view === 'hokkaido') {
        return (
            <div className="min-h-screen flex justify-center selection:bg-purple-100 p-4 tokyo-theme">
                <div className="w-full max-w-md bg-white min-h-screen shadow-xl rounded-3xl overflow-hidden border border-zinc-100 relative pb-28">
                    
                    {/* 導覽列 */}
                    <nav className="p-5 flex justify-between items-center border-b border-zinc-100">
                        <button 
                            onClick={() => setView('dashboard')}
                            className="flex items-center gap-1 text-zinc-500 font-bold text-xs"
                        >
                            <ArrowLeft size={16} />
                            <span>回首頁</span>
                        </button>
                        <h1 className="text-sm font-bold tracking-[0.2em] font-serif text-zinc-800 uppercase">HOKKAIDO '26</h1>
                    </nav>

                    {/* 天氣與匯率 */}
                    <div className="px-5 mt-4">
                        <DashboardStatus mode="hokkaido" />
                    </div>

                    {/* Header */}
                    <header className="pt-6 pb-4 px-6">
                        <div className="flex items-baseline justify-between mb-2">
                            <h2 className="text-2xl font-serif font-bold text-zinc-950">
                                北海道 <span className="text-zinc-300 font-light text-lg">2026</span>
                            </h2>
                            <span className="px-2 py-0.5 bg-zinc-50 rounded border border-zinc-100">
                                <span className="text-[8px] font-bold tracking-[0.1em] text-zinc-400 block">HASSELBLAD</span>
                            </span>
                        </div>
                        <p className="text-[10px] text-zinc-400 tracking-widest uppercase font-bold pl-1 border-l-2 border-purple-400">
                            A Summer Self-Drive Journey
                        </p>
                    </header>

                    {/* OPPO Find 9 Ultra 哈蘇大師指南頁籤 (可摺疊) */}
                    <div className="mx-5 mb-5 shadow-sm">
                        <button
                            onClick={() => setShowOPPOGuide(!showOPPOGuide)}
                            className="w-full flex items-center justify-between p-3 bg-zinc-900 text-white rounded-t-xl"
                        >
                            <div className="flex items-center gap-2">
                                <Aperture size={15} className="text-purple-400 animate-spin-slow" />
                                <span className="text-[10px] font-bold tracking-widest uppercase">OPPO Find 9 Ultra 攝影指南</span>
                            </div>
                            {showOPPOGuide ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                        {showOPPOGuide && <CameraGuide />}
                    </div>

                    {/* 行程天數選單 (極簡設計) */}
                    <div className="sticky top-0 z-45 bg-white/95 backdrop-blur-md border-y border-zinc-100 py-1.5 px-5 overflow-x-auto no-scrollbar scroll-smooth mb-6">
                        <div className="flex gap-4">
                            {hokkaidoItinerary.map((day) => (
                                <button
                                    key={day.day}
                                    onClick={() => setSelectedHokkaidoDay(day.day)}
                                    className={`
                                        flex flex-col items-center justify-center min-w-[42px] py-1 px-1 rounded-xl transition-all duration-300 shrink-0 select-none
                                        ${selectedHokkaidoDay === day.day ? 'text-zinc-950 font-bold scale-105' : 'text-zinc-300 hover:text-zinc-500'}
                                    `}
                                >
                                    <span className={`text-[7px] font-black uppercase tracking-widest ${selectedHokkaidoDay === day.day ? 'opacity-100 text-purple-600' : 'opacity-0'}`}>DAY</span>
                                    <span className="text-xl font-serif leading-none mt-0.5">{day.day}</span>
                                    {selectedHokkaidoDay === day.day && <div className="w-1 h-1 bg-purple-600 rounded-full mt-1" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 當天行程內容 */}
                    <main className="px-5 space-y-6">
                        <div className="mb-6 pl-1">
                            <span className="text-[9px] font-bold text-zinc-400 tracking-wider uppercase mb-1 block">{currentHokkaidoDayData?.date}</span>
                            <h3 className="text-lg font-bold text-zinc-800 mb-2 leading-snug">{currentHokkaidoDayData?.title}</h3>
                            <p className="text-xs text-zinc-500 leading-relaxed font-light border-l border-zinc-200 pl-3">
                                {currentHokkaidoDayData?.summary}
                            </p>
                        </div>

                        {/* 照片牆橫向滑動 (北海道特色) */}
                        {currentHokkaidoDayData?.photos && (
                            <div className="flex gap-4 overflow-x-auto pb-4 snap-x pl-1 no-scrollbar -mx-2 mb-2">
                                {currentHokkaidoDayData.photos.map((photo, pIdx) => (
                                    <div key={pIdx} className="snap-center shrink-0 w-36 bg-white p-2 shadow-sm border border-zinc-100 rounded-xl">
                                        <div className="w-full h-24 bg-zinc-50 overflow-hidden mb-1.5 rounded-lg">
                                            <img src={photo} alt="travel memory" className="w-full h-full object-cover" loading="lazy" />
                                        </div>
                                        <div className="text-[8px] text-center font-sans text-zinc-400 italic">Memory Snapshot #{pIdx + 1}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* 時間軸活動清單 */}
                        <div className="space-y-4">
                            {currentHokkaidoDayData?.activities.map((activity, index) => (
                                <ItineraryCard
                                    key={index}
                                    activity={activity}
                                    isLast={index === currentHokkaidoDayData.activities.length - 1}
                                />
                            ))}
                        </div>

                        {/* 行程備忘與用車貼士 */}
                        {currentHokkaidoDayData?.notes && currentHokkaidoDayData.notes.length > 0 && (
                            <div className="mt-10 border-t border-zinc-100 pt-6">
                                <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                                    <Info size={12} className="text-zinc-400" /> 行程備忘與用車建議
                                </h4>
                                <div className="space-y-3">
                                    {currentHokkaidoDayData.notes.map((note, idx) => (
                                        <div key={idx} className="flex gap-3 p-3.5 bg-zinc-50 rounded-xl border border-zinc-100">
                                            <div className="text-zinc-400 shrink-0 mt-0.5">
                                                <Info size={14} />
                                            </div>
                                            <p className="text-xs text-zinc-600 leading-relaxed font-medium">{note.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 北海道夏日花況與平衡分析 (可摺疊) */}
                        <div className="mt-6 border-t border-zinc-100 pt-6">
                            <button
                                onClick={() => setShowCharts(!showCharts)}
                                className="w-full flex items-center justify-between p-3 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 rounded-xl border border-zinc-200 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <TrendingUp size={15} className="text-purple-600" />
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-650">北海道花況與平衡分析</span>
                                </div>
                                {showCharts ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                            
                            {showCharts && (
                                <div className="bg-white border-x border-b border-zinc-200 rounded-b-xl p-5 space-y-8 animate-fadeIn">
                                    <div className="flex flex-col items-center">
                                        <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mb-4 text-center">行程均衡雷達圖 (Itinerary Radar)</p>
                                        <div className="w-40 h-40 relative">
                                            <ComparisonRadar />
                                        </div>
                                        <div className="grid grid-cols-5 gap-2 mt-4 w-full bg-zinc-50 rounded-xl p-2.5 border border-zinc-100 text-center">
                                            {['景點', '餘裕', '購物', '效率', '預算'].map((label, idx) => (
                                                <div key={label}>
                                                    <p className="text-[10px] font-black text-zinc-700 leading-none">
                                                        {[95, 65, 60, 95, 85][idx]}%
                                                    </p>
                                                    <p className="text-[8px] text-zinc-400 mt-1 font-bold">{label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-[1px] bg-zinc-100 w-full"></div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mb-4 text-center">薰衣草花期預測線 (Lavender Bloom)</p>
                                        <div className="w-full max-w-[220px] h-28">
                                            <BloomLine />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </main>

                    {/* 底部導覽欄 (浮動) */}
                    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[416px] h-16 bg-white/80 backdrop-blur-lg border border-zinc-200/30 rounded-2xl shadow-lg z-[100] flex justify-around items-center">
                        <button 
                            onClick={() => setView('dashboard')}
                            className="flex flex-col items-center gap-0.5 text-zinc-400 active:text-purple-600"
                        >
                            <Home size={20} />
                            <span className="text-[8px] font-bold">首頁</span>
                        </button>
                        <button 
                            onClick={() => {
                                setSelectedHokkaidoDay(1);
                            }}
                            className="flex flex-col items-center gap-0.5 text-purple-600"
                        >
                            <Car size={20} />
                            <span className="text-[8px] font-bold">北海道</span>
                        </button>
                        <button 
                            onClick={() => setView('tokyo')}
                            className="flex flex-col items-center gap-0.5 text-zinc-400 active:text-rose-600"
                        >
                            <Camera size={20} />
                            <span className="text-[8px] font-bold">東京</span>
                        </button>
                    </div>

                </div>
            </div>
        );
    }

    // --- 3. 東京手機版 UI (Tokyo Mobile View) ---
    if (view === 'tokyo') {
        return (
            <div className="min-h-screen flex justify-center selection:bg-rose-100 p-4 tokyo-theme">
                <div className="w-full max-w-md bg-white min-h-screen shadow-xl rounded-3xl overflow-hidden border border-zinc-100 relative pb-28">
                    
                    {/* 導覽列 */}
                    <nav className="p-5 flex justify-between items-center border-b border-zinc-100">
                        <button 
                            onClick={() => setView('dashboard')}
                            className="flex items-center gap-1 text-zinc-500 font-bold text-xs"
                        >
                            <ArrowLeft size={16} />
                            <span>回首頁</span>
                        </button>
                        <h1 className="text-sm font-bold tracking-[0.2em] font-serif text-zinc-800 uppercase">TOKYO '26</h1>
                    </nav>

                    {/* 天氣與匯率 */}
                    <div className="px-5 mt-4">
                        <DashboardStatus mode="tokyo" />
                    </div>

                    {/* Header */}
                    <header className="pt-6 pb-4 px-6">
                        <div className="flex items-baseline justify-between mb-2">
                            <h2 className="text-2xl font-serif font-bold text-zinc-950">
                                東京 <span className="text-zinc-300 font-light text-lg">2026</span>
                            </h2>
                            <span className="px-2 py-0.5 bg-zinc-50 rounded border border-zinc-100">
                                <span className="text-[8px] font-bold tracking-[0.1em] text-zinc-400 block">HASSELBLAD</span>
                            </span>
                        </div>
                        <p className="text-[10px] text-zinc-400 tracking-widest uppercase font-bold pl-1 border-l-2 border-rose-400">
                            A Family Photography Journey
                        </p>
                    </header>

                    {/* OPPO Find 9 Ultra 哈蘇大師指南頁籤 (可摺疊) */}
                    <div className="mx-5 mb-5 shadow-sm">
                        <button
                            onClick={() => setShowOPPOGuide(!showOPPOGuide)}
                            className="w-full flex items-center justify-between p-3 bg-zinc-900 text-white rounded-t-xl"
                        >
                            <div className="flex items-center gap-2">
                                <Aperture size={15} className="text-rose-500 animate-spin-slow" />
                                <span className="text-[10px] font-bold tracking-widest uppercase">OPPO Find 9 Ultra 攝影指南</span>
                            </div>
                            {showOPPOGuide ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                        {showOPPOGuide && <CameraGuide />}
                    </div>

                    {/* 行程天數選單 (極簡設計) */}
                    <div className="sticky top-0 z-45 bg-white/95 backdrop-blur-md border-y border-zinc-100 py-1.5 px-5 overflow-x-auto no-scrollbar scroll-smooth mb-6">
                        <div className="flex gap-4">
                            {tokyoItinerary.map((day) => (
                                <button
                                    key={day.day}
                                    onClick={() => setSelectedTokyoDay(day.day)}
                                    className={`
                                        flex flex-col items-center justify-center min-w-[42px] py-1 px-1 rounded-xl transition-all duration-300 shrink-0 select-none
                                        ${selectedTokyoDay === day.day ? 'text-zinc-950 font-bold scale-105' : 'text-zinc-300 hover:text-zinc-500'}
                                    `}
                                >
                                    <span className={`text-[7px] font-black uppercase tracking-widest ${selectedTokyoDay === day.day ? 'opacity-100 text-rose-500' : 'opacity-0'}`}>DAY</span>
                                    <span className="text-xl font-serif leading-none mt-0.5">{day.day}</span>
                                    {selectedTokyoDay === day.day && <div className="w-1 h-1 bg-rose-500 rounded-full mt-1" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 當天行程內容 */}
                    <main className="px-5 space-y-6">
                        <div className="mb-8 pl-1">
                            <span className="text-[9px] font-bold text-zinc-400 tracking-wider uppercase mb-1 block">{currentTokyoDayData?.date}</span>
                            <h3 className="text-lg font-bold text-zinc-800 mb-2 leading-snug">{currentTokyoDayData?.title}</h3>
                            <p className="text-xs text-zinc-500 leading-relaxed font-light border-l border-zinc-200 pl-3">
                                {currentTokyoDayData?.summary}
                            </p>
                        </div>

                        {/* 時間軸卡片清單 */}
                        <div className="space-y-4">
                            {currentTokyoDayData?.activities.map((activity, index) => (
                                <ItineraryCard
                                    key={index}
                                    activity={activity}
                                    isLast={index === currentTokyoDayData.activities.length - 1}
                                />
                            ))}
                        </div>

                        {/* 行程註記與建議 */}
                        {currentTokyoDayData?.notes && currentTokyoDayData.notes.length > 0 && (
                            <div className="mt-10 border-t border-zinc-100 pt-6">
                                <h4 className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                                    <Info size={12} className="text-zinc-400" /> 行程備忘與建議
                                </h4>
                                <div className="space-y-3">
                                    {currentTokyoDayData.notes.map((note, idx) => (
                                        <div key={idx} className="flex gap-3 p-3.5 bg-zinc-50 rounded-xl border border-zinc-100">
                                            <div className="text-zinc-400 shrink-0 mt-0.5">
                                                <Info size={14} />
                                            </div>
                                            <p className="text-xs text-zinc-600 leading-relaxed font-medium">{note.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </main>

                    {/* 底部導覽欄 (浮動) */}
                    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[416px] h-16 bg-white/80 backdrop-blur-lg border border-zinc-200/30 rounded-2xl shadow-lg z-[100] flex justify-around items-center">
                        <button 
                            onClick={() => setView('dashboard')}
                            className="flex flex-col items-center gap-0.5 text-zinc-400 active:text-rose-600"
                        >
                            <Home size={20} />
                            <span className="text-[8px] font-bold">首頁</span>
                        </button>
                        <button 
                            onClick={() => setView('hokkaido')}
                            className="flex flex-col items-center gap-0.5 text-zinc-400 active:text-purple-600"
                        >
                            <Car size={20} />
                            <span className="text-[8px] font-bold">北海道</span>
                        </button>
                        <button 
                            onClick={() => {
                                setSelectedTokyoDay(1);
                            }}
                            className="flex flex-col items-center gap-0.5 text-rose-600"
                        >
                            <Camera size={20} />
                            <span className="text-[8px] font-bold">東京</span>
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
