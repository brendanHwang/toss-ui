import { useState, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { TossIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
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

const menuItems = [
  { label: "Typography", path: "/typography" },
  { label: "Icons", path: "/icons" },
  { label: "Colors", path: "/colors" },
  { label: "Buttons", path: "/buttons" },
  { label: "Inputs", path: "/inputs" },
  { label: "Badges & Chips", path: "/badges" },
  { label: "Avatar", path: "/avatar" },
  { label: "Switch & Toggle", path: "/switch" },
  { label: "Checkbox & Radio", path: "/checkbox" },
  { label: "Select", path: "/select" },
  { label: "Dialogs & Sheets", path: "/dialogs" },
  { label: "Toast", path: "/toast" },
  { label: "Progress", path: "/progress" },
  { label: "Tabs", path: "/tabs" },
  { label: "Items", path: "/items" },
  { label: "Skeleton", path: "/skeleton" },
  { label: "Empty State", path: "/empty-state" },
  { label: "Navigator", path: "/navigator" },
  { label: "Examples", path: "/examples" },
];

export function StyleguideLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
  const currentItem = menuItems[currentIndex];
  const prevItem = currentIndex > 0 ? menuItems[currentIndex - 1] : null;
  const nextItem = currentIndex < menuItems.length - 1 ? menuItems[currentIndex + 1] : null;
  const title = currentItem?.label || "toss-ui";

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return menuItems;
    const query = searchQuery.toLowerCase();
    return menuItems.filter(item => 
      item.label.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const handleSearch = (path: string) => {
    navigate(path);
    setSearchMode(false);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-card toss-blur border-b border-border">
        <div className="max-w-2xl mx-auto h-14 px-4 flex items-center justify-between gap-3">
          {searchMode ? (
            /* 검색 모드 */
            <>
              <button
                onClick={() => { setSearchMode(false); setSearchQuery(""); }}
                className="size-10 flex items-center justify-center rounded-xl hover:bg-muted transition-colors shrink-0"
              >
                <TossIcon.ArrowLeft className="size-5 text-foreground" />
              </button>
              <Input
                autoFocus
                placeholder="컴포넌트 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
            </>
          ) : (
            /* 기본 모드 */
            <>
              {/* Left - Drawer */}
              <div className="w-10">
                <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                  <DrawerTrigger asChild>
                    <button className="size-10 flex items-center justify-center rounded-xl hover:bg-muted transition-colors">
                      <TossIcon.Menu className="size-6 text-foreground" />
                    </button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Components</DrawerTitle>
                      <DrawerCloseButton />
                    </DrawerHeader>
                    <DrawerBody className="overflow-y-auto">
                      <div className="space-y-0.5">
                        {menuItems.map((item) => (
                          <DrawerMenuItem
                            key={item.path}
                            label={item.label}
                            active={location.pathname === item.path}
                            onClick={() => handleNavigate(item.path)}
                          />
                        ))}
                      </div>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </div>

              {/* Center - Title */}
              <h1 className="toss-headline text-foreground flex-1 text-center">{title}</h1>

              {/* Right - Search & Dark Mode */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSearchMode(true)}
                  className="size-10 flex items-center justify-center rounded-xl hover:bg-muted transition-colors"
                >
                  <TossIcon.Search className="size-5 text-foreground" />
                </button>
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
            </>
          )}
        </div>

        {/* 검색 결과 */}
        {searchMode && searchQuery && (
          <div className="max-w-2xl mx-auto px-4 pb-3">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleSearch(item.path)}
                    className="w-full px-4 py-3 text-left hover:bg-muted transition-colors border-b border-border last:border-b-0"
                  >
                    <span className="toss-body2">{item.label}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-muted-foreground toss-body2">
                  검색 결과가 없습니다
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* 콘텐츠 */}
      <main className="max-w-2xl mx-auto">
        <Outlet />
      </main>

      {/* 하단 이전/다음 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
          {prevItem ? (
            <button
              onClick={() => navigate(prevItem.path)}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <TossIcon.ChevronLeft className="size-5" />
              <span className="toss-body2">{prevItem.label}</span>
            </button>
          ) : (
            <div />
          )}
          
          {nextItem ? (
            <button
              onClick={() => navigate(nextItem.path)}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="toss-body2">{nextItem.label}</span>
              <TossIcon.ChevronRight className="size-5" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  );
}
