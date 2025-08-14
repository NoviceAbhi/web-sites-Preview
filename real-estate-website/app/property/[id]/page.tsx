import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Bed, Bath, Square, MapPin, Play, Calendar, Car, Wifi, Dumbbell } from 'lucide-react'

const propertyData = {
  1: {
    title: "Modern Villa with Pool",
    price: "$850,000",
    location: "Beverly Hills, CA",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Stunning modern villa featuring contemporary design, spacious living areas, and a beautiful swimming pool. Perfect for luxury living.",
    features: ["Swimming Pool", "Garage", "Garden", "Modern Kitchen", "Air Conditioning", "Security System"],
    yearBuilt: "2020"
  },
  2: {
    title: "Downtown Luxury Apartment",
    price: "$450,000",
    location: "Manhattan, NY",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sq ft",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Luxury apartment in the heart of Manhattan with stunning city views and premium amenities.",
    features: ["City Views", "Gym Access", "Concierge", "Rooftop Terrace", "High-Speed Internet", "24/7 Security"],
    yearBuilt: "2018"
  }
}

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const property = propertyData[params.id as keyof typeof propertyData] || propertyData[1]

  return (
    <main>
      <Header />
      
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image and Video */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              
              {/* Video Section */}
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Play className="w-5 h-5 text-blue-600" />
                  Property Video Tour
                </h3>
                <div className="aspect-video">
                  <iframe
                    src={property.videoUrl}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  {property.location}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-4">{property.price}</div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Bed className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <div className="font-semibold">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <div className="font-semibold">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                  <div className="font-semibold">{property.area}</div>
                  <div className="text-sm text-gray-600">Area</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Features</h2>
                <div className="grid grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Built: {property.yearBuilt}
                </div>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}