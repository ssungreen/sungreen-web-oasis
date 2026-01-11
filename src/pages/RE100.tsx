import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Factory, Zap, Target, CheckCircle, ArrowRight, Sun, Wind, Battery, Building, Globe, TrendingUp, Award, Users, BarChart3, Calendar, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
const RE100 = () => {
  const benefits = [{
    icon: <Leaf className="h-8 w-8 text-emerald-600" />,
    title: "탄소중립 실현",
    description: "100% 재생에너지 사용으로 탄소배출량 제로 달성"
  }, {
    icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
    title: "비용 절감",
    description: "장기적인 전력비용 절감 및 안정적인 에너지 공급"
  }, {
    icon: <Award className="h-8 w-8 text-emerald-600" />,
    title: "기업 이미지 제고",
    description: "지속가능경영 브랜드 가치 향상 및 ESG 경영 실현"
  }, {
    icon: <Globe className="h-8 w-8 text-emerald-600" />,
    title: "글로벌 경쟁력",
    description: "국제적 환경규제 대응 및 글로벌 시장 진출 기회 확대"
  }];
  const process = [{
    step: "01",
    title: "현황 분석",
    description: "기업의 전력사용량 및 에너지 패턴 분석",
    icon: <BarChart3 className="h-6 w-6" />
  }, {
    step: "02",
    title: "목표 설정",
    description: "RE100 달성을 위한 단계별 목표 수립",
    icon: <Target className="h-6 w-6" />
  }, {
    step: "03",
    title: "솔루션 설계",
    description: "태양광, 풍력 등 최적 재생에너지 솔루션 설계",
    icon: <Sun className="h-6 w-6" />
  }, {
    step: "04",
    title: "시공 및 설치",
    description: "전문 기술진의 안전하고 신속한 시공",
    icon: <Factory className="h-6 w-6" />
  }, {
    step: "05",
    title: "운영 및 관리",
    description: "지속적인 모니터링 및 유지보수 서비스",
    icon: <CheckCircle className="h-6 w-6" />
  }];
  const solutions = [{
    title: "옥상 태양광",
    description: "건물 옥상을 활용한 태양광 발전 시스템",
    icon: <Building className="h-12 w-12 text-emerald-600" />,
    features: ["기존 건물 활용", "높은 효율성", "빠른 설치"]
  }, {
    title: "대규모 태양광",
    description: "지상 설치형 대용량 태양광 발전소",
    icon: <Sun className="h-12 w-12 text-emerald-600" />,
    features: ["대용량 발전", "안정적 공급", "장기 운영"]
  }, {
    title: "ESS 연계",
    description: "에너지저장장치를 통한 효율적 전력 관리",
    icon: <Battery className="h-12 w-12 text-emerald-600" />,
    features: ["에너지 저장", "피크 관리", "안정성 향상"]
  }, {
    title: "PPA 서비스",
    description: "전력구매계약을 통한 재생에너지 공급",
    icon: <Zap className="h-12 w-12 text-emerald-600" />,
    features: ["초기비용 절감", "장기 계약", "안정적 가격"]
  }];
  return <div className="min-h-screen bg-background">
    <Header />

    {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-emerald-50 to-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
            RE100 Initiative
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            RE100으로 시작하는
            <span className="text-emerald-600 block">지속가능한 미래</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Renewable Energy 100% - 기업이 사용하는 전력을 100% 재생에너지로 전환하여
            탄소중립을 실현하고 지속가능한 경영을 통해 미래 경쟁력을 확보하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Phone className="mr-2 h-5 w-5" />
              무료 상담 신청
            </Button>
            <Button size="lg" variant="outline">
              RE100 가이드 다운로드
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* RE100 소개 */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 rounded-3xl p-10 shadow-sm border border-emerald-100 mb-20 items-center flex flex-col md:flex-row gap-8">
          <div className="bg-emerald-600 text-white rounded-2xl px-6 py-4 text-3xl font-bold whitespace-nowrap">RE100이란?</div>
          <div className="space-y-4">
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              'RE100'은 재생에너지(Renewable Energy) 100%라는 의미로, 2050년까지 기업들이 필요한 전력을 전량 재생에너지로 구매 또는 자가생산하여 조달하겠다는 자발적 캠페인 입니다.
            </p>
            <p className="text-emerald-700 font-semibold">*재생에너지 : 태양광, 태양열, 풍력, 수력 등 화석연료를 대체하는 환경친화적 에너지</p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">기대효과</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th colSpan={3} className="py-4 px-6 text-xl">사업 형태에 따른 예상 부가수익 1MW 기준 (지붕 면적 약 10,000m²)</th>
                </tr>
                <tr className="bg-emerald-600 text-white">
                  <th className="py-3 px-6 border-r border-emerald-500 w-1/3">지붕임대</th>
                  <th className="py-3 px-6 border-r border-emerald-500 w-1/3">발전사업</th>
                  <th className="py-3 px-6 w-1/3">자가소비</th>
                </tr>
              </thead>
              <tbody className="bg-white text-slate-700">
                <tr className="divide-x divide-slate-200 border-b border-slate-200">
                  <td className="p-6 space-y-2">
                    <p>• 임대료 최고수준</p>
                    <p>• 기간 20년</p>
                    <p>• 초기 투자비 없음</p>
                  </td>
                  <td className="p-6 space-y-2">
                    <p>• 연간 <span className="text-emerald-600 font-bold text-lg">약 2억원</span></p>
                    <p>• 누적(20년) <span className="text-emerald-600 font-bold text-lg">37.9억원</span></p>
                  </td>
                  <td className="p-6">
                    <p>• 전기료 절감,</p>
                    <p>• 지붕 보수 지원</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-slate-500 text-sm">*발전사업의 경우 설비 효율 감소 고려</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" /> 내구성 향상
            </h3>
            <p className="text-lg text-slate-700 font-medium">노후화 지붕 점검, 보수, 리뉴얼 등</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" /> RE100 이행
            </h3>
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              에너지 진단 서비스 제공, RE100 포트폴리오 제공 및 성과 관리, 친환경 기업 이미지 제고
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* 서비스 특징 */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">썬그린 에너지 서비스 특징</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <div className="h-2 bg-emerald-500"></div>
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-700">신속한 매칭</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg font-bold text-slate-900">기업 - 발전 사업자 간의 신속한 매칭</p>
              <p className="text-slate-600 bg-emerald-50 p-4 rounded-xl font-medium">전국 태양광 보유자원 (약 17,000여 개)</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <div className="h-2 bg-teal-500"></div>
            <CardHeader>
              <CardTitle className="text-2xl text-teal-700">ONE-STOP 발전소 설계</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg font-bold text-slate-900">
                <li className="flex items-center"><ArrowRight className="h-5 w-5 mr-3 text-teal-500" /> 공장 지붕</li>
                <li className="flex items-center"><ArrowRight className="h-5 w-5 mr-3 text-teal-500" /> 건물 옥상</li>
                <li className="flex items-center"><ArrowRight className="h-5 w-5 mr-3 text-teal-500" /> 토지 (주차장 활용 등)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <div className="h-2 bg-blue-500"></div>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">전문가의 데이터기반 분석상담</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-slate-900 leading-relaxed p-6 bg-blue-50 rounded-xl text-center">
                전문가의 데이터기반 분석상담
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* 솔루션 */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">RE100 솔루션</h2>
          <p className="text-lg text-slate-600">
            다양한 재생에너지 솔루션으로 기업의 RE100 목표 달성을 지원합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                {solution.icon}
              </div>
              <CardTitle className="text-xl">{solution.title}</CardTitle>
              <CardDescription>{solution.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                  {feature}
                </li>)}
              </ul>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* 프로세스 */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">RE100 구축 프로세스</h2>
          <p className="text-lg text-slate-600">
            체계적인 5단계 프로세스로 RE100 목표 달성을 지원합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {process.map((item, index) => <div key={index} className="text-center group">
            <div className="relative">
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-700 transition-colors">
                {item.icon}
              </div>
              <div className="absolute -top-2 -right-2 bg-emerald-100 text-emerald-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {item.step}
              </div>
              {index < process.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full">
                <ArrowRight className="h-6 w-6 text-emerald-300 mx-auto" />
              </div>}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.description}</p>
          </div>)}
        </div>
      </div>
    </section>

    {/* 기대효과 */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">RE100 기대효과</h2>
          <p className="text-lg text-slate-600">
            RE100 참여를 통해 얻을 수 있는 다양한 효과를 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-6">
            <div className="mx-auto mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
            <p className="text-slate-600">{benefit.description}</p>
          </Card>)}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-sky-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          RE100으로 지속가능한 미래를 시작하세요
        </h2>
        <p className="text-xl text-emerald-100 mb-8">
          전문 컨설턴트와 함께 맞춤형 RE100 솔루션을 설계해보세요
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
            <Phone className="mr-2 h-5 w-5" />
            무료 상담 예약
          </Button>
          <Button size="lg" variant="outline" className="border-white hover:bg-white text-gray-700">
            포트폴리오 보기
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>;
};
export default RE100;