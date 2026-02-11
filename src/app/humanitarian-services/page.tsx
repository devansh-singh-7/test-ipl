'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'
import { HandHeart, MapPin, X } from 'lucide-react'
import Image from 'next/image'
import { humanitarianEvents, HumanitarianEvent } from '@/data/humanitarian-events'

export default function HumanitarianServices() {
    const { t } = useTranslation()
    const [selectedEvent, setSelectedEvent] = useState<HumanitarianEvent | null>(null)

    return (
        <div className="bg-neutral-50">
            {/* Hero Section */}
            <section className="relative bg-transparent pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 overflow-hidden" style={{ minHeight: '280px' }}>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src="/Images/iplbanner.png"
                        alt="Humanitarian Services background"
                        className="w-[85%] h-full opacity-40 object-contain mx-auto"
                        style={{ objectPosition: 'center' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
                </div>
                <div className="relative z-10 container-custom mx-auto text-center px-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-neutral-200 shadow-sm animate-fade-in">
                        <HandHeart className="w-8 h-8 sm:w-10 sm:h-10 text-primary-700" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 sm:mb-6 animate-slide-up">
                        {t('nav.humanitarian', 'Humanitarian Services')}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto animate-slide-up px-2" style={{ animationDelay: '0.1s' }}>
                        {t('humanitarian.subtitle', 'Serving Humanity with Love and Compassion')}
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-16">
                <div className="container-custom mx-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-neutral-900">
                            Humanitarian Events
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {humanitarianEvents.map(event => (
                            <div
                                key={event.id}
                                onClick={() => setSelectedEvent(event)}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100 cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-contain object-center p-2 group-hover:scale-[1.03] transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                </div>

                                <div className="p-4">
                                    <h3 className="font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-xs text-neutral-600 mb-3 line-clamp-2">
                                        {event.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                                        <span className="text-primary-700 font-semibold">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-neutral-600">
                                        <MapPin className="w-3 h-3" />
                                        <span className="line-clamp-1">{event.district}, {event.state}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Detail Modal */}
            {selectedEvent && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedEvent(null)}
                >
                    <style jsx global>{`
                        .no-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .no-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>
                    <div
                        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative no-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        
                        {/* Close Button - Floated */}
                        <button
                            onClick={() => setSelectedEvent(null)}
                            className="absolute top-6 right-6 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image - Framed */}
                        <div className="p-3 sm:p-4 bg-white rounded-t-2xl">
                            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-100 shadow-inner">
                                <Image
                                    src={selectedEvent.image}
                                    alt={selectedEvent.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 900px"
                                    className="object-contain object-center p-2"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                    <div className="inline-block px-3 py-1 bg-primary-600/90 backdrop-blur-sm rounded-full mb-3 shadow-sm">
                                        <span className="text-xs font-bold uppercase tracking-wider text-white">
                                            {selectedEvent.category}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 shadow-sm leading-tight">
                                        {selectedEvent.title}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-8 border-b border-neutral-100 pb-6">
                                <div className="flex items-center gap-2 bg-neutral-50 px-4 py-2 rounded-lg text-neutral-700 border border-neutral-100">
                                   <span className="font-semibold text-primary-700">{selectedEvent.date}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-neutral-50 px-4 py-2 rounded-lg text-neutral-700 border border-neutral-100">
                                    <MapPin className="w-4 h-4 text-primary-700" />
                                    <span>{selectedEvent.location}</span>
                                </div>
                            </div>

                            <div className="prose prose-lg text-neutral-600 max-w-none">
                                <p className="leading-relaxed">
                                    {selectedEvent.fullDescription}
                                </p>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="px-6 py-2.5 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 rounded-lg font-medium transition-colors text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
