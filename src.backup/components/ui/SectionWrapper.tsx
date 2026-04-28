interface SectionWrapperProps {
  id: string;
  isDark: boolean;
  isVisible: boolean;
  hasBg?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, isDark, isVisible, hasBg = false, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${hasBg ? (isDark ? 'bg-gray-800' : 'bg-white') : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
