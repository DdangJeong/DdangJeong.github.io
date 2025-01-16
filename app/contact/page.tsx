import Layout from '../components/layout'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">Contact Us</h1>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex items-center">
            <Mail className="mr-4 text-blue-600" />
            <p>contact@hy-visionlab.com</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-4 text-blue-600" />
            <p>+82 123 456 7890</p>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-4 text-blue-600" />
            <p>123 University Street, Seoul, South Korea</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

