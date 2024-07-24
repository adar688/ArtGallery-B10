import Link from "next/link";

interface NavItemProps {
  label: string; // Required prop for the label text

}

const NavItem: React.FC<NavItemProps> = ({ label  }) => {
  return (
    <div className="relative flex items-center justify-center p-2">
      <div
        className={`
          px-4 py-2
          font-bold text-lg text-cyan-600
          border-2 border-cyan-600
          rounded-lg
          bg-transparent
          transition-all duration-300 ease-in-out
          hover:bg-cyan-600 hover:text-white
        `}
      >
        {/* to fix here the link at clicking  */}
        <Link href="/admin">
        {label}  
        </Link>
        
      </div>
    </div>
  );
};

export default NavItem;
