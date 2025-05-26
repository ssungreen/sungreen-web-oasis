
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Zap, 
  Leaf, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Building,
  Home,
  Factory
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Home,
      title: '주택용 태양광',
      description: '개인 주택을 위한 맞춤형 태양광 시스템 설계 및 시공',
      features: ['무료 현장 조사', '맞춤 설계', '정부 보조금 지원']
    },
    {
      icon: Building,
      title: '상업용 태양광',
      description: '상업시설과 공공건물을 위한 대규모 태양광 발전시설',
      features: ['대용량 시스템', '수익성 분석', 'ESG 경영 지원']
    },
    {
      icon: Factory,
      title: 'RE100 컨설팅',
      description: '기업의 재생에너지 100% 목표 달성을 위한 전문 컨설팅',
      features: ['현황 진단', '로드맵 수립', '이행 관리']
    }
  ];

  const achievements = [
    { number: '1,500+', label: '누적 시공 건수' },
    { number: '50MW+', label: '총 설치 용량' },
    { number: '99%', label: '고객 만족도' },
    { number: '15년', label: '업계 경험' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  태양의 힘으로
                  <br />
                  <span className="text-amber-400">미래를 밝힙니다</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  전문적인 태양광 시공으로 깨끗한 에너지와 경제적 효과를 동시에 실현하세요
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold">
                    무료 견적 받기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/cases">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg"
                  >
                    설치사례 보기
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">정부 인증 업체</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">15년 A/S 보장</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
                <div className="text-center">
                  <Sun className="h-16 w-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">전문 시공 업체</h3>
                  <p className="text-blue-100">정부 지원사업 다수 수행</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-amber-400">{item.number}</div>
                      <div className="text-sm text-blue-100">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">주요 사업분야</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 규모와 용도의 태양광 발전시설 설계부터 시공, 유지보수까지 원스톱 서비스를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-amber-500 to-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/business">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                사업분야 자세히 보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">썬그린에너지를 선택하는 이유</h2>
            <p className="text-xl text-gray-600">15년 노하우와 차별화된 서비스로 고객 만족을 실현합니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">정부 인증</h3>
              <p className="text-gray-600">정부 지원사업 다수 수행으로 검증된 기술력과 신뢰성</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">고효율 시스템</h3>
              <p className="text-gray-600">최신 고효율 모듈과 인버터로 최대 발전량 보장</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">전문 인력</h3>
              <p className="text-gray-600">태양광 전문 기술자들의 체계적이고 안전한 시공</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">A/S 보장</h3>
              <p className="text-gray-600">15년 장기 A/S와 지속적인 모니터링 서비스</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-green-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            지금 시작하세요!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            전문가와 상담하고 맞춤형 태양광 시스템으로 에너지 비용을 절약하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                무료 상담 신청
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:02-1234-5678">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              >
                전화 상담: 02-1234-5678
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
