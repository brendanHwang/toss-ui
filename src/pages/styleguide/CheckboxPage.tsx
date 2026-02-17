import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox, CheckboxWithLabel } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem, RadioWithLabel, RadioCard } from "@/components/ui/radio";
import { Divider } from "@/components/ui/divider";

export function CheckboxPage() {
  const [checked, setChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");

  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Checkbox & Radio</h2>
      
      <Card className="card-toss p-6 space-y-6">
        {/* Checkbox */}
        <div className="space-y-4">
          <p className="toss-caption1 font-semibold text-muted-foreground">Checkbox</p>
          
          {/* 기본 (아이콘만) */}
          <div className="flex items-center gap-3">
            <Checkbox checked={checked} onCheckedChange={(v) => setChecked(v as boolean)} />
            <span className="toss-body2">기본 체크박스</span>
          </div>
          
          {/* 전체 영역 클릭 가능 */}
          <CheckboxWithLabel
            label="전체 영역 클릭 가능"
            description="라벨이나 설명 영역 어디를 클릭해도 체크됩니다"
          />
          <CheckboxWithLabel
            label="마케팅 수신 동의"
            description="이벤트 및 혜택 정보를 받아보세요"
          />
        </div>

        <Divider />

        {/* Radio */}
        <div className="space-y-4">
          <p className="toss-caption1 font-semibold text-muted-foreground">Radio</p>
          
          <RadioGroup value={selectedRadio} onValueChange={setSelectedRadio}>
            {/* 전체 영역 클릭 가능 */}
            <RadioWithLabel 
              value="option1" 
              label="전체 영역 클릭 가능" 
              description="라벨이나 설명 영역 어디를 클릭해도 선택됩니다"
            />
            <RadioWithLabel 
              value="option2" 
              label="옵션 2" 
              description="두 번째 옵션입니다"
            />
          </RadioGroup>
        </div>

        <Divider />

        {/* Radio Cards */}
        <div className="space-y-4">
          <p className="toss-caption1 font-semibold text-muted-foreground">Radio Cards</p>
          <RadioGroup value={selectedRadio} onValueChange={setSelectedRadio}>
            <RadioCard value="option1" label="기본 배송" description="2-3일 소요" />
            <RadioCard value="option2" label="빠른 배송" description="1일 소요 (+2,500원)" />
          </RadioGroup>
        </div>
      </Card>
    </div>
  );
}
