/**
 * Minimal layout for /ask — no site header or footer.
 * Root layout still provides ThemeProvider and fonts.
 */
export default function AskLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
