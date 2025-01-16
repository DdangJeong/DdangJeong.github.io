'use client'

import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Photo = {
  id: number
  src: string
}

type Event = {
  id: number
  year: number
  title: string
  date: string
  photos: Photo[]
}

const events: Event[] = [
  {
    id: 26,
    year: 2024,
    title: "4th Quarter Workshop and Ph.D. <a href='https://sites.google.com/view/sungmin-cha/' target='_blank'>Sungmin Cha</a>'s Seminar",
    date: "2024.12.20",
    photos: [
      { id: 95, src: "/Gallery/2024/workshop_4_1.jpg" },
      { id: 94, src: "/Gallery/2024/workshop_4_2.jpg" },
      { id: 93, src: "/Gallery/2024/workshop_4_3.jpg" }
    ]
  },
  {
    id: 25,
    year: 2024,
    title: "BMVC 2024",
    date: "2024.11.25-28",
    photos: [
      { id: 92, src: "/Gallery/2024/BMVC_1.jpg" },
      { id: 91, src: "/Gallery/2024/BMVC_2.jpg" },
      { id: 90, src: "/Gallery/2024/BMVC_3.jpg" }
    ]
  },
  {
    id: 24,
    year: 2024,
    title: "ICIP 2024",
    date: "2024.10.27-30",
    photos: [
      { id: 89, src: "/Gallery/2024/ICIP_1.png" },
      { id: 88, src: "/Gallery/2024/ICIP_2.png" },
      { id: 87, src: "/Gallery/2024/ICIP_3.png" },
      { id: 86, src: "/Gallery/2024/ICIP_4.png" }
    ]
  },
  {
    id: 23,
    year: 2024,
    title: "2024 Electronic Warfare Workshop",
    date: "2024.09.12",
    photos: [
      { id: 85, src: "/Gallery/2024/SSI_2_1.png" },
      { id: 84, src: "/Gallery/2024/SSI_2_2.png" },
      { id: 83, src: "/Gallery/2024/SSI_2_3.png" }
    ]
  },
  {
    id: 22,
    year: 2024,
    title: "3rd Quarter Workshop",
    date: "2024.08.30",
    photos: [
      { id: 82, src: "/Gallery/2024/workshop_3_1.png" },
      { id: 81, src: "/Gallery/2024/workshop_3_2.png" },
      { id: 80, src: "/Gallery/2024/workshop_3_3.png" }
    ]
  },
  {
    id: 21,
    year: 2024,
    title: "2024 Samsung D5 Division Industry-Academia Cooperation Award ceremony",
    date: "2024.08.12",
    photos: [
      { id: 79, src: "/Gallery/2024/Samsung_1.png" },
      { id: 78, src: "/Gallery/2024/Samsung_2.png" }
    ]
  },
  {
    id: 20,
    year: 2024,
    title: "Joint Workshop with Robots with Humans Lab",
    date: "2024.07.09",
    photos: [
      { id: 77, src: "/Gallery/2024/joint_1.png" },
      { id: 76, src: "/Gallery/2024/joint_2.png" },
      { id: 75, src: "/Gallery/2024/joint_3.png" },
      { id: 74, src: "/Gallery/2024/joint_4.png" },
      { id: 73, src: "/Gallery/2024/joint_5.png" }
    ]
  },
  {
    id: 19,
    year: 2024,
    title: "2024 Aerospace and Defense Technologies Workshop",
    date: "2024.07.05",
    photos: [
      { id: 72, src: "/Gallery/2024/SSI_1_1.png" },
      { id: 71, src: "/Gallery/2024/SSI_1_2.png" },
      { id: 70, src: "/Gallery/2024/SSI_1_3.png" }
    ]
  },
  {
    id: 18,
    year: 2024,
    title: "Summer Conference of IEIE 2024",
    date: "2024.06.28-30",
    photos: [
      { id: 69, src: "/Gallery/2024/IEIE_1.png" },
      { id: 68, src: "/Gallery/2024/IEIE_2.png" },
      { id: 67, src: "/Gallery/2024/IEIE_3.png" },
      { id: 66, src: "/Gallery/2024/IEIE_4.png" },
      { id: 65, src: "/Gallery/2024/IEIE_5.png" }
    ]
  },
  {
    id: 17,
    year: 2024,
    title: "CVPR 2024",
    date: "2024.06.16-23",
    photos: [
      { id: 64, src: "/Gallery/2024/CVPR_1.png" },
      { id: 63, src: "/Gallery/2024/CVPR_2.png" },
      { id: 62, src: "/Gallery/2024/CVPR_3.png" },
      { id: 61, src: "/Gallery/2024/CVPR_4.png" },
      { id: 60, src: "/Gallery/2024/CVPR_5.png" }
    ]
  },
  {
    id: 16,
    year: 2024,
    title: "2nd Quarter Workshop",
    date: "2024.06.14",
    photos: [
      { id: 59, src: "/Gallery/2024/workshop_2_1.png" },
      { id: 58, src: "/Gallery/2024/workshop_2_2.png" },
      { id: 57, src: "/Gallery/2024/workshop_2_3.png" },
      { id: 56, src: "/Gallery/2024/workshop_2_4.png" }
    ]
  },
  {
    id: 15,
    year: 2024,
    title: "ICASSP 2024",
    date: "2024.04.14-19",
    photos: [
      { id: 55, src: "/Gallery/2024/ICASSP_1.png" },
      { id: 54, src: "/Gallery/2024/ICASSP_2.png" },
      { id: 53, src: "/Gallery/2024/ICASSP_3.png" },
      { id: 52, src: "/Gallery/2024/ICASSP_4.png" }
    ]
  },
  {
    id: 14,
    year: 2024,
    title: "1st Quarter Workshop",
    date: "2024.03.22",
    photos: [
      { id: 51, src: "/Gallery/2024/workshop_1_1.png" },
      { id: 50, src: "/Gallery/2024/workshop_1_2.png" }
    ]
  },
  {
    id: 13,
    year: 2024,
    title: "IPIU 2024",
    date: "2024.01.24-26",
    photos: [
      { id: 49, src: "/Gallery/2024/IPIU_1.png" },
      { id: 48, src: "/Gallery/2024/IPIU_2.png" }
    ]
  },
  {
    id: 12,
    year: 2023,
    title: "4th Quarter Workshop",
    date: "2023.12.19",
    photos: [
      { id: 47, src: "/Gallery/2023/workshop_4_1.png" },
      { id: 46, src: "/Gallery/2023/workshop_4_2.png" },
      { id: 45, src: "/Gallery/2023/workshop_4_3.png" }
    ]
  },
  {
    id: 11,
    year: 2023,
    title: "3rd Quarter Workshop",
    date: "2023.09.01",
    photos: [
      { id: 44, src: "/Gallery/2023/workshop_3_1.png" },
      { id: 43, src: "/Gallery/2023/workshop_3_2.png" }
    ]
  },
  {
    id: 10,
    year: 2023,
    title: "Summer Conference of IEIE 2023",
    date: "2023.06.28-30",
    photos: [
      { id: 42, src: "/Gallery/2023/IEIE_1.png" },
      { id: 41, src: "/Gallery/2023/IEIE_2.png" },
      { id: 40, src: "/Gallery/2023/IEIE_3.png" },
      { id: 39, src: "/Gallery/2023/IEIE_4.png" },
      { id: 38, src: "/Gallery/2023/IEIE_5.png" }
    ]
  },
  {
    id: 9,
    year: 2023,
    title: "CVPR 2023",
    date: "2023.06.17-23",
    photos: [
      { id: 37, src: "/Gallery/2023/CVPR_1.png" },
      { id: 36, src: "/Gallery/2023/CVPR_2.png" },
      { id: 35, src: "/Gallery/2023/CVPR_3.png" },
      { id: 34, src: "/Gallery/2023/CVPR_4.png" },
      { id: 33, src: "/Gallery/2023/CVPR_5.png" },
      { id: 32, src: "/Gallery/2023/CVPR_6.png" }
    ]
  },
  {
    id: 8,
    year: 2023,
    title: "End-of-semester gathering",
    date: "2023.06.09",
    photos: [
      { id: 31, src: "/Gallery/2023/workshop_2_1.png" },
      { id: 30, src: "/Gallery/2023/workshop_2_2.png" }
    ]
  },
  {
    id: 7,
    year: 2023,
    title: "ERC Workshop",
    date: "2023.05.19-20",
    photos: [
      { id: 29, src: "/Gallery/2023/ERC_1.png" },
      { id: 28, src: "/Gallery/2023/ERC_2.png" }
    ]
  },
  {
    id: 6,
    year: 2023,
    title: "PhD studentship offer from UIC",
    date: "2023.03.03",
    photos: [
      { id: 27, src: "/Gallery/2023/phd_1.png" },
      { id: 26, src: "/Gallery/2023/phd_2.png" },
      { id: 25, src: "/Gallery/2023/phd_3.png" }
    ]
  },
  {
    id: 5,
    year: 2023,
    title: "Graduation",
    date: "2023.02.16",
    photos: [
      { id: 24, src: "/Gallery/2023/grad_1.png" },
      { id: 23, src: "/Gallery/2023/grad_2.png" }
    ]
  },
  {
    id: 4,
    year: 2023,
    title: "IPIU 2023",
    date: "2023.02.08-10",
    photos: [
      { id: 22, src: "/Gallery/2023/IPIU_1.png" },
      { id: 21, src: "/Gallery/2023/IPIU_2.png" },
      { id: 20, src: "/Gallery/2023/IPIU_3.png" },
      { id: 19, src: "/Gallery/2023/IPIU_4.png" },
      { id: 18, src: "/Gallery/2023/IPIU_5.png" },
      { id: 17, src: "/Gallery/2023/IPIU_6.png" }
    ]
  },
  {
    id: 3,
    year: 2023,
    title: "Freshmen OT",
    date: "2023.02.06",
    photos: [
      { id: 16, src: "/Gallery/2023/workshop_1_1.png" },
      { id: 15, src: "/Gallery/2023/workshop_1_2.png" }
    ]
  },
  {
    id: 2,
    year: 2022,
    title: "End-of-year team gathering",
    date: "2022.12.26",
    photos: [
      { id: 14, src: "/Gallery/2022/workshop_1.png" },
      { id: 13, src: "/Gallery/2022/workshop_2.png" }
    ]
  },
  {
    id: 1,
    year: 2022,
    title: "KIBME autumn conference 2022",
    date: "2022.11.18",
    photos: [
      { id: 12, src: "/Gallery/2022/KIBME_1.png" },
      { id: 11, src: "/Gallery/2022/KIBME_2.png" }
    ]
  }
]

const EventTitle = ({ title }: { title: string }) => {
  const styledTitle = title.replace(
    /<a\s/g, 
    '<a class="underline hover:text-blue-500 transition-colors" '
  )
  
  return <div dangerouslySetInnerHTML={{ __html: styledTitle }} />
}

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const filteredEvents = selectedYear
    ? events.filter(event => event.year === selectedYear)
    : events

  const years = Array.from(new Set(events.map(event => event.year))).sort((a, b) => b - a)

  const groupEventsByYear = (events: Event[]) => {
    return events.reduce((acc, event) => {
      const year = event.year
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(event)
      return acc
    }, {} as Record<number, Event[]>)
  }

  const groupedEvents = groupEventsByYear(filteredEvents)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Gallery</h1>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            onClick={() => setSelectedYear(null)}
            variant={selectedYear === null ? "default" : "outline"}
          >
            All
          </Button>
          {years.map(year => (
            <Button
              key={year}
              onClick={() => setSelectedYear(year)}
              variant={selectedYear === year ? "default" : "outline"}
            >
              {year}
            </Button>
          ))}
        </div>

        {Object.entries(groupedEvents)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, yearEvents]) => (
            <div key={year} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">
                {year}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yearEvents.map(event => (
                  <div key={event.id} className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-2">
                      <EventTitle title={event.title} />
                    </h2>
                    <p className="text-gray-600 mb-4">{event.date}</p>
                    <Carousel className="w-full max-w-md mx-auto">
                      <CarouselContent>
                        {event.photos.map(photo => (
                          <CarouselItem key={photo.id}>
                            <div className="p-1">
                              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                                <Image
                                  src={photo.src}
                                  alt=""
                                  fill
                                  className={`object-cover ${
                                    photo.src.includes("BMVC_3") ? "object-top" : ""
                                  }`}
                                />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                    </Carousel>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </Layout>
  )
}

