
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';

const Certifications = () => {
  const certifications = [
    {
      title: '신재생에너지설비 A/S지정 기술·전문인력 등록 확인서',
      category: '정부 인증',
      description: '신재생에너지 설비 전문 기술인력 보유 확인'
    },
    {
      title: '중소기업확인서',
      category: '기업 인증',
      description: '중소벤처기업부 중소기업 확인'
    },
    {
      title: '전기공사업 등록증',
      category: '사업 등록',
      description: '전기공사업 정식 등록 및 운영 자격'
    },
    {
      title: '건설업등록증',
      category: '사업 등록',
      description: '건설업 정식 등록 및 시공 자격'
    },
    {
      title: '기술혁신형 중소기업확인서',
      category: '기술 인증',
      description: '기술혁신 역량 우수 중소기업 인증'
    },
    {
      title: '표창장(우수기업 선정)',
      category: '정부 표창',
      description: '한국에너지공단 우수 시공업체 선정'
    },
    {
      title: 'ISO 9001 품질경영시스템 인증',
      category: '국제 인증',
      description: '국제 표준 품질경영시스템 인증'
    }
  ];

  const certificationStats = [
    { number: '7개', label: '보유 인증서', icon: Award },
    { number: '100%', label: '정부 인증률', icon: Shield },
    { number: '4년+', label: '인증 유지', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 px-6 py-3 bg-emerald-500/20 text-emerald-300 text-lg font-medium backdrop-blur-sm border border-emerald-400/30">
            CERTIFICATIONS
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              면허 및 인증
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            정부 공인 전문업체로서의 신뢰성
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {certificationStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <stat.icon className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="text-emerald-600">보유 인증서</span> 현황
            </h2>
            <p className="text-xl text-slate-600">
              정부 인증을 받은 전문 업체로서 높은 신뢰성을 자랑합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {cert.category}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-3 leading-tight">{cert.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Message */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-2xl border border-emerald-200">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              정부 공인 <span className="text-emerald-600">전문 업체</span>
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              썬그린에너지는 정부에서 인증한 각종 자격과 면허를 보유한 전문 업체입니다.
              체계적인 품질관리와 전문성을 바탕으로 고객에게 최상의 서비스를 제공하고 있습니다.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>정부 인증 완료</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>지속적 갱신</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span>품질 보증</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
