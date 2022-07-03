export interface Props {
  title: string;
  desc: string;
  src: string;
  borderColor: string;
}

export default function Card({ src, title, desc, borderColor }: Props) {
  return (
    <div
      className={`p-7 text-left rounded-lg shadow-cardShadow border-t-4 ${borderColor} md:max-w-[350px]`}
    >
      <h2 className="text-xl leading-[30px] font-semibold mb-0">{title}</h2>
      <p className="font-normal text-[13px] -tracking-[0.09px] mb-8">{desc}</p>
      <div className="flex justify-end w-full items-center">
        <img src={src} className="w-[57px] h-[57px]" alt={title} />
      </div>
    </div>
  );
}
