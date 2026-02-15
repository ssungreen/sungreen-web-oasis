import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CaseCard from '@/components/cases/CaseCard';
import CaseUploadForm, { EditCaseData } from '@/components/cases/CaseUploadForm';
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { PlusCircle, Loader2, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

const ITEMS_PER_PAGE = 12;

interface CaseData {
  id: number;
  title: string;
  description: string;
  content: string | null;
  location: string;
  date: string;
  imageUrl: string;
}

const Cases = () => {
  const [cases, setCases] = useState<CaseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCase, setEditingCase] = useState<EditCaseData | null>(null);
  const [deletingCaseId, setDeletingCaseId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cases.length / ITEMS_PER_PAGE);
  const paginatedCases = cases.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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

  const handleEdit = async (id: number) => {
    try {
      const res = await fetch(`/api/cases/${id}`);
      if (res.ok) {
        const data = await res.json();
        setEditingCase(data);
        setIsDialogOpen(true);
      }
    } catch (error) {
      console.error("Failed to fetch case for editing", error);
      toast.error("사례 데이터를 불러오는데 실패했습니다.");
    }
  };

  const handleDelete = async () => {
    if (!deletingCaseId) return;

    try {
      const res = await fetch(`/api/cases/${deletingCaseId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        toast.success("시공사례가 삭제되었습니다.");
        fetchCases();
      } else {
        throw new Error("Failed to delete");
      }
    } catch (error) {
      console.error("Failed to delete case", error);
      toast.error("삭제 중 오류가 발생했습니다.");
    } finally {
      setDeletingCaseId(null);
    }
  };

  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setEditingCase(null);
    }
  };

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
            <div className="flex items-center justify-between mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-center gap-2 text-amber-700">
                <span className="text-sm font-medium">🔑 관리자 모드</span>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
                <DialogTrigger asChild>
                  <Button className="gap-2" onClick={() => setEditingCase(null)}>
                    <PlusCircle className="w-4 h-4" />
                    사례 등록
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px]">
                  <DialogHeader>
                    <DialogTitle>{editingCase ? '시공사례 수정' : '새 시공사례 등록'}</DialogTitle>
                    <DialogDescription>
                      {editingCase ? '시공 사례 내용을 수정하세요.' : '새로운 시공 사례의 정보를 입력하고 사진을 업로드해주세요.'}
                    </DialogDescription>
                  </DialogHeader>
                  <CaseUploadForm
                    editData={editingCase}
                    onSuccess={() => {
                      handleDialogClose(false);
                      fetchCases();
                    }}
                    onCancel={() => handleDialogClose(false)}
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
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedCases.map((item) => (
                  <CaseCard
                    key={item.id}
                    {...item}
                    isAdmin={isAdmin}
                    onEdit={handleEdit}
                    onDelete={(id) => setDeletingCaseId(id)}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    이전
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                          ? 'bg-emerald-500 text-white shadow-md'
                          : 'text-slate-600 hover:bg-slate-100'
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    다음
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Camera className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">등록된 시공 사례가 없습니다.</p>
              <p className="text-slate-400 text-sm mt-2">관리자 권한(Ctrl+Shift+U)으로 첫 사례를 등록해보세요.</p>
            </div>
          )}
        </div>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletingCaseId} onOpenChange={(open) => !open && setDeletingCaseId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>시공사례를 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              삭제된 시공사례는 복구할 수 없습니다. 정말 삭제하시겠습니까?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600"
            >
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default Cases;
