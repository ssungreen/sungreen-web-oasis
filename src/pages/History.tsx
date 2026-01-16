
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';

const History = () => {
  const milestones = [
    {
      year: '2024',
      event: '지속적 성장',
      description: '태양광 시공 누적 2,500건 달성 및 RE100 컨설팅 서비스 확대',
      achievements: [
        '태양광 시공 누적 2,500건 달성',
        'RE100 컨설팅 서비스 확대',
        '기업 고객 전담팀 운영',
        '스마트 모니터링 시스템 고도화'
      ],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2023',
      event: '사업 확장',
      description: '정부지원사업 대폭 확대 및 기업 고객 전담팀 신설',
      achievements: [
        '정부지원사업 수행 건수 200% 증가',
        '기업 고객 전담팀 신설',
        'RE100 컨설팅 서비스 런칭',
        '우수 협력업체 네트워크 구축'
      ],
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2022',
      event: '기술 혁신',
      description: '스마트 모니터링 시스템 도입 및 AI 기반 발전량 예측 서비스 개시',
      achievements: [
        '스마트 모니터링 시스템 도입',
        'AI 기반 발전량 예측 서비스 개시',
        '원격 관리 시스템 구축',
        '고객 만족도 98% 달성'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2021',
      event: '품질 인증',
      description: '한국에너지공단 우수 시공업체 선정 및 ISO 9001 품질경영시스템 인증',
      achievements: [
        '한국에너지공단 우수 시공업체 선정',
        'ISO 9001 품질경영시스템 인증',
        '누적 시공 1,000건 돌파'
      ],
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      year: '2020',
      event: '회사 설립',
      description: '주식회사 썬그린에너지 설립 (대표이사 박이순)',
      achievements: [
        '주식회사 썬그린에너지 설립',
        '대표이사 박이순 취임',
        '태양광 시공 사업 개시',
        '전문 기술진 확보'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 px-6 py-3 bg-emerald-500/20 text-emerald-300 text-lg font-medium backdrop-blur-sm border border-emerald-400/30">
            HISTORY
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              회사 연혁
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            고객의 신뢰와 함께 성장해온 발자취
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              HISTORY<br />
              <span className="text-emerald-600">TIMELINE</span>
            </h2>
            <p className="text-xl text-slate-600">
              지속적인 혁신과 성장의 여정
            </p>
          </div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8">
                  <img
                    src={milestone.image}
                    alt={milestone.event}
                    className="rounded-2xl shadow-xl w-full"
                  />
                </div>
                <div className="w-1/2 px-8">
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50">
                    <CardHeader>
                      <div className="text-6xl font-bold text-emerald-600 mb-4">{milestone.year}</div>
                      <CardTitle className="text-2xl font-bold text-slate-900 mb-4">{milestone.event}</CardTitle>
                      <p className="text-slate-700 text-lg leading-relaxed mb-6">{milestone.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {milestone.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
