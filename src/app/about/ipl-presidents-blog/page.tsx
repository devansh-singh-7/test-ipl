'use client';

import Image from 'next/image';
import { useTranslation } from '@/contexts/TranslationContext';
import { FileText, Calendar, Award, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

type BlogPost = {
  id: number;
  titleKey: string;
  descKey: string;
  date: string;
  imageUrl: string;
  featured: boolean;
};

export default function PresidentBlogPage() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const itemsPerPage = 8;

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      titleKey: 'blog.posts.silverJubilee.title',
      descKey: 'blog.posts.silverJubilee.desc',
      date: '2020',
      imageUrl: 'https://images.unsplash.com/photo-1464660756002-dd1ee6debbe4?w=800&q=80',
      featured: true
    },
    {
      id: 2,
      titleKey: 'blog.posts.friendship27.title',
      descKey: 'blog.posts.friendship27.desc',
      date: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      featured: true
    },
    {
      id: 3,
      titleKey: 'blog.posts.pongal2024.title',
      descKey: 'blog.posts.pongal2024.desc',
      date: 'January 2024',
      imageUrl: 'https://images.unsplash.com/photo-1610732821891-3ab90e94eb00?w=800&q=80',
      featured: false
    },
    {
      id: 4,
      titleKey: 'blog.posts.souvenir2023.title',
      descKey: 'blog.posts.souvenir2023.desc',
      date: '2023',
      imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
      featured: false
    },
    {
      id: 5,
      titleKey: 'blog.posts.isroVisit.title',
      descKey: 'blog.posts.isroVisit.desc',
      date: 'November 2022',
      imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
      featured: false
    },
    {
      id: 6,
      titleKey: 'blog.posts.agm19.title',
      descKey: 'blog.posts.agm19.desc',
      date: 'May 2022',
      imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      featured: false
    },
    {
      id: 7,
      titleKey: 'blog.posts.secretaryWedding.title',
      descKey: 'blog.posts.secretaryWedding.desc',
      date: 'January 2022',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      featured: false
    },
    {
      id: 8,
      titleKey: 'blog.posts.calendar2022.title',
      descKey: 'blog.posts.calendar2022.desc',
      date: '2022',
      imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80',
      featured: false
    },
    {
      id: 9,
      titleKey: 'blog.posts.cmLetter.title',
      descKey: 'blog.posts.cmLetter.desc',
      date: 'November 2021',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      featured: false
    },
    {
      id: 10,
      titleKey: 'blog.posts.hajTravel.title',
      descKey: 'blog.posts.hajTravel.desc',
      date: 'November 2021',
      imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80',
      featured: false
    },
    {
      id: 11,
      titleKey: 'blog.posts.diaspora.title',
      descKey: 'blog.posts.diaspora.desc',
      date: 'October 2021',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      featured: false
    },
    {
      id: 12,
      titleKey: 'blog.posts.lifetimeAward.title',
      descKey: 'blog.posts.lifetimeAward.desc',
      date: '2021',
      imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
      featured: true
    },
    {
      id: 13,
      titleKey: 'blog.posts.chancellor.title',
      descKey: 'blog.posts.chancellor.desc',
      date: '2018',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      featured: false
    },
    {
      id: 14,
      titleKey: 'blog.posts.airport.title',
      descKey: 'blog.posts.airport.desc',
      date: 'February 2021',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      featured: false
    },
    {
      id: 15,
      titleKey: 'blog.posts.pongal2020.title',
      descKey: 'blog.posts.pongal2020.desc',
      date: 'January 2020',
      imageUrl: 'https://images.unsplash.com/photo-1610732821891-3ab90e94eb00?w=800&q=80',
      featured: false
    },
    {
      id: 16,
      titleKey: 'blog.posts.covidRelief.title',
      descKey: 'blog.posts.covidRelief.desc',
      date: '2020',
      imageUrl: 'https://images.unsplash.com/photo-1584744982493-c48f5f1ad8f8?w=800&q=80',
      featured: false
    },
    {
      id: 17,
      titleKey: 'blog.posts.chessAcademy.title',
      descKey: 'blog.posts.chessAcademy.desc',
      date: '2020',
      imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80',
      featured: false
    },
    {
      id: 18,
      titleKey: 'blog.posts.souvenir2019.title',
      descKey: 'blog.posts.souvenir2019.desc',
      date: '2019',
      imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
      featured: false
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-transparent pt-12 md:pt-16 lg:pt-20 pb-8 overflow-hidden" style={{ minHeight: '320px' }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/Images/iplbanner.png"
            alt="President Blog background"
            className="w-[85%] h-full opacity-40 object-contain mx-auto"
            style={{ objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.04)' }} />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-red-100 shadow-sm mb-8">
              <FileText className="w-4 h-4 text-red-700" />
              <span className="text-xs font-semibold tracking-wider uppercase text-red-800">
                {t('blog.hero.badge', 'President\'s Voice')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
              {t('blog.hero.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-neutral-900" />
            <h2 className="text-3xl font-bold text-neutral-900">
              {t('blog.allPosts.title', 'President\'s Updates')}
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-neutral-200">
                  <Image
                    src={post.imageUrl}
                    alt={t(post.titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                    {t(post.titleKey)}
                  </h3>
                  <p className="text-xs text-neutral-600 mb-3 line-clamp-2">
                    {t(post.descKey)}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="text-red-700 font-semibold">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-full text-sm font-medium hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t('blog.pagination.previous')}
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                      currentPage === page
                        ? 'bg-red-700 text-white shadow-md'
                        : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-full text-sm font-medium hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t('blog.pagination.next')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="sticky top-0 flex justify-end p-4 bg-white border-b border-neutral-200 z-10">
              <button
                onClick={() => setSelectedPost(null)}
                className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-800 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div>
              {/* Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-200">
                <Image
                  src={selectedPost.imageUrl}
                  alt={t(selectedPost.titleKey)}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 md:p-8">
                <div className="inline-block px-3 py-1 bg-red-50 rounded-full mb-4">
                  <span className="text-xs font-semibold text-red-700 uppercase tracking-wider">
                    {selectedPost.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                  {t(selectedPost.titleKey)}
                </h2>

                <p className="text-neutral-700 leading-relaxed text-lg mb-8">
                  {t(selectedPost.descKey)}
                </p>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-full font-semibold hover:bg-red-800 transition-colors"
                >
                  Close Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </main>
  );
}
