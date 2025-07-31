import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Award, Target, Zap, Shield, Leaf, TrendingUp, MapPin, Phone, Mail, Factory, Calendar, CheckCircle } from 'lucide-react';
const Company = () => {
  const milestones = [{
    year: '2024',
    event: '지속적 성장',
    description: '태양광 시공 누적 2,500건 달성 및 RE100 컨설팅 서비스 확대'
  }, {
    year: '2023',
    event: '사업 확장',
    description: '정부지원사업 대폭 확대 및 기업 고객 전담팀 신설'
  }, {
    year: '2022',
    event: '기술 혁신',
    description: '스마트 모니터링 시스템 도입 및 AI 기반 발전량 예측 서비스 개시'
  }, {
    year: '2021',
    event: '품질 인증',
    description: '한국에너지공단 우수 시공업체 선정 및 ISO 9001 품질경영시스템 인증'
  }, {
    year: '2020',
    event: '회사 설립',
    description: '주식회사 썬그린에너지 설립 (대표이사 박이순)'
  }];
  const businessAreas = [{
    title: '주택용 태양광',
    desc: '단독주택, 전원주택 맞춤형 태양광 시스템'
  }, {
    title: '상업용 태양광',
    desc: '공장, 창고, 상가 등 대용량 태양광 발전소'
  }, {
    title: 'RE100 컨설팅',
    desc: '기업의 재생에너지 100% 달성 지원'
  }, {
    title: '정부지원사업',
    desc: '신재생에너지 보급사업 연계 서비스'
  }];
  const certifications = ['신재생에너지설비 A/S지정 기술·전문인력 등록 확인서', '중소기업확인서', '전기공사업 등록증', '건설업등록증', '기술혁신형 중소기업확인서', '표창장(우수기업 선정)', 'ISO 9001 품질경영시스템 인증'];
  const companyStats = [{
    number: '2,500+',
    label: '누적 시공건수',
    icon: Factory
  }, {
    number: '4년+',
    label: '사업 경력',
    icon: Calendar
  }, {
    number: '100%',
    label: '고객 만족도',
    icon: CheckCircle
  }, {
    number: '24시간',
    label: 'A/S 지원',
    icon: Shield
  }];
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 px-6 py-3 bg-emerald-500/20 text-emerald-300 text-lg font-medium backdrop-blur-sm border border-emerald-400/30">
            COMPANY
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              지속가능한 미래
            </span>
            <br />
            <span className="text-white">를 만드는 기업</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            2020년 설립 이래 친환경 에너지 보급의 선두주자로서<br />
            고객과 함께 성장해온 태양광 전문기업입니다
          </p>
          
          {/* Company Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {companyStats.map((stat, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <stat.icon className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                  <span className="text-emerald-600">썬그린에너지</span>는
                </h2>
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    신재생에너지법 발전사 신고 25년 전부터 이미 
                    신재생에너지 설비사업을 집중으로 시작하는 업체로 성장해 왔으며,
                  </p>
                  <p>
                    초기 태양광 온수기에서 태양광 발전사업을 변화하였습니다.
                  </p>
                  <p className="font-semibold text-emerald-600">
                    신재생에너지의 대표로 여겨지는 <span className="underline">행정관리 신재생에너지 전문기업으로 발돋움 하였습니다.</span>
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Building className="h-6 w-6 text-emerald-600 mr-3" />
                  회사 정보
                </h3>
                <div className="grid grid-cols-1 gap-4 text-slate-700">
                  <div className="flex items-center">
                    <span className="font-semibold text-slate-900 w-32">회사명</span>
                    <span>주식회사 썬그린에너지</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-slate-900 w-32">대표이사</span>
                    <span>박이순</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-slate-900 w-32">설립일</span>
                    <span>2020년 1월 8일</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-slate-900 w-32">사업자번호</span>
                    <span>355-86-01790</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-slate-900 w-32">소재지</span>
                    <span>경기도 파주시 조리읍 뇌조로74번길 25-66</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="썬그린에너지 태양광 시설" className="rounded-3xl shadow-2xl" />
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-emerald-500 to-blue-500 p-8 rounded-2xl shadow-2xl text-white">
                  <div className="text-4xl font-bold">2020</div>
                  <div className="text-lg">설립년도</div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">주요 사업영역</h3>
                <div className="grid grid-cols-1 gap-4">
                  {businessAreas.map((area, index) => <div key={index} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-slate-900">{area.title}</div>
                        <div className="text-sm text-slate-600">{area.desc}</div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Future */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              HISTORY<br />
              <span className="text-emerald-600">FUTURE</span>
            </h2>
            <p className="text-xl text-slate-600">
              고객의 신뢰와 발전으로, 성장하였습니다.
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8">
                  <img src={index % 2 === 0 ? 'https://images.unsplash.com/photo-1497436072909-f5e4be1713c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' : 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'} alt={milestone.event} className="rounded-2xl shadow-xl w-full" />
                </div>
                <div className="w-1/2 px-8">
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50">
                    <CardHeader>
                      <div className="text-6xl font-bold text-emerald-600 mb-4">{milestone.year}</div>
                      <CardTitle className="text-2xl font-bold text-slate-900">{milestone.event}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 text-lg leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="text-emerald-600">인증서</span> 및 자격현황
            </h2>
            <p className="text-xl text-slate-600">
              정부 인증을 받은 전문 업체로서 높은 신뢰성을 자랑합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{cert}</h3>
                  <p className="text-sm text-slate-600">정부 공인 인증서</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              LOCATION
            </h2>
            <p className="text-xl text-slate-300">
              찾아오시는 길
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="썬그린에너지 위치" className="rounded-2xl shadow-lg w-full" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-slate-900">ADDRESS</div>
                    <div className="text-slate-700">경기도 파주시 조리읍 뇌조로74번길 25-66</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <Phone className="h-6 w-6 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-slate-900">TEL</div>
                    <div className="text-slate-700">031-944-0912</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                  <Mail className="h-6 w-6 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-slate-900">E-MAIL</div>
                    <div className="text-slate-700">sungreen0912@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Company;