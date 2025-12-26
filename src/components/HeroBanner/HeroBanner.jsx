import Separator from '../Separator/Separator';

export default function HeroBanner({
  img = null,
  heading = '',
  paragraph = '',
  secParagraph = '',
} = {}) {
  return (
    <section className="bg-[#1abc9c] flex justify-center items-center h-[95vh]">
      <div className="hero-banner flex flex-col justify-center items-center text-center text-white gap-[16px]">
        {img && <img className="w-[250px] h-[265px]" src={img} alt="" />}
        {/*  */}
        <div className="info flex flex-col justify-center items-center gap-[8px]">
          <h1 className="text-[2.5rem] font-bold">{heading}</h1>
          <Separator />
          <div
            className={`flex flex-col pr-2 pl-2 ${
              secParagraph
                ? 'md:pr-40 md:pl-40 justify-between md:justify-center md:flex-row'
                : ' text-center justify-center flex items-center '
            } gap-[12px] `}
          >
            <p className="text-start">{paragraph}</p>
            {secParagraph && <p className="text-start">{secParagraph}</p>}
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
}
