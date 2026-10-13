'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiFilter, FiGrid, FiList } from 'react-icons/fi'
// import ListingCard from '@/components/ListingCard' // Commented out for deployment

const categories = [
  'All',
  'Electronics',
  'Furniture',
  'Clothing',
  'Books',
  'Kitchenware',
  'Sports',
  'Toys',
  'Free Items'
]

export default function ListingsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [listings, setListings] = useState<any[]>([])

  // In a real app, this would fetch from your API
  useEffect(() => {
    // Mock data for now - replace with actual API call
    const mockListings = [
      {
        id: '1',
        title: 'Vintage Turku Wooden Coffee Table',
        description: 'Beautiful vintage wooden coffee table, perfect condition. Handcrafted locally in Turku.',
        price: 45.00,
        category: 'Furniture',
        condition: 'Like New',
        images: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        location: 'Keskusta',
        sold: false,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15'),
        userId: '1'
      },
      {
        id: '2',
        title: 'Samsung Galaxy S10 - Unlocked',
        description: 'Great phone, selling because I upgraded. Works perfectly, includes charger.',
        price: 200.00,
        category: 'Electronics',
        condition: 'Good',
        images: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop',
        location: 'Iskostama',
        sold: false,
        createdAt: new Date('2024-01-14'),
        updatedAt: new Date('2024-01-14'),
        userId: '2'
      },
      {
        id: '3',
        title: 'FREE: Children\'s Winter Boots Size 32',
        description: 'In good condition, just too small now. Ready to give to another family!',
        price: 0,
        category: 'Free Items',
        condition: 'Good',
        images: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop',
        location: 'Kupittaa',
        sold: false,
        createdAt: new Date('2024-01-13'),
        updatedAt: new Date('2024-01-13'),
        userId: '3'
      },
      {
        id: '4',
        title: 'Designer Bookshelf - Minimalist Style',
        description: 'Beautiful minimalist bookshelf, barely used. Perfect for small spaces.',
        price: 85.00,
        category: 'Furniture',
        condition: 'Like New',
        images: 'https://images.unsplash.com/photo-1539185441755-769473a235be?w=800&h=600&fit=crop',
        location: 'Nummi',
        sold: false,
        createdAt: new Date('2024-01-12'),
        updatedAt: new Date('2024-01-12'),
        userId: '4'
      },
      {
        id: '5',
        title: 'Vintage Turku Teacup Set',
        description: 'Elegant ceramic teacup set, hand-painted with Finnish design.',
        price: 25.00,
        category: 'Kitchenware',
        condition: 'Good',
        images: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
        location: 'Keskusta',
        sold: false,
        createdAt: new Date('2024-01-11'),
        updatedAt: new Date('2024-01-11'),
        userId: '5'
      },
      {
        id: '6',
        title: 'Yoga Mat & Accessories',
        description: 'High-quality yoga mat with blocks and strap. Practicing minimalism!',
        price: 30.00,
        category: 'Sports',
        condition: 'Very Good',
        images: 'https://images.unsplash.com/photo-1545389336-cf9066942d96?w=800&h=600&fit=crop',
        location: 'Raunistula',
        sold: false,
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-10'),
        userId: '6'
      },
    ]
    setListings(mockListings)
  }, [])

  const filteredListings = listings.filter((listing: any) => {
    const matchesCategory = selectedCategory === 'All' || listing.category === selectedCategory
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Browse Listings
          </h1>
          <p className="text-gray-600">
            Discover pre-loved items from your neighbors in Turku
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-600"
            />
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-600">
              <option>All Locations</option>
              <option>Keskusta</option>
              <option>Kupittaa</option>
              <option>Iskostama</option>
              <option>Nummi</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary-600">
              <option>Any Price</option>
              <option>Under €50</option>
              <option>€50-€100</option>
              <option>€100+</option>
              <option>Free Only</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredListings.length} items
          </p>
          <div className="flex gap-2 bg-white rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600'}`}
            >
              <FiGrid />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600'}`}
            >
              <FiList />
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        {filteredListings.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {filteredListings.map((listing: any) => (
              <div key={listing.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className="relative w-full h-48 bg-gray-100">
                  {listing.images && (
                    <img src={listing.images.split(',')[0]} alt={listing.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{listing.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-primary-600">
                      {listing.price === 0 ? 'FREE' : `€${listing.price.toFixed(2)}`}
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{listing.condition}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{listing.location}</span>
                    <span>{new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg mb-4">
              No listings found matching your criteria.
            </p>
            <Link
              href="/listings/new"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Be the first to list an item!
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

