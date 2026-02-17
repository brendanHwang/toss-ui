import { Card } from "@/components/ui/card";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";

export function AvatarPage() {
  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Avatar</h2>
      
      <Card className="card-toss p-6 space-y-6">
        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Sizes</p>
          <div className="flex items-center gap-3">
            <Avatar size="xs" fallback="토" />
            <Avatar size="sm" fallback="스" />
            <Avatar size="default" fallback="디" />
            <Avatar size="lg" fallback="자" />
            <Avatar size="xl" fallback="인" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Avatar Group</p>
          <AvatarGroup max={4}>
            <Avatar fallback="A" />
            <Avatar fallback="B" />
            <Avatar fallback="C" />
            <Avatar fallback="D" />
            <Avatar fallback="E" />
          </AvatarGroup>
        </div>
      </Card>
    </div>
  );
}
