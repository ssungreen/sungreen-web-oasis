import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Car, Navigation, Eye, Share2, ExternalLink, Copy, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import { useState, useCallback } from 'react';

// 썬그린에너지 네이버 플레이스 정보
const NAVER_PLACE = {
  placeId: '2028894717',
  shortUrl: 'https://naver.me/GwfKN4ca',
  placeUrl: 'https://m.place.naver.com/place/2028894717/home',
  directionsUrl: 'https://map.naver.com/p/directions/-/14116879.367614884,4544336.530673504,%EC%8D%AC%EA%B7%B8%EB%A6%B0%EC%97%90%EB%84%88%EC%A7%80,2028894717,PLACE_POI/-/car?c=15.00,0,0,0,dh',
  streetViewUrl: 'https://map.naver.com/p/entry/place/2028894717?p=UfIbbucu4CB6yTitz8S_qg,-80,10,80,Float&c=15.00,0,0,0,adh&placePath=/home',
};

const Location = () => {
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const shareTitle = '썬그린에너지 - 오시는 길';
  const shareText = '경기도 파주시 조리읍 뇌조로74번길 25-66 | 썬그린에너지';
  const shareUrl = NAVER_PLACE.shortUrl;

  // 공유하기 클릭 시: 모바일은 네이티브 공유, PC는 모달
  const handleShare = useCallback(async () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile && navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
        return;
      } catch { /* 사용자가 취소한 경우 */ }
    }
    setShowShareModal(true);
  }, []);

  // 링크 복사
  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  // SNS 공유 URL 생성
  const socialLinks = [
    { name: '페이스북', color: '#1877F2', textColor: '#fff', icon: 'f', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { name: 'X', color: '#000000', textColor: '#fff', icon: '𝕏', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { name: 'LINE', color: '#06C755', textColor: '#fff', icon: 'L', url: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}` },
    { name: '이메일', color: '#EA4335', textColor: '#fff', icon: '✉', url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + '\n' + shareUrl)}` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="오시는 길 - 썬그린에너지"
        description="경기도 파주에 위치한 썬그린에너지 본사 오시는 길 안내입니다. 방문 상담 및 전화 문의를 통해 최적의 태양광 솔루션을 만나보세요."
        keywords="썬그린에너지 위치, 파주 태양광 기업, 썬그린에너지 본사, 태양광 방문 상담"
      />
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
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight break-keep text-balance">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              오시는 길
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed break-keep">
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
                      <div className="text-slate-700">sungreen0912@naver.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
                    <Clock className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-2">운영시간</div>
                      <div className="text-slate-700">
                        평일 09:00 - 18:00<br />
                        토요일 / 일요일 / 공휴일 휴무
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

                {/* Naver Map - 클릭하면 네이버 플레이스로 이동 */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] mb-6 border border-slate-200 bg-slate-100 group">
                  {/* 실제 네이버 지도 (왼쪽 패널 숨김 처리) */}
                  <div className="absolute inset-0 overflow-hidden">
                    <iframe
                      title="썬그린에너지 위치 지도"
                      src="https://map.naver.com/p/search/경기도 파주시 조리읍 뇌조로74번길 25-66"
                      style={{
                        border: 0,
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: '-56px',
                        left: '-420px',
                        width: 'calc(100% + 420px)',
                        height: 'calc(100% + 56px)',
                      }}
                      loading="lazy"
                    ></iframe>
                  </div>
                  {/* 투명 오버레이 - 클릭하면 네이버 플레이스로 이동 */}
                  <a
                    href={NAVER_PLACE.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 flex items-end justify-center pb-4 bg-transparent hover:bg-black/5 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 group-hover:shadow-xl transition-all duration-200">
                      <div className="w-6 h-6 rounded bg-[#03C75A] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">N</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-700">네이버 지도에서 크게 보기</span>
                      <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                  </a>
                </div>

                {/* Naver Place Action Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {/* 네이버 플레이스 보기 */}
                  <a
                    href={NAVER_PLACE.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2.5 p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-[#03C75A] hover:shadow-lg transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#03C75A]/10 flex items-center justify-center group-hover:bg-[#03C75A]/20 transition-colors">
                      <ExternalLink className="h-5 w-5 text-[#03C75A]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-[#03C75A] transition-colors text-center">플레이스</span>
                  </a>

                  {/* 길찾기 */}
                  <a
                    href={NAVER_PLACE.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2.5 p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Navigation className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-500 transition-colors text-center">길찾기</span>
                  </a>

                  {/* 거리뷰 */}
                  <a
                    href={NAVER_PLACE.streetViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2.5 p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                      <Eye className="h-5 w-5 text-amber-500" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-amber-500 transition-colors text-center">거리뷰</span>
                  </a>

                  {/* 공유하기 */}
                  <button
                    onClick={handleShare}
                    className="group flex flex-col items-center gap-2.5 p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-violet-500 hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-full bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                      {copied ? (
                        <Check className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <Share2 className="h-5 w-5 text-violet-500" />
                      )}
                    </div>
                    <span className={`text-sm font-semibold transition-colors text-center ${copied ? 'text-emerald-500' : 'text-slate-700 group-hover:text-violet-500'
                      }`}>
                      {copied ? '복사됨!' : '공유하기'}
                    </span>
                  </button>
                </div>

                {/* Naver Place CTA Banner */}
                <a
                  href={NAVER_PLACE.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-r from-[#03C75A]/5 to-[#03C75A]/10 rounded-xl border border-[#03C75A]/20 hover:border-[#03C75A]/40 hover:shadow-md transition-all duration-200 mb-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#03C75A] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">N</span>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">썬그린에너지 네이버 플레이스</div>
                        <div className="text-xs text-slate-500">리뷰, 사진, 영업정보 등 자세히 보기</div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-[#03C75A] flex-shrink-0" />
                  </div>
                </a>

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
            <p className="text-lg text-slate-700 leading-relaxed mb-8 break-keep">
              보다 정확한 상담을 위해 방문 전 미리 연락 주시면
              <br className="hidden sm:block" />
              전문 상담사가 준비하여 더욱 자세한 안내를 도와드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:031-944-0912" className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>전화 상담</span>
              </a>
              <a href="mailto:sungreen0912@naver.com" className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>이메일 문의</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 공유하기 모달 */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 배경 오버레이 */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowShareModal(false)}
          ></div>
          {/* 모달 */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-in fade-in zoom-in-95 duration-200">
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">공유하기</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
            {/* SNS 공유 버튼 */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {socialLinks.map((sns) => (
                <a
                  key={sns.name}
                  href={sns.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                  onClick={() => setShowShareModal(false)}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-sm group-hover:scale-110 transition-transform duration-150"
                    style={{ backgroundColor: sns.color, color: sns.textColor }}
                  >
                    {sns.icon}
                  </div>
                  <span className="text-xs text-slate-600 font-medium">{sns.name}</span>
                </a>
              ))}
            </div>
            {/* 링크 복사 */}
            <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 bg-transparent text-sm text-slate-600 px-2 outline-none truncate"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex-shrink-0 ${copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
              >
                {copied ? '복사됨!' : '복사'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Copied Toast Notification */}
      {copied && !showShareModal && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium">플레이스 링크가 복사되었습니다!</span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Location;