'use client';

import { useTranslation } from '@/contexts/TranslationContext';
import { Award, Globe, Users, BookOpen, MapPin, Heart, Calendar, Star } from 'lucide-react';
import Image from 'next/image';

export default function HistoryPage() {
  const { t } = useTranslation();

  const milestones = [
    {
      year: '1995',
      title: 'Foundation',
      titleTa: 'தொடக்கம்',
      description: 'IPL was founded in Mumbai on March 12, 1995, by like-minded pen pals united by love, friendship, and humanity.',
      descriptionTa: 'அன்பு, நட்பு மற்றும் மனிதநேயத்தால் ஒன்றிணைந்த பேனா நண்பர்களால் 1995 மார்ச் 12 அன்று மும்பையில் IPL நிறுவப்பட்டது.',
      icon: Heart,
      color: 'from-red-500 to-rose-600',
    },
    {
      year: '2001',
      title: 'Gujarat Earthquake Relief',
      titleTa: 'குஜராத் நிலநடுக்க நிவாரணம்',
      description: 'Established relief center (Jan 27 - Feb 2, 2001) and collected funds for earthquake victims, handed over to the Mumbai District Collector.',
      descriptionTa: 'நிவாரண மையம் நிறுவப்பட்டது (ஜனவரி 27 - பிப்ரவரி 2, 2001) மற்றும் நிலநடுக்க பாதிக்கப்பட்டவர்களுக்கான நிதி சேகரிக்கப்பட்டு மும்பை மாவட்ட ஆட்சியரிடம் ஒப்படைக்கப்பட்டது.',
      icon: Award,
      color: 'from-orange-500 to-amber-600',
    },
    {
      year: '2005',
      title: 'Tsunami Relief Operations',
      titleTa: 'சுனாமி நிவாரண நடவடிக்கைகள்',
      description: 'Traveled along the coast from Colachel to Manakudy in Kanyakumari district, directly providing rice, lentils, food grains, and clothing to 200+ affected families.',
      descriptionTa: 'கன்னியாகுமரி மாவட்டத்தில் கோலச்சல் முதல் மனக்குடி வரை கடற்கரை ஓரமாக பயணித்து, 200+ பாதிக்கப்பட்ட குடும்பங்களுக்கு நேரடியாக அரிசி, பருப்பு, உணவு தானியங்கள் மற்றும் ஆடைகள் வழங்கப்பட்டன.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      year: '2007',
      title: 'Paris - Bharathiyar Anniversary',
      titleTa: 'பாரிஸ் - பாரதியார் ஆண்டு விழா',
      description: 'Special guest at the 125th anniversary of Mahakavi Bharathiyar organized by France Tamil Sangam in Paris, the only Mumbai Tamil organization invited.',
      descriptionTa: 'பாரிஸில் பிரான்ஸ் தமிழ் சங்கம் நடத்திய மகாகவி பாரதியாரின் 125வது ஆண்டு விழாவில் சிறப்பு விருந்தினர், அழைக்கப்பட்ட ஒரே மும்பை தமிழ் அமைப்பு.',
      icon: Star,
      color: 'from-indigo-500 to-purple-600',
    },
    {
      year: '2011',
      title: 'Gandhi Statue Inauguration',
      titleTa: 'காந்தி சிலை திறப்பு விழா',
      description: 'Special guest at the Mahatma Gandhi Statue Inauguration organized by Aubervilliers Tamil Cultural Forum in Paris. Presented memento to the Mayor.',
      descriptionTa: 'பாரிஸில் ஓபர்வில்லியர்ஸ் தமிழ் கலாச்சார மன்றம் நடத்திய மகாத்மா காந்தி சிலை திறப்பு விழாவில் சிறப்பு விருந்தினர். மேயருக்கு நினைவுப் பரிசு வழங்கப்பட்டது.',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      year: '2019',
      title: 'Silver Jubilee Celebration',
      titleTa: 'வெள்ளி விழா கொண்டாட்டம்',
      description: 'Celebrated 25 years of service with the grand 25th Friendship Meet in Tirunelveli, marking a historic milestone in our journey.',
      descriptionTa: '25 ஆண்டுகால சேவையை திருநெல்வேலியில் பிரமாண்டமான 25வது நட்புச் சங்கமத்துடன் கொண்டாடினோம், இது நமது பயணத்தில் ஒரு வரலாற்று மைல்கல்.',
      icon: Calendar,
      color: 'from-pink-500 to-rose-600',
    },
  ];



  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-transparent pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 overflow-hidden" style={{ minHeight: '280px' }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/Images/iplbanner.png"
            alt="History background"
            className="w-[85%] h-full opacity-40 object-contain mx-auto"
            style={{ objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
        </div>

        <div className="relative z-10 container-custom mx-auto text-center px-4">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-red-100 shadow-sm mb-8">
              <BookOpen className="w-4 h-4 text-red-700" />
              <span className="text-xs font-semibold tracking-wider uppercase text-red-800">
                {t('history.intro.title', 'Our Heritage')}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              {t('history.hero.title', 'History')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
              {t('history.hero.subtitle', 'A Journey of Love, Friendship & Humanitarian Service')}
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-300" />
              <Heart className="w-5 h-5 text-red-600" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-300" />
            </div>
          </div>
        </div>
      </section>



      {/* Timeline Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                {t('history.timeline.title', 'Major Milestones')}
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto">
                Key moments that shaped our journey of love, friendship, and humanitarian service.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-red-400 to-red-200 md:-translate-x-px" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`relative flex items-start gap-8 ${isEven ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-red-600 rounded-full -translate-x-1/2 z-10 shadow-sm" />

                      {/* Content Card */}
                      <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                          {/* Year Badge */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl sm:text-3xl font-bold text-neutral-900">
                              {milestone.year}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            {milestone.title}
                          </h3>

                          {/* Description */}
                          <p className="text-neutral-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block w-[calc(50%-2rem)]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}