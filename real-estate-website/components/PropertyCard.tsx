'use client'

import { useState } from 'react'
import { Bed, Bath, Square, MapPin, Heart, Play, School, Coffee, TreePine, Star, Zap, Award, Eye } from 'lucide-react'
import Image from 'next/image'
import VideoModal from './VideoModal'

interface PropertyCardProps {
  property: {
    id: number
    title: string
    price: string
    location: string
    bedrooms: number
    bathrooms: number
    area: string
    image: string
    type: string
    featured?: boolean
    videoUrl?: string
    lifestyleTags?: string[]
    nearbyLandmarks?: string[]
    rating?: number
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    isPremium?: boolean
    discount?: string
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div 
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            width={400}
            height={280}
            className={`w-full h-64 object-cover transition-all duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              {property.type}
            </span>
            
            {property.isNew && (
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                NEW
              </span>
            )}
            
            {property.isHot && (
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1">
                <Zap className="w-3 h-3" />
                HOT
              </span>
            )}
            
            {property.isPremium && (
              <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1">
                <Award className="w-3 h-3" />
                PREMIUM
              </span>
            )}
            
            {property.discount && (
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                {property.discount}
              </span>
            )}
          </div>
          
          {/* Top Right Actions */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full shadow-lg transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-500 text-white scale-110' 
                  : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white hover:scale-110'
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            
            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-gray-600">
              <Eye className="h-5 w-5" />
            </button>
          </div>
          
          {/* Video Play Button */}
          {property.videoUrl && (
            <button 
              onClick={() => setIsVideoOpen(true)}
              className={`absolute bottom-4 right-4 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg transition-all duration-300 ${
                isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
              } hover:shadow-xl`}
            >
              <Play className="h-5 w-5" />
            </button>
          )}
          
          {/* Rating Badge */}
          {property.rating && (
            <div className={`absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Location */}
          <div className="flex items-center text-gray-500 mb-3">
            <MapPin className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm font-medium">{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {property.title}
          </h3>

          {/* Property Details */}
          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center text-gray-600">
              <Bed className="h-4 w-4 mr-1 text-blue-500" />
              <span className="text-sm font-medium">{property.bedrooms}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bath className="h-4 w-4 mr-1 text-blue-500" />
              <span className="text-sm font-medium">{property.bathrooms}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Square className="h-4 w-4 mr-1 text-blue-500" />
              <span className="text-sm font-medium">{property.area}</span>
            </div>
          </div>

          {/* Lifestyle Tags */}
          {property.lifestyleTags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {property.lifestyleTags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Nearby Landmarks */}
          {property.nearbyLandmarks && (
            <div className="flex items-center gap-3 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                {property.nearbyLandmarks.includes('School') && (
                  <div className="flex items-center gap-1">
                    <School className="h-4 w-4 text-green-500" />
                    <span className="text-xs">School</span>
                  </div>
                )}
                {property.nearbyLandmarks.includes('Cafe') && (
                  <div className="flex items-center gap-1">
                    <Coffee className="h-4 w-4 text-amber-500" />
                    <span className="text-xs">Cafe</span>
                  </div>
                )}
                {property.nearbyLandmarks.includes('Park') && (
                  <div className="flex items-center gap-1">
                    <TreePine className="h-4 w-4 text-green-600" />
                    <span className="text-xs">Park</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-blue-600">
                {property.price}
              </span>
              <div className="text-xs text-gray-500 mt-1">Starting price</div>
            </div>
            
            <a href={`/property/${property.id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-md sm:rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md text-xs inline-block text-center">
              View Details
            </a>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    
      {/* Video Modal */}
      {property.videoUrl && (
        <VideoModal 
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl={property.videoUrl}
          title={property.title}
        />
      )}
    </>
  )
}