import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Factory, Leaf, Users } from 'lucide-react';

const BusinessRE100 = () => {
  const re100Benefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: '글로벌 경쟁력',
      description: '국제적 ESG 기준 충족으로 글로벌 시장 진출 유리'
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: '기업 이미지',
      description: '친환경 기업 이미지 구축으로 브랜드 가치 향상'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: '탄소 중립',
      description: '2050 탄소 중립 목표 달성에 기여'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '사회적 책임',
      description: '기업의 사회적 책임 이행으로 신뢰도 증대'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">RE100사업</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              100% 재생에너지 전환을 통한 기업의 지속가능한 미래를 위한 맞춤형 솔루션
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">RE100이란?</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              RE100(Renewable Energy 100%)은 기업이 사용하는 전력의 100%를 
              재생에너지로 조달하겠다는 국제 이니셔티브입니다. 
              전 세계 주요 기업들이 참여하여 기후 변화 대응과 지속가능한 경영을 실천하고 있습니다.
            </p>
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-8 inline-block">
              <div className="text-4xl font-bold">300+</div>
              <div className="text-amber-100">글로벌 기업 참여</div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {re100Benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Solutions Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">RE100 솔루션</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="font-bold text-slate-900 mb-2">자가발전 설비</h4>
                  <p className="text-slate-600">기업 부지 내 태양광 발전 시설 구축</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="font-bold text-slate-900 mb-2">PPA 계약</h4>
                  <p className="text-slate-600">장기 전력구매계약을 통한 재생에너지 조달</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="font-bold text-slate-900 mb-2">REC 구매</h4>
                  <p className="text-slate-600">신재생에너지 공급인증서 구매</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="font-bold text-slate-900 mb-2">컨설팅</h4>
                  <p className="text-slate-600">RE100 이행 전략 수립 및 관리 지원</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">참여 효과</h3>
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-amber-800 mb-2">비용 절감</h4>
                  <p className="text-amber-700">장기적으로 안정적인 전력 비용 확보</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-amber-800 mb-2">리스크 관리</h4>
                  <p className="text-amber-700">화석연료 가격 변동 리스크 회피</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-amber-800 mb-2">투자 유치</h4>
                  <p className="text-amber-700">ESG 투자 유치 및 자금 조달 유리</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-amber-800 mb-2">규제 대응</h4>
                  <p className="text-amber-700">탄소 관련 규제 선제적 대응</p>
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

export default BusinessRE100;