# Implementation Plan: CalangoFlux Redesign 2026

## Overview

This plan transforms CalangoFlux from a light-themed template site into an Awwwards-level dark-first experience with a GPT-4-powered chatbot, fully wired integrations, and a clean TypeScript codebase. Tasks are ordered for incremental delivery: foundation first, then visual system, then core features, then integrations, then polish, and finally testing.

## Tasks

- [ ] 1. Code cleanup, security fixes, and TypeScript migration (Foundation)
  - [ ] 1.1 Convert JavaScript library files to TypeScript
    - Rename `src/lib/emailjs.js` → `src/lib/emailjs.ts` with explicit type annotations for all function parameters and return values
    - Rename `src/lib/openai.js` → `src/lib/openai.ts` and refactor to remove `openai.apiKey` field that reads from `import.meta.env.VITE_OPENAI_API_KEY`, replacing with a reference to the `/api/chat` endpoint path only
    - Rename `src/lib/supabase.js` → `src/lib/supabase.ts` with typed client exports and table type definitions
    - Ensure zero `any` types in all converted files
    - _Requirements: 8.1, 9.3_

  - [ ] 1.2 Remove orphaned components and dead code
    - Perform static analysis of all imports starting from `src/App.tsx` and route files in `src/pages/`
    - Remove any component file in `src/components/` that has zero import references from non-orphaned files
    - Remove or refactor `src/config/llm-config.ts` to eliminate the `openai.apiKey` field
    - _Requirements: 8.2, 9.3_

  - [ ] 1.3 Add Error Boundary and 404 page
    - Create `src/components/ErrorBoundary.tsx` as a class component that catches errors in descendant components
    - Render fallback UI with CalangoFlux logo (`calango-logo-nova.png`), error message (max 100 chars), and "Retry" button
    - Limit retry attempts to maximum 3 consecutive failures before permanently showing fallback
    - Create `src/pages/NotFound.tsx` displaying logo, "Página não encontrada" text, and link to `/`
    - Add `<Route path="*" element={<NotFound />} />` to `App.tsx`
    - Wrap `<Outlet />` in `Layout.tsx` with the Error Boundary
    - _Requirements: 8.3, 8.4, 8.7_

  - [ ] 1.4 Update dependencies and enforce strict TypeScript
    - Update all dependencies in `package.json` to latest stable versions compatible with React 18 and Vite 5
    - Set `"strict": true` in `tsconfig.app.json`
    - Fix all resulting type errors until `npx tsc --noEmit` passes with zero errors
    - Add `fast-check` and `@testing-library/react` as dev dependencies for future testing
    - _Requirements: 8.5, 8.6_

  - [ ] 1.5 Security hardening — remove API keys from frontend
    - Ensure no `VITE_OPENAI_API_KEY`, `sk-proj-`, or `sk-` patterns exist in any source file that gets bundled
    - Update `.env.example` with two labeled sections: frontend-safe (`VITE_` prefix) and server-only (no prefix)
    - Document `OPENAI_API_KEY` as server-only variable
    - _Requirements: 9.1, 9.2, 9.4, 9.6_

- [ ] 2. Checkpoint — Foundation complete
  - Ensure `npx tsc --noEmit` passes, `npm run build` succeeds, and no API keys leak into `dist/`. Ask the user if questions arise.

- [ ] 3. Design token system and dark theme (Visual Foundation)
  - [ ] 3.1 Implement CSS custom properties and Tailwind theme extension
    - Add CSS custom properties to `src/index.css` for backgrounds (`--bg-primary: #0F172A`, `--bg-surface: #1E293B`, `--bg-elevated: #334155`), accents (`--accent-primary: #00FF87`, `--accent-secondary: #60EFFF`), text colors, glow values, typography, and spacing
    - Replace the current light-themed color palette in `tailwind.config.js` with the dark-first token system: `bg`, `accent`, `text` color groups, `fontFamily` (display, body, mono), `boxShadow` (glow-sm, glow-md, glow-lg, glow-cyan), and `backgroundImage` (gradient-radial, gradient-accent)
    - Add interactive state variants for accent color (hover, focus, active)
    - _Requirements: 5.1, 5.2, 5.3, 5.5, 5.6_

  - [ ] 3.2 Apply dark palette to all routes and shared layout
    - Update `Navbar.tsx` with sticky glassmorphism dark styling
    - Update `Footer.tsx` with dark background and neon accents
    - Apply dark-first tokens to all 11 route pages and shared components so no element renders the old light palette or unstyled white background
    - Update `index.html` to include Google Fonts links for Space Grotesk, Inter, and JetBrains Mono
    - _Requirements: 5.4_

  - [ ]* 3.3 Write property test for WCAG contrast compliance
    - **Property 13: WCAG Contrast Ratio Compliance**
    - Verify all text/background color pairs in the design token system meet 4.5:1 for body text and 3:1 for large text
    - **Validates: Requirements 5.1**

- [ ] 4. Edge function and CalangoBot chatbot (Core Feature)
  - [ ] 4.1 Create Vercel edge function at `api/chat.ts`
    - Create `api/chat.ts` in project root exporting a default POST handler with `export const config = { runtime: 'edge' }`
    - Validate request body: require `messages` array with at least 1 element, each having `role` and `content` strings; reject with 400 VALIDATION_ERROR otherwise
    - Enforce max 50 messages in array (reject with 400 if exceeded)
    - Inject system prompt with CalangoFlux service descriptions, pricing tiers (Pioneer R$47, Beta R$97, Impact R$197, Enterprise custom), subsidy model, and contact info
    - Implement streaming mode (SSE with `data: {"delta":"<token>"}` format, terminated by `data: [DONE]`)
    - Implement non-streaming mode (JSON response with assistant message)
    - Set `max_tokens: 1000` on OpenAI requests
    - Handle errors: 500 if `OPENAI_API_KEY` missing, 502 for OpenAI errors (never forward raw error), 504 for 30s timeout
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 9.5, 11.1, 11.3, 11.5_

  - [ ] 4.2 Update `vercel.json` for edge function routing
    - Add route rewrite directing `/api/chat` POST to the edge function
    - Ensure fallback rewrite serves `index.html` for all other non-file routes (SPA routing)
    - _Requirements: 11.2_

  - [ ] 4.3 Build CalangoBot chat widget UI
    - Create `src/components/CalangoBot.tsx` as floating widget (bottom-right, max 400px wide, max 500px tall)
    - Create sub-components: `ChatBubble.tsx` (FAB trigger), `ChatPanel.tsx`, `ChatHeader.tsx`, `MessageList.tsx`, `MessageBubble.tsx`, `QuickActions.tsx` (buttons: "Ver Preços", "Falar com Humano", "Conhecer Serviços"), `TypingIndicator.tsx`, `ChatInput.tsx`
    - Display welcome message on first open in session
    - Validate input: reject empty or >500 chars with inline message
    - Show typing indicator while streaming
    - Render tokens incrementally within 100ms of receipt
    - Show fallback with WhatsApp/Telegram if Edge_Function times out (>10s) or errors
    - _Requirements: 2.1, 2.2, 2.4, 2.6, 2.7, 2.8_

  - [ ] 4.4 Implement `useChatEngine` hook with streaming and lead detection
    - Create `src/hooks/useChatEngine.ts` managing chat state (messages, isOpen, isStreaming, sessionId, leadCaptured, error)
    - Implement SSE streaming consumption from `/api/chat`
    - Maintain conversation history up to 50 messages in session
    - Detect lead keywords ("agentes", "automação", "agentics", "webdesign", "web3", "preço", "plano") and quick-action selections to classify visitor as Lead
    - _Requirements: 2.3, 2.5_

  - [ ]* 4.5 Write property tests for edge function validation
    - **Property 1: Edge Function Request Validation**
    - **Validates: Requirements 1.1, 1.7**

  - [ ]* 4.6 Write property test for upstream error mapping
    - **Property 2: Upstream Error Mapping**
    - **Validates: Requirements 1.5**

  - [ ]* 4.7 Write property test for SSE stream format
    - **Property 3: SSE Stream Format Correctness**
    - **Validates: Requirements 1.3**

  - [ ]* 4.8 Write property test for message array limit
    - **Property 4: Message Array Limit Enforcement**
    - **Validates: Requirements 1.9**

  - [ ]* 4.9 Write property test for chat session message cap
    - **Property 5: Chat Session Message Cap**
    - **Validates: Requirements 2.3**

  - [ ]* 4.10 Write property test for lead classification
    - **Property 6: Lead Classification from Keywords**
    - **Validates: Requirements 2.5**

  - [ ]* 4.11 Write property test for chat input validation
    - **Property 7: Chat Input Validation**
    - **Validates: Requirements 2.8**

- [ ] 5. Checkpoint — Edge function and chatbot complete
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Form integrations — EmailJS + Supabase wiring
  - [ ] 6.1 Wire Contact form with EmailJS and Supabase
    - Refactor `src/components/Contact.tsx` to validate fields client-side: name (2–255 chars), email (user@domain.tld pattern), message (10–5000 chars) with inline error messages per field
    - On valid submission: call EmailJS `send()` with service_xf9f757 and template_aml3wjl, then insert into `contact_forms` table
    - Show success confirmation for 5 seconds, then return to idle
    - On EmailJS or Supabase failure: show error with WhatsApp alternative, re-enable submit button
    - Disable submit button and show loading indicator during submission
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_

  - [ ] 6.2 Wire newsletter subscriber form with Supabase
    - Validate email format (contains "@", domain with at least one dot, max 255 chars) before insert
    - Show inline error if format invalid, do NOT send request
    - Insert into `subscribers` table with current UTC timestamp in `data_inscricao`
    - Handle duplicate key: show "already subscribed" message (not generic error)
    - On success: show confirmation, clear input within 1 second
    - On other failures (network, timeout >10s): show retry message, preserve entered email
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

  - [ ] 6.3 Wire CalangoBot lead persistence to Supabase
    - On lead classification: insert into `leads` table with `interesse`, `created_at`, `origem: "chatbot"`, `conversa` (max 2000 chars)
    - On name/email provided: update lead record matched by session within 5 seconds
    - On chat close/navigate away: save full message history as JSONB to `chat_conversations` with `session_id` and `lead_captured` flag
    - On failure: log error, retry once after 3 seconds, continue operating
    - Handle duplicate email: upsert (update existing record, no duplicate)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ] 6.4 Apply Supabase RLS policies
    - Ensure anonymous INSERT allowed on `leads`, `chat_conversations`, `contact_forms`, `subscribers`
    - Add session-scoped UPDATE policies for `leads` and `chat_conversations`
    - Restrict SELECT/DELETE/UPDATE of other sessions to `admin` role
    - Add unique constraint on `leads.email` for upsert behavior
    - _Requirements: 3.5, 3.6_

  - [ ]* 6.5 Write property test for lead insert payload integrity
    - **Property 8: Lead Insert Payload Integrity**
    - **Validates: Requirements 3.1**

  - [ ]* 6.6 Write property test for conversation persistence round-trip
    - **Property 9: Conversation Persistence Round-Trip**
    - **Validates: Requirements 3.3**

  - [ ]* 6.7 Write property test for email upsert no duplicates
    - **Property 10: Email Upsert — No Duplicates**
    - **Validates: Requirements 3.6**

  - [ ]* 6.8 Write property test for contact form validation
    - **Property 11: Contact Form Validation**
    - **Validates: Requirements 4.6**

  - [ ]* 6.9 Write property test for contact form insert structure
    - **Property 12: Contact Form Insert Structure**
    - **Validates: Requirements 4.2**

  - [ ]* 6.10 Write property test for newsletter email validation
    - **Property 16: Newsletter Email Validation**
    - **Validates: Requirements 10.1**

- [ ] 7. Checkpoint — Integrations complete
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Scroll animations and Awwwards-level layouts (Polish)
  - [ ] 8.1 Implement scroll animation engine with `useScrollAnimation` hook
    - Create `src/hooks/useScrollAnimation.ts` using Framer Motion's `useScroll` and `useTransform`
    - Support animation types: parallax, reveal, transform, counter
    - Implement `useReducedMotion()` check: if active, return final state (opacity: 1, no transforms)
    - Ensure 60fps on hardware-accelerated devices using `will-change` and GPU-composited properties
    - _Requirements: 6.1, 6.2, 6.6, 6.7_

  - [ ] 8.2 Implement cursor-reactive elements and route transitions
    - Create `src/hooks/useMouseTracker.ts` for cursor-reactive elements (update within 16ms via requestAnimationFrame)
    - Add at least 2 interactive elements on homepage that track cursor coordinates
    - Implement `AnimatePresence` route transitions (200–500ms with easing)
    - Add branded loading state with CalangoFlux logo and neon green progress indicator for transitions >300ms
    - _Requirements: 6.3, 6.4, 6.5_

  - [ ] 8.3 Build Awwwards-level homepage layout
    - Redesign `HeroSection.tsx` with asymmetric grid, headline at 5rem+ (desktop), 2 font weights, CSS gradient fill on text, animated reveal (400–1200ms stagger 100ms+)
    - Create `ServicesGrid.tsx` with editorial layout using unequal CSS Grid columns (2fr/1fr, 3fr/2fr)
    - Create `ImpactSection.tsx` with parallax effects and animated counters
    - Ensure at least 3 sections deviate from equal-width columns, 2+ overlapping elements (24px+ overlap), section heights vary 30%+ between adjacent sections
    - Apply non-uniform spacing (32px+ difference between at least 3 adjacent section pairs), 2+ off-center blocks (8%+ offset)
    - _Requirements: 7.1, 7.2, 7.3, 7.5_

  - [ ] 8.4 Build editorial service pages and responsive behavior
    - Update service pages with at least one full-bleed image (100vw), one pull quote (1.5x body font size), one 2-column unequal layout
    - Ensure responsive behavior: hero scales to 2.5rem (mobile), 3.5rem (tablet), 5rem+ (desktop)
    - Overlapping elements reposition to avoid occlusion below 640px
    - _Requirements: 7.4, 7.6_

  - [ ]* 8.5 Write property test for reduced motion accessibility
    - **Property 14: Reduced Motion Accessibility**
    - **Validates: Requirements 6.6**

  - [ ]* 8.6 Write property test for error boundary retry limit
    - **Property 15: Error Boundary Retry Limit**
    - **Validates: Requirements 8.7**

- [ ] 9. Checkpoint — Polish complete
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 10. Final testing and validation
  - [ ] 10.1 Write unit tests for edge function, CalangoBot, forms, and error boundary
    - Create test file structure under `src/__tests__/unit/`
    - Edge function: 8 tests (timeout, streaming, system prompt, non-streaming, validation errors)
    - CalangoBot UI: 10 tests (widget render, welcome message, quick actions, typing indicator, input validation)
    - Contact form: 6 tests (success flow, EmailJS failure, Supabase failure, loading state)
    - Newsletter: 5 tests (success, duplicate handling, network error, input preservation)
    - Error Boundary: 4 tests (fallback render, retry button, max retries, 404 page)
    - Design tokens: 3 tests (font declarations, glow classes, CSS variable presence)
    - _Requirements: 1.1–1.9, 2.1–2.8, 4.1–4.7, 8.3, 8.7, 10.1–10.6_

  - [ ] 10.2 Write integration tests for Supabase RLS and full chat flow
    - Create `src/__tests__/integration/supabase-rls.test.ts`: 4 tests (anonymous insert, admin-only select, session-scoped update)
    - Create `src/__tests__/integration/chat-flow.test.ts`: 2 tests (message → stream → lead capture → save conversation)
    - _Requirements: 3.5, 1.3_

  - [ ] 10.3 Verify production build security and Vercel configuration
    - Run `npm run build` and scan `dist/` for any `OPENAI_API_KEY` values or `sk-` patterns
    - Verify `vercel.json` routes are correct for edge function and SPA fallback
    - Verify `.env.example` has both sections documented
    - Create `DEPLOY_GUIDE.md` documenting required Vercel environment variable `OPENAI_API_KEY`
    - _Requirements: 9.6, 11.2, 11.4, 9.4_

- [ ] 11. Final checkpoint — All tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document using `fast-check`
- Unit tests validate specific examples and edge cases using Vitest
- The design uses TypeScript throughout — all implementation tasks use TypeScript
- New logos at `src/assets/imagens/calango-logo-nova.png` and `calango-logo-transp.png` should be used in Error Boundary, 404 page, and loading states
- No Abacus dependency — removed from project scope

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.5"] },
    { "id": 1, "tasks": ["1.3", "1.4"] },
    { "id": 2, "tasks": ["3.1"] },
    { "id": 3, "tasks": ["3.2", "3.3"] },
    { "id": 4, "tasks": ["4.1", "4.2"] },
    { "id": 5, "tasks": ["4.3", "4.4"] },
    { "id": 6, "tasks": ["4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11"] },
    { "id": 7, "tasks": ["6.1", "6.2", "6.3"] },
    { "id": 8, "tasks": ["6.4", "6.5", "6.6", "6.7", "6.8", "6.9", "6.10"] },
    { "id": 9, "tasks": ["8.1", "8.2"] },
    { "id": 10, "tasks": ["8.3", "8.4"] },
    { "id": 11, "tasks": ["8.5", "8.6"] },
    { "id": 12, "tasks": ["10.1", "10.2", "10.3"] }
  ]
}
```
