export default function AnimationPage() {
  return (
    <main className="h-screen w-screen bg-slate-600 flex flex-col  items-center justify-center gap-6">
      <div className="w-[200px] h-[50px] bg-slate-200 rounded-md motion-preset-slide-up-lg "></div>
      <div className="w-[200px] h-[50px] bg-slate-200 rounded-md motion-preset-slide-up-lg motion-delay-100"></div>
      <div className="w-[200px] h-[50px] bg-slate-200 rounded-md motion-preset-slide-up-lg motion-delay-200"></div>
      <div className="w-[200px] h-[50px] bg-slate-200 rounded-md motion-preset-slide-up-lg motion-delay-300 motion-delay-500/rotate motion-rotate-in-[1080deg]"></div>
    </main>
  );
}
