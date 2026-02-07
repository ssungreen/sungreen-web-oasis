import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import {
    ArrowRight,
    UserCheck,
    FileText,
    Handshake,
    ClipboardEdit,
    ShieldCheck,
    Wallet,
    Construction,
    Stamp,
    Coins,
    Wrench
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '@/components/SEO';

const HousingSolarProcess = () => {
    const location = useLocation();

    const tabs = [
        { name: '경기도 주택태양광', href: '/business/housing-support' },
        { name: '주택태양광이란?', href: '/business/housing-intro' },
        { name: '경기도 주택태양광 지원사업', href: '/business/housing-business' },
        { name: '사업 진행절차', href: '/business/housing-process' },
    ];

    const processSteps = [
        {
            id: '01',
            participants: '신청자, 참여 시공기업',
            title: '회원가입',
            description: '경기도 주택태양광 사업 참여를 위해 회원가입이 필요합니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Sun/3D/sun_3d.png" alt="회원가입" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F4F7FF]', // 연보라/연블루 톤
        },
        {
            id: '02',
            participants: '신청자 ⇄ 참여 시공기업',
            title: '사전계약',
            description: '신청자가 참여 시공기업을 선택하고 계약을 체결할 수 있도록 준비 기간을 제공합니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Handshake/3D/handshake_3d.png" alt="사전계약" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F0FDF4]', // 연민트 톤
        },
        {
            id: '03',
            participants: '신청자 ⇄ 참여 시공기업',
            title: '참여 시공기업 선택 및 계약체결',
            description: '사전 계약기간 내에 신청자와 참여 시공기업 간 표준 설치 계약을 체결합니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Memo/3D/memo_3d.png" alt="계약체결" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F4F7FF]',
        },
        {
            id: '04',
            participants: '신청자 ⇄ 참여 시공기업',
            title: '사업신청',
            description: '신청 기간 내에 신청서 및 관련 서류를 제출합니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Clipboard/3D/clipboard_3d.png" alt="사업신청" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F0FDF4]',
        },
        {
            id: '05',
            participants: '진흥원',
            title: '신청서류 검토 및 승인',
            description: '지원 조건 및 신청 서류를 검토한 후, 이상이 없을 경우 사업이 승인됩니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Magnifying%20glass%20tilted%20right/3D/magnifying_glass_tilted_right_3d.png" alt="서류검토" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F4F7FF]',
        },
        {
            id: '06',
            participants: '신청자 → 참여 시공기업',
            title: '자부담금 이체',
            description: '신청자는 자부담금을 참여 시공기업에 이체합니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Money%20bag/3D/money_bag_3d.png" alt="자부담금" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F0FDF4]',
        },
        {
            id: '07',
            participants: '참여 시공기업',
            title: '주택태양광 설비 설치',
            description: '참여 시공기업은 사업승인 후 주택에 태양광 설비를 설치합니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/House%20with%20garden/3D/house_with_garden_3d.png" alt="설치" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F4F7FF]',
        },
        {
            id: '08',
            participants: '진흥원',
            title: '설치 확인서 발급',
            description: '태양광 설비 설치 완료 후 점검을 받아 이상이 없을 경우, 설치 확인서를 발급합니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Shield/3D/shield_3d.png" alt="확인서발급" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F0FDF4]',
        },
        {
            id: '09',
            participants: '신청자 → 진흥원 → 참여 시공기업',
            title: '보조금 지급',
            description: '보조금 지급에 동의한 후, 이상이 없을 경우 참여 시공기업에 보조금을 지급합니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Credit%20card/3D/credit_card_3d.png" alt="보조금" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F4F7FF]',
        },
        {
            id: '10',
            participants: '참여 시공기업',
            title: '사후관리',
            description: '경기도 주택태양광 지원사업은 설치 후 5년 이내 고장 또는 하자 발생 시, 참여 시공기업이 A/S를 제공합니다.',
            icon: <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Wrench/3D/wrench_3d.png" alt="사후관리" className="w-20 h-20 object-contain drop-shadow-2xl" />,
            bgColor: 'bg-[#F0FDF4]',
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="사업 진행절차 | 썬그린에너지"
                description="주택지원사업 진행절차에 대해서 10단계로 상세히 안내해 드립니다."
            />
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-50 border-b border-slate-100 overflow-hidden text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4 py-1 mb-6 text-sm font-semibold tracking-wide uppercase">
                        RESIDENTIAL SOLAR PROCESS
                    </Badge>
                    <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        사업 진행절차
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        주택지원사업 진행절차에 대해서 안내해 드립니다.
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
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-4">사업 진행절차</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6 relative">
                        {processSteps.map((step, idx) => (
                            <div key={step.id} className="relative group">
                                <div className={`flex flex-col h-full min-h-[400px] rounded-[2rem] ${step.bgColor} p-8 border border-transparent hover:border-slate-200 hover:shadow-2xl transition-all duration-300`}>
                                    <div className="mb-8 text-left">
                                        <span className="text-xl font-black text-blue-600 block mb-3">{step.id}</span>
                                        <Badge variant="outline" className="bg-white/95 border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[12px] font-bold tracking-tight inline-block shadow-sm">
                                            {step.participants}
                                        </Badge>
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight break-keep">
                                            {step.title}
                                        </h3>
                                        <p className="text-[15px] text-slate-600 leading-relaxed break-keep mb-8">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto flex justify-start py-4">
                                        <div className="group-hover:translate-y-[-10px] transition-transform duration-300">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Arrow */}
                                {idx % 5 !== 4 && idx < processSteps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-slate-400/50 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/50 group-hover:bg-slate-500 transition-colors">
                                            <ArrowRight className="h-4 w-4 text-white" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HousingSolarProcess;
