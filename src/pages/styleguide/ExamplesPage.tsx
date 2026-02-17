import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input, SearchInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Divider } from "@/components/ui/divider";
import { ListItem, SimpleListItem, List } from "@/components/ui/list-item";
import { EmptyState } from "@/components/ui/empty-state";
import { TossIcon, TossBankIcon } from "@/components/ui/icons";

export function ExamplesPage() {
  const [amount, setAmount] = useState("");

  return (
    <div className="px-5 py-6 space-y-8">
      <h2 className="toss-title2 mb-4">Examples</h2>
      
      {/* ========== 잔액 카드 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">잔액 카드</p>
        <Card className="card-toss">
          <CardContent className="pt-6 pb-5">
            <p className="toss-caption1 text-muted-foreground mb-1">토스머니</p>
            <p className="toss-display">1,234,567원</p>
            <div className="flex gap-3 mt-6">
              <Button className="flex-1" size="xl">
                <TossIcon.Send className="size-5" /> 송금
              </Button>
              <Button variant="secondary" className="flex-1" size="xl">
                충전
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ========== 송금 폼 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">송금 폼</p>
        <Card className="card-toss">
          <CardHeader className="pb-2">
            <CardTitle className="toss-title3">송금하기</CardTitle>
            <CardDescription className="toss-body2">받는 분에게 보낼 금액을 입력하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label className="toss-caption1 text-muted-foreground">받는 분</Label>
              <SearchInput placeholder="이름, 연락처 검색" />
            </div>
            <div className="space-y-2">
              <Label className="toss-caption1 text-muted-foreground">금액</Label>
              <Input 
                placeholder="얼마를 보낼까요?" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="flex gap-2 pt-1">
                {["+1만", "+5만", "+10만", "전액"].map((amt) => (
                  <Button key={amt} variant="outline" size="sm" className="flex-1">
                    {amt}
                  </Button>
                ))}
              </div>
            </div>
            <Button fullWidth size="xl" className="mt-2">다음</Button>
          </CardContent>
        </Card>
      </section>

      {/* ========== 거래 내역 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">거래 내역</p>
        <Card className="card-toss p-4">
          <div className="flex justify-between items-center mb-4">
            <p className="toss-headline">2월 거래내역</p>
            <Button variant="ghost" size="sm">전체보기</Button>
          </div>
          <List gap="sm">
            {[
              { name: "스타벅스", date: "오늘", amount: "-5,500원", type: "expense" },
              { name: "급여", date: "2.15", amount: "+3,500,000원", type: "income" },
              { name: "넷플릭스", date: "2.14", amount: "-17,000원", type: "expense" },
              { name: "배달의민족", date: "2.13", amount: "-28,500원", type: "expense" },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-muted flex items-center justify-center">
                    {tx.type === "income" ? "💰" : "💳"}
                  </div>
                  <div>
                    <p className="toss-body2 font-medium">{tx.name}</p>
                    <p className="toss-caption2 text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <p className={`toss-body2 font-semibold ${tx.type === "income" ? "text-[#3182F6]" : ""}`}>
                  {tx.amount}
                </p>
              </div>
            ))}
          </List>
        </Card>
      </section>

      {/* ========== 소비 분석 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">소비 분석</p>
        <Card className="card-toss p-5 space-y-4">
          <div className="flex justify-between items-baseline">
            <div>
              <p className="toss-caption1 text-muted-foreground">이번 달 소비</p>
              <p className="toss-title2">823,450원</p>
            </div>
            <Badge variant="info">예산의 82%</Badge>
          </div>
          <Progress value={82} />
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { emoji: "🍔", label: "식비", amount: "324,500원" },
              { emoji: "🚗", label: "교통", amount: "156,000원" },
              { emoji: "🛒", label: "쇼핑", amount: "198,950원" },
            ].map((cat) => (
              <div key={cat.label} className="text-center p-3 bg-muted/50 rounded-xl">
                <p className="text-xl mb-1">{cat.emoji}</p>
                <p className="toss-caption2 text-muted-foreground">{cat.label}</p>
                <p className="toss-caption1 font-semibold">{cat.amount}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* ========== 혜택 카드 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">혜택 카드</p>
        <Card className="card-toss overflow-hidden">
          <div className="bg-gradient-to-r from-[#3182F6] to-[#6366F1] p-5 text-white">
            <Badge className="bg-white/20 text-white border-0 mb-2">한정 혜택</Badge>
            <p className="toss-title3 text-white">친구 초대하면</p>
            <p className="toss-display text-white">5,000원</p>
            <Button variant="secondary" className="mt-4 bg-white text-[#3182F6] hover:bg-white/90">
              친구 초대하기
            </Button>
          </div>
        </Card>
      </section>

      {/* ========== 프로필 카드 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">프로필 카드</p>
        <Card className="card-toss p-5">
          <div className="flex items-center gap-4">
            <Avatar size="xl" fallback="홍" />
            <div className="flex-1">
              <p className="toss-headline">홍길동</p>
              <p className="toss-caption1 text-muted-foreground">toss@toss.im</p>
            </div>
            <TossIcon.ChevronRight className="size-5 text-muted-foreground" />
          </div>
          <Divider className="my-4" />
          <div className="grid grid-cols-3 text-center">
            <div>
              <p className="toss-title3 text-primary">12</p>
              <p className="toss-caption2 text-muted-foreground">송금</p>
            </div>
            <div>
              <p className="toss-title3">3</p>
              <p className="toss-caption2 text-muted-foreground">계좌</p>
            </div>
            <div>
              <p className="toss-title3">5</p>
              <p className="toss-caption2 text-muted-foreground">카드</p>
            </div>
          </div>
        </Card>
      </section>

      {/* ========== 알림 카드 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">알림 카드</p>
        <div className="space-y-3">
          <Card className="card-toss p-4 border-l-4 border-l-[#3182F6]">
            <div className="flex gap-3">
              <div className="size-10 rounded-full bg-[#3182F6]/10 flex items-center justify-center shrink-0">
                <TossIcon.Bell className="size-5 text-[#3182F6]" />
              </div>
              <div>
                <p className="toss-body2 font-medium">입금 완료</p>
                <p className="toss-caption1 text-muted-foreground">홍길동님이 50,000원을 보냈어요</p>
                <p className="toss-caption2 text-muted-foreground mt-1">방금 전</p>
              </div>
            </div>
          </Card>
          <Card className="card-toss p-4 border-l-4 border-l-[#30C85E]">
            <div className="flex gap-3">
              <div className="size-10 rounded-full bg-[#30C85E]/10 flex items-center justify-center shrink-0">
                <TossIcon.CheckCircle className="size-5 text-[#30C85E]" />
              </div>
              <div>
                <p className="toss-body2 font-medium">이자 지급</p>
                <p className="toss-caption1 text-muted-foreground">토스뱅크 이자 1,234원이 입금됐어요</p>
                <p className="toss-caption2 text-muted-foreground mt-1">1시간 전</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ========== 설정 메뉴 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">설정 메뉴</p>
        <Card className="card-toss p-1">
          <List gap="none">
            <SimpleListItem icon={<TossIcon.Bell className="size-5" />} label="알림 설정" value="ON" />
            <SimpleListItem icon={<TossIcon.Lock className="size-5" />} label="보안 설정" value="Face ID" />
            <SimpleListItem icon={<TossIcon.User className="size-5" />} label="내 정보 관리" />
            <SimpleListItem icon={<TossIcon.HelpCircle className="size-5" />} label="고객센터" />
          </List>
        </Card>
      </section>

      {/* ========== 송금 성공 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">송금 성공</p>
        <Card className="card-toss p-8 text-center">
          <div className="size-16 rounded-full bg-[#30C85E] flex items-center justify-center mx-auto mb-4">
            <TossIcon.Check className="size-8 text-white" />
          </div>
          <p className="toss-title2 mb-1">송금 완료</p>
          <p className="toss-body2 text-muted-foreground mb-2">홍길동님에게</p>
          <p className="toss-display text-[#30C85E]">50,000원</p>
          <p className="toss-caption1 text-muted-foreground mt-4">2024.02.17 14:32</p>
          <Button fullWidth size="xl" className="mt-6">확인</Button>
        </Card>
      </section>

      {/* ========== 검색 결과 없음 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">검색 결과 없음</p>
        <Card className="card-toss">
          <EmptyState
            icon="🔍"
            title="검색 결과가 없어요"
            description="다른 검색어로 다시 시도해보세요"
          />
        </Card>
      </section>

      {/* ========== 카드 혜택 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">카드 혜택</p>
        <Card className="card-toss p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="size-14 rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
              <TossIcon.CreditCard className="size-7 text-white" />
            </div>
            <div>
              <p className="toss-headline">토스 신용카드</p>
              <p className="toss-caption1 text-muted-foreground">**** 1234</p>
            </div>
          </div>
          <Divider className="my-4" />
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="toss-body2 text-muted-foreground">이번 달 결제 예정</span>
              <span className="toss-body2 font-semibold">523,400원</span>
            </div>
            <div className="flex justify-between">
              <span className="toss-body2 text-muted-foreground">받은 혜택</span>
              <span className="toss-body2 font-semibold text-[#3182F6]">12,500원</span>
            </div>
          </div>
        </Card>
      </section>

      {/* ========== 투자 현황 ========== */}
      <section className="space-y-2">
        <p className="toss-caption1 font-semibold text-muted-foreground">투자 현황</p>
        <Card className="card-toss p-5">
          <div className="flex justify-between items-baseline mb-4">
            <p className="toss-caption1 text-muted-foreground">총 자산</p>
            <TossIcon.Eye className="size-5 text-muted-foreground" />
          </div>
          <p className="toss-display mb-1">15,234,567원</p>
          <p className="text-[#30C85E] toss-body2 font-medium">+1,234,567원 (+8.8%)</p>
          
          <div className="mt-6 space-y-3">
            {[
              { name: "삼성전자", amount: "5,234,000원", change: "+12.3%", positive: true },
              { name: "KODEX 200", amount: "3,456,000원", change: "+5.6%", positive: true },
              { name: "카카오", amount: "2,100,000원", change: "-3.2%", positive: false },
            ].map((stock) => (
              <div key={stock.name} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-muted flex items-center justify-center toss-caption1 font-bold">
                    {stock.name[0]}
                  </div>
                  <p className="toss-body2 font-medium">{stock.name}</p>
                </div>
                <div className="text-right">
                  <p className="toss-body2 font-medium">{stock.amount}</p>
                  <p className={`toss-caption2 ${stock.positive ? "text-[#30C85E]" : "text-[#F04452]"}`}>
                    {stock.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
