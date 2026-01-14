import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-14 h-14 overflow-hidden flex-shrink-0">
              <img
                src="/sungreen-logo.png"
                alt="Logo Symbol"
                className="h-14 max-w-none object-left object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white">주식회사 썬그린에너지</h3>
              <p className="text-slate-400 text-sm">Sungreen Energy Co., Ltd.</p>
            </div>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            태양광 발전시설 시공 전문기업으로서 친환경 에너지 보급과
            지속가능한 미래를 위해 최선을 다하고 있습니다.
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-amber-500" />
              <span className="text-sm text-slate-300">경기도 파주시 조리읍 뇌조로74번길 25-66</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-amber-500" />
              <span className="text-sm text-slate-300">031-944-0912</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-amber-500" />
              <span className="text-sm text-slate-300">sungreen0912@naver.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">빠른 링크</h4>
          <ul className="space-y-2">
            <li><Link to="/company" className="text-slate-300 hover:text-amber-500 transition-colors">회사소개</Link></li>
            <li><Link to="/business" className="text-slate-300 hover:text-amber-500 transition-colors">사업분야</Link></li>
            <li><Link to="/cases" className="text-slate-300 hover:text-amber-500 transition-colors">설치사례</Link></li>
            <li><Link to="/re100" className="text-slate-300 hover:text-amber-500 transition-colors">RE100 안내</Link></li>
            <li><Link to="/government" className="text-slate-300 hover:text-amber-500 transition-colors">정부지원사업</Link></li>
            <li><Link to="/contact" className="text-slate-300 hover:text-amber-500 transition-colors">문의하기</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">소셜 미디어</h4>
          <div className="flex space-x-3 mb-6">
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-emerald-500 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">무료 견적 상담</h5>
            <p className="text-sm text-white/90 mb-2">전문가와 1:1 상담받기</p>
            <Link to="/contact" className="bg-white text-slate-900 px-4 py-2 rounded font-semibold text-sm hover:bg-slate-100 transition-colors inline-block">
              상담 신청
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-8 pt-8 text-center">
        <p className="text-slate-400 text-sm">© 2025 주식회사 썬그린에너지. All rights reserved. | 사업자등록번호: 355-86-01790 | 대표: 박이순</p>
      </div>
    </div>
  </footer>;
};
export default Footer;