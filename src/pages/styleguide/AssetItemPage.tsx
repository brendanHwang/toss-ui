import { Card } from "@/components/ui/card";
import { AssetItem, AssetList } from "@/components/ui/asset-item";
import { TossBankIcon, TossSecuritiesIcon, NHBankIcon } from "@/components/ui/icons";

export function AssetItemPage() {
  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Asset Item</h2>
      
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
