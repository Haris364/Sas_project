export default function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute -top-10 -left-10 w-52 h-52 bg-violet-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative rounded-3xl border border-white/10 bg-[#0d1328]/90 backdrop-blur-2xl shadow-2xl shadow-violet-500/10 overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-black/30">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <div className="grid grid-cols-4 min-h-[500px]">
          <div className="border-r border-white/10 p-5 space-y-4 bg-black/20">
            <div className="h-12 rounded-xl bg-violet-500/20"></div>
            <div className="h-12 rounded-xl bg-white/5"></div>
            <div className="h-12 rounded-xl bg-white/5"></div>
            <div className="h-12 rounded-xl bg-white/5"></div>
          </div>

          <div className="col-span-3 p-6 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-28 rounded-2xl bg-gradient-to-br from-violet-500/30 to-violet-700/20 border border-violet-500/20"></div>
              <div className="h-28 rounded-2xl bg-white/5 border border-white/10"></div>
              <div className="h-28 rounded-2xl bg-white/5 border border-white/10"></div>
            </div>

            <div className="h-64 rounded-2xl bg-white/5 border border-white/10 p-5 flex items-end gap-3">
              <div className="w-full h-24 bg-violet-500/40 rounded-xl"></div>
              <div className="w-full h-36 bg-cyan-500/40 rounded-xl"></div>
              <div className="w-full h-20 bg-violet-500/40 rounded-xl"></div>
              <div className="w-full h-44 bg-cyan-500/40 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}