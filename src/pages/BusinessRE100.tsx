import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Factory, Leaf, Users, Sun, Wind, Zap, Building2, FileCheck, Award, Target, TrendingUp, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import SEO from '@/components/SEO';
const BusinessRE100 = () => {
  const renewableEnergySources = [{
    icon: <Sun className="h-12 w-12" />,
    title: '태양광',
    description: '태양광 발전'
  }, {
    icon: <Wind className="h-12 w-12" />,
    title: '풍력',
    description: '풍력 발전'
  }, {
    icon: <Zap className="h-12 w-12" />,
    title: '수력',
    description: '수력 발전'
  }, {
    icon: <Leaf className="h-12 w-12" />,
    title: '바이오매스',
    description: '바이오매스'
  }, {
    icon: <Globe className="h-12 w-12" />,
    title: '지열',
    description: '지열 발전'
  }];
  const processSteps = [{
    step: 1,
    title: '신청',
    description: 'RE100 참여 신청서 제출',
    icon: <FileCheck className="h-8 w-8" />
  }, {
    step: 2,
    title: '검토',
    description: '참여 자격 및 계획 검토',
    icon: <Building2 className="h-8 w-8" />
  }, {
    step: 3,
    title: '승인',
    description: 'RE100 참여 기업 승인',
    icon: <Award className="h-8 w-8" />
  }, {
    step: 4,
    title: '이행',
    description: '재생에너지 전환 이행',
    icon: <Target className="h-8 w-8" />
  }, {
    step: 5,
    title: '평가',
    description: '이행 결과 평가 및 인증',
    icon: <TrendingUp className="h-8 w-8" />
  }];
  const certificationBenefits = [{
    title: '브랜드 가치 향상',
    description: '친환경 기업 이미지로 브랜드 가치 제고'
  }, {
    title: '글로벌 경쟁력 강화',
    description: '국제 RE100 이니셔티브 참여로 글로벌 경쟁력 확보'
  }, {
    title: '투자 유치 용이',
    description: 'ESG 경영으로 투자자들의 관심 증대'
  }, {
    title: '규제 리스크 최소화',
    description: '탄소중립 정책 대응으로 규제 리스크 해소'
  }, {
    title: '운영비 절감',
    description: '장기적으로 안정적인 에너지 비용 확보'
  }, {
    title: '사회적 책임 이행',
    description: '기업의 사회적 책임 이행으로 신뢰도 증진'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
    <Header />

    {/* Hero Section */}
    <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2 text-lg">
            BUSINESS ENTERPRISE
          </Badge>
          <h1 className="text-6xl font-bold mb-6">RENEWABLE ENERGY</h1>
          <h2 className="text-4xl font-bold mb-8 text-green-100">100% BUSINESS</h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            RE100은 기업이 사용하는 전력의 100%를 재생에너지로 조달하겠다는
            글로벌 이니셔티브로, 지속가능한 경영과 탄소중립 실현을 위한 핵심 전략입니다.
          </p>
        </div>
      </div>
    </section>

    {/* RE100 Logo & Introduction */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-green-600 text-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8 text-3xl font-bold">
            RE100
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-6">RE100이란 무엇인가?</h3>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            RE100(Renewable Energy 100%)은 2014년 영국의 기후그룹(The Climate Group)과
            CDP(Carbon Disclosure Project)가 공동으로 출범시킨 글로벌 재생에너지 이니셔티브입니다.
            참여 기업들은 2050년까지 사업장에서 사용하는 전력의 100%를 재생에너지로 전환하겠다고 공약합니다.
          </p>
        </div>
      </div>
    </section>

    {/* Renewable Energy Sources */}
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">재생에너지원</h3>
          <p className="text-lg text-slate-600 mb-12">다양한 재생에너지원을 통한 100% 친환경 전력 공급</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {renewableEnergySources.map((source, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8 text-center">
              <div className="text-green-600 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {source.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{source.title}</h4>
              <p className="text-slate-600">{source.description}</p>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* RE100 Process */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">RE100 참여 프로세스</h3>
          <p className="text-lg text-slate-600 mb-12">5단계로 구성된 체계적인 RE100 참여 절차</p>
        </div>

        <div className="relative">
          <div className="absolute top-12 left-0 w-full h-1 bg-green-200"></div>
          <div className="grid md:grid-cols-5 gap-8 relative">
            {processSteps.map((step, index) => <div key={step.step} className="text-center">
              <div className="bg-green-600 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 relative z-10 group hover:bg-green-700 transition-colors">
                <div className="text-center">
                  <div className="text-sm font-bold">STEP</div>
                  <div className="text-2xl font-bold">{step.step}</div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>)}
          </div>
        </div>
      </div>
    </section>

    {/* Detailed Process Diagrams */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Step 1: Application */}
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge className="bg-green-100 text-green-800 mb-4">STEP 1</Badge>
                <h4 className="text-2xl font-bold text-slate-900">RE100 참여 신청</h4>
              </div>
              <Building2 className="h-16 w-16 text-green-600" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <FileCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h5 className="font-bold text-slate-900 mb-2">신청서 작성</h5>
                <p className="text-slate-600 text-sm">기업 정보 및 전력 사용량 현황 제출</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h5 className="font-bold text-slate-900 mb-2">목표 설정</h5>
                <p className="text-slate-600 text-sm">재생에너지 전환 목표 및 일정 수립</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h5 className="font-bold text-slate-900 mb-2">서류 제출</h5>
                <p className="text-slate-600 text-sm">RE100 참여 공약서 및 관련 서류 제출</p>
              </div>
            </div>
          </div>

          {/* Step 2: Review */}
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge className="bg-blue-100 text-blue-800 mb-4">STEP 2</Badge>
                <h4 className="text-2xl font-bold text-slate-900">검토 및 평가</h4>
              </div>
              <Award className="h-16 w-16 text-blue-600" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-slate-900 mb-4">검토 항목</h5>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    기업의 재생에너지 전환 계획 검토
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    전력 사용량 및 현황 분석
                  </li>
                  <li className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    이행 가능성 및 실현 방안 평가
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-slate-900 mb-4">평가 기준</h5>
                <ul className="space-y-3">
                  <li className="flex items-center text-slate-600">
                    <ArrowRight className="h-5 w-5 text-blue-500 mr-3" />
                    연간 전력 사용량 100GWh 이상
                  </li>
                  <li className="flex items-center text-slate-600">
                    <ArrowRight className="h-5 w-5 text-blue-500 mr-3" />
                    구체적이고 실현 가능한 계획 수립
                  </li>
                  <li className="flex items-center text-slate-600">
                    <ArrowRight className="h-5 w-5 text-blue-500 mr-3" />
                    공개적 약속 및 투명한 보고 의지
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Approval */}
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge className="bg-purple-100 text-purple-800 mb-4">STEP 3</Badge>
                <h4 className="text-2xl font-bold text-slate-900">승인 및 공식 참여</h4>
              </div>
              <Award className="h-16 w-16 text-purple-600" />
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 inline-block mb-8">
                <Award className="h-16 w-16 mx-auto mb-4" />
                <h5 className="text-2xl font-bold">RE100 공식 멤버</h5>
                <p className="text-purple-100">글로벌 RE100 이니셔티브 정식 참여</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">RE100 참여 효과</h3>
          <p className="text-lg text-slate-600 mb-12">RE100 인증을 통해 얻을 수 있는 다양한 혜택</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationBenefits.map((benefit, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* RE100 Certification Process Summary */}
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6">RE100 인증절차 요약</h3>
          <p className="text-xl text-green-100 max-w-4xl mx-auto">
            체계적인 절차를 통한 RE100 인증으로 글로벌 기업으로 도약하세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <FileCheck className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-bold mb-3">사전 준비</h4>
            <p className="text-green-100 text-sm">전력 사용량 분석 및 계획 수립</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-bold mb-3">신청 접수</h4>
            <p className="text-green-100 text-sm">RE100 참여 신청서 제출</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-bold mb-3">심사 승인</h4>
            <p className="text-green-100 text-sm">자격 검토 및 승인 절차</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10" />
            </div>
            <h4 className="text-xl font-bold mb-3">이행 관리</h4>
            <p className="text-green-100 text-sm">연간 진행 상황 보고 및 관리</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact & Consultation */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">RE100 참여 문의</h3>
          <p className="text-lg text-slate-600 mb-12">
            RE100 참여를 위한 전문 컨설팅 및 상담 서비스를 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 border-0 shadow-xl">
            <div className="text-center">
              <Phone className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-slate-900 mb-4">전화 상담</h4>
              <p className="text-lg text-slate-600 mb-6">RE100 전문가와 직접 상담하세요</p>
              <p className="text-2xl font-bold text-green-600">031-944-0912</p>
              <p className="text-slate-500 mt-2">평일 09:00 - 18:00</p>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-xl">
            <div className="text-center">
              <Mail className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-slate-900 mb-4">이메일 문의</h4>
              <p className="text-lg text-slate-600 mb-6">상세한 자료 요청 및 문의사항</p>
              <p className="text-xl font-bold text-blue-600">sungreen0912@naver.com</p>
              <p className="text-slate-500 mt-2">24시간 접수 가능</p>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <Footer />
  </div>;
};
export default BusinessRE100;