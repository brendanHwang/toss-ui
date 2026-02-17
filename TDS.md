# TDS - Toss Design System

토스 디자인 시스템을 React + Tailwind CSS + shadcn/ui 기반으로 구현한 컴포넌트 라이브러리입니다.

## 📦 설치

```bash
npm install
npm run dev
```

## 🎨 Design Tokens

### Color Palette

#### Blue (Primary)
| Token | Hex | 용도 |
|-------|-----|------|
| Blue 50 | `#E8F3FF` | Secondary 배경 |
| Blue 100 | `#C7DCFF` | Hover 상태 |
| Blue 200 | `#85B8FF` | - |
| Blue 300 | `#4593FC` | 다크모드 Primary |
| Blue 400 | `#3182F6` | **Primary** (기본 파랑) |
| Blue 500 | `#1B64DA` | Hover/Active |
| Blue 600 | `#1957C2` | - |
| Blue 700 | `#194AA6` | - |

#### Gray
| Token | Hex | 용도 |
|-------|-----|------|
| Gray 50 | `#F7F8FA` | 앱 배경 |
| Gray 100 | `#F2F4F6` | Input 배경 (Muted) |
| Gray 200 | `#E5E8EB` | Border |
| Gray 300 | `#D1D6DB` | - |
| Gray 400 | `#B0B8C1` | - |
| Gray 500 | `#8B95A1` | Placeholder |
| Gray 600 | `#6B7684` | Secondary 텍스트 |
| Gray 700 | `#4E5968` | - |
| Gray 800 | `#333D4B` | - |
| Gray 900 | `#191F28` | Primary 텍스트 |

#### Semantic Colors
| Name | Hex | Light Background | 용도 |
|------|-----|------------------|------|
| Red | `#F04452` | `#FFEBEE` | Error, Destructive |
| Orange | `#FF9500` | `#FFF3E0` | Warning |
| Yellow | `#FFC800` | `#FFFDE7` | Caution |
| Green | `#30C85E` | `#E5F9ED` | Success |
| Purple | `#936DFF` | `#F3EFFF` | - |

### CSS 변수 사용

```css
/* Primary 색상 */
color: var(--primary);            /* #3182F6 */
background: var(--secondary);     /* #E8F3FF */

/* 회색 계열 */
background: var(--background);    /* #F7F8FA */
background: var(--muted);         /* #F2F4F6 */
border-color: var(--border);      /* #E5E8EB */
color: var(--muted-foreground);   /* #8B95A1 */
color: var(--foreground);         /* #191F28 */

/* 상태 */
color: var(--destructive);        /* #F04452 */
```

---

## 📝 Typography

토스는 **Pretendard** 폰트를 사용합니다 (토스 Product Sans 대체).

### Typography Scale

| Class | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| `.toss-display` | 36px | 700 | 1.3 | -0.03em |
| `.toss-title1` | 28px | 700 | 1.35 | -0.02em |
| `.toss-title2` | 24px | 600 | 1.4 | -0.02em |
| `.toss-title3` | 20px | 600 | 1.4 | -0.02em |
| `.toss-headline` | 17px | 600 | 1.45 | -0.02em |
| `.toss-body1` | 17px | 400 | 1.5 | -0.02em |
| `.toss-body2` | 15px | 400 | 1.5 | -0.02em |
| `.toss-caption1` | 13px | 400 | 1.45 | -0.01em |
| `.toss-caption2` | 11px | 400 | 1.4 | 0 |

### 사용 예시

```tsx
<h1 className="toss-display">1,234,567원</h1>
<h2 className="toss-title1">송금하기</h2>
<p className="toss-body1">메시지를 입력하세요</p>
<span className="toss-caption1 text-muted-foreground">부가 정보</span>
```

---

## 📐 Spacing System

4px 기반 스페이싱 시스템을 사용합니다.

| Tailwind | Value |
|----------|-------|
| `p-1` | 4px |
| `p-2` | 8px |
| `p-3` | 12px |
| `p-4` | 16px |
| `p-5` | 20px |
| `p-6` | 24px |
| `p-8` | 32px |

---

## 🔲 Border Radius

| Class | Value | 용도 |
|-------|-------|------|
| `rounded-xs` | 4px | 작은 요소 |
| `rounded-sm` | 8px | 칩, 작은 버튼 |
| `rounded-md` | 12px | 기본 |
| `rounded-lg` | 16px | 카드 |
| `rounded-xl` | 20px | 버튼, 인풋 |
| `rounded-2xl` | 24px | 큰 카드, 바텀시트 |
| `rounded-full` | 9999px | 원형 |

---

## 🌑 Shadows

| Class | Value | 용도 |
|-------|-------|------|
| `.toss-shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | 미세한 높이감 |
| `.toss-shadow-sm` | `0 2px 8px rgba(0,0,0,0.08)` | 카드 기본 |
| `.toss-shadow-md` | `0 4px 16px rgba(0,0,0,0.1)` | 팝업, 드롭다운 |
| `.toss-shadow-lg` | `0 8px 32px rgba(0,0,0,0.12)` | 모달, 바텀시트 |

---

## 🧩 Components

### Button

```tsx
import { Button } from "@/components/ui/button"

// Variants
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="muted">Muted</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// States
<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>
<Button fullWidth>Full Width</Button>

// Icon Buttons
<Button size="icon">🔔</Button>
<Button size="icon-sm">➕</Button>
```

### Input

```tsx
import { Input, SearchInput } from "@/components/ui/input"

// 기본
<Input placeholder="텍스트 입력" />

// Clearable
<Input 
  clearable 
  value={value} 
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue("")}
/>

// 검색
<SearchInput placeholder="검색어를 입력하세요" />

// 상태
<Input error placeholder="에러 상태" />
<Input success placeholder="성공 상태" />

// 커스텀 아이콘
<Input leftElement={<Icon />} rightElement={<Icon />} />
```

### Badge & Chip

```tsx
import { Badge, Chip } from "@/components/ui/badge"

// Badge Variants
<Badge>Default</Badge>
<Badge variant="success">성공</Badge>
<Badge variant="warning">주의</Badge>
<Badge variant="destructive">에러</Badge>
<Badge variant="info">정보</Badge>

// Chip (선택 가능)
<Chip selected={isSelected} onSelect={handleSelect}>
  전체
</Chip>
```

### Avatar

```tsx
import { Avatar, AvatarGroup } from "@/components/ui/avatar"

// 기본
<Avatar src="/profile.jpg" alt="홍길동" />
<Avatar fallback="홍" />

// 크기
<Avatar size="xs" />  // 24px
<Avatar size="sm" />  // 32px
<Avatar size="default" />  // 40px
<Avatar size="lg" />  // 48px
<Avatar size="xl" />  // 64px
<Avatar size="2xl" />  // 80px

// 그룹
<AvatarGroup max={4}>
  <Avatar fallback="A" />
  <Avatar fallback="B" />
  <Avatar fallback="C" />
  {/* +N 표시됨 */}
</AvatarGroup>
```

### Switch & Toggle

```tsx
import { Switch, Toggle } from "@/components/ui/switch"

<Switch checked={on} onCheckedChange={setOn} />

<Toggle pressed={active} onPressedChange={setActive}>
  {active ? "활성화됨" : "비활성화"}
</Toggle>
```

### Checkbox & Radio

```tsx
import { Checkbox, CheckboxWithLabel } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem, RadioCard } from "@/components/ui/radio"

// Checkbox
<Checkbox checked={checked} onCheckedChange={setChecked} />

<CheckboxWithLabel 
  label="마케팅 수신 동의"
  description="이벤트 및 혜택 정보를 받아보세요"
/>

// Radio
<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroupItem value="option1" />
  <RadioGroupItem value="option2" />
</RadioGroup>

// Radio Card
<RadioGroup value={value} onValueChange={setValue}>
  <RadioCard value="basic" label="기본 배송" description="2-3일 소요" />
  <RadioCard value="fast" label="빠른 배송" description="1일 소요" />
</RadioGroup>
```

### Select

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">옵션 1</SelectItem>
    <SelectItem value="option2">옵션 2</SelectItem>
  </SelectContent>
</Select>
```

### Dialog & BottomSheet

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>열기</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>제목</DialogTitle>
      <DialogDescription>설명</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>확인</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

```tsx
import { BottomSheet, BottomSheetTrigger, BottomSheetContent, BottomSheetHeader, BottomSheetBody, BottomSheetFooter, BottomSheetTitle } from "@/components/ui/bottom-sheet"

<BottomSheet>
  <BottomSheetTrigger asChild>
    <Button>열기</Button>
  </BottomSheetTrigger>
  <BottomSheetContent>
    <BottomSheetHeader>
      <BottomSheetTitle>제목</BottomSheetTitle>
    </BottomSheetHeader>
    <BottomSheetBody>
      {/* 내용 */}
    </BottomSheetBody>
    <BottomSheetFooter>
      <Button fullWidth size="xl">확인</Button>
    </BottomSheetFooter>
  </BottomSheetContent>
</BottomSheet>
```

### Toast (토스 스타일 스낵바)

```tsx
import { ToastProvider, useToast } from "@/components/ui/toast"

// App.tsx 최상위에 Provider 추가
<ToastProvider>
  <App />
</ToastProvider>

// 사용
function Component() {
  const { toast } = useToast()
  
  return (
    <Button onClick={() => toast("링크가 복사되었습니다")}>
      토스트 표시
    </Button>
  )
}

// 액션 포함
toast("송금이 완료되었습니다", {
  action: { label: "실행취소", onClick: () => {} }
})

// 지속 시간 설정 (기본 2.5초)
toast("5초간 표시됩니다", { duration: 5000 })
```

### Progress & Loading

```tsx
import { Progress, Spinner, LoadingDots, LoadingOverlay } from "@/components/ui/progress"

// Progress Bar
<Progress value={65} />

// Spinner
<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />

// Loading Dots
<LoadingDots />

// Loading Overlay
<LoadingOverlay loading={isLoading}>
  <Content />
</LoadingOverlay>
```

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Pill Tabs
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">탭 1</TabsTrigger>
    <TabsTrigger value="tab2">탭 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">내용 1</TabsContent>
  <TabsContent value="tab2">내용 2</TabsContent>
</Tabs>

// Underline Tabs
import { UnderlineTabs, UnderlineTabsList, UnderlineTabsTrigger } from "@/components/ui/tabs"

<UnderlineTabs defaultValue="home">
  <UnderlineTabsList>
    <UnderlineTabsTrigger value="home">홈</UnderlineTabsTrigger>
    <UnderlineTabsTrigger value="profile">프로필</UnderlineTabsTrigger>
  </UnderlineTabsList>
</UnderlineTabs>
```

### List Item

```tsx
import { List, ListItem } from "@/components/ui/list-item"

<List>
  <ListItem
    leading={<Avatar fallback="홍" />}
    title="홍길동"
    subtitle="010-1234-5678"
    trailing={<span className="text-primary">+50,000원</span>}
    badge="NEW"
    badgeVariant="primary"  // primary, success, warning, destructive
    onClick={() => {}}
  />
</List>

// Props
// - leading: 왼쪽 아이콘/이미지
// - title: 제목
// - subtitle: 부제목
// - trailing: 오른쪽 텍스트/요소
// - showArrow: 화살표 표시 (default: true)
// - clickable: 클릭 가능 여부 (default: true)
// - badge: 배지 텍스트
// - badgeVariant: 배지 색상
```

### Divider

```tsx
import { Divider, Spacer } from "@/components/ui/divider"

// 기본 구분선
<Divider />

// 두꺼운 구분선
<Divider variant="thick" />

// 라벨 포함
<Divider label="또는" />

// 세로 구분선
<Divider orientation="vertical" />

// Spacer (여백)
<Spacer />  // 16px
<Spacer size="sm" />  // 8px
<Spacer size="lg" />  // 32px
<Spacer size="xl" />  // 48px
```

### Skeleton

```tsx
import { Skeleton, SkeletonCircle, SkeletonText, SkeletonListItem } from "@/components/ui/skeleton"

// 기본
<Skeleton className="h-4 w-32" />

// 원형
<SkeletonCircle size="lg" />  // xs, sm, default, lg, xl

// 텍스트 라인
<SkeletonText lines={3} />

// 리스트 아이템
<SkeletonListItem />
```

### Drawer (사이드 네비게이션)

```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerBody, DrawerMenuItem, DrawerCloseButton } from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger asChild>
    <Button>메뉴</Button>
  </DrawerTrigger>
  <DrawerContent side="left">  {/* or "right" */}
    <DrawerHeader>
      <DrawerTitle>메뉴</DrawerTitle>
      <DrawerCloseButton />
    </DrawerHeader>
    <DrawerBody>
      <DrawerMenuItem icon={<HomeIcon />} label="홈" active />
      <DrawerMenuItem icon={<SettingsIcon />} label="설정" />
      <DrawerMenuItem label="로그아웃" />
    </DrawerBody>
  </DrawerContent>
</Drawer>
```

### ActionSheet (iOS 스타일)

```tsx
import { ActionSheet, ActionSheetTrigger, ActionSheetContent, ActionSheetGroup, ActionSheetItem, ActionSheetCancel, ActionSheetTitle } from "@/components/ui/action-sheet"

<ActionSheet>
  <ActionSheetTrigger asChild>
    <Button>공유</Button>
  </ActionSheetTrigger>
  <ActionSheetContent>
    <ActionSheetGroup>
      <ActionSheetTitle>공유하기</ActionSheetTitle>
      <ActionSheetItem>공유</ActionSheetItem>
      <ActionSheetItem>복사</ActionSheetItem>
      <ActionSheetItem destructive>삭제</ActionSheetItem>
    </ActionSheetGroup>
    <ActionSheetCancel>취소</ActionSheetCancel>
  </ActionSheetContent>
</ActionSheet>
```

### Alert Dialog

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>삭제</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>삭제하시겠습니까?</AlertDialogTitle>
      <AlertDialogDescription>이 작업은 되돌릴 수 없습니다.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>취소</AlertDialogCancel>
      <AlertDialogAction>삭제</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### FAB (Floating Action Button)

```tsx
import { FAB, FABContainer } from "@/components/ui/fab"

// 기본 (우측 하단)
<FABContainer>
  <FAB icon={<PlusIcon />} />
</FABContainer>

// Extended FAB (라벨 포함)
<FAB icon={<PlusIcon />} label="새 송금" />

// 위치 변경
<FABContainer position="bottom-left">
  <FAB>+</FAB>
</FABContainer>
```

### Empty State

```tsx
import { EmptyState } from "@/components/ui/empty-state"

<EmptyState
  icon="📭"
  title="아직 내역이 없어요"
  description="첫 송금을 해보세요!"
  action={{ label: "송금하기", onClick: () => {} }}
/>
```

---

## 🎭 Utility Classes

### 토스 스타일 유틸리티

```css
/* 블러 효과 (iOS 스타일) */
.toss-blur { backdrop-filter: blur(20px); }

/* 카드 스타일 */
.card-toss { ... }

/* 리스트 아이템 */
.list-item-toss { ... }

/* 인풋 */
.input-toss { ... }

/* 버튼 */
.btn-toss { ... }
```

---

## 🌙 Dark Mode

다크 모드는 `.dark` 클래스를 `html` 요소에 추가하여 활성화합니다.

```tsx
document.documentElement.classList.toggle("dark")
```

---

## 📱 Responsive

토스 앱은 주로 모바일 퍼스트이므로, `max-w-md` (448px) 또는 `max-w-lg` (512px)를 사용합니다.

```tsx
<div className="max-w-md mx-auto px-5">
  {/* 컨텐츠 */}
</div>
```

---

## 📚 참고 자료

- [토스 기술 블로그](https://toss.tech)
- [토스 슬래시 라이브러리](https://slash.page)
- [es-toolkit](https://github.com/toss/es-toolkit)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://radix-ui.com)
- [Tailwind CSS](https://tailwindcss.com)

---

## 라이선스

MIT License
