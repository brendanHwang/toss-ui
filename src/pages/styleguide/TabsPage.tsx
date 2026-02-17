import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  UnderlineTabs,
  UnderlineTabsList,
  UnderlineTabsTrigger,
} from "@/components/ui/tabs";

export function TabsPage() {
  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Tabs</h2>
      
      <Card className="card-toss p-6 space-y-6">
        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Pill Tabs</p>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">전체</TabsTrigger>
              <TabsTrigger value="tab2">입금</TabsTrigger>
              <TabsTrigger value="tab3">출금</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p className="toss-body2 text-muted-foreground">전체 내역이 표시됩니다.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p className="toss-body2 text-muted-foreground">입금 내역이 표시됩니다.</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p className="toss-body2 text-muted-foreground">출금 내역이 표시됩니다.</p>
            </TabsContent>
          </Tabs>
        </div>

        <Divider />

        <div className="space-y-3">
          <p className="toss-caption2 text-muted-foreground">Underline Tabs</p>
          <UnderlineTabs defaultValue="home">
            <UnderlineTabsList>
              <UnderlineTabsTrigger value="home">홈</UnderlineTabsTrigger>
              <UnderlineTabsTrigger value="history">내역</UnderlineTabsTrigger>
              <UnderlineTabsTrigger value="more">더보기</UnderlineTabsTrigger>
            </UnderlineTabsList>
          </UnderlineTabs>
        </div>
      </Card>
    </div>
  );
}
