import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { STUDIO_IDENTITY } from "@/data/studio-info";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan (404) | TOSTEM Studio Alam Sutera",
  description:
    "Halaman yang Anda cari tidak tersedia. Kembali ke beranda, jelajahi produk TOSTEM, atau lihat portfolio proyek kami.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="not-found-screen" aria-labelledby="not-found-title">
      <section className="not-found-copy">
        <div className="not-found-copy-inner">
          <Link
            href="/"
            className="not-found-mark"
            aria-label="TOSTEM Studio Alam Sutera, kembali ke beranda"
          >
            <Image
              src="/images/tostem-logo-b.svg"
              alt="TOSTEM"
              width={194}
              height={34}
              priority
            />
          </Link>
          <p className="eyebrow">ERROR 404 · HALAMAN TIDAK DITEMUKAN</p>
          <h1 id="not-found-title">
            Halaman yang Anda cari
            <br />
            <span className="muted">tidak tersedia.</span>
          </h1>
          <p>
            Alamat halaman mungkin telah berubah atau salah diketik. Silakan
            kembali ke beranda, jelajahi seri pintu &amp; jendela TOSTEM, atau
            lihat dokumentasi project hunian kami.
          </p>
          <div className="not-found-actions">
            <div className="not-found-action-row">
              <Link className="button dark" href="/">
                Kembali ke Homepage <ArrowUpRight size={18} />
              </Link>
              <Link className="button not-found-outline" href="/produk">
                Lihat Produk Kami <ArrowRight size={18} />
              </Link>
            </div>
            <Link
              className="text-link not-found-project-link"
              href="/#portfolio"
            >
              Lihat Project Kami <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <aside className="not-found-panel" aria-label="TOSTEM Studio Alam Sutera">
        <span className="not-found-code" aria-hidden="true">
          404
        </span>
        <div className="not-found-visual">
          <Image
            src="/images/alam-sutera-4.webp"
            alt="Area konsultasi dan display TOSTEM Studio Alam Sutera"
            width={1200}
            height={800}
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <p className="not-found-caption">
            {STUDIO_IDENTITY.studioName} · {STUDIO_IDENTITY.coverage}
          </p>
        </div>
      </aside>
    </main>
  );
}
