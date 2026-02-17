import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";

export function EmptyStatePage() {
  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Empty State</h2>
      
      <Card className="card-toss">
        <EmptyState
          icon="📭"
          title="아직 내역이 없어요"
          description="첫 송금을 해보세요! 친구에게 간편하게 돈을 보낼 수 있어요."
          action={{ label: "송금하기", onClick: () => {} }}
        />
      </Card>
    </div>
  );
}
