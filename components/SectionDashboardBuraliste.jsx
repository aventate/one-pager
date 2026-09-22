import React, { useState } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  ShoppingBag,
  DollarSign,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Bell,
  Search,
  Zap,
  BarChart3,
  Calendar,
  Layers,
  ArrowRight,
  Check,
  AlertCircle,
  Plus,
  Phone,
  RefreshCw,
  X,
  FileText,
  ChevronRight,
  Eye,
  ExternalLink,
  MapPin,
  Smartphone,
  QrCode,
  Scan
} from "lucide-react";

export default function SectionDashboardBuraliste({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState("overview"); // overview | commissions | orders | trends | traffic
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
          
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary-subtle border border-primary-soft mb-6 mx-auto">
            <LayoutDashboard className="w-4 h-4 text-primary-base shrink-0" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-primary-strong uppercase leading-none">
              ESPACE BURALISTE · CONSOLE COMMERÇANTE
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] text-foreground-intense mb-6">
            Votre poste de pilotage épuré, <br />
            <span className="text-gradient-gold">conçu pour vous faire gagner du temps et de l'argent.</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-strong max-w-4xl mx-auto leading-relaxed font-normal">
            Accessible depuis n’importe quel ordinateur, tablette ou écran de caisse. Zéro paramétrage technique, zéro formation requise : tout est lisible, fluide et utilisable immédiatement à tout âge.
          </p>

          {/* 3 piliers de réassurance */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-8 mt-8 border-t border-border-subtle text-base sm:text-lg text-foreground-strong font-semibold">
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
          <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-emerald-900 flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 font-bold text-sm sm:text-base">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <span>{leadSuccessMsg}</span>
            </div>
            <button
              onClick={() => setLeadSuccessMsg(null)}
              className="p-1.5 text-emerald-700 hover:text-emerald-950 rounded-lg hover:bg-emerald-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Toast scan douchette caisse express */}
      {scanSuccessToast && (
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="p-4 rounded-2xl bg-slate-900 text-white border-2 border-emerald-400 flex items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3 font-bold text-sm sm:text-base">
              <Scan className="w-6 h-6 text-emerald-400 shrink-0 animate-pulse" />
              <span>{scanSuccessToast}</span>
            </div>
            <button
              onClick={() => setScanSuccessToast(null)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. LE TABLEAU DE BORD COMMERCIAL DE PRESTIGE (PLEINE LARGEUR, THÈME BLANC / PERLE LUXE) */}
      <div className="py-10 sm:py-16">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Console Principale */}
          <div className="bg-white rounded-[32px] border border-border-subtle shadow-xl overflow-hidden">
            
            {/* Barre d'en-tête supérieure de la console */}
            <div className="bg-surface-subtle border-b border-border-subtle p-6 sm:p-8 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
              
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
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    Compte Commerçant Buraliste certifié · Partenaire Services Indep &amp; AVENTATE
                  </p>
                </div>
              </div>

              {/* Barre d'onglets de navigation interactive */}
              <div className="flex items-center gap-2 bg-slate-200/80 p-1.5 rounded-2xl self-start xl:self-auto overflow-x-auto max-w-full">
                
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === "overview"
                      ? "bg-white text-foreground-intense shadow-sm ring-1 ring-primary-soft"
                      : "text-foreground-strong hover:text-foreground-intense hover:bg-white/60"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-primary-base" />
                  <span>Vue d'ensemble</span>
                </button>

                <button
                  onClick={() => setActiveTab("commissions")}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === "commissions"
                      ? "bg-white text-foreground-intense shadow-sm ring-1 ring-primary-soft"
                      : "text-foreground-strong hover:text-foreground-intense hover:bg-white/60"
                  }`}
                >
                  <DollarSign className="w-4 h-4 text-primary-base" />
                  <span>Commissions ({totalCommissionsAmount} €)</span>
                </button>

                <button
                  onClick={() => setActiveTab("orders")}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === "orders"
                      ? "bg-white text-foreground-intense shadow-sm ring-1 ring-primary-soft"
                      : "text-foreground-strong hover:text-foreground-intense hover:bg-white/60"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 text-primary-base" />
                  <span>Commandes</span>
                  {pendingOrdersCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-black">
                      {pendingOrdersCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("trends")}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === "trends"
                      ? "bg-white text-foreground-intense shadow-sm ring-1 ring-primary-soft"
                      : "text-foreground-strong hover:text-foreground-intense hover:bg-white/60"
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-primary-base" />
                  <span>Radar Tendances</span>
                </button>

                <button
                  onClick={() => setActiveTab("traffic")}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === "traffic"
                      ? "bg-white text-foreground-intense shadow-sm ring-1 ring-primary-soft"
                      : "text-foreground-strong hover:text-foreground-intense hover:bg-white/60"
                  }`}
                >
                  <BarChart3 className="w-4 h-4 text-primary-base" />
                  <span>Fréquentation Google</span>
                </button>

              </div>

            </div>

            {/* Corps de la Console */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-white">
              
              {/* 4 GRANDES CARTES KPI INTERACTIVES (EN CLIC RAPIDE VERS LES ONGLETS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* KPI 1 : Commissions cumulées */}
                <div
                  onClick={() => setActiveTab("commissions")}
                  className="bg-surface-subtle p-6 rounded-2xl border border-border-subtle hover:border-primary-base/50 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
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
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-200">
                      +{commissionsList[0]?.amount || 150} € récent
                    </span>
                  </div>
                </div>

                {/* KPI 2 : Commandes Click & Collect */}
                <div
                  onClick={() => setActiveTab("orders")}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Click &amp; Collect en attente
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-slate-900">
                      {pendingOrdersCount}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      paniers prêts au comptoir
                    </span>
                  </div>
                </div>

                {/* KPI 3 : Fréquentation & Google Maps */}
                <div
                  onClick={() => setActiveTab("traffic")}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Fréquentation Digitale
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-slate-900">
                      1 420
                    </span>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                      visites / mois
                    </span>
                  </div>
                </div>

                {/* KPI 4 : Bénéfice net estimé */}
                <div className="bg-gradient-to-br from-primary-subtle/50 via-white to-primary-subtle/30 p-6 rounded-2xl border-2 border-primary-base shadow-sm">
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
                    <span className="text-xs font-bold text-slate-500">
                      net / mois
                    </span>
                  </div>
                </div>

              </div>

              {/* ========================================================= */}
              {/* ONGLET 1 : VUE D'ENSEMBLE                                */}
              {/* ========================================================= */}
              {activeTab === "overview" && (
                <div className="space-y-8">
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Colonne gauche (7 cols) : Activités récentes & Actions rapides */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* Bloc Commandes Click & Collect express */}
                      <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                              <ShoppingBag className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-display font-bold text-lg text-slate-900">
                                Commandes Click &amp; Collect prêtes au comptoir
                              </h3>
                              <p className="text-xs text-slate-500">
                                Le client a commandé en ligne, le panier est déjà prêt.
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={handleSimulateNewOrder}
                            className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
                          >
                            <Plus className="w-3.5 h-3.5 text-primary-base" />
                            <span>Simuler une commande</span>
                          </button>
                        </div>

                        {/* Liste des commandes */}
                        <div className="space-y-3">
                          {ordersList.slice(0, 3).map(order => (
                            <div
                              key={order.id}
                              className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                                order.status === "ready"
                                  ? "bg-white border-emerald-300 shadow-xs"
                                  : "bg-slate-100/80 border-slate-200 opacity-75"
                              }`}
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                                    {order.id} · {order.client}
                                  </span>
                                  <span className="text-xs text-slate-400">· {order.time}</span>
                                  {order.paidOnline ? (
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                                      Payé en ligne
                                    </span>
                                  ) : (
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary-subtle text-primary-strong border border-primary-soft">
                                      À régler sur place
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm font-medium text-slate-700">
                                  {order.items}
                                </p>
                                <span className="text-xs font-black text-slate-900">
                                  Total : {order.total.toFixed(2)} €
                                </span>
                              </div>

                              <button
                                onClick={() => toggleOrderStatus(order.id)}
                                className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 shrink-0 ${
                                  order.status === "ready"
                                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow"
                                    : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                                }`}
                              >
                                <Check className="w-4 h-4" />
                                <span>{order.status === "ready" ? "Valider remise (1 clic)" : "Déjà remis · Annuler"}</span>
                              </button>
                            </div>
                          ))}
                        </div>

                      </div>

                      {/* Bloc Commissions récentes express */}
                      <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-display font-bold text-lg text-slate-900">
                                Dernières commissions partenaires générées
                              </h3>
                              <p className="text-xs text-slate-500">
                                Services Indep prend tout en charge · Vous touchez votre commission.
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => setShowAddLeadModal(true)}
                            className="gold-glow-button px-3 py-1.5 rounded-xl text-white text-xs font-black transition-all flex items-center gap-1.5 shadow-xs"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Déclarer un client</span>
                          </button>
                        </div>

                        <div className="space-y-3">
                          {commissionsList.slice(0, 2).map(c => (
                            <div key={c.id} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-4 shadow-xs">
                              <div className="flex items-center gap-3.5">
                                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                                  <Check className="w-5 h-5" />
                                </div>
                                <div>
                                  <span className="text-sm font-bold text-slate-900 block">
                                    {c.service} · {c.client}
                                  </span>
                                  <span className="text-xs text-slate-500">
                                    {c.note}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right shrink-0">
                                <span className="font-display font-black text-lg text-emerald-700 block">
                                  +{c.amount} €
                                </span>
                                <span className="text-[11px] font-bold text-slate-400 uppercase">
                                  {c.payoutDate}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>

                    </div>

                    {/* Colonne droite (5 cols) : Radar Tendances & Automatisation */}
                    <div className="lg:col-span-5 space-y-6">
                      
                      {/* Carte Tendance Locale du Quartier */}
                      <div className="bg-gradient-to-br from-primary-subtle/50 via-white to-primary-subtle/30 rounded-2xl border-2 border-primary-base p-6 sm:p-8 space-y-5 shadow-sm">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary-strong text-xs font-black uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-primary-base" />
                          <span>Opportunité du jour</span>
                        </div>

                        <h3 className="font-display font-black text-xl text-slate-900">
                          Forte hausse locale du vapotage fruits rouges (+44%)
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          Sur les 800 mètres autour de votre tabac, les recherches Google sur les puffs et e-liquides fruités explosent le vendredi après-midi.
                        </p>

                        <div className="p-4 rounded-xl bg-white border border-primary-soft text-xs text-foreground-strong space-y-1.5 shadow-xs">
                          <strong className="text-primary-strong font-bold block">Action recommandée en caisse :</strong>
                          <p>Mettre en avant les recharges menthe et fruits rouges directement devant la caisse pour capter le passage du soir.</p>
                        </div>

                        <button
                          onClick={() => setActiveTab("trends")}
                          className="w-full py-3 px-4 bg-white hover:bg-slate-50 border border-primary-base/40 hover:border-primary-base text-foreground-intense font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                        >
                          <span>Voir les 4 radars du quartier</span>
                          <ArrowRight className="w-4 h-4 text-primary-base" />
                        </button>
                      </div>

                      {/* Bouton Contacter Thomas */}
                      <button
                        onClick={onOpenContact}
                        className="gold-glow-button w-full py-4 px-6 text-white font-black text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <span>Activer mon Espace Buraliste avec Thomas M.</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                    </div>

                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* ONGLET 2 : COMMISSIONS D'AFFAIRES PARTENAIRES             */}
              {/* ========================================================= */}
              {activeTab === "commissions" && (
                <div className="space-y-8">
                  
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border-subtle">
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-primary-base block mb-1">
                          REVENUS PASSIFS SANS GESTION ADMINISTRATIVE
                        </span>
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                          Vos commissions partenaires en direct
                        </h3>
                        <p className="text-sm text-slate-500 mt-1 font-medium">
                          Chaque client orienté vers une solution Assurance ou Alarme vous rapporte 150 € après validation.
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setShowAddLeadModal(true)}
                          className="gold-glow-button px-5 py-3 text-white font-black text-xs sm:text-sm rounded-xl shadow transition-all flex items-center gap-2 whitespace-nowrap"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Déclarer une nouvelle opportunité (+150 €)</span>
                        </button>
                      </div>
                    </div>

                    {/* Synthèse du mois */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
                      <div className="p-5 bg-white rounded-2xl border border-border-subtle shadow-xs">
                        <span className="text-xs text-slate-400 font-bold uppercase block">Montant validé à virer</span>
                        <span className="font-display font-black text-3xl text-emerald-700 mt-1 block">
                          {totalCommissionsAmount} €
                        </span>
                        <span className="text-xs text-slate-500 mt-1 block">Virement bancaire le 05 du mois</span>
                      </div>
                      <div className="p-5 bg-white rounded-2xl border border-border-subtle shadow-xs">
                        <span className="text-xs text-slate-400 font-bold uppercase block">Dossiers en cours d'instruction</span>
                        <span className="font-display font-black text-3xl text-primary-strong mt-1 block">
                          {commissionsList.filter(c => c.status === "pending").length} dossier
                        </span>
                        <span className="text-xs text-slate-500 mt-1 block">Rendez-vous fixé par Services Indep</span>
                      </div>
                      <div className="p-5 bg-white rounded-2xl border border-border-subtle shadow-xs">
                        <span className="text-xs text-slate-400 font-bold uppercase block">Temps passé par le buraliste</span>
                        <span className="font-display font-black text-3xl text-foreground-intense mt-1 block">
                          0 minute
                        </span>
                        <span className="text-xs text-slate-500 mt-1 block">100% de la paperasse gérée pour vous</span>
                      </div>
                    </div>

                    {/* Tableau des dossiers */}
                    <div className="space-y-3">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-2">
                        Historique détaillé des dossiers ({commissionsList.length})
                      </span>

                      {commissionsList.map(item => (
                        <div
                          key={item.id}
                          className="p-5 rounded-2xl bg-white border border-border-subtle shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary-base/50 transition-all"
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
                                <span className="font-mono text-xs text-slate-400 font-bold">{item.id}</span>
                                <strong className="text-base text-foreground-intense font-bold">{item.client}</strong>
                                <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                                  item.status === "validated"
                                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                    : "bg-primary-subtle text-primary-strong border border-primary-soft"
                                }`}>
                                  {item.status === "validated" ? "Validé · Virement programmé" : "Étude en cours"}
                                </span>
                              </div>
                              <p className="text-sm font-semibold text-slate-700 mt-0.5">
                                {item.service}
                              </p>
                              <span className="text-xs text-slate-500 mt-1 block">
                                {item.note} · Date : {item.date}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                            <button
                              onClick={() => setSelectedCommissionForDeepDive(item)}
                              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5"
                            >
                              <Eye className="w-3.5 h-3.5 text-slate-600" />
                              <span>Fiche</span>
                            </button>

                            <div className="text-left md:text-right">
                              <span className="font-display font-black text-2xl text-emerald-700 block">
                                +{item.amount} €
                              </span>
                              <span className="text-xs text-slate-400 font-medium">
                                {item.payoutDate}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* ONGLET 3 : COMMANDES CLICK & COLLECT                      */}
              {/* ========================================================= */}
              {activeTab === "orders" && (
                <div className="space-y-8">
                  
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-emerald-700 block mb-1">
                          VENTES COMPTOIR FLUIDIFIÉES
                        </span>
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                          Gestion des retraits Click &amp; Collect
                        </h3>
                        <p className="text-sm text-slate-500 mt-1 font-medium">
                          Vos clients réservent sur votre site pour sécuriser leur stock. Remise express en boutique.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={handleSimulateNewOrder}
                          className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-black rounded-xl shadow-xs transition-colors flex items-center gap-2"
                        >
                          <Plus className="w-4 h-4 text-emerald-600" />
                          <span>Simuler commande</span>
                        </button>
                      </div>
                    </div>

                    {/* Bannière ergonomie comptoir */}
                    <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center gap-3 text-xs sm:text-sm text-emerald-900">
                      <QrCode className="w-5 h-5 text-emerald-700 shrink-0" />
                      <span>
                        <strong>Zéro manipulation sur écran en caisse :</strong> le client vous présente son QR code smartphone, vous le bipez avec votre douchette caisse habituelle (ou vous tapez le code à 4 chiffres). La commande est clôturée en 1 seconde !
                      </span>
                    </div>

                    {/* Liste des commandes complètes */}
                    <div className="space-y-4">
                      {ordersList.map(order => (
                        <div
                          key={order.id}
                          className={`p-6 rounded-2xl border transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
                            order.status === "ready"
                              ? "bg-white border-emerald-400 shadow-sm ring-1 ring-emerald-400/30"
                              : "bg-slate-100/90 border-slate-200 opacity-80"
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="font-display font-black text-lg text-slate-900">
                                {order.id} · {order.client}
                              </span>
                              <span className="text-xs text-slate-400">({order.time})</span>
                              {order.status === "ready" ? (
                                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black border border-emerald-300">
                                  Prêt au comptoir
                                </span>
                              ) : (
                                <span className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-black">
                                  Remis avec succès
                                </span>
                              )}
                            </div>

                            <p className="text-base text-slate-800 font-medium">
                              Articles réservés : <strong className="text-slate-950 font-bold">{order.items}</strong>
                            </p>

                            <div className="flex items-center gap-4 text-xs text-slate-500">
                              <span>Montant : <strong className="text-slate-900 font-black text-sm">{order.total.toFixed(2)} €</strong></span>
                              <span>·</span>
                              <span>Mode : <strong className="text-slate-800 font-bold">{order.paidOnline ? "Paiement sécurisé en ligne" : "Règlement direct au comptoir"}</strong></span>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
                            <button
                              onClick={() => setSelectedOrderForDeepDive(order)}
                              className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5"
                            >
                              <Eye className="w-4 h-4 text-slate-600" />
                              <span>Détail</span>
                            </button>

                            <button
                              onClick={() => toggleOrderStatus(order.id)}
                              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 ${
                                order.status === "ready"
                                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md"
                                  : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                              }`}
                            >
                              <Check className="w-4 h-4" />
                              <span>{order.status === "ready" ? "Confirmer remise" : "Remis · Annuler"}</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* ONGLET 4 : RADAR DES TENDANCES DE QUARTIER                */}
              {/* ========================================================= */}
              {activeTab === "trends" && (
                <div className="space-y-8">
                  
                  <div className="bg-white p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-sm space-y-8">
                    
                    <div>
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary-soft text-primary-strong text-xs font-black uppercase tracking-wider mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-primary-base" />
                        <span>TENDANCES COMMERCIALES DE VOTRE QUARTIER</span>
                      </div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                        Ce que recherchent vos clients à proximité
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 mt-1.5 font-medium max-w-5xl">
                        Anticipez les demandes au comptoir et mettez en avant les bons produits au bon moment pour booster vos ventes quotidiennes.
                      </p>
                    </div>

                    {/* 4 cartes claires & pratiques */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      
                      {/* 1. Vapotage */}
                      <div className="p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft hover:bg-primary-subtle/70 transition-all space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white border border-primary-soft text-primary-base flex items-center justify-center shrink-0 shadow-xs">
                              <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-base sm:text-lg text-foreground-intense">
                                Vapotage &amp; E-liquides fruités
                              </h4>
                              <span className="text-xs text-slate-500 font-medium">
                                Pic de passage : vendredis et samedis soirs
                              </span>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-white text-primary-strong text-xs font-black border border-primary-soft shadow-xs shrink-0">
                            Forte demande
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground-strong leading-relaxed font-medium bg-white/80 p-3.5 rounded-xl border border-primary-soft/60">
                          <strong className="text-primary-strong">Conseil comptoir :</strong> disposez vos meilleures saveurs directement devant la caisse dès 16h pour capter les achats d'impulsion du week-end.
                        </p>
                      </div>

                      {/* 2. Pause Café & Snacking */}
                      <div className="p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft hover:bg-primary-subtle/70 transition-all space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white border border-primary-soft text-primary-base flex items-center justify-center shrink-0 shadow-xs">
                              <ShoppingBag className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-base sm:text-lg text-foreground-intense">
                                Pause Café &amp; Snacking rapide
                              </h4>
                              <span className="text-xs text-slate-500 font-medium">
                                Pic de passage : tous les matins de 07h à 09h
                              </span>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-white text-primary-strong text-xs font-black border border-primary-soft shadow-xs shrink-0">
                            Flux matinal
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground-strong leading-relaxed font-medium bg-white/80 p-3.5 rounded-xl border border-primary-soft/60">
                          <strong className="text-primary-strong">Conseil comptoir :</strong> mettez en avant une formule café à emporter + confiserie dès l'ouverture pour les travailleurs du quartier.
                        </p>
                      </div>

                      {/* 3. Retrait de colis */}
                      <div className="p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft hover:bg-primary-subtle/70 transition-all space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white border border-primary-soft text-primary-base flex items-center justify-center shrink-0 shadow-xs">
                              <LayoutDashboard className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-base sm:text-lg text-foreground-intense">
                                Retrait de colis (Mondial Relay / UPS)
                              </h4>
                              <span className="text-xs text-slate-500 font-medium">
                                Pic de passage : fin de journée de 17h30 à 19h30
                              </span>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-white text-primary-strong text-xs font-black border border-primary-soft shadow-xs shrink-0">
                            Trafic garanti
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground-strong leading-relaxed font-medium bg-white/80 p-3.5 rounded-xl border border-primary-soft/60">
                          <strong className="text-primary-strong">Conseil comptoir :</strong> vos horaires clairs sur votre site vitrine rassurent les clients colis et facilitent les achats complémentaires en caisse.
                        </p>
                      </div>

                      {/* 4. Produits bien-être & CBD */}
                      <div className="p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft hover:bg-primary-subtle/70 transition-all space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white border border-primary-soft text-primary-base flex items-center justify-center shrink-0 shadow-xs">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-base sm:text-lg text-foreground-intense">
                                Produits bien-être &amp; CBD
                              </h4>
                              <span className="text-xs text-slate-500 font-medium">
                                Pic de passage : en soirée en semaine
                              </span>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-white text-primary-strong text-xs font-black border border-primary-soft shadow-xs shrink-0">
                            En croissance
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground-strong leading-relaxed font-medium bg-white/80 p-3.5 rounded-xl border border-primary-soft/60">
                          <strong className="text-primary-strong">Conseil comptoir :</strong> présentez vos gammes conformes sur votre catalogue web pour attirer une clientèle régulière en boutique.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* ONGLET 5 : FRÉQUENTATION & GOOGLE MAPS                    */}
              {/* ========================================================= */}
              {activeTab === "traffic" && (
                <div className="space-y-8">
                  
                  <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 space-y-8">
                    
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-indigo-700 block mb-1">
                        VISIBILITÉ SUR LES MOTEURS DE RECHERCHE
                      </span>
                      <h3 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
                        Fréquentation Google &amp; Local Maps
                      </h3>
                      <p className="text-base text-slate-600 mt-2 max-w-4xl leading-relaxed font-medium">
                        Voici comment les habitants et passants de votre quartier trouvent votre commerce lorsqu'ils sont dans la rue avec leur smartphone.
                      </p>
                    </div>

                    {/* Métriques d'impact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                        <span className="text-xs font-bold text-slate-400 uppercase block">Visites totales sur le site</span>
                        <strong className="font-display font-black text-3xl text-slate-900 mt-1 block">1 420</strong>
                        <span className="text-xs font-bold text-emerald-700 mt-1 block">+28% vs mois précédent</span>
                      </div>

                      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                        <span className="text-xs font-bold text-slate-400 uppercase block">Consultations d'horaires</span>
                        <strong className="font-display font-black text-3xl text-slate-900 mt-1 block">840</strong>
                        <span className="text-xs font-medium text-slate-500 mt-1 block">Évite les clients devant porte close</span>
                      </div>

                      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                        <span className="text-xs font-bold text-slate-400 uppercase block">Itinéraires Google Maps</span>
                        <strong className="font-display font-black text-3xl text-indigo-700 mt-1 block">185</strong>
                        <span className="text-xs font-medium text-slate-500 mt-1 block">Clients guidés jusqu'à votre porte</span>
                      </div>

                      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                        <span className="text-xs font-bold text-slate-400 uppercase block">Appels en 1 clic</span>
                        <strong className="font-display font-black text-3xl text-primary-base mt-1 block">92</strong>
                        <span className="text-xs font-medium text-slate-500 mt-1 block">Pour vérifier un arrivage presse ou colis</span>
                      </div>
                    </div>

                    {/* Mots-clés recherchés */}
                    <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                      <h4 className="font-display font-bold text-lg text-slate-900">
                        Top des recherches ayant mené à votre commerce
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                          <span className="font-medium text-slate-800">« tabac ouvert maintenant »</span>
                          <span className="font-bold text-indigo-700">412 clics</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                          <span className="font-medium text-slate-800">« puff rechargeable buraliste »</span>
                          <span className="font-bold text-indigo-700">289 clics</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                          <span className="font-medium text-slate-800">« point relais colis dimanche »</span>
                          <span className="font-bold text-indigo-700">245 clics</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                          <span className="font-medium text-slate-800">« timbres fiscaux à proximité »</span>
                          <span className="font-bold text-indigo-700">188 clics</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                          <span className="font-medium text-slate-800">« cigares conservation cave »</span>
                          <span className="font-bold text-indigo-700">142 clics</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                          <span className="font-medium text-slate-800">« recharge vapotage cbd »</span>
                          <span className="font-bold text-indigo-700">114 clics</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>
      </div>

      {/* MODALE INTERACTIVE : DÉCLARER UNE OPPORTUNITÉ CLIENT (1 CLIC) */}
      {showAddLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-border-subtle">
            
            <button
              onClick={() => setShowAddLeadModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-foreground-intense">
                  Déclarer un client intéressé
                </h3>
                <span className="text-xs text-primary-strong font-bold uppercase tracking-wider">
                  +150 € après validation par Services Indep
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-6 font-medium">
              Indiquez simplement les informations du client. Services Indep prend contact, finalise le dossier et reverse la commission sur votre compte société.
            </p>

            <form onSubmit={handleAddLeadSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nom ou Raison Sociale du client
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Boulangerie Moderne, ou M. Dupont"
                  value={leadForm.client}
                  onChange={e => setLeadForm({ ...leadForm, client: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-base"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Besoin du client
                </label>
                <select
                  value={leadForm.service}
                  onChange={e => setLeadForm({ ...leadForm, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-base"
                >
                  <option value="Assurance Multirisque Commerce">Assurance Multirisque Commerce (Locaux, Stocks)</option>
                  <option value="Télésurveillance & Alarme Homiris">Télésurveillance &amp; Alarme Locaux</option>
                  <option value="Complémentaire Santé & Prévoyance TNS">Complémentaire Santé &amp; Prévoyance</option>
                  <option value="Assurance Auto & Flotte Professionnelle">Assurance Flotte Pro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Numéro de téléphone du client (facultatif en simulation)
                </label>
                <input
                  type="tel"
                  placeholder="06 00 00 00 00"
                  value={leadForm.phone}
                  onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary-base"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="gold-glow-button w-full py-3.5 px-6 text-white font-black text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>Transmettre à Services Indep (+150 €)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL FICHE : COMMANDE CLICK & COLLECT                    */}
      {/* ========================================================= */}
      {selectedOrderForDeepDive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-[28px] border border-border-subtle shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-lg text-slate-900">
                    Détail Commande {selectedOrderForDeepDive.id}
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">
                    Réservée par {selectedOrderForDeepDive.client} · {selectedOrderForDeepDive.time}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedOrderForDeepDive(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Détails du panier */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-surface-subtle border border-border-subtle space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                  Articles du panier
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                  {selectedOrderForDeepDive.items}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-sm">
                  <span className="text-slate-600 font-medium">Montant total TTC :</span>
                  <strong className="text-lg font-black text-slate-900">{selectedOrderForDeepDive.total.toFixed(2)} €</strong>
                </div>
              </div>

              {/* Mode de paiement */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-bold">Règlement</span>
                  <strong className="text-slate-800 text-sm block mt-0.5">
                    {selectedOrderForDeepDive.paidOnline ? "Payé en ligne (CB 3DS)" : "Au comptoir"}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-bold">Statut de stock</span>
                  <strong className="text-emerald-700 text-sm block mt-0.5">
                    {selectedOrderForDeepDive.status === "ready" ? "Préparé en réserve" : "Déjà retiré"}
                  </strong>
                </div>
              </div>

              {/* Vente additionnelle suggérée en caisse */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Opportunité comptoir :</strong> 72% des clients Click &amp; Collect achètent un produit complémentaire lors du retrait (briquet, confiserie, jeu de grattage).
                </span>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  handleScanExpress(selectedOrderForDeepDive.id);
                  setSelectedOrderForDeepDive(null);
                }}
                className="gold-glow-button flex-1 py-3 px-4 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Valider le retrait comptoir</span>
              </button>

              <button
                onClick={() => setSelectedOrderForDeepDive(null)}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL FICHE : COMMISSION PARTENAIRE                       */}
      {/* ========================================================= */}
      {selectedCommissionForDeepDive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-[28px] border border-border-subtle shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-black text-lg text-slate-900">
                    Fiche Commission {selectedCommissionForDeepDive.id}
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">
                    Client : {selectedCommissionForDeepDive.client}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCommissionForDeepDive(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Détails du dossier */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-surface-subtle border border-border-subtle space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                  Offre Souscrite
                </span>
                <p className="text-base font-bold text-slate-900">
                  {selectedCommissionForDeepDive.service}
                </p>
                <span className="text-xs text-slate-500 block">
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

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 font-bold block">Date de virement</span>
                  <strong className="text-base font-black text-slate-900 block mt-1">
                    {selectedCommissionForDeepDive.payoutDate}
                  </strong>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Virement automatique sur compte pro</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 space-y-1">
                <strong className="block font-bold">Transparence 100% garantie</strong>
                <p className="text-indigo-800 leading-relaxed">
                  Le client a souscrit selon les barèmes officiels. La commission est créditée directement sur votre relevé et reversée chaque mois à date fixe.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end pt-2">
              <button
                onClick={() => setSelectedCommissionForDeepDive(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors"
              >
                Fermer la fiche
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
