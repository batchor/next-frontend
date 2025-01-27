import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeSwitcher } from '@/components/mode-switcher'

const Navbar: React.FC<{className?: string}> = ({className}:{className?: string}) => {
    return (
        <div className={className}>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">
                            This is the nav bar
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                </NavigationMenuList>

                <NavigationMenuList>
                    <ModeSwitcher />
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Navbar