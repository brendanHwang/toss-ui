import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input, SearchInput } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function InputsPage() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Input & Textarea</h2>
      
      <Card className="card-toss p-6 space-y-4">
        <div className="space-y-2">
          <Label>기본 Input</Label>
          <Input placeholder="텍스트를 입력하세요" />
        </div>

        <div className="space-y-2">
          <Label>Clearable Input</Label>
          <Input
            placeholder="클리어 가능한 입력"
            clearable
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onClear={() => setInputValue("")}
          />
        </div>

        <div className="space-y-2">
          <Label>Search Input</Label>
          <SearchInput
            placeholder="검색어를 입력하세요"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onClear={() => setSearchValue("")}
          />
        </div>

        <div className="space-y-2">
          <Label>Error / Success States</Label>
          <div className="flex gap-2">
            <Input placeholder="에러" error className="flex-1" />
            <Input placeholder="성공" success className="flex-1" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Textarea</Label>
          <Textarea placeholder="긴 텍스트를 입력하세요..." />
        </div>
      </Card>
    </div>
  );
}
