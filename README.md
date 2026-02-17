# toss-ui

> 🔵 Toss Design System (TDS) components built with React, Tailwind CSS v4, and shadcn/ui

토스 앱의 디자인 시스템을 React 컴포넌트로 구현한 라이브러리입니다.

## 🚀 프로젝트에서 사용하기

### 방법 1: 컴포넌트 복사 (권장)

shadcn/ui 스타일로 필요한 컴포넌트만 복사해서 사용:

```bash
# 1. 프로젝트에 필요한 의존성 설치
npm install class-variance-authority clsx tailwind-merge lucide-react radix-ui

# 2. 컴포넌트 폴더 복사
# src/components/ui/ → 내 프로젝트의 src/components/ui/

# 3. utils.ts 복사
# src/lib/utils.ts → 내 프로젝트의 src/lib/utils.ts

# 4. CSS 변수 복사 (index.css의 :root, .dark, @theme 부분)
```

### 방법 2: GitHub에서 직접 설치

```bash
npm install github:brendanHwang/toss-ui
```

```tsx
// 컴포넌트 import
import { Button, Card, Dialog } from 'toss-ui/src/components/ui'

// CSS import (tailwind 설정 필요)
import 'toss-ui/src/index.css'
```

### 방법 3: Git Submodule

```bash
# submodule 추가
git submodule add https://github.com/brendanHwang/toss-ui.git src/toss-ui

# 업데이트
git submodule update --remote
```

## 📦 필수 의존성

```json
{
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.564.0",
    "radix-ui": "^1.4.3",
    "tailwind-merge": "^3.4.1",
    "tailwindcss": "^4.x"
  }
}
```

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
- `ListItem` / `ListItemCompact` - 리스트 아이템

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

### Button Sizes

| Size | Height | Use Case |
|------|--------|----------|
| `sm` | 32px | 보조 버튼, 칩 |
| `default` | 44px | 기본 버튼 |
| `lg` | 48px | Dialog 버튼 |
| `xl` | 52px | 하단 CTA |

## 💻 개발 서버

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 프로덕션 빌드
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
│       ├── index.ts  # 모든 컴포넌트 export
│       └── ...
├── lib/
│   └── utils.ts      # cn() 유틸리티
├── App.tsx           # 데모 페이지
└── index.css         # TDS 스타일 정의
```

## 📚 Documentation

자세한 디자인 토큰은 `TDS.md`를 참고하세요.

## 📄 License

MIT License
