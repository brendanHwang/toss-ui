import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { ToastProvider, useToast, Snackbar } from "@/components/ui/toast";

function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="secondary" onClick={() => toast("기본 토스트 메시지입니다")}>
        기본
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toast("링크가 복사되었습니다", { action: { label: "실행취소", onClick: () => {} } })}
      >
        액션 포함
      </Button>
      <Button size="sm" variant="secondary" onClick={() => toast("5초간 표시됩니다", { duration: 5000 })}>
        5초 유지
      </Button>
    </div>
  );
}

export function ToastPage() {
  return (
    <ToastProvider>
      <div className="px-5 py-6">
        <h2 className="toss-title2 mb-4">Toast</h2>
        
        <Card className="card-toss p-6 space-y-4">
          <p className="toss-caption2 text-muted-foreground">토스 스타일 토스트 (하단 스낵바)</p>
          <ToastDemo />

          <Divider />

          <div className="space-y-2">
            <p className="toss-caption2 text-muted-foreground">Snackbar 컴포넌트</p>
            <Snackbar message="링크가 복사되었습니다" action={{ label: "실행취소", onClick: () => {} }} />
          </div>
        </Card>
      </div>
    </ToastProvider>
  );
}
