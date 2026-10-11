export function Footer() {
  return (
    <footer className="w-full border-t border-borderline py-10 bg-canvas text-xs font-mono text-muted">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Colophon Details */}
        <div className="space-y-1">
          <p className="text-zinc-400">
            Usama Nassar · Systems & Full-Stack Engineer
          </p>
          <p className="text-zinc-600">
            Built with Next.js App Router, TypeScript & Tailwind CSS. Zero template bloat.
          </p>
        </div>

        {/* Runtime & Commit Ref */}
        <div className="flex flex-col sm:items-end space-y-1 text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-zinc-400">EDGE RUNTIME / CDN</span>
          </div>
          <span className="text-[11px] text-zinc-600">
            © {new Date().getFullYear()} · REV.98B7F1 · ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
}
