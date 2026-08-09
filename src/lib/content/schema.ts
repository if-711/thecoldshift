/* ================================================================
   Content Types — The Cold Shift
   Three independent classification fields.
   Source metadata lives in Source records only (not duplicated in Claims).
   ================================================================ */

/* ----------------------------------------------------------------
   Statement Type
   ---------------------------------------------------------------- */
export type StatementType =
  | 'established_physiology'
  | 'research_interpretation'
  | 'bhvd_conceptual_model'
  | 'subjective_experience'
  | 'product_fact';

export const STATEMENT_TYPE_LABELS: Record<StatementType, string> = {
  established_physiology: 'Established Physiology',
  research_interpretation: 'Research Interpretation',
  bhvd_conceptual_model: 'BHVD Conceptual Model',
  subjective_experience: 'Subjective Experience',
  product_fact: 'Product Fact',
};

/* ----------------------------------------------------------------
   Evidence Confidence
   ---------------------------------------------------------------- */
export type EvidenceConfidence =
  | 'high'
  | 'moderate'
  | 'preliminary'
  | 'no_direct_evidence'
  | 'unverified';

export const EVIDENCE_CONFIDENCE_LABELS: Record<EvidenceConfidence, string> = {
  high: 'High',
  moderate: 'Moderate',
  preliminary: 'Preliminary',
  no_direct_evidence: 'No Direct Evidence',
  unverified: 'Unverified',
};

/* ----------------------------------------------------------------
   Ice Sack Applicability
   ---------------------------------------------------------------- */
export type IceSackApplicability =
  | 'direct_product_evidence'
  | 'mechanistically_relevant'
  | 'indirect_analogy'
  | 'not_applicable'
  | 'unknown';

export const ICE_SACK_APPLICABILITY_LABELS: Record<IceSackApplicability, string> = {
  direct_product_evidence: 'Direct Product Evidence',
  mechanistically_relevant: 'Mechanistically Relevant',
  indirect_analogy: 'Indirect Analogy',
  not_applicable: 'Not Applicable',
  unknown: 'Unknown',
};

/* ----------------------------------------------------------------
   Cold delivery method taxonomy
   ---------------------------------------------------------------- */
export type ColdDeliveryMethod =
  | 'dry_cold_containment'
  | 'cold_water_immersion'
  | 'whole_body_cryotherapy'
  | 'localized_cooling'
  | 'pcm_wearable'
  | 'environmental_cold'
  | 'mixed'
  | 'unspecified';

/* ----------------------------------------------------------------
   Study type classification
   ---------------------------------------------------------------- */
export type StudyType =
  | 'systematic_review'
  | 'meta_analysis'
  | 'rct'
  | 'controlled_trial'
  | 'cohort'
  | 'cross_sectional'
  | 'case_control'
  | 'case_report'
  | 'narrative_review'
  | 'consensus_statement'
  | 'government_guidance'
  | 'textbook'
  | 'other';

/* ----------------------------------------------------------------
   Source record — study-level metadata lives here only
   ---------------------------------------------------------------- */
export interface Source {
  id: string;
  pmid: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  studyType: StudyType;
  population: string;
  coldMethod: ColdDeliveryMethod;
  temperature: string;
  duration: string;
  outcomeMeasured: string;
  limitations: string;
  doi: string;
  url: string;
}

/* ----------------------------------------------------------------
   Claim record — references sources by ID, does not duplicate them
   ---------------------------------------------------------------- */
export type ClaimApprovalStatus = 'draft' | 'pending_review' | 'approved' | 'rejected';

export interface Claim {
  id: string;
  /** Exact claim wording */
  statement: string;
  /** Statement type */
  statementType: StatementType;
  /** Evidence confidence */
  evidenceConfidence: EvidenceConfidence;
  /** Source record IDs — study metadata lives in Source records */
  sourceIds: string[];
  /** Evidence synthesis — how sources support this claim */
  evidenceSynthesis: string;
  /** Claim-level limitations */
  limitations: string;
  /** Ice Sack applicability */
  iceSackApplicability: IceSackApplicability;
  /** Which chapter this claim appears in */
  chapterId: string;
  /** Last review date (ISO 8601) */
  lastReviewDate: string;
  /** Who reviewed this claim */
  reviewer: string;
  /** Approval status */
  approvalStatus: ClaimApprovalStatus;
  /** Whether this claim is in public-facing copy */
  inPublicCopy: boolean;
}

/* ----------------------------------------------------------------
   Chapter definition
   ---------------------------------------------------------------- */
export interface Chapter {
  number: number;
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  stateFieldStage: 'signal' | 'notice' | 'stay' | 'choose' | 'transition' | 'evidence' | 'system';
}

/* ----------------------------------------------------------------
   Product fact
   ---------------------------------------------------------------- */
export type VerificationStatus = 'verified' | 'unresolved' | 'pending';

export interface ProductFact {
  id: string;
  category: string;
  fact: string;
  source: string;
  measurementMethod: string;
  measurementDate: string;
  measuredBy: string;
  dateVerified: string;
  publicWording: string;
  verificationStatus: VerificationStatus;
}

/* ----------------------------------------------------------------
   Research audit trail
   ---------------------------------------------------------------- */
export interface SearchRecord {
  date: string;
  database: string;
  query: string;
  resultsCount: number;
  included: number;
  excluded: number;
  exclusionReasons: string[];
}

/* ----------------------------------------------------------------
   Reviewed source records
   ---------------------------------------------------------------- */
export const sources: Source[] = [
  {
    id: 'wilson-skin-cooling-2007',
    pmid: '17673561',
    title: 'Skin-surface cooling elicits peripheral and visceral vasoconstriction in humans',
    authors: ['Thad E Wilson', 'Charity L Sauder', 'Matthew L Kearney', 'Nathan T Kuipers', 'Urs A Leuenberger', 'Kevin D Monahan', 'Chester A Ray'],
    journal: 'Journal of Applied Physiology',
    year: 2007,
    studyType: 'controlled_trial',
    population: 'Fourteen supine human participants across 26 cooling trials',
    coldMethod: 'environmental_cold',
    temperature: '15–18 °C water perfused through a tube-lined suit',
    duration: '20 minutes',
    outcomeMeasured: 'Skin temperature, blood pressure, heart rate, stroke volume, cardiac output, and regional vascular conductance',
    limitations: 'Small laboratory study. The water-perfused suit is not The Ice Sack and did not use the Neuropause protocol.',
    doi: '10.1152/japplphysiol.00401.2007',
    url: 'https://pubmed.ncbi.nlm.nih.gov/17673561/',
  },
  {
    id: 'peier-trpm8-2002',
    pmid: '11893340',
    title: 'A TRP channel that senses cold stimuli and menthol',
    authors: ['Andrea M Peier', 'Aziz Moqrich', 'Anne C Hergarden', 'Alison J Reeve', 'David A Andersson', 'Gina M Story', 'Taryn J Earley', 'Ilaria Dragoni', 'Peter McIntyre', 'Stuart Bevan', 'Ardem Patapoutian'],
    journal: 'Cell',
    year: 2002,
    studyType: 'other',
    population: 'Sensory neurons and heterologous cell expression systems',
    coldMethod: 'unspecified',
    temperature: 'Cold-temperature activation examined in cellular experiments',
    duration: 'Not a human exposure protocol',
    outcomeMeasured: 'TRPM8 expression and activation by cold temperature and menthol',
    limitations: 'Foundational receptor research, not a human intervention and not product evidence.',
    doi: '10.1016/S0092-8674(02)00652-9',
    url: 'https://pubmed.ncbi.nlm.nih.gov/11893340/',
  },
  {
    id: 'garfinkel-interoception-2015',
    pmid: '25451381',
    title: 'Knowing your own heart: distinguishing interoceptive accuracy from interoceptive awareness',
    authors: ['Sarah N Garfinkel', 'Anil K Seth', 'Adam B Barrett', 'Keisuke Suzuki', 'Hugo D Critchley'],
    journal: 'Biological Psychology',
    year: 2015,
    studyType: 'cross_sectional',
    population: 'Normative sample of 80 adults',
    coldMethod: 'unspecified',
    temperature: 'No cold exposure',
    duration: 'Single assessment study',
    outcomeMeasured: 'Heartbeat detection performance, self-reported interoceptive sensibility, and metacognitive correspondence',
    limitations: 'Interoception was studied through cardiac tasks and self-report, not cold exposure or Neuropause.',
    doi: '10.1016/j.biopsycho.2014.11.004',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25451381/',
  },
  {
    id: 'murphy-interoception-classification-2019',
    pmid: '31270764',
    title: 'Classifying individual differences in interoception: Implications for the measurement of interoceptive awareness',
    authors: ['Jennifer Murphy', 'Caroline Catmur', 'Geoffrey Bird'],
    journal: 'Psychonomic Bulletin & Review',
    year: 2019,
    studyType: 'narrative_review',
    population: 'Theoretical and measurement review; no intervention population',
    coldMethod: 'unspecified',
    temperature: 'No cold exposure',
    duration: 'Not applicable',
    outcomeMeasured: 'Conceptual classification of interoceptive accuracy and attention across objective and self-report measures',
    limitations: 'A conceptual measurement paper. It does not establish that cold practice improves interoception.',
    doi: '10.3758/s13423-019-01632-7',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31270764/',
  },
  {
    id: 'khalsa-interoception-roadmap-2018',
    pmid: '29884281',
    title: 'Interoception and Mental Health: A Roadmap',
    authors: ['Sahib S Khalsa', 'Ralph Adolphs', 'Oliver G Cameron', 'Hugo D Critchley', 'Paul W Davenport', 'Justin S Feinstein', 'Jamie D Feusner', 'Sarah N Garfinkel', 'Richard D Lane', 'Wolf E Mehling', 'Alicia E Meuret', 'Charles B Nemeroff', 'Stephen Oppenheimer', 'Frederike H Petzschner', 'Olga Pollatos', 'Jamie L Rhudy', 'Lawrence P Schramm', 'W Kyle Simmons', 'Murray B Stein', 'Klaas E Stephan', 'Omer Van den Bergh', 'Ilse Van Diest', 'Andreas von Leupoldt', 'Martin P Paulus', 'Interoception Summit 2016 participants'],
    journal: 'Biological Psychiatry: Cognitive Neuroscience and Neuroimaging',
    year: 2018,
    studyType: 'consensus_statement',
    population: 'Expert consensus and research roadmap; no intervention population',
    coldMethod: 'unspecified',
    temperature: 'No cold exposure',
    duration: 'Not applicable',
    outcomeMeasured: 'Definitions, measurement priorities, and research gaps across interoception',
    limitations: 'A field roadmap, not evidence for Neuropause, The Ice Sack, or state-control transfer.',
    doi: '10.1016/j.bpsc.2017.12.004',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29884281/',
  },
  {
    id: 'you-slow-breathing-2024',
    pmid: '38063977',
    title: 'Influence of Respiratory Frequency of Slow-Paced Breathing on Vagally-Mediated Heart Rate Variability',
    authors: ['Min You', 'Sylvain Laborde', 'Stefan Ackermann', 'Uirassu Borges', 'Fabrice Dosseville', 'Emma Mosley'],
    journal: 'Applied Psychophysiology and Biofeedback',
    year: 2024,
    studyType: 'controlled_trial',
    population: 'Seventy-five athletes aged 19 to 31',
    coldMethod: 'unspecified',
    temperature: 'No cold exposure',
    duration: 'Five-minute breathing conditions',
    outcomeMeasured: 'Heart-rate variability during breathing at 5 to 7 cycles per minute versus spontaneous breathing',
    limitations: 'Short laboratory breathing study in athletes without cold exposure. HRV is not equivalent to a guaranteed subjective state change or generalized regulation.',
    doi: '10.1007/s10484-023-09605-2',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38063977/',
  },
  {
    id: 'jdidi-cold-autonomic-review-2024',
    pmid: '38663342',
    title: 'The effects of cold exposure on cardiovascular and cardiac autonomic control responses in healthy individuals: A systematic review, meta-analysis and meta-regression',
    authors: ['Hela Jdidi', 'Benoit Dugué', 'Claire de Bisschop', 'Olivier Dupuy', 'Wafa Douzi'],
    journal: 'Journal of Thermal Biology',
    year: 2024,
    studyType: 'meta_analysis',
    population: 'Healthy participants across 27 included articles',
    coldMethod: 'mixed',
    temperature: 'Varied across cold-water immersion and whole- or partial-body cryostimulation studies',
    duration: 'Varied across included studies',
    outcomeMeasured: 'Blood pressure, heart rate, and heart-rate variability indices',
    limitations: 'Substantial method heterogeneity. The review did not evaluate dry cold containment or The Ice Sack.',
    doi: '10.1016/j.jtherbio.2024.103857',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38663342/',
  },

  {
    id: 'tipton-cold-habituation-1998',
    pmid: '9763650',
    title: 'Habituation of the initial responses to cold water immersion in humans: a central or peripheral mechanism?',
    authors: ['Michael J Tipton', 'Clare M Eglin', 'Frank St C Golden'],
    journal: 'The Journal of Physiology',
    year: 1998,
    studyType: 'controlled_trial',
    population: 'Healthy human participants undergoing repeated cold-water immersion protocols',
    coldMethod: 'cold_water_immersion',
    temperature: 'Cold-water immersion conditions reported in the study',
    duration: 'Repeated short immersion exposures',
    outcomeMeasured: 'Initial respiratory and cardiovascular responses to cold-water immersion',
    limitations: 'Water immersion has different heat-transfer conditions from dry PCM contact. Habituation to immersion cannot be assumed for The Ice Sack or for non-cold stress.',
    doi: '10.1111/j.1469-7793.1998.621be.x',
    url: 'https://pubmed.ncbi.nlm.nih.gov/9763650/',
  },

  {
    id: 'sramek-cold-immersion-catecholamines-2000',
    pmid: '10751106',
    title: 'Human physiological responses to immersion into water of different temperatures',
    authors: ['P Šrámek', 'M Šimečková', 'L Janský', 'J Šavlíková', 'S Vybíral'],
    journal: 'European Journal of Applied Physiology',
    year: 2000,
    studyType: 'controlled_trial',
    population: 'Ten young men immersed in water at 32 °C, 20 °C, and 14 °C for one hour',
    coldMethod: 'cold_water_immersion',
    temperature: '14 °C and 20 °C water immersion',
    duration: 'One hour',
    outcomeMeasured: 'Plasma norepinephrine, dopamine, cortisol, metabolic rate, heart rate, blood pressure',
    limitations: 'Small sample (n = 10), young male participants only, water immersion at 14 °C is not dry cold containment. The magnitude and direction of responses cannot be assumed for other methods or populations.',
    doi: '10.1007/s004210050065',
    url: 'https://pubmed.ncbi.nlm.nih.gov/10751106/',
  },
  {
    id: 'lubkowska-cryostimulation-cytokines-2010',
    pmid: '20526414',
    title: 'Whole-body cryostimulation — potential beneficial treatment for improving antioxidant capacity in healthy men',
    authors: ['Anna Lubkowska', 'Zbigniew Szygula', 'Dorota Chlubek', 'Grzegorz Banfi'],
    journal: 'BMC Sports Science, Medicine and Rehabilitation',
    year: 2010,
    studyType: 'controlled_trial',
    population: 'Healthy men undergoing repeated whole-body cryostimulation sessions',
    coldMethod: 'whole_body_cryotherapy',
    temperature: '–130 °C whole-body cryostimulation chamber',
    duration: 'Multiple sessions over a series',
    outcomeMeasured: 'Pro- and anti-inflammatory cytokines, antioxidant markers',
    limitations: 'Whole-body cryostimulation at –130 °C is not comparable to dry cold containment. The extreme temperature and brief duration produce different exposure conditions.',
    doi: '10.1186/1758-2555-2-12',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20526414/',
  },
];

/* ----------------------------------------------------------------
   Reviewed claim records
   ---------------------------------------------------------------- */
export const claims: Claim[] = [
  {
    id: 'trpm8-contributes-to-cold-detection',
    statement: 'TRPM8 is a cold- and menthol-activated ion channel expressed in a subset of sensory neurons and contributes to somatic cold detection.',
    statementType: 'established_physiology',
    evidenceConfidence: 'high',
    sourceIds: ['peier-trpm8-2002'],
    evidenceSynthesis: 'Foundational receptor work identified TRPM8 expression in temperature-sensing neurons and activation by cold and menthol.',
    limitations: 'The source used cellular and sensory-neuron models. It does not determine a person’s subjective experience or establish an Ice Sack outcome.',
    iceSackApplicability: 'mechanistically_relevant',
    chapterId: 'signal',
    lastReviewDate: '2026-08-01',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
  {
    id: 'skin-cooling-can-increase-vascular-resistance',
    statement: 'Whole-body skin-surface cooling can increase arterial pressure and reduce peripheral and visceral vascular conductance without necessarily changing heart rate.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'moderate',
    sourceIds: ['wilson-skin-cooling-2007'],
    evidenceSynthesis: 'In a small controlled study, a water-perfused cooling suit increased mean arterial pressure and reduced vascular conductance while heart rate, stroke volume, and cardiac output did not change.',
    limitations: 'One small laboratory study using a water-perfused suit. The direction and magnitude of response depend on exposure conditions and individual factors.',
    iceSackApplicability: 'indirect_analogy',
    chapterId: 'signal',
    lastReviewDate: '2026-08-01',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
  {
    id: 'cardiovascular-response-varies-by-cooling-method',
    statement: 'Heart-rate, blood-pressure, and cardiac-autonomic responses to cold exposure vary with the cooling method, exposure conditions, timing, and participant characteristics.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'moderate',
    sourceIds: ['wilson-skin-cooling-2007', 'jdidi-cold-autonomic-review-2024'],
    evidenceSynthesis: 'A meta-analysis found pooled cardiovascular and HRV changes after water immersion and cryostimulation, while also identifying method and participant dependence. A skin-cooling suit study showed no heart-rate change despite a pressor response.',
    limitations: 'The included methods do not represent dry cold containment. Pooled effects should not be converted into a universal phase-by-phase response.',
    iceSackApplicability: 'indirect_analogy',
    chapterId: 'signal',
    lastReviewDate: '2026-08-01',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
  {
    id: 'cold-delivery-methods-are-not-interchangeable',
    statement: 'Cold-delivery methods differ in medium, contact, coverage, temperature profile, and heat-transfer conditions; results from one method should not be assumed to transfer directly to another.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'high',
    sourceIds: ['wilson-skin-cooling-2007', 'jdidi-cold-autonomic-review-2024'],
    evidenceSynthesis: 'The reviewed records use materially different delivery systems: water-perfused skin cooling, water immersion, and cryostimulation. Their exposure parameters and measured responses are not equivalent.',
    limitations: 'This claim establishes the need for method specificity. It does not rank one cooling method as universally superior.',
    iceSackApplicability: 'mechanistically_relevant',
    chapterId: 'input',
    lastReviewDate: '2026-08-01',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
  {
    id: 'interoception-has-distinct-dimensions',
    statement: 'Interoceptive performance, self-reported interoceptive beliefs, attention, and metacognitive correspondence are related but distinct constructs.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'high',
    sourceIds: ['garfinkel-interoception-2015', 'murphy-interoception-classification-2019', 'khalsa-interoception-roadmap-2018'],
    evidenceSynthesis: 'Empirical work dissociated accuracy, sensibility, and metacognitive awareness. Later conceptual work refined the distinction between measurement method and whether accuracy or attention is being measured.',
    limitations: 'These records do not show that cold exposure improves any dimension of interoception.',
    iceSackApplicability: 'not_applicable',
    chapterId: 'notice',
    lastReviewDate: '2026-08-01',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
  {
    id: 'slow-paced-breathing-can-change-hrv',
    statement: 'Brief slow-paced breathing can alter heart-rate variability measures associated with cardiac vagal modulation under controlled conditions.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'moderate',
    sourceIds: ['you-slow-breathing-2024'],
    evidenceSynthesis: 'In 75 athletes, five-minute breathing conditions at 5 to 7 cycles per minute produced higher HRV indices than spontaneous breathing.',
    limitations: 'The study did not involve cold exposure, prolonged exhalation at the exact Neuropause cadence, The Ice Sack, or generalized state regulation. HRV is not a direct readout of subjective control.',
    iceSackApplicability: 'indirect_analogy',
    chapterId: 'practice',
    lastReviewDate: '2026-08-01',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },

  {
    id: 'cold-water-immersion-can-provoke-acute-responses',
    statement: 'Sudden cold-water immersion can provoke acute respiratory and cardiovascular responses during the initial exposure period.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'moderate',
    sourceIds: ['tipton-cold-habituation-1998', 'jdidi-cold-autonomic-review-2024'],
    evidenceSynthesis: 'Controlled immersion work measured pronounced initial cardiorespiratory responses, and broader review evidence shows acute cardiovascular and autonomic changes across water immersion and cryostimulation studies.',
    limitations: 'The magnitude is exposure dependent. Water immersion is not dry PCM contact, so this is contextual evidence rather than a prediction of an Ice Sack session.',
    iceSackApplicability: 'indirect_analogy',
    chapterId: 'input',
    lastReviewDate: '2026-08-01',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
  {
    id: 'repeated-cold-water-immersion-can-habituate-initial-response',
    statement: 'Repeated cold-water immersion can attenuate parts of the initial cold-shock response under the conditions studied.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'moderate',
    sourceIds: ['tipton-cold-habituation-1998'],
    evidenceSynthesis: 'Tipton and colleagues reported habituation of initial respiratory and cardiovascular responses following repeated immersion exposure.',
    limitations: 'The study concerns water immersion. It does not establish habituation to dry PCM contact, psychological stress, or state transitions outside cold exposure.',
    iceSackApplicability: 'indirect_analogy',
    chapterId: 'practice',
    lastReviewDate: '2026-08-01',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: false,
  },
  {
    id: 'neuropause-transfer-remains-untested',
    statement: 'Whether attention practiced during Neuropause transfers to deliberate state control outside the cold session has not been demonstrated.',
    statementType: 'bhvd_conceptual_model',
    evidenceConfidence: 'no_direct_evidence',
    sourceIds: [],
    evidenceSynthesis: 'The framework proposes that repeated practice noticing and responding to a strong sensory signal may have value beyond the session. No direct Neuropause transfer study is currently part of the evidence ledger.',
    limitations: 'This is a prospective research thesis. It must not be represented as improved regulation, metacognition, behavior, or life outcomes.',
    iceSackApplicability: 'unknown',
    chapterId: 'practice',
    lastReviewDate: '2026-08-01',
    reviewer: 'BHVD editorial boundary review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },

  /* ---- Physiology response claims (Signal chapter) ---- */
  {
    id: 'cold-exposure-increases-norepinephrine',
    statement: 'Cold-water immersion at 14 °C increased plasma norepinephrine concentration in healthy men.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'moderate',
    sourceIds: ['sramek-cold-immersion-catecholamines-2000'],
    evidenceSynthesis: 'In a controlled study, one-hour immersion at 14 °C produced a sustained increase in plasma norepinephrine compared to thermoneutral water.',
    limitations: 'One small study in young men using water immersion. The response magnitude depends on temperature, duration, method, and individual factors.',
    iceSackApplicability: 'indirect_analogy',
    chapterId: 'signal',
    lastReviewDate: '2026-08-04',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
  {
    id: 'cold-exposure-can-increase-dopamine',
    statement: 'Cold-water immersion at 14 °C increased plasma dopamine concentration in healthy men.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'moderate',
    sourceIds: ['sramek-cold-immersion-catecholamines-2000'],
    evidenceSynthesis: 'In the same controlled study, one-hour immersion at 14 °C produced measurable increases in plasma dopamine levels.',
    limitations: 'One small study. The dopamine response was measured via plasma assay during water immersion — not dry cold and not a direct measure of central dopamine signaling.',
    iceSackApplicability: 'indirect_analogy',
    chapterId: 'signal',
    lastReviewDate: '2026-08-04',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
  {
    id: 'cold-exposure-can-reduce-inflammation-markers',
    statement: 'Repeated whole-body cryostimulation reduced pro-inflammatory cytokines and increased anti-inflammatory markers in healthy men.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'preliminary',
    sourceIds: ['lubkowska-cryostimulation-cytokines-2010'],
    evidenceSynthesis: 'Repeated cryostimulation sessions shifted the cytokine balance toward anti-inflammatory profiles and improved antioxidant capacity.',
    limitations: 'Whole-body cryostimulation at –130 °C is a materially different exposure from dry cold containment. One study with a limited population.',
    iceSackApplicability: 'indirect_analogy',
    chapterId: 'signal',
    lastReviewDate: '2026-08-04',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
  {
    id: 'cold-exposure-increases-metabolic-heat-production',
    statement: 'Cold-water immersion increased metabolic rate as the body generated heat to defend core temperature.',
    statementType: 'research_interpretation',
    evidenceConfidence: 'moderate',
    sourceIds: ['sramek-cold-immersion-catecholamines-2000'],
    evidenceSynthesis: 'Metabolic rate increased during immersion at 14 °C and 20 °C compared to thermoneutral conditions, consistent with thermogenic defense of core temperature.',
    limitations: 'Water immersion has different heat-transfer characteristics from dry cold. The metabolic increase magnitude depends on temperature, duration, body composition, and method.',
    iceSackApplicability: 'indirect_analogy',
    chapterId: 'signal',
    lastReviewDate: '2026-08-04',
    reviewer: 'BHVD editorial primary-record review',
    approvalStatus: 'approved',
    inPublicCopy: true,
  },
];

/* ----------------------------------------------------------------
   Manufacturer-supplied product records
   Pending records may be published as specifications but are not
   described as independently verified measurements.
   ---------------------------------------------------------------- */
export const productFacts: ProductFact[] = [
  {
    id: 'origin-delivery-format',
    category: 'System',
    fact: 'Wearable dry cold',
    source: 'The Ice Sack Origin Edition published specification',
    measurementMethod: 'Manufacturer design record',
    measurementDate: '',
    measuredBy: 'BHVD',
    dateVerified: '',
    publicWording: 'Wearable dry cold',
    verificationStatus: 'pending',
  },
  {
    id: 'origin-cold-core',
    category: 'Materials',
    fact: 'Hex-grid phase-change material cold core',
    source: 'The Ice Sack Origin Edition published specification',
    measurementMethod: 'Manufacturer bill of materials',
    measurementDate: '',
    measuredBy: 'BHVD',
    dateVerified: '',
    publicWording: 'Hex-grid phase-change material cold core',
    verificationStatus: 'pending',
  },
  {
    id: 'origin-session-format',
    category: 'Protocol',
    fact: 'Guided Entry, Load, and Peak attentional phases',
    source: 'Neuropause protocol specification',
    measurementMethod: 'Protocol timing record',
    measurementDate: '',
    measuredBy: 'BHVD',
    dateVerified: '',
    publicWording: 'Entry, Load, Peak attentional phases',
    verificationStatus: 'pending',
  },
  {
    id: 'origin-preparation',
    category: 'Use',
    fact: 'Published preparation instruction is five hours of freezing',
    source: 'The Ice Sack Origin Edition published instruction',
    measurementMethod: 'Manufacturer instruction for use',
    measurementDate: '',
    measuredBy: 'BHVD',
    dateVerified: '',
    publicWording: 'Freeze fully for five hours before use.',
    verificationStatus: 'pending',
  },
  {
    id: 'origin-cold-reserve',
    category: 'Thermal',
    fact: 'Rated for more than fifteen minutes of cold reserve at room temperature under BHVD test conditions',
    source: 'BHVD published thermal specification',
    measurementMethod: 'Internal test method pending public documentation',
    measurementDate: '',
    measuredBy: 'BHVD',
    dateVerified: '',
    publicWording: 'Rated for 15+ minutes of cold reserve at room temperature under defined BHVD test conditions.',
    verificationStatus: 'pending',
  },
  {
    id: 'origin-weight',
    category: 'Dimensions',
    fact: 'Approximate total weight is 9.5 pounds',
    source: 'The Ice Sack Origin Edition published specification',
    measurementMethod: 'Production sample measurement record pending',
    measurementDate: '',
    measuredBy: 'BHVD',
    dateVerified: '',
    publicWording: 'Approximate weight: 9.5 lb.',
    verificationStatus: 'pending',
  },
  {
    id: 'origin-packed-size',
    category: 'Dimensions',
    fact: 'Approximate packed dimensions are 15.3 by 10.6 by 5.5 inches',
    source: 'The Ice Sack Origin Edition published specification',
    measurementMethod: 'Production sample measurement record pending',
    measurementDate: '',
    measuredBy: 'BHVD',
    dateVerified: '',
    publicWording: 'Approximate packed size: 15.3 × 10.6 × 5.5 in.',
    verificationStatus: 'pending',
  },
  {
    id: 'origin-fit',
    category: 'Fit',
    fact: 'Published to fit most body types up to 6 feet 4 inches',
    source: 'The Ice Sack Origin Edition published specification',
    measurementMethod: 'Fit validation protocol pending public documentation',
    measurementDate: '',
    measuredBy: 'BHVD',
    dateVerified: '',
    publicWording: 'Published fit: most body types up to 6 ft 4 in.',
    verificationStatus: 'pending',
  },
];

export const searchRecords: SearchRecord[] = [
  {
    date: '2026-08-01',
    database: 'PubMed',
    query: 'Exact PMID verification: 17673561, 11893340, 25451381, 31270764, 29884281, 38063977, 38663342, 20432090, 9763650',
    resultsCount: 9,
    included: 9,
    excluded: 0,
    exclusionReasons: ['Identifier verification only. This was not a systematic literature search.'],
  },
];

/* ----------------------------------------------------------------
   Claim lookup — used by EvidenceBadge
   ---------------------------------------------------------------- */
export function getApprovedClaim(claimId: string): Claim | null {
  const claim = claims.find((c) => c.id === claimId);
  if (!claim || claim.approvalStatus !== 'approved') return null;
  return claim;
}

export function getSourcesForClaim(claim: Claim): Source[] {
  return claim.sourceIds
    .map((id) => sources.find((s) => s.id === id))
    .filter((s): s is Source => s !== undefined);
}

export function getClaimById(claimId: string): Claim | null {
  return claims.find((claim) => claim.id === claimId) ?? null;
}

export function getSourceById(sourceId: string): Source | null {
  return sources.find((source) => source.id === sourceId) ?? null;
}
