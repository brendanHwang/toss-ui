/**
 * @fileoverview TDS Icons
 * 토스 디자인 시스템 아이콘 모음
 * strokeWidth: 1.8, linecap/linejoin: round
 */

import * as React from "react"
import { cn } from "@/lib/utils"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  filled?: boolean
}

type SimpleIconProps = Omit<IconProps, 'filled'>

/* ========== Arrow Icons ========== */

export const ArrowLeftIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 12H5M12 19L5 12L12 5" />
  </svg>
)

export const ArrowRightIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12H19M12 5L19 12L12 19" />
  </svg>
)

export const ArrowUpIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 19V5M5 12L12 5L19 12" />
  </svg>
)

export const ArrowDownIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5V19M19 12L12 19L5 12" />
  </svg>
)

/* ========== Chevron Icons ========== */

export const ChevronLeftIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 18L9 12L15 6" />
  </svg>
)

export const ChevronRightIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18L15 12L9 6" />
  </svg>
)

export const ChevronUpIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 15L12 9L6 15" />
  </svg>
)

export const ChevronDownIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9L12 15L18 9" />
  </svg>
)

/* ========== Navigation Icons ========== */

export const HomeIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z" fill="currentColor"/>
    ) : (
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
)

export const MenuIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
    <path d="M3 12H21M3 6H21M3 18H21" />
  </svg>
)

export const SearchIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21L16.5 16.5" />
  </svg>
)

export const SettingsIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

export const GridIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
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

export const PlusIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
    <path d="M12 5V19M5 12H19" />
  </svg>
)

export const MinusIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
    <path d="M5 12H19" />
  </svg>
)

export const CloseIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
    <path d="M18 6L6 18M6 6L18 18" />
  </svg>
)

export const CheckIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6L9 17L4 12" />
  </svg>
)

export const EditIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

export const TrashIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 6H5H21" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <path d="M10 11V17M14 11V17" />
  </svg>
)

export const CopyIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

export const ShareIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" />
  </svg>
)

export const DownloadIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V15" />
    <path d="M7 10L12 15L17 10" />
    <path d="M12 15V3" />
  </svg>
)

export const UploadIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V15" />
    <path d="M17 8L12 3L7 8" />
    <path d="M12 3V15" />
  </svg>
)

export const RefreshIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 4V10H17" />
    <path d="M1 20V14H7" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
)

export const MoreHorizontalIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="19" cy="12" r="1.5" fill="currentColor" />
    <circle cx="5" cy="12" r="1.5" fill="currentColor" />
  </svg>
)

export const MoreVerticalIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
    <circle cx="12" cy="19" r="1.5" fill="currentColor" />
  </svg>
)

export const FilterIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" />
  </svg>
)

export const SortIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}>
    <path d="M3 6H21M6 12H18M9 18H15" />
  </svg>
)

/* ========== Status Icons ========== */

export const InfoIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16V12M12 8H12.01" />
  </svg>
)

export const AlertCircleIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8V12M12 16H12.01" />
  </svg>
)

export const AlertTriangleIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <path d="M12 9V13M12 17H12.01" />
  </svg>
)

export const CheckCircleIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12L11 14L15 10" />
  </svg>
)

export const XCircleIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9L9 15M9 9L15 15" />
  </svg>
)

export const HelpCircleIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17H12.01" />
  </svg>
)

/* ========== User Icons ========== */

export const UserIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="7" r="4" />
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
  </svg>
)

export const UsersIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

export const UserPlusIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8V14M17 11H23" />
  </svg>
)

/* ========== Communication Icons ========== */

export const SendIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
)

export const MessageIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" fill="currentColor"/>
    ) : (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
)

export const MailIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" />
    <path d="M22 6L12 13L2 6" />
  </svg>
)

export const PhoneIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const BellIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0" fill="currentColor"/>
    ) : (
      <>
        <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    )}
  </svg>
)

/* ========== Finance Icons ========== */

export const WalletIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <>
        <rect x="2" y="6" width="20" height="14" rx="2" fill="currentColor"/>
        <circle cx="17" cy="13" r="2" fill="white"/>
      </>
    ) : (
      <>
        <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="17" cy="13" r="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M2 10H22" stroke="currentColor" strokeWidth="1.8"/>
      </>
    )}
  </svg>
)

export const CreditCardIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10H22" />
    <path d="M6 15H10" />
  </svg>
)

export const GiftIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
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
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
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

export const TrendingUpIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 6L13.5 15.5L8.5 10.5L1 18" />
    <path d="M17 6H23V12" />
  </svg>
)

export const TrendingDownIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 18L13.5 8.5L8.5 13.5L1 6" />
    <path d="M17 18H23V12" />
  </svg>
)

export const PercentIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 5L5 19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
)

export const ReceiptIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4V20L6.5 18L9 20L12 18L15 20L17.5 18L20 20V4L17.5 6L15 4L12 6L9 4L6.5 6L4 4Z" />
    <path d="M8 10H16M8 14H13" />
  </svg>
)

/* ========== Media Icons ========== */

export const ImageIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15L16 10L5 21" />
  </svg>
)

export const CameraIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)

export const PlayIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="5,3 19,12 5,21" />
  </svg>
)

export const PauseIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
)

/* ========== Utility Icons ========== */

export const CalendarIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2V6M8 2V6M3 10H21" />
  </svg>
)

export const ClockIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6V12L16 14" />
  </svg>
)

export const MapPinIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const LockIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

export const UnlockIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
)

export const EyeIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const EyeOffIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <path d="M1 1L23 23" />
  </svg>
)

export const StarIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
    ) : (
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
)

export const HeartIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
    ) : (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
)

export const BookmarkIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <path d="M19 21L12 16L5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" fill="currentColor"/>
    ) : (
      <path d="M19 21L12 16L5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
)

export const LinkIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

export const ExternalLinkIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3H21V9" />
    <path d="M10 14L21 3" />
  </svg>
)

export const QRCodeIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="3" height="3" />
    <rect x="18" y="14" width="3" height="3" />
    <rect x="14" y="18" width="3" height="3" />
    <rect x="18" y="18" width="3" height="3" />
  </svg>
)

/* ========== Real Estate / Appraisal Icons ========== */

export const BuildingIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22V18H15V22" />
    <path d="M8 6H10M8 10H10M8 14H10M14 6H16M14 10H16M14 14H16" />
  </svg>
)

export const BuildingOfficeIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21H21" />
    <path d="M5 21V7L13 3V21" />
    <path d="M19 21V11L13 7" />
    <path d="M9 9V9.01M9 13V13.01M9 17V17.01" />
  </svg>
)

export const ApartmentIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9H21M3 15H21M9 3V21M15 3V21" />
  </svg>
)

export const LandIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 22L22 22" />
    <path d="M3 22V18L8 14L13 17L21 10V22" />
    <circle cx="17" cy="5" r="3" />
  </svg>
)

export const MapIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z" />
    <path d="M8 2V18M16 6V22" />
  </svg>
)

export const RulerIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    <path d="M15 5L19 9" />
    <path d="M12.5 7.5L14 9M9.5 10.5L11 12M6.5 13.5L8 15" />
  </svg>
)

export const AreaIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9H21" />
    <path d="M9 21V9" />
  </svg>
)

export const CalculatorIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M8 6H16" />
    <path d="M8 10H8.01M12 10H12.01M16 10H16.01" />
    <path d="M8 14H8.01M12 14H12.01M16 14H16.01" />
    <path d="M8 18H8.01M12 18H12.01M16 18H16.01" />
  </svg>
)

export const CompareIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 3H21V8" />
    <path d="M4 20L21 3" />
    <path d="M21 16V21H16" />
    <path d="M15 15L21 21" />
    <path d="M4 4L9 9" />
  </svg>
)

export const ScaleIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3V21" />
    <path d="M5 8L2 12L5 16" />
    <path d="M19 8L22 12L19 16" />
    <path d="M2 12H22" />
  </svg>
)

export const FileTextIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2V8H20" />
    <path d="M16 13H8M16 17H8M10 9H8" />
  </svg>
)

export const FileIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2V8H20" />
  </svg>
)

export const FolderIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)

export const ClipboardIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
  </svg>
)

export const ClipboardCheckIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M9 14L11 16L15 12" />
  </svg>
)

export const BarChartIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20V10M18 20V4M6 20V16" />
  </svg>
)

export const LineChartIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 3V21H21" />
    <path d="M7 14L12 9L16 13L21 8" />
  </svg>
)

export const PieChartIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
)

export const LayersIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
    <path d="M2 17L12 22L22 17" />
    <path d="M2 12L12 17L22 12" />
  </svg>
)

export const ZoomInIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21L16.65 16.65" />
    <path d="M11 8V14M8 11H14" />
  </svg>
)

export const ZoomOutIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21L16.65 16.65" />
    <path d="M8 11H14" />
  </svg>
)

export const MaximizeIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
)

export const MinimizeIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14H10V20M20 10H14V4M14 10L21 3M3 21L10 14" />
  </svg>
)

export const CompassIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z" />
  </svg>
)

export const PinIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22V12" />
    <path d="M5 12H19" />
    <path d="M18 7V5.5a2.5 2.5 0 0 0-5 0V7" />
    <path d="M6 7V5.5a2.5 2.5 0 0 1 5 0V7" />
    <rect x="4" y="7" width="16" height="5" rx="1" />
  </svg>
)

export const FlagIcon = ({ filled = false, className, ...props }: IconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    {filled ? (
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22V15" fill="currentColor"/>
    ) : (
      <>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 22V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    )}
  </svg>
)

export const TagIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.59 13.41L13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1.5" />
  </svg>
)

export const BriefcaseIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

export const AwardIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22L12 19L7 22L8.523 12.89" />
  </svg>
)

export const ShieldIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

export const ShieldCheckIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12L11 14L15 10" />
  </svg>
)

export const PrinterIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9V2H18V9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
)

export const TableIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9H21M3 15H21M9 3V21M15 3V21" />
  </svg>
)

export const ListIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" />
  </svg>
)

export const HashIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 9H20M4 15H20M10 3L8 21M16 3L14 21" />
  </svg>
)

export const TargetIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

export const ActivityIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 12H18L15 21L9 3L6 12H2" />
  </svg>
)

export const NavigationIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
)

export const SlidersHorizontalIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 4H14M10 4H3M21 12H12M8 12H3M21 20H16M12 20H3" />
    <circle cx="12" cy="4" r="2" />
    <circle cx="10" cy="12" r="2" />
    <circle cx="14" cy="20" r="2" />
  </svg>
)

export const DollarIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 1V23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

export const WonIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4L8 20L12 8L16 20L20 4" />
    <path d="M3 10H21M3 14H21" />
  </svg>
)

/* ========== Bank Icons ========== */

export const TossBankIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#3182F6"/>
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const TossSecuritiesIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#3182F6"/>
    <path d="M7 14L10 11L13 13L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const KBBankIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#FFB800"/>
    <rect x="8" y="8" width="8" height="8" rx="1" fill="white"/>
  </svg>
)

export const ShinhanBankIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#0046FF"/>
    <circle cx="12" cy="12" r="4" fill="white"/>
  </svg>
)

export const KakaoBankIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#FFCD00"/>
    <ellipse cx="12" cy="13" rx="5" ry="4" fill="#3C1E1E"/>
  </svg>
)

export const WooriBankIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#0066B3"/>
    <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const HanaBankIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#009490"/>
    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
  </svg>
)

export const NHBankIcon = ({ className, ...props }: SimpleIconProps) => (
  <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#02A64E"/>
    <path d="M12 7V17M8 12H16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

/* ========== Export Collections ========== */

export const TossIcon = {
  // Arrow
  ArrowLeft: ArrowLeftIcon,
  ArrowRight: ArrowRightIcon,
  ArrowUp: ArrowUpIcon,
  ArrowDown: ArrowDownIcon,
  // Chevron
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  ChevronUp: ChevronUpIcon,
  ChevronDown: ChevronDownIcon,
  // Navigation
  Home: HomeIcon,
  Menu: MenuIcon,
  Search: SearchIcon,
  Settings: SettingsIcon,
  Grid: GridIcon,
  // Action
  Plus: PlusIcon,
  Minus: MinusIcon,
  Close: CloseIcon,
  Check: CheckIcon,
  Edit: EditIcon,
  Trash: TrashIcon,
  Copy: CopyIcon,
  Share: ShareIcon,
  Download: DownloadIcon,
  Upload: UploadIcon,
  Refresh: RefreshIcon,
  MoreHorizontal: MoreHorizontalIcon,
  MoreVertical: MoreVerticalIcon,
  Filter: FilterIcon,
  Sort: SortIcon,
  // Status
  Info: InfoIcon,
  AlertCircle: AlertCircleIcon,
  AlertTriangle: AlertTriangleIcon,
  CheckCircle: CheckCircleIcon,
  XCircle: XCircleIcon,
  HelpCircle: HelpCircleIcon,
  // User
  User: UserIcon,
  Users: UsersIcon,
  UserPlus: UserPlusIcon,
  // Communication
  Send: SendIcon,
  Message: MessageIcon,
  Mail: MailIcon,
  Phone: PhoneIcon,
  Bell: BellIcon,
  // Finance
  Wallet: WalletIcon,
  CreditCard: CreditCardIcon,
  Gift: GiftIcon,
  Chart: ChartIcon,
  TrendingUp: TrendingUpIcon,
  TrendingDown: TrendingDownIcon,
  Percent: PercentIcon,
  Receipt: ReceiptIcon,
  // Media
  Image: ImageIcon,
  Camera: CameraIcon,
  Play: PlayIcon,
  Pause: PauseIcon,
  // Utility
  Calendar: CalendarIcon,
  Clock: ClockIcon,
  MapPin: MapPinIcon,
  Lock: LockIcon,
  Unlock: UnlockIcon,
  Eye: EyeIcon,
  EyeOff: EyeOffIcon,
  Star: StarIcon,
  Heart: HeartIcon,
  Bookmark: BookmarkIcon,
  Link: LinkIcon,
  ExternalLink: ExternalLinkIcon,
  QRCode: QRCodeIcon,
  // Real Estate / Appraisal
  Building: BuildingIcon,
  BuildingOffice: BuildingOfficeIcon,
  Apartment: ApartmentIcon,
  Land: LandIcon,
  Map: MapIcon,
  Ruler: RulerIcon,
  Area: AreaIcon,
  Calculator: CalculatorIcon,
  Compare: CompareIcon,
  Scale: ScaleIcon,
  FileText: FileTextIcon,
  File: FileIcon,
  Folder: FolderIcon,
  Clipboard: ClipboardIcon,
  ClipboardCheck: ClipboardCheckIcon,
  BarChart: BarChartIcon,
  LineChart: LineChartIcon,
  PieChart: PieChartIcon,
  Layers: LayersIcon,
  ZoomIn: ZoomInIcon,
  ZoomOut: ZoomOutIcon,
  Maximize: MaximizeIcon,
  Minimize: MinimizeIcon,
  Compass: CompassIcon,
  Pin: PinIcon,
  Flag: FlagIcon,
  Tag: TagIcon,
  Briefcase: BriefcaseIcon,
  Award: AwardIcon,
  Shield: ShieldIcon,
  ShieldCheck: ShieldCheckIcon,
  Printer: PrinterIcon,
  Table: TableIcon,
  List: ListIcon,
  Hash: HashIcon,
  Target: TargetIcon,
  Activity: ActivityIcon,
  Dollar: DollarIcon,
  Won: WonIcon,
  Navigation: NavigationIcon,
  SlidersHorizontal: SlidersHorizontalIcon,
}

export const BankIcon = {
  Toss: TossBankIcon,
  TossSecurities: TossSecuritiesIcon,
  KB: KBBankIcon,
  Shinhan: ShinhanBankIcon,
  Kakao: KakaoBankIcon,
  Woori: WooriBankIcon,
  Hana: HanaBankIcon,
  NH: NHBankIcon,
}
