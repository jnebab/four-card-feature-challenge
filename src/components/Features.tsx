import Card from "./Card";

const cards = [
  {
    src: "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656838726/four-card-feature/icon-supervisor_ftiqqy.svg",
    title: "Supervisor",
    desc: "Monitors activity to identify project roadblocks",
    borderColor: "border-primary-cyan",
    gridClassNames:
      "md:absolute left-0 top-[140px] md:my-auto md:col-start-1 md:col-end-2",
  },
  {
    src: "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656838726/four-card-feature/icon-team-builder_vkscgf.svg",
    title: "Team Builder",
    desc: "Scans our talent network to create the optimal team for your project",
    borderColor: "border-primary-red",
    gridClassNames: "md:col-start-2 md:col-end-3 ",
  },
  {
    src: "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656838726/four-card-feature/icon-karma_wlfdbm.svg",
    title: "Karma",
    desc: "Regularly evaluates our talent to ensure quality",
    borderColor: "border-primary-orange",
    gridClassNames: "md:col-start-2 md:col-end-3",
  },
  {
    src: "https://res.cloudinary.com/ds2ene5mm/image/upload/v1656838726/four-card-feature/icon-calculator_lqiqwv.svg",
    title: "Calculator",
    desc: "Uses data from past projects to provide better delivery estimates",
    borderColor: "border-primary-blue",
    gridClassNames:
      "md:col-start-3 md:col-end-4 md:absolute right-0 top-[140px]",
  },
];

export default function Features() {
  return (
    <section className="relative space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 md:mx-[165px]">
      {cards.map((card) => {
        return (
          <div key={card.src} className={card.gridClassNames}>
            <Card
              src={card.src}
              title={card.title}
              desc={card.desc}
              borderColor={card.borderColor}
            />
          </div>
        );
      })}
    </section>
  );
}
