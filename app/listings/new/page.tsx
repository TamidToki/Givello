'use client'

import { useState } from 'react'
import { FiUpload, FiX, FiMapPin } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function NewListingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    price: '',
    location: '',
    images: [] as string[]
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    router.push('/listings')
  }

  const categories = [
    'Electronics',
    'Furniture',
    'Clothing',
    'Books',
    'Kitchenware',
    'Sports',
    'Toys',
    'Appliances',
    'Decor',
    'Other',
    'Free Items'
  ]

  const conditions = ['New', 'Like New', 'Good', 'Fair', 'Poor']

  const turkuNeighborhoods = [
    'Keskusta',
    'Kupittaa',
    'Iskostama',
    'Nummi',
    'Raunistula',
    'Länsi',
    'Suikkila',
    'VIIRI'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            List an Item
          </h1>
          <p className="text-gray-600">
            Help someone find their perfect item while decluttering your space
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-lg">
          <h3 className="font-semibold text-primary-900 mb-2">
            💚 Embrace Minimalism
          </h3>
          <p className="text-primary-800 text-sm">
            Remember: when you let go of things you no longer need, you&apos;re not just 
            clearing space—you&apos;re creating freedom and reducing your environmental impact. 
            Someone else might treasure what you&apos;re ready to release.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label htmlFor="title" className="block font-semibold text-gray-900 mb-2">
              What are you selling? *
            </label>
            <input
              type="text"
              id="title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Vintage Turku Wooden Coffee Table"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600"
            />
          </div>

          {/* Description */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label htmlFor="description" className="block font-semibold text-gray-900 mb-2">
              Tell us more about it *
            </label>
            <textarea
              id="description"
              required
              rows={6}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the condition, any imperfections, why you're selling it, dimensions, etc."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600 resize-none"
            />
          </div>

          {/* Category & Condition */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label htmlFor="category" className="block font-semibold text-gray-900 mb-2">
                Category *
              </label>
              <select
                id="category"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600"
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label htmlFor="condition" className="block font-semibold text-gray-900 mb-2">
                Condition *
              </label>
              <select
                id="condition"
                required
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600"
              >
                <option value="">Select condition</option>
                {conditions.map(cond => (
                  <option key={cond} value={cond}>{cond}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Price & Location */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label htmlFor="price" className="block font-semibold text-gray-900 mb-2">
                Price (€) *
              </label>
              <input
                type="number"
                id="price"
                required
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="0.00 (use 0 for free)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600"
              />
              <p className="text-xs text-gray-500 mt-1">
                Use 0 for free items or donations
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <label htmlFor="location" className="block font-semibold text-gray-900 mb-2">
                Location (Turku neighborhood) *
              </label>
              <select
                id="location"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-600"
              >
                <option value="">Select neighborhood</option>
                {turkuNeighborhoods.map(hood => (
                  <option key={hood} value={hood}>{hood}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Images */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label className="block font-semibold text-gray-900 mb-2">
              Photos (up to 5)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-600 transition-colors">
              <FiUpload className="mx-auto text-4xl text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">
                Click or drag to upload photos
              </p>
              <p className="text-sm text-gray-500">
                Add clear photos to attract more buyers
              </p>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Publishing...' : 'Publish Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

