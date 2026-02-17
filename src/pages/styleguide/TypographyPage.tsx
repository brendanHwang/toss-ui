import { Card } from "@/components/ui/card";

export function TypographyPage() {
  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Typography</h2>
      <Card className="card-toss p-6 space-y-4">
        <p className="toss-display">Display 36px</p>
        <p className="toss-title1">Title 1 - 28px Bold</p>
        <p className="toss-title2">Title 2 - 24px SemiBold</p>
        <p className="toss-title3">Title 3 - 20px SemiBold</p>
        <p className="toss-headline">Headline - 17px SemiBold</p>
        <p className="toss-body1">Body 1 - 17px Regular</p>
        <p className="toss-body2">Body 2 - 15px Regular</p>
        <p className="toss-caption1">Caption 1 - 13px Regular</p>
        <p className="toss-caption2">Caption 2 - 11px Regular</p>
      </Card>
    </div>
  );
}
