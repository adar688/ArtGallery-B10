import Link from "next/link";
import Container from "../General/Container";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import getCurrentUser from "@/actions/getCurrentUser";

// Navbar.tsx
import dynamic from 'next/dynamic';
import NavigationItems from "./NavigationItems";

// Dynamically import the ThemeBtn component with ssr: false
const ThemeBtn = dynamic(() => import('../General/DarkLightButton'), {
  ssr: false,
});

const Navbar = async () => {

  const currentUser= await getCurrentUser();


  return (
    <div className="top-0 w-full z-30 shadow-sm">
      <Container>
        <div className="text-lg flex flex-col sm:flex-row justify-between items-center py-4 relative">
          {/* Left side: Logo and Navigation Links */}
          <div className="flex items-center gap-4">
            {/* Navigation Links */}
            <Link href="/" className="flex items-center gap-2">
              <span className="ml-2">Home</span>
            </Link>

          </div>
          {/*className="hidden md:block" */}

          {/* Right side: Account and Cart Icons */}
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="/" className="flex items-center gap-2"><UserMenu currentUser={currentUser}/></Link>
            {/* Cart Icon with badge */}
            <div className="relative">
              <CartCount/>
              {/* Badge */}
            </div>
            <ThemeBtn/>
          </div>
        </div>
      </Container>
      <NavigationItems/> 
    </div>
 
  );
};

export default Navbar;