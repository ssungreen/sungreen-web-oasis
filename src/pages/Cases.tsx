
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Cases = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="시공 사례 - 썬그린에너지"
        description="전국 각지에 설치된 썬그린에너지의 태양광 발전 시설 시공 사례를 확인하세요. 산업시설, 상업용 건물, 주택 등 다양한 환경에서의 성공적인 구축 경험을 공유합니다."
        keywords="태양광 시공 사례, 태양광 설치 현황, 썬그린에너지 실적, 성공적인 태양광 구축"
      />
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">설치사례</h1>
            <p className="text-xl text-gray-600">페이지 준비중입니다.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cases;
