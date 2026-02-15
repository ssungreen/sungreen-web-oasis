import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight, Pencil, Trash2 } from 'lucide-react';

interface CaseProps {
    id: number;
    title: string;
    description: string;
    location: string;
    date: string;
    imageUrl: string;
    isAdmin?: boolean;
    onEdit?: (id: number) => void;
    onDelete?: (id: number) => void;
}

const CaseCard: React.FC<CaseProps> = ({ id, title, description, location, date, imageUrl, isAdmin, onEdit, onDelete }) => {
    const [imageError, setImageError] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (!isAdmin) {
            navigate(`/cases/${id}`);
        }
    };

    return (
        <Card
            className={`overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col border-slate-200 hover:border-emerald-300 ${!isAdmin ? 'cursor-pointer' : ''}`}
            onClick={handleClick}
        >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                {!imageError ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-400">
                        <span className="text-sm">이미지 준비중</span>
                    </div>
                )}
                {/* Hover Overlay - only when not admin */}
                {!isAdmin && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white font-semibold text-lg bg-emerald-500/90 px-6 py-3 rounded-full">
                            자세히 보기
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                )}
                <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-emerald-700 hover:bg-white font-medium">
                        시공사례
                    </Badge>
                </div>

                {/* Admin Action Buttons */}
                {isAdmin && (
                    <div className="absolute bottom-3 right-3 flex gap-2">
                        <button
                            onClick={(e) => { e.stopPropagation(); onEdit?.(id); }}
                            className="flex items-center gap-1.5 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg shadow-lg transition-colors"
                            title="수정"
                        >
                            <Pencil className="w-4 h-4" />
                            수정
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); onDelete?.(id); }}
                            className="flex items-center gap-1.5 px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg shadow-lg transition-colors"
                            title="삭제"
                        >
                            <Trash2 className="w-4 h-4" />
                            삭제
                        </button>
                    </div>
                )}
            </div>

            <CardHeader className="p-4 pb-2">
                <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                    {title}
                </h3>
                <div className="flex items-center text-xs text-slate-500 space-x-3 mt-1">
                    <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-emerald-500" />
                        {location}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1 text-emerald-500" />
                        {date}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-4 pt-2 flex-grow">
                <p className="text-sm text-slate-600 line-clamp-2">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default CaseCard;
