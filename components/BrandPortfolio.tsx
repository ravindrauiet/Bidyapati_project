import Image from 'next/image';

const BrandPortfolio = () => {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Brand Portfolio & Infrastructure</h3>
      
      {/* Brand Logos Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
        <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Brand Portfolio</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center">
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/hul.png" 
              alt="HUL - Hindustan Unilever" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/enami.jpeg" 
              alt="Emami - Healthy & Tasty" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/bestchoice.jpeg" 
              alt="Best Choice - Refined Soybean Oil" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/catch.jpeg" 
              alt="Catch - Spices" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/pansari.jpeg" 
              alt="Pansari - Oil | Rice | Atta | Spices" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/fena.jpeg" 
              alt="Fena - फेना ही लेना" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/sparsh.png" 
              alt="Sparsh - Quality" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/mother.png" 
              alt="Mother's Recipe - Taste The Love" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/mtr.png" 
              alt="MTR - Foods" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/eastern.png" 
              alt="Eastern - Products" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/nova.png" 
              alt="Nova - Dairy Products" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/kidys.png" 
              alt="Kidys - Bakery" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/lijjat.jpeg" 
              alt="Lijjat - पापड़" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/ds.png" 
              alt="DS Group - Premium" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/marvel.jpeg" 
              alt="Marvel - Tea" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/orkla.jpeg" 
              alt="Orkla - India" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="bg-white rounded-xl p-4 h-32 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Image 
              src="/images/brands/wicked.jpeg" 
              alt="Wicked Gud - Premium" 
              width={80} 
              height={80} 
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>
        <p className="text-center text-gray-600 mt-6">We partner with leading FMCG brands across categories including Edible Oils, Rice, Sugar, Spices, Dry Fruits, FMCG & Cosmetics</p>
      </div>

      {/* Warehouse Images Section - Commented Out */}
      {/*
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
        <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Infrastructure</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg p-6 h-48 flex items-center justify-center">
            <p className="text-gray-500 text-center">Delhi-NCR Warehouse Image</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 h-48 flex items-center justify-center">
            <p className="text-gray-500 text-center">Bihar Warehouse Image</p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-4">Strategic warehouse locations for efficient distribution</p>
      </div>
      */}
    </div>
  );
};

export default BrandPortfolio;
