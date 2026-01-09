import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Sun, Users, TrendingUp } from 'lucide-react';

const OpportunityIncome = () => {
  const benefits = [
    '지역 주민 소득 창출',
    '농촌 경제 활성화',
    '친환경 에너지 생산',
    '지역 공동체 강화'
  ];

  const process = [
    { step: '01', title: '사업 계획', desc: '지역 특성에 맞는 맞춤형 계획 수립' },
    { step: '02', title: '인허가', desc: '관련 인허가 및 승인 절차 진행' },
    { step: '03', title: '시공', desc: '전문 기술진을 통한 체계적 시공' },
    { step: '04', title: '운영', desc: '지속적인 운영 관리 및 수익 창출' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">기회소득마을사업</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              지역 주민들의 소득 창출과 농촌 경제 활성화를 위한 태양광 발전 사업
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: Definition */}
          <div className="bg-emerald-50 rounded-3xl p-10 shadow-sm border border-emerald-100 mb-16 items-center flex flex-col md:flex-row gap-8">
            <div className="bg-emerald-600 text-white rounded-2xl px-6 py-4 text-3xl font-bold whitespace-nowrap text-center">
              기회소득마을이란?
            </div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              기후 위기를 선도하기 위한 과정에서 주도적으로 마을 공동체가 참여해 기회소득을 얻을 수 있도록
              경기도가 태양광 발전기 설치비를 80%까지 지원하며, 마을 주민들은 마을 햇빛 발전소로부터
              20년간 매달 15만원 이상씩 ‘햇빛 기회소득’을 받게 해주는 사업입니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Section 2: Support Details */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="bg-slate-900 p-6 text-white text-2xl font-bold">설치비 지원</div>
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  도와 시·군은 동일 시·군 내 **10세대 이상**으로 구성된 마을 공동체가
                  사유지나 공유지에 상업용 태양광발전기(설비용량 총합 100kW 이상 1MW 미만)를
                  설치하고자 할 때 설치비의 **80%(도비 30%, 시·군 50%)**를 지원합니다.
                </p>
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-800">정부 지원 합계</span>
                  <span className="text-3xl font-bold text-emerald-600">80%</span>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Expected Benefits */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-emerald-500 pl-4">기대 효과</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center space-x-4 hover:shadow-lg transition-shadow">
                  <div className="bg-emerald-100 p-4 rounded-full text-emerald-600">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">매달 15만원 이상 수익</h4>
                    <p className="text-slate-600">20년간 매달 꾸준한 햇빛 기회소득 지급</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center space-x-4 hover:shadow-lg transition-shadow">
                  <div className="bg-emerald-100 p-4 rounded-full text-emerald-600">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">마을 공동체 활성화</h4>
                    <p className="text-slate-600">주민들이 주도적으로 참여하는 에너지 자립 마을</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center space-x-4 hover:shadow-lg transition-shadow">
                  <div className="bg-emerald-100 p-4 rounded-full text-emerald-600">
                    <Sun className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">기후 위기 대응</h4>
                    <p className="text-slate-600">친환경 태양광 에너지를 통한 탄소 중립 실현</p>
                  </div>
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

export default OpportunityIncome;