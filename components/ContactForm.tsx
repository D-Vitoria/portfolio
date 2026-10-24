'use client';
import { FormEvent } from 'react';

const to = 'dvitoriaaraujo@outlook.com';

/** Site estático: o envio abre o app de e-mail do visitante com a mensagem preenchida. */
export default function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get('nome') ?? '').trim();
    const email = String(f.get('email') ?? '').trim();
    const assunto = String(f.get('assunto') ?? '').trim() || 'Contato pelo portfolio';
    const msg = String(f.get('msg') ?? '').trim();
    const body = `${msg}\n\n— ${nome}${email ? ` (${email})` : ''}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-pair">
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" className="input" placeholder="Seu nome" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required className="input" placeholder="voce@empresa.com" autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="assunto">Assunto</label>
        <input id="assunto" name="assunto" className="input" placeholder="QA, automação, branding, campanha…" />
      </div>
      <div className="field">
        <label htmlFor="msg">Mensagem</label>
        <textarea id="msg" name="msg" required rows={6} className="input" placeholder="Conte um pouco sobre o projeto" />
      </div>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', minWidth: 220 }}>
        Enviar mensagem <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">Ao enviar, seu aplicativo de e-mail abre com a mensagem pronta.</p>
    </form>
  );
}
