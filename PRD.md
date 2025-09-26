# 🍽️ 식당 대기줄 앱 MVP 개발 계획

## 📋 개발 우선순위

- **P0 (최우선)**: 개발 시작을 위한 기본 환경
- **P1 (핵심)**: 줄서기 ↔ 관리 핵심 기능
- **P2 (필수)**: 실사용 가능하게 만드는 기능
- **P3 (후순위)**: 출시 후 개선사항

---

## 🏗️ P0: 기본 환경 설정 (Foundation)

### ✅ 완료된 작업
- [x] Next.js 프로젝트 생성
- [x] Supabase 패키지 설치

### 🔲 P0-1: Supabase 설정
- [ ] `.env.local` 파일 생성 (Supabase URL, API Key)
- [ ] Supabase 프로젝트 생성/연결

### 🔲 P0-2: 데이터베이스 스키마 생성
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

### 🔲 P0-3: 인증 설정
- [ ] Supabase Auth 활성화
- [ ] RLS (Row Level Security) 정책 설정
- [ ] 점주 회원가입/로그인 기능

---

## 🎯 P1: 핵심 기능 (Core Features)

### 🔲 P1-1: API 엔드포인트 구현
**위치**: `my-app/app/api/`
- [ ] `GET /api/restaurants` - 식당 목록
- [ ] `GET /api/restaurants/[id]` - 식당 상세정보
- [ ] `POST /api/queues` - 줄서기 신청
- [ ] `PATCH /api/queues/[id]` - 대기상태 변경
- [ ] `GET /api/queues/restaurant/[id]` - 식당별 대기열

### 🔲 P1-2: 손님용 UI 구현
**위치**: `my-app/app/(customer)/`
- [ ] **메인페이지**: 식당 목록/지도 뷰
- [ ] **식당 상세**: 현재 대기현황 + 줄서기 버튼
- [ ] **줄서기 폼**: 이름, 전화번호, 인원수 입력

### 🔲 P1-3: 점주용 UI 구현
**위치**: `my-app/app/(owner)/`
- [ ] **로그인 페이지**: 이메일/비밀번호 로그인
- [ ] **대시보드**: 실시간 대기열 관리
- [ ] **호출 기능**: [호출하기] 버튼

### 🔲 P1-4: 실시간 기능 구현
- [ ] Supabase Realtime 설정
- [ ] 대기열 변경사항 실시간 반영
- [ ] 손님 화면에서 내 순서 실시간 업데이트

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

## 🎯 당장 시작할 작업

1. **P0-1**: Supabase 환경 설정
2. **P0-2**: 데이터베이스 테이블 생성
3. **P1-1**: 기본 API 엔드포인트 구현
4. **P1-2**: 식당 목록 페이지 구현

**목표**: P0-P1 완료 후 기본 기능 테스트 가능한 상태 달성