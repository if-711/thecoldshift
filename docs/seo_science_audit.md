# thecoldshift.com — Evidence & Claims Audit

**Date:** 2026-08-09  
**Scope:** The Cold Shift website (thecoldshift.com) only. This audit does NOT cover the separate Ice Sack product website (theicesack.com) or any claims made there, including the "Cold Doesn't Lie" campaign platform.

---

## Audit Methodology

For each public-facing scientific statement, this audit verifies:

1. That the cited PMID resolves to the correct publication (title, authors, journal, year, DOI)
2. That the public wording accurately reflects the measured endpoint and effect direction
3. That the studied delivery method is visible near the claim
4. That limitations are adjacent (not footer-only)
5. That no statement implies direct Ice Sack product evidence unless product testing data exists

---

## Part 1: Source Record Integrity

All 10 source PMIDs were mechanically verified against NCBI E-utilities on 2026-08-09.

| PMID | Stored title matches PubMed | Journal matches | DOI matches | Authors match | Status |
|------|-----------------------------|-----------------|-------------|---------------|--------|
| 17673561 | ✅ | ✅ | ✅ | ✅ | Pass |
| 11893340 | ✅ | ✅ | ✅ | ✅ | Pass |
| 25451381 | ✅ | ✅ | ✅ | ✅ | Pass |
| 31270764 | ✅ | ✅ | ✅ | ✅ | Pass |
| 29884281 | ✅ | ✅ | ✅ | ✅ | Pass |
| 38063977 | ✅ | ✅ | ✅ | ✅ | Pass |
| 38663342 | ✅ | ✅ | ✅ | ✅ | Pass |
| 9763650  | ✅ | ✅ | ✅ | ✅ | Pass |
| 10751106 | ✅ | ✅ | ✅ | ✅ | Pass |
| 19779735 | ✅ (corrected this session) | ✅ (corrected) | ✅ (corrected) | ✅ (corrected) | Pass (after fix) |

### Corrections applied to PMID 19779735 (Lubkowska 2010):

| Field | Before (incorrect) | After (verified) |
|-------|-------------------|-------------------|
| Title | "Whole-body cryostimulation — potential beneficial treatment for improving antioxidant capacity in healthy men" | "Do sessions of cryostimulation have influence on white blood cell count, level of IL6 and total oxidative and antioxidative status in healthy men?" |
| Authors | Lubkowska, Szygula, Chlubek, Banfi | Lubkowska, Szygula, Klimek, Torii |
| Journal | BMC Sports Science, Medicine and Rehabilitation | European Journal of Applied Physiology |
| DOI | 10.1186/1758-2555-2-12 (wrong paper: ligament tissue engineering) | 10.1007/s00421-009-1207-2 |
| Outcome | "Pro- and anti-inflammatory cytokines, antioxidant markers" | "White blood cell count, IL-6, total oxidative status, total antioxidative status" |

The stored record previously mixed metadata from at least three unrelated publications. All five fields now match the PubMed entry.

---

## Part 2: Removed Claims

### Inflammation card and claim — REMOVED

**Previous public wording:** "Whole body cryostimulation reduced circulating inflammatory markers."

**Reason for removal:** PMID 19779735 does not support this claim. The paper's abstract reports *increased* white-blood-cell counts and *increased* IL-6 after ten cryostimulation sessions. The claim stated the opposite effect direction.

**Files changed:**
- `PhysiologyResponseGrid.tsx`: inflammation card entry removed
- `schema.ts`: `cold-exposure-can-reduce-inflammation-markers` claim removed

The source record is retained (corrected) in the ledger for reference but no public claim is derived from it.

---

## Part 3: Claim-by-Claim Evidence Matrix

### 3.1 Physiology Cards (PhysiologyResponseGrid.tsx) — 5 remaining

| # | Card title + statement | PMID | Method | Population | Temp/Duration | Endpoint | Effect | Obj/Subj | Evidence level | IS applicability | Limitation adjacent | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P1 | "Catecholamine findings in cold water immersion" — NE rose at 14 °C CWI | 10751106 | CWI | 10 young men | 14 °C / 1 hr | Plasma NE | Increased | Objective | Single trial (n=10) | Indirect analogy | ✅ On card | **Supported with qualification** |
| P2 | "Plasma dopamine changes during cold water immersion" — DA increased at 14 °C CWI | 10751106 | CWI | 10 young men | 14 °C / 1 hr | Plasma DA | Increased | Objective | Single trial (n=10) | Indirect analogy | ✅ On card | **Supported with qualification** |
| P3 | "Habituation of initial cold water responses" — Repeated CWI reduced cold-shock | 9763650 | CWI | Healthy adults | ~15 °C / repeated | Cold-shock response | Attenuated | Objective | Controlled trial | Indirect analogy | ✅ On card | **Supported with qualification** |
| P4 | "Cardiac autonomic measures across cold methods" — HRV shifted | 38663342 | Mixed | 27 studies | Variable | HR, BP, HRV | Variable | Objective | Meta-analysis | Indirect analogy | ✅ On card | **Supported with qualification** |
| P5 | "Thermogenesis during cold water immersion" — Metabolic rate increased | 10751106 | CWI | 10 young men | 14 °C / 1 hr | Metabolic rate | Increased | Objective | Single trial (n=10) | Indirect analogy | ✅ On card | **Supported with qualification** |

### 3.2 Schema.ts Claims (public-facing, approved) — 11 remaining

| # | Statement | PMID(s) | Type | Confidence | IS applicability | Status |
|---|---|---|---|---|---|---|
| C1 | TRPM8 senses cold | 11893340 | Established physiology | High | Mechanistically relevant | **Supported** |
| C2 | Skin cooling → vasoconstriction + pressor | 17673561 | Research interpretation | Moderate | Indirect analogy | **Supported with qualification** |
| C3 | CV responses vary by method | 17673561, 38663342 | Research interpretation | Moderate | Indirect analogy | **Supported** |
| C4 | Methods not interchangeable | 17673561, 38663342 | Research interpretation | High | Mechanistically relevant | **Supported** |
| C5 | Interoception has distinct dimensions | 25451381, 31270764, 29884281 | Research interpretation | High | Not applicable | **Mechanistic inference** |
| C6 | Slow breathing → HRV changes | 38063977 | Research interpretation | Moderate | Indirect analogy | **Mechanistic inference** |
| C7 | CWI provokes acute responses | 9763650, 38663342 | Research interpretation | Moderate | Indirect analogy | **Supported with qualification** |
| C8 | Repeated CWI habituates cold-shock | 9763650 | Research interpretation | Moderate | Indirect analogy | **Supported with qualification** (not in public copy) |
| C9 | Neuropause transfer untested | None | BHVD model | No direct evidence | Unknown | **Product testing required** |
| C10 | CWI 14 °C → NE increase | 10751106 | Research interpretation | Moderate | Indirect analogy | **Supported with qualification** |
| C11 | CWI 14 °C → DA increase | 10751106 | Research interpretation | Moderate | Indirect analogy | **Supported with qualification** |
| C12 | CWI → metabolic rate increase | 10751106 | Research interpretation | Moderate | Indirect analogy | **Supported with qualification** |

### 3.3 Page.tsx Front-Facing Copy

| # | Wording | Status |
|---|---------|--------|
| F1 | "Controlled Cold" (h1) | Category name — not a scientific claim |
| F2 | "Cold exposure defined by method, conditions, duration, and exit." | Category definition |
| F3 | "In a home setting, water immersion temperature can change during use..." | **Supported with qualification** — scoped to consumer context |
| F4 | "Dry cold containment is designed to offer a defined-duration, body-worn alternative that reduces several of these sources of variation." | **Product testing required** — design intent, acknowledges remaining variables |
| F5 | "What research does and does not establish." | Appropriately bounded heading |
| F6 | "Cold exposure is not a medical treatment unless a particular product has appropriate evidence and regulatory status." | Correct regulatory framing |
| F7 | "Product specific thermal performance, tolerability, safety, and outcomes require evidence collected with the final product under defined conditions." | Explicit testing requirement |

### 3.4 SEO / JSON-LD / Meta

| Text | Status |
|------|--------|
| "A Category Guide to Controlled Cold" | OK — category guide framing |
| "...what research supports, and what remains untested" | OK — bounded |
| JSON-LD about: Cold exposure, Cryotherapy, CWI, Thermoreception | OK — topic descriptors |

### 3.5 DeliveryMethodComparison.tsx

| Field | Status | Notes |
|-------|--------|-------|
| CWI controllability | **Supported with qualification** | Scoped to home vs lab |
| CWI note | OK | "Much of the research summarised on this site..." (no longer absolute) |
| WBC controllability | **Supported with qualification** | "Typically delivered in brief, facility-operated sessions" |
| Ice Sack controllability | **Product testing required** | "No immersion water to fill or drain" + remaining variables listed |
| Ice Sack note | **Product testing required** | "reduces several sources of variation...does not eliminate all variability" |

---

## Part 4: Neuropause Status

| Checkpoint | Status |
|-----------|--------|
| Labeled as BHVD protocol/framework | ✅ |
| Transfer explicitly called untested | ✅ |
| No language claims it regulates, resets, or moves nervous system | ✅ |
| Editorial standards list "Regulates the nervous system" as prohibited | ✅ |

---

## Part 5: What Remains Untested

These require product-specific testing with The Ice Sack:

1. Thermal profile (skin/core temperature trajectory during a session)
2. Dose-response (whether PCM contact produces measurable physiological responses)
3. Comparative equivalence (dry cold vs CWI vs WBC response profiles)
4. Neuropause transfer (attention practice → regulation outside the session)
5. Safety (formal tolerability and adverse-event data)
6. Duration-dependent effects (optimal session length)

---

## Final Status

This site does not carry a blanket "scientifically valid" designation. The correct characterisation:

| Category | Status |
|----------|--------|
| Physiology claims (CWI-based) | Supported with qualification. Method-specific, limitations adjacent. |
| TRPM8, method non-interchangeability | Supported. |
| Practice model (Neuropause) | Mechanistic inference. Labeled as BHVD framework, transfer untested. |
| Interoception, breathing context | Mechanistic inference. Not cold evidence, used as background context. |
| Dry cold controllability | Product testing required. Design intent stated, remaining variables acknowledged. |
| Ice Sack outcomes | Product testing required. No direct testing data exists. |
| Lubkowska inflammation claim | Removed. Source metadata corrected. |
| SEO / JSON-LD | Clean. No product efficacy claims in searchable metadata. |
| Ice Sack product website | Not audited. This audit covers thecoldshift.com only. |
