'use client';
import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';
import { basePath } from '@/lib/basePath';

const withBasePath = (href: string) => (href.startsWith('/') ? `${basePath}${href}` : href);

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
  title?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const enterDirs = ['c-el', 'c-er', 'c-et', 'c-eb'] as const;
const rand = (arr: readonly string[]) => arr[Math.floor(Math.random() * arr.length)];

export default function TransitionLink({ href, children, download, target, rel, onClick, ...rest }: Props) {
  const router = useRouter();

  if (download || target === '_blank') {
    return <a href={withBasePath(href)} target={target} rel={rel} download={download} onClick={onClick} {...rest}>{children}</a>;
  }

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel')) return;
    e.preventDefault();
    const curtain = document.getElementById('curtain');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (curtain && !reduced) {
      curtain.className = rand(enterDirs);
      setTimeout(() => router.push(href), 300);
    } else {
      router.push(href);
    }
  };

  return <a href={withBasePath(href)} onClick={handleClick} rel={rel} {...rest}>{children}</a>;
}
