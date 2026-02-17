import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ButtonsPage() {
  return (
    <div className="px-5 py-6 space-y-6">
      <h2 className="toss-title2 mb-4">Buttons</h2>
      
      <Card className="card-toss p-6 space-y-6">
        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Variants</p>
          <div className="flex flex-wrap gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="muted">Muted</Button>
          </div>
        </div>

        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Sizes</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>

        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">States</p>
          <div className="flex flex-wrap gap-2">
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </div>

        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Full Width</p>
          <Button fullWidth size="xl">전체 너비 버튼</Button>
        </div>
      </Card>
    </div>
  );
}
