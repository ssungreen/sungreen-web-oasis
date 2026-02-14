import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, CheckCircle, ArrowRight, Phone, DollarSign, Zap, TrendingUp, Award, Target, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
      title: '일반건물',
      support: '설치비 kW당 972,000원 ~ 1,009,000원 지원',
      capacity: '최대 200kW 지원',
      amount: '설치비의 약 50% 내외 지원'
    },
    {
      title: '축산농가·사회복지시설',
      support: 'kW당 1,120,000원 ~ 1,167,000원 지원',
      capacity: '최대 200kW 지원',
      amount: '특수 목적 시설 우대 지원'
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
              건물지원
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
                  <Zap className="h-6 w-6 mr-3 text-emerald-600" /> 지원내용
                </h3>
                <ul className="space-y-3">
                  <li className="bg-emerald-50 px-6 py-3 rounded-xl text-emerald-700 font-bold text-center leading-relaxed">
                    해당 건물의 자가소비에 한하여 지원
                  </li>
                  <li className="bg-red-50 px-6 py-3 rounded-xl text-red-600 font-bold text-center leading-relaxed border border-red-100">
                    전력거래, 판매는 지원불가
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Support Categories */}
            <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
              <h2 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">지원 부문</h2>

              <div className="space-y-6">
                {/* Highlighted Self-Burden Block */}
                <div className="bg-gradient-to-r from-emerald-900/40 to-slate-800 p-6 rounded-xl border border-emerald-500/30 flex items-center justify-between group hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-emerald-100 block">지원 자부담 비율</span>
                      <span className="text-sm text-slate-400">정부지원금 외 본인 부담금</span>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-emerald-400">60%</span>
                </div>

                <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-emerald-400 font-bold text-lg mb-2">일반건물</h4>
                  <p className="text-slate-300">kW당 972,000원 ~ 1,009,000원 지원</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-emerald-400 font-bold text-lg mb-2">축사 및 축산시설</h4>
                  <p className="text-slate-300">kW당 1,120,000원 ~ 1,167,000원 지원 (우대 적용)</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                  <h4 className="text-emerald-400 font-bold text-lg mb-2">RE100기업, 산단기업</h4>
                  <p className="text-slate-300">최대 지원 단가 적용 및 사업비 자부담 최소화</p>
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

          {/* 구비 서류 & A/S 가이드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-emerald-600" /> 신청 구비 서류
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 건물 등기부등본 및 건축물대장
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 사업자등록증 사본 (법인/개인)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 본인서명사실확인서 또는 법인인감증명서
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 한전 전기사용량(신청지점 직전월까지 1년) 증빙자료
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-3xl p-10 border border-blue-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-blue-600" /> 사후 관리 정책
              </h3>
              <p className="text-slate-700 leading-relaxed font-medium mb-4">
                정부 지원사업 규정에 의거하여 완벽한 유지보수를 지원합니다.
              </p>
              <div className="bg-white/60 p-4 rounded-xl border border-blue-100">
                <span className="text-blue-700 font-black text-lg">5년 무상 A/S 보장</span>
                <p className="text-sm text-slate-500 mt-1">한국에너지공단 A/S 전담 업체로서 신속한 보수를 약속드립니다.</p>
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