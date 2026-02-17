import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

import { StyleguideLayout } from './layouts/StyleguideLayout'
import {
  TypographyPage,
  IconsPage,
  ColorsPage,
  ButtonsPage,
  InputsPage,
  BadgesPage,
  AvatarPage,
  SwitchPage,
  CheckboxPage,
  SelectPage,
  DialogsPage,
  ToastPage,
  ProgressPage,
  TabsPage,
  ItemsPage,
  SkeletonPage,
  EmptyStatePage,
  NavigatorPage,
  ExamplesPage,
} from './pages/styleguide'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<StyleguideLayout />}>
          <Route path="/" element={<Navigate to="/typography" replace />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/inputs" element={<InputsPage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/switch" element={<SwitchPage />} />
          <Route path="/checkbox" element={<CheckboxPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/dialogs" element={<DialogsPage />} />
          <Route path="/toast" element={<ToastPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/skeleton" element={<SkeletonPage />} />
          <Route path="/empty-state" element={<EmptyStatePage />} />
          <Route path="/navigator" element={<NavigatorPage />} />
          <Route path="/examples" element={<ExamplesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
