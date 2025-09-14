import React from 'react'

const AboutUsCompany = () => {
  return (
    <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
          <div className="space-y-4 text-center">
            <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">About Us</h2>
            <p className="text-base-content/80 text-xl">
              At Deeprise, we believe in turning ideas into digital realities. Our journey is fueled by innovation, 
              collaboration, and a relentless pursuit of excellence. With every project, we push boundaries, deliver 
              impactful solutions, and leave a mark of quality and trust. Together, we grow, evolve, and rise.
            </p>
            <a href="#" className="btn btn-primary btn-lg btn-gradient">
              Read More
              <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
            </a>
          </div>

          <div className="relative mb-8 h-full w-full rounded-xl max-lg:space-y-6 sm:mb-16 lg:mb-24 lg:h-161">
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-9.png"
              className="h-full w-full rounded-xl object-cover"
            />
            <div
              className="bg-base-100 bg-white/10 border-base-content/20 rounded-box grid gap-10 border px-10 py-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 xl:w-max"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-white text-3xl font-semibold">1+</span>
                <p className="text-base-content/80">Years of Experience</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-white text-3xl font-semibold">70+</span>
                <p className="text-base-content/80">Successful Projects</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-white text-3xl font-semibold">500+</span>
                <p className="text-base-content/80">Customer Reviews</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-white text-3xl font-semibold">25</span>
                <p className="text-base-content/80">Awards Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsCompany
