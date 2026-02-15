import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import RichTextEditor from './RichTextEditor';

const formSchema = z.object({
    title: z.string().min(2, "제목을 입력해주세요."),
    location: z.string().min(2, "위치를 입력해주세요."),
    date: z.string().min(1, "날짜를 선택해주세요."),
    description: z.string().min(5, "요약 설명을 입력해주세요."),
});

export interface EditCaseData {
    id: number;
    title: string;
    description: string;
    location: string;
    date: string;
    imageUrl: string;
    content: string | null;
}

interface CaseUploadFormProps {
    onSuccess: () => void;
    onCancel: () => void;
    editData?: EditCaseData | null;
}

const CaseUploadForm: React.FC<CaseUploadFormProps> = ({ onSuccess, onCancel, editData }) => {
    const [file, setFile] = useState<File | null>(null);
    const [content, setContent] = useState(editData?.content || '');
    const [isUploading, setIsUploading] = useState(false);
    const isEditMode = !!editData;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: editData?.title || "",
            location: editData?.location || "",
            date: editData?.date || new Date().toISOString().split('T')[0],
            description: editData?.description || "",
        },
    });

    // Reset form when editData changes
    useEffect(() => {
        if (editData) {
            form.reset({
                title: editData.title,
                location: editData.location,
                date: editData.date,
                description: editData.description,
            });
            setContent(editData.content || '');
        }
    }, [editData, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!isEditMode && !file) {
            toast.error("대표 사진을 선택해주세요.");
            return;
        }

        setIsUploading(true);
        try {
            let imageUrl = editData?.imageUrl || '';

            // Upload new image if selected
            if (file) {
                const formData = new FormData();
                formData.append("file", file);

                const uploadRes = await fetch('/api/upload', {
                    method: 'PUT',
                    body: formData,
                });

                if (!uploadRes.ok) throw new Error("Image upload failed");

                const { filename } = await uploadRes.json();
                imageUrl = `/images/${filename}`;
            }

            if (isEditMode) {
                // Update existing case
                const saveRes = await fetch(`/api/cases/${editData!.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...values,
                        imageUrl,
                        content: content || null,
                    }),
                });

                if (!saveRes.ok) throw new Error("Failed to update case data");
                toast.success("시공사례가 수정되었습니다!");
            } else {
                // Create new case
                const saveRes = await fetch('/api/cases', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...values,
                        imageUrl,
                        content: content || null,
                    }),
                });

                if (!saveRes.ok) throw new Error("Failed to save case data");
                toast.success("시공사례가 등록되었습니다!");
            }

            onSuccess();
        } catch (error) {
            console.error(error);
            toast.error(isEditMode ? "수정 중 오류가 발생했습니다." : "등록 중 오류가 발생했습니다.");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>제목</FormLabel>
                            <FormControl>
                                <Input placeholder="예: 주택용 태양광 3kW 설치" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>위치</FormLabel>
                                <FormControl>
                                    <Input placeholder="예: 경기도 용인시" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>시공일자</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>요약 설명 <span className="text-xs text-slate-400">(목록에 표시됩니다)</span></FormLabel>
                            <FormControl>
                                <Input placeholder="예: 경기도 용인시 전원주택에 3kW 태양광 설치" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormItem>
                    <FormLabel>
                        대표 사진
                        {isEditMode ? (
                            <span className="text-xs text-slate-400 ml-1">(변경 시에만 새 사진 선택)</span>
                        ) : (
                            <span className="text-xs text-slate-400 ml-1">(목록 썸네일용)</span>
                        )}
                    </FormLabel>
                    {isEditMode && !file && (
                        <div className="mb-2 p-2 bg-slate-50 rounded border text-sm text-slate-500">
                            현재 이미지: {editData?.imageUrl}
                        </div>
                    )}
                    <div className="flex items-center gap-4">
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="cursor-pointer"
                        />
                    </div>
                </FormItem>

                <FormItem>
                    <FormLabel>상세 내용 <span className="text-xs text-slate-400">(이미지와 글을 자유롭게 작성하세요)</span></FormLabel>
                    <RichTextEditor content={content} onChange={setContent} />
                </FormItem>

                <div className="flex justify-end gap-2 pt-4 sticky bottom-0 bg-white py-3 border-t">
                    <Button type="button" variant="outline" onClick={onCancel} disabled={isUploading}>
                        취소
                    </Button>
                    <Button type="submit" disabled={isUploading}>
                        {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isEditMode ? '수정하기' : '등록하기'}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default CaseUploadForm;
