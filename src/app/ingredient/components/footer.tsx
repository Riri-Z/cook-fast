export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-0 flex h-20 w-full items-center justify-center bg-transparent">
      {children}
    </div>
  );
}
