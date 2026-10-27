# Polish copy — ELEARS website

This file holds the Polish text for every string in the site's message catalogue. Edit the `PL:` lines here, then run:

```bash
npm run sync:pl
```

That regenerates `messages/pl.json` from this file. Do not edit `messages/pl.json` by hand — the next sync would overwrite it.

Rules of the road:

- **English is the primary language** and the source of truth for meaning. The `EN:` lines are copied verbatim from `messages/en.json` and are shown for reference only; editing them here changes nothing. If the English changes, add the new key here and translate it.
- Keep each `PL:` value on a single line. Placeholders in curly braces (`{minutes}`, `{author}`) must stay exactly as they are.
- The heading of each entry is the key path. Numbered suffixes (`.0`, `.1`) are elements of a list. Do not rename or reorder entries — the sync script matches them to the English catalogue and stops with an error if a key is missing or unknown.
- Polish headlines use sentence case; the English ones use Title Case by design.

Not covered by this file: the three legal pages (`app/[locale]/legal/privacy|terms|cookies/page.tsx`) and the Insights posts under `content/insights/pl/` carry their own Polish text and are edited in place.

Voice: written as an ex-military intelligence professional presenting his own services — sober, direct, short sentences, no superlatives, formal address.

## site

### site.name
EN: ELEARS
PL: ELEARS

### site.shortTagline
EN: Intelligence from Europe's Eastern Frontier.
PL: Rozpoznanie ze wschodniej flanki Europy.

### site.description
EN: EU-sovereign, AI-native private intelligence. Wrocław, Poland.
PL: Prywatny wywiad, suwerenny w ramach UE, oparty na AI. Wrocław, Polska.

### site.wordmark
EN: ELEARS
PL: ELEARS

## nav

### nav.home
EN: Home
PL: Strona główna

### nav.services
EN: Services
PL: Usługi

### nav.about
EN: About
PL: O nas

### nav.insights
EN: Insights
PL: Analizy

### nav.contact
EN: Contact
PL: Kontakt

### nav.skipToContent
EN: Skip to content
PL: Przejdź do treści

### nav.openMenu
EN: Open menu
PL: Otwórz menu

### nav.closeMenu
EN: Close menu
PL: Zamknij menu

### nav.toggleLanguage
EN: Switch language
PL: Zmień język

### nav.languageName.en
EN: English
PL: English

### nav.languageName.pl
EN: Polski
PL: Polski

## cta

### cta.ourServices
EN: Our services
PL: Nasze usługi

### cta.contactUs
EN: Contact us
PL: Kontakt

### cta.discussMandate
EN: Discuss a mandate
PL: Omówmy zadanie

### cta.readMore
EN: Read more
PL: Czytaj dalej

### cta.viewAll
EN: View all
PL: Zobacz wszystkie

## home

### home.heroEyebrow
EN: Wrocław · CEE · NATO
PL: Wrocław · CEE · NATO

### home.heroSub
EN: ELEARS is an EU-sovereign private intelligence firm — AI-native delivery, senior-led judgment, multilingual depth across Central and Eastern Europe.
PL: ELEARS to prywatna firma wywiadowcza, suwerenna w ramach Unii Europejskiej. Własna platforma AI, ocena sytuacji w rękach doświadczonych praktyków, źródła czytane w językach Europy Środkowo-Wschodniej.

### home.coordinates.title
EN: // Coordinates
PL: // Współrzędne

### home.coordinates.hqLabel
EN: HQ
PL: Siedziba

### home.coordinates.hqValue
EN: Wrocław
PL: Wrocław

### home.coordinates.gpsLabel
EN: GPS
PL: GPS

### home.coordinates.gpsValue
EN: 51.1079°N 17.0385°E
PL: 51,1079°N 17,0385°E

### home.coordinates.languagesLabel
EN: Languages
PL: Języki

### home.coordinates.languagesValue
EN: PL · RU · UK · DE · EN
PL: PL · RU · UK · DE · EN

### home.coordinates.establishedLabel
EN: Established
PL: Założona

### home.coordinates.establishedValue
EN: 2026
PL: 2026

### home.pillarsEyebrow
EN: What we do
PL: Co robimy

### home.pillarsTitle
EN: Six Service Lines, One Operating Standard.
PL: Sześć linii usług, jeden standard działania.

### home.whyEyebrow
EN: Why ELEARS
PL: Dlaczego ELEARS

### home.whyTitle
EN: Built for the Questions Western Firms Cannot Answer Alone.
PL: Odpowiadamy na pytania, na które zachodnie firmy nie odpowiedzą same.

### home.insightsEyebrow
EN: Selected insights
PL: Wybrane analizy

### home.insightsTitle
EN: Recent Analysis from the Firm.
PL: Najnowsze analizy firmy.

### home.footerCtaTitle
EN: Have a Mandate in Mind?
PL: Mają Państwo zadanie do omówienia?

### home.footerCtaSub
EN: We respond to qualified enquiries within one business day.
PL: Na konkretne zapytania odpowiadamy w ciągu jednego dnia roboczego.

## why

### why.sovereign.title
EN: EU-Sovereign by Design
PL: Suwerenność w ramach UE

### why.sovereign.body
EN: Data, infrastructure, and analysts inside the European Union.
PL: Dane, infrastruktura i analitycy pozostają na terytorium Unii Europejskiej.

### why.native.title
EN: CEE-Native, Multilingual
PL: Z regionu, w językach regionu

### why.native.body
EN: Polish, Russian, Ukrainian, German and English source coverage.
PL: Źródła polskie, rosyjskie, ukraińskie, niemieckie i angielskie czytamy w oryginale.

### why.ai.title
EN: AI-First Delivery
PL: Realizacja oparta na AI

### why.ai.body
EN: An in-house platform that compresses cycle time, with humans in the loop.
PL: Własna platforma skraca czas pracy. Każdy wynik przechodzi przez ręce analityka.

### why.independent.title
EN: Independent, Ethically Governed
PL: Niezależność i jasne zasady

### why.independent.body
EN: No mandates against journalists, activists, or whistleblowers.
PL: Nie przyjmujemy zadań wymierzonych w dziennikarzy, aktywistów ani sygnalistów.

## services

### services.indexEyebrow
EN: Services
PL: Usługi

### services.indexTitle
EN: What We Do.
PL: Co robimy.

### services.indexLead
EN: Six service lines, scoped tightly and delivered by senior practitioners. Pricing on request — fixed-fee where the brief allows.
PL: Sześć linii usług o ściśle określonym zakresie, realizowanych przez doświadczonych praktyków. Wycena na zapytanie — ryczałt tam, gdzie pozwala na to zakres zadania.

### services.pricingNote
EN: Pricing on request — fixed-fee where the brief allows.
PL: Wycena na zapytanie — ryczałt tam, gdzie pozwala na to zakres zadania.

### services.typicalEngagements
EN: Typical Engagements
PL: Typowe zadania

### services.howWeWork
EN: How We Work
PL: Jak działamy

### services.deliverables
EN: Deliverables
PL: Co Państwo otrzymują

### services.stepScoping
EN: Scoping
PL: Określenie zadania

### services.stepDelivery
EN: Delivery
PL: Realizacja

### services.stepHandover
EN: Handover
PL: Przekazanie wyników

### services.items.integrity-due-diligence.title
EN: Integrity Due Diligence
PL: Weryfikacja wiarygodności

### services.items.integrity-due-diligence.short
EN: Pre-transaction and pre-hire integrity checks across CEE, Russia-CIS, and global jurisdictions.
PL: Sprawdzenie osób i podmiotów przed transakcją lub zatrudnieniem — Europa Środkowo-Wschodnia, Rosja i WNP, pozostałe jurysdykcje.

### services.items.integrity-due-diligence.lead
EN: Pre-transaction and pre-hire integrity checks on individuals and entities across CEE, Russia-CIS, and global jurisdictions. Sourcing is multilingual and native-language. Standard subjects turn around in three to five business days; complex subjects on a scoped timeline.
PL: Sprawdzamy osoby i podmioty przed transakcją lub zatrudnieniem — w Europie Środkowo-Wschodniej, Rosji i WNP oraz w innych jurysdykcjach. Źródła czytamy w językach oryginalnych. Standardowy podmiot: trzy do pięciu dni roboczych. Sprawy złożone: według uzgodnionego harmonogramu.

### services.items.integrity-due-diligence.engagements.0
EN: Pre-acquisition target screening for a mid-market private equity fund
PL: Weryfikacja celu przejęcia dla funduszu private equity z segmentu średnich spółek

### services.items.integrity-due-diligence.engagements.1
EN: C-suite and board pre-hire checks for a multinational entering the region
PL: Sprawdzenie kandydatów do zarządu i rady nadzorczej dla koncernu wchodzącego do regionu

### services.items.integrity-due-diligence.engagements.2
EN: Counterparty integrity reviews on commodities and infrastructure deals
PL: Weryfikacja kontrahentów w transakcjach surowcowych i infrastrukturalnych

### services.items.integrity-due-diligence.engagements.3
EN: Sanctions and beneficial-ownership unwinds across CIS jurisdictions
PL: Rozplątywanie struktur właścicielskich i powiązań sankcyjnych w jurysdykcjach WNP

### services.items.integrity-due-diligence.scoping
EN: Brief intake, conflict check, source plan, and fixed-fee proposal where scope allows.
PL: Przyjęcie zadania, sprawdzenie konfliktu interesów, plan źródeł i oferta ryczałtowa, gdy pozwala na to zakres.

### services.items.integrity-due-diligence.delivery
EN: Native-language open-source research, public-records review, and discreet human enquiry.
PL: Rozpoznanie w źródłach otwartych w językach oryginalnych, przegląd rejestrów publicznych i dyskretny wywiad środowiskowy.

### services.items.integrity-due-diligence.handover
EN: Structured report, source register, and a verbal briefing with the lead analyst.
PL: Ustrukturyzowany raport, rejestr źródeł i ustny meldunek analityka prowadzącego.

### services.items.integrity-due-diligence.deliverables.0
EN: Structured integrity report (red-flag summary plus narrative)
PL: Ustrukturyzowany raport: zestawienie sygnałów ostrzegawczych i opis ustaleń

### services.items.integrity-due-diligence.deliverables.1
EN: Source register with provenance and date stamps
PL: Rejestr źródeł z pochodzeniem i datą pozyskania każdej informacji

### services.items.integrity-due-diligence.deliverables.2
EN: Executive briefing to deal team or general counsel
PL: Briefing dla zespołu transakcyjnego lub radcy generalnego

### services.items.geopolitical-risk.title
EN: Geopolitical & Country Risk
PL: Ryzyko geopolityczne i krajowe

### services.items.geopolitical-risk.short
EN: Market-entry risk, political-cycle analysis, and bespoke country briefings.
PL: Ryzyko wejścia na rynek, analiza cykli politycznych i briefingi krajowe na zamówienie.

### services.items.geopolitical-risk.lead
EN: Market-entry risk, political-cycle analysis, scenario planning, and bespoke country briefings. Our depth is in CEE and Russia-CIS, with selective MENA-adjacent coverage where it intersects with European interests.
PL: Ryzyko wejścia na rynek, analiza cykli politycznych, planowanie scenariuszowe i briefingi krajowe na zamówienie. Nasza głębia to Europa Środkowo-Wschodnia oraz Rosja i WNP; Bliski Wschód i Afrykę Północną obejmujemy tam, gdzie krzyżują się z interesami europejskimi.

### services.items.geopolitical-risk.engagements.0
EN: Country-entry risk briefing for an industrial investor
PL: Briefing o ryzyku wejścia na rynek dla inwestora przemysłowego

### services.items.geopolitical-risk.engagements.1
EN: Election-cycle scenario planning for a foreign affairs team
PL: Scenariusze cyklu wyborczego dla zespołu ds. polityki zagranicznej

### services.items.geopolitical-risk.engagements.2
EN: Standing geopolitical retainer for a multinational executive committee
PL: Stałe wsparcie geopolityczne komitetu wykonawczego grupy międzynarodowej

### services.items.geopolitical-risk.engagements.3
EN: Sanctions trajectory and second-order effects assessments
PL: Ocena kierunku zmian w sankcjach i ich skutków drugiego rzędu

### services.items.geopolitical-risk.scoping
EN: Question definition, decision relevance, and a written brief that fixes scope.
PL: Zdefiniowanie pytania, jego znaczenia dla decyzji i pisemny brief, który zamyka zakres.

### services.items.geopolitical-risk.delivery
EN: Primary and secondary research, expert interviews, and structured analysis.
PL: Rozpoznanie w źródłach pierwotnych i wtórnych, rozmowy z ekspertami i ustrukturyzowana analiza.

### services.items.geopolitical-risk.handover
EN: Written briefing, scenarios with indicators, and a working session with decision owners.
PL: Pisemny briefing, scenariusze ze wskaźnikami ostrzegawczymi i sesja robocza z osobami decyzyjnymi.

### services.items.geopolitical-risk.deliverables.0
EN: Written country or thematic briefing
PL: Pisemny briefing krajowy lub tematyczny

### services.items.geopolitical-risk.deliverables.1
EN: Scenario set with leading indicators to monitor
PL: Zestaw scenariuszy ze wskaźnikami wyprzedzającymi do obserwacji

### services.items.geopolitical-risk.deliverables.2
EN: Closed-door briefing for the executive or board
PL: Briefing za zamkniętymi drzwiami dla zarządu lub rady

### services.items.cyber-threat-intelligence.title
EN: Cyber Threat Intelligence
PL: Wywiad o cyberzagrożeniach

### services.items.cyber-threat-intelligence.short
EN: Threat-actor and campaign tracking, dark-web monitoring, and pre-incident posture assessment.
PL: Śledzenie sprawców i kampanii, monitoring dark webu, ocena odporności przed incydentem.

### services.items.cyber-threat-intelligence.lead
EN: Threat-actor and campaign tracking, ransomware-group monitoring, dark-web and Russian- and Ukrainian-language source coverage, IOC feeds, and pre-incident posture assessment. We support, but do not replace, your incident-response retainer.
PL: Śledzimy sprawców zagrożeń i kampanie, monitorujemy grupy ransomware, czytamy dark web oraz źródła rosyjsko- i ukraińskojęzyczne, dostarczamy wskaźniki kompromitacji (IOC) i oceniamy odporność przed incydentem. Wspieramy Państwa zespół reagowania na incydenty. Nie zastępujemy go.

### services.items.cyber-threat-intelligence.engagements.0
EN: Standing threat-actor coverage for critical infrastructure operators
PL: Stałe śledzenie sprawców zagrożeń dla operatorów infrastruktury krytycznej

### services.items.cyber-threat-intelligence.engagements.1
EN: Ransomware exposure and victim-disclosure monitoring for a sector
PL: Monitoring ekspozycji na ransomware i ujawnień ofiar w sektorze

### services.items.cyber-threat-intelligence.engagements.2
EN: Targeted brand and executive monitoring across closed forums
PL: Celowany monitoring marki i kadry kierowniczej na zamkniętych forach

### services.items.cyber-threat-intelligence.engagements.3
EN: Pre-incident readiness review and tabletop facilitation
PL: Przegląd gotowości przed incydentem i prowadzenie ćwiczeń sztabowych

### services.items.cyber-threat-intelligence.scoping
EN: Asset and adversary mapping, then a tailored collection plan.
PL: Mapa zasobów i przeciwnika, potem dopasowany plan zbierania informacji.

### services.items.cyber-threat-intelligence.delivery
EN: Continuous collection across surface, deep, and dark-web sources, in source-language.
PL: Ciągłe zbieranie informacji z sieci jawnej, głębokiej i dark webu — w językach źródłowych.

### services.items.cyber-threat-intelligence.handover
EN: Periodic reporting cadence, IOC delivery, and on-demand analyst access.
PL: Ustalony rytm raportowania, dostarczanie IOC i dostęp do analityka na żądanie.

### services.items.cyber-threat-intelligence.deliverables.0
EN: Threat landscape report and monthly cadence updates
PL: Raport o krajobrazie zagrożeń i comiesięczne aktualizacje

### services.items.cyber-threat-intelligence.deliverables.1
EN: Curated IOCs and TTP narratives for security operations
PL: Wyselekcjonowane IOC i opisy TTP dla zespołu operacji bezpieczeństwa

### services.items.cyber-threat-intelligence.deliverables.2
EN: Direct analyst access for incident triage support
PL: Bezpośredni dostęp do analityka przy wstępnej ocenie incydentu

### services.items.investigations.title
EN: Investigations & Asset Tracing
PL: Dochodzenia i śledzenie aktywów

### services.items.investigations.short
EN: Sensitive investigations, fraud and corruption matters, and asset tracing in support of disputes.
PL: Dochodzenia w sprawach wrażliwych, nadużycia i korupcja, śledzenie aktywów na potrzeby sporów.

### services.items.investigations.lead
EN: Sensitive investigations, fraud and corruption matters, sanctions evasion, and asset tracing in support of disputes and recoveries. Engagements are delivered in coordination with outside counsel and under privilege where appropriate.
PL: Dochodzenia w sprawach wrażliwych, nadużycia, korupcja, obchodzenie sankcji oraz śledzenie aktywów na potrzeby sporów i odzyskiwania majątku. Działamy w koordynacji z zewnętrzną kancelarią, a gdy to zasadne — pod ochroną tajemnicy zawodowej.

### services.items.investigations.engagements.0
EN: Asset tracing across multiple jurisdictions in support of recovery proceedings
PL: Śledzenie aktywów w wielu jurysdykcjach na potrzeby postępowania o odzyskanie majątku

### services.items.investigations.engagements.1
EN: Sanctions-evasion mapping for a Western financial counterparty
PL: Mapowanie obchodzenia sankcji dla zachodniej instytucji finansowej

### services.items.investigations.engagements.2
EN: Internal investigation support for a regulated multinational
PL: Wsparcie dochodzenia wewnętrznego w regulowanej grupie międzynarodowej

### services.items.investigations.engagements.3
EN: Discreet enquiry into reputational and integrity allegations
PL: Dyskretne sprawdzenie zarzutów dotyczących reputacji i uczciwości

### services.items.investigations.scoping
EN: Counsel-led intake, privilege framework, and a written investigation plan.
PL: Przyjęcie zadania przez kancelarię, ramy tajemnicy zawodowej i pisemny plan dochodzenia.

### services.items.investigations.delivery
EN: Open-source, public-records and discreet human-source work to a defined evidentiary standard.
PL: Źródła otwarte, rejestry publiczne i dyskretne źródła osobowe — do ustalonego standardu dowodowego.

### services.items.investigations.handover
EN: Findings memorandum, exhibits binder, and witness or counsel briefing.
PL: Memorandum z ustaleniami, segregator dowodów oraz briefing dla kancelarii lub świadków.

### services.items.investigations.deliverables.0
EN: Findings memorandum suitable for use under privilege
PL: Memorandum z ustaleniami nadające się do użycia pod ochroną tajemnicy zawodowej

### services.items.investigations.deliverables.1
EN: Indexed exhibits and source register
PL: Zindeksowane dowody i rejestr źródeł

### services.items.investigations.deliverables.2
EN: Working session with counsel and, where requested, witness preparation
PL: Sesja robocza z kancelarią oraz, na życzenie, przygotowanie świadków

### services.items.monitorship-compliance.title
EN: Monitorships & Independent Compliance Reviews
PL: Monitorship i niezależne przeglądy compliance

### services.items.monitorship-compliance.short
EN: Court-, regulator-, or board-mandated monitorships and independent reviews.
PL: Funkcja niezależnego monitora i przeglądy zlecane przez sąd, regulatora lub zarząd.

### services.items.monitorship-compliance.lead
EN: Court-, regulator-, or board-mandated monitorships and independent reviews, including post-settlement compliance programmes. We are explicit about independence: we will not accept a monitorship where we hold a conflicting commercial interest.
PL: Funkcja niezależnego monitora (monitorship) i niezależne przeglądy zlecane przez sąd, regulatora lub zarząd, w tym programy compliance po zawarciu ugody. Niezależność traktujemy dosłownie: nie przyjmujemy monitorshipu tam, gdzie mamy sprzeczny interes handlowy.

### services.items.monitorship-compliance.engagements.0
EN: Independent monitor in a post-settlement compliance programme
PL: Niezależny monitor w programie compliance po zawarciu ugody

### services.items.monitorship-compliance.engagements.1
EN: Board-commissioned review of a compliance function
PL: Przegląd funkcji compliance na zlecenie zarządu

### services.items.monitorship-compliance.engagements.2
EN: Independent review of an internal investigation
PL: Niezależny przegląd dochodzenia wewnętrznego

### services.items.monitorship-compliance.engagements.3
EN: Programme assessment against EU and US enforcement expectations
PL: Ocena programu względem oczekiwań organów egzekwujących prawo w UE i USA

### services.items.monitorship-compliance.scoping
EN: Mandate definition, independence assessment, and stakeholder protocol.
PL: Określenie mandatu, ocena niezależności i protokół współpracy z interesariuszami.

### services.items.monitorship-compliance.delivery
EN: Document review, interviews, and field testing under a defined work plan.
PL: Przegląd dokumentów, rozmowy i testy w terenie według ustalonego planu prac.

### services.items.monitorship-compliance.handover
EN: Reporting to the appointing authority on the agreed cadence.
PL: Raportowanie do organu powołującego w uzgodnionym rytmie.

### services.items.monitorship-compliance.deliverables.0
EN: Independent reports to the court, regulator, or board
PL: Niezależne raporty dla sądu, regulatora lub zarządu

### services.items.monitorship-compliance.deliverables.1
EN: Findings, recommendations, and remediation tracking
PL: Ustalenia, zalecenia i śledzenie działań naprawczych

### services.items.monitorship-compliance.deliverables.2
EN: Annual or interim certifications as required
PL: Poświadczenia roczne lub śródokresowe, zgodnie z wymogami

### services.items.advisory-retainer.title
EN: CEO & Board Advisory Retainer
PL: Stałe doradztwo dla prezesów i zarządów

### services.items.advisory-retainer.short
EN: Always-on senior advisory to a small number of CEO, Chair, and Minister-level clients.
PL: Stały dostęp do doradcy na najwyższym szczeblu dla wąskiego grona prezesów, przewodniczących rad i ministrów.

### services.items.advisory-retainer.lead
EN: Always-on senior advisory to a small number of CEO, Chair, and Minister-level clients on geopolitical, regulatory, and reputational matters. Capacity is deliberately limited; we accept new retainers only where we can sustain a single point of contact at partner level.
PL: Stałe doradztwo na najwyższym szczeblu dla wąskiego grona prezesów, przewodniczących rad i ministrów — w sprawach geopolitycznych, regulacyjnych i reputacyjnych. Liczbę klientów ograniczamy celowo. Nowy mandat przyjmujemy tylko wtedy, gdy możemy utrzymać jedną osobę kontaktową na poziomie partnera.

### services.items.advisory-retainer.engagements.0
EN: Standing geopolitical advisory to a multinational chief executive
PL: Stałe doradztwo geopolityczne dla prezesa grupy międzynarodowej

### services.items.advisory-retainer.engagements.1
EN: Crisis communications and reputational counsel during a regulatory event
PL: Komunikacja kryzysowa i doradztwo reputacyjne w trakcie postępowania regulacyjnego

### services.items.advisory-retainer.engagements.2
EN: Confidential second-opinion work on sensitive board decisions
PL: Poufna druga opinia przy wrażliwych decyzjach zarządu

### services.items.advisory-retainer.engagements.3
EN: Discreet introductions and back-channel facilitation
PL: Dyskretne wprowadzenia i kanały nieoficjalne

### services.items.advisory-retainer.scoping
EN: Direct conversation with the principal and a short written engagement letter.
PL: Bezpośrednia rozmowa z mocodawcą i krótka pisemna umowa.

### services.items.advisory-retainer.delivery
EN: On-call access to a partner, with structured monthly cadence and ad-hoc work.
PL: Partner na wezwanie, stały rytm miesięczny i prace doraźne.

### services.items.advisory-retainer.handover
EN: Continuous — no formal handover; periodic relationship review.
PL: Współpraca ciągła — bez formalnego przekazania; okresowy przegląd relacji.

### services.items.advisory-retainer.deliverables.0
EN: Direct partner access and discreet counsel
PL: Bezpośredni dostęp do partnera i dyskretne doradztwo

### services.items.advisory-retainer.deliverables.1
EN: Confidential briefings on demand
PL: Poufne briefingi na żądanie

### services.items.advisory-retainer.deliverables.2
EN: Quarterly written outlook tailored to the principal's portfolio
PL: Kwartalna pisemna prognoza dopasowana do portfela mocodawcy

### services.brief.title
EN: Service brief
PL: Karta usługi

### services.brief.code
EN: Code
PL: Kod

### services.brief.pricing
EN: Pricing
PL: Wycena

### services.brief.pricingValue
EN: On request
PL: Na zapytanie

### services.brief.delivery
EN: Delivery
PL: Realizacja

### services.brief.deliveryValue
EN: EU sovereign
PL: W ramach UE

### services.brief.others
EN: Services
PL: Usługi

## about

### about.eyebrow
EN: About
PL: O nas

### about.title
EN: Who We Are.
PL: Kim jesteśmy.

### about.whoTitle
EN: An EU-Sovereign Private Intelligence Firm.
PL: Prywatna firma wywiadowcza, suwerenna w ramach UE.

### about.whoBody1
EN: ELEARS is a Wrocław-headquartered private intelligence firm. We combine an AI-native platform with a senior services bench drawn from former intelligence, prosecutorial, diplomatic, and investigative-journalism backgrounds. Our analysts work in Polish, Russian, Ukrainian, German and English.
PL: ELEARS to prywatna firma wywiadowcza z siedzibą we Wrocławiu. Łączymy własną platformę AI z zespołem doświadczonych praktyków wywodzących się ze służb wywiadowczych, prokuratury, dyplomacji i dziennikarstwa śledczego. Analitycy pracują w językach polskim, rosyjskim, ukraińskim, niemieckim i angielskim.

### about.whoBody2
EN: We serve three audiences: NATO and EU defence buyers; global law firms and multinationals operating in the region; and Polish and CEE enterprises with cross-border exposure. We are independent of any client, government, or vendor.
PL: Pracujemy dla trzech grup odbiorców: zamawiających z sektora obronnego NATO i UE; międzynarodowych kancelarii i korporacji działających w regionie; oraz polskich i środkowoeuropejskich przedsiębiorstw z ekspozycją transgraniczną. Jesteśmy niezależni od każdego klienta, rządu i dostawcy.

### about.heritageTitle
EN: On the Name.
PL: O nazwie.

### about.heritageCaption
EN: Elear banner
PL: Chorągiew elearska

### about.heritageBody
EN: ELEARS renders the Polish chorągiew elearska — the period name for the Lisowczycy, the elite 17th-century Polish-Lithuanian light cavalry famed for cross-border reconnaissance, autonomy, and intelligence-gathering for the Crown. They were Polish-led and allied-deployed. The continuity is not aesthetic; it is operational.
PL: ELEARS to angielska forma polskiej chorągwi elearskiej — dawnej nazwy Lisowczyków, elitarnej lekkiej jazdy polsko-litewskiej XVII wieku, słynącej z rozpoznania za granicą, samodzielności i zdobywania informacji dla Korony. Dowodzili nimi Polacy, walczyli u boku sojuszników. Ta ciągłość nie jest estetyczna. Jest operacyjna.

### about.leadershipTitle
EN: Leadership
PL: Kierownictwo

### about.leadershipNote
EN: Leadership names and biographies are confirmed at the point of mandate.
PL: Nazwiska i biogramy kierownictwa potwierdzamy w chwili przyjęcia zadania.

### about.ethicsTitle
EN: Ethics & Governance
PL: Etyka i zasady działania

### about.ethicsBullets.0
EN: Independent. We do not accept contingent fees on outcomes that create legal exposure.
PL: Niezależność. Nie przyjmujemy wynagrodzenia uzależnionego od wyniku, jeśli tworzy to ryzyko prawne.

### about.ethicsBullets.1
EN: We do not accept mandates targeting journalists, activists, or whistleblowers.
PL: Nie przyjmujemy zadań wymierzonych w dziennikarzy, aktywistów ani sygnalistów.

### about.ethicsBullets.2
EN: Aligned with the GDPR and the EU AI Act; data and infrastructure inside the European Union.
PL: Zgodność z RODO i unijnym aktem o sztucznej inteligencji; dane i infrastruktura na terytorium Unii Europejskiej.

### about.ethicsBullets.3
EN: Conflicts-of-interest protocol applied at intake and throughout the engagement.
PL: Procedura konfliktu interesów stosowana przy przyjęciu zadania i przez cały czas jego realizacji.

### about.ethicsBullets.4
EN: Analyst-in-the-loop on all AI-generated outputs; no unsupervised model output leaves the firm.
PL: Analityk w pętli przy każdym wyniku generowanym przez AI; żaden niezweryfikowany wynik modelu nie opuszcza firmy.

### about.registrationsTitle
EN: Memberships & Registrations
PL: Członkostwa i rejestracje

### about.registrations.0
EN: Security clearance — obtained
PL: Poświadczenie bezpieczeństwa — uzyskane

### about.registrations.1
EN: ISO/IEC 27001 — in progress
PL: ISO/IEC 27001 — w toku

### about.registrations.2
EN: SOC 2 — in progress
PL: SOC 2 — w toku

### about.leadership.companiesLabel
EN: Previously
PL: Wcześniej

### about.leadership.photoWithheld
EN: Portrait withheld
PL: Wizerunek zastrzeżony

### about.leadership.redactedTag
EN: REDACTED
PL: UTAJNIONO

### about.leadership.fileLabel
EN: FILE
PL: AKTA

### about.leadership.ceo.role
EN: Chief Executive Officer
PL: Prezes Zarządu

### about.leadership.ceo.bio
EN: Ex-military. 20 years in business.
PL: Były wojskowy. 20 lat w biznesie.

### about.leadership.intelligence.role
EN: Head of Intelligence
PL: Szef Wywiadu

### about.leadership.intelligence.bio
EN: Ex-military. Technology leader and visionary; information security and defence practitioner.
PL: Były wojskowy. Lider technologiczny i wizjoner; praktyk bezpieczeństwa informacji i obronności.

### about.leadership.investigations.role
EN: Head of Investigations
PL: Szef Dochodzeń

### about.leadership.investigations.bio
EN: A decade conducting investigations and target analysis for C-suite leaders and clients in government, defence, healthcare and finance.
PL: Dekada dochodzeń i analizy celów dla zarządów oraz klientów z sektora rządowego, obronnego, ochrony zdrowia i finansów.

### about.leadership.cyber.role
EN: Head of Cyber
PL: Szef Cyberbezpieczeństwa

### about.leadership.cyber.bio
EN: 15 years of building Tier 1 infrastructure. AI Architect.
PL: 15 lat budowania infrastruktury klasy Tier 1. Architekt AI.

## insights

### insights.eyebrow
EN: Insights
PL: Analizy

### insights.title
EN: Analysis from the Firm.
PL: Analizy firmy.

### insights.lead
EN: Selected commentary on geopolitics, cyber, and investigations. We publish sparingly.
PL: Wybrane komentarze o geopolityce, cyberzagrożeniach i dochodzeniach. Publikujemy rzadko i celowo.

### insights.readingTime
EN: {minutes} min read
PL: {minutes} min czytania

### insights.more
EN: More from ELEARS
PL: Więcej z ELEARS

### insights.draftBanner
EN: DRAFT — placeholder content. Not for publication.
PL: WERSJA ROBOCZA — treść zastępcza. Nie do publikacji.

### insights.tag
EN: Tag
PL: Tag

### insights.publishedOn
EN: Published
PL: Opublikowano

### insights.byAuthor
EN: By {author}
PL: Autor: {author}

## contact

### contact.eyebrow
EN: Contact
PL: Kontakt

### contact.title
EN: Get in Touch.
PL: Kontakt.

### contact.lead
EN: We respond to qualified enquiries within one business day.
PL: Na konkretne zapytania odpowiadamy w ciągu jednego dnia roboczego.

### contact.general
EN: General
PL: Sprawy ogólne

### contact.press
EN: Press
PL: Media

### contact.careers
EN: Careers
PL: Kariera

### contact.office
EN: Office
PL: Biuro

### contact.officeBody
EN: Wrocław, Poland
PL: Wrocław, Polska

### contact.mapLabel
EN: Map of Europe, the Middle East and North Africa. ELEARS’s area of operations covers Europe, the Middle East and North Africa; Central and Eastern Europe and Poland are highlighted, with the headquarters marked in Wrocław at 51.1079°N 17.0385°E.
PL: Mapa Europy, Bliskiego Wschodu i Afryki Północnej. Obszar działania ELEARS obejmuje Europę, Bliski Wschód i Afrykę Północną; wyróżniono Europę Środkowo-Wschodnią i Polskę, siedzibę zaznaczono we Wrocławiu, 51,1079°N 17,0385°E.

### contact.mapPin
EN: WROCŁAW · HQ
PL: WROCŁAW · SIEDZIBA

### contact.mapLegendHome
EN: Poland
PL: Polska

### contact.mapLegendRegion
EN: Central & Eastern Europe
PL: Europa Środkowo-Wschodnia

### contact.secureTitle
EN: Secure Introductions
PL: Bezpieczny kontakt

### contact.secureBody
EN: We accept encrypted introductions over Signal and PGP. Fingerprints below; please verify out-of-band before sharing sensitive material.
PL: Przyjmujemy szyfrowane wiadomości przez Signal i PGP. Odciski kluczy poniżej; przed przesłaniem materiałów wrażliwych prosimy zweryfikować je innym kanałem.

### contact.signal
EN: Signal
PL: Signal

### contact.pgp
EN: PGP fingerprint
PL: Odcisk klucza PGP

### contact.responseTitle
EN: Response time
PL: Czas reakcji

### contact.responseBody
EN: Qualified enquiries: one business day. Press: same day, where possible.
PL: Konkretne zapytania: jeden dzień roboczy. Media: w miarę możliwości tego samego dnia.

### contact.mapLegendOps
EN: Area of operations
PL: Obszar działania

### contact.mapLegendOpsDetail
EN: Europe · Middle East · North Africa
PL: Europa · Bliski Wschód · Afryka Północna

## legal

### legal.draftBanner
EN: DRAFT — review by Polish-qualified counsel before launch.
PL: WERSJA ROBOCZA — przed publikacją wymaga przeglądu przez prawnika z polskimi uprawnieniami.

### legal.privacy.eyebrow
EN: Legal
PL: Informacje prawne

### legal.privacy.title
EN: Privacy Policy
PL: Polityka prywatności

### legal.privacy.intro
EN: This page describes how ELEARS processes personal data collected through this website.
PL: Ta strona opisuje, w jaki sposób ELEARS przetwarza dane osobowe zbierane za pośrednictwem serwisu.

### legal.terms.eyebrow
EN: Legal
PL: Informacje prawne

### legal.terms.title
EN: Terms of Use
PL: Regulamin serwisu

### legal.terms.intro
EN: This website is provided for informational purposes only. The terms below govern its use.
PL: Serwis ma charakter wyłącznie informacyjny. Zasady korzystania określa poniższy regulamin.

### legal.cookies.eyebrow
EN: Legal
PL: Informacje prawne

### legal.cookies.title
EN: Cookie Policy
PL: Polityka plików cookie

### legal.cookies.intro
EN: This website does not use tracking cookies. Below is an exhaustive description of what is stored on your device.
PL: Serwis nie używa śledzących plików cookie. Poniżej pełny opis tego, co zapisujemy na Państwa urządzeniu.

## footer

### footer.tagline
EN: EU-sovereign private intelligence. Wrocław, Poland.
PL: Prywatny wywiad, suwerenny w ramach UE. Wrocław, Polska.

### footer.servicesHeading
EN: Services
PL: Usługi

### footer.firmHeading
EN: Firm
PL: Firma

### footer.legalHeading
EN: Legal
PL: Informacje prawne

### footer.careers
EN: Careers
PL: Kariera

### footer.rights
EN: All rights reserved.
PL: Wszelkie prawa zastrzeżone.

### footer.company
EN: ELEARS sp. z o.o.
PL: ELEARS sp. z o.o.

### footer.location
EN: Wrocław · Poland
PL: Wrocław · Polska

## cookieBanner

### cookieBanner.label
EN: Cookie notice
PL: Informacja o plikach cookie

### cookieBanner.message
EN: This site uses no tracking cookies. Only your locale preference is stored on your device.
PL: Serwis nie używa śledzących plików cookie. Na urządzeniu zapisujemy wyłącznie wybrany język.

### cookieBanner.ack
EN: Acknowledge
PL: Rozumiem

## notFound

### notFound.title
EN: Page Not Found.
PL: Nie znaleziono strony.

### notFound.body
EN: The page you requested does not exist.
PL: Strona, której Państwo szukają, nie istnieje.

### notFound.home
EN: Return home
PL: Powrót na stronę główną
