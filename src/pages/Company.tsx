
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Target, 
  Shield,
  Calendar,
  Building,
  CheckCircle
} from 'lucide-react';

const Company = () => {
  const certifications = [
    { name: '신재생에너지 전문기업', year: '2020', type: '정부인증' },
    { name: 'ISO 9001:2015', year: '2019', type: '품질경영' },
    { name: '건설업 등록', year: '2015', type: '시공업체' },
    { name: 'PV 모듈 품질인증', year: '2021', type: '제품인증' }
  ];

  const milestones = [
    { year: '2010', event: '주식회사 썬그린에너지 설립' },
    { year: '2012', event: '첫 주택용 태양광 설치 완료' },
    { year: '2015', event: '건설업 등록 및 사업 확장' },
    { year: '2018', event: '누적 시공량 10MW 달성' },
    { year: '2020', event: '신재생에너지 전문기업 인증 획득' },
    { year: '2022', event: 'RE100 컨설팅 사업 시작' },
    { year: '2024', event: '누적 시공량 50MW 달성' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">회사소개</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              깨끗한 에너지로 지속가능한 미래를 만들어가는 태양광 전문기업
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">대표이사 인사말</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  안녕하십니까. 주식회사 썬그린에너지 대표이사 김태양입니다.
                </p>
                <p>
                  저희 썬그린에너지는 2010년 설립 이래 태양광 발전시설 설계, 시공, 유지보수 분야에서 
                  축적한 15년의 전문 경험과 노하우를 바탕으로 고객 여러분께 최고 품질의 서비스를 
                  제공하고 있습니다.
                </p>
                <p>
                  기후변화와 환경보호가 전 세계적 화두가 된 오늘날, 재생에너지의 중요성은 
                  그 어느 때보다 커지고 있습니다. 저희는 태양의 무한한 에너지를 활용하여 
                  깨끗하고 지속가능한 미래를 만들어가는 데 앞장서고 있습니다.
                </p>
                <p>
                  앞으로도 최고의 기술력과 차별화된 서비스로 고객 만족을 실현하며, 
                  대한민국 재생에너지 보급 확산에 기여하겠습니다.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-gray-900">주식회사 썬그린에너지</p>
                <p className="text-amber-600 font-semibold">대표이사 김태양</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900">김태양 대표이사</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">서울대학교 전기공학과 졸업</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">태양광 업계 경력 20년</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">신재생에너지 기술사</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">한국태양광산업협회 이사</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 가치</h2>
            <p className="text-xl text-gray-600">썬그린에너지가 추구하는 가치와 비전</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">혁신</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  최신 기술과 창의적 사고로 태양광 에너지의 새로운 가능성을 제시합니다
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">신뢰</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  정직하고 투명한 서비스로 고객과의 신뢰 관계를 구축합니다
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">상생</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  고객, 직원, 파트너와 함께 성장하며 지속가능한 가치를 창출합니다
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">회사 연혁</h2>
            <p className="text-xl text-gray-600">썬그린에너지의 성장 과정</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-5 w-5 text-amber-600" />
                          <span className="font-bold text-amber-600 text-lg">{milestone.year}</span>
                        </div>
                        <p className="text-gray-700 font-medium">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">인증 현황</h2>
            <p className="text-xl text-gray-600">검증된 기술력과 신뢰성</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-2">{cert.type}</Badge>
                  <CardTitle className="text-lg font-bold text-gray-900">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{cert.year}년 취득</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">회사 정보</h2>
          </div>

          <Card className="border-0 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-gray-900">회사명:</span>
                    <span className="text-gray-700">주식회사 썬그린에너지</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-gray-900">대표이사:</span>
                    <span className="text-gray-700">김태양</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-gray-900">설립일:</span>
                    <span className="text-gray-700">2010년 3월 15일</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-gray-900">사업자등록번호:</span>
                    <span className="text-gray-700">123-45-67890</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900 block">본사 주소:</span>
                      <span className="text-gray-700">서울특별시 강남구 테헤란로 123 썬그린빌딩 5층</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900 block">주요 사업:</span>
                      <span className="text-gray-700">태양광 발전시설 설계, 시공, 유지보수</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-gray-900">직원 수:</span>
                    <span className="text-gray-700">35명</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
