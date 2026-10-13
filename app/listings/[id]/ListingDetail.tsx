'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMapPin, FiClock, FiHeart, FiShare2, FiMessageCircle } from 'react-icons/fi'
import { formatDistance } from 'date-fns'

export default function ListingDetail({ params }: { params: { id: string } }) {
  const [listing, setListing] = useState<any>(null)
  const [user, setUser] = useState<any>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockListing = {
      id: params.id,
      title: 'Vintage Turku Wooden Coffee Table',
      description: `This beautiful vintage wooden coffee table is in excellent condition. 
      It's been a family heirloom but I'm embracing minimalism and letting go of furniture 
      that doesn't spark joy anymore. The table has a warm, natural wood finish and would 
      make a perfect centerpiece for any living room. Dimensions: 120cm x 60cm x 45cm.`,
      price: 45.00,
      category: 'Furniture',
      condition: 'Like New',
      images: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop,https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop,https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop',
      location: 'Keskusta, Turku',
      sold: false,
      createdAt: new Date('2024-01-15'),
      userId: '1'
    }

    const mockUser = {
      id: '1',
      name: 'Emma Virtanen',
      location: 'Keskusta',
      followerCount: 42,
      followingCount: 38
    }

    setListing(mockListing)
    setUser(mockUser)
  }, [params.id])

  if (!listing) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg text-gray-600">Loading...</div>
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          {' > '}
          <Link href="/listings" className="hover:text-primary-600">Listings</Link>
          {' > '}
          <span className="text-gray-900">{listing.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                {listing.images && listing.images.split(',')[activeImageIndex] ? (
                  <img
                    src={listing.images.split(',')[activeImageIndex]}
                    alt={listing.title}
                    className="max-w-full max-h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400 text-lg">No Image</div>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {listing.images && listing.images.split(',').length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {listing.images.split(',').map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`rounded-lg overflow-hidden border-2 h-20 ${
                      activeImageIndex === index ? 'border-primary-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${listing.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="bg-white rounded-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {listing.description}
              </p>
            </div>

            {/* Similar Items */}
            <div className="bg-white rounded-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Similar Items</h2>
              <p className="text-gray-500">More items in {listing.category} category...</p>
            </div>
          </div>

          {/* Right Column - Details & Seller Info */}
          <div className="lg:col-span-1">
            {/* Price & Actions */}
            <div className="bg-white rounded-lg p-6 mb-6 sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  {listing.price === 0 ? (
                    <span className="text-4xl font-bold text-green-600">FREE</span>
                  ) : (
                    <span className="text-4xl font-bold text-primary-600">€{listing.price.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FiHeart className="text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FiShare2 className="text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium w-24">Category:</span>
                  <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded text-sm">
                    {listing.category}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium w-24">Condition:</span>
                  <span>{listing.condition}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiMapPin className="mr-2" />
                  <span>{listing.location}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <FiClock className="mr-2" />
                  <span>
                    {formatDistance(new Date(listing.createdAt), new Date(), { addSuffix: true })}
                  </span>
                </div>
              </div>

              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-3 flex items-center justify-center space-x-2">
                <FiMessageCircle />
                <span>Message Seller</span>
              </button>

              {listing.price > 0 && (
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Make an Offer
                </button>
              )}
            </div>

            {/* Seller Info */}
            {user && (
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Seller</h3>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <Link href={`/users/${user.id}`} className="font-semibold text-gray-900 hover:text-primary-600">
                      {user.name}
                    </Link>
                    <p className="text-sm text-gray-500 flex items-center">
                      <FiMapPin className="mr-1" />
                      {user.location}
                    </p>
                    <div className="flex gap-4 text-sm text-gray-500 mt-2">
                      <span>{user.followerCount} followers</span>
                      <span>{user.followingCount} following</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/users/${user.id}`}
                  className="block text-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

