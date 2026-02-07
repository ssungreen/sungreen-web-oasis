import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Home,
    CheckCircle2,
    ArrowRight,
    Building2,
    Zap,
    LayoutGrid,
    BadgeCheck,
    UserPlus,
    ClipboardCheck,
    CircleDollarSign,
    Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const ApartmentRE100 = () => {
    const timelineSteps = [
        {
            role: "도",
            title: "사업계획 수립",
            icon: <LayoutGrid className="h-8 w-8 text-blue-600" />,
            bgColor: "bg-blue-50/50"
        },
        {
            role: "시군, 도",
            title: "보조금 신청, 도비 교부",
            icon: <BadgeCheck className="h-8 w-8 text-emerald-600" />,
            bgColor: "bg-emerald-50/50"
        },
        {
            role: "시군",
            title: "참여기업 선정, 관리",
            icon: <Building2 className="h-8 w-8 text-blue-600" />,
            bgColor: "bg-blue-50/50"
        },
        {
            role: "시군",
            title: "신청자 모집, 사업관리",
            icon: <UserPlus className="h-8 w-8 text-emerald-600" />,
            bgColor: "bg-emerald-50/50"
        },
        {
            role: "시군",
            title: "실적점검",
            icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
            bgColor: "bg-blue-50/50"
        },
        {
            role: "도, 시군",
            title: "사업결과 보조 및 정산",
            icon: <CircleDollarSign className="h-8 w-8 text-emerald-600" />,
            bgColor: "bg-emerald-50/50"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="아파트 RE100 지원 | 썬그린에너지"
                description="아파트 베란다, 옥상 등에 태양광 보급하여 도심형 분산 에너지 공급 체계 마련"
            />
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-1 mb-6 text-sm font-semibold tracking-wide uppercase">
                        APARTMENT RE100 PROJECT
                    </Badge>
                    <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        아파트 <span className="text-blue-600">RE100 지원</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
                        아파트 RE100 지원의 개념과 사업 개요에 대해 안내해 드립니다.
                    </p>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        아파트 베란다, 옥상 등에 태양광을 보급하여 <br className="hidden lg:block" />
                        도심형 분산 에너지 공급 체계를 마련하고 전기료를 절감합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold" asChild>
                            <Link to="/contact">지금 바로 상담하기</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white bg-transparent" asChild>
                            <a href="https://ggre100home.or.kr/view/biz/aptSolar" target="_blank" rel="noopener noreferrer">상세 안내</a>
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
                                        <Zap className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">사업 목적</h2>
                                </div>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    아파트 베란다, 옥상 등에 태양광 보급하여 도심형 분산 에너지 공급 체계 마련
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-emerald-600 rounded-lg text-white">
                                        <Home className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">사업 대상</h2>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-xl font-bold text-slate-900 mb-2">경기도 소재 주택</p>
                                    <p className="text-slate-600 leading-relaxed">
                                        건축법 시행령 제3조의 5 별표 1의<br />
                                        <span className="font-bold text-emerald-600">‘공동주택’ 및 ‘단독주택’</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 사업 내용 */}
                        <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
                            <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-6 text-blue-400">사업 내용</h2>
                            <p className="text-lg mb-6 text-slate-300">경기도 내 아파트태양광(베란다형, 옥상형) 설치 지원</p>
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h4 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                        베란다형
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed">
                                        아파트 베란다에 1kW 이하 태양광 설치 지원, 자가 전기료 절감
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h4 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                        옥상형
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed">
                                        아파트 옥상에 태양광 설치 지원, 공용 전기료 절감
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 추진 일정 (Visual Timeline) */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">사업 추진 일정</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                            {timelineSteps.map((step, idx) => (
                                <div key={idx} className={`relative flex flex-col items-center p-6 rounded-3xl ${step.bgColor} border border-slate-100`}>
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

                    {/* 기대 효과 */}
                    <div className="bg-slate-50 rounded-3xl p-12 lg:p-16 border border-slate-100">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">기대 효과</h2>
                        <p className="text-center text-lg text-slate-600 mb-10">
                            아파트태양광(베란다형, 옥상형) 설치 지원하여 도민 전기료 부담 경감 및 재생에너지 보급 확산
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <h4 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                    베란다형
                                </h4>
                                <p className="text-slate-700 leading-relaxed font-bold text-lg">
                                    설치 세대당 월 평균 약 2만원 전기료 절감
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <h4 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                    옥상형
                                </h4>
                                <p className="text-slate-700 leading-relaxed font-bold text-lg">
                                    아파트 옥상 태양광 발전을 통해 아파트 공용전기료 절감
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ApartmentRE100;
