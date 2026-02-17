import { useState } from "react";
import { Menu, Plus, Send, Share, Trash2, Copy, Home, Gift, PieChart, LayoutGrid } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input, SearchInput } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge, Chip } from "@/components/ui/badge";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Switch, Toggle } from "@/components/ui/switch";
import { Checkbox, CheckboxWithLabel } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem, RadioCard } from "@/components/ui/radio";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from "@/components/ui/bottom-sheet";
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetContent,
  ActionSheetGroup,
  ActionSheetItem,
  ActionSheetTitle,
  ActionSheetTrigger,
} from "@/components/ui/action-sheet";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerMenuItem,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ToastProvider, useToast, Snackbar } from "@/components/ui/toast";
import { Progress, Spinner, LoadingDots } from "@/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  UnderlineTabs,
  UnderlineTabsList,
  UnderlineTabsTrigger,
} from "@/components/ui/tabs";
import { ListItem, List } from "@/components/ui/list-item";
import { Divider, Spacer } from "@/components/ui/divider";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  SkeletonListItem,
} from "@/components/ui/skeleton";
import { FAB, FABContainer } from "@/components/ui/fab";
import { EmptyState } from "@/components/ui/empty-state";

// Section Component
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <p className="toss-caption1 text-muted-foreground font-semibold uppercase tracking-wider">
        {title}
      </p>
      {children}
    </section>
  );
}

// Toast Demo Component (needs context)
function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toast("기본 토스트 메시지입니다")}
      >
        기본
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() =>
          toast("링크가 복사되었습니다", {
            action: { label: "실행취소", onClick: () => {} },
          })
        }
      >
        액션 포함
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toast("5초간 표시됩니다", { duration: 5000 })}
      >
        5초 유지
      </Button>
    </div>
  );
}

function App() {
  // States
  const [switchOn, setSwitchOn] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [selectedChip, setSelectedChip] = useState("all");
  const [progress, setProgress] = useState(65);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ToastProvider>
      <main className="min-h-screen bg-background pb-32">
        {/* 헤더 */}
        <header className="sticky top-0 z-50 bg-card/80 toss-blur border-b border-border">
          <div className="max-w-2xl mx-auto px-5 py-4 flex items-center justify-between">
            {/* Drawer Trigger */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button size="icon-sm" variant="ghost">
                  <Menu className="size-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>메뉴</DrawerTitle>
                  <DrawerCloseButton />
                </DrawerHeader>
                <DrawerBody>
                  <div className="space-y-1">
                    <DrawerMenuItem
                      icon={<Home className="size-5" />}
                      label="홈"
                      active={activeNav === "home"}
                      onClick={() => setActiveNav("home")}
                    />
                    <DrawerMenuItem
                      icon={<Gift className="size-5" />}
                      label="혜택"
                      badge="NEW"
                      onClick={() => setActiveNav("benefit")}
                    />
                    <DrawerMenuItem
                      icon={<PieChart className="size-5" />}
                      label="내 소비"
                      onClick={() => setActiveNav("spend")}
                    />
                    <DrawerMenuItem
                      icon={<LayoutGrid className="size-5" />}
                      label="전체"
                      onClick={() => setActiveNav("all")}
                    />
                  </div>
                  <Divider className="my-4" />
                  <div className="space-y-1">
                    <DrawerMenuItem label="설정" />
                    <DrawerMenuItem label="고객센터" />
                  </div>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            <div className="text-center">
              <h1 className="toss-headline">TDS 토스 디자인 시스템</h1>
            </div>

            <Button
              size="icon-sm"
              variant="ghost"
              onClick={toggleDarkMode}
            >
              {darkMode ? "☀️" : "🌙"}
            </Button>
          </div>
        </header>

        <div className="px-5 py-8 space-y-12 max-w-2xl mx-auto">
          {/* ========== TYPOGRAPHY ========== */}
          <Section title="Typography">
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
          </Section>

          {/* ========== COLORS ========== */}
          <Section title="Colors">
            {/* Blue */}
            <div className="space-y-2">
              <p className="toss-caption2 text-muted-foreground">Blue</p>
              <div className="grid grid-cols-7 gap-2">
                {[
                  { color: "#E8F3FF", name: "50" },
                  { color: "#C7DCFF", name: "100" },
                  { color: "#85B8FF", name: "200" },
                  { color: "#4593FC", name: "300" },
                  { color: "#3182F6", name: "400" },
                  { color: "#1B64DA", name: "500" },
                  { color: "#194AA6", name: "700" },
                ].map((c) => (
                  <div key={c.name} className="text-center">
                    <div
                      className="h-12 rounded-xl mb-1"
                      style={{ backgroundColor: c.color }}
                    />
                    <span className="toss-caption2 text-muted-foreground">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gray */}
            <div className="space-y-2">
              <p className="toss-caption2 text-muted-foreground">Gray</p>
              <div className="grid grid-cols-7 gap-2">
                {[
                  { color: "#F7F8FA", name: "50" },
                  { color: "#F2F4F6", name: "100" },
                  { color: "#E5E8EB", name: "200" },
                  { color: "#D1D6DB", name: "300" },
                  { color: "#B0B8C1", name: "400" },
                  { color: "#6B7684", name: "600" },
                  { color: "#191F28", name: "900" },
                ].map((c) => (
                  <div key={c.name} className="text-center">
                    <div
                      className="h-12 rounded-xl mb-1 border border-border"
                      style={{ backgroundColor: c.color }}
                    />
                    <span className="toss-caption2 text-muted-foreground">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Semantic */}
            <div className="space-y-2">
              <p className="toss-caption2 text-muted-foreground">Semantic</p>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { color: "#F04452", name: "Red" },
                  { color: "#FF9500", name: "Orange" },
                  { color: "#FFC800", name: "Yellow" },
                  { color: "#30C85E", name: "Green" },
                  { color: "#936DFF", name: "Purple" },
                ].map((c) => (
                  <div key={c.name} className="text-center">
                    <div
                      className="h-12 rounded-xl mb-1"
                      style={{ backgroundColor: c.color }}
                    />
                    <span className="toss-caption2 text-muted-foreground">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ========== BUTTONS ========== */}
          <Section title="Buttons">
            <div className="space-y-4">
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
            </div>
          </Section>

          {/* ========== INPUTS ========== */}
          <Section title="Input & Textarea">
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
          </Section>

          {/* ========== BADGES & CHIPS ========== */}
          <Section title="Badge & Chip">
            <div className="space-y-4">
              <div className="space-y-2">
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

              <div className="space-y-2">
                <p className="toss-caption2 text-muted-foreground">Chips</p>
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
            </div>
          </Section>

          {/* ========== AVATAR ========== */}
          <Section title="Avatar">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar size="xs" fallback="토" />
                <Avatar size="sm" fallback="스" />
                <Avatar size="default" fallback="디" />
                <Avatar size="lg" fallback="자" />
                <Avatar size="xl" fallback="인" />
              </div>

              <div className="space-y-2">
                <p className="toss-caption2 text-muted-foreground">Group</p>
                <AvatarGroup max={4}>
                  <Avatar fallback="A" />
                  <Avatar fallback="B" />
                  <Avatar fallback="C" />
                  <Avatar fallback="D" />
                  <Avatar fallback="E" />
                </AvatarGroup>
              </div>
            </div>
          </Section>

          {/* ========== SWITCH & TOGGLE ========== */}
          <Section title="Switch & Toggle">
            <Card className="card-toss p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="toss-body1 font-semibold">알림 설정</p>
                  <p className="toss-caption1 text-muted-foreground">
                    푸시 알림을 받습니다
                  </p>
                </div>
                <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
              </div>

              <Divider />

              <div className="flex gap-2">
                <Toggle pressed={toggleOn} onPressedChange={setToggleOn}>
                  {toggleOn ? "활성화됨" : "비활성화"}
                </Toggle>
              </div>
            </Card>
          </Section>

          {/* ========== CHECKBOX & RADIO ========== */}
          <Section title="Checkbox & Radio">
            <Card className="card-toss p-6 space-y-6">
              <div className="space-y-4">
                <p className="toss-caption2 text-muted-foreground">Checkbox</p>
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={checked}
                    onCheckedChange={(v) => setChecked(v as boolean)}
                  />
                  <span className="toss-body2">이용약관에 동의합니다</span>
                </div>
                <CheckboxWithLabel
                  label="마케팅 수신 동의"
                  description="이벤트 및 혜택 정보를 받아보세요"
                />
              </div>

              <Divider />

              <div className="space-y-4">
                <p className="toss-caption2 text-muted-foreground">Radio</p>
                <RadioGroup
                  value={selectedRadio}
                  onValueChange={setSelectedRadio}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="option1" />
                    <span className="toss-body2">옵션 1</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="option2" />
                    <span className="toss-body2">옵션 2</span>
                  </div>
                </RadioGroup>
              </div>

              <Divider />

              <div className="space-y-4">
                <p className="toss-caption2 text-muted-foreground">
                  Radio Cards
                </p>
                <RadioGroup
                  value={selectedRadio}
                  onValueChange={setSelectedRadio}
                >
                  <RadioCard
                    value="option1"
                    label="기본 배송"
                    description="2-3일 소요"
                  />
                  <RadioCard
                    value="option2"
                    label="빠른 배송"
                    description="1일 소요 (+2,500원)"
                  />
                </RadioGroup>
              </div>
            </Card>
          </Section>

          {/* ========== SELECT ========== */}
          <Section title="Select">
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
          </Section>

          {/* ========== DIALOGS ========== */}
          <Section title="Dialog & Sheets">
            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary">Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>송금 확인</DialogTitle>
                    <DialogDescription>
                      홍길동님에게 50,000원을 송금합니다.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">취소</Button>
                    <Button>확인</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="secondary">Alert</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>삭제하시겠습니까?</AlertDialogTitle>
                    <AlertDialogDescription>
                      이 작업은 되돌릴 수 없습니다.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>취소</AlertDialogCancel>
                    <AlertDialogAction>삭제</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <BottomSheet>
                <BottomSheetTrigger asChild>
                  <Button variant="secondary">BottomSheet</Button>
                </BottomSheetTrigger>
                <BottomSheetContent>
                  <BottomSheetHeader>
                    <BottomSheetTitle>결제 수단 선택</BottomSheetTitle>
                    <BottomSheetDescription>
                      결제에 사용할 수단을 선택하세요
                    </BottomSheetDescription>
                  </BottomSheetHeader>
                  <BottomSheetBody>
                    <List>
                      <ListItem
                        leading={
                          <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            💳
                          </div>
                        }
                        title="토스머니"
                        subtitle="잔액: 1,234,567원"
                      />
                      <ListItem
                        leading={
                          <div className="size-10 rounded-xl bg-[#FFC800]/20 flex items-center justify-center">
                            🏦
                          </div>
                        }
                        title="카카오뱅크"
                        subtitle="123-456-7890"
                      />
                    </List>
                  </BottomSheetBody>
                  <BottomSheetFooter>
                    <Button fullWidth size="xl">
                      선택 완료
                    </Button>
                  </BottomSheetFooter>
                </BottomSheetContent>
              </BottomSheet>

              <ActionSheet>
                <ActionSheetTrigger asChild>
                  <Button variant="secondary">ActionSheet</Button>
                </ActionSheetTrigger>
                <ActionSheetContent>
                  <ActionSheetGroup>
                    <ActionSheetTitle>공유하기</ActionSheetTitle>
                    <ActionSheetItem>
                      <span className="flex items-center justify-center gap-2">
                        <Share className="size-5" /> 공유
                      </span>
                    </ActionSheetItem>
                    <ActionSheetItem>
                      <span className="flex items-center justify-center gap-2">
                        <Copy className="size-5" /> 복사
                      </span>
                    </ActionSheetItem>
                    <ActionSheetItem destructive>
                      <span className="flex items-center justify-center gap-2">
                        <Trash2 className="size-5" /> 삭제
                      </span>
                    </ActionSheetItem>
                  </ActionSheetGroup>
                  <ActionSheetCancel />
                </ActionSheetContent>
              </ActionSheet>
            </div>
          </Section>

          {/* ========== TOAST ========== */}
          <Section title="Toast">
            <Card className="card-toss p-6 space-y-4">
              <p className="toss-caption2 text-muted-foreground">
                토스 스타일 토스트 (하단 스낵바)
              </p>
              <ToastDemo />

              <Divider />

              <div className="space-y-2">
                <p className="toss-caption2 text-muted-foreground">
                  Snackbar 컴포넌트
                </p>
                <Snackbar
                  message="링크가 복사되었습니다"
                  action={{ label: "실행취소", onClick: () => {} }}
                />
              </div>
            </Card>
          </Section>

          {/* ========== PROGRESS ========== */}
          <Section title="Progress & Loading">
            <Card className="card-toss p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="toss-body2">진행률</p>
                  <p className="toss-body2 text-primary font-semibold">
                    {progress}%
                  </p>
                </div>
                <Progress value={progress} />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setProgress(Math.max(0, progress - 10))}
                  >
                    -10%
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                  >
                    +10%
                  </Button>
                </div>
              </div>

              <Divider />

              <div className="flex items-center gap-6">
                <Spinner size="sm" />
                <Spinner />
                <Spinner size="lg" />
                <LoadingDots />
              </div>
            </Card>
          </Section>

          {/* ========== TABS ========== */}
          <Section title="Tabs">
            <Card className="card-toss p-6 space-y-6">
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">전체</TabsTrigger>
                  <TabsTrigger value="tab2">입금</TabsTrigger>
                  <TabsTrigger value="tab3">출금</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p className="toss-body2 text-muted-foreground">
                    전체 내역이 표시됩니다.
                  </p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p className="toss-body2 text-muted-foreground">
                    입금 내역이 표시됩니다.
                  </p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p className="toss-body2 text-muted-foreground">
                    출금 내역이 표시됩니다.
                  </p>
                </TabsContent>
              </Tabs>

              <Divider />

              <UnderlineTabs defaultValue="home">
                <UnderlineTabsList>
                  <UnderlineTabsTrigger value="home">홈</UnderlineTabsTrigger>
                  <UnderlineTabsTrigger value="history">내역</UnderlineTabsTrigger>
                  <UnderlineTabsTrigger value="more">더보기</UnderlineTabsTrigger>
                </UnderlineTabsList>
              </UnderlineTabs>
            </Card>
          </Section>

          {/* ========== LIST ITEM ========== */}
          <Section title="List Item">
            <List>
              <ListItem
                leading={
                  <div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                    🚶
                  </div>
                }
                title="만보기"
                subtitle="오늘 3,482보 걸었어요"
                trailing={
                  <span className="text-[#30C85E] font-semibold">+32원</span>
                }
              />
              <ListItem
                leading={
                  <div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                    🎯
                  </div>
                }
                title="행운퀴즈"
                subtitle="지금 참여하면 최대 1만원"
                badge="HOT"
                badgeVariant="destructive"
              />
              <ListItem
                leading={
                  <div className="size-12 rounded-2xl bg-muted flex items-center justify-center text-2xl">
                    🏦
                  </div>
                }
                title="토스뱅크"
                subtitle="연 2% 이자 받기"
                badge="NEW"
                badgeVariant="primary"
              />
            </List>
          </Section>

          {/* ========== SKELETON ========== */}
          <Section title="Skeleton">
            <Card className="card-toss p-6 space-y-4">
              <div className="flex items-center gap-4">
                <SkeletonCircle size="lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
              <SkeletonText lines={2} />
              <SkeletonListItem />
            </Card>
          </Section>

          {/* ========== EMPTY STATE ========== */}
          <Section title="Empty State">
            <Card className="card-toss">
              <EmptyState
                icon="📭"
                title="아직 내역이 없어요"
                description="첫 송금을 해보세요! 친구에게 간편하게 돈을 보낼 수 있어요."
                action={{ label: "송금하기", onClick: () => {} }}
              />
            </Card>
          </Section>

          {/* ========== EXAMPLE CARDS ========== */}
          <Section title="Example - 잔액 카드">
            <Card className="card-toss">
              <CardContent className="pt-6 pb-5">
                <p className="toss-caption1 text-muted-foreground mb-1">
                  토스머니
                </p>
                <p className="toss-display">1,234,567원</p>
                <div className="flex gap-3 mt-6">
                  <Button className="flex-1" size="xl">
                    <Send className="size-5" /> 송금
                  </Button>
                  <Button variant="secondary" className="flex-1" size="xl">
                    충전
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Section>

          <Section title="Example - 송금 폼">
            <Card className="card-toss">
              <CardHeader className="pb-2">
                <CardTitle className="toss-title3">송금하기</CardTitle>
                <CardDescription className="toss-body2">
                  받는 분에게 보낼 금액을 입력하세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label className="toss-caption1 text-muted-foreground">
                    받는 분
                  </Label>
                  <SearchInput placeholder="이름, 연락처 검색" />
                </div>
                <div className="space-y-2">
                  <Label className="toss-caption1 text-muted-foreground">
                    금액
                  </Label>
                  <Input placeholder="얼마를 보낼까요?" />
                  <div className="flex gap-2 pt-1">
                    {["+1만", "+5만", "+10만", "전액"].map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button fullWidth size="xl" className="mt-2">
                  다음
                </Button>
              </CardContent>
            </Card>
          </Section>

          <Spacer size="xl" />
        </div>

        {/* FAB */}
        <FABContainer>
          <FAB icon={<Plus className="size-6" />} />
        </FABContainer>

        {/* 하단 네비게이션 - 토스 스타일 탭바 */}
        <nav className="fixed bottom-0 left-0 right-0 bg-card/95 toss-blur border-t border-border">
          <div className="flex justify-around max-w-2xl mx-auto px-4 py-1.5 pb-[max(6px,env(safe-area-inset-bottom))]">
            {[
              { icon: Home, label: "홈", key: "home" },
              { icon: Gift, label: "혜택", key: "benefit" },
              { icon: PieChart, label: "내 소비", key: "spend" },
              { icon: LayoutGrid, label: "전체", key: "all" },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setActiveNav(item.key)}
                  className={`flex flex-col items-center gap-0.5 py-1.5 px-3 transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <Icon 
                    className="size-6" 
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                  <span className="toss-caption2 font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </main>
    </ToastProvider>
  );
}

export default App;
