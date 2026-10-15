import React from 'react';
import { Store, User, Settings } from 'lucide-react';

const BottomNav = ({ activeTab = 'home', onSelectTab }) => {
    return (
        <div className="bg-[#F8B140] h-16 w-full flex items-center justify-around px-6">
            <button onClick={() => onSelectTab?.('shop')} className="p-2 hover:scale-110 transition-transform">
                <Store className="h-7 w-7 text-white"/>
            </button>

            <button onClick={() => onSelectTab?.('profile')} className="p-2 hover:scale-110 transition-transform">
                <User className="h-7 w-7 text-white"/>
            </button>

            <button onClick={() => onSelectTab?.('settings')} className="p-2 hover:scale-110 transition-transform">
                <Settings className="h-7 w-7 text-white"/>
            </button>
        </div>
    );
};

export default BottomNav;