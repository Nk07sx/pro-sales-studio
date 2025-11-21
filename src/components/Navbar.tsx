export const Navbar = () => {
  return (
    <nav className="fixed top-[40px] md:top-[48px] left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-poppins font-bold text-foreground">
            InfinityIA
          </h2>
        </div>
      </div>
    </nav>
  );
};
