import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  openGraph: { url: 'https://portfolio-d-vitorias-projects.vercel.app/contato' },
};

export default function Contato() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-32">
      <h1 className="font-serif font-semibold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 dark:text-zinc-50 mb-4 reveal">Vamos conversar?</h1>
      <p className="text-[15px] text-zinc-500 dark:text-zinc-400 mb-16 max-w-md reveal">Aberta a projetos de QA, automação de testes e design. Me conta o que você precisa.</p>

      <form id="contactForm" className="max-w-lg space-y-5 reveal">
        <div>
          <label htmlFor="nome" className="block font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-2">Nome</label>
          <input id="nome" name="nome" type="text" required placeholder="Seu nome" className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-clay/40 transition" />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-2">Email</label>
          <input id="email" name="email" type="email" required placeholder="seu@email.com" className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-clay/40 transition" />
        </div>
        <div>
          <label htmlFor="msg" className="block font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-2">Mensagem</label>
          <textarea id="msg" name="msg" required rows={5} placeholder="Me conta sobre o projeto..." className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-clay/40 transition resize-none" />
        </div>
        <button type="submit" className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm px-6 py-3.5 rounded-xl hover:opacity-80 transition-opacity">
          Enviar mensagem
        </button>
      </form>

      <div className="mt-16 pt-10 border-t border-zinc-100 dark:border-zinc-800 reveal">
        <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-5">Ou diretamente por</p>
        <div className="flex flex-col gap-3">
          <a href="mailto:dvitoriaaraujo@outlook.com" className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:text-clay transition-colors">dvitoriaaraujo@outlook.com</a>
          <a href="https://www.linkedin.com/in/d-vitoria/" target="_blank" rel="noopener" className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:text-clay transition-colors">LinkedIn ↗</a>
        </div>
      </div>
    </div>
  );
}
