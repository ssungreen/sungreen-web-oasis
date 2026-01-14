import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sun, Zap, Leaf, Shield, Users, Award, ArrowRight, CheckCircle, Building, Home, Factory, TrendingUp, Lightbulb, Star, Clock } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import SEO from '@/components/SEO';

const Index = () => {
  const services = [{
    icon: Home,
    title: '주택용 태양광',
    description: '개인 주택을 위한 맞춤형 태양광 시스템 설계 및 시공',
    features: ['무료 현장 조사', '맞춤 설계', '정부 보조금 지원'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    icon: Building,
    title: '상업용 태양광',
    description: '상업시설과 공공건물을 위한 대규모 태양광 발전시설',
    features: ['대용량 시스템', '수익성 분석', 'ESG 경영 지원'],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    icon: Factory,
    title: 'RE100 컨설팅',
    description: '기업의 재생에너지 100% 목표 달성을 위한 전문 컨설팅',
    features: ['현황 진단', '로드맵 수립', '이행 관리'],
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  const achievements = [{
    number: '2,500+',
    label: '누적 시공 건수'
  }, {
    number: '80MW+',
    label: '총 설치 용량'
  }, {
    number: '99.8%',
    label: '고객 만족도'
  }, {
    number: '20년',
    label: '업계 경험'
  }];
  const benefits = [{
    icon: TrendingUp,
    title: '높은 투자 수익률',
    description: '최신 고효율 모듈로 최대 20년 안정적 수익 보장'
  }, {
    icon: Lightbulb,
    title: '스마트 모니터링',
    description: '실시간 발전량 모니터링과 AI 기반 최적화'
  }, {
    icon: Star,
    title: '프리미엄 품질',
    description: '한화 / 현대 모듈 사용'
  }, {
    icon: Clock,
    title: '신속한 시공',
    description: '빠르고 정확한 시공, 최소한의 생활 불편'
  }];
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "썬그린에너지 - 신재생에너지 미래를 위한 선택",
    "description": "썬그린에너지와 함께 깨끗하고 경제적인 태양광 에너지로 지속가능한 미래를 만들어보세요.",
    "thumbnailUrl": [
      "https://ssungreen.com/hero-poster.png"
    ],
    "uploadDate": "2026-01-12T00:00:00+09:00",
    "duration": "PT0M24S",
    "contentUrl": "https://ssungreen.com/hero-video.mp4"
  };

  return <div className="min-h-screen bg-white">
    <SEO
      title="썬그린에너지 - 대한민국 1등 태양광 & RE100 전문기업"
      description="대한민국 1등 태양광 전문기업 썬그린에너지(박이순 대표). 전국 2,500건 이상의 시공 실적과 최고의 기술력으로 고효율 태양광 솔루션을 제공합니다. 전국 어디서나 시공 가능."
      keywords="썬그린에너지, 썬그린, 대한민국 태양광, 전국 태양광 시공, 박이순 대표, RE100 전문, 신재생에너지 1위, 태양광 발전소"
      jsonLd={videoSchema}
    />
    <Header />

    {/* Hero Section - 더욱 임팩트 있게 */}
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Video Background - Cloudflare Deployment Fix v1 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-emerald-900/80"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-sm">
                <Star className="h-4 w-4 mr-2" />
                정부 인증 태양광 전문기업
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight break-keep text-balance">
                <span className="text-emerald-400 block mb-2 text-3xl lg:text-4xl">썬그린에너지</span>
                미래를 위한 선택,
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  신재생에너지
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl break-keep">
                썬그린에너지와 함께 깨끗하고 경제적인 태양광 에너지로
                <br className="hidden sm:block" />
                <span className="text-emerald-400 font-semibold"> 지속가능한 미래</span>를 만들어보세요
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                  무료 견적 받기
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/cases">
                <Button variant="outline" size="lg" className="border-2 border-slate-200 text-slate-900 bg-white/90 hover:bg-white hover:text-slate-800 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                  시공사례 보기
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-6">

              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400" />
                <span className="text-slate-300 font-medium">정부 지원금 최대 활용</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400" />
                <span className="text-slate-300 font-medium">빠르고 정확한 시공</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-8 border border-white/20 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg overflow-hidden p-2">
                  <img src="/sungreen-logo.png" alt="Logo" className="w-full h-auto object-contain" />
                </div>
                <h3 className="text-3xl font-bold mb-3">프리미엄 시공</h3>
                <p className="text-slate-300 text-lg">한화 / 현대 모듈 사용</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((item, index) => <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{item.number}</div>
                  <div className="text-sm text-slate-300">{item.label}</div>
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Section - 새로 추가 */}
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 break-keep text-balance">
            왜 <span className="text-emerald-600">썬그린에너지</span>인가?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto break-keep">
            20년 노하우와 프리미엄 기술로 최고의 태양광 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <benefit.icon className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center leading-relaxed">{benefit.description}</p>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* Services Section - 더욱 세련되게 */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 break-keep">주요 사업분야</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto break-keep">
            주택부터 대규모 상업시설까지, 모든 규모의 태양광 프로젝트를 성공적으로 완수합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service, index) => <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden bg-white">
            <div className="relative h-64 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>)}
              </ul>
            </CardContent>
          </Card>)}
        </div>

        <div className="text-center mt-16">
          <Link to="/business">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-xl">
              사업분야 자세히 보기
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us Section - 더욱 임팩트 있게 */}
    <section className="py-24 bg-gradient-to-br from-slate-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Overlay Removed */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 break-keep text-balance">
            업계 <span className="text-amber-400">최고 수준</span>의 서비스
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto break-keep">
            20년 축적된 노하우와 최신 기술로 고객 만족을 넘어 감동을 전합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-6 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">정부 인증 업체</h3>
            <p className="text-slate-300 leading-relaxed">
              한국에너지공단 인증 및 다수의 정부 지원사업 수행으로 검증된 신뢰성
            </p>
          </div>

          <div className="text-center space-y-6 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">최고 효율</h3>
            <p className="text-slate-300 leading-relaxed">
              한화 / 현대 모듈 사용
            </p>
          </div>

          <div className="text-center space-y-6 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">전문 기술진</h3>
            <p className="text-slate-300 leading-relaxed">
              태양광 전문 자격증 보유 기술자들의 체계적이고 안전한 시공
            </p>
          </div>

        </div>
      </div>
    </section>

    {/* CTA Section - 더욱 강렬하게 */}
    <section className="py-24 bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 relative overflow-hidden">
      {/* CTA Background Overlay Removed */}
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 break-keep text-balance">
          지금 바로 시작하세요!
        </h2>
        <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed break-keep">
          전문가 상담부터 시공, 사후관리까지 모든 과정을 책임지는 썬그린에너지와 함께
          <br className="hidden sm:block" />
          <span className="font-bold">에너지 독립</span>을 실현하세요
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
              무료 상담 신청하기
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
          <a href="tel:031-944-0912">
            <Button variant="outline" size="lg" className="border-2 border-slate-200 text-slate-900 bg-white/90 hover:bg-white hover:text-slate-800 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">📞 전화상담: 031-944-0912</Button>
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>;
};
export default Index;