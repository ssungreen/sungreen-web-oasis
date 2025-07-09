import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Sun, Users, TrendingUp } from 'lucide-react';

const OpportunityIncome = () => {
  const benefits = [
    '지역 주민 소득 창출',
    '농촌 경제 활성화', 
    '친환경 에너지 생산',
    '지역 공동체 강화'
  ];

  const process = [
    { step: '01', title: '사업 계획', desc: '지역 특성에 맞는 맞춤형 계획 수립' },
    { step: '02', title: '인허가', desc: '관련 인허가 및 승인 절차 진행' },
    { step: '03', title: '시공', desc: '전문 기술진을 통한 체계적 시공' },
    { step: '04', title: '운영', desc: '지속적인 운영 관리 및 수익 창출' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">기회소득마을사업</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              지역 주민들의 소득 창출과 농촌 경제 활성화를 위한 태양광 발전 사업
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">사업 개요</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                기회소득마을사업은 농촌 지역의 유휴 부지나 건물 옥상을 활용하여 태양광 발전 시설을 설치하고, 
                이를 통해 지역 주민들이 안정적인 수익을 창출할 수 있도록 지원하는 사업입니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Sun className="h-8 w-8 text-emerald-500" />
                  <span className="font-medium text-slate-700">친환경 에너지</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-emerald-500" />
                  <span className="font-medium text-slate-700">지역 공동체</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-emerald-500" />
                  <span className="font-medium text-slate-700">안정적 수익</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-emerald-500" />
                  <span className="font-medium text-slate-700">지속가능성</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">주요 혜택</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">사업 진행 과정</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpportunityIncome;