import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, DollarSign, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const BusinessRPS = () => {
  const rpsFeatures = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'REC 발급',
      description: '신재생에너지 공급인증서 발급 및 관리'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: '수익 창출',
      description: 'REC 거래를 통한 추가 수익 확보'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '의무 이행',
      description: '신재생에너지 공급 의무 이행 지원'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: '시장 분석',
      description: 'REC 시장 동향 분석 및 최적 거래 전략'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">태양광 발전 솔루션 (RPS 사업)</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              안정적인 미래 수익의 시작, 썬그린에너지의 RPS 솔루션
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Definition */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-emerald-100 mb-16 items-center flex flex-col md:flex-row gap-8">
            <div className="bg-emerald-600 text-white rounded-2xl px-6 py-4 text-3xl font-bold whitespace-nowrap">RPS란?</div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              태양광 발전사업은 개인 또는 법인 등 기업의 규모에 관계없이 부지와 공간이 있다면
              태양광 발전소를 설치하고 생산된 전기를 한전 및 공급의무 발전사에 판매하여
              수익을 창출해내는 신·재생에너지 사업입니다.
            </p>
          </div>

          {/* Income Model */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">생산한 전력으로 두가지 수익을 동시에 창출!</h2>
            <div className="inline-block bg-emerald-50 border-2 border-emerald-500 rounded-2xl px-8 py-6">
              <div className="text-2xl font-bold text-emerald-700">
                태양광 발전사업자 수익 = <span className="text-blue-600">전력판매수익(SMP)</span> + <span className="text-teal-600">REC 거래 수익</span>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-10">
              태양광을 설치할 부지와 공간이 있다면,<br />
              가장 안전하고 수익이 보장되는 사업을 시작할 수 있습니다.
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "정부의 신·재생 에너지, 탄소중립 정책으로 장기적이며 안정적인 수익을 낼 수 있습니다.",
                "전력 판매처가 한국전력과 공급의무발전사이기 때문에 영업활동과 미수금 걱정 없은이.",
                "잉여 공간(건물옥상, 야외주차장 등)을 활용한다면 적은 자본으로 시작이 가능합니다.",
                "금융지원사업을 통해 최저금리로 90%까지 대출이 가능합니다.",
                "무한하고 청정한 태양에너지를 사용하기 때문에 친환경적인 경제활동입니다.",
                "태양광발전소에 사용되는 모듈 및 구조물의 평균 수명은 25년 이상으로 유지관리가 쉽고 추가비용이 적습니다.",
                "설치 후 별도의 노동력을 필요로 하지 않으며, 노후를 대비한 재테크 수단입니다."
              ].map((text, idx) => (
                <Card key={idx} className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed text-sm font-medium">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Deep Learning Solution */}
          <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">경험에 따른 맞춤형, 딥러닝 솔루션 제공</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  (주)썬그린에너지는 전국 모든 지역에 태양광발전소 설치 및 운영함으로 인해 탁월한 경험을 보유하였고,
                  이에 대한 빅데이터를 바탕으로 딥러닝 솔루션을 제공합니다. 직접 프로젝트를 관리하며 에너지분야에 대한 깊은
                  통찰과 고도의 지식을 제공합니다.
                </p>
                <p>
                  (주)썬그린에너지는 고객니즈에 부합하는 가장 효율적인 솔루션을 제공하여,
                  높은 프로젝트 성공률을 실행하였으며 현장 실무 위주로 프로젝트를 진행하기에, 고객에게 빠른 피드백을 전달하며
                  고객의 니즈를 적극 반영하여 만족도가 높은 프로젝트 준비 및 실행을 위해 최선의 노력을 다하고 있습니다.
                </p>
              </div>

              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex space-x-4">
                  <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 font-bold">부 지</span>
                  <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 font-bold">자 재</span>
                  <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20 font-bold">실 행</span>
                </div>
                <ArrowRight className="h-8 w-8 text-emerald-500 hidden md:block" />
                <div className="bg-emerald-600 px-8 py-3 rounded-2xl font-bold shadow-lg shadow-emerald-600/20">
                  솔라 EPC 딥러닝 솔루션
                </div>
                <ArrowRight className="h-8 w-8 text-emerald-500 hidden md:block" />
                <div className="bg-white text-slate-900 px-8 py-3 rounded-2xl font-bold">
                  최적화 발전소 건설
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

export default BusinessRPS;