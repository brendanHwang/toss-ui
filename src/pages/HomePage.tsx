import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AssetItem, AssetList } from "@/components/ui/asset-item";
import { TossBankIcon, TossSecuritiesIcon, NHBankIcon } from "@/components/ui/icons";
import { TossIcon } from "@/components/ui/icons";

export function HomePage() {
  return (
    <div className="px-5 py-6 space-y-6">
      {/* 잔액 카드 */}
      <Card className="card-toss">
        <CardContent className="pt-6 pb-5">
          <p className="toss-caption1 text-muted-foreground mb-1">토스머니</p>
          <p className="toss-display">1,234,567원</p>
          <div className="flex gap-3 mt-6">
            <Button className="flex-1" size="xl">
              <TossIcon.Send className="size-5" /> 송금
            </Button>
            <Button variant="secondary" className="flex-1" size="xl">
              충전
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 자산 리스트 */}
      <Card className="card-toss px-3 py-1">
        <AssetList>
          <AssetItem
            icon={<TossSecuritiesIcon className="size-full" />}
            iconBg="transparent"
            amount="51,788,056원"
            label="토스증권 기본계좌"
            action={
              <button className="px-3 py-1 text-[12px] font-medium text-muted-foreground bg-muted rounded-md hover:bg-muted/80 transition-colors">
                송금
              </button>
            }
          />
          <AssetItem
            icon={<TossBankIcon className="size-full" />}
            iconBg="transparent"
            amount="821,145원"
            label="토스뱅크 통장"
            action={
              <button className="px-3 py-1 text-[12px] font-medium text-muted-foreground bg-muted rounded-md hover:bg-muted/80 transition-colors">
                송금
              </button>
            }
          />
          <AssetItem
            icon={<NHBankIcon className="size-full" />}
            iconBg="transparent"
            amount="14,431,094원"
            label="중개형ISA"
          />
          <AssetItem
            icon={<TossSecuritiesIcon className="size-full" />}
            iconBg="transparent"
            amount="66,218,836원"
            change="+5.6%"
            changeType="positive"
            label="투자 모아보기 · 7개"
          />
        </AssetList>
      </Card>
    </div>
  );
}
