
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-4',
        scrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#home"
              className="text-xl md:text-2xl font-bold font-display tracking-tight"
            >
              Newton<span className="text-primary">.dev</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium link-underline"
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="ml-4" 
              variant="default"
              onClick={() => window.open('mailto:newtonbryan12428@gmail.com', '_blank')}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="text-foreground p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden absolute top-full left-0 right-0 bg-background/90 backdrop-blur-lg shadow-md transition-all duration-300 ease-in-out overflow-hidden',
            isOpen ? 'max-h-screen border-b border-border' : 'max-h-0'
          )}
        >
          <div className="flex flex-col py-4 px-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium hover:bg-secondary/50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="mt-4" 
              variant="default"
              onClick={() => {
                window.open('mailto:newtonbryan12428@gmail.com', '_blank');
                setIsOpen(false);
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
