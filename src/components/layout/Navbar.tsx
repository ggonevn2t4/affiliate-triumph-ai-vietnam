
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm z-50 relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-primary rounded-lg w-8 h-8 flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-2xl font-display font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
            AffiliateVN
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">
              Trang chủ
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-brand-blue transition-colors font-medium">
                <span>Sản phẩm</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Bảng điều khiển
                  </Link>
                  <Link to="/ai-tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Công cụ AI
                  </Link>
                  <Link to="/analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Phân tích dữ liệu
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">
              Bảng giá
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-brand-blue transition-colors font-medium">
              Blog
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline">Đăng nhập</Button>
            </Link>
            <Link to="/register">
              <Button className="btn-gradient">Đăng ký</Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 shadow-md z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Trang chủ
            </Link>
            <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Bảng điều khiển
            </Link>
            <Link to="/ai-tools" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Công cụ AI
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Bảng giá
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Blog
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full">Đăng nhập</Button>
              </Link>
              <Link to="/register" className="w-full">
                <Button className="w-full btn-gradient">Đăng ký</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
