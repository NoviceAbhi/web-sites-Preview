import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Videos() {
  return (
    <main>
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Property Video Tours
            </h1>
            <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700 mb-4">
                Here is Property Tour Video
              </p>
              <p className="text-gray-600">
                Virtual tours and property videos will be available soon. Contact us for more information about our featured properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}