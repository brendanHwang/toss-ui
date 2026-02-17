import { Card } from "@/components/ui/card";
import { TossIcon, BankIcon } from "@/components/ui/icons";

export function IconsPage() {
  return (
    <div className="px-5 py-6 space-y-6">
      <h2 className="toss-title2 mb-4">Icons</h2>
      
      {/* Arrow */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Arrow</p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { Icon: TossIcon.ArrowLeft, name: "ArrowLeft" },
            { Icon: TossIcon.ArrowRight, name: "ArrowRight" },
            { Icon: TossIcon.ArrowUp, name: "ArrowUp" },
            { Icon: TossIcon.ArrowDown, name: "ArrowDown" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-6 text-foreground" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Chevron */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Chevron</p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { Icon: TossIcon.ChevronLeft, name: "Left" },
            { Icon: TossIcon.ChevronRight, name: "Right" },
            { Icon: TossIcon.ChevronUp, name: "Up" },
            { Icon: TossIcon.ChevronDown, name: "Down" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-6 text-foreground" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Navigation (filled 지원) */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Navigation</p>
        <div className="grid grid-cols-5 gap-4">
          {[
            { Icon: TossIcon.Home, name: "Home", hasFilled: true },
            { Icon: TossIcon.Menu, name: "Menu" },
            { Icon: TossIcon.Search, name: "Search" },
            { Icon: TossIcon.Settings, name: "Settings" },
            { Icon: TossIcon.Grid, name: "Grid", hasFilled: true },
          ].map(({ Icon, name, hasFilled }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              {hasFilled ? (
                <div className="flex gap-1">
                  <Icon className="size-5 text-foreground" />
                  <Icon className="size-5 text-foreground" filled />
                </div>
              ) : (
                <Icon className="size-5 text-foreground" />
              )}
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Action */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Action</p>
        <div className="grid grid-cols-5 gap-4">
          {[
            { Icon: TossIcon.Plus, name: "Plus" },
            { Icon: TossIcon.Minus, name: "Minus" },
            { Icon: TossIcon.Close, name: "Close" },
            { Icon: TossIcon.Check, name: "Check" },
            { Icon: TossIcon.Edit, name: "Edit" },
            { Icon: TossIcon.Trash, name: "Trash" },
            { Icon: TossIcon.Copy, name: "Copy" },
            { Icon: TossIcon.Share, name: "Share" },
            { Icon: TossIcon.Download, name: "Download" },
            { Icon: TossIcon.Upload, name: "Upload" },
            { Icon: TossIcon.Refresh, name: "Refresh" },
            { Icon: TossIcon.MoreHorizontal, name: "MoreH" },
            { Icon: TossIcon.MoreVertical, name: "MoreV" },
            { Icon: TossIcon.Filter, name: "Filter" },
            { Icon: TossIcon.Sort, name: "Sort" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-5 text-foreground" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Status */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Status</p>
        <div className="grid grid-cols-6 gap-4">
          {[
            { Icon: TossIcon.Info, name: "Info" },
            { Icon: TossIcon.AlertCircle, name: "Alert" },
            { Icon: TossIcon.AlertTriangle, name: "Warning" },
            { Icon: TossIcon.CheckCircle, name: "Success" },
            { Icon: TossIcon.XCircle, name: "Error" },
            { Icon: TossIcon.HelpCircle, name: "Help" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-5 text-foreground" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* User */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">User</p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { Icon: TossIcon.User, name: "User" },
            { Icon: TossIcon.Users, name: "Users" },
            { Icon: TossIcon.UserPlus, name: "UserPlus" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-5 text-foreground" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Communication (filled 지원) */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Communication</p>
        <div className="grid grid-cols-5 gap-4">
          {[
            { Icon: TossIcon.Send, name: "Send" },
            { Icon: TossIcon.Message, name: "Message", hasFilled: true },
            { Icon: TossIcon.Mail, name: "Mail" },
            { Icon: TossIcon.Phone, name: "Phone" },
            { Icon: TossIcon.Bell, name: "Bell", hasFilled: true },
          ].map(({ Icon, name, hasFilled }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              {hasFilled ? (
                <div className="flex gap-1">
                  <Icon className="size-5 text-foreground" />
                  <Icon className="size-5 text-foreground" filled />
                </div>
              ) : (
                <Icon className="size-5 text-foreground" />
              )}
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Finance (filled 지원) */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Finance</p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { Icon: TossIcon.Wallet, name: "Wallet", hasFilled: true },
            { Icon: TossIcon.CreditCard, name: "Card" },
            { Icon: TossIcon.Gift, name: "Gift", hasFilled: true },
            { Icon: TossIcon.Chart, name: "Chart", hasFilled: true },
            { Icon: TossIcon.TrendingUp, name: "Up" },
            { Icon: TossIcon.TrendingDown, name: "Down" },
            { Icon: TossIcon.Percent, name: "Percent" },
            { Icon: TossIcon.Receipt, name: "Receipt" },
          ].map(({ Icon, name, hasFilled }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              {hasFilled ? (
                <div className="flex gap-1">
                  <Icon className="size-5 text-foreground" />
                  <Icon className="size-5 text-foreground" filled />
                </div>
              ) : (
                <Icon className="size-5 text-foreground" />
              )}
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Media */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Media</p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { Icon: TossIcon.Image, name: "Image" },
            { Icon: TossIcon.Camera, name: "Camera" },
            { Icon: TossIcon.Play, name: "Play" },
            { Icon: TossIcon.Pause, name: "Pause" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-5 text-foreground" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Utility (filled 지원) */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Utility</p>
        <div className="grid grid-cols-5 gap-4">
          {[
            { Icon: TossIcon.Calendar, name: "Calendar" },
            { Icon: TossIcon.Clock, name: "Clock" },
            { Icon: TossIcon.MapPin, name: "MapPin" },
            { Icon: TossIcon.Lock, name: "Lock" },
            { Icon: TossIcon.Unlock, name: "Unlock" },
            { Icon: TossIcon.Eye, name: "Eye" },
            { Icon: TossIcon.EyeOff, name: "EyeOff" },
            { Icon: TossIcon.Star, name: "Star", hasFilled: true },
            { Icon: TossIcon.Heart, name: "Heart", hasFilled: true },
            { Icon: TossIcon.Bookmark, name: "Bookmark", hasFilled: true },
            { Icon: TossIcon.Link, name: "Link" },
            { Icon: TossIcon.ExternalLink, name: "External" },
            { Icon: TossIcon.QRCode, name: "QR" },
          ].map(({ Icon, name, hasFilled }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              {hasFilled ? (
                <div className="flex gap-1">
                  <Icon className="size-5 text-foreground" />
                  <Icon className="size-5 text-foreground" filled />
                </div>
              ) : (
                <Icon className="size-5 text-foreground" />
              )}
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Real Estate / Appraisal */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Real Estate</p>
        <div className="grid grid-cols-5 gap-4">
          {[
            { Icon: TossIcon.Building, name: "Building" },
            { Icon: TossIcon.BuildingOffice, name: "Office" },
            { Icon: TossIcon.Apartment, name: "Apartment" },
            { Icon: TossIcon.Land, name: "Land" },
            { Icon: TossIcon.Map, name: "Map" },
            { Icon: TossIcon.MapPin, name: "MapPin" },
            { Icon: TossIcon.Compass, name: "Compass" },
            { Icon: TossIcon.Layers, name: "Layers" },
            { Icon: TossIcon.Area, name: "Area" },
            { Icon: TossIcon.Ruler, name: "Ruler" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-5 text-foreground" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Document & Data */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Document & Data</p>
        <div className="grid grid-cols-5 gap-4">
          {[
            { Icon: TossIcon.File, name: "File" },
            { Icon: TossIcon.FileText, name: "FileText" },
            { Icon: TossIcon.Folder, name: "Folder" },
            { Icon: TossIcon.Clipboard, name: "Clipboard" },
            { Icon: TossIcon.ClipboardCheck, name: "Check" },
            { Icon: TossIcon.Table, name: "Table" },
            { Icon: TossIcon.List, name: "List" },
            { Icon: TossIcon.Printer, name: "Printer" },
            { Icon: TossIcon.Tag, name: "Tag" },
            { Icon: TossIcon.Hash, name: "Hash" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-5 text-foreground" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Charts & Analysis */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Charts & Analysis</p>
        <div className="grid grid-cols-5 gap-4">
          {[
            { Icon: TossIcon.BarChart, name: "BarChart" },
            { Icon: TossIcon.LineChart, name: "LineChart" },
            { Icon: TossIcon.PieChart, name: "PieChart" },
            { Icon: TossIcon.Activity, name: "Activity" },
            { Icon: TossIcon.Target, name: "Target" },
            { Icon: TossIcon.Compare, name: "Compare" },
            { Icon: TossIcon.Scale, name: "Scale" },
            { Icon: TossIcon.Calculator, name: "Calculator" },
            { Icon: TossIcon.Dollar, name: "Dollar" },
            { Icon: TossIcon.Won, name: "Won" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-5 text-foreground" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* View & Actions */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">View & Actions</p>
        <div className="grid grid-cols-5 gap-4">
          {[
            { Icon: TossIcon.ZoomIn, name: "ZoomIn" },
            { Icon: TossIcon.ZoomOut, name: "ZoomOut" },
            { Icon: TossIcon.Maximize, name: "Maximize" },
            { Icon: TossIcon.Minimize, name: "Minimize" },
            { Icon: TossIcon.Flag, name: "Flag", hasFilled: true },
            { Icon: TossIcon.Pin, name: "Pin" },
            { Icon: TossIcon.Briefcase, name: "Briefcase" },
            { Icon: TossIcon.Award, name: "Award" },
            { Icon: TossIcon.Shield, name: "Shield" },
            { Icon: TossIcon.ShieldCheck, name: "Check" },
          ].map(({ Icon, name, hasFilled }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              {hasFilled ? (
                <div className="flex gap-1">
                  <Icon className="size-5 text-foreground" />
                  <Icon className="size-5 text-foreground" filled />
                </div>
              ) : (
                <Icon className="size-5 text-foreground" />
              )}
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Bank */}
      <Card className="card-toss p-5 space-y-4">
        <p className="toss-caption1 font-semibold text-muted-foreground">Bank</p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { Icon: BankIcon.Toss, name: "토스뱅크" },
            { Icon: BankIcon.TossSecurities, name: "토스증권" },
            { Icon: BankIcon.KB, name: "국민" },
            { Icon: BankIcon.Shinhan, name: "신한" },
            { Icon: BankIcon.Kakao, name: "카카오" },
            { Icon: BankIcon.Woori, name: "우리" },
            { Icon: BankIcon.Hana, name: "하나" },
            { Icon: BankIcon.NH, name: "농협" },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5">
              <Icon className="size-7" />
              <span className="toss-caption2 text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
