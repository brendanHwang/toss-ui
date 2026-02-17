import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress, Spinner, LoadingDots } from "@/components/ui/progress";
import { Divider } from "@/components/ui/divider";

export function ProgressPage() {
  const [progress, setProgress] = useState(65);

  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Progress & Loading</h2>
      
      <Card className="card-toss p-6 space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <p className="toss-body2">진행률</p>
            <p className="toss-body2 text-primary font-semibold">{progress}%</p>
          </div>
          <Progress value={progress} />
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
              -10%
            </Button>
            <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>
              +10%
            </Button>
          </div>
        </div>

        <Divider />

        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Spinner</p>
          <div className="flex items-center gap-6">
            <Spinner size="sm" />
            <Spinner />
            <Spinner size="lg" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Loading Dots</p>
          <LoadingDots />
        </div>
      </Card>
    </div>
  );
}
