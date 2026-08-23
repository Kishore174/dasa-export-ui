import React from 'react';

export default function ExportTimeline() {
  return (
    <section className="w-full bg-surface py-section-gap overflow-hidden" id="timeline">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <span className="font-eyebrow text-eyebrow text-tertiary-container uppercase tracking-widest block mb-4">
            Methodology
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
            The Journey to You
          </h2>
        </div>

        {/* Horizontal Timeline Structure */}
        <div className="relative w-full pb-12">
          {/* Connecting Spine Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline/20 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            
            {/* Step 1: Sourcing */}
            <div className="flex flex-row md:flex-col items-center md:items-start group">
              <div className="md:h-1/2 w-16 md:w-full flex md:justify-center items-center md:items-end md:pb-6 relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-surface border border-secondary flex items-center justify-center text-secondary font-headline-md text-xl z-10 transition-colors group-hover:bg-secondary group-hover:text-surface">
                  01
                </div>
              </div>
              <div className="pl-6 md:pl-0 md:pt-6 md:pr-8">
                <h4 className="font-headline-md text-2xl text-on-background mb-2">Sourcing</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Direct partnerships with select farmers ensuring raw material excellence at the root level.
                </p>
              </div>
            </div>

            {/* Step 2: Processing */}
            <div className="flex flex-row md:flex-col items-center md:items-start group">
              <div className="order-2 md:order-1 pl-6 md:pl-0 md:pb-6 md:pr-8 md:h-1/2 flex flex-col justify-end">
                <h4 className="font-headline-md text-2xl text-on-background mb-2">Processing</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Advanced dehydration and milling techniques preserving essential nutrients and rich flavors.
                </p>
              </div>
              <div className="order-1 md:order-2 md:h-1/2 w-16 md:w-full flex md:justify-center items-center md:items-start md:pt-6 relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-surface border border-secondary flex items-center justify-center text-secondary font-headline-md text-xl z-10 transition-colors group-hover:bg-secondary group-hover:text-surface">
                  02
                </div>
              </div>
            </div>

            {/* Step 3: Quality Check */}
            <div className="flex flex-row md:flex-col items-center md:items-start group">
              <div className="md:h-1/2 w-16 md:w-full flex md:justify-center items-center md:items-end md:pb-6 relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-surface border border-secondary flex items-center justify-center text-secondary font-headline-md text-xl z-10 transition-colors group-hover:bg-secondary group-hover:text-surface">
                  03
                </div>
              </div>
              <div className="pl-6 md:pl-0 md:pt-6 md:pr-8">
                <h4 className="font-headline-md text-2xl text-on-background mb-2">Quality Check</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Rigorous multi-stage laboratory testing aligning with stringent international food safety standards.
                </p>
              </div>
            </div>

            {/* Step 4: Global Shipping */}
            <div className="flex flex-row md:flex-col items-center md:items-start group">
              <div className="order-2 md:order-1 pl-6 md:pl-0 md:pb-6 md:pr-8 md:h-1/2 flex flex-col justify-end">
                <h4 className="font-headline-md text-2xl text-on-background mb-2">Global Shipping</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Secure, climate-controlled packaging and efficient logistics guaranteeing pristine arrival worldwide.
                </p>
              </div>
              <div className="order-1 md:order-2 md:h-1/2 w-16 md:w-full flex md:justify-center items-center md:items-start md:pt-6 relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-surface border border-[#F15A24] flex items-center justify-center text-[#F15A24] font-headline-md text-xl z-10 transition-colors group-hover:bg-[#F15A24] group-hover:text-surface">
                  04
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
