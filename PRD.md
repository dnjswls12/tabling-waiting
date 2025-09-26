# 🍽️ 식당 대기줄 앱 MVP 개발 계획

## 📋 개발 우선순위

- **P0 (최우선)**: 개발 시작을 위한 기본 환경 ✅ **완료**
- **P1 (핵심)**: 줄서기 ↔ 관리 핵심 기능 🔄 **80% 완료**
- **P2 (필수)**: 실사용 가능하게 만드는 기능
- **P3 (후순위)**: 출시 후 개선사항

---

## 🏗️ P0: 기본 환경 설정 (Foundation) ✅ **완료**

### ✅ 완료된 작업
- [x] Next.js 프로젝트 생성
- [x] Supabase 패키지 설치
- [x] `.env` 파일 생성 및 Supabase 연결 설정
- [x] Supabase 프로젝트 생성/연결
- [x] TypeScript 타입 정의 (`lib/types.ts`)
- [x] Supabase 클라이언트 설정 (`lib/supabase.ts`)

### ✅ P0-1: Supabase 설정 - **완료**
- [x] `.env` 파일 생성 (Supabase URL, API Key)
- [x] Supabase 프로젝트 생성/연결

### ✅ P0-2: 데이터베이스 스키마 생성 - **완료**
```sql
-- 식당 테이블
restaurants (
  id, name, phone, address,
  cuisine_type, max_capacity,
  created_at
)

-- 대기열 테이블
queues (
  id, restaurant_id, customer_name,
  customer_phone, party_size,
  status, position, created_at, called_at
)

-- 사용자 테이블 (점주용)
users (Supabase Auth 활용)
```

### ✅ P0-3: 인증 설정 - **완료**
- [x] Supabase Auth 활성화
- [x] Google OAuth 로그인 구현
- [x] 이메일/비밀번호 회원가입/로그인 기능
- [x] 인증 상태 관리

---

## 🎯 P1: 핵심 기능 (Core Features) 🔄 **80% 완료**

### 🔄 P1-1: API 엔드포인트 구현 - **60% 완료**
**위치**: `app/api/`
- [x] `GET /api/restaurants` - 식당 목록
- [x] `GET /api/restaurants/[id]` - 식당 상세정보
- [x] `POST /api/queues` - 줄서기 신청
- [ ] `PATCH /api/queues/[id]` - 대기상태 변경 ⚠️ **필요**
- [ ] `GET /api/queues/restaurant/[id]` - 식당별 대기열 ⚠️ **필요**

### ✅ P1-2: 손님용 UI 구현 - **완료**
**위치**: `app/` (실제 구조)
- [x] **메인페이지** (`page.tsx`): 랜딩 페이지 + 식당 찾기 버튼
- [x] **식당 목록** (`restaurants/page.tsx`): 식당 목록 표시
- [x] **식당 상세** (`restaurants/[id]/page.tsx`): 상세정보 + 줄서기 폼
- [x] **줄서기 폼**: 이름, 전화번호, 인원수 입력

### 🔄 P1-3: 점주용 UI 구현 - **70% 완료**
**위치**: `app/owner/`
- [x] **로그인 페이지** (`login/page.tsx`): Google + 이메일 로그인
- [x] **대시보드 기본틀** (`dashboard/page.tsx`): 인증 확인, 로그아웃
- [ ] **실시간 대기열 표시** ⚠️ **필요**
- [ ] **호출/완료 처리 기능** ⚠️ **필요**

### 🔲 P1-4: 실시간 기능 구현 - **미구현**
- [ ] Supabase Realtime 설정 ⚠️ **필요**
- [ ] 대기열 변경사항 실시간 반영 ⚠️ **필요**
- [ ] 손님 화면에서 내 순서 실시간 업데이트 ⚠️ **필요**

---

## 🔧 P2: 실용성 개선 (Usability)

### 🔲 P2-1: 손님 경험 개선
- [ ] **내 대기현황 페이지**: 현재 내 순서, 예상 대기시간
- [ ] **줄서기 취소**: 취소 버튼 및 기능
- [ ] **모바일 반응형**: 스마트폰에 최적화

### 🔲 P2-2: 점주 기능 확장
- [ ] **현장 접수**: 대시보드에서 직접 대기열 추가
- [ ] **상태 관리**: [호출] → [입장완료]/[부재중] 처리
- [ ] **태블릿 반응형**: 태블릿에 최적화

### 🔲 P2-3: 알림 시스템 (n8n)
- [ ] n8n 워크플로우 설정
- [ ] 호출 시 SMS 발송 기능
- [ ] Webhook 연동 (점주 호출 → SMS 발송)

---

## 🚀 P3: 출시 준비 (Polish)

### 🔲 P3-1: 서비스 완성도
- [ ] 랜딩페이지 제작
- [ ] 점주 매장정보 관리 기능
- [ ] 일관된 디자인 시스템 적용

### 🔲 P3-2: 배포 및 운영
- [ ] Vercel 배포 설정
- [ ] 도메인 연결
- [ ] 에러 모니터링 (Sentry)

---

## 📁 권장 폴더 구조

```
my-app/
├── app/
│   ├── (customer)/          # 손님용 페이지
│   │   ├── page.tsx         # 메인 (식당 목록)
│   │   ├── restaurant/
│   │   │   └── [id]/
│   │   │       └── page.tsx # 식당 상세
│   │   └── queue/
│   │       └── [id]/
│   │           └── page.tsx # 내 대기현황
│   ├── (owner)/             # 점주용 페이지
│   │   ├── login/
│   │   │   └── page.tsx     # 로그인
│   │   └── dashboard/
│   │       └── page.tsx     # 대시보드
│   ├── api/                 # API 엔드포인트
│   │   ├── restaurants/
│   │   └── queues/
│   └── components/          # 공통 컴포넌트
└── lib/
    ├── supabase.ts          # Supabase 클라이언트
    └── types.ts             # TypeScript 타입 정의
```

---

---

## 🚨 **현재 상태 (2024.09.26 기준)**

**✅ P0 완료**: 기본 환경, 인증, DB 연결 모두 완료
**🔄 P1 80% 완료**: API 3/5개, UI 손님용 완료, 점주용 기본틀 완료
**⚠️ MVP를 위해 필수로 완료해야 할 작업들:**

---

## 🎯 **다음 우선순위 작업** (MVP 완성을 위한)

### 🚨 **즉시 필요 (P1 완료)**
1. **P1-1**: `PATCH /api/queues/[id]` - 대기상태 변경 API
2. **P1-1**: `GET /api/queues/restaurant/[id]` - 식당별 대기열 조회 API
3. **P1-3**: 점주 대시보드 실제 대기열 표시 + 호출 기능
4. **P1-4**: Supabase Realtime 연동

### 🔄 **그 다음 (P2-1)**
5. **P2-1**: 손님 대기현황 페이지 (`/queue/[id]`)
6. **P2-1**: 줄서기 취소 기능

**목표**: P1 완료 후 기본 MVP 테스트 가능 상태 달성 🎯