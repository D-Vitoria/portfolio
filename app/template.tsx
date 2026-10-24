/** Remonta a cada navegação: dispara a troca de página (dvIn) e reinicia as ilustrações em traço. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}
