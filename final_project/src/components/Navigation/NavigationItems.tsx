'use client';

import NavItem from "./NavItem";
import Container from "../General/Container";

// NavCategory component to render navigation
const NavigationItems = () => {
    return (
        <div className="w-full shadow-sm top-20 pt-4">
          <Container>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <NavItem
                            label="Home"
                        />
                        <NavItem
                            label="MarketPlace"
                        />
                        <NavItem
                        label="Exhibitions"
                        />
                </div>
            </div>
          </Container>
        </div>
    );
};

export default NavigationItems;
