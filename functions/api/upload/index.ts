import { PagesFunction } from "@cloudflare/workers-types";

interface Env {
    BUCKET: R2Bucket;
}

export const onRequestPut: PagesFunction<Env> = async (context) => {
    try {
        const formData = await context.request.formData();
        const value = formData.get("file");

        if (!value || typeof value === 'string') {
            return new Response("No file uploaded", { status: 400 });
        }

        // safe to cast or use
        const file = value as File;


        // Generate a unique filename
        const filename = `${Date.now()}-${file.name}`;

        // Upload to R2
        await context.env.BUCKET.put(filename, file.stream(), {
            httpMetadata: {
                contentType: file.type,
            },
        });

        // Construct the public URL
        // Note: You need to set up a custom domain or use the workers.dev domain for public access
        // For now, we assume a public bucket access or a specific domain
        // Replace with your actual R2 public bucket domain
        const publicUrl = `https://r2.sungreen-web-oasis.pages.dev/${filename}`;
        // In a real R2 setup, you usually map a subdomain like assets.yourdomain.com
        // or use the worker to serve it. For simplicity in the 'Free Tier' setup without a custom domain,
        // we might need to serve it via a GET function or enabling public access.

        return Response.json({ url: publicUrl, filename: filename });
    } catch (err) {
        return new Response(`Error uploading file: ${err}`, { status: 500 });
    }
};
