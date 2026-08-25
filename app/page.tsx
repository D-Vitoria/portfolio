import type { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';
import Avatar from '@/components/Avatar';

export const metadata: Metadata = {
  title: 'Diana Vitória de Araújo — QA Analyst & Designer',
  openGraph: { url: 'https://portfolio-d-vitorias-projects.vercel.app/' },
};

export default function Home() {
  return (
    <section aria-label="Apresentação" className="flex flex-col min-h-[90vh] border-b border-zinc-100 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 w-full flex flex-col flex-1 py-10 sm:py-14">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar src="/assets/img/image.png" alt="Diana Vitória de Araújo" className="w-9 h-9 rounded-full object-cover object-top border border-zinc-200 dark:border-zinc-700 shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">QA Analyst &amp; Designer</span>
          </div>
          <span className="inline-flex items-center gap-2 text-[10px] font-mono font-medium text-pass px-2.5 py-1 rounded-full border border-pass/30 bg-pass/10">
            <span className="relative flex w-2 h-2 shrink-0" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pass opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pass" />
            </span>
            disponível para projetos
          </span>
        </div>

        <div className="flex-1 flex items-center my-8 sm:my-0">
          <h1 className="hero-name font-serif leading-[0.87] tracking-tight" aria-label="Diana Vitória de Araújo" style={{ fontSize: 'clamp(58px, 12.5vw, 118px)' }}>
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">Diana</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">Vitória</span>
            <span className="font-normal italic text-clay">de Araújo</span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-8 border-t border-zinc-100 dark:border-zinc-800">
          <p className="text-[15px] text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">Garanto que o que foi prometido chegue inteiro até quem usa — em sistemas e em marcas.</p>
          <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
            <a href="/assets/diana-vitoria-cv.pdf" download className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-5 py-3 rounded-xl hover:opacity-80 transition-opacity">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Currículo
            </a>
            <div className="flex items-center gap-2.5">
              <a href="https://www.linkedin.com/in/d-vitoria/" target="_blank" rel="noopener" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-clay hover:border-clay/50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener" aria-label="Behance" className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-clay hover:border-clay/50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.755-.63.16-1.3.24-2.01.24H0V4.502h6.938zm-.346 4.97c.46 0 .836-.11 1.12-.333.283-.22.425-.562.425-1.02 0-.266-.047-.484-.143-.66a1.14 1.14 0 0 0-.388-.41 1.66 1.66 0 0 0-.56-.215 3.13 3.13 0 0 0-.657-.065H2.672v2.703zm.16 5.228c.246 0 .48-.025.7-.073a1.72 1.72 0 0 0 .582-.248c.164-.117.295-.276.394-.473.1-.197.15-.447.15-.747 0-.594-.167-1.023-.498-1.285-.33-.262-.776-.393-1.332-.393H2.673v3.22zm9.124-.27c.336.332.822.498 1.46.498.454 0 .847-.114 1.18-.342.33-.23.527-.467.6-.715h2.31c-.37 1.152-1.014 1.976-1.94 2.47-.927.493-2.04.74-3.34.74-.905 0-1.722-.143-2.45-.43a5.24 5.24 0 0 1-1.849-1.234 5.59 5.59 0 0 1-1.16-1.904 7.1 7.1 0 0 1-.4-2.413c0-.85.138-1.64.416-2.372a5.56 5.56 0 0 1 1.178-1.9 5.39 5.39 0 0 1 1.832-1.258c.714-.303 1.5-.455 2.36-.455 1.007 0 1.888.194 2.64.58.752.388 1.368.906 1.844 1.547.48.64.826 1.382 1.038 2.217.215.834.293 1.716.238 2.647h-6.93c0 .74.25 1.437.984 1.677zm2.724-4.53c-.32-.32-.884-.48-1.576-.48-.443 0-.813.074-1.11.22a2.38 2.38 0 0 0-.713.556c-.183.226-.31.463-.387.718a3.47 3.47 0 0 0-.133.7h4.832c-.108-.762-.4-1.396-.913-1.714zM15.1 6.07h5.49V7.5H15.1z"/></svg>
              </a>
              <a href="https://github.com/D-Vitoria" target="_blank" rel="noopener" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-clay hover:border-clay/50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="mailto:dvitoriaaraujo@outlook.com" aria-label="Email" className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-clay hover:border-clay/50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-10" aria-hidden="true">
          <span id="scrollHint" className="flex flex-col items-center gap-1.5 text-zinc-300 dark:text-zinc-700">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </span>
        </div>

      </div>
    </section>
  );
}
