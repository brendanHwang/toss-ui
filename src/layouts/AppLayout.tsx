import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { TossIcon } from "@/components/ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerMenuItem,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Divider } from "@/components/ui/divider";

/* ========== Filled Icons for Navigation ========== */
const HomeIcon = ({ filled = false, className = "" }: { filled?: boolean; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {filled ? (
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z" fill="currentColor"/>
    ) : (
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
);

const GiftIcon = ({ filled = false, className = "" }: { filled?: boolean; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {filled ? (
      <>
        <rect x="3" y="8" width="18" height="4" rx="1" fill="currentColor"/>
        <path d="M5 12H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V12Z" fill="currentColor"/>
        <path d="M12 8C12 8 12 5 9.5 5C7 5 7 8 9.5 8H12Z" fill="currentColor"/>
        <path d="M12 8C12 8 12 5 14.5 5C17 5 17 8 14.5 8H12Z" fill="currentColor"/>
        <rect x="11" y="8" width="2" height="13" fill="currentColor" opacity="0.3"/>
      </>
    ) : (
      <>
        <rect x="3" y="8" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M5 12V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V12" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 8V21" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 8C12 8 12 4 9 4C6 4 6 8 9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 8C12 8 12 4 15 4C18 4 18 8 15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </>
    )}
  </svg>
);

const ChartIcon = ({ filled = false, className = "" }: { filled?: boolean; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {filled ? (
      <>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor" fillOpacity="0.2"/>
        <path d="M12 2V12L19.07 4.93C17.16 3.11 14.7 2 12 2Z" fill="currentColor"/>
        <path d="M12 12L19.07 4.93C20.89 6.84 22 9.3 22 12H12Z" fill="currentColor"/>
      </>
    ) : (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 3V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 12L18.36 5.64" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </>
    )}
  </svg>
);

const GridIcon = ({ filled = false, className = "" }: { filled?: boolean; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {filled ? (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor"/>
      </>
    ) : (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      </>
    )}
  </svg>
);

const navItems = [
  { Icon: HomeIcon, label: "홈", path: "/" },
  { Icon: GiftIcon, label: "혜택", path: "/benefit" },
  { Icon: ChartIcon, label: "내 소비", path: "/spend" },
  { Icon: GridIcon, label: "전체", path: "/all" },
];

export function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const getTitle = () => {
    switch (location.pathname) {
      case "/": return "홈";
      case "/benefit": return "혜택";
      case "/spend": return "내 소비";
      case "/all": return "전체";
      default: return "toss-ui";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-card toss-blur border-b border-border">
        <div className="max-w-2xl mx-auto h-14 px-4 flex items-center justify-between">
          {/* Left - Drawer */}
          <div className="w-10">
            <Drawer>
              <DrawerTrigger asChild>
                <button className="size-10 flex items-center justify-center rounded-xl hover:bg-muted transition-colors">
                  <TossIcon.Menu className="size-6 text-foreground" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>메뉴</DrawerTitle>
                  <DrawerCloseButton />
                </DrawerHeader>
                <DrawerBody>
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <DrawerMenuItem
                        key={item.path}
                        icon={<item.Icon className="size-5" />}
                        label={item.label}
                        active={location.pathname === item.path}
                        onClick={() => navigate(item.path)}
                      />
                    ))}
                  </div>
                  <Divider className="my-4" />
                  <div className="space-y-1">
                    <DrawerMenuItem 
                      label="스타일가이드" 
                      onClick={() => navigate("/styleguide")}
                    />
                    <DrawerMenuItem label="설정" />
                    <DrawerMenuItem label="고객센터" />
                  </div>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Center - Title */}
          <h1 className="toss-headline text-foreground">{getTitle()}</h1>

          {/* Right - Dark Mode Toggle */}
          <div className="w-10">
            <button
              onClick={toggleDarkMode}
              className="size-10 flex items-center justify-center rounded-xl hover:bg-muted transition-colors"
            >
              {darkMode ? (
                <Sun className="size-5 text-foreground" />
              ) : (
                <Moon className="size-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 콘텐츠 */}
      <main className="max-w-2xl mx-auto">
        <Outlet />
      </main>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex justify-around max-w-2xl mx-auto px-2 py-1 pb-[max(4px,env(safe-area-inset-bottom))]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-0.5 py-2 px-4 transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <item.Icon className="size-6" filled={isActive} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
