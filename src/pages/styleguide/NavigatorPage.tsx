import { useState } from "react";
import { Card } from "@/components/ui/card";
import { TossIcon } from "@/components/ui/icons";

/* Filled Icons */
const HomeIcon = ({ filled = false, className = "" }: { filled?: boolean; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    {filled ? (
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z" fill="currentColor"/>
    ) : (
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
);

const GiftIcon = ({ filled = false, className = "" }: { filled?: boolean; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    {filled ? (
      <>
        <rect x="3" y="8" width="18" height="4" rx="1" fill="currentColor"/>
        <path d="M5 12H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V12Z" fill="currentColor"/>
        <path d="M12 8C12 8 12 5 9.5 5C7 5 7 8 9.5 8H12Z" fill="currentColor"/>
        <path d="M12 8C12 8 12 5 14.5 5C17 5 17 8 14.5 8H12Z" fill="currentColor"/>
        <rect x="11" y="8" width="2" height="13" fill="currentColor" fillOpacity="0.3"/>
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
  <svg className={className} viewBox="0 0 24 24" fill="none">
    {filled ? (
      <>
        <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.2"/>
        <path d="M12 3V12L18.36 5.64" fill="currentColor"/>
        <path d="M12 3C16.97 3 21 7.03 21 12H12V3Z" fill="currentColor"/>
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
  <svg className={className} viewBox="0 0 24 24" fill="none">
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

export function NavigatorPage() {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Bottom Navigator</h2>
      
      <Card className="card-toss overflow-hidden">
        {/* 데모 화면 */}
        <div className="h-48 bg-muted/50 flex items-center justify-center">
          <p className="toss-body2 text-muted-foreground">
            선택: <span className="font-semibold text-foreground">{activeNav}</span>
          </p>
        </div>
        
        {/* 하단 네비게이션 */}
        <nav className="border-t border-border bg-card">
          <div className="flex justify-around px-2 py-1">
            {[
              { Icon: HomeIcon, label: "홈", key: "home" },
              { Icon: GiftIcon, label: "혜택", key: "benefit" },
              { Icon: ChartIcon, label: "내 소비", key: "spend" },
              { Icon: GridIcon, label: "전체", key: "all" },
            ].map((item) => {
              const isActive = activeNav === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setActiveNav(item.key)}
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
      </Card>

    </div>
  );
}
