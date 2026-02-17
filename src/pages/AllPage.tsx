import { Card, CardContent } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";

const menuItems = [
  { emoji: "💸", label: "송금" },
  { emoji: "💳", label: "카드" },
  { emoji: "🏦", label: "계좌" },
  { emoji: "📈", label: "투자" },
  { emoji: "🔒", label: "보험" },
  { emoji: "💰", label: "대출" },
  { emoji: "🎯", label: "만보기" },
  { emoji: "🎁", label: "선물하기" },
];

const settingItems = [
  { emoji: "👤", label: "내 정보" },
  { emoji: "🔔", label: "알림 설정" },
  { emoji: "🔐", label: "보안 설정" },
  { emoji: "❓", label: "고객센터" },
];

export function AllPage() {
  return (
    <div className="px-5 py-6 space-y-6">
      <div>
        <h2 className="toss-title2 mb-1">전체</h2>
        <p className="toss-body2 text-muted-foreground">자주 쓰는 기능을 모아봤어요</p>
      </div>

      {/* 메뉴 그리드 */}
      <Card className="card-toss">
        <CardContent className="pt-5">
          <p className="toss-headline mb-4">서비스</p>
          <div className="grid grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="flex flex-col items-center gap-2 py-2 hover:bg-muted rounded-xl transition-colors"
              >
                <div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                  {item.emoji}
                </div>
                <span className="toss-caption1">{item.label}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 설정 */}
      <Card className="card-toss">
        <CardContent className="pt-5">
          <p className="toss-headline mb-2">설정</p>
          <div className="space-y-1">
            {settingItems.map((item, i) => (
              <div key={item.label}>
                <button className="w-full flex items-center gap-3 py-3 hover:bg-muted rounded-xl transition-colors px-2 -mx-2">
                  <span className="text-lg">{item.emoji}</span>
                  <span className="toss-body1">{item.label}</span>
                </button>
                {i < settingItems.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
