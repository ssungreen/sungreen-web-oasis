
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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
    { name: '주택지원사업', href: '/government/housing' },
    { name: '건물지원사업', href: '/government/building' },
    { name: '융복합지원사업', href: '/government/fusion' },
    { name: '에너지자립마을지원사업', href: '/government/eco-village' },
  ];

  const businessSubMenu = [
    { name: '기회소득마을사업', href: '/business/opportunity-income' },
    { name: '선도사업', href: '/business/leading' },
    { name: 'RPS사업', href: '/business/rps' },
    { name: 'RE100사업', href: '/business/re100' },
  ];

  const navigation = [
    { name: '설치사례', href: '/cases' },
    { name: 'RE100 안내', href: '/re100' },
    { name: '문의하기', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isCompanyActive = () => companySubMenu.some(item => isActive(item.href));
  const isGovernmentActive = () => governmentSubMenu.some(item => isActive(item.href)) || location.pathname === '/government';
  const isBusinessActive = () => businessSubMenu.some(item => isActive(item.href)) || location.pathname === '/business';

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isCompanyActive()
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                    }`}>
                    회사소개
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4 bg-white shadow-lg border border-slate-200 rounded-lg z-50">
                      <div className="grid gap-3">
                        {companySubMenu.map((item) => (
                          <NavigationMenuLink key={item.name} asChild>
                            <Link
                              to={item.href}
                              className={`block p-3 rounded-lg transition-colors ${isActive(item.href)
                                  ? 'bg-emerald-50 text-emerald-600'
                                  : 'hover:bg-slate-50 text-slate-700'
                                }`}
                            >
                              <div className="font-medium">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isBusinessActive()
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                    }`}>
                    사업분야
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4 bg-white shadow-lg border border-slate-200 rounded-lg z-50">
                      <div className="grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/business"
                            className={`block p-3 rounded-lg transition-colors ${location.pathname === '/business'
                                ? 'bg-emerald-50 text-emerald-600'
                                : 'hover:bg-slate-50 text-slate-700'
                              }`}
                          >
                            <div className="font-medium">전체보기</div>
                          </Link>
                        </NavigationMenuLink>
                        {businessSubMenu.map((item) => (
                          <NavigationMenuLink key={item.name} asChild>
                            <Link
                              to={item.href}
                              className={`block p-3 rounded-lg transition-colors ${isActive(item.href)
                                  ? 'bg-emerald-50 text-emerald-600'
                                  : 'hover:bg-slate-50 text-slate-700'
                                }`}
                            >
                              <div className="font-medium">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isGovernmentActive()
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                    }`}>
                    정부지원사업
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4 bg-white shadow-lg border border-slate-200 rounded-lg z-50">
                      <div className="grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/government"
                            className={`block p-3 rounded-lg transition-colors ${location.pathname === '/government'
                                ? 'bg-emerald-50 text-emerald-600'
                                : 'hover:bg-slate-50 text-slate-700'
                              }`}
                          >
                            <div className="font-medium">전체보기</div>
                          </Link>
                        </NavigationMenuLink>
                        {governmentSubMenu.map((item) => (
                          <NavigationMenuLink key={item.name} asChild>
                            <Link
                              to={item.href}
                              className={`block p-3 rounded-lg transition-colors ${isActive(item.href)
                                  ? 'bg-emerald-50 text-emerald-600'
                                  : 'hover:bg-slate-50 text-slate-700'
                                }`}
                            >
                              <div className="font-medium">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive(item.href)
                    ? 'text-emerald-600 bg-emerald-50 border-b-2 border-emerald-600'
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-slate-200/50 rounded-b-xl shadow-xl">
              {/* Company submenu */}
              <div className="space-y-1">
                <div className="px-4 py-3 text-base font-bold text-slate-900">회사소개</div>
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

              {/* Business submenu */}
              <div className="space-y-1">
                <div className="px-4 py-3 text-base font-bold text-slate-900">사업분야</div>
                <Link
                  to="/business"
                  className={`block px-8 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${location.pathname === '/business'
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  전체보기
                </Link>
                {businessSubMenu.map((item) => (
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

              {/* Government submenu */}
              <div className="space-y-1">
                <div className="px-4 py-3 text-base font-bold text-slate-900">정부지원사업</div>
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
