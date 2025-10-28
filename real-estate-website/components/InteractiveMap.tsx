'use client'

import { useState } from 'react'
import { MapPin, Filter, DollarSign, Home as HomeIcon } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const mapProperties = [
  { id: 1, lat: 34.0522, lng: -118.2437, price: "$850,000", type: "Villa", title: "Modern Villa" },
  { id: 2, lat: 40.7589, lng: -73.9851, price: "$450,000", type: "Apartment", title: "Luxury Apartment" },
  { id: 3, lat: 30.2672, lng: -97.7431, price: "$320,000", type: "House", title: "Family House" },
  { id: 4, lat: 25.7617, lng: -80.1918, price: "$680,000", type: "Condo", title: "Beachfront Condo" }
]

export default function InteractiveMap() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null)
  const [filters, setFilters] = useState({
    priceRange: '',
    propertyType: ''
  })

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary-800 mb-6">
              Explore Properties on Map
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans font-light">
              Interactive map search with detailed property information
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h3 className="text-xl font-serif font-semibold text-primary-800 mb-4">
                Search Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    className="w-full p-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-primary-300 font-sans"
                    value={filters.priceRange}
                    onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                  >
                    <option value="">All Prices</option>
                    <option value="0-300000">$0 - $300,000</option>
                    <option value="300000-600000">$300,000 - $600,000</option>
                    <option value="600000+">$600,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    className="w-full p-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-primary-300 font-sans"
                    value={filters.propertyType}
                    onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                  >
                    <option value="">All Types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Condo">Condo</option>
                  </select>
                </div>

                <button className="btn-primary w-full flex items-center justify-center px-1 py-0.5 md:px-6 md:py-3 text-xs md:text-sm">
                  <Filter className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  Apply Filters
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-serif font-semibold text-primary-800 mb-4">
                  Found Properties
                </h4>
                <div className="space-y-3">
                  {mapProperties.map((property) => (
                    <div
                      key={property.id}
                      className={`p-3 rounded-sm border cursor-pointer transition-colors ${
                        selectedProperty === property.id
                          ? 'border-primary-400 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedProperty(property.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-sans font-medium text-gray-800">
                            {property.title}
                          </div>
                          <div className="text-sm text-gray-600 font-sans">
                            {property.type}
                          </div>
                        </div>
                        <div className="text-primary-600 font-serif font-semibold">
                          {property.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card overflow-hidden">
              <div className="bg-neutral-sand h-96 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-semibold text-primary-800 mb-2">
                    Interactive Map View
                  </h3>
                  <p className="text-gray-600 font-sans">
                    Map integration would be implemented here with actual mapping service
                  </p>
                </div>
                
                <div className="absolute top-20 left-20">
                  <button
                    className={`p-2 rounded-full shadow-lg transition-colors ${
                      selectedProperty === 1 ? 'bg-primary-600 text-white' : 'bg-white text-primary-600'
                    }`}
                    onClick={() => setSelectedProperty(1)}
                  >
                    <HomeIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute top-32 right-32">
                  <button
                    className={`p-2 rounded-full shadow-lg transition-colors ${
                      selectedProperty === 2 ? 'bg-primary-600 text-white' : 'bg-white text-primary-600'
                    }`}
                    onClick={() => setSelectedProperty(2)}
                  >
                    <HomeIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute bottom-20 left-32">
                  <button
                    className={`p-2 rounded-full shadow-lg transition-colors ${
                      selectedProperty === 3 ? 'bg-primary-600 text-white' : 'bg-white text-primary-600'
                    }`}
                    onClick={() => setSelectedProperty(3)}
                  >
                    <HomeIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}