import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Lightbulb, Zap } from 'lucide-react';

const LeadingBusiness = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: '혁신적 기술',
      description: '최신 태양광 발전 기술과 스마트 시스템 도입'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: '모델 구축',
      description: '타 지역으로 확산 가능한 표준 모델 개발'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: '선도적 접근',
      description: '농촌 태양광 발전의 새로운 패러다임 제시'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: '효율성 극대화',
      description: '최적화된 설계와 운영으로 발전 효율 향상'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">선도사업</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              농촌 태양광 발전의 선도적 모델을 구축하여 전국 확산의 기반을 마련하는 사업
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">사업 목표</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              선도사업은 농촌 지역에 혁신적인 태양광 발전 시설을 구축하여 
              전국적으로 확산 가능한 표준 모델을 만드는 것을 목표로 합니다. 
              최신 기술과 체계적인 운영 시스템을 통해 농촌 에너지 자립의 새로운 길을 제시합니다.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">선도사업의 특징</h3>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-4">기술적 우수성</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    최신 태양광 모듈과 인버터 기술 적용
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    스마트 모니터링 시스템 구축
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    최적화된 설계 및 배치 기술
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-4">사회적 가치</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    농촌 경제 활성화 및 일자리 창출
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    지역 에너지 자립도 향상
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    탄소 중립 달성 기여
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadingBusiness;