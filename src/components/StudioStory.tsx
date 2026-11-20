"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function StudioStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const skipToDetailRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const desktopMotionQuery = window.matchMedia(
      "(min-width: 900px) and (min-height: 520px) and (prefers-reduced-motion: no-preference)"
    );
    if (!desktopMotionQuery.matches) {
      return;
    }

    let cancelled = false;
    let cleanup = () => {};

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        if (
          cancelled ||
          !sectionRef.current ||
          !stageRef.current ||
          !trackRef.current
        ) {
          return;
        }

        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const stage = stageRef.current;
        const track = trackRef.current;
        const mm = gsap.matchMedia();

        const ctx = gsap.context(() => {
          mm.add(
            "(min-width: 900px) and (prefers-reduced-motion: no-preference) and (min-height: 520px)",
            () => {
              section.dataset.motion = "true";

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: stage,
                  start: () =>
                    `top ${document.querySelector("header")?.getBoundingClientRect().height || 76}px`,
                  end: () =>
                    `+=${track.scrollWidth - stage.clientWidth + 0.65 * stage.clientHeight}`,
                  pin: true,
                  scrub: 0.35,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              });

              tl.to({}, { duration: 0.12 })
                .to(track, {
                  x: () => -(track.scrollWidth - stage.clientWidth),
                  duration: 1,
                  ease: "none",
                })
                .to({}, { duration: 0.16 });

              const st = tl.scrollTrigger;
              skipToDetailRef.current = () => {
                if (st && st.progress < 0.9) {
                  window.scrollTo({
                    top: st.start + (st.end - st.start) * 0.95,
                    behavior: "instant",
                  });
                  st.update();
                  tl.progress(1);
                }
              };

              return () => {
                delete section.dataset.motion;
                skipToDetailRef.current = null;
              };
            }
          );
        }, section);

        let mounted = true;
        document.fonts.ready.then(() => {
          if (mounted) {
            ScrollTrigger.refresh();
          }
        });

        cleanup = () => {
          mounted = false;
          mm.revert();
          ctx.revert();
          delete section.dataset.motion;
          skipToDetailRef.current = null;
        };
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section
      id="studio"
      className="studio-story"
      ref={sectionRef}
      aria-labelledby="studio-story-title"
    >
      <div className="story-stage" ref={stageRef}>
        <a className="story-skip" href="#produk">
          Lewati cerita studio <ArrowRight size={14} />
        </a>
        <div className="story-track" ref={trackRef}>
          <div className="story-panel story-opening">
            <div className="story-title-wrap">
              <h2 id="studio-story-title">
                Rumah untuk
                <br />
                <span>
                  menemukan
                  <br />
                  pilihan.
                </span>
              </h2>
              <p className="story-scroll-hint">
                Gulir untuk mengenal TOSTEM studio <ArrowRight size={15} />
              </p>
            </div>
          </div>

          <figure className="story-panel story-photo">
            <Image
              src="/images/alam-sutera-4.webp"
              alt="Ruang diskusi dan display pintu aluminium di TOSTEM Studio Alam Sutera"
              fill
              sizes="(max-width: 599px) 100vw, 50vw"
            />
            <figcaption>
              <span>TOSTEM Studio Alam Sutera</span>
              <span>Tangerang, Indonesia</span>
            </figcaption>
          </figure>

          <div className="story-panel story-detail">
            <div className="story-detail-wrap">
              <h3>
                Rumah impian
                <br />
                dimulai dari{" "}
                <span>
                  detail
                  <br />
                  yang terasa.
                </span>
              </h3>
              <p>
                Lebih dari sekadar bingkai, jendela mengatur masuknya cahaya dan
                menyatukan ruang untuk kenyamanan Anda. Eksplorasi langsung
                detail pintu dan jendela di TOSTEM Studio Alam Sutera, lalu
                konsultasikan pilihan terbaik untuk hunian Anda.
              </p>
              <a
                className="text-link"
                href="#pengalaman"
                onFocus={() => skipToDetailRef.current?.()}
              >
                Kenali Pengalaman TOSTEM Studio <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
