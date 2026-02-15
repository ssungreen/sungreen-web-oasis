import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Calendar, Sun, Phone, Loader2 } from 'lucide-react';

interface CaseData {
    id: number;
    title: string;
    description: string;
    content: string | null;
    location: string;
    date: string;
    imageUrl: string;
}

const CaseDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [caseData, setCaseData] = useState<CaseData | null>(null);
    const [loading, setLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const fetchCase = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/cases/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setCaseData(data);
                } else {
                    setCaseData(null);
                }
            } catch (error) {
                console.error("Failed to fetch case", error);
                setCaseData(null);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchCase();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="flex items-center justify-center h-[60vh]">
                    <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
                </div>
                <Footer />
            </div>
        );
    }

    if (!caseData) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
                    <Sun className="w-16 h-16 text-slate-300 mb-4" />
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">사례를 찾을 수 없습니다</h2>
                    <p className="text-slate-500 mb-6">요청하신 시공사례가 존재하지 않거나 삭제되었습니다.</p>
                    <Button onClick={() => navigate('/cases')} variant="outline" className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        시공사례 목록으로
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title={`${caseData.title} - 시공사례 | 썬그린에너지`}
                description={caseData.description}
                keywords={`태양광 시공 사례, ${caseData.location}, 썬그린에너지`}
            />
            <Header />

            {/* Top Section: Image + Info Side by Side */}
            <section className="bg-gradient-to-b from-slate-50 to-white py-8 lg:py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/cases')}
                        className="inline-flex items-center text-sm text-slate-500 hover:text-emerald-600 transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        시공사례 목록으로 돌아가기
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left: Representative Image */}
                        <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/3]">
                            {!imageError ? (
                                <img
                                    src={caseData.imageUrl}
                                    alt={caseData.title}
                                    className="w-full h-full object-contain"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-slate-400">
                                    <div className="text-center">
                                        <Sun className="w-16 h-16 mx-auto mb-2" />
                                        <span>이미지를 불러올 수 없습니다</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right: Project Info */}
                        <div className="flex flex-col justify-center">
                            <Badge className="mb-4 w-fit bg-emerald-500/10 text-emerald-700 border border-emerald-200 hover:bg-emerald-500/20">
                                시공사례
                            </Badge>
                            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                {caseData.title}
                            </h1>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50">
                                        <MapPin className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">설치 위치</p>
                                        <p className="font-medium">{caseData.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50">
                                        <Calendar className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">시공일자</p>
                                        <p className="font-medium">{caseData.date}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-slate-200 my-4"></div>

                            <p className="text-slate-600 leading-relaxed">
                                {caseData.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content Section */}
            {caseData.content && (
                <section className="py-12 lg:py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                            <Sun className="w-6 h-6 text-emerald-500" />
                            프로젝트 상세
                        </h2>
                        <div className="h-px bg-gradient-to-r from-emerald-200 via-slate-200 to-transparent mb-8"></div>

                        {/* Rendered TipTap HTML Content */}
                        <article
                            className="prose prose-lg prose-slate max-w-none
                prose-headings:text-slate-800 prose-headings:font-bold
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto
                prose-blockquote:border-emerald-500 prose-blockquote:text-slate-500
                prose-strong:text-slate-800
                prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
                            dangerouslySetInnerHTML={{ __html: caseData.content }}
                        />
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12 text-center border border-emerald-100">
                        <Sun className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                            나도 태양광을 설치하고 싶다면?
                        </h3>
                        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                            썬그린에너지 전문가가 무료로 상담해 드립니다.<br />
                            설치 가능 여부부터 정부 지원금까지 안내받으세요.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                onClick={() => navigate('/contact')}
                            >
                                <Phone className="w-5 h-5" />
                                무료 상담 신청하기
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 gap-2 text-lg px-8 py-6 rounded-xl"
                                onClick={() => navigate('/cases')}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                다른 사례 더 보기
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseDetail;
