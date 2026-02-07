import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  PiggyBank,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Search,
  FileEdit,
  CircleDollarSign,
  Briefcase,
  ClipboardCheck,
  TrendingUp,
  Handshake,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const OpportunityIncome = () => {
  const timelineSteps = [
    {
      role: "도, 시군",
      title: "수요조사 및 계획 수립",
      icon: <Search className="h-8 w-8 text-blue-600" />,
      bgColor: "bg-blue-50/50"
    },
    {
      role: "도",
      title: "세부시행 계획 수립",
      icon: <FileEdit className="h-8 w-8 text-emerald-600" />,
      bgColor: "bg-emerald-50/50"
    },
    {
      role: "도",
      title: "사업비 교부",
      icon: <CircleDollarSign className="h-8 w-8 text-blue-600" />,
      bgColor: "bg-blue-50/50"
    },
    {
      role: "시군",
      title: "사업 추진",
      icon: <Briefcase className="h-8 w-8 text-emerald-600" />,
      bgColor: "bg-emerald-50/50"
    },
    {
      role: "도",
      title: "사업완료 및 보조금 정산",
      icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
      bgColor: "bg-blue-50/50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="에너지 기회소득마을 조성 | 썬그린에너지"
        description="농촌지역에 태양광발전설비 설치 및 구축 지원을 통한 에너지 기회소득 창출"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-1 mb-6 text-sm font-semibold tracking-wide uppercase">
            ENERGY OPPORTUNITY INCOME
          </Badge>
          <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            에너지 <span className="text-blue-600">기회소득마을 조성</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            마을 주민들에게 <span className="text-blue-600 font-bold">20년간 매달 15만원 이상</span>의 '햇빛 기회소득'을 제공합니다.
          </p>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            농촌지역에 태양광발전설비 설치 및 구축 지원을 통한 <br className="hidden lg:block" />
            에너지 기회소득 창출과 마을의 지속 가능한 성장을 지원합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold" asChild>
              <Link to="/contact">소득마을 사업 문의</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white bg-transparent" asChild>
              <a href="https://ggre100home.or.kr/view/biz/incomeVillage" target="_blank" rel="noopener noreferrer">상세 안내</a>
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
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <PiggyBank className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">사업 목적</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  농촌지역에 태양광발전설비 설치 및 구축 지원을 통한 에너지 기회소득 창출
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-600 rounded-lg text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">사업 대상</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-bold text-slate-900">
                    농촌, 산간 등 에너지 이용 취약지역 마을
                  </p>
                </div>
              </div>
            </div>

            {/* 사업 내용 & 주체 */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
                <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-4 text-blue-400">사업 내용</h2>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
                    <span>상업용 태양광 설치 (총합 100kW 이상 1MW 미만)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
                    <span>마을 공용 건물 및 부지, 공공부지 등 활용</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
                    <span className="font-bold text-blue-100 italic">총사업비 80% 지원 (도비 30%, 시군비 50%)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <Handshake className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">사업 주체 (컨소시엄)</h3>
                </div>
                <p className="text-slate-600 mb-4 font-medium">시·군 + 마을공동체 + 설계·시공업체 + 에너지협동조합 등</p>
                <div className="bg-white/50 p-4 rounded-xl text-sm text-slate-500">
                  유지보수 및 발전 수익 등 운영·관리에 전문성을 보유한 기관이 함께 참여합니다.
                </div>
              </div>
            </div>
          </div>

          {/* 추진 일정 */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">추진 일정</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col items-center p-8 rounded-3xl ${step.bgColor} border border-slate-100`}>
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md mb-6">
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
                    <div className="hidden lg:block absolute top-[60px] -right-3 z-10">
                      <ArrowRightIcon className="h-6 w-6 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 기대 효과 */}
          <div className="bg-blue-600 rounded-3xl p-12 lg:p-16 text-white mb-20">
            <h2 className="text-3xl font-bold mb-6">기대 효과</h2>
            <p className="text-2xl text-blue-50 max-w-4xl mx-auto leading-relaxed font-bold">
              취약지역의 에너지 자립률 제고, <br className="hidden sm:block" />
              도민이 체감하는 에너지 복지 실현
            </p>
          </div>

          {/* 구비 서류 & A/S 가이드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" /> 준비 서류
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" /> 본인 확인 서류 (신분증 사본)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" /> 건축물 대장 및 등기부 등본
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" /> 본인 명의 통장 사본
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" /> 마을 공동체 참여 동의서 (해당 시)
                </li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-3xl p-10 border border-emerald-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-emerald-600" /> 사후 관리 (A/S)
              </h3>
              <p className="text-slate-700 leading-relaxed font-medium mb-4">
                경기도 지원사업 규정에 따라 철저한 사후관리를 보장합니다.
              </p>
              <div className="bg-white/60 p-4 rounded-xl">
                <span className="text-emerald-700 font-bold">5년 무상 A/S 보장</span>
                <p className="text-sm text-slate-500 mt-1">설치 후 5년 이내 고장 시 참여기업(썬그린에너지) 즉시 조치</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ArrowRightIcon = ({ className }: { className?: string }) => (
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

export default OpportunityIncome;