import TransitionLink from './TransitionLink';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 py-12 text-center mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <p className="font-serif italic text-zinc-500 dark:text-zinc-500 text-lg">Diana Vitória de Araújo</p>
        <div className="flex flex-wrap justify-center gap-1 mt-4">
          <a href="https://www.linkedin.com/in/d-vitoria/" target="_blank" rel="noopener" className="text-sm text-zinc-400 dark:text-zinc-600 px-3 py-1.5 rounded-lg hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors">LinkedIn</a>
          <TransitionLink href="/sobre"      className="text-sm text-zinc-400 dark:text-zinc-600 px-3 py-1.5 rounded-lg hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors">Sobre</TransitionLink>
          <TransitionLink href="/servicos"   className="text-sm text-zinc-400 dark:text-zinc-600 px-3 py-1.5 rounded-lg hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors">Serviços</TransitionLink>
          <TransitionLink href="/trabalhos"  className="text-sm text-zinc-400 dark:text-zinc-600 px-3 py-1.5 rounded-lg hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors">Trabalhos</TransitionLink>
          <TransitionLink href="/contato"    className="text-sm text-zinc-400 dark:text-zinc-600 px-3 py-1.5 rounded-lg hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors">Contato</TransitionLink>
        </div>
        <p className="text-xs text-zinc-300 dark:text-zinc-700 mt-6">© 2026 Diana Vitória de Araújo</p>
      </div>
    </footer>
  );
}
