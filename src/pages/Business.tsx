import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Business = () => {
  const businessPrograms = [
    {
      title: '기회소득마을사업',
      description: '지역 주민들의 소득 창출을 위한 태양광 발전 사업',
      href: '/business/opportunity-income',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: '선도사업',
      description: '농촌 태양광 발전의 선도적 모델 구축 사업',
      href: '/business/leading',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'RPS사업',
      description: '신재생에너지 공급인증서 관련 사업',
      href: '/business/rps',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'RE100사업',
      description: '100% 재생에너지 전환을 위한 기업 맞춤형 솔루션',
      href: '/business/re100',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">사업분야</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            썬그린에너지는 다양한 태양광 발전 사업을 통해 지속가능한 에너지 미래를 만들어갑니다
          </p>
        </div>
      </section>

      {/* Business Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {businessPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${program.gradient} h-32 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <Link to={program.href}>
                      <Button 
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white group-hover:bg-emerald-600 group-hover:scale-105 transition-all duration-300"
                        size="lg"
                      >
                        자세히 보기
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;