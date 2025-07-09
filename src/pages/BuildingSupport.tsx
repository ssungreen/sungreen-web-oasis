import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, CheckCircle, ArrowRight, Phone, DollarSign, Zap, TrendingUp, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const BuildingSupport = () => {
  const processSteps = [
    { step: 1, title: '사업신청', description: '한국에너지공단 신청' },
    { step: 2, title: '서류검토', description: '신청서류 검토 및 승인' },
    { step: 3, title: '현장조사', description: '설치 가능성 조사' },
    { step: 4, title: '설계승인', description: '시공업체 선정 및 설계' },
    { step: 5, title: '설치공사', description: '태양광 설치 공사' }
  ];

  const supportDetails = [
    { 
      title: '일반', 
      support: '설치비 kW당 677,000원',
      capacity: '3kW ~ 1,000kW 미만',
      amount: '최대 1,000,000원'
    },
    {
      title: '저소득',
      support: 'kW당 1,355,000원 / 7kW이하 일괄 9,1,000,000원',
      capacity: '3kW ~ 7kW',
      amount: '최대 9,485,000원'
    }
  ];

  const businessBenefits = [
    '최대 70% 설치비 지원',
    '대용량 설치 가능',
    '상업시설 맞춤 설계',
    '전문 A/S 서비스',
    '20년 설비 보증',
    '발전량 모니터링 시스템'
  ];

  const expectedEffects = [
    {
      icon: DollarSign,
      title: '수익 창출',
      description: '전력 판매를 통한 안정적 수익',
      color: 'text-green-600',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: TrendingUp,
      title: '전기료 절감',
      description: '자가소비를 통한 전력비 절감',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Award,
      title: '친환경 기업',
      description: 'ESG 경영과 탄소중립 실현',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-500/10'
    },
    {
      icon: Target,
      title: '투자 수익',
      description: '약 7-10년 투자금 회수',
      color: 'text-purple-600',
      bgColor: 'bg-purple-500/10'
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Building className="h-12 w-12 text-emerald-400 mr-4" />
            <Badge className="px-8 py-4 bg-emerald-500/20 text-emerald-300 text-xl font-medium backdrop-blur-sm border border-emerald-400/30">
              BUILDING SUPPORT PROJECT
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              건물지원사업
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            상업시설이나 다른 용도용 건물지원사업
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
                <CardTitle className="text-3xl font-bold text-slate-900 mb-4">건물지원사업이란?</CardTitle>
                <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  공장·창고·축사·기타 건물용 태양광에 대해 <span className="text-emerald-600 font-semibold">정부에서 지원</span>하는 사업입니다.<br />
                  상업용, 산업용 건물의 <span className="text-blue-600 font-semibold">지붕이나 유휴부지</span>에 설치할 수 있으며, 대용량 설치가 가능합니다.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* 지원현황 및 혜택 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">지원현황 및 혜택</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {supportDetails.map((support, index) => (
                <Card key={index} className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold text-emerald-600">
                      {support.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-4">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-600 mb-2">지원금액</p>
                        <p className="text-lg font-semibold text-emerald-700">{support.support}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-600 mb-2">설치용량</p>
                        <p className="text-lg font-semibold text-blue-700">{support.capacity}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-600 mb-2">최대지원금</p>
                        <p className="text-lg font-semibold text-purple-700">{support.amount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold text-slate-900">추가 혜택</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businessBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 진행절차 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">진행절차</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="bg-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-emerald-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 지원과정 및 절차서 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">지원과정 및 절차서</h2>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">2023년 탄소중립 건물지원사업</h3>
                    <p className="text-blue-600">태양광발전설비 보급을 위한 정부 지원사업</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-900">신청자격</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 공장, 창고, 축사 등 건물 소유자</li>
                      <li>• 건물 사용권한을 가진 임차인</li>
                      <li>• 법인 또는 개인사업자</li>
                      <li>• 전기사업법에 따른 발전사업자</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-900">지원조건</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 3kW 이상 1,000kW 미만</li>
                      <li>• 모듈 효율 19% 이상</li>
                      <li>• 인버터 효율 95% 이상</li>
                      <li>• KC 인증 제품 사용</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 기대효과 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">기대효과</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expectedEffects.map((effect, index) => {
                const IconComponent = effect.icon;
                return (
                  <Card key={index} className="border-0 shadow-xl text-center hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className={`${effect.bgColor} p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`h-10 w-10 ${effect.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{effect.title}</h3>
                      <p className="text-slate-600">{effect.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* 상담 및 문의 */}
          <div className="text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-500 to-blue-500">
              <CardContent className="p-12 text-white">
                <Building className="h-16 w-16 mx-auto mb-6 text-white" />
                <h2 className="text-3xl font-bold mb-6">건물용 태양광 설치 문의</h2>
                <p className="text-xl mb-8 text-emerald-100">
                  태양광 설치를 원하시면 전국 어디든 검정완료!<br />
                  사업계획서 작성부터 사업승인까지 원스탑 서비스 제공
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      무료 상담 신청
                    </Link>
                  </Button>
                  <div className="text-emerald-100">
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

export default BuildingSupport;