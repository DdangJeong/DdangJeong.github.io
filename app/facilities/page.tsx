'use client'

import dynamic from 'next/dynamic'

const FacilitiesComponent = dynamic(
  () => import('../components/FacilitiesComponent')
)

export default function Facilities() {
  return <FacilitiesComponent />
}