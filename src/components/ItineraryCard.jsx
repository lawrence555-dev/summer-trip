import React from 'react';
import { MapPin } from 'lucide-react';

const ItineraryCard = ({ activity, isLast }) => {
    const { time, title, desc, icon: Icon, type, highlight, camera } = activity;

    // Japanese Pure White Style Mappings
    const typeStyles = {
        transit: 'bg-zinc-100 text-zinc-500',
        stay: 'bg-indigo-50 text-indigo-600',
        dining: 'bg-amber-50 text-amber-600',
        shopping: 'bg-rose-50 text-rose-600',
        activity: 'bg-emerald-50 text-emerald-600',
    };

    const styleClass = typeStyles[type] || 'bg-slate-50 text-slate-500';

    return (
        <div className={`relative flex gap-6 ${isLast ? '' : 'pb-12'}`}>

            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[19px] top-10 bottom-0 w-[1px] bg-zinc-200" />
            )}

            {/* Time & Icon Column */}
            <div className="flex flex-col items-center shrink-0 w-10 gap-2 pt-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-10 ${highlight ? 'bg-zinc-800 text-white ring-4 ring-zinc-50' : 'bg-white border border-zinc-200 text-zinc-400'}`}>
                    <Icon size={18} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-medium text-zinc-400 font-mono tracking-tighter">{time}</span>
            </div>

            {/* Content Card */}
            <div className={`flex-1 group transition-all duration-300 ${highlight ? 'transform translate-x-1' : ''}`}>
                <div className={`
          p-5 rounded-2xl border transition-all duration-300
          ${highlight
                        ? 'bg-white border-zinc-200 shadow-sm'
                        : 'bg-white/40 border-transparent hover:bg-white hover:border-zinc-100 hover:shadow-sm'
                    }
        `}>
                    <div className="flex justify-between items-start">
                        <h3 className={`text-base font-bold mb-1 leading-snug tracking-wide ${highlight ? 'text-zinc-800' : 'text-zinc-700'}`}>
                            {title}
                        </h3>
                    </div>

                    <p className="text-sm text-zinc-500 leading-relaxed font-light tracking-wide mb-3">
                        {desc}
                    </p>

                    {/* Camera Config Badge */}
                    {camera && (
                        <div className="mt-3 inline-flex flex-col gap-1 bg-zinc-50 border border-zinc-100 rounded-lg p-2.5 w-full sm:w-auto hover:border-zinc-300 transition-colors group/camera">
                            <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 mb-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                                <span>OPPO 攝影配置 | {camera.mode}</span>
                            </div>
                            <div className="text-[10px] text-zinc-400 flex flex-col gap-0.5 pl-3.5 border-l border-zinc-200">
                                <span className="font-medium text-zinc-500">{camera.desc}</span>
                                <span className="font-mono text-zinc-400 opacity-80">{camera.settings}</span>
                            </div>
                        </div>
                    )}

                    {/* Map Button */}
                    {activity.map && (
                        <div className="absolute bottom-5 right-5 z-20">
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.map)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-zinc-50 rounded-full shadow-md text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300 group/map"
                                title="Open in Google Maps"
                            >
                                <MapPin size={18} />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;
