import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ListItem, ListItemCompact, SimpleListItem, List } from "@/components/ui/list-item";
import { Switch } from "@/components/ui/switch";
import { TossIcon, TossBankIcon, KBBankIcon, ShinhanBankIcon, KakaoBankIcon } from "@/components/ui/icons";

export function ItemsPage() {
  const [notiOn, setNotiOn] = useState(true);
  const [darkOn, setDarkOn] = useState(false);

  return (
    <div className="px-5 py-6 space-y-6">
      <h2 className="toss-title2 mb-4">Items</h2>
      
      {/* Simple List Item (1줄) */}
      <div>
        <p className="toss-caption1 font-semibold text-muted-foreground mb-2">Simple (1줄)</p>
        <Card className="card-toss p-1">
          <List gap="none">
            <SimpleListItem 
              icon={<TossIcon.User className="size-5" />} 
              label="내 정보" 
            />
            <SimpleListItem 
              icon={<TossIcon.Bell className="size-5" />} 
              label="알림 설정"
              trailing={<Switch checked={notiOn} onCheckedChange={setNotiOn} />}
              showArrow={false}
            />
            <SimpleListItem 
              icon={<TossIcon.Lock className="size-5" />} 
              label="보안 설정"
              value="Face ID"
            />
            <SimpleListItem 
              icon={<TossIcon.Eye className="size-5" />} 
              label="다크 모드"
              trailing={<Switch checked={darkOn} onCheckedChange={setDarkOn} />}
              showArrow={false}
            />
            <SimpleListItem 
              icon={<TossIcon.HelpCircle className="size-5" />} 
              label="고객센터"
            />
            <SimpleListItem 
              icon={<TossIcon.Trash className="size-5" />} 
              label="계정 삭제"
              destructive
              showArrow={false}
            />
          </List>
        </Card>
      </div>

      {/* List Item (2줄) */}
      <div>
        <p className="toss-caption1 font-semibold text-muted-foreground mb-2">Default (2줄)</p>
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

      {/* List Item Compact */}
      <div>
        <p className="toss-caption1 font-semibold text-muted-foreground mb-2">Compact (선택)</p>
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
