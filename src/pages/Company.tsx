
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Award, Target, Zap, Shield, Leaf, TrendingUp } from 'lucide-react';

const Company = () => {
  const milestones = [
    { year: '2020', event: '주식회사 썬그린에너지 설립', description: '박이준 대표이사 취임' },
    { year: '2021', event: '한국에너지공단 인증', description: '태양광 전문 시공업체 등록' },
    { year: '2022', event: '정부지원사업 수행', description: '신재생에너지 보급사업 참여' },
    { year: '2023', event: '1,000건 시공 달성', description: '누적 시공 건수 1,000건 돌파' },
    { year: '2024', event: '프리미엄 브랜드 런칭', description: '고급 태양광 솔루션 브랜드 출시' }
  ];

  const values = [
    {
      icon: Shield,
      title: '신뢰성',
      description: '정부 인증을 받은 전문 업체로서 고객과의 약속을 철저히 지킵니다.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: '전문성',
      description: '20년 경험의 전문 기술진과 최신 기술로 최고의 품질을 보장합니다.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Leaf,
      title: '지속가능성',
      description: '친환경 에너지 보급을 통해 지속가능한 미래를 만들어갑니다.',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: TrendingUp,
      title: '혁신성',
      description: '끊임없는 연구개발로 고객에게 최적의 솔루션을 제공합니다.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const certifications = [
    '한국에너지공단 신재생에너지 설비업 등록',
    '전기공사업 면허',
    '태양광 발전설비 시공 전문업체 인증',
    'ISO 9001 품질경영시스템 인증',
    '녹색기업 인증'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-medium">
              About Sungreen Energy
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              <span className="text-emerald-600">지속가능한 미래</span>를 만드는
              <br />태양광 에너지 전문기업
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              주식회사 썬그린에너지는 2020년 설립 이래 친환경 에너지 보급과 
              지속가능한 발전을 위해 최선을 다해온 태양광 전문기업입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  회사 개요
                </h2>
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-emerald-600" />
                    <span><strong>회사명:</strong> 주식회사 썬그린에너지</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-emerald-600" />
                    <span><strong>대표이사:</strong> 박이준</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-emerald-600" />
                    <span><strong>사업자등록번호:</strong> 355-86-01790</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-emerald-600" />
                    <span><strong>설립일:</strong> 2020년 1월 8일</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <span><strong>소재지:</strong> 경기도 파주시 조리읍 뇌조로74번길 25-66</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">주요 사업영역</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• 태양광 발전시설 설계 및 시공</li>
                  <li>• 신재생에너지 컨설팅</li>
                  <li>• RE100 대응 솔루션</li>
                  <li>• 정부지원사업 연계 서비스</li>
                  <li>• 태양광 발전설비 유지보수</li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="썬그린에너지 사무실" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">2,500+</div>
                  <div className="text-sm text-slate-600">누적 시공 건수</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              썬그린에너지의 <span className="text-emerald-600">핵심가치</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              우리의 가치는 고객의 만족과 지속가능한 미래를 만드는 원동력입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">연혁</h2>
            <p className="text-xl text-slate-600">
              썬그린에너지의 성장과 발전 과정을 소개합니다
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="border-2 border-emerald-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-emerald-100 text-emerald-800">{milestone.year}</Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900">{milestone.event}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              인증 및 <span className="text-emerald-600">자격현황</span>
            </h2>
            <p className="text-xl text-slate-600">
              정부 인증을 받은 전문 업체로서 높은 신뢰성을 자랑합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-slate-900">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
