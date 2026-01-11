import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TreePine, CheckCircle, ArrowRight, Phone, Users, Leaf, Home, Zap, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const EcoVillageSupport = () => {
  const processSteps = [
    { step: 1, title: '사업신청', description: '마을공동체 신청' },
    { step: 2, title: '주민동의서 취득', description: '마을 주민 합의' },
    { step: 3, title: '현장조사', description: '설치환경 조사' },
    { step: 4, title: '승인완료', description: '사업계획 승인' },
    { step: 5, title: '설치완료', description: '시설 설치 완료' }
  ];

  const villageBenefits = [
    '마을 단위 에너지 자립',
    '친환경 마을 조성',
    '지역사회 상생',
    '지속가능한 발전',
    '공동체 활성화',
    '마을 복지시설 구축'
  ];

  const expectedEffects = [
    {
      icon: Users,
      title: '환경 오염 감소',
      description: '친환경 에너지를 통한 탄소배출 감소'
    },
    {
      icon: Zap,
      title: '개인주택에서 자가사업 실적조건 진입요건 적격',
      description: '마을 차원의 에너지 자립과 경제성 확보'
    },
    {
      icon: Home,
      title: '마을 공동시설, 부대시설, 설치여부으로 마을 활성화시설 등 마을복지시설 구축',
      description: '마을회관, 체육시설 등 공동시설을 통한 주민 복지 향상'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="에코빌리지 조성 지원 - 썬그린에너지"
        description="지속가능한 친환경 에너지 마을, 에코빌리지 조성을 위한 통합 지원 서비스를 제공합니다. 공동체 에너지 자립과 탄소 중립 마을 실현을 위해 썬그린에너지가 함께합니다."
        keywords="에코빌리지 지원, 친환경 마을 조성, 에너지 자립 마을, 탄소중립 공동체, 썬그린에너지 에코 솔루션"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <TreePine className="h-12 w-12 text-green-400 mr-4" />
            <Badge className="px-8 py-4 bg-green-500/20 text-green-300 text-xl font-medium backdrop-blur-sm border border-green-400/30">
              ECO-VILLAGE SUPPORT PROJECT
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              에너지자립마을지원사업
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            에너지자립마을에 대한 정보를 확인하세요
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: Definition */}
          <div className="bg-emerald-50 rounded-3xl p-10 shadow-sm border border-emerald-100 mb-16 items-center flex flex-col md:flex-row gap-8">
            <div className="bg-emerald-600 text-white rounded-2xl px-6 py-4 text-3xl font-bold whitespace-nowrap text-center">
              에너지자립마을이란?
            </div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              에너지 자립마을’은 지역(마을)에서 신재생에너지를 자체생산하여 마을공동체의 에너지 자립률을 높이는 사업입니다.
            </p>
          </div>

          {/* Section 2: Purpose */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-emerald-500 pl-4">추진목적</h2>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  직접 재생에너지 생산에 참여해 에너지 사용을 최소화, 자립도를 높이고,
                  도시가스 미공급지역 등에 신재생에너지(태양광) 설치 지원으로 전기요금 절감 및 마을 발전사업 추진
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Section 3: Support Ratio & Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">지원비율</h2>
              <div className="bg-emerald-600 text-white rounded-2xl p-8 text-center mb-6">
                <div className="text-2xl font-bold mb-2">총 설치비용 최대 80% 지원</div>
                <div className="text-emerald-100">(시비 50%, 도비 30% → 자부담율 20%)</div>
              </div>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">총사업비</span>
                  <span className="font-bold text-slate-900">170,280천원</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">시비</span>
                  <span className="font-bold text-blue-600 font-mono">85,140천원</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">도비</span>
                  <span className="font-bold text-emerald-600 font-mono">51,084천원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">자부담</span>
                  <span className="font-bold text-orange-600 font-mono">34,056천원</span>
                </div>
                <p className="text-sm text-slate-400 mt-4">
                  *각 년도별 사업비는 예산편성 등 상황에 따라 자부담률이 증가할 수 있음<br />
                  (자가용 3KW 기준 / 1,135천원)
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-10 shadow-xl text-white">
              <h2 className="text-3xl font-bold mb-8">주요 실적</h2>
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">23년 고양시 에너지자립마을 조성사업</h3>
                <div className="text-4xl font-bold mb-6">99KW급</div>
                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-emerald-500" />
                    <span>자가용 90KW</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-emerald-500" />
                    <span>마을발전소 9KW</span>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-slate-400">썬그린에너지는 지역 공동체의 에너지 자립을 선도합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">에너지자립마을 조성 문의</h2>
          <p className="text-xl text-emerald-100 mb-8">
            지속가능한 친환경 마을을 함께 만들어보세요. 전문 컨설턴트가 상담해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                무료 상담 신청
              </Link>
            </Button>
            <div className="text-white text-2xl font-bold">
              📞 031-944-0912
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcoVillageSupport;