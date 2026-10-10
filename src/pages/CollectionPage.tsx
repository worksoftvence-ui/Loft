import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { ProductCategory, ProductItem } from '../types';
import { ArrowRight, Clock, Check, Sparkles } from 'lucide-react';
import { ReadyByCalculatorWidget } from '../components/common/ReadyByCalculatorWidget';

interface CollectionPageProps {
  navigate: (route: string) => void;
  onSelectProductForOrder?: (productId: string) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ navigate, onSelectProductForOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [activeCalculatorProduct, setActiveCalculatorProduct] = useState<string>('prog-classic-4');

  const categories: { label: string; value: ProductCategory }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Memorial Programs', value: 'memorial-programs' },
    { label: 'Prayer Cards & Keepsakes', value: 'prayer-cards-keepsakes' },
    { label: 'Digital Memorials', value: 'digital-memorials' },
    { label: 'Posters & Large Format', value: 'posters-large-format' },
    { label: 'Specialty Products', value: 'specialty' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleOrderProduct = (product: ProductItem) => {
    if (onSelectProductForOrder) {
      onSelectProductForOrder(product.id);
    }
    navigate('/place-an-order');
  };

  return (
    <div className="py-12 bg-white space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F6F6B]">
            Lilies of the Field Master Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A]">
            Our Memorial Collection
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed">
            Thoughtfully crafted commemorative pieces, archival-quality programs, laminated prayer keepsakes, large format celebration displays, and interactive digital memorials.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-sm transition-all cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-[#1F6F6B] text-white shadow-xs'
                  : 'bg-[#F5EFE6] text-[#1A1A1A]/80 hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {product.highlight && (
                  <div className="absolute top-3 left-3 bg-[#1A1A1A]/85 backdrop-blur-xs text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                    {product.highlight}
                  </div>
                )}
                {product.businessDays > 0 && (
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#1F6F6B] text-xs font-bold px-2.5 py-1 rounded shadow-xs flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C9973F]" />
                    {product.businessDays} Business Days
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#1F6F6B] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs list */}
                  {product.specs && (
                    <ul className="pt-2 space-y-1.5 text-xs text-[#1A1A1A]/75">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#1F6F6B] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#1A1A1A]/60 uppercase tracking-wider font-semibold">Pricing:</span>
                    <span className="font-bold text-[#1F6F6B]">{product.startingPrice}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOrderProduct(product)}
                      className="btn-header-order flex-1 text-xs py-2.5 justify-center"
                    >
                      Order This Product
                    </button>
                    <button
                      onClick={() => {
                        setActiveCalculatorProduct(product.id);
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                      }}
                      title="Calculate ready by date"
                      className="p-2.5 border border-[#1F6F6B] text-[#1F6F6B] rounded hover:bg-[#1F6F6B] hover:text-white transition-colors cursor-pointer"
                    >
                      <Clock className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Ready Date Calculation Module */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <ReadyByCalculatorWidget initialProductId={activeCalculatorProduct} />
          </div>
        </div>

        {/* Custom Order Callout */}
        <div className="mt-14 bg-[#FAF8F5] border border-slate-200 rounded p-8 text-center max-w-3xl mx-auto space-y-4">
          <Sparkles className="w-6 h-6 text-[#C9973F] mx-auto" />
          <h3 className="font-serif text-2xl text-[#1A1A1A]">
            Need a Coordinated Family Memorial Package?
          </h3>
          <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
            We specialize in harmonizing matching memorial programs, prayer cards, bookmarks, and easel welcome boards using the exact same portraits, colors, and floral themes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigate('/place-an-order')}
              className="btn-primary text-xs"
            >
              Start Coordinated Order
            </button>
            <button
              onClick={() => navigate('/schedule-a-consultation')}
              className="btn-secondary text-xs bg-white"
            >
              Consult with a Memorial Designer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
