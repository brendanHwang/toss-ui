import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListItem, List } from "@/components/ui/list-item";
import { TossIcon } from "@/components/ui/icons";
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

export function DialogsPage() {
  return (
    <div className="px-5 py-6">
      <h2 className="toss-title2 mb-4">Dialog & Sheets</h2>
      
      <Card className="card-toss p-6">
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>송금 확인</DialogTitle>
                <DialogDescription>홍길동님에게 50,000원을 송금합니다.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" size="lg" className="flex-1">취소</Button>
                <Button size="lg" className="flex-1">확인</Button>
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
                <AlertDialogDescription>이 작업은 되돌릴 수 없습니다.</AlertDialogDescription>
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
                <BottomSheetDescription>결제에 사용할 수단을 선택하세요</BottomSheetDescription>
              </BottomSheetHeader>
              <BottomSheetBody>
                <List>
                  <ListItem
                    leading={<div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">💳</div>}
                    title="토스머니"
                    subtitle="잔액: 1,234,567원"
                  />
                  <ListItem
                    leading={<div className="size-10 rounded-xl bg-[#FFC800]/20 flex items-center justify-center">🏦</div>}
                    title="카카오뱅크"
                    subtitle="123-456-7890"
                  />
                </List>
              </BottomSheetBody>
              <BottomSheetFooter>
                <Button fullWidth size="xl">선택 완료</Button>
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
                    <TossIcon.Share className="size-5" /> 공유
                  </span>
                </ActionSheetItem>
                <ActionSheetItem>
                  <span className="flex items-center justify-center gap-2">
                    <TossIcon.Copy className="size-5" /> 복사
                  </span>
                </ActionSheetItem>
                <ActionSheetItem destructive>
                  <span className="flex items-center justify-center gap-2">
                    <TossIcon.Trash className="size-5" /> 삭제
                  </span>
                </ActionSheetItem>
              </ActionSheetGroup>
              <ActionSheetCancel />
            </ActionSheetContent>
          </ActionSheet>
        </div>
      </Card>
    </div>
  );
}
