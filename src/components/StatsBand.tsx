import React, { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

function Counter({ target, duration = 1500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalDuration = duration;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / totalDuration, 1);
      
      // Easing: easeOutQuad
      const easedProgress = progress * (2 - progress);
      
      const currentCount = Math.floor(easedProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBand() {
  const stats = [
    { target: 15, suffix: '+', label: 'Years of Experience' },
    { target: 150, suffix: '+', label: 'Projects Completed' },
    { target: 300, suffix: '+', label: 'Happy Clients' },
  ];

  return (
    <section className="bg-brand-plum py-16 md:py-24 relative overflow-hidden">
      {/* Decorative subtle background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* Stat number */}
              <span className="text-6xl md:text-7xl font-extralight tracking-tight text-white mb-3 font-serif">
                <Counter target={stat.target} suffix={stat.suffix} />
              </span>
              
              {/* Stat label */}
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-brand-cream/60">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
