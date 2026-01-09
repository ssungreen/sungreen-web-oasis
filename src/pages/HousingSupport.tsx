import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, CheckCircle, ArrowRight, Phone, FileText, Search, Wrench, Shield, Award, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HousingSupport = () => {
  const processSteps = [
    { step: 1, title: '사업신청', description: '한국에너지공단 신청' },
    { step: 2, title: '서류검토', description: '신청서류 검토 및 승인' },
    { step: 3, title: '현장조사', description: '설치 가능성 조사' },
    { step: 4, title: '설계승인', description: '시공업체 선정 및 설계' },
    { step: 5, title: '설치공사', description: '태양광 설치 공사' },
    { step: 6, title: '준공검사', description: '설치 완료 검사' },
    { step: 7, title: '사용승인', description: '전력거래 시작' },
    { step: 8, title: '정산지급', description: '보조금 정산 지급' }
  ];

  const supportData = [
    { region: '경기도', city: '수원시', amount: '1,020만원', local: '306만원', self: '204만원' },
    { region: '경기도', city: '성남시', amount: '1,068만원', local: '320만원', self: '213만원' },
    { region: '경기도', city: '안양시', amount: '1,056만원', local: '317만원', self: '211만원' },
    { region: '경기도', city: '부천시', amount: '1,044만원', local: '313만원', self: '209만원' },
    { region: '경기도', city: '고양시', amount: '1,080만원', local: '324만원', self: '216만원' },
    { region: '경기도', city: '용인시', amount: '1,092만원', local: '328만원', self: '218만원' }
  ];

  const benefits = [
    '설치비 80% 지원 (시비 50%, 도비 30%)',
    '자부담율 20%',
    '설치용량 3kW 이상 ~ 9kW 이하',
    '한국에너지공단 우수 시공업체',
    '20년 품질보증',
    '무료 A/S 서비스'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Home className="h-12 w-12 text-blue-400 mr-4" />
            <Badge className="px-8 py-4 bg-blue-500/20 text-blue-300 text-xl font-medium backdrop-blur-sm border border-blue-400/30">
              HOUSING SUPPORT PROJECT
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              주택지원사업
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            소유자 거주용 단독 주택용 태양광사업
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: Definition */}
          <div className="bg-emerald-50 rounded-3xl p-10 shadow-sm border border-emerald-100 mb-16 items-center flex flex-col md:flex-row gap-8">
            <div className="bg-emerald-600 text-white rounded-2xl px-6 py-4 text-3xl font-bold whitespace-nowrap text-center">
              주택지원사업이란?
            </div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              신재생에너지 설비를 저택에 설치할 경우 설치비의 일부를 정부가 보조 지원하는 사업으로,
              자가소비 목적으로 신재생에너지 설비를 설치하고자 하는 주택 소유자에게 보조금을 지원하여
              경제성을 확보하고 화석연료 대체 및 이산화탄소 배출을 줄이는 친환경 사업입니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Section 2: Target & Scope */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-emerald-600" /> 지원대상
                </h3>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                  기존 및 신축 단독주택 소유자 및 소유예정자, 공동주택 분양자 및 소유자
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Search className="h-6 w-6 mr-3 text-emerald-600" /> 지원범위
                </h3>
                <ul className="grid grid-cols-2 gap-4">
                  {['태양광', '태양열', '지열', '소형풍력'].map((item) => (
                    <li key={item} className="bg-emerald-50 px-4 py-2 rounded-lg text-emerald-700 font-bold text-center">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 3: 2024 Standards */}
            <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
              <h2 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">24년 주택지원사업 (태양광 3KW 기준)</h2>
              <div className="space-y-6 text-lg">
                <div className="flex justify-between items-center text-emerald-400">
                  <span>정부지원</span>
                  <span className="font-bold">50% 지원</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>지자체지원</span>
                  <span className="text-slate-400">선택 사항(지자체별 상이)</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span>자부담</span>
                  <span className="font-bold text-orange-400">자부담 연계 금융상품 이용가능</span>
                </div>
              </div>
              <p className="mt-8 text-sm text-slate-400 leading-relaxed">
                * 정부보조금은 신재생에너지 상생협력 지원금 등의 정책에 따라 변동될 수 있습니다.
              </p>
            </div>
          </div>

          {/* Section 4: Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">신청 절차</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: '1. 참여기업 선정 및 계약', desc: '주택소유자가 한국에너지공단 참여기업 선정' },
                { title: '2. 사업신청서 접수', desc: '사업신청서 및 관련서류를 공단에 제출' },
                { title: '3. 사업 승인', desc: '공단의 서류 검토 및 사업 승인' },
                { title: '4. 설비 설치', desc: '승인된 계획에 따라 설비 설치 공사' },
                { title: '5. 설치 확인', desc: '공단 또는 지자체의 설치 확인 및 검사' },
                { title: '6. 보조금 지급', desc: '확인 완료 후 정부 및 지자체 보조금 지급' }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                  <h4 className="font-bold text-emerald-600 mb-2">{step.title}</h4>
                  <p className="text-slate-600 font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-500 to-emerald-500">
          <CardContent className="p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">주택용 태양광 설치 문의</h2>
            <p className="text-xl mb-8 text-blue-100">
              태양광 설치를 원하시면 전국 어디든 검정완료!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  무료 상담 신청
                </Link>
              </Button>
              <div className="text-blue-100">
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

export default HousingSupport;