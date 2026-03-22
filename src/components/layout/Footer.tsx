interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer className={`py-8 px-4 ${isDark ? 'bg-gray-900' : 'bg-slate-900'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className={isDark ? 'text-gray-400' : 'text-slate-300'}>
          © {new Date().getFullYear()} Anis BELAGGOUN. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
