import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Play, Eye, Clock } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: "Virtual Tour: Modern Villa with Pool",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "3:45",
    views: "12.5K"
  },
  {
    id: 2,
    title: "Downtown Luxury Apartment Showcase", 
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4:20",
    views: "8.2K"
  },
  {
    id: 3,
    title: "Family House Tour & Neighborhood Guide",
    thumbnail: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    duration: "5:15",
    views: "15.7K"
  }
]

export default function Videos() {
  return (
    <main>
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Property Videos
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take virtual tours of our featured properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full">
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    {video.views} views
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}