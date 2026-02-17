/**
 * @fileoverview TDS Icons
 * 토스 디자인 시스템 아이콘 모음
 * 
 * @example
 * import { TossIcon, BankIcon } from "@/components/ui/icons"
 * 
 * <TossIcon.Home filled className="size-6" />
 * <BankIcon.Toss className="size-5" />
 */

import * as React from "react"
import { cn } from "@/lib/utils"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  filled?: boolean
}

/* ========== Navigation Icons ========== */

export const HomeIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-6", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z" fill="currentColor"/>
    ) : (
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
)

export const GiftIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-6", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <>
        <rect x="3" y="8" width="18" height="4" rx="1" fill="currentColor"/>
        <path d="M5 12H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V12Z" fill="currentColor"/>
        <path d="M12 8C12 8 12 5 9.5 5C7 5 7 8 9.5 8H12Z" fill="currentColor"/>
        <path d="M12 8C12 8 12 5 14.5 5C17 5 17 8 14.5 8H12Z" fill="currentColor"/>
        <rect x="11" y="8" width="2" height="13" fill="currentColor" fillOpacity="0.3"/>
      </>
    ) : (
      <>
        <rect x="3" y="8" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M5 12V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V12" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 8V21" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 8C12 8 12 4 9 4C6 4 6 8 9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 8C12 8 12 4 15 4C18 4 18 8 15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </>
    )}
  </svg>
)

export const ChartIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-6", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <>
        <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.2"/>
        <path d="M12 3V12L18.36 5.64" fill="currentColor"/>
        <path d="M12 3C16.97 3 21 7.03 21 12H12V3Z" fill="currentColor"/>
      </>
    ) : (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 3V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 12L18.36 5.64" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </>
    )}
  </svg>
)

export const GridIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-6", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor"/>
      </>
    ) : (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      </>
    )}
  </svg>
)

/* ========== Action Icons ========== */

export const SendIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const PlusIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const MenuIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const CloseIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const CheckIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ChevronRightIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ChevronLeftIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const ChevronDownIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const SearchIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const BellIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0" fill="currentColor"/>
    ) : (
      <>
        <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    )}
  </svg>
)

export const SettingsIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const ShareIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const CopyIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const TrashIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19 6V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V6" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

/* ========== Bank/Brand Icons ========== */

interface BankIconProps extends React.SVGProps<SVGSVGElement> {}

/** 토스뱅크 */
export const TossBankIcon = ({ className, ...props }: BankIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#3182F6"/>
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/** 국민은행 */
export const KBBankIcon = ({ className, ...props }: BankIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#FFB800"/>
    <rect x="8" y="8" width="8" height="8" rx="1" fill="white"/>
  </svg>
)

/** 신한은행 */
export const ShinhanBankIcon = ({ className, ...props }: BankIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#0046FF"/>
    <circle cx="12" cy="12" r="4" fill="white"/>
  </svg>
)

/** 카카오뱅크 */
export const KakaoBankIcon = ({ className, ...props }: BankIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#FFCD00"/>
    <ellipse cx="12" cy="13" rx="5" ry="4" fill="#3C1E1E"/>
  </svg>
)

/** 우리은행 */
export const WooriBankIcon = ({ className, ...props }: BankIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#0066B3"/>
    <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

/** 하나은행 */
export const HanaBankIcon = ({ className, ...props }: BankIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#009490"/>
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
  </svg>
)

/** 농협은행 */
export const NHBankIcon = ({ className, ...props }: BankIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#02A64E"/>
    <path d="M12 7V17M8 12H16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

/** 토스증권 */
export const TossSecuritiesIcon = ({ className, ...props }: BankIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#3182F6"/>
    <path d="M7 14L10 11L13 13L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ========== Misc Icons ========== */

export const WalletIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <>
        <rect x="2" y="6" width="20" height="14" rx="2" fill="currentColor"/>
        <circle cx="17" cy="13" r="2" fill="white"/>
      </>
    ) : (
      <>
        <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17" cy="13" r="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
      </>
    )}
  </svg>
)

export const CreditCardIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 15H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const ReceiptIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 4V20L6.5 18L9 20L12 18L15 20L17.5 18L20 20V4L17.5 6L15 4L12 6L9 4L6.5 6L4 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M8 10H16M8 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const QRCodeIcon = ({ className, ...props }: Omit<IconProps, 'filled'>) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="14" width="3" height="3" fill="currentColor"/>
    <rect x="18" y="14" width="3" height="3" fill="currentColor"/>
    <rect x="14" y="18" width="3" height="3" fill="currentColor"/>
    <rect x="18" y="18" width="3" height="3" fill="currentColor"/>
  </svg>
)

/* ========== Export All ========== */

export const TossIcon = {
  Home: HomeIcon,
  Gift: GiftIcon,
  Chart: ChartIcon,
  Grid: GridIcon,
  Send: SendIcon,
  Plus: PlusIcon,
  Menu: MenuIcon,
  Close: CloseIcon,
  Check: CheckIcon,
  ChevronRight: ChevronRightIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronDown: ChevronDownIcon,
  Search: SearchIcon,
  Bell: BellIcon,
  Settings: SettingsIcon,
  Share: ShareIcon,
  Copy: CopyIcon,
  Trash: TrashIcon,
  Wallet: WalletIcon,
  CreditCard: CreditCardIcon,
  Receipt: ReceiptIcon,
  QRCode: QRCodeIcon,
}

export const BankIcon = {
  Toss: TossBankIcon,
  KB: KBBankIcon,
  Shinhan: ShinhanBankIcon,
  Kakao: KakaoBankIcon,
  Woori: WooriBankIcon,
  Hana: HanaBankIcon,
  NH: NHBankIcon,
  TossSecurities: TossSecuritiesIcon,
}
