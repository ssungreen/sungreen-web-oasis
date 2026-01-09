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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: Definition */}
          <div className="bg-emerald-50 rounded-3xl p-10 shadow-sm border border-emerald-100 mb-16 items-center flex flex-col md:flex-row gap-8">
            <div className="bg-emerald-600 text-white rounded-2xl px-6 py-4 text-3xl font-bold whitespace-nowrap text-center">
              융복합지원사업이란?
            </div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              마을 단위의 융복합 에너지 자립 마을을 조성하는 사업으로, 정부와 지자체가 패키지로 지원하는 고효율 에너지 복지 사업입니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Section 2: Content Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Cpu className="h-6 w-6 mr-3 text-emerald-600" /> 사업 내용
              </h3>
              <ul className="space-y-4 text-lg text-slate-700 font-medium">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>태양광, 태양열, 지열 등 2종 이상의 신재생에너지원을 설치</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>주택·공공·상업건물 등 지원대상이 혼재된 지역에 설치</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>구역 단위의 에너지 자립 마을 조성</span>
                </li>
              </ul>
            </div>

            {/* Section 3: Benefits */}
            <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
              <h2 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">지원 혜택</h2>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                총 설치비용의 상당 부분을 정부(에너지공단)와 지자체가 보조하여 자부담을 최소화하며,
                마을 전체의 에너지 자립도를 높여 전기요금 절감 효과를 극대화합니다.
              </p>
              <div className="mt-8 bg-white/10 p-6 rounded-2xl text-center">
                <span className="text-emerald-400 text-3xl font-bold">정부·지자체 패키지 지원</span>
              </div>
            </div>
          </div>

          {/* Section 4: Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">신청 및 추진 절차</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: '01', title: '수요조사', desc: '지자체별 사업 대상지 수요조사 및 발굴' },
                { step: '02', title: '컨소시엄 구성', desc: '지자체 및 참여기업(썬그린에너지) 컨소시엄 구성' },
                { step: '03', title: '공모 접수', desc: '한국에너지공단 신재생에너지센터 공모 접수' },
                { step: '04', title: '공개평가', desc: '공단의 서류 및 현장 평가, 공개 발표 평가' },
                { step: '05', title: '사업 승인', desc: '평가 결과에 따른 최종 사업 승인 및 확정' },
                { step: '06', title: '협약 및 시공', desc: '지자체-공단 협약 체결 후 설비 설치 시공' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white font-bold px-3 py-1 rounded-lg">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
      <Footer />
    </div>
  );
};

export default FusionSupport;