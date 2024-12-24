type ScrollCallback = (isActive: boolean) => void;

/**
 * Monitors scroll position and triggers a callback when scroll passes 100px.
 */
export const handleScroll = (onScroll: ScrollCallback): (() => void) => {
  const handleWindowScroll = () => {
    const isActive = window.scrollY > 100;
    onScroll(isActive);
  };

  window.addEventListener('scroll', handleWindowScroll);

  // Cleanup function for removing the event listener
  return () => {
    window.removeEventListener('scroll', handleWindowScroll);
  };
};
