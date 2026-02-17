# toss-ui

토스 디자인 시스템 기반 React UI 컴포넌트 라이브러리

## 설치

```bash
npm install github:brendanHwang/toss-ui
```

## 설정

### 1. Tailwind CSS 설정

```js
// tailwind.config.js
export default {
  content: [
    "./node_modules/toss-ui/dist/**/*.{js,ts,jsx,tsx}",
    // ...
  ],
}
```

### 2. CSS import

```tsx
// main.tsx 또는 App.tsx
import "toss-ui/dist/index.css";
```

## 사용법

```tsx
import { Button, Card, TossIcon } from "toss-ui";

function App() {
  return (
    <Card className="p-4">
      <Button>
        <TossIcon.Send className="size-5" />
        송금하기
      </Button>
    </Card>
  );
}
```

## 컴포넌트

| 카테고리 | 컴포넌트 |
|---------|---------|
| **기본** | Button, Card, Input, Textarea, Label, Badge, Chip, Avatar |
| **폼** | Checkbox, Radio, RadioCard, Switch, Toggle, Select |
| **피드백** | Dialog, AlertDialog, BottomSheet, ActionSheet, Toast, Progress, Spinner |
| **레이아웃** | Tabs, List, ListItem, SimpleListItem, Divider, Spacer |
| **기타** | Skeleton, EmptyState, FAB, Drawer |
| **아이콘** | TossIcon.*, BankIcon.* (110개+) |

## 아이콘

```tsx
import { TossIcon, BankIcon } from "toss-ui";

// 기본
<TossIcon.Home className="size-6" />

// filled 스타일
<TossIcon.Home className="size-6" filled />

// 은행 아이콘
<BankIcon.Toss className="size-5" />
```

## 데모

```bash
git clone https://github.com/brendanHwang/toss-ui.git
cd toss-ui
npm install
npm run dev
```

http://localhost:5173 에서 스타일가이드 확인

## 라이선스

MIT
