/** O conteúdo em inglês declara o idioma para leitores de tela e tradutores. */
export default function EnglishTemplate({ children }: { children: React.ReactNode }) {
  return <div lang="en" className="lang-wrap">{children}</div>;
}
