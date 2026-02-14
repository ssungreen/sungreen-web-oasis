import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CaseCard from '@/components/cases/CaseCard';
import CaseUploadForm from '@/components/cases/CaseUploadForm';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle, Loader2 } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50/50">
      <SEO
        title="시공 사례 - 썬그린에너지"
        description="전국 각지에 설치된 썬그린에너지의 태양광 발전 시설 시공 사례를 확인하세요."
        keywords="태양광 시공 사례, 태양광 설치 현황, 썬그린에너지 실적"
      />
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">설치사례</h1>
              <p className="text-xl text-gray-600">
                썬그린에너지가 함께한 성공적인 에너지 자립의 현장을 소개합니다.
              </p>
            </div>

            {isAdmin && (
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <PlusCircle className="w-4 h-4" />
                    사례 등록 (관리자)
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>새 설치사례 등록</DialogTitle>
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
            )}
          </div>

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
            <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-500">등록된 설치 사례가 없습니다.<br />관리자 권한(Ctrl+Shift+U)으로 첫 사례를 등록해보세요.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
