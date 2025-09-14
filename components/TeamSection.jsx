import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dilip Mali",
      role: "Full Stack Developer",
      image: "/Dilip.jpg",
    },
    {
      name: "Puspendra Rajpurohit",
      role: "Web Developer",
      image: "/puspendra.jpg",
    },
    {
      name: "Tarun Malviya",
      role: "App Developer",
      image: "/tarun.jpg",
    },
    {
      name: "Nikolas Brooten",
      role: "Sales Manager",
      image: "https://cdn.tailgrids.com/assets/images/marketing/team/team-01/image-04.jpg",
    },
  ];

  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px] dark:bg-dark px-10">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-white">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px] dark:text-white">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div className="w-full px-4 md:w-1/2 xl:w-1/4 flex" key={index}>
              <div className="mx-auto mb-10 w-full max-w-[370px] flex flex-col">
                <div className="relative overflow-hidden rounded-lg flex-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white/20 px-3 py-5 dark:bg-dark-2">
                      <h3 className="text-base font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-xs text-white">{member.role}</p>
                      <div>
                        <span className="absolute bottom-0 left-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="45"
                              r="45"
                              fill="#13C296"
                              fillOpacity="0.11"
                            />
                          </svg>
                        </span>
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {Array.from({ length: 20 }).map((_, i) => (
                              <circle
                                key={i}
                                cx={
                                  i % 4 === 0
                                    ? 0.706257
                                    : i % 4 === 1
                                    ? 6.39669
                                    : i % 4 === 2
                                    ? 12.0881
                                    : 17.7785
                                }
                                cy={24.3533 - 5 * Math.floor(i / 4)}
                                r="0.646687"
                                transform={`rotate(-90 ${
                                  i % 4 === 0
                                    ? 0.706257
                                    : i % 4 === 1
                                    ? 6.39669
                                    : i % 4 === 2
                                    ? 12.0881
                                    : 17.7785
                                } ${24.3533 - 5 * Math.floor(i / 4)})`}
                                fill="#3056D3"
                              />
                            ))}
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
