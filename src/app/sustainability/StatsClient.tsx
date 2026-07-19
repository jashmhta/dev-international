"use client";

import { Reveal } from "@/components/dynamics/Reveal";
import { Counter } from "@/components/dynamics/Counter";

export default function StatsClient() {
  return (
    <Reveal delay={0.1}>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
          <p className="display-lg text-white">
            <Counter end={80} suffix="%" />
          </p>
          <p className="mt-2 text-sm text-white/50">
            Portfolio bio-based or renewable-derived
          </p>
        </div>
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
          <p className="display-lg text-white">
            <Counter end={4} suffix="" />
          </p>
          <p className="mt-2 text-sm text-white/50">
            Certification frameworks supported
          </p>
        </div>
        <div className="col-span-2 rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
          <p className="display-lg text-white">
            <Counter end={100} suffix="%" />
          </p>
          <p className="mt-2 text-sm text-white/50">
            Lots shipped with full COA and traceability
          </p>
        </div>
      </div>
    </Reveal>
  );
}
