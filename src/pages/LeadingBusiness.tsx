import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Lightbulb,
  Target,
  Users,
  Settings,
  TrendingUp,
  Calendar,
  Megaphone,
  Building2,
  FileCheck,
  Briefcase,
  CircleDollarSign,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const LeadingBusiness = () => {
  const timelineSteps = [
    {
      role: "도",
      title: "추진계획 수립",
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      bgColor: "bg-blue-50/50"
    },
    {
      role: "도",
      title: "사업공고",
      icon: <Megaphone className="h-8 w-8 text-emerald-600" />,
      bgColor: "bg-emerald-50/50"
    },
    {
      role: "도",
      title: "사업 대상 선정",
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      bgColor: "bg-blue-50/50"
    },
    {
      role: "도 → 시군",
      title: "예산 교부",
      icon: <FileCheck className="h-8 w-8 text-emerald-600" />,
      bgColor: "bg-emerald-50/50"
    },
    {
      role: "시군, 사업자",
      title: "사업 시행",
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      bgColor: "bg-blue-50/50"
    },
    {
      role: "도",
      title: "사업완료 및 정산",
      icon: <CircleDollarSign className="h-8 w-8 text-emerald-600" />,
      bgColor: "bg-emerald-50/50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="경기 RE100 선도 사업 | 썬그린에너지"
        description="경기도 지역 특성에 맞는 에너지 분야 사업모델을 발굴 및 지원하여 에너지 산업시장 육성과 활성화 도모"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 opacity-10">
          <Lightbulb className="h-96 w-96 text-emerald-600" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4 py-1 mb-6 text-sm font-semibold tracking-wide uppercase">
            ENERGY INNOVATION PROJECT
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            경기 RE100 <br className="sm:hidden" />
            <span className="text-emerald-600">선도 사업</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            경기 RE100 선도사업의 개념과 사업 개요에 대해 안내해 드립니다.
          </p>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            경기도 지역 특성에 맞는 에너지 분야 사업모델을 발굴 및 지원하여 <br className="hidden lg:block" />
            에너지 산업시장 육성과 활성화를 도모합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold" asChild>
              <Link to="/contact">사업 문의하기</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white bg-transparent" asChild>
              <a href="https://ggre100home.or.kr/view/biz/leadingBiz" target="_blank" rel="noopener noreferrer">상세 안내</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* 사업 목적 & 대상 */}
            <div className="space-y-10">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-600 rounded-lg text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">사업 목적</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  경기도 지역 특성에 맞는 에너지 분야 사업모델을 발굴 및 지원하여 에너지 산업시장 육성과 활성화 도모
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">사업 대상</h2>
                </div>
                <ul className="space-y-4">
                  {['시·군', '공공기관', '민간법인 (단독 또는 컨소시엄)'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg font-semibold text-slate-700">
                      <CheckCircle2 className="h-6 w-6 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 사업 내용 */}
            <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                <Settings className="h-8 w-8 text-emerald-400" />
                <h2 className="text-3xl font-bold">사업 내용</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold shrink-0 mt-1">공모</span>
                  <p className="text-slate-300 leading-relaxed">공모를 통한 우수 사업 모델 선정</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold shrink-0 mt-1">지원</span>
                  <p className="text-slate-300 leading-relaxed">
                    신재생에너지발전설비, 에너지저장장치(ESS), 에너지관리시스템(EMS), 전기자동차 충전시설 등과 정보통신기술(ICT)을 활용한 융·복합 사업모델 지원
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 border border-white/10 mt-6">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    ※ 가상상계거래(VNM), 가상발전소(VPP), 수요자원거래(DR), V2G, 에너지생산자인증 등 혁신 기술 포함
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center bg-blue-500/10 p-4 rounded-xl">
                    <span className="text-slate-300 font-bold">지원 비율</span>
                    <span className="text-2xl font-black text-blue-400">사업비의 30% 이내</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 추진 일정 (Visual Timeline) */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-slate-900">추진 일정</h2>
              <div className="h-1 bg-slate-100 flex-grow mx-8 hidden sm:block"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col items-center p-6 rounded-3xl ${step.bgColor} border border-slate-100 transition-transform hover:-translate-y-1`}>
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md mb-6 relative z-10">
                    {step.icon}
                  </div>
                  <div className="text-center w-full">
                    <p className="text-sm font-bold text-slate-400 mb-2">{step.role}</p>
                    <div className="h-px bg-slate-200 w-full mb-4"></div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight min-h-[3rem] flex items-center justify-center">
                      {step.title}
                    </h4>
                  </div>
                  {idx < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-[60px] -right-3 z-20">
                      <ArrowRight className="h-6 w-6 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-emerald-50 rounded-3xl p-12 lg:p-16 border border-emerald-100">
            <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">기대 효과</h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-semibold">
              에너지 산업 활성화 도모, 민간투자 활성화 촉진으로 <br className="hidden sm:block" />
              <span className="text-emerald-600">RE100 추진 가속화</span>를 도모합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
            <CardContent className="p-12 text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="h-32 w-32" />
              </div>
              <h2 className="text-3xl font-bold mb-6">에너지 미래를 선도하는 파트너</h2>
              <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
                썬그린에너지는 경기도 RE100 선도 사업의 성공적인 <br className="hidden lg:block" />
                모델 제안과 시공을 위해 최선을 다합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 rounded-xl text-lg font-bold" asChild>
                  <Link to="/contact">온라인 상담 예약</Link>
                </Button>
                <div className="text-slate-300 text-left">
                  <p className="text-xs font-bold opacity-80 uppercase tracking-widest">직통 번호</p>
                  <p className="text-2xl font-bold text-white">031-944-0912</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Internal icon for connector
const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default LeadingBusiness;