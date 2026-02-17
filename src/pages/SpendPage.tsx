import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Divider } from "@/components/ui/divider";

export function SpendPage() {
  return (
    <div className="px-5 py-6 space-y-6">
      <div>
        <h2 className="toss-title2 mb-1">내 소비</h2>
        <p className="toss-body2 text-muted-foreground">이번 달 소비 현황</p>
      </div>

      {/* 소비 요약 */}
      <Card className="card-toss">
        <CardContent className="pt-5 space-y-4">
          <div>
            <p className="toss-caption1 text-muted-foreground">2월 사용 금액</p>
            <p className="toss-title1">823,450원</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between toss-body2">
              <span className="text-muted-foreground">예산 대비</span>
              <span className="font-semibold">82%</span>
            </div>
            <Progress value={82} />
            <p className="toss-caption2 text-muted-foreground">
              예산 1,000,000원 중 176,550원 남음
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 카테고리별 소비 */}
      <Card className="card-toss">
        <CardContent className="pt-5 space-y-4">
          <p className="toss-headline">카테고리별 소비</p>
          
          <div className="space-y-3">
            {[
              { emoji: "🍔", label: "식비", amount: "324,500원", percent: 39 },
              { emoji: "🚗", label: "교통", amount: "156,000원", percent: 19 },
              { emoji: "🛒", label: "쇼핑", amount: "198,950원", percent: 24 },
              { emoji: "☕", label: "카페", amount: "84,000원", percent: 10 },
              { emoji: "🎬", label: "문화", amount: "60,000원", percent: 8 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <div className="flex-1">
                    <div className="flex justify-between toss-body2 mb-1">
                      <span>{item.label}</span>
                      <span className="font-semibold">{item.amount}</span>
                    </div>
                    <Progress value={item.percent} className="h-1.5" />
                  </div>
                </div>
                {i < 4 && <Divider className="mt-3" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
