import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Sun,
    CheckCircle2,
    ArrowRight,
    CircleDollarSign,
    Zap,
    Users,
    Calculator,
    Search,
    FileEdit,
    ClipboardCheck,
    Briefcase,
    Phone,
    FileText,
    ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const GyeonggiHousingSupport = () => {
    const savingTable = [
        { usage: "350kWh", current: "61,338원", after: "7,418원", savings: "53,920원" },
        { usage: "400kWh", current: "72,568원", after: "13,926원", savings: "58,642원" },
        { usage: "500kWh", current: "110,014원", after: "26,934원", savings: "83,080원" },
        { usage: "600kWh", current: "141,760원", after: "50,100원", savings: "91,660원" }
    ];

    const timelineSteps = [
        {
            role: "도",
            title: "사업계획 수립 및 공고",
            icon: <Search className="h-8 w-8 text-blue-600" />,
            bgColor: "bg-blue-50/50"
        },
        {
            role: "시군",
            title: "참여기업 모집 및 선정",
            icon: <FileEdit className="h-8 w-8 text-emerald-600" />,
            bgColor: "bg-emerald-50/50"
        },
        {
            role: "시군, 도",
            title: "보조금 신청 및 예산 교부",
            icon: <CircleDollarSign className="h-8 w-8 text-blue-600" />,
            bgColor: "bg-blue-50/50"
        },
        {
            role: "협력기업",
            title: "사업 시행 및 설치",
            icon: <Briefcase className="h-8 w-8 text-emerald-600" />,
            bgColor: "bg-emerald-50/50"
        },
        {
            role: "도, 시군",
            title: "보조금 정산 및 사후관리",
            icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
            bgColor: "bg-blue-50/50"
        }
    ];

    const tabs = [
        { name: '경기도 주택태양광', href: '/business/housing-support' },
        { name: '주택태양광이란?', href: '/business/housing-intro' },
        { name: '경기도 주택태양광 지원사업', href: '/business/housing-business' },
        { name: '사업 진행절차', href: '/business/housing-process' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="경기도 주택태양광 | 썬그린에너지"
                description="전기요금 누진세 해결! 경기도 31개 시군과 함께하는 2026년 주택태양광 지원사업"
            />
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4 py-1 mb-6 text-sm font-semibold tracking-wide uppercase">
                        Housing Solar Project
                    </Badge>
                    <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        햇빛이 돈 되는 우리집,<br />
                        <span className="text-emerald-600">주택태양광 지원사업</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        2026년 경기도 내 1,400가구 대상, 총 30억 규모의 예산 지원! <br className="hidden lg:block" />
                        우리 집 전기요금을 획기적으로 줄이는 스마트한 선택을 시작하세요.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white bg-transparent" asChild>
                            <a href="https://ggre100home.or.kr/view/biz/leadingBiz" target="_blank" rel="noopener noreferrer">상세 안내</a>
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

            {/* Overview Stats */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-3xl bg-emerald-50 border border-emerald-100 text-center">
                            <div className="text-sm font-bold text-emerald-600 mb-2 uppercase tracking-widest">지원 규모</div>
                            <div className="text-4xl font-black text-slate-900">1,400 가구</div>
                            <p className="mt-4 text-slate-600">경기도 31개 시·군 전역 대상</p>
                        </div>
                        <div className="p-10 rounded-3xl bg-blue-50 border border-blue-100 text-center">
                            <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-widest">총 예산</div>
                            <div className="text-4xl font-black text-slate-900">약 30억 원</div>
                            <p className="mt-4 text-slate-600">도민의 에너지 부담 경감</p>
                        </div>
                        <div className="p-10 rounded-3xl bg-slate-900 text-center text-white">
                            <div className="text-sm font-bold text-emerald-400 mb-2 uppercase tracking-widest">설치 용량</div>
                            <div className="text-4xl font-black">3kW</div>
                            <p className="mt-4 text-slate-300 font-medium">단독·공동주택 옥상 및 지붕</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Saving Table Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-4">
                            <Calculator className="h-5 w-5 text-emerald-600" />
                            <span className="text-sm font-bold text-slate-700">예상 절감액 계산</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">사용할수록 커지는 절감 혜택</h2>
                        <p className="mt-4 text-slate-600">월 350~600kWh 사용 가구 기준 (주택용 저압 기준 예상치)</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-900 text-white">
                                        <th className="px-8 py-5 font-bold">월 사용량</th>
                                        <th className="px-8 py-5 font-bold">기존 요금</th>
                                        <th className="px-8 py-5 font-bold text-emerald-400">설치 후 예상 요금</th>
                                        <th className="px-8 py-5 font-bold">월 절감액</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-700">
                                    {savingTable.map((row, idx) => (
                                        <tr key={idx} className="border-b border-slate-100 hover:bg-emerald-50/30 transition-colors">
                                            <td className="px-8 py-6 font-bold">{row.usage}</td>
                                            <td className="px-8 py-6">{row.current}</td>
                                            <td className="px-8 py-6 font-black text-emerald-600">{row.after}</td>
                                            <td className="px-8 py-6 bg-emerald-50/50 font-bold text-emerald-700">{row.savings}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-slate-400 text-center italic">
                        * 실제 절감액은 가구별 사용 패턴 및 한전 요금 체계 변동에 따라 차이가 있을 수 있습니다.
                    </p>
                </div>
            </section>

            {/* 추진 일정 (Visual Timeline) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">사업 추진 일정</h2>
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 구비 서류 & A/S 가이드 Section */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <FileText className="h-6 w-6 text-blue-600" /> 신청 구비 서류
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    '건축물 대장 (단독/공동주택 확인용)',
                                    '신청자 신분증 사본',
                                    '본인 명의 예금 통장 사본 (보조금 전용)',
                                    '본인서명사실확인서 또는 인감증명서',
                                    '건강보험 자격득실확인서 (최근 1개월 이내)'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-sm text-slate-400">※ 서류는 최근 1개월 이내 발급분이어야 하며, 상황에 따라 추가 서류가 필요할 수 있습니다.</p>
                        </div>

                        <div className="bg-blue-600 rounded-3xl p-10 shadow-xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                    <ShieldCheck className="h-6 w-6 text-blue-200" /> 사후 관리 (A/S) 안내
                                </h3>
                                <div className="space-y-6">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                        <p className="text-xl font-bold text-blue-100 mb-2">5년 무상 A/S 보장</p>
                                        <p className="text-blue-50/80 leading-relaxed font-medium">
                                            경기도 지원사업 규정에 따라 설치 후 5년 동안 무상 수리를 보장하며,
                                            썬그린에너지의 전문 기술팀이 상시 대기하여 신속하게 조치합니다.
                                        </p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                        <p className="text-xl font-bold text-blue-100 mb-2">실시간 모니터링 지원</p>
                                        <p className="text-blue-50/80 leading-relaxed font-medium">
                                            발전 현황을 실시간으로 확인하고 이상 징후 발생 시 선제적인 장애 대응 서비스를 제공합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GyeonggiHousingSupport;
