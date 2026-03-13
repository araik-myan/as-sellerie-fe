"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePageTransition } from "./TransitionProvider";
import { ReactNode, MouseEvent } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  ...props
}: Props) {
  const { navigateTo } = usePageTransition();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const isAnchor = href.includes("#");
    const isExternal = href.startsWith("http");
    const isSamePage = href === pathname;

    if (isAnchor || isExternal || isSamePage || e.metaKey || e.ctrlKey) {
      onClick?.();
      return;
    }

    e.preventDefault();
    onClick?.();
    navigateTo(href);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
