'use client'

import { useState } from 'react'
import Image from 'next/image'
import Layout from './layout'
import { Server, Monitor, Coffee, Tv, Database, Network } from 'lucide-react'

type FacilityType = 'working-environment' | 'seminar-room' | 'computing-resources'

type Facility = {
  id: FacilityType
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  detailImage: string
  detailContent: React.ReactNode
}

const facilities: Facility[] = [
  {
    id: 'working-environment',
    name: "Working Environment",
    description: "Modern workspace with individual workstations featuring AMD 5900X/5950X + 64GB RAM + Geforce RTX 3090/4090, spacious 27\" dual monitor systems, and access to coffee machine.",
    icon: Monitor,
    detailImage: "/fac_img/SAIL_work.jpg",
    detailContent: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Individual Workstation Specifications</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-600" />
              <span>AMD 5900X/5950X + 64GB RAM + Geforce RTX 3090/4090</span>
            </li>
            <li className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-blue-600" />
              <span>Spacious 27" dual monitor system</span>
            </li>
            <li className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-blue-600" />
              <span>Access to a coffee machine</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'seminar-room',
    name: "Seminar Room",
    description: "Dedicated space equipped with Samsung Flip pro 65\" electronic white board for weekly progress meetings and seminars.",
    icon: Tv,
    detailImage: "/fac_img/SAIL_seminar.jpg",
    detailContent: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Seminar Room Features</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Tv className="w-5 h-5 text-blue-600" />
              <span>Samsung Flip pro 65" electronic white board</span>
            </li>
            <li>Weekly progress meetings and research presentations</li>
            <li>Collaborative workspace for team discussions</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'computing-resources',
    name: "Computing Resources",
    description: "High-performance computing infrastructure with multiple GPU servers and storage solutions.",
    icon: Server,
    detailImage: "/fac_img/SAIL_server.png",
    detailContent: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Computing Infrastructure</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">GPU Servers:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>NVIDIA RTX A100 80GB x 4</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>NVIDIA RTX A100 80GB x 4</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>NVIDIA RTX A6000 48GB x 4</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>NVIDIA RTX A6000 48GB x 4</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>NVIDIA RTX A6000 48GB x 4</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>NVIDIA RTX A6000 48GB x 4</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>NVIDIA RTX A6000 48GB x 4</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Storage:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  <span>Synology 144TB NAS x 2</span>
                </li>
                <li className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-600" />
                  <span>10 Gbps ethernet connection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

export default function FacilitiesComponent() {
  const [selectedFacility, setSelectedFacility] = useState<FacilityType>('working-environment')
  const [showDetailMobile, setShowDetailMobile] = useState(false)

  const handleFacilityClick = (id: FacilityType) => {
    setSelectedFacility(id)
    setShowDetailMobile(true)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Facilities</h1>
        
        <div>
          <div className={`${showDetailMobile ? 'hidden md:block' : 'block'} mb-8`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilities.map(facility => (
                <button
                  key={facility.id}
                  onClick={() => handleFacilityClick(facility.id)}
                  className={`bg-white rounded-lg shadow-lg p-6 text-left transition-all hover:shadow-xl
                    ${selectedFacility === facility.id ? 'ring-2 ring-blue-600' : ''}`}
                >
                  <facility.icon className="w-12 h-12 md:w-8 md:h-8 text-blue-600 mx-auto md:mx-0 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{facility.name}</h3>
                  <p className="text-gray-600 hidden md:block">{facility.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className={`${!showDetailMobile ? 'hidden md:block' : 'block'}`}>
            <button 
              onClick={() => setShowDetailMobile(false)}
              className="mb-4 flex items-center text-blue-600 md:hidden"
            >
              <span>← Back to facilities</span>
            </button>

            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="bg-white rounded-lg shadow-lg p-6">
                {facilities.find(f => f.id === selectedFacility)?.detailContent}
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={facilities.find(f => f.id === selectedFacility)?.detailImage || ''}
                  alt={`${facilities.find(f => f.id === selectedFacility)?.name} detailed view`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}