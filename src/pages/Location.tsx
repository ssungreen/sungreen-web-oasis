import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Car, Train } from 'lucide-react';
const Location = () => {
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
            LOCATION
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              오시는 길
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            찾아오시는 길과 연락처 안내
          </p>
        </div>
      </section>

      {/* Contact & Location Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  <span className="text-emerald-600">연락처</span> 정보
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl">
                    <MapPin className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-2">주소</div>
                      <div className="text-slate-700">경기도 파주시 조리읍 뇌조로74번길 25-66</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                    <Phone className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-2">전화번호</div>
                      <div className="text-slate-700">031-944-0912</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                    <Mail className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-2">이메일</div>
                      <div className="text-slate-700">sungreen0912@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                    <Clock className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-2">운영시간</div>
                      <div className="text-slate-700">
                        평일 09:00 - 18:00<br />
                        토요일 09:00 - 13:00<br />
                        일요일 및 공휴일 휴무
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Directions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  <span className="text-emerald-600">찾아오시는</span> 길
                </h2>
                
                {/* Map Placeholder */}
                <div className="bg-slate-100 rounded-2xl p-8 mb-8 text-center">
                  <MapPin className="h-24 w-24 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">지도</h3>
                  <p className="text-slate-600">경기도 파주시 조리읍 뇌조로74번길 25-66</p>
                </div>
                
                {/* Transportation Info */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <Car className="h-6 w-6 text-emerald-600" />
                      <h3 className="text-lg font-bold text-slate-900">자동차 이용시</h3>
                    </div>
                    <div className="space-y-2 text-slate-700">
                      <p>• 서울 방면: 자유로 → 파주IC → 조리읍 방향</p>
                      <p>• 인천 방면: 제2자유로 → 파주IC → 조리읍 방향</p>
                      <p>• 주차: 건물 내 전용 주차장 이용</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <Train className="h-6 w-6 text-emerald-600" />
                      <h3 className="text-lg font-bold text-slate-900">대중교통 이용시</h3>
                    </div>
                    <div className="space-y-2 text-slate-700">
                      <p>• 지하철 3호선 대화역 → 버스 환승</p>
                      <p>• 파주시내버스 이용 (조리읍 방향)</p>
                      <p>• 상세한 대중교통 안내는 전화 문의</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-2xl border border-emerald-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              <span className="text-emerald-600">방문 전</span> 연락 주세요
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              보다 정확한 상담을 위해 방문 전 미리 연락 주시면 
              전문 상담사가 준비하여 더욱 자세한 안내를 도와드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:031-944-0912" className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>전화 상담</span>
              </a>
              <a href="mailto:info@sungreen.co.kr" className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>이메일 문의</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Location;