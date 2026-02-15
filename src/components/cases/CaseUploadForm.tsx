import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Loader2, Upload } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
    title: z.string().min(2, "제목을 입력해주세요."),
    location: z.string().min(2, "위치를 입력해주세요."),
    date: z.string().min(1, "날짜를 선택해주세요."),
    description: z.string().min(5, "설명을 입력해주세요."),
});

interface CaseUploadFormProps {
    onSuccess: () => void;
    onCancel: () => void;
}

const CaseUploadForm: React.FC<CaseUploadFormProps> = ({ onSuccess, onCancel }) => {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            location: "",
            date: new Date().toISOString().split('T')[0],
            description: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!file) {
            toast.error("사진을 선택해주세요.");
            return;
        }

        setIsUploading(true);
        try {
            // 1. Upload Image
            const formData = new FormData();
            formData.append("file", file);

            const uploadRes = await fetch('/api/upload', {
                method: 'PUT',
                body: formData,
            });

            if (!uploadRes.ok) throw new Error("Image upload failed");

            const { filename } = await uploadRes.json();
            // Construct the URL based on the proxy function we created
            const imageUrl = `/images/${filename}`;

            // 2. Save Data
            const saveRes = await fetch('/api/cases', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...values,
                    imageUrl,
                }),
            });

            if (!saveRes.ok) throw new Error("Failed to save case data");

            toast.success("시공사례가 등록되었습니다!");
            onSuccess();
        } catch (error) {
            console.error(error);
            toast.error("등록 중 오류가 발생했습니다.");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                <FormLabel>설치일자</FormLabel>
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
                            <FormLabel>설명</FormLabel>
                            <FormControl>
                                <Textarea placeholder="설치 내용에 대한 설명을 입력하세요." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormItem>
                    <FormLabel>사진 업로드</FormLabel>
                    <div className="flex items-center gap-4">
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="cursor-pointer"
                        />
                    </div>
                </FormItem>

                <div className="flex justify-end gap-2 pt-4">
                    <Button type="button" variant="outline" onClick={onCancel} disabled={isUploading}>
                        취소
                    </Button>
                    <Button type="submit" disabled={isUploading}>
                        {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        등록하기
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default CaseUploadForm;
