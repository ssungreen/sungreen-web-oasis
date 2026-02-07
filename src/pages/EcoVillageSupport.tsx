import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  Home,
  Building2,
  Search,
  FileEdit,
  CircleDollarSign,
  Briefcase,
  ClipboardCheck,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const EcoVillageSupport = () => {
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
        title="에너지 자립마을 조성 | 썬그린에너지"
        description="마을 공동체에 자가용·상업용 태양광 설치 지원을 통한 에너지 자립 및 마을복지 구현"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4 py-1 mb-6 text-sm font-semibold tracking-wide uppercase">
            ENERGY INDEPENDENT VILLAGE
          </Badge>
          <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            에너지 <span className="text-emerald-600">자립마을 조성</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            에너지 자립마을 조성의 개념과 사업 개요에 대해 안내해 드립니다.
          </p>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            마을 공동체에 자가용 · 상업용 태양광발전설비 설치 지원을 통한 <br className="hidden lg:block" />
            에너지 자립 및 마을복지를 구현합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold" asChild>
              <Link to="/contact">마을 사업 상담하기</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white bg-transparent" asChild>
              <a href="https://ggre100home.or.kr/view/biz/selfEnergyVillage" target="_blank" rel="noopener noreferrer">상세 안내</a>
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
                    <Zap className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">사업 목적</h2>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  마을 공동체에 자가용 · 상업용 태양광발전설비 설치 지원을 통한 에너지 자립 및 마을복지 구현
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">사업 대상</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-bold text-slate-900">
                    에너지 이용 취약지역 마을 중 도시가스 미공급 지역 우선 지원
                  </p>
                </div>
              </div>
            </div>

            {/* 사업 내용 */}
            <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
              <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-6 text-emerald-400">사업 내용</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg shrink-0">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">자가용 태양광 (3kW)</h4>
                    <p className="text-slate-300">설치비 지원 (10가구 이상 참여 시)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg shrink-0">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">마을 공동시설 상업용 태양광</h4>
                    <p className="text-slate-300">발점소(10~99kW) 설치비 지원</p>
                  </div>
                </div>

                <Card className="bg-emerald-500/10 border-emerald-500/20 mt-8">
                  <CardContent className="p-6">
                    <p className="text-emerald-400 font-bold mb-2 uppercase tracking-widest text-xs">Funding Guide</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">지원 비율</span>
                      <span className="text-2xl font-black text-emerald-400">총사업비의 80%</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">※ 도비/시군비 80%, 자부담 20%</p>
                  </CardContent>
                </Card>
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

          {/* 사업 주체 Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-emerald-500 pl-4">사업 주체</h2>
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="h-6 w-6 text-emerald-600" />
                    컨소시엄 구성
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    시·군 + 마을공동체 + 설계·시공업체 + 시·군 주민참여형 에너지협동조합 (선택)
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                    전문성 확보
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    발전소 유지보수 및 발전 수익 등 운영·관리에 전문성을 보유한 기관이 참여하여 안정적인 사업을 지원하며 에너지 복지 구현에 기여합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 기대 효과 */}
          <div className="bg-emerald-900 rounded-3xl p-12 lg:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-10">기대 효과</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-emerald-100 leading-relaxed">
                취약지역의 에너지 자립률 제고, <br className="hidden sm:block" />
                도민이 체감하는 에너지 복지 실현
              </p>
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

export default EcoVillageSupport;