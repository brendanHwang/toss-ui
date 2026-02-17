import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge, Chip } from "@/components/ui/badge";

export function BadgesPage() {
  const [selectedChip, setSelectedChip] = useState("all");

  return (
    <div className="px-5 py-6 space-y-6">
      <h2 className="toss-title2 mb-4">Badge & Chip</h2>
      
      <Card className="card-toss p-6 space-y-6">
        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Badges</p>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>

        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Chips (선택 가능)</p>
          <div className="flex flex-wrap gap-2">
            {["all", "송금", "결제", "충전"].map((chip) => (
              <Chip
                key={chip}
                selected={selectedChip === chip}
                onSelect={() => setSelectedChip(chip)}
              >
                {chip === "all" ? "전체" : chip}
              </Chip>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
