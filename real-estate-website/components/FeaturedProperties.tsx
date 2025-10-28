import PropertyCard from './PropertyCard'
import ScrollReveal from './ScrollReveal'

const featuredProperties = [
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
    featured: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lifestyleTags: ["Pet Friendly", "Scenic Views", "Pool"],
    nearbyLandmarks: ["School", "Park", "Cafe"]
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
    type: "Apartment",
    featured: true,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lifestyleTags: ["Walkable Area", "City Views", "Modern"],
    nearbyLandmarks: ["Cafe", "School"]
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
    type: "House",
    featured: true,
    lifestyleTags: ["Family Friendly", "Quiet Area", "Garden"],
    nearbyLandmarks: ["School", "Park"]
  }
]

export default function FeaturedProperties() {
  return (
    <section className="py-24 bg-neutral-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-blue-700 mb-4">
              Featured Properties
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-sans font-light">
              Discover our handpicked selection of premium properties
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProperties.map((property, index) => (
            <ScrollReveal key={property.id} className={`delay-${index * 100}`}>
              <PropertyCard property={property} />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/properties" className="btn-primary inline-block">
            View All Properties
          </a>
        </div>
      </div>
    </section>
  )
}