'use client';

export default function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" className="btn btn-primary" onClick={() => window.print()}>
      {label} <span aria-hidden="true">⎙</span>
    </button>
  );
}
