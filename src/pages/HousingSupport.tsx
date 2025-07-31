import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, CheckCircle, ArrowRight, Phone, FileText, Search, Wrench, Shield, Award, DollarSign } from 'lucide-react';
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 사업 소개 */}
          <div className="mb-16">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-slate-900 mb-4">주택지원사업이란?</CardTitle>
                <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  소유자 거주용 주택에 설치하는 소규모 태양광 발전설비에 대해 <span className="text-blue-600 font-semibold">정부와 지자체가 설치비용을 지원</span>하는 사업입니다.<br />
                  개인이 운영하는 주택의 <span className="text-emerald-600 font-semibold">지붕이나 옥상</span>에 설치할 수 있습니다.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* 지원혜택 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">지원혜택</h2>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center bg-blue-500/10 px-6 py-3 rounded-full border border-blue-200">
                    <span className="text-lg font-semibold text-blue-700">
                      총 설치비용 최대 80% 지원 (시비 50%, 도비 30% → 자부담율 20%)
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 신청절차 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">신청절차</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 지역별 지원현황 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">지역별 지원현황</h2>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <p className="text-center text-slate-600 mb-6">
                  주택용 태양광 발전설비 보조금 현황 (3kW 기준)
                </p>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-center">지역</TableHead>
                        <TableHead className="text-center">시/군</TableHead>
                        <TableHead className="text-center">총 지원금액</TableHead>
                        <TableHead className="text-center">지자체 지원</TableHead>
                        <TableHead className="text-center">자부담</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {supportData.map((data, index) => (
                        <TableRow key={index}>
                          <TableCell className="text-center font-medium">{data.region}</TableCell>
                          <TableCell className="text-center">{data.city}</TableCell>
                          <TableCell className="text-center text-blue-600 font-semibold">{data.amount}</TableCell>
                          <TableCell className="text-center text-emerald-600">{data.local}</TableCell>
                          <TableCell className="text-center text-orange-600">{data.self}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-sm text-slate-500 mt-4 text-center">
                  * 지자체별 지원금액은 변동될 수 있으며, 정확한 금액은 해당 지자체에 문의하시기 바랍니다.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 기대효과 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">기대효과</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="bg-green-500/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">경제적 효과</h3>
                  <p className="text-slate-600">
                    3kW 기준 연간 약 700,000원 절약<br />
                    전기료 절약 효과 기대
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="bg-blue-500/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">환경 보호</h3>
                  <p className="text-slate-600">
                    연간 CO2 2톤 감축 효과<br />
                    친환경 에너지 생산
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="bg-purple-500/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">에너지 자립</h3>
                  <p className="text-slate-600">
                    전력 자급자족 실현<br />
                    에너지 독립성 확보
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HousingSupport;