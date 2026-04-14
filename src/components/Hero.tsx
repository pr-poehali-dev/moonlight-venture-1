import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/3dd343d4-3b0e-4c85-9b73-9b9c6575cc71/files/9364a4f7-5fb2-491f-b1d9-58786d2499bd.jpg"
          alt="Sensilis — забота о чувствительной коже"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-70 font-light">
          Sensitive Skin Lab · С 1979 года · Барселона
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          SENSILIS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
          Более 40 лет мы создаём дерма-косметику для чувствительной и сенсибилизированной кожи. Научная честность, клинические исследования и сенсорный уход — в каждом продукте.
        </p>
        <a href="https://sensilis.ru/catalog" target="_blank" rel="noopener noreferrer" className="inline-block mt-10 border border-white text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Наша продукция
        </a>
      </div>
    </div>
  );
}