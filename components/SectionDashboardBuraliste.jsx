import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Badge,
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Field,
  FieldLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toggle,
  ToggleGroup,
} from "@appica/ui-react";
import {
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  ShoppingBag,
  DollarSign,
  Clock,
  CheckCircle2,
  Sparkles,
  BarChart3,
  ArrowRight,
  Check,
  Plus,
  Eye,
  QrCode,
  Scan,
  CalendarRange,
} from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

/* Libellés des besoins client : la valeur stockée diffère du texte affiché,
   comme dans le <select> natif d'origine. */
const LEAD_SERVICE_LABELS = {
  "Assurance Multirisque Commerce": "Assurance Multirisque Commerce (Locaux, Stocks)",
  "Télésurveillance & Alarme Homiris": "Télésurveillance & Alarme Locaux",
  "Complémentaire Santé & Prévoyance TNS": "Complémentaire Santé & Prévoyance",
  "Assurance Auto & Flotte Professionnelle": "Assurance Flotte Pro",
};

const TREND_CARDS = [
  {
    icon: Sparkles,
    title: "Vapotage & E-liquides fruités",
    peak: "Pic de passage : vendredis et samedis soirs",
    tag: "Forte demande",
    advice:
      "disposez vos meilleures saveurs directement devant la caisse dès 16h pour capter les achats d'impulsion du week-end.",
  },
  {
    icon: ShoppingBag,
    title: "Pause Café & Snacking rapide",
    peak: "Pic de passage : tous les matins de 07h à 09h",
    tag: "Flux matinal",
    advice:
      "mettez en avant une formule café à emporter + confiserie dès l'ouverture pour les travailleurs du quartier.",
  },
  {
    icon: LayoutDashboard,
    title: "Retrait de colis (Mondial Relay / UPS)",
    peak: "Pic de passage : fin de journée de 17h30 à 19h30",
    tag: "Trafic garanti",
    advice:
      "vos horaires clairs sur votre site vitrine rassurent les clients colis et facilitent les achats complémentaires en caisse.",
  },
  {
    icon: ShieldCheck,
    title: "Produits bien-être & CBD",
    peak: "Pic de passage : en soirée en semaine",
    tag: "En croissance",
    advice:
      "présentez vos gammes conformes sur votre catalogue web pour attirer une clientèle régulière en boutique.",
  },
];

// Gestion de la temporalité : les mêmes compteurs se lisent au jour, à la
// semaine ou au mois. On part d'un volume mensuel de référence et on le
// ramène à la période choisie plutôt que de maintenir 3 jeux de chiffres.
const PERIODS = [
  { id: 'day', label: 'Jour', shortLabel: '/ jour', divisor: 30.4, trendNote: 'vs hier' },
  { id: 'week', label: 'Semaine', shortLabel: '/ semaine', divisor: 4.35, trendNote: 'vs semaine dernière' },
  { id: 'month', label: 'Mois', shortLabel: '/ mois', divisor: 1, trendNote: 'vs mois précédent' },
];

const TRAFFIC_METRICS_BASE = [
  { label: "Visites totales sur le site", monthly: 1420, trendPercent: 28, valueClass: "text-foreground-intense" },
  { label: "Consultations d'horaires", monthly: 840, note: "Évite les clients devant porte close", valueClass: "text-foreground-intense" },
  { label: "Itinéraires Google Maps", monthly: 185, note: "Clients guidés jusqu'à votre porte", valueClass: "text-indigo-700" },
  { label: "Appels en 1 clic", monthly: 92, note: "Pour vérifier un arrivage presse ou colis", valueClass: "text-primary-base" },
];

function scaleForPeriod(monthly, divisor) {
  return Math.max(1, Math.round(monthly / divisor));
}

function getTrafficMetrics(period) {
  return TRAFFIC_METRICS_BASE.map((m) => ({
    ...m,
    value: scaleForPeriod(m.monthly, period.divisor).toLocaleString('fr-FR'),
    note: m.trendPercent ? `+${m.trendPercent}% ${period.trendNote}` : m.note,
    noteClass: m.trendPercent ? "text-emerald-700 font-bold" : "text-foreground-muted font-medium",
  }));
}

/* Libellé de la période affichée, calculé sur la date du jour (semaine du
   lundi au dimanche). */
function getPeriodDateRangeLabel(periodId) {
  const now = new Date();
  if (periodId === 'day') {
    return new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(now);
  }
  if (periodId === 'month') {
    const label = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(now);
    return label.charAt(0).toUpperCase() + label.slice(1);
  }
  const diffToMonday = (now.getDay() + 6) % 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - diffToMonday);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const sameMonth = monday.getMonth() === sunday.getMonth();
  const start = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: sameMonth ? undefined : 'long' }).format(monday);
  const end = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(sunday);
  return `Semaine du ${start} au ${end}`;
}

const TOP_SEARCHES = [
  { term: "« tabac ouvert maintenant »", clicks: "412 clics" },
  { term: "« puff rechargeable buraliste »", clicks: "289 clics" },
  { term: "« point relais colis dimanche »", clicks: "245 clics" },
  { term: "« timbres fiscaux à proximité »", clicks: "188 clics" },
  { term: "« cigares conservation cave »", clicks: "142 clics" },
  { term: "« recharge vapotage cbd »", clicks: "114 clics" },
];

export default function SectionDashboardBuraliste({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState("overview"); // overview | commissions | orders | trends | traffic
  const [periodId, setPeriodId] = useState("week"); // day | week | month : granularité des indicateurs de fréquentation
  const period = PERIODS.find((p) => p.id === periodId) ?? PERIODS[1];
  const periodDateRangeLabel = getPeriodDateRangeLabel(periodId);
  const trafficMetrics = getTrafficMetrics(period);
  const [selectedOrderForDeepDive, setSelectedOrderForDeepDive] = useState(null);
  const [selectedCommissionForDeepDive, setSelectedCommissionForDeepDive] = useState(null);
  const [scanSuccessToast, setScanSuccessToast] = useState(null);

  // États dynamiques interactifs pour les commissions
  const [commissionsList, setCommissionsList] = useState([
    {
      id: "COM-104",
      client: "M. Lefebvre (Artisan BTP)",
      service: "Assurance Multirisque Locaux & Flotte Pro",
      amount: 150,
      date: "18 sept. 2026",
      status: "validated",
      payoutDate: "Le 05/10/2026",
      note: "Dossier finalisé par Services Indep. Virement programmé."
    },
    {
      id: "COM-103",
      client: "Mme Delorme (Particulier)",
      service: "Télésurveillance & Alarme Homiris",
      amount: 150,
      date: "15 sept. 2026",
      status: "validated",
      payoutDate: "Le 05/10/2026",
      note: "Installation effectuée. Contrat actif validé."
    },
    {
      id: "COM-102",
      client: "M. Benali (Commerçant voisin)",
      service: "Complémentaire Santé & Prévoyance TNS",
      amount: 150,
      date: "12 sept. 2026",
      status: "pending",
      payoutDate: "En cours d’étude",
      note: "Rendez-vous téléphonique mené par Services Indep."
    }
  ]);

  // Modal d’ajout express d’un prospect
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ client: "", service: "Assurance Multirisque Commerce", phone: "" });
  const [leadSuccessMsg, setLeadSuccessMsg] = useState(null);

  // États dynamiques interactifs pour les commandes Click & Collect
  const [ordersList, setOrdersList] = useState([
    {
      id: "#4892",
      client: "Alexandre B.",
      items: "2x E-liquides Menthe Polaire 10ml + 1x Huile CBD Bio 10%",
      total: 42.00,
      paidOnline: true,
      time: "Il y a 14 min",
      status: "ready", // ready | delivered
    },
    {
      id: "#4891",
      client: "Sophie M.",
      items: "1x Pack Pods Rechargeables Vuse + 1x Pochette tabac cuir",
      total: 36.50,
      paidOnline: false,
      time: "Il y a 38 min",
      status: "ready",
    },
    {
      id: "#4890",
      client: "Laurent D.",
      items: "3x Cigares cubains Romeo y Julieta + 1x Coupe-cigare inox",
      total: 68.00,
      paidOnline: true,
      time: "Il y a 2h",
      status: "delivered",
    }
  ]);

  // Calculs dynamiques
  const validatedCommissions = commissionsList.filter(c => c.status === "validated");
  const totalCommissionsAmount = validatedCommissions.reduce((acc, curr) => acc + curr.amount, 0);
  const pendingOrdersCount = ordersList.filter(o => o.status === "ready").length;
  const netEstimatedMonthlyProfit = totalCommissionsAmount - 149; // Total commissions - abonnement 149€

  // Action : valider la remise au comptoir
  const toggleOrderStatus = (orderId) => {
    setOrdersList(prev => prev.map(order => {
      if (order.id === orderId) {
        return {
          ...order,
          status: order.status === "ready" ? "delivered" : "ready"
        };
      }
      return order;
    }));
  };

  // Action : ajouter une nouvelle commande simulée
  const handleSimulateNewOrder = () => {
    const randomId = `#48${Math.floor(Math.random() * 90 + 93)}`;
    const newOrder = {
      id: randomId,
      client: "Nouveau Client Comptoir",
      items: "1x Boîte Pods Fruits Rouges + 2x Briquets Clipper métal",
      total: 24.50,
      paidOnline: true,
      time: "À l’instant",
      status: "ready"
    };
    setOrdersList([newOrder, ...ordersList]);
  };

  // Action : soumettre un nouveau lead d’opportunité
  const handleAddLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadForm.client.trim()) return;

    const newId = `COM-${Math.floor(Math.random() * 800 + 105)}`;
    const newLead = {
      id: newId,
      client: leadForm.client,
      service: leadForm.service,
      amount: 150,
      date: "Aujourd’hui",
      status: "validated",
      payoutDate: "Le 05 du mois prochain",
      note: "Dossier transmis avec succès à Services Indep."
    };

    setCommissionsList([newLead, ...commissionsList]);
    setLeadSuccessMsg(`Opportunité enregistrée pour ${leadForm.client} ! +150 € ajoutés à votre simulation.`);
    setShowAddLeadModal(false);
    setLeadForm({ client: "", service: "Assurance Multirisque Commerce", phone: "" });

    setTimeout(() => {
      setLeadSuccessMsg(null);
    }, 6000);
  };

  // Action express : scan douchette ou code retrait en 1 seconde (zéro effort)
  const handleScanExpress = (orderId = null) => {
    const target = orderId
      ? ordersList.find(o => o.id === orderId)
      : (ordersList.find(o => o.status === "ready") || ordersList[0]);
    if (!target) return;

    setOrdersList(prev => prev.map(order => {
      if (order.id === target.id) {
        return { ...order, status: "delivered" };
      }
      return order;
    }));

    setScanSuccessToast(`Bip douchette validé en 1 seconde · Commande ${target.id} (${target.client}) remise avec succès !`);
    setTimeout(() => {
      setScanSuccessToast(null);
    }, 5000);
  };

  return (
    <section id="section-dashboard" className="pt-6 sm:pt-8 bg-transparent">

      {/* 1. Grand En-Tête Lumineux Centré */}
      <div className="bg-transparent text-foreground-intense py-16 sm:py-20 border-b border-border-subtle text-center">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6">
            <SectionEyebrow icon={LayoutDashboard}>
              ESPACE BURALISTE · CONSOLE COMMERÇANTE
            </SectionEyebrow>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] text-foreground-intense mb-6">
            Votre poste de pilotage épuré, <br />
            <span className="text-gradient-gold">conçu pour vous faire gagner du temps et de l'argent.</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-strong max-w-6xl mx-auto leading-relaxed font-normal">
            Accessible depuis n’importe quel ordinateur, tablette ou écran de caisse. Zéro paramétrage technique, zéro formation requise : tout est lisible, fluide et utilisable immédiatement à tout âge.
          </p>

          {/* 3 piliers de réassurance */}
          <Separator className="mt-8" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-8 text-base sm:text-lg text-foreground-strong font-semibold">
            <div className="inline-flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-base shrink-0" />
              <span className="leading-tight">Prise en main en 30 secondes chrono</span>
            </div>
            <div className="inline-flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-base shrink-0" />
              <span className="leading-tight">Commissions partenaires tracées au centime près</span>
            </div>
            <div className="inline-flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-base shrink-0" />
              <span className="leading-tight">Radar tendances d'achats de votre quartier</span>
            </div>
          </div>

        </div>
      </div>

      {/* Message Toast de succès de simulation */}
      {leadSuccessMsg && (
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <Alert
            variant="success"
            layout="inline"
            dismissible
            onOpenChange={(open) => { if (!open) setLeadSuccessMsg(null); }}
            closeLabel="Fermer"
            className="rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-900 shadow-sm"
          >
            <AlertIcon>
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            </AlertIcon>
            <AlertDescription className="font-bold text-sm sm:text-base text-emerald-900">
              {leadSuccessMsg}
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Toast scan douchette caisse express */}
      {scanSuccessToast && (
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <Alert
            layout="inline"
            dismissible
            onOpenChange={(open) => { if (!open) setScanSuccessToast(null); }}
            closeLabel="Fermer"
            className="rounded-2xl bg-foreground-intense text-white border-2 border-emerald-400 shadow-xl"
          >
            <AlertIcon>
              <Scan className="w-6 h-6 text-emerald-400 shrink-0 animate-pulse" />
            </AlertIcon>
            <AlertDescription className="font-bold text-sm sm:text-base text-white">
              {scanSuccessToast}
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* 2. LE TABLEAU DE BORD COMMERCIAL DE PRESTIGE (PLEINE LARGEUR, THÈME BLANC / PERLE LUXE) */}
      <div className="py-10 sm:py-16">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Console Principale */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            variant="pill"
            className="bg-white rounded-[32px] border border-border-subtle shadow-xl overflow-hidden"
          >

            {/* Barre d'en-tête supérieure de la console : toujours empilée
                (nom du commerce, puis onglets pleine largeur) plutôt que
                côte à côte à partir de xl, ce qui condamnait les onglets à
                une largeur trop étroite et forçait un défilement horizontal. */}
            <div className="bg-surface-subtle border-b border-border-subtle p-6 sm:p-8 space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-subtle border border-primary-soft flex items-center justify-center text-primary-base shrink-0 shadow-xs">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-display font-black text-xl sm:text-2xl text-foreground-intense">
                      Tabac Presse &amp; FDJ du Centre
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground-muted mt-1 font-medium">
                    Compte Commerçant Buraliste certifié · Partenaire Services Indep &amp; AVENTATE
                  </p>
                </div>
              </div>

              {/* Barre d'onglets : passe à la ligne plutôt que défiler, les
                  5 onglets restent donc toujours entièrement visibles. */}
              <TabsList
                aria-label="Sections de la console"
                className="flex-wrap gap-2 bg-surface-strong/80 p-1.5 rounded-2xl w-full"
              >
                <TabsTrigger
                  value="overview"
                  className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap flex items-center gap-2 data-selected:bg-white data-selected:text-foreground-intense data-selected:shadow-sm data-selected:ring-1 data-selected:ring-primary-soft"
                >
                  <LayoutDashboard className="w-4 h-4 text-primary-base" />
                  <span>Vue d'ensemble</span>
                </TabsTrigger>

                <TabsTrigger
                  value="commissions"
                  className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap flex items-center gap-2 data-selected:bg-white data-selected:text-foreground-intense data-selected:shadow-sm data-selected:ring-1 data-selected:ring-primary-soft"
                >
                  <DollarSign className="w-4 h-4 text-primary-base" />
                  <span>Commissions ({totalCommissionsAmount} €)</span>
                </TabsTrigger>

                <TabsTrigger
                  value="orders"
                  className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap flex items-center gap-2 data-selected:bg-white data-selected:text-foreground-intense data-selected:shadow-sm data-selected:ring-1 data-selected:ring-primary-soft"
                >
                  <ShoppingBag className="w-4 h-4 text-primary-base" />
                  <span>Commandes</span>
                  {pendingOrdersCount > 0 && (
                    <Badge
                      variant="success"
                      size="xs"
                      className="px-2 py-0.5 bg-emerald-600 text-white text-[11px] font-black"
                    >
                      {pendingOrdersCount}
                    </Badge>
                  )}
                </TabsTrigger>

                <TabsTrigger
                  value="trends"
                  className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap flex items-center gap-2 data-selected:bg-white data-selected:text-foreground-intense data-selected:shadow-sm data-selected:ring-1 data-selected:ring-primary-soft"
                >
                  <Sparkles className="w-4 h-4 text-primary-base" />
                  <span>Radar Quartier</span>
                </TabsTrigger>

                <TabsTrigger
                  value="traffic"
                  className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap flex items-center gap-2 data-selected:bg-white data-selected:text-foreground-intense data-selected:shadow-sm data-selected:ring-1 data-selected:ring-primary-soft"
                >
                  <BarChart3 className="w-4 h-4 text-primary-base" />
                  <span>Fréquentation Google</span>
                </TabsTrigger>
              </TabsList>

            </div>

            {/* Corps de la Console */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-white">

              {/* Sélecteur de période : les compteurs de fréquentation se
                  lisent au jour, à la semaine ou au mois, pour savoir où
                  on en est jour par jour ou semaine par semaine. */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground-muted font-medium">
                  <CalendarRange className="w-4 h-4 text-primary-base shrink-0" />
                  <span>{periodDateRangeLabel}</span>
                </div>
                <ToggleGroup
                  value={[periodId]}
                  onValueChange={(v) => { if (v.length) setPeriodId(v[0]); }}
                  aria-label="Période des indicateurs"
                  className="inline-flex items-center gap-1 bg-surface-muted p-1 rounded-xl self-start sm:self-auto"
                >
                  {PERIODS.map((p) => (
                    <Toggle
                      key={p.id}
                      value={p.id}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all data-pressed:bg-foreground-intense data-pressed:text-white data-pressed:shadow-sm"
                    >
                      {p.label}
                    </Toggle>
                  ))}
                </ToggleGroup>
              </div>

              {/* 4 GRANDES CARTES KPI INTERACTIVES (EN CLIC RAPIDE VERS LES ONGLETS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* KPI 1 : Commissions cumulées */}
                <Card
                  render={<button type="button" onClick={() => setActiveTab("commissions")} />}
                  className="[--card-radius:1rem] text-left hover:shadow-md transition-all cursor-pointer group"
                  contentProps={{
                    className: 'bg-surface-subtle p-6 hover:border-primary-base/50 transition-colors',
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                      Commissions validées ce mois
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center group-hover:scale-110 transition-transform">
                      <DollarSign className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-gradient-gold">
                      {totalCommissionsAmount} €
                    </span>
                    <Badge variant="success" size="xs" className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-200">
                      +{commissionsList[0]?.amount || 150} € récent
                    </Badge>
                  </div>
                </Card>

                {/* KPI 2 : Commandes Click & Collect */}
                <Card
                  render={<button type="button" onClick={() => setActiveTab("orders")} />}
                  className="[--card-radius:1rem] text-left hover:shadow-md transition-all cursor-pointer group"
                  contentProps={{
                    className: 'bg-surface-subtle p-6 hover:border-emerald-400 transition-colors',
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                      Click &amp; Collect en attente
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-foreground-intense">
                      {pendingOrdersCount}
                    </span>
                    <span className="text-xs font-bold text-foreground-muted">
                      paniers prêts au comptoir
                    </span>
                  </div>
                </Card>

                {/* KPI 3 : Fréquentation & Google Maps */}
                <Card
                  render={<button type="button" onClick={() => setActiveTab("traffic")} />}
                  className="[--card-radius:1rem] text-left hover:shadow-md transition-all cursor-pointer group"
                  contentProps={{
                    className: 'bg-surface-subtle p-6 hover:border-indigo-400 transition-colors',
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                      Fréquentation Digitale
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-foreground-intense">
                      {scaleForPeriod(TRAFFIC_METRICS_BASE[0].monthly, period.divisor).toLocaleString('fr-FR')}
                    </span>
                    <Badge variant="secondary" size="xs" className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                      visites {period.shortLabel}
                    </Badge>
                  </div>
                </Card>

                {/* KPI 4 : Bénéfice net estimé */}
                <Card
                  className="[--card-radius:1rem] shadow-sm"
                  contentProps={{
                    className:
                      'bg-gradient-to-br from-primary-subtle/50 via-white to-primary-subtle/30 p-6 border-2 border-primary-base',
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-strong">
                      Bénéfice Net Réel Estimé
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-primary-base text-white flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-emerald-700">
                      +{Math.max(0, netEstimatedMonthlyProfit)} €
                    </span>
                    <span className="text-xs font-bold text-foreground-muted">
                      net / mois
                    </span>
                  </div>
                </Card>

              </div>

              {/* ========================================================= */}
              {/* ONGLET 1 : VUE D'ENSEMBLE                                */}
              {/* ========================================================= */}
              <TabsContent value="overview" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Colonne gauche (7 cols) : Activités récentes & Actions rapides */}
                  <div className="lg:col-span-7 space-y-6">

                    {/* Bloc Commandes Click & Collect express */}
                    <Card
                      className="[--card-radius:1rem]"
                      contentProps={{ className: 'bg-surface-subtle p-6 sm:p-8 space-y-5' }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <ShoppingBag className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-lg text-foreground-intense">
                              Commandes Click &amp; Collect prêtes au comptoir
                            </h3>
                            <p className="text-xs text-foreground-muted">
                              Le client a commandé en ligne, le panier est déjà prêt.
                            </p>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleSimulateNewOrder}
                          className="rounded-xl text-xs font-bold shadow-xs"
                        >
                          <Plus className="w-3.5 h-3.5 text-primary-base" />
                          <span>Simuler une commande</span>
                        </Button>
                      </div>

                      {/* Liste des commandes */}
                      <div className="space-y-3">
                        {ordersList.slice(0, 3).map(order => (
                          <div
                            key={order.id}
                            className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                              order.status === "ready"
                                ? "bg-white border-emerald-300 shadow-xs"
                                : "bg-surface-muted/80 border-border-subtle opacity-75"
                            }`}
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-black uppercase tracking-wider text-foreground-intense">
                                  {order.id} · {order.client}
                                </span>
                                <span className="text-xs text-foreground-subtle">· {order.time}</span>
                                {order.paidOnline ? (
                                  <Badge variant="success" size="xs" className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                                    Payé en ligne
                                  </Badge>
                                ) : (
                                  <Badge variant="soft" size="xs" className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary-subtle text-primary-strong border border-primary-soft before:bg-transparent">
                                    À régler sur place
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm font-medium text-foreground-strong">
                                {order.items}
                              </p>
                              <span className="text-xs font-black text-foreground-intense">
                                Total : {order.total.toFixed(2)} €
                              </span>
                            </div>

                            <Button
                              size="sm"
                              onClick={() => toggleOrderStatus(order.id)}
                              className={`rounded-xl text-xs font-black shrink-0 ${
                                order.status === "ready"
                                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow"
                                  : "bg-surface-strong hover:bg-border-strong text-foreground-strong"
                              }`}
                            >
                              <Check className="w-4 h-4" />
                              <span>{order.status === "ready" ? "Valider remise (1 clic)" : "Déjà remis · Annuler"}</span>
                            </Button>
                          </div>
                        ))}
                      </div>

                    </Card>

                    {/* Bloc Commissions récentes express */}
                    <Card
                      className="[--card-radius:1rem]"
                      contentProps={{ className: 'bg-surface-subtle p-6 sm:p-8 space-y-5' }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-lg text-foreground-intense">
                              Dernières commissions partenaires générées
                            </h3>
                            <p className="text-xs text-foreground-muted">
                              Services Indep prend tout en charge · Vous touchez votre commission.
                            </p>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          onClick={() => setShowAddLeadModal(true)}
                          className="aventate-glow-button rounded-xl text-xs font-black shadow-xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Déclarer un client</span>
                        </Button>
                      </div>

                      <div className="space-y-3">
                        {commissionsList.slice(0, 2).map(c => (
                          <div key={c.id} className="p-4 rounded-xl bg-white border border-border-subtle flex items-center justify-between gap-4 shadow-xs">
                            <div className="flex items-center gap-3.5">
                              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                                <Check className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="text-sm font-bold text-foreground-intense block">
                                  {c.service} · {c.client}
                                </span>
                                <span className="text-xs text-foreground-muted">
                                  {c.note}
                                </span>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="font-display font-black text-lg text-emerald-700 block">
                                +{c.amount} €
                              </span>
                              <span className="text-[11px] font-bold text-foreground-subtle uppercase">
                                {c.payoutDate}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </Card>

                  </div>

                  {/* Colonne droite (5 cols) : Radar Quartier & Automatisation */}
                  <div className="lg:col-span-5 space-y-6">

                    {/* Carte Tendance Locale du Quartier */}
                    <Card
                      className="[--card-radius:1rem] shadow-sm"
                      contentProps={{
                        className:
                          'bg-gradient-to-br from-primary-subtle/50 via-white to-primary-subtle/30 border-2 border-primary-base p-6 sm:p-8 space-y-5',
                      }}
                    >
                      <Badge
                        variant="soft"
                        className="gap-2 px-3 py-1 bg-primary-soft text-primary-strong text-xs font-black uppercase tracking-wider before:bg-transparent"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-primary-base" />
                        <span>Opportunité du jour</span>
                      </Badge>

                      <h3 className="font-display font-black text-xl text-foreground-intense">
                        Forte hausse locale du vapotage fruits rouges (+44%)
                      </h3>

                      <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed font-medium">
                        Sur les 800 mètres autour de votre tabac, les recherches Google sur les puffs et e-liquides fruités explosent le vendredi après-midi.
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-primary-soft text-xs text-foreground-strong space-y-1.5 shadow-xs">
                        <strong className="text-primary-strong font-bold block">Action recommandée en caisse :</strong>
                        <p>Mettre en avant les recharges menthe et fruits rouges directement devant la caisse pour capter le passage du soir.</p>
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => setActiveTab("trends")}
                        className="w-full py-3 px-4 h-auto border-primary-base/40 hover:border-primary-base text-foreground-intense font-bold text-xs rounded-xl shadow-xs gap-2"
                      >
                        <span>Voir les 4 radars du quartier</span>
                        <ArrowRight className="w-4 h-4 text-primary-base" />
                      </Button>
                    </Card>

                    {/* Bouton Contacter Thomas */}
                    <Button
                      onClick={onOpenContact}
                      className="aventate-glow-button w-full h-auto py-4 px-6 font-black text-sm sm:text-base rounded-xl shadow-md gap-2"
                    >
                      <span>Activer mon Espace Buraliste avec Thomas M.</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                  </div>

                </div>
              </TabsContent>

              {/* ========================================================= */}
              {/* ONGLET 2 : COMMISSIONS D'AFFAIRES PARTENAIRES             */}
              {/* ========================================================= */}
              <TabsContent value="commissions" className="space-y-8">
                <Card
                  className="[--card-radius:1.5rem]"
                  contentProps={{ className: 'bg-surface-subtle p-6 sm:p-8' }}
                >

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border-subtle">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-primary-base block mb-1">
                        REVENUS PASSIFS SANS GESTION ADMINISTRATIVE
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                        Vos commissions partenaires en direct
                      </h3>
                      <p className="text-sm text-foreground-muted mt-1 font-medium">
                        Chaque client orienté vers une solution Assurance ou Alarme vous rapporte 150 € après validation.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => setShowAddLeadModal(true)}
                        className="aventate-glow-button px-5 py-3 h-auto font-black text-xs sm:text-sm rounded-xl shadow gap-2 whitespace-nowrap"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Déclarer une nouvelle opportunité (+150 €)</span>
                      </Button>
                    </div>
                  </div>

                  {/* Synthèse du mois */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
                    <Card className="[--card-radius:1rem] shadow-xs" contentProps={{ className: 'p-5' }}>
                      <span className="text-xs text-foreground-subtle font-bold uppercase block">Montant validé à virer</span>
                      <span className="font-display font-black text-3xl text-emerald-700 mt-1 block">
                        {totalCommissionsAmount} €
                      </span>
                      <span className="text-xs text-foreground-muted mt-1 block">Virement bancaire le 05 du mois</span>
                    </Card>
                    <Card className="[--card-radius:1rem] shadow-xs" contentProps={{ className: 'p-5' }}>
                      <span className="text-xs text-foreground-subtle font-bold uppercase block">Dossiers en cours d'instruction</span>
                      <span className="font-display font-black text-3xl text-primary-strong mt-1 block">
                        {commissionsList.filter(c => c.status === "pending").length} dossier
                      </span>
                      <span className="text-xs text-foreground-muted mt-1 block">Rendez-vous fixé par Services Indep</span>
                    </Card>
                    <Card className="[--card-radius:1rem] shadow-xs" contentProps={{ className: 'p-5' }}>
                      <span className="text-xs text-foreground-subtle font-bold uppercase block">Temps passé par le buraliste</span>
                      <span className="font-display font-black text-3xl text-foreground-intense mt-1 block">
                        0 minute
                      </span>
                      <span className="text-xs text-foreground-muted mt-1 block">100% de la paperasse gérée pour vous</span>
                    </Card>
                  </div>

                  {/* Tableau des dossiers */}
                  <div className="space-y-3">
                    <span className="text-xs font-black uppercase tracking-wider text-foreground-muted block mb-2">
                      Historique détaillé des dossiers ({commissionsList.length})
                    </span>

                    {commissionsList.map(item => (
                      <Card
                        key={item.id}
                        className="[--card-radius:1rem] shadow-xs hover:shadow-md transition-all"
                        contentProps={{
                          className:
                            'p-5 hover:border-primary-base/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4',
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                            item.status === "validated"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-primary-subtle border border-primary-soft text-primary-base"
                          }`}>
                            {item.status === "validated" ? <Check className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                          </div>

                          <div>
                            <div className="flex items-center gap-2.5">
                              <span className="font-mono text-xs text-foreground-subtle font-bold">{item.id}</span>
                              <strong className="text-base text-foreground-intense font-bold">{item.client}</strong>
                              <Badge
                                variant={item.status === "validated" ? "success" : "soft"}
                                size="xs"
                                className={`text-[11px] font-black px-2.5 py-0.5 ${
                                  item.status === "validated"
                                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                    : "bg-primary-subtle text-primary-strong border border-primary-soft before:bg-transparent"
                                }`}
                              >
                                {item.status === "validated" ? "Validé · Virement programmé" : "Étude en cours"}
                              </Badge>
                            </div>
                            <p className="text-sm font-semibold text-foreground-strong mt-0.5">
                              {item.service}
                            </p>
                            <span className="text-xs text-foreground-muted mt-1 block">
                              {item.note} · Date : {item.date}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-border-muted">
                          <Button
                            variant="soft"
                            size="sm"
                            onClick={() => setSelectedCommissionForDeepDive(item)}
                            className="rounded-xl text-xs font-bold"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Fiche</span>
                          </Button>

                          <div className="text-left md:text-right">
                            <span className="font-display font-black text-2xl text-emerald-700 block">
                              +{item.amount} €
                            </span>
                            <span className="text-xs text-foreground-subtle font-medium">
                              {item.payoutDate}
                            </span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                </Card>
              </TabsContent>

              {/* ========================================================= */}
              {/* ONGLET 3 : COMMANDES CLICK & COLLECT                      */}
              {/* ========================================================= */}
              <TabsContent value="orders" className="space-y-8">
                <Card
                  className="[--card-radius:1.5rem]"
                  contentProps={{ className: 'bg-surface-subtle p-6 sm:p-8 space-y-6' }}
                >

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border-subtle">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-700 block mb-1">
                        VENTES COMPTOIR FLUIDIFIÉES
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                        Gestion des retraits Click &amp; Collect
                      </h3>
                      <p className="text-sm text-foreground-muted mt-1 font-medium">
                        Vos clients réservent sur votre site pour sécuriser leur stock. Remise express en boutique.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        variant="outline"
                        onClick={handleSimulateNewOrder}
                        className="px-4 py-2.5 h-auto text-xs font-black rounded-xl shadow-xs gap-2"
                      >
                        <Plus className="w-4 h-4 text-emerald-600" />
                        <span>Simuler commande</span>
                      </Button>
                    </div>
                  </div>

                  {/* Rappel du principe : aucune connexion au logiciel de caisse */}
                  <Alert
                    variant="info"
                    layout="inline"
                    className="rounded-2xl bg-primary-subtle/50 border border-primary-soft text-xs sm:text-sm text-foreground-strong"
                  >
                    <AlertIcon>
                      <ShieldCheck className="w-5 h-5 text-primary-base shrink-0" />
                    </AlertIcon>
                    <AlertDescription className="text-foreground-strong">
                      <strong className="text-foreground-intense">Aucune connexion à votre logiciel de caisse</strong> (Strator, Bimedia, Devlyx) : la commande est préparée à part, puis encaissée normalement sur votre caisse habituelle au moment du retrait.
                    </AlertDescription>
                  </Alert>

                  {/* Bannière ergonomie comptoir */}
                  <Alert
                    variant="success"
                    layout="inline"
                    className="rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs sm:text-sm text-emerald-900"
                  >
                    <AlertIcon>
                      <QrCode className="w-5 h-5 text-emerald-700 shrink-0" />
                    </AlertIcon>
                    <AlertDescription className="text-emerald-900">
                      <strong>Zéro manipulation sur écran en caisse :</strong> le client vous présente son QR code smartphone, vous le bipez avec votre douchette caisse habituelle (ou vous tapez le code à 4 chiffres). La commande est clôturée en 1 seconde !
                    </AlertDescription>
                  </Alert>

                  {/* Liste des commandes complètes */}
                  <div className="space-y-4">
                    {ordersList.map(order => (
                      <Card
                        key={order.id}
                        className={`[--card-radius:1rem] transition-all ${
                          order.status === "ready" ? "shadow-sm ring-1 ring-emerald-400/30" : "opacity-80"
                        }`}
                        contentProps={{
                          className: `p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
                            order.status === "ready"
                              ? "border-emerald-400"
                              : "bg-surface-muted/90 border-border-subtle"
                          }`,
                        }}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="font-display font-black text-lg text-foreground-intense">
                              {order.id} · {order.client}
                            </span>
                            <span className="text-xs text-foreground-subtle">({order.time})</span>
                            {order.status === "ready" ? (
                              <Badge variant="success" size="sm" className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-black border border-emerald-300">
                                Prêt au comptoir
                              </Badge>
                            ) : (
                              <Badge variant="soft" size="sm" className="px-2.5 py-1 bg-surface-strong text-foreground-muted text-xs font-black">
                                Remis avec succès
                              </Badge>
                            )}
                          </div>

                          <p className="text-base text-foreground-strong font-medium">
                            Articles réservés : <strong className="text-foreground-intense font-bold">{order.items}</strong>
                          </p>

                          <div className="flex items-center gap-4 text-xs text-foreground-muted">
                            <span>Montant : <strong className="text-foreground-intense font-black text-sm">{order.total.toFixed(2)} €</strong></span>
                            <span>·</span>
                            <span>Mode : <strong className="text-foreground-strong font-bold">{order.paidOnline ? "Paiement sécurisé en ligne" : "Règlement direct au comptoir"}</strong></span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
                          <Button
                            variant="soft"
                            onClick={() => setSelectedOrderForDeepDive(order)}
                            className="px-3.5 py-2.5 h-auto rounded-xl text-xs font-bold gap-1.5"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Détail</span>
                          </Button>

                          <Button
                            onClick={() => toggleOrderStatus(order.id)}
                            className={`px-4 py-2.5 h-auto rounded-xl text-xs sm:text-sm font-black gap-2 ${
                              order.status === "ready"
                                ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md"
                                : "bg-surface-strong hover:bg-border-strong text-foreground-strong"
                            }`}
                          >
                            <Check className="w-4 h-4" />
                            <span>{order.status === "ready" ? "Confirmer remise" : "Remis · Annuler"}</span>
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>

                </Card>
              </TabsContent>

              {/* ========================================================= */}
              {/* ONGLET 4 : RADAR DES TENDANCES DE QUARTIER                */}
              {/* ========================================================= */}
              <TabsContent value="trends" className="space-y-8">
                <Card
                  className="[--card-radius:1.5rem] shadow-sm"
                  contentProps={{ className: 'p-6 sm:p-10 space-y-8' }}
                >

                  <div>
                    <div className="mb-2">
                      <SectionEyebrow tone="sm" icon={Sparkles}>
                        TENDANCES COMMERCIALES DE VOTRE QUARTIER
                      </SectionEyebrow>
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                      Ce que recherchent vos clients à proximité
                    </h3>
                    <p className="text-sm sm:text-base text-foreground-muted mt-1.5 font-medium max-w-6xl">
                      Anticipez les demandes au comptoir et mettez en avant les bons produits au bon moment pour booster vos ventes quotidiennes.
                    </p>
                  </div>

                  {/* 4 cartes claires & pratiques */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {TREND_CARDS.map((trend) => {
                      const Icon = trend.icon;
                      return (
                        <div
                          key={trend.title}
                          className="p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft hover:bg-primary-subtle/70 transition-all space-y-4"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-white border border-primary-soft text-primary-base flex items-center justify-center shrink-0 shadow-xs">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-display font-bold text-base sm:text-lg text-foreground-intense">
                                  {trend.title}
                                </h4>
                                <span className="text-xs text-foreground-muted font-medium">
                                  {trend.peak}
                                </span>
                              </div>
                            </div>
                            <Badge
                              variant="soft"
                              size="sm"
                              className="px-3 py-1 bg-white text-primary-strong text-xs font-black border border-primary-soft shadow-xs shrink-0 before:bg-transparent"
                            >
                              {trend.tag}
                            </Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-foreground-strong leading-relaxed font-medium bg-white/80 p-3.5 rounded-xl border border-primary-soft/60">
                            <strong className="text-primary-strong">Conseil comptoir :</strong> {trend.advice}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                </Card>
              </TabsContent>

              {/* ========================================================= */}
              {/* ONGLET 5 : FRÉQUENTATION & GOOGLE MAPS                    */}
              {/* ========================================================= */}
              <TabsContent value="traffic" className="space-y-8">
                <Card
                  className="[--card-radius:1.5rem]"
                  contentProps={{ className: 'bg-surface-subtle p-6 sm:p-10 space-y-8' }}
                >

                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 block mb-1">
                      VISIBILITÉ SUR LES MOTEURS DE RECHERCHE
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-4xl text-foreground-intense">
                      Fréquentation Google &amp; Local Maps
                    </h3>
                    <p className="text-base text-foreground-muted mt-2 max-w-5xl leading-relaxed font-medium">
                      Voici comment les habitants et passants de votre quartier trouvent votre commerce lorsqu'ils sont dans la rue avec leur smartphone.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-foreground-muted font-bold mt-3">
                      <CalendarRange className="w-3.5 h-3.5 text-primary-base shrink-0" />
                      <span>Données pour : {periodDateRangeLabel}</span>
                    </div>
                  </div>

                  {/* Métriques d'impact, ramenées à la période sélectionnée
                      dans l'onglet Vue d'ensemble */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trafficMetrics.map((m) => (
                      <Card key={m.label} className="[--card-radius:1rem] shadow-xs" contentProps={{ className: 'p-6' }}>
                        <span className="text-xs font-bold text-foreground-subtle uppercase block">{m.label}</span>
                        <strong className={`font-display font-black text-3xl mt-1 block ${m.valueClass}`}>{m.value}</strong>
                        <span className={`text-xs mt-1 block ${m.noteClass}`}>{m.note}</span>
                      </Card>
                    ))}
                  </div>

                  {/* Mots-clés recherchés */}
                  <Card className="[--card-radius:1rem] shadow-xs" contentProps={{ className: 'p-6 space-y-4' }}>
                    <h4 className="font-display font-bold text-lg text-foreground-intense">
                      Top des recherches ayant mené à votre commerce
                    </h4>
                    <Table hoverableRows className="text-sm">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Recherche</TableHead>
                          <TableHead className="text-right">Clics</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {TOP_SEARCHES.map((s) => (
                          <TableRow key={s.term}>
                            <TableCell className="font-medium text-foreground-strong">{s.term}</TableCell>
                            <TableCell className="text-right font-bold text-indigo-700">{s.clicks}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>

                </Card>
              </TabsContent>

            </div>

          </Tabs>

        </div>
      </div>

      {/* MODALE INTERACTIVE : DÉCLARER UNE OPPORTUNITÉ CLIENT (1 CLIC) */}
      <Dialog open={showAddLeadModal} onOpenChange={setShowAddLeadModal}>
        <DialogContent frame={false} closeLabel="Fermer" className="w-full max-w-lg rounded-3xl p-6 sm:p-8">

          <DialogHeader className="flex-row items-center gap-3 mb-4 space-y-0">
            <div className="w-12 h-12 rounded-2xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <DialogTitle className="font-display font-black text-xl text-foreground-intense">
                Déclarer un client intéressé
              </DialogTitle>
              <DialogDescription className="text-xs text-primary-strong font-bold uppercase tracking-wider">
                +150 € après validation par Services Indep
              </DialogDescription>
            </div>
          </DialogHeader>

          <DialogBody className="p-0">
            <p className="text-xs sm:text-sm text-foreground-muted mb-6 font-medium">
              Indiquez simplement les informations du client. Services Indep prend contact, finalise le dossier et reverse la commission sur votre compte société.
            </p>

            <form onSubmit={handleAddLeadSubmit} className="space-y-4 text-left">
              <Field>
                <FieldLabel className="block text-xs font-bold text-foreground-strong mb-1">
                  Nom ou Raison Sociale du client
                </FieldLabel>
                <Input
                  type="text"
                  required
                  placeholder="Ex: Boulangerie Moderne, ou M. Dupont"
                  value={leadForm.client}
                  onChange={e => setLeadForm({ ...leadForm, client: e.target.value })}
                  className="w-full rounded-xl bg-surface-subtle text-sm"
                />
              </Field>

              <Field>
                <FieldLabel className="block text-xs font-bold text-foreground-strong mb-1">
                  Besoin du client
                </FieldLabel>
                <Select
                  value={leadForm.service}
                  onValueChange={(value) => setLeadForm({ ...leadForm, service: value })}
                >
                  <SelectTrigger className="w-full rounded-xl bg-surface-subtle text-sm">
                    <SelectValue>
                      {(value) => LEAD_SERVICE_LABELS[value] ?? value}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(LEAD_SERVICE_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel className="block text-xs font-bold text-foreground-strong mb-1">
                  Numéro de téléphone du client (facultatif en simulation)
                </FieldLabel>
                <Input
                  type="tel"
                  placeholder="06 00 00 00 00"
                  value={leadForm.phone}
                  onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full rounded-xl bg-surface-subtle text-sm"
                />
              </Field>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="aventate-glow-button w-full h-auto py-3.5 px-6 font-black text-sm rounded-xl shadow gap-2"
                >
                  <span>Transmettre à Services Indep (+150 €)</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </DialogBody>

        </DialogContent>
      </Dialog>

      {/* ========================================================= */}
      {/* MODAL FICHE : COMMANDE CLICK & COLLECT                    */}
      {/* ========================================================= */}
      <Dialog
        open={Boolean(selectedOrderForDeepDive)}
        onOpenChange={(open) => { if (!open) setSelectedOrderForDeepDive(null); }}
      >
        <DialogContent frame={false} closeLabel="Fermer" className="w-full max-w-xl rounded-[28px] p-6 sm:p-8">
          {selectedOrderForDeepDive && (
            <>
              <DialogHeader className="flex-row items-center gap-3 pb-4 border-b border-border-subtle space-y-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <DialogTitle className="font-display font-black text-lg text-foreground-intense">
                    Détail Commande {selectedOrderForDeepDive.id}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-foreground-muted font-medium">
                    Réservée par {selectedOrderForDeepDive.client} · {selectedOrderForDeepDive.time}
                  </DialogDescription>
                </div>
              </DialogHeader>

              {/* Détails du panier */}
              <DialogBody className="space-y-4 p-0 pt-6">
                <div className="p-4 rounded-2xl bg-surface-subtle border border-border-subtle space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-foreground-muted block">
                    Articles du panier
                  </span>
                  <p className="text-sm sm:text-base font-bold text-foreground-intense leading-relaxed">
                    {selectedOrderForDeepDive.items}
                  </p>
                  <Separator />
                  <div className="flex items-center justify-between pt-2 text-sm">
                    <span className="text-foreground-muted font-medium">Montant total TTC :</span>
                    <strong className="text-lg font-black text-foreground-intense">{selectedOrderForDeepDive.total.toFixed(2)} €</strong>
                  </div>
                </div>

                {/* Mode de paiement */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-surface-subtle border border-border-subtle">
                    <span className="text-foreground-subtle block font-bold">Règlement</span>
                    <strong className="text-foreground-strong text-sm block mt-0.5">
                      {selectedOrderForDeepDive.paidOnline ? "Payé en ligne (CB 3DS)" : "Au comptoir"}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-subtle border border-border-subtle">
                    <span className="text-foreground-subtle block font-bold">Statut de stock</span>
                    <strong className="text-emerald-700 text-sm block mt-0.5">
                      {selectedOrderForDeepDive.status === "ready" ? "Préparé en réserve" : "Déjà retiré"}
                    </strong>
                  </div>
                </div>

                {/* Vente additionnelle suggérée en caisse */}
                <Alert
                  variant="warning"
                  layout="inline"
                  className="rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900"
                >
                  <AlertIcon>
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  </AlertIcon>
                  <AlertDescription className="text-amber-900">
                    <strong>Opportunité comptoir :</strong> 72% des clients Click &amp; Collect achètent un produit complémentaire lors du retrait (briquet, confiserie, jeu de grattage).
                  </AlertDescription>
                </Alert>
              </DialogBody>

              {/* Actions rapides */}
              <DialogFooter className="flex items-center gap-3 pt-2">
                <Button
                  onClick={() => {
                    handleScanExpress(selectedOrderForDeepDive.id);
                    setSelectedOrderForDeepDive(null);
                  }}
                  className="aventate-glow-button flex-1 h-auto py-3 px-4 font-black text-xs sm:text-sm rounded-xl shadow-md gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Valider le retrait comptoir</span>
                </Button>

                <DialogClose
                  render={
                    <Button variant="soft" className="px-4 py-3 h-auto font-bold text-xs sm:text-sm rounded-xl">
                      Fermer
                    </Button>
                  }
                />
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ========================================================= */}
      {/* MODAL FICHE : COMMISSION PARTENAIRE                       */}
      {/* ========================================================= */}
      <Dialog
        open={Boolean(selectedCommissionForDeepDive)}
        onOpenChange={(open) => { if (!open) setSelectedCommissionForDeepDive(null); }}
      >
        <DialogContent frame={false} closeLabel="Fermer" className="w-full max-w-xl rounded-[28px] p-6 sm:p-8">
          {selectedCommissionForDeepDive && (
            <>
              <DialogHeader className="flex-row items-center gap-3 pb-4 border-b border-border-subtle space-y-0">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <DialogTitle className="font-display font-black text-lg text-foreground-intense">
                    Fiche Commission {selectedCommissionForDeepDive.id}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-foreground-muted font-medium">
                    Client : {selectedCommissionForDeepDive.client}
                  </DialogDescription>
                </div>
              </DialogHeader>

              {/* Détails du dossier */}
              <DialogBody className="space-y-4 p-0 pt-6">
                <div className="p-4 rounded-2xl bg-surface-subtle border border-border-subtle space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-foreground-muted block">
                    Offre Souscrite
                  </span>
                  <p className="text-base font-bold text-foreground-intense">
                    {selectedCommissionForDeepDive.service}
                  </p>
                  <span className="text-xs text-foreground-muted block">
                    Prise en charge administrative intégrale par les équipes de Services Indep.
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-emerald-700 font-bold block">Montant commission</span>
                    <strong className="text-xl font-black text-emerald-800 block mt-0.5">
                      +{selectedCommissionForDeepDive.amount} € net
                    </strong>
                    <span className="text-[10px] text-emerald-600 block mt-0.5">Sans charges pour votre commerce</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-subtle border border-border-subtle">
                    <span className="text-foreground-muted font-bold block">Date de virement</span>
                    <strong className="text-base font-black text-foreground-intense block mt-1">
                      {selectedCommissionForDeepDive.payoutDate}
                    </strong>
                    <span className="text-[10px] text-foreground-subtle block mt-0.5">Virement automatique sur compte pro</span>
                  </div>
                </div>

                <Alert
                  variant="info"
                  layout="inline"
                  className="rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900"
                >
                  <AlertDescription className="text-indigo-900 space-y-1">
                    <strong className="block font-bold">Transparence 100% garantie</strong>
                    <p className="text-indigo-800 leading-relaxed">
                      Le client a souscrit selon les barèmes officiels. La commission est créditée directement sur votre relevé et reversée chaque mois à date fixe.
                    </p>
                  </AlertDescription>
                </Alert>
              </DialogBody>

              <DialogFooter className="flex items-center justify-end pt-2">
                <DialogClose
                  render={
                    <Button variant="soft" className="px-5 py-2.5 h-auto font-bold text-xs sm:text-sm rounded-xl">
                      Fermer la fiche
                    </Button>
                  }
                />
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

    </section>
  );
}
