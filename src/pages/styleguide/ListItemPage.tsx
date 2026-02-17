import { Card } from "@/components/ui/card";
import { ListItem, ListItemCompact, List } from "@/components/ui/list-item";
import { TossBankIcon, KBBankIcon, ShinhanBankIcon, KakaoBankIcon } from "@/components/ui/icons";

export function ListItemPage() {
  return (
    <div className="px-5 py-6 space-y-6">
      <h2 className="toss-title2 mb-4">List Item</h2>
      
      {/* 기본 리스트 */}
      <div>
        <p className="toss-caption2 text-muted-foreground mb-2">Default</p>
        <List>
          <ListItem
            leading={<div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">🚶</div>}
            title="만보기"
            subtitle="오늘 3,482보 걸었어요"
            trailing={<span className="text-[#30C85E] font-semibold">+32원</span>}
          />
          <ListItem
            leading={<div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">🎯</div>}
            title="행운퀴즈"
            subtitle="지금 참여하면 최대 1만원"
            badge="HOT"
            badgeVariant="destructive"
          />
          <ListItem
            leading={<div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">🏦</div>}
            title="토스뱅크"
            subtitle="연 2% 이자 받기"
            badge="NEW"
            badgeVariant="primary"
          />
        </List>
      </div>

      {/* 컴팩트 리스트 */}
      <div>
        <p className="toss-caption2 text-muted-foreground mb-2">Compact (계좌 선택)</p>
        <Card className="card-toss p-2">
          <List gap="none">
            <ListItemCompact icon={<TossBankIcon className="size-5" />} title="토스뱅크" subtitle="1234-56-7890123" selected />
            <ListItemCompact icon={<KBBankIcon className="size-5" />} title="국민은행" subtitle="123-45-678901" />
            <ListItemCompact icon={<ShinhanBankIcon className="size-5" />} title="신한은행" subtitle="110-123-456789" />
            <ListItemCompact icon={<KakaoBankIcon className="size-5" />} title="카카오뱅크" subtitle="3333-12-3456789" />
          </List>
        </Card>
      </div>
    </div>
  );
}
