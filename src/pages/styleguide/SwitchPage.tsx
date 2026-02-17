import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch, Toggle } from "@/components/ui/switch";
import { Divider } from "@/components/ui/divider";

export function SwitchPage() {
  const [switchOn, setSwitchOn] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);

  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Switch & Toggle</h2>
      
      <Card className="card-toss p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="toss-body1 font-semibold">알림 설정</p>
            <p className="toss-caption1 text-muted-foreground">푸시 알림을 받습니다</p>
          </div>
          <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
        </div>

        <Divider />

        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Toggle Button</p>
          <div className="flex gap-2">
            <Toggle pressed={toggleOn} onPressedChange={setToggleOn}>
              {toggleOn ? "활성화됨" : "비활성화"}
            </Toggle>
          </div>
        </div>
      </Card>
    </div>
  );
}
