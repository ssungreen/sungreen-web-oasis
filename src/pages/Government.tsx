import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, Building, Zap, TreePine, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const Government = () => {
  const supportPrograms = [{
    id: 'housing',
    title: '주택지원사업',
    subtitle: 'HOUSING SUPPORT PROJECT',
    description: '소유자 거주용 단독 주택용 태양광사업',
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    benefits: ['설치비 80% 지원 (시비 50%, 도비 30%)', '자부담율 20%', '설치용량 3kW 이상 ~ 9kW 이하', '한국에너지공단 우수 시공업체'],
    process: ['사업신청', '현장조사', '설계승인', '설치공사', '준공검사', '사용승인'],
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 'building',
    title: '건물지원사업',
    subtitle: 'BUILDING SUPPORT PROJECT',
    description: '상업시설이나 다른 용도용 건물지원사업',
    icon: Building,
    color: 'from-emerald-500 to-emerald-600',
    benefits: ['설치비 70% 지원', '대용량 설치 가능', '상업시설 맞춤 설계', '전문 A/S 서비스'],
    process: ['사업신청', '서류검토', '현장조사', '설계승인', '설치공사', '준공검사'],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 'fusion',
    title: '융복합지원사업',
    subtitle: 'FUSION SUPPORT PROJECT',
    description: '차세대 기술과 에너지 ESS 융합 솔루션사업',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    benefits: ['ESS 연계 시스템', '스마트 모니터링', '에너지 저장 기능', '효율성 극대화'],
    process: ['기술검토', '시스템 설계', '융합 솔루션', '설치 및 연동', '성능 테스트', '운영 최적화'],
    image: 'https://images.unsplash.com/photo-1581092795442-beb3b8f887df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 'eco-village',
    title: '에너지자립마을지원사업',
    subtitle: 'ECO-VILLAGE SUPPORT PROJECT',
    description: '에너지자립마을에 대한 정보를 확인하세요',
    icon: TreePine,
    color: 'from-green-500 to-green-600',
    benefits: ['마을 단위 에너지 자립', '친환경 마을 조성', '지역사회 상생', '지속가능한 발전'],
    process: ['마을 계획', '주민 동의', '설계 및 승인', '단계별 시공', '연계 시스템', '운영 관리'],
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <Badge className="mb-6 px-8 py-4 bg-emerald-500/20 text-emerald-300 text-xl font-medium backdrop-blur-sm border border-emerald-400/30">
            GOVERNMENT SUPPORT
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              정부지원사업
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8">
            정부의 다양한 지원 정책을 통해 더욱 경제적이고 효율적인<br />
            태양광 발전시설을 설치하실 수 있습니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-emerald-300 font-semibold">4가지 지원사업</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-blue-300 font-semibold">맞춤형 솔루션</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-purple-300 font-semibold">전문 컨설팅</span>
            </div>
          </div>
        </div>
      </section>

      {/* Support Programs Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              정부지원사업<br />
              <span className="text-emerald-600">프로그램</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              각각의 사업 유형에 맞는 최적의 지원 프로그램을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return <Card key={program.id} className="group border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="relative">
                    <img src={program.image} alt={program.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <div className={`bg-gradient-to-r ${program.color} p-3 rounded-xl mb-3`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
                      <p className="text-sm text-gray-200 font-medium">{program.subtitle}</p>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">지원 혜택</h4>
                      <div className="space-y-3">
                        {program.benefits.map((benefit, benefitIndex) => <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-slate-600">{benefit}</span>
                          </div>)}
                      </div>
                    </div>

                    {/* Process */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">진행 과정</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.process.map((step, stepIndex) => <div key={stepIndex} className="flex items-center">
                            <Badge variant="outline" className="text-xs px-3 py-1">
                              {stepIndex + 1}. {step}
                            </Badge>
                            {stepIndex < program.process.length - 1 && <ArrowRight className="h-3 w-3 text-slate-400 mx-1" />}
                          </div>)}
                      </div>
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white font-semibold py-3 text-lg transition-all duration-300`} asChild>
                      <Link to={`/government/${program.id}`}>
                        자세히 보기
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            정부지원사업 무료 상담
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            각 사업별 맞춤형 상담을 통해 최적의 솔루션을 제안해드립니다.<br />
            전문가와 1:1 상담으로 정확한 정보를 확인하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/contact">
                무료 상담 신청
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="text-white/90">
              <span className="text-lg">📞 031-944-0912</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Government;