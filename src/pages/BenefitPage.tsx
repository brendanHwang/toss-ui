import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ListItem, List } from "@/components/ui/list-item";

export function BenefitPage() {
  return (
    <div className="px-5 py-6 space-y-6">
      <div>
        <h2 className="toss-title2 mb-1">혜택</h2>
        <p className="toss-body2 text-muted-foreground">오늘의 혜택을 확인하세요</p>
      </div>

      <Card className="card-toss">
        <CardContent className="pt-5">
          <List>
            <ListItem
              leading={
                <div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                  🚶
                </div>
              }
              title="만보기"
              subtitle="오늘 3,482보 걸었어요"
              trailing={<span className="text-[#30C85E] font-semibold">+32원</span>}
            />
            <ListItem
              leading={
                <div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                  🎯
                </div>
              }
              title="행운퀴즈"
              subtitle="지금 참여하면 최대 1만원"
              badge="HOT"
              badgeVariant="destructive"
            />
            <ListItem
              leading={
                <div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                  🎁
                </div>
              }
              title="출석체크"
              subtitle="매일 출석하고 포인트 받기"
              badge="NEW"
              badgeVariant="primary"
            />
            <ListItem
              leading={
                <div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                  💳
                </div>
              }
              title="카드 혜택"
              subtitle="이번 달 할인 받은 금액"
              trailing={<span className="text-primary font-semibold">12,500원</span>}
            />
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
