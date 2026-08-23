import React from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioShowcase() {
  return (
    <section className="w-full bg-surface-bright py-section-gap" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-eyebrow text-eyebrow text-tertiary-container uppercase tracking-widest block mb-4">
              Our Portfolio
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
              Curated Ingredients
            </h2>
          </div>
          
          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-2 font-label-md text-label-md text-on-background group"
          >
            <span className="border-b border-tertiary-container group-hover:border-[#F15A24] transition-colors pb-1">
              View Full Range
            </span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Asymmetric Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Featured Large Product (Left 5 Columns) */}
          <Link to="/products/tomato-powder" className="md:col-span-5 flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container mb-6 rounded-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLOLwEUPwox3UdGrxCMnVfr1xlDY6dpegM5zajvn6KLshJX8_Q4v1YzZgPr2zWx0wTjmtkOUVoj_CRc-F_5aOHZNlZI4ypPXywQ0JxzoG0Cvm3bUwwDhhTe97S8LDGoQKuBl7Lud8J4Vl0l0kAV57WbMmAYAZGVKtp6wuTYQGFVNT_n7LE0MwV58D0klyjhzbG91lfhotMaklVQbnDuR_eDchAcaqR1cV05SIrbUzMc7zPvumOIaLd"
                alt="Premium Tomato Powder"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/products/tomato.jpg';
                }}
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 text-[10px] font-eyebrow tracking-wider uppercase border border-tertiary-container bg-surface/90 text-on-surface rounded-sm">
                  Featured
                </span>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <span className="font-eyebrow text-eyebrow text-on-surface-variant block mb-2">
                  Dehydrated Powders
                </span>
                <h3 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors">
                  Premium Tomato Powder
                </h3>
              </div>
            </div>
          </Link>

          {/* Grid of 5 Smaller Products + View All Tile (Right 7 Columns) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-gutter gap-y-12 content-start">
            
            {/* Item 1: Moringa */}
            <Link to="/products/moringa-powder" className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-square overflow-hidden bg-surface-container mb-4 rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuJgQFIuOqrITDRDJ8WlfUV0X4FOK4DenHlIriOrS-hzJVaJxvY0MTuouhJvuu3Fekh34aSdk2LN_IFFQ_zkSn3GRRcjlJPsaKkxyKSfqSry0u76euplo9wZrZp_yWu0mzhHfCyuodSxKJKRdPDj2zpCyoBPwe7uPFwVVyFPqctLyyvRvMhO4z78q6kkMWeLTKyJESHfOA48_CCWuV2XnKzlaifaBV6noJ4BQ4Ym6oUMf7JDp4K094"
                  alt="Moringa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/products/moringa.jpg';
                  }}
                />
              </div>
              <span className="font-eyebrow text-eyebrow text-on-surface-variant block mb-1">Superfoods</span>
              <h4 className="font-body-lg text-body-lg text-on-background font-medium group-hover:text-primary transition-colors">Moringa</h4>
            </Link>

            {/* Item 2: Turmeric */}
            <Link to="/products/turmeric-powder" className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-square overflow-hidden bg-surface-container mb-4 rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMyUb7VmuLGqwbVuFVDUHMqqZaq8AOSSMxmOts1Uteq0J27kQQkUj325Iu_Iodk-T9eyHlDqbaLYTTyZgr3f6OfzwNPNei-ScfIgcPo0MYSsAtw6ujGlXby_CWf8SiHj8lyEVQHE0NbgPUWlRUffXyrULj0PCUtGj36WMgTPsAVouq7jZ9R9gp3F8iTFMzeTAR5ZqhSTd-HrFSPF-SKw2RVQjytKSVMft9ghORTcdnTJt5KpJgH3_w"
                  alt="Turmeric"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/products/turmeric.jpg';
                  }}
                />
              </div>
              <span className="font-eyebrow text-eyebrow text-on-surface-variant block mb-1">Spices</span>
              <h4 className="font-body-lg text-body-lg text-on-background font-medium group-hover:text-primary transition-colors">Turmeric</h4>
            </Link>

            {/* Item 3: Beetroot */}
            <Link to="/products/beetroot-powder" className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-square overflow-hidden bg-surface-container mb-4 rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBneY8nZSclJUPNWiGGH5N4qmW-p3ZiE6SjW81h4zwOg2PKaQAxUSB-rOF0WIZvgM0QroyEA672pGMqGmHY92qU_TdfTpIhgD-lo-uR1YMtR9GyEb_C_qsqeiyuvaJO9nkLvHMOEemPNKfWDCmI-m7EcDDHplVo4epO6JmhYFC5orGElSauii0sD5J4j9k6ZQtHfYamkpyQ2JLZSdCKONGm6T92QSiLwTwAAhfvgVQqwEFV2WrWws87"
                  alt="Beetroot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/products/beetroot.jpg';
                  }}
                />
              </div>
              <span className="font-eyebrow text-eyebrow text-on-surface-variant block mb-1">Vegetables</span>
              <h4 className="font-body-lg text-body-lg text-on-background font-medium group-hover:text-primary transition-colors">Beetroot</h4>
            </Link>

            {/* Item 4: Onion */}
            <Link to="/products/onion-powder" className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-square overflow-hidden bg-surface-container mb-4 rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA0L5Dk2cz31EoOvQPeFrMOi9GwG9XdExILGLeeAbPXW81s2IKhgPK9tDpwnGXZ63-IyTMuz9m7RFSs9qlnnQSEkT7omIo6C7EYMhHCjWw0norByj5sIUupeo6mXPmtb1gtC9nTdKYcSQWmxOngP7mktxL5nN-kqB0JLLuh3XnQwjqqaiWWtRbcKDvyo8tal512DWBJ5Ta7SlXVdk88gP20dHTwVsQyeqIE8xTOUYnhAOIUAjszBJq"
                  alt="Onion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/products/onion.jpg';
                  }}
                />
              </div>
              <span className="font-eyebrow text-eyebrow text-on-surface-variant block mb-1">Dehydrated</span>
              <h4 className="font-body-lg text-body-lg text-on-background font-medium group-hover:text-primary transition-colors">Onion</h4>
            </Link>

            {/* Item 5: Garlic */}
            <Link to="/products/garlic-powder" className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-square overflow-hidden bg-surface-container mb-4 rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMzDTmIJ8Jm4StSvLg__2lTIhX3FFFRx0C-ZVGT2_zuXRCo3Z0fWdaW_B51tNPjtEIYUklqIMOwVxGFGN6_EQV-ZLLuUASxxWK0qUigFONJOqWP3D6Qx7WPysa83Uimetbiqnt86R9Hdpc_EO3NBt9P8Iq_4f1DOkbFnEFHhOX0BpBhQPTcbDW20u6OmouWkOpfMkARfuuPR8Nk5vcDIfXp_K7bUw2dTOXOG8ejKHnJSSyDzoqJDfC"
                  alt="Garlic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/products/garlic.jpg';
                  }}
                />
              </div>
              <span className="font-eyebrow text-eyebrow text-on-surface-variant block mb-1">Dehydrated</span>
              <h4 className="font-body-lg text-body-lg text-on-background font-medium group-hover:text-primary transition-colors">Garlic</h4>
            </Link>

            {/* Tile 6: View All */}
            <Link
              to="/products"
              className="flex flex-col group cursor-pointer justify-center items-center border border-outline/20 aspect-square hover:bg-surface-container-low transition-colors rounded-sm"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
              <span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">View All</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
