import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectPage() {
  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Select</h2>
      
      <Card className="card-toss p-6">
        <Label className="mb-2">은행 선택</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="은행을 선택하세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="toss">토스뱅크</SelectItem>
            <SelectItem value="kb">국민은행</SelectItem>
            <SelectItem value="shinhan">신한은행</SelectItem>
            <SelectItem value="woori">우리은행</SelectItem>
          </SelectContent>
        </Select>
      </Card>
    </div>
  );
}
