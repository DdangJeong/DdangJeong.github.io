'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#041B3C] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center bg-[#041B3C]">
              <Image
                src="/logo/logo_v2.png"
                alt="Spatial AI Lab Logo"
                width={200}
                height={53}
                className="w-[120px] md:w-[200px] object-contain"
              />
            </Link>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <ul className={`md:flex md:space-x-6 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-[#041B3C] p-4 space-y-4' : 'hidden md:space-y-0'}`}>
              <li><Link href="/" className="block py-2 md:py-0 hover:text-gray-300">Home</Link></li>
              <li><Link href="/members" className="block py-2 md:py-0 hover:text-gray-300">Members</Link></li>
              <li><Link href="/projects" className="block py-2 md:py-0 hover:text-gray-300">Projects</Link></li>
              <li><Link href="/publications" className="block py-2 md:py-0 hover:text-gray-300">Publications</Link></li>
              <li><Link href="/gallery" className="block py-2 md:py-0 hover:text-gray-300">Gallery</Link></li>
              <li><Link href="/teaching" className="block py-2 md:py-0 hover:text-gray-300">Teaching</Link></li>
              <li><Link href="/facilities" className="block py-2 md:py-0 hover:text-gray-300">Facilities</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-[#041B3C] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Spatial AI Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

