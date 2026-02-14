
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const companySubMenu = [
    { name: '인사말', href: '/greeting' },
    { name: '회사연혁', href: '/history' },
    { name: '면허 및 인증', href: '/certifications' },
    { name: '오시는 길', href: '/location' },
  ];

  const governmentSubMenu = [
    { name: '건물지원', href: '/government/building' },
    { name: '주택지원', href: '/government/housing' },
    { name: '융복합지원', href: '/government/fusion' },
    { name: 'RPS 사업', href: '/government/rps' },
  ];

  // 경기도 지원사업 그룹형 구조
  const gyeonggiBusinessMenu = {
    housing: {
      title: '주택태양광 지원사업',
      items: [
        { name: '경기도 주택태양광', href: '/business/housing-support' },
        { name: '주택태양광이란?', href: '/business/housing-intro' },
        { name: '경기도 주택태양광 지원사업', href: '/business/housing-business' },
        { name: '사업 진행절차', href: '/business/housing-process' },
      ]
    },
    re100: {
      title: '경기도민 RE100 사업',
      items: [
        { name: '아파트 RE100 지원', href: '/business/apartment-re100' },
        { name: '에너지 자립마을 조성', href: '/business/eco-village' },
        { name: '에너지 기회소득마을 조성', href: '/business/opportunity-income' },
        { name: '경기 RE100 선도사업', href: '/business/leading' },
      ]
    }
  };

  const re100SubMenu = [
    { name: 'RE100 안내', href: '/re100' },
    { name: 'RE100 사업', href: '/business/re100' },
  ];

  const navigation = [
    { name: '설치사례', href: '/cases' },
    { name: '문의하기', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isCompanyActive = () => companySubMenu.some(item => isActive(item.href));
  const isGovernmentActive = () => governmentSubMenu.some(item => isActive(item.href)) || location.pathname === '/government';
  const isGyeonggiActive = () => {
    const allItems = [...gyeonggiBusinessMenu.housing.items, ...gyeonggiBusinessMenu.re100.items];
    return allItems.some(item => isActive(item.href));
  };
  const isRE100Active = () => re100SubMenu.some(item => isActive(item.href));

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <img
                src="/sungreen-logo.png"
                alt="주식회사 썬그린에너지"
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* 회사소개 */}
            <div className="relative group">
              <button className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isCompanyActive()
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}>
                회사소개
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-48 p-2 bg-white shadow-xl border border-slate-200 rounded-xl overflow-hidden">
                  <div className="grid gap-1">
                    {companySubMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${isActive(item.href)
                          ? 'bg-emerald-50 text-emerald-600 font-bold'
                          : 'hover:bg-slate-50 text-slate-700 font-medium'
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 경기도지원사업 */}
            <div className="relative group">
              <button className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isGyeonggiActive()
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}>
                경기도지원사업
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-[520px] p-6 bg-white shadow-xl border border-slate-200 rounded-xl">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Housing Support Group */}
                    <div>
                      <div className="text-[13px] font-black text-slate-900 mb-4 px-3 border-b border-slate-100 pb-2">
                        {gyeonggiBusinessMenu.housing.title}
                      </div>
                      <div className="grid gap-1">
                        {gyeonggiBusinessMenu.housing.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block p-3 rounded-lg transition-colors text-[13px] ${isActive(item.href)
                              ? 'bg-emerald-50 text-emerald-600 font-bold'
                              : 'hover:bg-slate-50 text-slate-600 font-medium'
                              }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* RE100 Project Group */}
                    <div>
                      <div className="text-[13px] font-black text-slate-900 mb-4 px-3 border-b border-slate-100 pb-2">
                        {gyeonggiBusinessMenu.re100.title}
                      </div>
                      <div className="grid gap-1">
                        {gyeonggiBusinessMenu.re100.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block p-3 rounded-lg transition-colors text-[13px] ${isActive(item.href)
                              ? 'bg-emerald-50 text-emerald-600 font-bold'
                              : 'hover:bg-slate-50 text-slate-600 font-medium'
                              }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 정부지원사업 */}
            <div className="relative group">
              <button className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isGovernmentActive()
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}>
                정부지원사업
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-48 p-2 bg-white shadow-xl border border-slate-200 rounded-xl overflow-hidden">
                  <div className="grid gap-1">
                    <Link
                      to="/government"
                      className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${location.pathname === '/government'
                        ? 'bg-emerald-50 text-emerald-600 font-bold'
                        : 'hover:bg-slate-50 text-slate-700 font-medium'
                        }`}
                    >
                      전체보기
                    </Link>
                    {governmentSubMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${isActive(item.href)
                          ? 'bg-emerald-50 text-emerald-600 font-bold'
                          : 'hover:bg-slate-50 text-slate-700 font-medium'
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RE100 안내 */}
            <div className="relative group">
              <button className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isRE100Active()
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}>
                RE100 안내
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-48 p-2 bg-white shadow-xl border border-slate-200 rounded-xl overflow-hidden">
                  <div className="grid gap-1">
                    {re100SubMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${isActive(item.href)
                          ? 'bg-emerald-50 text-emerald-600 font-bold'
                          : 'hover:bg-slate-50 text-slate-700 font-medium'
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive(item.href)
                  ? 'text-emerald-600 bg-emerald-50 font-bold'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-slate-200/50 rounded-b-xl shadow-xl max-h-[80vh] overflow-y-auto">
              {/* Company submenu */}
              <div className="space-y-1">
                <div className="px-4 py-3 text-base font-bold text-slate-900 border-l-4 border-emerald-500 ml-2">회사소개</div>
                {companySubMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-8 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive(item.href)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Gyeonggi Support Grouped Submenu */}
              <div className="space-y-4">
                <div className="px-4 py-2 text-base font-bold text-slate-900 bg-slate-50 rounded-lg ml-2">경기도지원사업</div>

                {/* Category: Housing */}
                <div className="ml-4 space-y-1">
                  <div className="px-4 py-3 text-sm font-black text-slate-900 border-b border-slate-100 mb-2">{gyeonggiBusinessMenu.housing.title}</div>
                  {gyeonggiBusinessMenu.housing.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-8 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${isActive(item.href)
                        ? 'text-emerald-600 bg-emerald-50 border-r-4 border-emerald-500 rounded-r-none'
                        : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-50'
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Category: RE100 */}
                <div className="ml-4 space-y-1">
                  <div className="px-4 py-3 text-sm font-black text-slate-900 border-b border-slate-100 mb-2">{gyeonggiBusinessMenu.re100.title}</div>
                  {gyeonggiBusinessMenu.re100.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-8 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${isActive(item.href)
                        ? 'text-emerald-600 bg-emerald-600/5 border-r-4 border-emerald-500 rounded-r-none'
                        : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-50'
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Government submenu */}
              <div className="space-y-1">
                <div className="px-4 py-3 text-base font-bold text-slate-900 border-l-4 border-emerald-500 ml-2">정부지원사업</div>
                <Link
                  to="/government"
                  className={`block px-8 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${location.pathname === '/government'
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  전체보기
                </Link>
                {governmentSubMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-8 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive(item.href)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* RE100 Submenu */}
              <div className="space-y-1">
                <div className="px-4 py-3 text-base font-bold text-slate-900 border-l-4 border-emerald-500 ml-2">RE100 안내</div>
                {re100SubMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-8 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive(item.href)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${isActive(item.href)
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
