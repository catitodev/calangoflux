# Requirements Document

## Introduction

Comprehensive redesign of the CalangoFlux website (https://calangoflux.vercel.app) encompassing four major areas: an AI-powered conversational chatbot (CalangoBot) backed by GPT-4 via Vercel edge functions, an Awwwards-level visual redesign with dark-first aesthetic and bold editorial layouts, wiring of existing but disconnected integrations (EmailJS, Supabase, OpenAI), and a full code cleanup including TypeScript migration, error boundaries, and dependency updates.

## Glossary

- **CalangoBot**: The AI-powered conversational chatbot component that uses GPT-4 to qualify leads, answer questions about services and pricing, and save conversations to Supabase
- **Edge_Function**: A Vercel serverless function running at the edge that proxies requests to OpenAI, keeping the API key server-side only
- **Lead**: A potential customer who interacts with CalangoBot or submits a contact form, stored in the Supabase `leads` table
- **Supabase_Client**: The frontend client library that communicates with the Supabase PostgreSQL database for persisting leads, contacts, and subscribers
- **EmailJS_Service**: The third-party email delivery service used to send contact form submissions and lead notifications without a backend server
- **Streaming_Response**: A Server-Sent Events (SSE) based response from the Edge_Function that delivers GPT-4 tokens incrementally to the frontend
- **Scroll_Animation_Engine**: The system of scroll-driven animations using Framer Motion and Intersection Observer that powers the visual redesign
- **Design_Token_System**: The centralized set of CSS custom properties and Tailwind configuration values (colors, typography, spacing) that define the dark-first visual identity
- **Error_Boundary**: A React component that catches JavaScript errors in its child component tree and renders a fallback UI instead of crashing
- **Subsidy_Model**: CalangoFlux's business model where every 10 paying clients fund 1 free service for a social project (10:1 ratio)

## Requirements

### Requirement 1: Edge Function for OpenAI Proxy

**User Story:** As a site visitor, I want to chat with CalangoBot without exposing API keys in my browser, so that the service remains secure and functional.

#### Acceptance Criteria

1. THE Edge_Function SHALL accept POST requests at the `/api/chat` endpoint with a JSON body containing a `messages` array (where each element has a `role` string and a `content` string) and an optional `stream` boolean field
2. THE Edge_Function SHALL authenticate requests to the OpenAI API using a server-side environment variable `OPENAI_API_KEY` that is inaccessible from the frontend bundle
3. WHEN the `stream` field is set to `true`, THE Edge_Function SHALL return a `text/event-stream` response that forwards GPT-4 tokens as Server-Sent Events
4. WHEN the `stream` field is absent or set to `false`, THE Edge_Function SHALL return a complete JSON response containing the assistant message
5. IF the OpenAI API returns an HTTP error status, THEN THE Edge_Function SHALL return a JSON error response with HTTP status 502 and a message indicating the upstream service failed
6. IF the OpenAI API is unreachable within 30 seconds, THEN THE Edge_Function SHALL return a JSON error response with HTTP status 504 and a message indicating a gateway timeout
7. IF the request body is missing the `messages` array, or the array is empty, or any message lacks a `role` or `content` field, THEN THE Edge_Function SHALL return a JSON error response with HTTP status 400 and a message indicating the validation failure
8. THE Edge_Function SHALL include a system prompt containing CalangoFlux service descriptions (5 camadas: Diagnóstico, Execução Base, Expansão, Autonomia, Inteligência Contínua), pricing (R$700–R$3.900 por serviço, ciclo 10-20 dias), the Subsidy_Model explanation (10:1), contact information (WhatsApp +55 22 98832-4416, calangoflux@proton.me), and personality guidelines based on the CalangoFlux manifesto: ética radical, clareza estratégica, inovação acessível, impacto real, autonomia acima de dependência, escuta acima de oferta
9. THE Edge_Function SHALL enforce a maximum token limit of 1000 tokens per response and a maximum of 50 messages in the `messages` array to control costs

### Requirement 2: CalangoBot Conversational Interface

**User Story:** As a site visitor, I want to have a real conversation with CalangoBot that answers my questions about services and pricing, so that I can evaluate CalangoFlux without waiting for a human response.

#### Acceptance Criteria

1. THE CalangoBot SHALL render a floating chat widget in the bottom-right corner of every page with an expandable conversation panel of maximum width 400px and maximum height 500px
2. WHEN a visitor sends a message of up to 500 characters, THE CalangoBot SHALL display a typing indicator and stream the response tokens as they arrive from the Edge_Function, rendering each token within 100ms of receipt
3. THE CalangoBot SHALL maintain conversation history of up to 50 messages within the current browser session, displaying all previous messages when the panel is reopened
4. WHEN a visitor opens the chat panel for the first time in a session, THE CalangoBot SHALL display a welcome message that introduces itself and offers to help with services, pricing, or general questions
5. WHEN a visitor selects a service-related quick-action button or sends a message containing a service name or pricing keyword, THE CalangoBot SHALL classify the visitor as a Lead with the detected interest category
6. IF the Edge_Function does not respond within 10 seconds or returns an error, THEN THE CalangoBot SHALL display a fallback message offering WhatsApp (+55 22 98832-4416) and Telegram as alternative contact channels
7. THE CalangoBot SHALL provide quick-action buttons for common intents: "Ver Preços", "Falar com Humano", and "Conhecer Serviços"
8. IF a visitor submits an empty message or a message exceeding 500 characters, THEN THE CalangoBot SHALL not send the message to the Edge_Function and SHALL display an inline validation message indicating the character limit

### Requirement 3: Lead Persistence to Supabase

**User Story:** As the CalangoFlux team, I want all qualified leads and conversations to be saved to Supabase, so that I can follow up with potential customers.

#### Acceptance Criteria

1. WHEN CalangoBot classifies a visitor as a Lead (visitor selects an interest option from the available list), THE Supabase_Client SHALL insert a record into the `leads` table containing the selected `interesse` value, a `created_at` timestamp, the `origem` set to "chatbot", and a `conversa` field with a text summary of the interaction of no more than 2000 characters
2. WHEN a visitor provides their name or email during a CalangoBot conversation, THE Supabase_Client SHALL update the corresponding lead record (matched by session) with the provided `nome` and/or `email` within 5 seconds of submission
3. WHEN a CalangoBot conversation ends (visitor closes the chat widget or navigates away), THE Supabase_Client SHALL save the full conversation message history as a JSONB array to the `chat_conversations` table with the `session_id` matching the current session and `lead_captured` set to true if a lead record was created
4. IF the Supabase insert or update operation fails, THEN THE CalangoBot SHALL continue operating without interruption, log the error details (table name and operation type) to the browser console, and retry the failed operation once after a 3-second delay
5. THE Supabase_Client SHALL enforce Row Level Security policies that allow anonymous inserts and updates (on own session records only) to the `leads` and `chat_conversations` tables but restrict SELECT, DELETE, and UPDATE of other sessions' records to authenticated users with the `admin` role
6. IF the visitor provides an email that already exists in the `leads` table, THEN THE Supabase_Client SHALL update the existing lead record with the new conversation data instead of creating a duplicate record

### Requirement 4: Contact Form Integration with EmailJS and Supabase

**User Story:** As a site visitor, I want to submit the contact form and have my message actually delivered to CalangoFlux, so that I receive a response to my inquiry.

#### Acceptance Criteria

1. WHEN a visitor submits the contact form with a name of 2 to 255 characters, a valid email address (matching the pattern `user@domain.tld`), and a message of 10 to 5000 characters, THE EmailJS_Service SHALL send the form data to the configured service (service_xf9f757) and template (template_aml3wjl)
2. WHEN a visitor submits the contact form successfully, THE Supabase_Client SHALL insert the submission into the `contact_forms` table with the fields nome, email, and mensagem, plus a server-generated `created_at` timestamp
3. WHEN the form submission succeeds for both EmailJS and Supabase, THE Contact form SHALL display a success confirmation message to the visitor for 5 seconds before returning to the idle state
4. IF the EmailJS_Service fails to send, THEN THE Contact form SHALL display an error message indicating the failure and suggesting the visitor try WhatsApp as an alternative, and THE Contact form SHALL re-enable the submit button
5. IF the Supabase_Client fails to insert the submission, THEN THE Contact form SHALL display an error message indicating the failure and suggesting the visitor try WhatsApp as an alternative, and THE Contact form SHALL re-enable the submit button
6. THE Contact form SHALL validate all required fields on the client side before submission: name must be between 2 and 255 characters, email must match a standard email format, and message must be between 10 and 5000 characters, displaying an inline error message below each invalid field
7. WHILE the form submission is in progress, THE Contact form SHALL disable the submit button and display a loading indicator within the button to prevent duplicate submissions

### Requirement 5: Dark-First Visual Identity and Design Token System

**User Story:** As a site visitor, I want to experience a visually striking dark-themed website with neon green accents, so that CalangoFlux stands out from generic AI startup templates.

#### Acceptance Criteria

1. THE Design_Token_System SHALL define a dark-first color palette with `#0F172A` as the primary background, `#1E293B` for card surfaces, `#00FF87` as the primary accent color, and `#60EFFF` as the secondary accent, ensuring a minimum WCAG 2.1 AA contrast ratio of 4.5:1 for body text and 3:1 for large text against all background colors
2. THE Design_Token_System SHALL configure typography using Space Grotesk for display headings, Inter for body text, and JetBrains Mono for code or data elements, with each font declaration including a fallback stack of system fonts (sans-serif for Space Grotesk and Inter, monospace for JetBrains Mono)
3. THE Design_Token_System SHALL be implemented as Tailwind CSS theme extensions and CSS custom properties, replacing the current light-themed green/blue/orange palette
4. THE CalangoFlux website SHALL apply the dark-first palette to all 11 routes and shared layout components (Navbar, Footer, FloatingChatbot) such that no element renders the replaced light-themed palette colors or an unstyled white background
5. THE Design_Token_System SHALL include glow and gradient utility classes for the neon green accent that can be applied to buttons, borders, and text highlights, with each glow class defining a box-shadow or text-shadow using the `#00FF87` color at a specified blur radius and opacity
6. THE Design_Token_System SHALL define interactive state variants for the primary accent color including hover, focus, and active states, where each state produces a visually distinct change from the default state

### Requirement 6: Scroll-Driven Animations and Micro-Interactions

**User Story:** As a site visitor, I want to experience dynamic scroll-driven animations and micro-interactions that feel alive, so that the website demonstrates CalangoFlux's agentic capabilities through its own interface.

#### Acceptance Criteria

1. THE Scroll_Animation_Engine SHALL implement at least 3 distinct scroll-triggered animations using Framer Motion's `useScroll` and `useTransform` hooks that map animation progress from 0% to 100% proportionally to the element's scroll range within the viewport, rather than simple viewport entry triggers
2. THE Scroll_Animation_Engine SHALL include parallax effects, text reveal animations, and element transformations where each animation's progress maps linearly to the scroll distance covered while the element traverses the viewport
3. WHEN a user navigates between routes, THE CalangoFlux website SHALL execute coordinated exit and enter animations using Framer Motion's `AnimatePresence`, completing each transition within 200ms to 500ms with easing applied
4. THE CalangoFlux website SHALL include at least 2 interactive elements on the homepage that visually track or react to cursor coordinates within one animation frame (16ms) of cursor movement
5. WHILE a page is loading or transitioning for longer than 300ms, THE CalangoFlux website SHALL display a branded loading state with the CalangoFlux logo and a neon green (#00FF87) progress indicator
6. IF the user has enabled `prefers-reduced-motion` in their operating system, THEN THE Scroll_Animation_Engine SHALL display all content in its final state without scroll-driven animations or transitions, ensuring no content is hidden or inaccessible
7. WHILE scroll-driven animations are active, THE Scroll_Animation_Engine SHALL maintain a frame rate of at least 60 frames per second on devices that support hardware-accelerated rendering

### Requirement 7: Awwwards-Level Layout and Typography

**User Story:** As a site visitor, I want to see bold editorial layouts with creative typography and asymmetric grids, so that the website feels unique and memorable rather than template-based.

#### Acceptance Criteria

1. THE CalangoFlux homepage SHALL use asymmetric grid layouts where at least 3 sections per page deviate from equal-width columns, employing CSS Grid with explicitly unequal column ratios (e.g., 2fr/1fr, 3fr/2fr), at least 2 overlapping elements achieved via negative margins or absolute positioning with a minimum overlap of 24px, and section heights that vary by at least 30% between adjacent sections
2. THE CalangoFlux homepage SHALL feature hero headline typography at a minimum computed size of 5rem (80px) on viewports wider than 1024px, using at least 2 distinct font weights within the headline block, and applying at least one CSS gradient fill (via background-clip: text) on a visible text element
3. WHEN the hero section enters the viewport, THE CalangoFlux homepage SHALL animate headline text into view using a reveal transition with a duration between 400ms and 1200ms per text element, with sequential staggering of at least 100ms between elements
4. THE CalangoFlux service pages SHALL implement editorial-style content sections containing at least one full-bleed image (100vw width), at least one pull quote styled with a font size at least 1.5 times the body text size, and at least one section using a 2-column layout with unequal widths
5. THE CalangoFlux website SHALL use non-uniform spacing between sections, where at least 3 adjacent section pairs have padding differences of 32px or more between them, and at least 2 content blocks per page are positioned off-center (offset by at least 8% from the horizontal center)
6. THE CalangoFlux website SHALL maintain responsive behavior where layouts adapt across mobile (below 640px), tablet (640px to 1024px), and desktop (above 1024px) breakpoints, with hero headline size scaling to a minimum of 2.5rem on mobile and 3.5rem on tablet, and overlapping elements repositioning to avoid content occlusion on viewports below 640px

### Requirement 8: Code Cleanup and TypeScript Migration

**User Story:** As a developer, I want the codebase to be fully TypeScript with proper error handling and no orphaned code, so that the project is maintainable and reliable.

#### Acceptance Criteria

1. THE CalangoFlux codebase SHALL convert all JavaScript library files (`src/lib/emailjs.js`, `src/lib/openai.js`, `src/lib/supabase.js`) to TypeScript (`.ts` extension) with explicit type annotations for all function parameters, return values, and exported object shapes, using no `any` types
2. THE CalangoFlux codebase SHALL remove all orphaned components that are not imported by any route file in `src/pages/`, by `src/App.tsx`, or by another non-orphaned component, after confirming zero import references via static analysis
3. WHEN an unhandled runtime error occurs in any descendant component, THE CalangoFlux application SHALL render an Error Boundary fallback UI displaying the CalangoFlux logo, a user-facing error message of no more than 100 characters, and a "Retry" button that re-mounts the failed component subtree on click
4. WHEN a user navigates to a URL path that matches no defined route, THE CalangoFlux router SHALL render a "Page Not Found" component displaying the CalangoFlux logo, the text "Página não encontrada", and a link that navigates the user to the root path (`/`)
5. THE CalangoFlux project SHALL update all dependencies in `package.json` to their latest stable major versions that produce zero peer-dependency conflicts with React 18 and Vite 5, verified by a successful `npm install` with no unresolved peer warnings
6. THE CalangoFlux codebase SHALL pass TypeScript strict mode compilation (`"strict": true` in tsconfig) with zero type errors when running `npx tsc --noEmit`
7. IF the Error Boundary "Retry" button is clicked and the same error recurs on re-mount, THEN THE CalangoFlux application SHALL continue displaying the fallback UI without entering an infinite re-render loop, limiting retry attempts to a maximum of 3 consecutive failures

### Requirement 9: Security Hardening for API Keys

**User Story:** As the CalangoFlux team, I want all API keys removed from the frontend bundle and accessed only through server-side functions, so that credentials cannot be stolen from the browser.

#### Acceptance Criteria

1. THE CalangoFlux production frontend bundle SHALL contain zero string literals or references matching the patterns `VITE_OPENAI_API_KEY`, `sk-proj-`, or `sk-` that correspond to OpenAI API key values
2. THE CalangoFlux frontend SHALL access OpenAI capabilities exclusively through the `/api/chat` Edge_Function endpoint, sending only the user message payload and receiving the assistant response without exposing any API credentials in the request headers or body
3. THE `src/config/llm-config.ts` file SHALL be removed or refactored to eliminate the `openai.apiKey` field that currently reads from `import.meta.env.VITE_OPENAI_API_KEY`, replacing it with a reference to the Edge_Function endpoint path only
4. THE CalangoFlux `.env.example` file SHALL document all required environment variables separated into two labeled sections: a frontend-safe section (variables with `VITE_` prefix that are safe to expose in the browser bundle) and a server-only section (variables without `VITE_` prefix that must never appear in client code), each preceded by a comment header identifying the section
5. IF the `/api/chat` Edge_Function receives a request and the server-side `OPENAI_API_KEY` environment variable is not configured or is empty, THEN THE Edge_Function SHALL return an error response indicating that the AI service is unavailable, without exposing the missing key name or any credential details to the client
6. WHEN the CalangoFlux build process completes, THE build output SHALL pass a static scan confirming that no file in the `dist/` directory contains any environment variable value matching the `OPENAI_API_KEY` server-only variable

### Requirement 10: Newsletter Subscriber Persistence

**User Story:** As a site visitor, I want to subscribe to the CalangoFlux newsletter and have my email actually saved, so that I receive updates about new features and services.

#### Acceptance Criteria

1. WHEN a visitor submits their email to the newsletter form, THE Supabase_Client SHALL validate that the email matches a standard email format (containing "@" and a domain with at least one dot, maximum 255 characters) before attempting the insert
2. IF the email fails format validation, THEN THE newsletter form SHALL display an inline error message indicating the email format is invalid, and SHALL NOT send a request to Supabase
3. WHEN a visitor submits a valid email to the newsletter form, THE Supabase_Client SHALL insert the email into the `subscribers` table with the current UTC timestamp in the `data_inscricao` column within 5 seconds of submission
4. IF the email already exists in the `subscribers` table (duplicate key violation), THEN THE newsletter form SHALL display a message indicating the visitor is already subscribed, without creating a duplicate entry, and SHALL NOT display a generic error
5. WHEN the subscription insert succeeds, THE newsletter form SHALL display a visible success confirmation message and clear the email input field within 1 second of receiving the response
6. IF the Supabase insert fails for a reason other than duplicate email (network error, server error, or timeout after 10 seconds), THEN THE newsletter form SHALL display an error message indicating the subscription could not be completed and suggesting the visitor try again later, and SHALL preserve the entered email in the input field

### Requirement 11: Vercel Project Configuration for Edge Functions

**User Story:** As a developer, I want the Vercel project properly configured to support edge functions and environment variables, so that the chatbot backend deploys correctly.

#### Acceptance Criteria

1. THE CalangoFlux project SHALL include an `api/chat.ts` file in the project root that exports a default HTTP handler function accepting POST requests and returning responses in JSON format
2. THE `vercel.json` configuration SHALL include route rewrites that direct `/api/chat` POST requests to the edge function and a fallback rewrite that serves `index.html` for all other non-file routes to support SPA routing
3. THE Edge_Function SHALL declare `export const config = { runtime: 'edge' }` as a named export to ensure execution on Vercel's edge network
4. THE CalangoFlux project SHALL list the required Vercel environment variable `OPENAI_API_KEY` (without `VITE_` prefix) in both the `.env.example` file and the `DEPLOY_GUIDE.md`, specifying that it must be configured in the Vercel project dashboard under Environment Variables
5. IF the `OPENAI_API_KEY` environment variable is not set or is empty at runtime, THEN THE Edge_Function SHALL return an error response with HTTP status 500 and a JSON body containing an error message indicating that the API key is not configured
