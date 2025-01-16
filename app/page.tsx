'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Link2, Mail, MapPin, Phone } from 'lucide-react'
import Layout from './components/layout'
import { internationalPublications } from './data/publications-data'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { labNews } from './data/news-data'

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

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const recentPublications = internationalPublications
    .sort((a, b) => b.year - a.year)
    .slice(0, 3)

  const researchAreas = [
    {
      title: 'Geometric Computer Vision',
      shortDescription: 'Spatial perception, visual localization, and 3D reconstruction.',
      fullDescription: 'Our research in geometric computer vision focuses on spatial perception, visual localization, and 3D reconstruction. We develop algorithms that enable machines to understand and interpret spatial environments, which has applications in robotics, AR/VR, and autonomous vehicles. Key topics include feature extraction, camera calibration, and point cloud processing to reconstruct 3D models of real-world scenes.',
      image: '/proj_img/linecloud.png',
    },
    {
      title: 'Anomaly Detection',
      shortDescription: 'Unsupervised approaches for anomaly detection.',
      fullDescription: 'We focus on unsupervised and semi-supervised approaches for anomaly detection across diverse industrial and medical applications. Our goal is to build robust models that can detect unexpected patterns or defects in data without relying on labeled datasets. These methods are crucial for quality control in manufacturing, cybersecurity, and medical diagnostics, where detecting abnormalities quickly and accurately is vital.',
      image: '/proj_img/smart.jpeg',
    },
    {
      title: '3D Medical Imaging and Simulation',
      shortDescription: 'Transform 2D medical scans into accurate 3D models.',
      fullDescription: 'Our work in 3D medical imaging involves developing methods for image segmentation, reconstruction, and simulation. We aim to transform 2D medical scans into accurate 3D models, providing improved diagnostic tools and simulation environments for healthcare professionals. Additionally, we use Physics-Informed Neural Networks (PINNs) to simulate and analyze physiological processes, supporting real-time decision-making in medical treatments.',
      image: '/proj_img/Medical.png',
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to Spatial AI Lab</h1>
            <p className="text-lg sm:text-xl mb-8">Advancing the frontiers of vision computing and artificial intelligence</p>
            <Link href="/projects" className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
              Explore Our Research
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-gray-100 rounded-lg p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div className="hidden md:block mb-4">
                  <Image
                    src={area.image}
                    alt={area.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {area.shortDescription}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{area.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="mb-4">
                        <Image
                          src={area.image}
                          alt={area.title}
                          width={300}
                          height={200}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">{area.fullDescription}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab News */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Lab News</h2>
          <div className="space-y-4">
            {labNews
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 5)
              .map((news, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg shadow bg-white transition-all hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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
          <div className="flex justify-center mt-8">
            <Link 
              href="/news" 
              className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              View All News
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Recent Publications</h2>
          <div className="space-y-6 sm:space-y-8">
            {recentPublications.map((pub, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">{pub.authors}</p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{pub.conference}</p>
                <div className="flex gap-4">
                  {pub.links?.paper && (
                    <a href={pub.links.paper} className="inline-flex items-center text-blue-600 hover:underline text-sm sm:text-base">
                      <Link2 className="w-4 h-4 mr-1" />
                      Paper
                    </a>
                  )}
                  {pub.links?.code && (
                    <a href={pub.links.code} className="inline-flex items-center text-blue-600 hover:underline text-sm sm:text-base">
                      <Link2 className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link 
              href="/publications" 
              className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              More Publications
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Join Our Lab Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Join Our Lab</h2>

          {/* Recruitment Info */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">MS-PhD Studentship Openings</h3>
            <p className="text-base sm:text-lg mb-6">
              We're recruiting 2 self-motivated prospective PhD or MS-PhD students commencing in March 2025.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Research Areas:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base">
                  <li>Physics informed neural network and Gaussian splitting</li>
                  <li>Medical image segmentation</li>
                  <li>Multimodal anomaly detection</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base">
                  <li>Above 3.5/4.5 GPA from a renowned university</li>
                  <li>Major in electrical/electronic engineering or computer science</li>
                  <li>Experience in computer vision and/or deep learning</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 text-white font-semibold hover:bg-blue-700">Apply Now</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Application Process</DialogTitle>
                    <DialogDescription>
                      Our lab comprises the following stages for graduate student applications:
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
                      <li>Send an email to briefly introduce yourself along with your CV, transcripts and a short research statement.</li>
                      <li>Arrange a first-round 1-to-1 interview (approx. 30 minutes, online meeting is possible).</li>
                      <li>Arrange an on-site interview (approx. 45 minutes).</li>
                    </ol>
                  </div>
                  <div className="flex justify-end">
                    <Link href="/job-openings/apply">
                      <Button>Next</Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Contact and Map Section */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact Us</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Location:</p>
                        <p className="text-sm sm:text-base">Engineering Center Annex Unit 415-1</p>
                        <p className="text-sm sm:text-base">Hanyang University</p>
                        <p className="text-sm sm:text-base">222 Wangsimni-ro</p>
                        <p className="text-sm sm:text-base">Seongdong-gu</p>
                        <p className="text-sm sm:text-base">Seoul, 04763</p>
                        <p className="text-sm sm:text-base">Republic of Korea</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Email:</p>
                        <p className="text-sm sm:text-base">jhh37 at hanyang dot ac dot kr</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Telephone:</p>
                        <p className="text-sm sm:text-base">02-2220-2489</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Location Map</h2>
                  <div className="aspect-video w-full relative rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.0115474481777!2d127.04355497724653!3d37.554791724799145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5ee0d993f69%3A0xa769c0d37cce59c7!2z7ZWc7JaR64yA7ZWZ6rWQIOqzteyXheyEvO2EsA!5e0!3m2!1sko!2skr!4v1733140881210!5m2!1sko!2skr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

