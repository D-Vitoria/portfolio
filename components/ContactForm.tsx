'use client';
import { FormEvent } from 'react';
import { content } from '@/lib/content';
import type { Locale } from '@/lib/i18n';

const to = 'dvitoriaaraujo@outlook.com';

/** Site estático: o envio abre o app de e-mail do visitante com a mensagem preenchida. */
export default function ContactForm({ locale }: { locale: Locale }) {
  const t = content[locale].contact.form;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get('nome') ?? '').trim();
    const email = String(f.get('email') ?? '').trim();
    const assunto = String(f.get('assunto') ?? '').trim() || t.subjectDefault;
    const msg = String(f.get('msg') ?? '').trim();
    const body = `${msg}\n\n— ${nome}${email ? ` (${email})` : ''}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-pair">
        <div className="field">
          <label htmlFor="nome">{t.name}</label>
          <input id="nome" name="nome" className="input" placeholder={t.namePh} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">{t.email}</label>
          <input id="email" name="email" type="email" required className="input" placeholder={t.emailPh} autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="assunto">{t.subject}</label>
        <input id="assunto" name="assunto" className="input" placeholder={t.subjectPh} />
      </div>
      <div className="field">
        <label htmlFor="msg">{t.message}</label>
        <textarea id="msg" name="msg" required rows={6} className="input" placeholder={t.messagePh} />
      </div>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', minWidth: 220 }}>
        {t.send} <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">{t.note}</p>
    </form>
  );
}
