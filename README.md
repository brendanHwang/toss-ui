# toss-ui

> 🔵 Toss Design System (TDS) components built with React, Tailwind CSS, and shadcn/ui

토스 앱의 디자인 시스템을 React 컴포넌트로 구현한 라이브러리입니다.

## ✨ Features

- 🎨 **토스 컬러 시스템** - Blue, Gray, Semantic 컬러 팔레트
- 📝 **토스 타이포그래피** - Display, Title, Body, Caption 스케일
- 🧩 **25+ UI 컴포넌트** - Button, Card, Dialog, BottomSheet 등
- 🌙 **다크모드 지원** - 자동 테마 전환
- 📱 **모바일 최적화** - 터치 피드백, Safe Area 지원
- ♿ **접근성** - Radix UI 기반

## 📦 Components

### Inputs
- `Button` - Primary, Secondary, Outline, Ghost, Destructive, Muted
- `Input` - Clearable, Search, Error/Success 상태
- `Textarea` - 자동 높이 조절
- `Checkbox` / `Radio` - 라벨 포함 버전
- `Switch` / `Toggle`
- `Select` - 드롭다운

### Display
- `Card` - 기본 카드
- `Badge` / `Chip` - 라벨, 필터 칩
- `Avatar` / `AvatarGroup`
- `Progress` / `Spinner` / `LoadingDots`
- `Skeleton` - 로딩 플레이스홀더
- `EmptyState` - 빈 상태 표시

### Overlay
- `Dialog` / `AlertDialog` - 모달
- `BottomSheet` - 바텀 시트
- `ActionSheet` - iOS 스타일 액션 시트
- `Drawer` - 사이드 드로어
- `Toast` / `Snackbar` - 알림

### Navigation
- `Tabs` / `UnderlineTabs` - 탭 네비게이션
- `ListItem` / `List` - 리스트 아이템

### Layout
- `Divider` / `Spacer` - 구분선, 여백
- `FAB` - Floating Action Button

## 🎨 Design Tokens

### Colors

```css
/* Primary */
--toss-blue-400: #3182F6;  /* 메인 블루 */

/* Gray Scale */
--toss-gray-50: #F7F8FA;   /* 배경 */
--toss-gray-900: #191F28;  /* 텍스트 */

/* Semantic */
--toss-red: #F04452;
--toss-green: #30C85E;
--toss-yellow: #FFC800;
```

### Typography

| Class | Size | Weight |
|-------|------|--------|
| `.toss-display` | 36px | 700 |
| `.toss-title1` | 28px | 700 |
| `.toss-title2` | 24px | 600 |
| `.toss-title3` | 20px | 600 |
| `.toss-headline` | 17px | 600 |
| `.toss-body1` | 17px | 400 |
| `.toss-body2` | 15px | 400 |
| `.toss-caption1` | 13px | 400 |
| `.toss-caption2` | 11px | 400 |

### Border Radius

| Class | Value |
|-------|-------|
| `rounded-xs` | 4px |
| `rounded-sm` | 8px |
| `rounded-md` | 12px |
| `rounded-lg` | 16px |
| `rounded-xl` | 20px |
| `rounded-2xl` | 24px |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   └── ui/           # UI 컴포넌트
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ...
├── lib/
│   └── utils.ts      # 유틸리티 함수
├── App.tsx           # 데모 페이지
└── index.css         # TDS 스타일 정의
```

## 📚 Documentation

자세한 문서는 `TDS.md`를 참고하세요.

## 📄 License

MIT License
