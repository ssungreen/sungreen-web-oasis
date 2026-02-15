import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CaseCard from '@/components/cases/CaseCard';
import CaseUploadForm from '@/components/cases/CaseUploadForm';
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle, Loader2, Camera } from 'lucide-react';

interface CaseData {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  imageUrl: string;
}

const Cases = () => {
  const [cases, setCases] = useState<CaseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // Simple admin toggle for demo/free-tier
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchCases = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/cases');
      if (res.ok) {
        const data = await res.json();
        setCases(data);
      }
    } catch (error) {
      console.error("Failed to fetch cases", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  // Secret shortcut: Ctrl + Shift + U to toggle admin mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'U') {
        setIsAdmin(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="시공 사례 - 썬그린에너지"
        description="전국 각지에 설치된 썬그린에너지의 태양광 발전 시설 시공 사례를 확인하세요."
        keywords="태양광 시공 사례, 태양광 설치 현황, 썬그린에너지 실적"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Camera className="h-10 w-10 text-emerald-400 mr-4" />
            <Badge className="px-8 py-4 bg-emerald-500/20 text-emerald-300 text-xl font-medium backdrop-blur-sm border border-emerald-400/30">
              INSTALLATION CASES
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              시공사례
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            썬그린에너지가 함께한 성공적인 에너지 자립의 현장을 소개합니다
          </p>
        </div>
      </section>

      {/* Cases Content */}
      <main className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Admin Controls */}
          {isAdmin && (
            <div className="flex justify-end mb-8">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <PlusCircle className="w-4 h-4" />
                    사례 등록 (관리자)
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>새 시공사례 등록</DialogTitle>
                    <DialogDescription>
                      새로운 시공 사례의 정보를 입력하고 사진을 업로드해주세요.
                    </DialogDescription>
                  </DialogHeader>
                  <CaseUploadForm
                    onSuccess={() => {
                      setIsDialogOpen(false);
                      fetchCases();
                    }}
                    onCancel={() => setIsDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : cases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((item) => (
                <CaseCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Camera className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">등록된 시공 사례가 없습니다.</p>
              <p className="text-slate-400 text-sm mt-2">관리자 권한(Ctrl+Shift+U)으로 첫 사례를 등록해보세요.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
