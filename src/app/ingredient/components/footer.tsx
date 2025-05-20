export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bg-transparent bottom-0    w-full h-20 flex justify-center  items-center">
      {children}
    </div>
  );
}
