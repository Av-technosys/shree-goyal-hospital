import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { decodeBannerImage } from "@/lib/db/blog-images";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const [blog] = await db.select({ image: blogs.mainBannerImage }).from(blogs).where(eq(blogs.id, id)).limit(1);
    const image = blog ? decodeBannerImage(blog.image) : null;
    if (!image) return new Response(null, { status: 404 });
    return new Response(new Uint8Array(image.bytes), { headers: { "Content-Type": image.type, "Content-Length": String(image.bytes.length), "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" } });
  } catch {
    return new Response(null, { status: 503 });
  }
}
