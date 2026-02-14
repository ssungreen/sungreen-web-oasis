import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Info,
    Home,
    Building2,
    Expand,
    ArrowUpCircle,
    Zap,
    Box,
    RefreshCcw,
    Construction,
    Wrench,
    Layers,
    PlugZap,
    ClipboardCheck,
    LayoutGrid
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '@/components/SEO';

const HousingSolarIntro = () => {
    const location = useLocation();

    const tabs = [
        { name: '경기도 주택태양광', href: '/business/housing-support' },
        { name: '주택태양광이란?', href: '/business/housing-intro' },
        { name: '경기도 주택태양광 지원사업', href: '/business/housing-business' },
        { name: '사업 진행절차', href: '/business/housing-process' },
    ];

    const types = [
        {
            title: '지붕형',
            description: '주택의 기존 지붕에 태양광 패널을 설치하는 방식으로, 가장 흔히 사용하는 방식입니다.',
            icon: <Home className="h-10 w-10 text-emerald-600" />,
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop"
        },

        {
            title: '토지형',
            description: '주택 주변의 여유 부지에 태양광 패널을 설치하는 방식입니다. 주로 마당 공간이 있는 경우 권장합니다.',
            icon: <Expand className="h-10 w-10 text-emerald-600" />,
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: '옥상형',
            description: '건물의 옥상 공간에 태양광 패널을 설치하는 방식으로, 평탄한 건축 구조에 적합합니다.',
            icon: <ArrowUpCircle className="h-10 w-10 text-blue-600" />,
            image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const steps = [
        { title: '기초 공사', icon: <Construction className="h-6 w-6" /> },
        { title: '구조물 설치공사', icon: <Wrench className="h-6 w-6" /> },
        { title: '모듈 설치', icon: <Layers className="h-6 w-6" /> },
        { title: '인버터 설치', icon: <RefreshCcw className="h-6 w-6" /> },
        { title: '접속함 설치', icon: <PlugZap className="h-6 w-6" /> },
        { title: '사용전 점검', icon: <ClipboardCheck className="h-6 w-6" /> },
    ];

    const conceptItems = [
        {
            id: 1,
            title: '태양 전지',
            description: '태양 에너지가 입사되어 전류를 발생 시키는 곳',
            icon: <Zap className="h-6 w-6 text-yellow-500" />
        },
        {
            id: 2,
            title: '접속함',
            description: '모듈에서 발생된 직류(DC) 전력을 모아 인버터로 전달하는 기기',
            icon: <Box className="h-6 w-6 text-blue-500" />
        },
        {
            id: 3,
            title: '인버터',
            description: '태양전지에서 생성된 직류 전기(DC)를 교류 전기(AC)로 바꾸는 기기',
            icon: <RefreshCcw className="h-6 w-6 text-emerald-500" />
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="주택태양광이란? | 썬그린에너지"
                description="주택태양광의 개념, 종류, 시공 절차 등에 대해 안내해 드립니다."
            />
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4 py-1 mb-6 text-sm font-semibold tracking-wide uppercase">
                        RESIDENTIAL SOLAR INFO
                    </Badge>
                    <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        주택태양광이란?
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        주택태양광의 개념, 종류, 시공 절차 등에 대해 안내해 드립니다.
                    </p>
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
                    {/* Definition Section */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-emerald-500 pl-4">주택태양광이란?</h2>
                        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
                            <p className="text-xl text-slate-700 leading-relaxed mb-8">
                                주택태양광이란 태양전지 모듈을 지붕이나 옥상, 마당 등에 설치하고, <br className="hidden lg:block" />
                                여기서 발생하는 전기를 직접 이용함으로써 주택의 전기요금 절감 목적 태양광 설비입니다.
                            </p>
                            <div className="flex items-center gap-4 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <div className="bg-blue-600 p-2 rounded-full text-white">
                                    <Info className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-900 mb-1">주택태양광 지원 규모</h4>
                                    <p className="text-blue-700 font-medium italic">주택태양광 지원사업을 통한 지원규모는 가구당 3kW 이하입니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Types Section */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">주택태양광 종류</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {types.map((type, idx) => (
                                <Card key={idx} className="overflow-hidden border-slate-100 shadow-lg hover:shadow-xl transition-shadow group">
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white font-bold text-xl">{type.title}</div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="mb-4">{type.icon}</div>
                                        <p className="text-slate-600 text-sm leading-relaxed">{type.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Concept Diagram Section */}
                    <div className="mb-24 bg-slate-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <LayoutGrid className="h-64 w-64 text-white" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-12 text-center">주택태양광 개념도</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=800&auto=format&fit=crop"
                                        alt="개념도"
                                        className="rounded-2xl shadow-2xl"
                                    />
                                </div>
                                <div className="space-y-8">
                                    {conceptItems.map((item) => (
                                        <div key={item.id} className="flex gap-6 items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xl border border-white/20">
                                                {item.id}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    {item.icon}
                                                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                                </div>
                                                <p className="text-slate-400 leading-relaxed font-medium">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Procedure Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16">
                            <p className="text-emerald-600 font-bold tracking-widest uppercase mb-2">Solar Construction Procedures For Housing</p>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">주택태양광 시공 절차</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                주택태양광 설치 시 시공 절차에 대해 안내해드립니다. <br />
                                주택 형태 및 참여 시공 기업에 따라 시공 절차는 변동될 수 있습니다.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-800 text-center">{step.title}</h4>
                                    {idx < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-100%] z-10 w-8 h-px bg-slate-200" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HousingSolarIntro;
