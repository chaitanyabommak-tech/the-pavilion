"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ChairmanQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1E3329 0%, #2D4A3E 100%)" }}
      ref={ref}
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C8B49A 0px, #C8B49A 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          {/* Opening quote mark */}
          <div className="font-heading text-muted-gold text-8xl leading-none mb-4 select-none">
            &ldquo;
          </div>

          <blockquote className="font-heading text-off-white text-2xl md:text-4xl font-light leading-relaxed italic mb-10">
            RNS Dream Homes was never just a project. It was a belief: Mera Ghar,
            Mera Marzi. A home shaped by the one who lives in it, not the one who
            builds it.
          </blockquote>

          {/* Gold divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-px bg-muted-gold" />
          </div>

          {/* Attribution */}
          <div>
            <p className="font-heading text-off-white text-xl font-medium tracking-wide">
              Dr. Murali Bommaku
            </p>
            <p className="text-stone-beige text-sm tracking-[0.2em] uppercase mt-1">
              Chairman, Bommak Constructions
            </p>
          </div>
        </motion.div>

        {/* Supporting line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 border-t border-white/10 pt-10"
        >
          <p className="text-stone-beige text-base leading-relaxed max-w-2xl mx-auto">
            After delivering R.N.S Dream Homes, Boduppal's first community living project,
            The Pavilion becomes the next chapter: limited, independent, and
            intentionally designed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
