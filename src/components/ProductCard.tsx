import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            {formatPrice(product.price)}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;