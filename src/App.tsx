import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ChatWidget } from './components/common/ChatWidget';
import { ProviderLoginModal } from './components/common/ProviderLoginModal';

// Pages
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { MemorialProgramsPage } from './pages/MemorialProgramsPage';
import { PrayerCardsKeepsakesPage } from './pages/PrayerCardsKeepsakesPage';
import { DigitalMemorialsPage } from './pages/DigitalMemorialsPage';
import { PostersLargeFormatPage } from './pages/PostersLargeFormatPage';
import { MemorialGardenPage } from './pages/MemorialGardenPage';
import { LegacyTributeDetailPage } from './pages/LegacyTributeDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { CreatingMemorialProgramPage } from './pages/CreatingMemorialProgramPage';
import { OrderOfServicePage } from './pages/OrderOfServicePage';
import { PoemsPrayersScripturesPage } from './pages/PoemsPrayersScripturesPage';
import { AcknowledgmentsPage } from './pages/AcknowledgmentsPage';
import { ObituaryAssistancePage } from './pages/ObituaryAssistancePage';
import { FaqsPage } from './pages/FaqsPage';
import { FuneralServiceProvidersPage } from './pages/FuneralServiceProvidersPage';
import { ProviderDashboardPage } from './pages/ProviderDashboardPage';
import { PlaceAnOrderPage } from './pages/PlaceAnOrderPage';
import { OrderReceivedPage } from './pages/OrderReceivedPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { PoliciesPage } from './pages/PoliciesPage';

import { OrderFormData } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [selectedMemorialSlug, setSelectedMemorialSlug] = useState<string>('eleanor-grace-dawson');
  const [orderStartProductId, setOrderStartProductId] = useState<string>('prog-classic-4');

  // Provider State
  const [isLoggedInProvider, setIsLoggedInProvider] = useState<boolean>(false);
  const [providerName, setProviderName] = useState<string>('Heritage Funeral Home Services, Brooklyn');
  const [providerLoginModalOpen, setProviderLoginModalOpen] = useState<boolean>(false);

  // Submitted Order State
  const [submittedOrder, setSubmittedOrder] = useState<OrderFormData | null>(null);
  const [submittedReadyDate, setSubmittedReadyDate] = useState<string>('');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: string) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProviderLogin = (name: string) => {
    setIsLoggedInProvider(true);
    setProviderName(name);
    navigate('/provider-dashboard');
  };

  const handleProviderLogout = () => {
    setIsLoggedInProvider(false);
    navigate('/funeral-service-providers');
  };

  const handleOrderSubmitted = (order: OrderFormData, calculatedReadyDate: string) => {
    setSubmittedOrder(order);
    setSubmittedReadyDate(calculatedReadyDate);
  };

  // Render Page Content based on Route
  const renderContent = () => {
    // Memorial Tribute Dynamic Item Page
    if (currentRoute.startsWith('/memorial-garden/')) {
      const slug = currentRoute.replace('/memorial-garden/', '');
      return <LegacyTributeDetailPage slug={slug || selectedMemorialSlug} navigate={navigate} />;
    }

    switch (currentRoute) {
      case '/':
        return <HomePage navigate={navigate} />;

      case '/collection':
        return (
          <CollectionPage
            navigate={navigate}
            onSelectProductForOrder={(id) => setOrderStartProductId(id)}
          />
        );

      case '/memorial-programs':
        return <MemorialProgramsPage navigate={navigate} />;

      case '/prayer-cards-keepsakes':
      case '/prayer-cards':
        return <PrayerCardsKeepsakesPage navigate={navigate} />;

      case '/digital-memorials':
        return <DigitalMemorialsPage navigate={navigate} />;

      case '/posters-large-format':
        return <PostersLargeFormatPage navigate={navigate} />;

      case '/memorial-garden':
        return (
          <MemorialGardenPage
            navigate={navigate}
            onSelectMemorial={(slug) => setSelectedMemorialSlug(slug)}
          />
        );

      case '/resources':
        return <ResourcesPage navigate={navigate} />;

      case '/resources/creating-a-memorial-program':
        return <CreatingMemorialProgramPage navigate={navigate} />;

      case '/resources/order-of-service':
        return <OrderOfServicePage navigate={navigate} />;

      case '/resources/poems-prayers-scriptures':
        return <PoemsPrayersScripturesPage navigate={navigate} />;

      case '/resources/acknowledgments':
        return <AcknowledgmentsPage navigate={navigate} />;

      case '/resources/obituary-assistance':
        return <ObituaryAssistancePage navigate={navigate} />;

      case '/faqs':
        return <FaqsPage navigate={navigate} />;

      case '/funeral-service-providers':
        return (
          <FuneralServiceProvidersPage
            navigate={navigate}
            onOpenProviderLogin={() => setProviderLoginModalOpen(true)}
          />
        );

      case '/provider-dashboard':
        return (
          <ProviderDashboardPage
            providerName={providerName}
            onLogout={handleProviderLogout}
            navigate={navigate}
          />
        );

      case '/place-an-order':
        return (
          <PlaceAnOrderPage
            initialProductId={orderStartProductId}
            isLoggedInProvider={isLoggedInProvider}
            providerName={providerName}
            navigate={navigate}
            onSubmitOrder={handleOrderSubmitted}
          />
        );

      case '/order-received':
        return (
          <OrderReceivedPage
            orderData={submittedOrder}
            readyDate={submittedReadyDate}
            navigate={navigate}
          />
        );

      case '/schedule-a-consultation':
      case '/booking':
        return <ConsultationPage navigate={navigate} />;

      case '/contact':
        return (
          <ContactPage
            navigate={navigate}
            onOpenProviderLogin={() => setProviderLoginModalOpen(true)}
          />
        );

      case '/about':
        return <AboutPage navigate={navigate} />;

      case '/order-and-proofing-policies':
        return <PoliciesPage initialTab="proofing" navigate={navigate} />;

      case '/privacy-policy':
        return <PoliciesPage initialTab="privacy" navigate={navigate} />;

      case '/terms-and-conditions':
        return <PoliciesPage initialTab="terms" navigate={navigate} />;

      case '/accessibility':
        return <PoliciesPage initialTab="accessibility" navigate={navigate} />;

      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      <Header
        currentRoute={currentRoute}
        navigate={navigate}
        onOpenProviderLogin={() => setProviderLoginModalOpen(true)}
      />

      <main className="flex-1">
        {renderContent()}
      </main>

      <Footer
        navigate={navigate}
        onOpenProviderLogin={() => setProviderLoginModalOpen(true)}
      />

      <ChatWidget onNavigate={navigate} />

      <ProviderLoginModal
        isOpen={providerLoginModalOpen}
        onClose={() => setProviderLoginModalOpen(false)}
        onLoginSuccess={handleProviderLogin}
        onNavigate={navigate}
      />
    </div>
  );
}
