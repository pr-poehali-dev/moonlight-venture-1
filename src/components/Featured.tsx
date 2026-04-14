export default function Featured() {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/3dd343d4-3b0e-4c85-9b73-9b9c6575cc71/files/d74a5b99-4f6b-405c-93c1-6fcb38759bd4.jpg"
            alt="Sensilis — красота и забота"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
          <h3 className="uppercase mb-4 text-sm tracking-[0.2em] text-neutral-500">Мы Sensilis</h3>
          <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
            Наше имя происходит от латинского «Sensibilis» — чувствительный. С 1979 года мы работаем в фармацевтической лаборатории Барселоны, создавая передовые формулы для чувствительной кожи и коррекции возрастных изменений.
          </p>
          <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest">
            Узнать больше
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
        <div className="bg-white p-8 md:p-12">
          <p className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4">40+</p>
          <h4 className="uppercase text-sm tracking-widest text-neutral-500 mb-3">Лет экспертизы</h4>
          <p className="text-neutral-600 leading-relaxed">
            Более четырёх десятилетий научных исследований и разработок в области дерматологической косметики.
          </p>
        </div>
        <div className="bg-white p-8 md:p-12">
          <p className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4">ISO</p>
          <h4 className="uppercase text-sm tracking-widest text-neutral-500 mb-3">Сертификация</h4>
          <p className="text-neutral-600 leading-relaxed">
            Наш подход подкреплён сильной научной и дерма-косметической экспертизой, подтверждённой международной сертификацией.
          </p>
        </div>
        <div className="bg-white p-8 md:p-12">
          <p className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4">ESP</p>
          <h4 className="uppercase text-sm tracking-widest text-neutral-500 mb-3">Сделано в Испании</h4>
          <p className="text-neutral-600 leading-relaxed">
            Разрабатываем, формулируем и производим продукцию в Испании — от идеи до готового средства.
          </p>
        </div>
      </div>
    </div>
  );
}