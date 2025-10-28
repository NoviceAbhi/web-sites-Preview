import Header from '@/components/Header'
import PropertyCard from '@/components/PropertyCard'
import Footer from '@/components/Footer'
import { Search, Filter } from 'lucide-react'

const allProperties = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    price: "$850,000",
    location: "Beverly Hills, CA",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Villa",
    featured: true
  },
  {
    id: 2,
    title: "Downtown Luxury Apartment",
    price: "$450,000",
    location: "Manhattan, NY",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sq ft",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Apartment"
  },
  {
    id: 3,
    title: "Cozy Family House",
    price: "$320,000",
    location: "Austin, TX",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,100 sq ft",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "House"
  },
  {
    id: 4,
    title: "Beachfront Condo",
    price: "$680,000",
    location: "Miami, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,400 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Condo"
  },
  {
    id: 5,
    title: "Mountain Retreat",
    price: "$420,000",
    location: "Aspen, CO",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,800 sq ft",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "House"
  },
  {
    id: 6,
    title: "Urban Loft",
    price: "$380,000",
    location: "Chicago, IL",
    bedrooms: 2,
    bathrooms: 1,
    area: "1,600 sq ft",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Apartment"
  }
]

export default function Properties() {
  return (
    <main>
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Properties
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our extensive collection of premium properties
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8 w-3/5 mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button className="btn-secondary flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Properties
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}