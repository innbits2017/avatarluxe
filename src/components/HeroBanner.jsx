<section className="flex flex-col md:flex-row md:h-[600px] w-full overflow-hidden">
  {items.map((item, i) => {
    const isActive = active === i;

    return (
      <div
        key={i}
        onMouseEnter={() => setActive(i)}
        onMouseLeave={() => setActive(null)}
        className={`
          relative cursor-pointer overflow-hidden
          transition-[flex-basis] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          flex-shrink-0 flex-grow-0

          /* MOBILE */
          basis-full h-[300px]

          /* DESKTOP */
          md:h-auto
          ${
            active === null
              ? "md:basis-1/3"
              : isActive
              ? "md:basis-[80%]"
              : "md:basis-[10%]"
          }
        `}
      >
        {/* IMAGE */}
        <img
          src={item.img}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 
          bg-gradient-to-t 
          from-black/100 via-black/30 to-transparent">
        </div>

        {/* CONTENT */}
        <div
          className={`
            absolute bottom-6 left-4 right-4 z-10 max-w-sm
            transition-all duration-500

            /* MOBILE: always visible */
            opacity-100 translate-y-0

            /* DESKTOP behavior */
            ${
              active === null
                ? "md:opacity-100 md:translate-y-0"
                : isActive
                ? "md:opacity-100 md:translate-y-0"
                : "md:opacity-0 md:translate-y-6 md:pointer-events-none"
            }
          `}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-2">
            <CheckCircle className="size-4" style={{ color: '#D4AF37' }} />
            <span className="text-xs text-white/80">
              {content[i].subtitle}
            </span>
          </div>

          <h3 className="text-lg md:text-2xl font-semibold text-white mb-1 md:mb-2">
            {content[i].title}
          </h3>

          <p className="text-sm md:text-base text-zinc-200 mb-3 md:mb-4">
            {content[i].desc}
          </p>

          <Button
            variant="outline"
            className="rounded-none border-0 border-b border-b-[#D4AF37]/80 px-3 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
            onClick={() => scrollToSection("team-section")}
          >
            {content[i].cta}
          </Button>
        </div>
      </div>
    );
  })}
</section>