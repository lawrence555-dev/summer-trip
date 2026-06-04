import React, { useState, useEffect } from 'react';
import { Cloud, DollarSign, Sun, CloudRain, Snowflake } from 'lucide-react';

export default function DashboardStatus({ mode = "dashboard" }) {
    const [weatherTokyo, setWeatherTokyo] = useState(null);
    const [weatherSapporo, setWeatherSapporo] = useState(null);
    const [rateData, setRateData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. 抓取東京天氣
                const tokyoRes = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m,weather_code&timezone=Asia%2FTokyo`
                );
                const tokyoData = await tokyoRes.json();

                // 2. 抓取札幌天氣
                const sapporoRes = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=43.0642&longitude=141.3468&current=temperature_2m,weather_code&timezone=Asia%2FTokyo`
                );
                const sapporoData = await sapporoRes.json();

                // 3. 抓取匯率 (以台幣為基準，獲取 TWD -> JPY 匯率)
                const rateRes = await fetch('https://open.er-api.com/v6/latest/TWD');
                const rateJson = await rateRes.json();

                if (tokyoData && sapporoData && rateJson) {
                    setWeatherTokyo({
                        temp: Math.round(tokyoData.current.temperature_2m),
                        code: tokyoData.current.weather_code
                    });
                    setWeatherSapporo({
                        temp: Math.round(sapporoData.current.temperature_2m),
                        code: sapporoData.current.weather_code
                    });
                    setRateData({
                        jpyPerTwd: rateJson.rates.JPY.toFixed(2), // 1 TWD = 4.85 JPY
                        twdPerJpy: (1 / rateJson.rates.JPY).toFixed(4), // 1 JPY = 0.2062 TWD
                    });
                }
            } catch (error) {
                console.error("無法取得即時天氣與匯率資料:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getWeatherIcon = (code) => {
        if (code <= 3) return <Sun size={16} className="text-amber-500" />;
        if (code >= 71) return <Snowflake size={16} className="text-blue-300" />;
        if (code >= 51) return <CloudRain size={16} className="text-cyan-500" />;
        return <Cloud size={16} className="text-zinc-400" />;
    };

    if (loading) return (
        <div className="flex justify-center items-center py-4">
            <span className="text-xs text-zinc-400 font-medium tracking-widest animate-pulse">即時資訊加載中...</span>
        </div>
    );

    // 北海道模式
    if (mode === "hokkaido") {
        return (
            <div className="grid grid-cols-2 gap-3 px-1">
                <div className="bg-white/60 backdrop-blur-md border border-stone-200/60 rounded-2xl p-3 flex items-center gap-3">
                    <div className="bg-stone-100 p-2 rounded-full">
                        {weatherSapporo ? getWeatherIcon(weatherSapporo.code) : <Cloud size={16} />}
                    </div>
                    <div>
                        <h3 className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">即時氣溫（札幌）</h3>
                        <span className="text-base font-bold text-stone-800 font-mono">{weatherSapporo?.temp}°C</span>
                    </div>
                </div>
                <div className="bg-white/60 backdrop-blur-md border border-stone-200/60 rounded-2xl p-3 flex items-center gap-3">
                    <div className="bg-stone-100 p-2 rounded-full text-stone-500">
                        <DollarSign size={16} />
                    </div>
                    <div>
                        <h3 className="text-[9px] uppercase font-bold text-stone-400 tracking-wider">參考匯率 (TWD ➜ JPY)</h3>
                        <span className="text-xs font-bold text-stone-800 font-mono">1 TWD ≈ {rateData?.jpyPerTwd} JPY</span>
                    </div>
                </div>
            </div>
        );
    }

    // 東京模式
    if (mode === "tokyo") {
        return (
            <div className="grid grid-cols-2 gap-3 px-1">
                <div className="bg-white/60 backdrop-blur-md border border-zinc-200/60 rounded-2xl p-3 flex items-center gap-3">
                    <div className="bg-zinc-50 p-2 rounded-full">
                        {weatherTokyo ? getWeatherIcon(weatherTokyo.code) : <Cloud size={16} />}
                    </div>
                    <div>
                        <h3 className="text-[9px] uppercase font-bold text-zinc-400 tracking-wider">即時氣溫（東京）</h3>
                        <span className="text-base font-bold text-zinc-800 font-mono">{weatherTokyo?.temp}°C</span>
                    </div>
                </div>
                <div className="bg-white/60 backdrop-blur-md border border-zinc-200/60 rounded-2xl p-3 flex items-center gap-3">
                    <div className="bg-zinc-50 p-2 rounded-full text-zinc-500">
                        <DollarSign size={16} />
                    </div>
                    <div>
                        <h3 className="text-[9px] uppercase font-bold text-zinc-400 tracking-wider">參考匯率 (JPY ➜ TWD)</h3>
                        <span className="text-xs font-bold text-zinc-800 font-mono">1 JPY ≈ NT$ {rateData?.twdPerJpy}</span>
                    </div>
                </div>
            </div>
        );
    }

    // 主儀表板模式 (顯示全部)
    return (
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                {/* 札幌天氣 */}
                <div className="bg-white/40 border border-white/60 rounded-2xl p-3 flex items-center gap-3">
                    <div className="bg-white/80 p-2 rounded-full shadow-sm">
                        {weatherSapporo ? getWeatherIcon(weatherSapporo.code) : <Cloud size={16} />}
                    </div>
                    <div>
                        <h3 className="text-[8px] uppercase font-black text-zinc-400 tracking-wider">札幌氣溫</h3>
                        <span className="text-sm font-bold text-zinc-700 font-mono">{weatherSapporo?.temp}°C</span>
                    </div>
                </div>
                {/* 東京天氣 */}
                <div className="bg-white/40 border border-white/60 rounded-2xl p-3 flex items-center gap-3">
                    <div className="bg-white/80 p-2 rounded-full shadow-sm">
                        {weatherTokyo ? getWeatherIcon(weatherTokyo.code) : <Cloud size={16} />}
                    </div>
                    <div>
                        <h3 className="text-[8px] uppercase font-black text-zinc-400 tracking-wider">東京氣溫</h3>
                        <span className="text-sm font-bold text-zinc-700 font-mono">{weatherTokyo?.temp}°C</span>
                    </div>
                </div>
            </div>

            {/* 匯率大工具 */}
            <div className="bg-white/50 border border-white/70 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 opacity-5">
                    <DollarSign size={50} />
                </div>
                <h3 className="text-[9px] uppercase font-black text-zinc-400 tracking-wider mb-2">日幣/台幣即時換算</h3>
                <div className="flex justify-between items-center text-xs">
                    <div className="text-left">
                        <span className="text-zinc-500 font-medium">1 日幣 =</span>
                        <p className="text-sm font-black text-rose-500 font-mono mt-0.5">NT$ {rateData?.twdPerJpy}</p>
                    </div>
                    <div className="h-6 w-[1px] bg-zinc-200"></div>
                    <div className="text-right">
                        <span className="text-zinc-500 font-medium">1 台幣 =</span>
                        <p className="text-sm font-black text-zinc-700 font-mono mt-0.5">{rateData?.jpyPerTwd} 日幣</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
