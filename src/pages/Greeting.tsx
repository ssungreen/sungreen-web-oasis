import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Target, Heart } from 'lucide-react';
const Greeting = () => {
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 px-6 py-3 bg-emerald-500/20 text-emerald-300 text-lg font-medium backdrop-blur-sm border border-emerald-400/30">
            GREETING
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              대표이사 인사말
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            지속가능한 미래를 위한 새로운 에너지 혁신
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                  <span className="text-emerald-600">환영합니다</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    주식회사 썬그린에너지를 찾아주신 모든 분들께 진심으로 감사드립니다.
                  </p>
                  <p>
                    저희 썬그린에너지는 2020년 설립 이래 <strong className="text-emerald-600">태양광 발전시설 시공 전문기업</strong>으로서 
                    친환경 에너지 보급의 선두주자 역할을 해왔습니다.
                  </p>
                  <p>
                    기후변화와 환경보호에 대한 사회적 관심이 높아지는 가운데, 
                    재생에너지의 중요성은 날로 커지고 있습니다. 
                    저희는 이러한 시대적 요구에 부응하여 <strong className="text-emerald-600">최고 품질의 태양광 시설</strong>을 
                    설치·관리하며 고객 여러분의 에너지 자립과 경제적 이익 창출에 기여하고 있습니다.
                  </p>
                  <p>
                    앞으로도 지속적인 기술 혁신과 품질 향상을 통해 
                    <strong className="text-emerald-600">고객 만족</strong>과 <strong className="text-emerald-600">환경 보호</strong>라는 
                    두 마리 토끼를 모두 잡는 기업이 되겠습니다.
                  </p>
                  <p className="text-emerald-600 font-semibold text-xl">
                    감사합니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-2xl border border-emerald-200">
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900 mb-2">박이순</div>
                  <div className="text-lg text-slate-600">주식회사 썬그린에너지 대표이사</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="썬그린에너지 대표이사" className="rounded-3xl shadow-2xl" />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 text-center">
                  <Building className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">2,500+</div>
                  <div className="text-sm text-slate-600">누적 시공건수</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 text-center">
                  <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
                  <div className="text-sm text-slate-600">고객 만족도</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 text-center">
                  <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">4년+</div>
                  <div className="text-sm text-slate-600">사업 경력</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 text-center">
                  <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-slate-900 mb-2">24H</div>
                  <div className="text-sm text-slate-600">A/S 지원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Greeting;