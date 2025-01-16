'use client'

import Layout from '../components/layout'
import { labNews } from '../data/news-data'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// 날짜 포맷팅 함수
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// type에 따른 태그 텍스트와 색상 설정
const getTypeTag = (type?: string) => {
  switch(type) {
    case 'award':
      return { text: 'Award', color: 'text-green-600 bg-green-50 border-green-200' };
    case 'publication':
      return { text: 'Publication', color: 'text-blue-600 bg-blue-50 border-blue-200' };
    case 'travel':
      return { text: 'Travel', color: 'text-amber-600 bg-amber-50 border-amber-200' };
    case 'presentation':
      return { text: 'Presentation', color: 'text-purple-600 bg-purple-50 border-purple-200' };
    default:
      return { text: 'News', color: 'text-gray-600 bg-gray-50 border-gray-200' };
  }
}

export default function NewsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mt-4 mb-8">Lab News</h1>
        </div>

        <div className="space-y-4">
          {labNews
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((news, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg shadow bg-white transition-all hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {formatDate(news.date)}
                  </span>
                  <span className="text-gray-800">{news.content}</span>
                  {news.type && (
                    <span className={`text-xs px-2 py-1 rounded-full border ${getTypeTag(news.type).color} whitespace-nowrap ml-auto`}>
                      #{getTypeTag(news.type).text}
                    </span>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}
