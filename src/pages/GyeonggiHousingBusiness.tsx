import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Zap,
    Users,
    CheckCircle2,
    ArrowRight,
    CircleDollarSign,
    Search,
    FileEdit,
    Briefcase,
    ClipboardCheck,
    TrendingUp,
    LayoutGrid,
    Calculator
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '@/components/SEO';

const GyeonggiHousingBusiness = () => {
    const location = useLocation();

    const tabs = [
        { name: '경기도 주택태양광', href: '/business/housing-support' },
        { name: '주택태양광이란?', href: '/business/housing-intro' },
        { name: '경기도 주택태양광 지원사업', href: '/business/housing-business' },
        { name: '사업 진행절차', href: '/business/housing-process' },
    ];

    const timelineSteps = [
        {
            role: "도, 시군, 진흥원",
            title: "사업공고",
            icon: <Search className="h-8 w-8 text-blue-600" />,
            bgColor: "bg-blue-50/50"
        },
        {
            role: "신청자, 참여 시공기업",
            title: "사업신청",
            icon: <FileEdit className="h-8 w-8 text-emerald-600" />,
            bgColor: "bg-emerald-50/50"
        },
        {
            role: "진흥원(시군)",
            title: "서류검토",
            icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
            bgColor: "bg-blue-50/50"
        },
        {
            role: "참여 시공기업",
            title: "태양광 설치",
            icon: <Briefcase className="h-8 w-8 text-emerald-600" />,
            bgColor: "bg-emerald-50/50"
        },
        {
            role: "진흥원(시군)",
            title: "설치확인",
            icon: <CheckCircle2 className="h-8 w-8 text-blue-600" />,
            bgColor: "bg-blue-50/50"
        },
        {
            role: "진흥원(시군)",
            title: "보조금 지급",
            icon: <CircleDollarSign className="h-8 w-8 text-emerald-600" />,
            bgColor: "bg-emerald-50/50"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="경기도 주택태양광 지원사업 | 썬그린에너지"
                description="경기도민에게 주택용 태양광 설치 비용의 일부를 지원하여 전력 자립도 제고 및 재생에너지 보급 확대"
            />
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 border-b border-slate-100 overflow-hidden text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4 py-1 mb-6 text-sm font-semibold tracking-wide uppercase">
                        GYEONGGI RESIDENTIAL SOLAR BUSINESS
                    </Badge>
                    <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        경기도 <span className="text-emerald-600">주택태양광 지원사업</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        경기도민에게 주택용 태양광 설치 비용의 일부를 지원하여 <br className="hidden lg:block" />
                        전력 자립도 제고 및 재생에너지 보급 확대에 기여합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white bg-transparent" asChild>
                            <a href="https://ggre100home.or.kr/view/biz/housingSupport" target="_blank" rel="noopener noreferrer">경기도 상세안내</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto no-scrollbar py-4 gap-2">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.name}
                                to={tab.href}
                                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all ${location.pathname === tab.href
                                    ? 'bg-emerald-600 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

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
                                    경기도민에게 주택용 태양광 설치 비용의 일부를 지원하여 전력 자립도 제고 및 재생에너지 보급 확대
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-blue-600 rounded-lg text-white">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">지원 대상</h2>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-lg font-bold text-slate-900">
                                        경기도 내 주택 소유자
                                    </p>
                                    <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                        * 건축법 시행령 제3조의5 [별표1]에서 규정한 '단독주택' 소유자
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 사업 내용 */}
                        <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
                            <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-6 text-emerald-400">사업 내용</h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                        지원 규모
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed font-medium">
                                        1가구 당 주택 태양광(3kW) 설치 비용의 일부 지원
                                    </p>
                                </div>
                                <div className="bg-emerald-500/10 p-5 rounded-xl border border-emerald-500/20">
                                    <p className="text-sm text-slate-400">
                                        ※ 사업내용은 해당 연도 사업 공고에 따라 달라질 수 있으며, 자세한 내용은 공고문을 참고하시기 바랍니다.
                                        <br />
                                        ※ 연도별 사업 공고문은 알림마당 &gt; 공지사항에서 확인 가능합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 추진 일정 */}
                    <div id="procedure" className="mb-20 pt-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">추진 일정</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                            {timelineSteps.map((step, idx) => (
                                <div key={idx} className={`relative flex flex-col items-center p-6 rounded-3xl ${step.bgColor} border border-slate-100 transition-transform hover:-translate-y-1`}>
                                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md mb-6 relative z-10">
                                        {step.icon}
                                    </div>
                                    <div className="text-center w-full">
                                        <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-tighter">{step.role}</p>
                                        <div className="h-px bg-slate-200 w-full mb-4"></div>
                                        <h4 className="text-base font-bold text-slate-900 leading-tight min-h-[2.5rem] flex items-center justify-center">
                                            {step.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 기대 효과 */}
                    <div className="bg-emerald-900 rounded-3xl p-12 lg:p-16 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Calculator className="h-64 w-64 text-white" />
                        </div>
                        <div className="relative z-10 text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-10">기대 효과</h2>
                            <div className="grid md:grid-cols-2 gap-12 text-left">
                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h4 className="text-xl font-bold text-emerald-400 mb-4">에너지 자립 실천</h4>
                                    <p className="text-emerald-100 leading-relaxed">
                                        도민이 재생에너지 생산에 직접 참여함으로써 에너지 자립을 실천하고 환경 보호에 기여합니다.
                                    </p>
                                </div>
                                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                    <h4 className="text-xl font-bold text-blue-400 mb-4">전기 요금 절감</h4>
                                    <p className="text-emerald-100 leading-relaxed font-bold text-xl">
                                        월 평균 약 7만원 전기 요금 절감 효과
                                    </p>
                                    <p className="text-slate-400 text-sm mt-4">
                                        * 가정의 전기 이용 형태 및 사용량에 따라 절감액은 달라질 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GyeonggiHousingBusiness;
