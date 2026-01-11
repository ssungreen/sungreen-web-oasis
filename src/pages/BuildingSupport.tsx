import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, CheckCircle, ArrowRight, Phone, DollarSign, Zap, TrendingUp, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: Definition */}
          <div className="bg-emerald-50 rounded-3xl p-10 shadow-sm border border-emerald-100 mb-16 items-center flex flex-col md:flex-row gap-8">
            <div className="bg-emerald-600 text-white rounded-2xl px-6 py-4 text-3xl font-bold whitespace-nowrap text-center">
              건물지원사업이란?
            </div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              신재생에너지 설비를 건물에 설치할 경우 설치비의 일부를 정부가 보조 지원하는 사업으로,
              건축물 또는 시설물의 소유자나 소유예정자가 신재생에너지 설비를 설치하고자 하는 경우
              보조금을 지원하여 에너지 비용 절감 및 친환경 에너지를 생산할 수 있도록 지원하는 사업입니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Section 2: Target & Scope */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Building className="h-6 w-6 mr-3 text-emerald-600" /> 지원대상
                </h3>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                  사회복지시설, 공장, 상가, 물류창고, 주차장 등 건축물 및 시설물의 소유자나 소유예정자
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Zap className="h-6 w-6 mr-3 text-emerald-600" /> 지원범위
                </h3>
                <ul className="grid grid-cols-2 gap-4">
                  {['태양광', '태양열', '지열', '연료전지 등'].map((item) => (
                    <li key={item} className="bg-emerald-50 px-4 py-2 rounded-lg text-emerald-700 font-bold text-center">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 3: Support Categories */}
            <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
              <h2 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">지원 부문 및 금액</h2>
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-emerald-400 font-bold text-lg mb-2">일반건물 (산업체)</h4>
                  <p className="text-slate-300">2023년 기준 kW당 677,000원 지원</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-emerald-400 font-bold text-lg mb-2">저소득층 (사회복지시설)</h4>
                  <p className="text-slate-300">7kW이하 일괄 9,485,000원 지원</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-emerald-400 font-bold text-lg mb-2">축산농가</h4>
                  <p className="text-slate-300">축산 부문의 에너지 비용 절감 지원</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center text-center">건물지원사업 기대효과</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <CheckCircle className="h-8 w-8 text-emerald-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">산업 경쟁력 강화</h4>
                  <p className="text-slate-600 font-medium">유휴 공간(지붕, 옥상)을 활용하여 전력을 자급자족하고 전기 요금 절감</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <CheckCircle className="h-8 w-8 text-emerald-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">ESG 경영 실천</h4>
                  <p className="text-slate-600 font-medium">탄소배출 감소를 통해 친환경 기업 이미지를 제고하고 ESG 경영 강화</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <span className="text-lg">📞 031-944-0912</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default BuildingSupport;