'use client';

export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  void delay;
  return <>{children}</>;
}
