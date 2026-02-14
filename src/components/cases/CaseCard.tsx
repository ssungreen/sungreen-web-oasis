import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from 'lucide-react';

interface CaseProps {
    id: number;
    title: string;
    description: string;
    location: string;
    date: string;
    imageUrl: string;
    onClick?: () => void;
}

const CaseCard: React.FC<CaseProps> = ({ title, description, location, date, imageUrl, onClick }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group h-full flex flex-col" onClick={onClick}>
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                {!imageError ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        <span className="text-sm">이미지 준비중</span>
                    </div>
                )}
                <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                        시공사례
                    </Badge>
                </div>
            </div>

            <CardHeader className="p-4 pb-2">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <div className="flex items-center text-xs text-gray-500 space-x-3 mt-1">
                    <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {location}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {date}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-4 pt-2 flex-grow">
                <p className="text-sm text-gray-600 line-clamp-2">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default CaseCard;
