'use client'

import { motion } from 'framer-motion'

// Needed for plain <a> tags when the site is served under /Givello (GitHub Pages)
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-6xl md:text-7xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Vibe Exchange
          </span>
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Turku&apos;s minimalist marketplace where{' '}
          <span className="text-blue-600 font-semibold">less becomes more</span>. 
          Buy, sell, and give new life to pre-loved items while building 
          a sustainable community that values experiences over possessions.
        </motion.p>
        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href={`${BASE}/listings`}
            className="bg-blue-600 text-white px-10 py-5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Listings
          </motion.a>
          <motion.a
            href={`${BASE}/listings/new`}
            className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            List an Item
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Minimalism?
            </span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Minimalism',
                description: 'Create space for what truly matters. Research shows that reducing physical clutter can significantly decrease anxiety and increase mental clarity. Every item you let go of is a step toward freedom.',
                color: 'from-green-50 to-white',
                iconBg: 'bg-green-600'
              },
              {
                icon: '❤️',
                title: 'Altruism',
                description: 'Transform your decluttering into acts of kindness. By selling or giving away items you no longer need, you\'re not just clearing space—you\'re helping others find treasures and building genuine community connections.',
                color: 'from-blue-50 to-white',
                iconBg: 'bg-blue-600'
              },
              {
                icon: '♻️',
                title: 'Sustainability',
                description: 'Extend the life cycle of items and reduce your environmental footprint. Every secondhand purchase prevents an item from ending up in a landfill while saving precious resources for our planet.',
                color: 'from-teal-50 to-white',
                iconBg: 'bg-teal-600'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br ${value.color} hover:shadow-2xl transition-all`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className={`w-20 h-20 ${value.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Inspiring Story Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Less Hoarding, More{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Living
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            According to neuroscience research, excessive possessions can create{' '}
            <strong className="text-purple-600">chronic decision fatigue</strong> and{' '}
            <strong className="text-purple-600">increased stress levels</strong>. 
            When you choose to sell or give away items you no longer use, you&apos;re 
            not just decluttering your physical space—you&apos;re creating room for new 
            experiences, meaningful connections, and genuine peace of mind.
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of Turku residents who have discovered that{' '}
            <strong className="text-pink-600">the best things in life aren&apos;t things at all</strong>. 
            Start your journey towards intentional living today—your future self will thank you.
          </motion.p>
        </div>
      </div>

      {/* Categories Section with Images */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explore Popular{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Categories
            </span>
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', count: '152 items', emoji: '💻' },
              { name: 'Furniture', count: '89 items', emoji: '🪑' },
              { name: 'Clothing', count: '234 items', emoji: '👔' },
              { name: 'Books', count: '67 items', emoji: '📚' },
              { name: 'Kitchenware', count: '112 items', emoji: '🍳' },
              { name: 'Sports', count: '78 items', emoji: '⚽' },
              { name: 'Toys', count: '45 items', emoji: '🧸' },
              { name: 'Free Items', count: '28 items', emoji: '🎁' },
            ].map((category, index) => (
              <motion.a
                key={category.name}
                href={`${BASE}/listings?category=${category.name.toLowerCase()}`}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-xl transition-all text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2 text-lg">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium">{category.count}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Declutter Your Life?
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Start your journey towards minimalism today. List your first item 
            and discover the{' '}
            <strong>joy of letting go</strong>.
          </motion.p>
          <motion.a
            href={`${BASE}/listings/new`}
            className="inline-block bg-white text-blue-600 px-12 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started for Free →
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Vibe Exchange - Turku. 
            Built with <span className="text-green-400">minimalism</span> and care 💚
          </p>
        </div>
      </div>
    </div>
  )
}
