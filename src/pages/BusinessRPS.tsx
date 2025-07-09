import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, DollarSign, Shield, TrendingUp } from 'lucide-react';

const BusinessRPS = () => {
  const rpsFeatures = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'REC 발급',
      description: '신재생에너지 공급인증서 발급 및 관리'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: '수익 창출',
      description: 'REC 거래를 통한 추가 수익 확보'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '의무 이행',
      description: '신재생에너지 공급 의무 이행 지원'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: '시장 분석',
      description: 'REC 시장 동향 분석 및 최적 거래 전략'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">RPS사업</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              신재생에너지 공급인증서(REC) 관련 전문 서비스와 컨설팅을 제공하는 사업
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">RPS 제도란?</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              신재생에너지 공급의무화제도(RPS, Renewable Portfolio Standard)는 
              500MW 이상의 발전설비를 보유한 발전사업자에게 총 발전량의 일정 비율 이상을 
              신재생에너지로 공급하도록 의무화한 제도입니다.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {rpsFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">제공 서비스</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">REC 발급 대행</h4>
                    <p className="text-slate-600">신재생에너지 공급인증서 발급 절차 전체 대행</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">REC 거래 지원</h4>
                    <p className="text-slate-600">최적의 가격으로 REC 거래가 이루어지도록 지원</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">시장 분석</h4>
                    <p className="text-slate-600">REC 시장 동향 분석 및 거래 전략 수립</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">RPS 혜택</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">•</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">추가 수익 창출</h4>
                    <p className="text-slate-600">전력 판매 수익 외 REC 거래를 통한 추가 수익</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">•</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">안정적 판로</h4>
                    <p className="text-slate-600">정부 정책에 의한 안정적인 REC 수요 보장</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">•</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">환경 기여</h4>
                    <p className="text-slate-600">신재생에너지 확산을 통한 환경 보호 기여</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessRPS;