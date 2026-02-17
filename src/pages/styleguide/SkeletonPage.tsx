import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Skeleton, 
  SkeletonCircle, 
  SkeletonText, 
  SkeletonListItem,
  SkeletonButton,
  SkeletonImage,
  SkeletonAvatarGroup,
  SkeletonInput,
} from "@/components/ui/skeleton";
import { Avatar } from "@/components/ui/avatar";
import { Divider } from "@/components/ui/divider";

export function SkeletonPage() {
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState<"shimmer" | "pulse">("shimmer");

  // 자동 로딩 시뮬레이션
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="px-5 py-6 space-y-6">
      <h2 className="toss-title2 mb-4">Skeleton</h2>
      
      {/* 애니메이션 타입 선택 */}
      <Card className="card-toss p-4">
        <div className="flex items-center justify-between">
          <p className="toss-body2">Animation</p>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant={animation === "shimmer" ? "default" : "outline"}
              onClick={() => setAnimation("shimmer")}
            >
              Shimmer
            </Button>
            <Button 
              size="sm" 
              variant={animation === "pulse" ? "default" : "outline"}
              onClick={() => setAnimation("pulse")}
            >
              Pulse
            </Button>
          </div>
        </div>
      </Card>

      {/* 기본 요소들 */}
      <Card className="card-toss p-5 space-y-5">
        <p className="toss-caption1 font-semibold text-muted-foreground">Basic</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <SkeletonCircle size="xs" animation={animation} />
            <SkeletonCircle size="sm" animation={animation} />
            <SkeletonCircle size="default" animation={animation} />
            <SkeletonCircle size="lg" animation={animation} />
            <SkeletonCircle size="xl" animation={animation} />
          </div>
          
          <Skeleton animation={animation} className="h-4 w-48" />
          <Skeleton animation={animation} className="h-4 w-32" />
          
          <SkeletonText lines={3} animation={animation} />
        </div>
      </Card>

      {/* 컴포넌트들 */}
      <Card className="card-toss p-5 space-y-5">
        <p className="toss-caption1 font-semibold text-muted-foreground">Components</p>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <SkeletonButton size="sm" animation={animation} />
            <SkeletonButton size="default" animation={animation} />
            <SkeletonButton size="lg" animation={animation} />
          </div>
          
          <SkeletonInput animation={animation} />
          
          <SkeletonAvatarGroup count={4} animation={animation} />
          
          <SkeletonImage aspectRatio="video" animation={animation} />
        </div>
      </Card>

      {/* 리스트 아이템 */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">List Items</p>
        <div className="space-y-3">
          <SkeletonListItem animation={animation} />
          <SkeletonListItem animation={animation} />
          <SkeletonListItem animation={animation} />
        </div>
      </Card>

      {/* 로딩 -> 콘텐츠 전환 데모 */}
      <Card className="card-toss p-5 space-y-4">
        <div className="flex items-center justify-between">
          <p className="toss-caption1 font-semibold text-muted-foreground">Loading Demo</p>
          <Button size="sm" variant="outline" onClick={() => setLoading(true)}>
            Reload
          </Button>
        </div>
        
        <Divider />
        
        {loading ? (
          <div className="flex items-center gap-4">
            <SkeletonCircle size="lg" animation={animation} />
            <div className="flex-1 space-y-2">
              <Skeleton animation={animation} className="h-4 w-32" />
              <Skeleton animation={animation} className="h-3 w-20" />
            </div>
            <Skeleton animation={animation} className="h-8 w-16 rounded-lg" />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Avatar size="lg" fallback="토" />
            <div className="flex-1">
              <p className="toss-body1 font-semibold">홍길동</p>
              <p className="toss-caption1 text-muted-foreground">1234-5678-9012</p>
            </div>
            <Button size="sm">송금</Button>
          </div>
        )}
      </Card>

      {/* 프로필 카드 데모 */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Profile Card</p>
        
        <div className="flex gap-6">
          {/* 스켈레톤 */}
          <div className="flex-1 p-4 bg-muted/30 rounded-xl space-y-4">
            <div className="flex items-center gap-3">
              <SkeletonCircle size="xl" animation={animation} />
              <div className="space-y-2">
                <Skeleton animation={animation} className="h-5 w-24" />
                <Skeleton animation={animation} className="h-3 w-16" />
              </div>
            </div>
            <SkeletonText lines={2} animation={animation} />
            <div className="flex gap-2">
              <SkeletonButton animation={animation} className="flex-1" />
              <SkeletonButton animation={animation} className="flex-1" />
            </div>
          </div>
          
          {/* 실제 콘텐츠 */}
          <div className="flex-1 p-4 bg-muted/30 rounded-xl space-y-4">
            <div className="flex items-center gap-3">
              <Avatar size="xl" fallback="김" />
              <div>
                <p className="toss-headline">김철수</p>
                <p className="toss-caption1 text-muted-foreground">@kimcs</p>
              </div>
            </div>
            <p className="toss-body2 text-muted-foreground">
              안녕하세요! 토스에서 일하는 개발자입니다.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" size="sm">메시지</Button>
              <Button className="flex-1" size="sm">팔로우</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
