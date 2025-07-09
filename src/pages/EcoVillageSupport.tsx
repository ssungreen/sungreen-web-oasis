import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TreePine, CheckCircle, ArrowRight, Phone, Users, Leaf, Home, Zap, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcoVillageSupport = () => {
  const processSteps = [
    { step: 1, title: '사업신청', description: '마을공동체 신청' },
    { step: 2, title: '주민동의서 취득', description: '마을 주민 합의' },
    { step: 3, title: '현장조사', description: '설치환경 조사' },
    { step: 4, title: '승인완료', description: '사업계획 승인' },
    { step: 5, title: '설치완료', description: '시설 설치 완료' }
  ];

  const villageBenefits = [
    '마을 단위 에너지 자립',
    '친환경 마을 조성',
    '지역사회 상생',
    '지속가능한 발전',
    '공동체 활성화',
    '마을 복지시설 구축'
  ];

  const expectedEffects = [
    {
      icon: Users,
      title: '환경 오염 감소',
      description: '친환경 에너지를 통한 탄소배출 감소'
    },
    {
      icon: Zap,
      title: '개인주택에서 자가사업 실적조건 진입요건 적격',
      description: '마을 차원의 에너지 자립과 경제성 확보'
    },
    {
      icon: Home,
      title: '마을 공동시설, 부대시설, 설치여부으로 마을 활성화시설 등 마을복지시설 구축',
      description: '마을회관, 체육시설 등 공동시설을 통한 주민 복지 향상'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <TreePine className="h-12 w-12 text-green-400 mr-4" />
            <Badge className="px-8 py-4 bg-green-500/20 text-green-300 text-xl font-medium backdrop-blur-sm border border-green-400/30">
              ECO-VILLAGE SUPPORT PROJECT
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              에너지자립마을지원사업
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            에너지자립마을에 대한 정보를 확인하세요
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 사업 소개 */}
          <div className="mb-16">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
                  <TreePine className="inline-block h-8 w-8 text-green-600 mr-3" />
                  에너지 자립마을 지원사업
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-green-50 p-8 rounded-lg border border-green-200 mb-8">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">
                    에너지 자립마을(친환경 마을) 지원사업이란?
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <span className="text-green-600 font-semibold">'에너지 자립마을'</span>은 지역(마을)에서 신재생에너지를 자체생산하여<br />
                    마을공동체의 에너지자립률을 높이는 사업입니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 추진목적 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">추진목적</h2>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-200">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      지자체와에서 신재생 참여형 에너지 자립 마을공급 최적화, 지원요금 높이고,<br />
                      도시자즈 마을공급자적 형식 아래에너지자립(예정량) 설치 지원으로 경기요금 실현 및 마을참여형 추진
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 지원혜택 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">지원혜택</h2>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-green-500/10 p-6 rounded-lg border border-green-200 mb-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4">
                      총 설치비용 최대 80% 지원 (시비 50%, 도비 30% → 자부담율 20%)
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h4 className="text-lg font-bold text-blue-700 mb-2">예산</h4>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p>총 사업비 170,280만원</p>
                        <p>시비 85,140만원 / 도비 51,084만원 / 자부담 34,056만원</p>
                        <p>(23년 고압차 예산지원만큼 조성 99kW급 자가용 90kW / 마을공익시 9kW) 자부담율</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                      <h4 className="text-lg font-bold text-emerald-700 mb-2">대상</h4>
                      <p className="text-slate-600">
                        • 자가소비 170,280만원<br />
                        • 시비 85,140만원 / 도비 51,084만원 / 자부담 34,056만원<br />
                        • 23년 고압차 예산지원만큼 조성 99kW급<br />
                        (자가용 90kW / 마을공익 9kW) 자부담율
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">대상</h4>
                      <p className="text-slate-600">
                        • 자가소비 예산조성 신청가능 조건에서<br />
                        • 주택 차량 시 설치 조건 검토를 위한<br />
                        • 마을공동체 저자의 주민들
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {villageBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 진행과정 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">진행과정</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-green-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 에너지자립마을의 기대효과 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">에너지자립마을의 기대효과</h2>
            <div className="space-y-8">
              {expectedEffects.map((effect, index) => {
                const IconComponent = effect.icon;
                return (
                  <Card key={index} className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="bg-green-500/10 p-4 rounded-full">
                          <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{effect.title}</h3>
                          <p className="text-slate-600">{effect.description}</p>
                        </div>
                        <div className="hidden md:block">
                          <IconComponent className="h-12 w-12 text-green-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* 신정자적 및 지원대상 */}
          <div className="mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-green-700 mb-6">신정자적 및 지원대상</h2>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">마을공동체</h3>
                    <p className="text-lg text-slate-700 mb-6">
                      지능형모니터링시스템으로 마을공동체 예산지원, 사람들에 대한 농민안전, 주민도로 높이고,<br />
                      도시자즈 마을공급자적 형식 아래에너지자립(예정량) 설치 지원으로 경기요금 실현 및 마을참여형 추진
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-900">자체전력</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li>• 지능형기관일체기출을 서비스배포전 마을 예산지원</li>
                          <li>• 전기차 충전시설이나 지역, 식물원사를 마을공급에 활용</li>
                          <li>• 주민자치 마을공동체 공익시설과 자원순환 마을조성</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-900">자허쪽서</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li>• 께 외지자습용선별용 마을 지도 지하 리무핌별의 별고 지원방향</li>
                          <li>• 주민 비용을 회원입 최근 다원들이 일한 기여자료의 달산불전</li>
                          <li>• 무역시간 작용이 기간에서 거 근접순삼공방과 무점기기 활성도</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-green-500 to-emerald-500">
              <CardContent className="p-12 text-white">
                <TreePine className="h-16 w-16 mx-auto mb-6 text-white" />
                <h2 className="text-3xl font-bold mb-6">에너지자립마을 조성 문의</h2>
                <p className="text-xl mb-8 text-green-100">
                  지속가능한 친환경 마을을 만들어보세요<br />
                  마을공동체와 함께하는 에너지 자립 실현
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      무료 상담 신청
                    </Link>
                  </Button>
                  <div className="text-green-100">
                    <span className="text-lg">📞 031-940-7690</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcoVillageSupport;