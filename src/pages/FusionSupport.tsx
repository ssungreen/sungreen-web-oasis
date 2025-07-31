import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, CheckCircle, ArrowRight, Phone, Battery, Cpu, Wifi, TrendingUp, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const FusionSupport = () => {
  const processSteps = [
    { step: 1, title: '사업신청', description: '한국에너지공단 신청' },
    { step: 2, title: '서류검토', description: '사업자격 검토' },
    { step: 3, title: '현장조사', description: '설치환경 조사' },
    { step: 4, title: '설계승인', description: '융복합 시스템 설계' },
    { step: 5, title: '설치공사', description: '통합시스템 설치' },
    { step: 6, title: '준공검사', description: '성능검증 및 승인' }
  ];

  const fusionBenefits = [
    'ESS 연계 시스템 구축',
    '스마트 모니터링 제공',
    '에너지 저장 기능',
    '효율성 극대화',
    '계통 안정성 향상',
    '전력품질 개선'
  ];

  const supportDetails = [
    {
      title: '신재생에너지 발전량',
      content: '신재생에너지에서 생산된 전력량을 자가소비하거나 마을공동체 발전사업으로 활용합니다.'
    },
    {
      title: '지원혜택',
      content: '총 설치비용 최대 80% 지원 (시비 50%, 도비 30% → 자부담율 20%)'
    },
    {
      title: '예산',
      content: '총 사업비 170,280만원\n(시비 85,140만원 / 도비 51,084만원 / 자부담 34,056만원)\n(23년 고압차 예산지원만큼 조성 99kW급 자가용 90kW / 마을공익시 9kW) 자부담율'
    }
  ];

  const targetAndEffect = [
    {
      icon: Battery,
      title: '신정자적 및 지원대상',
      description: '마을공동체',
      details: [
        '지능형모니터링시스템으로 마을공동체 예산지원',
        '전기차 충전시설이나 가동, 혹은 원하는 마을공급에 활용',
        '주민자치 마을공동체 공익시설과 자원순환 마을조성'
      ]
    },
    {
      icon: TrendingUp,
      title: '개인주택에서 자가사업 실적조건 진입요건 적격',
      description: '',
      details: [
        '지능형 모니터링 시스템 연계',
        '마을 공동시설 지원 실현성',
        '주민참여형 에너지 자립시설 확충'
      ]
    },
    {
      icon: Shield,
      title: '마을 공동시설, 부대시설, 설치여부으로 마을 활성화시설 등 마을복지시설 구축',
      description: '',
      details: [
        '마을회관, 경로당 등 공동시설 전력공급',
        '체육시설, 도서관 등 부대시설 운영',
        '마을공동체 활성화를 위한 인프라 구축'
      ]
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1581092795442-beb3b8f887df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-12 w-12 text-purple-400 mr-4" />
            <Badge className="px-8 py-4 bg-purple-500/20 text-purple-300 text-xl font-medium backdrop-blur-sm border border-purple-400/30">
              FUSION SUPPORT PROJECT
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              융복합지원사업
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            차세대 기술과 에너지 ESS 융합 솔루션사업
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
                  <Zap className="inline-block h-8 w-8 text-purple-600 mr-3" />
                  융복합지원사업
                </CardTitle>
                <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  <span className="text-purple-600 font-semibold">차세대 기술과 에너지 ESS를 융합</span>한 혁신적인 솔루션 사업입니다.<br />
                  에너지 저장시스템(ESS)과 태양광 발전을 결합하여 <span className="text-blue-600 font-semibold">최대 효율성을 실현</span>합니다.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* 추진목적 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">추진목적</h2>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-200">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      지능형모니터링시스템을 융복합하여 최적의 에너지 사용을 최적화, 지원요금 높이고,<br />
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {supportDetails.map((detail, index) => (
                <Card key={index} className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-center text-xl font-bold text-purple-600">
                      {detail.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-slate-700 whitespace-pre-line leading-relaxed">
                        {detail.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold text-slate-900">시스템 특징</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fusionBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 진행과정 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">진행과정</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && index % 3 !== 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-purple-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 신청자격 및 지원대상 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">신청자격 및 지원대상</h2>
            <div className="space-y-8">
              {targetAndEffect.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-500/10 p-3 rounded-full">
                          <IconComponent className="h-8 w-8 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                          {item.description && (
                            <p className="text-lg text-purple-600 font-semibold mb-4">{item.description}</p>
                          )}
                          <ul className="space-y-2">
                            {item.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start space-x-2">
                                <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* 융복합시스템의 기대효과 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">융복합시스템의 기대효과</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="bg-green-500/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">01</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">환경 오염 감소</h3>
                  <p className="text-slate-600">
                    친환경 에너지 생산으로<br />
                    탄소배출량 대폭 감소
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="bg-blue-500/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">02</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">개인주택에서 자가사업 실적조건 진입요건 적격</h3>
                  <p className="text-slate-600">
                    개인 에너지 자립을 통한<br />
                    경제적 효과 실현
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="bg-purple-500/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">03</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">마을 공동시설, 부대시설, 설치여부으로 마을 활성화시설 등 마을복지시설 구축</h3>
                  <p className="text-slate-600">
                    지역사회 발전과<br />
                    공동체 활성화 기여
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-500 to-blue-500">
              <CardContent className="p-12 text-white">
                <Zap className="h-16 w-16 mx-auto mb-6 text-white" />
                <h2 className="text-3xl font-bold mb-6">융복합 에너지 시스템 문의</h2>
                <p className="text-xl mb-8 text-purple-100">
                  차세대 에너지 융복합 시스템으로<br />
                  스마트한 에너지 자립을 실현하세요
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      무료 상담 신청
                    </Link>
                  </Button>
                  <div className="text-purple-100">
                    <span className="text-lg">📞 031-944-0912</span>
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

export default FusionSupport;