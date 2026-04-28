export function useScrollTo(onScroll?: () => void) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onScroll?.();
    }
  };

  return scrollToSection;
}
