/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { DomainMigrationNotice } from './components/DomainMigrationNotice';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutExpert } from './components/AboutExpert';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { CasesAndTestimonials } from './components/CasesAndTestimonials';
import { ProjectCalculator } from './components/ProjectCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function MainApp() {
  const { currentPalette } = useTheme();

  return (
    <div 
      className="min-h-screen text-[#f8fafc] flex flex-col font-sans transition-colors duration-300"
      style={{ 
        backgroundColor: currentPalette.bgCanvas,
        color: '#f8fafc'
      }}
    >
      {/* 1. Aviso de Migração de Domínio Comercial */}
      <DomainMigrationNotice />

      {/* 2. Header & Navegação com Seletor de Paleta */}
      <Header />

      {/* 3. Conteúdo Principal */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Sobre Nós / O Especialista */}
        <AboutExpert />

        {/* Nossos Serviços com CNAEs Mapeados */}
        <ServicesSection />

        {/* Diferenciais Competitivos */}
        <DifferentialsSection />

        {/* Cases de Sucesso & Depoimentos */}
        <CasesAndTestimonials />

        {/* Simulador Interativo de Orçamento */}
        <ProjectCalculator />

        {/* Formulário de Contato & Informações Oficiais */}
        <ContactSection />
      </main>

      {/* 4. Rodapé Atualizado com Copyright joaomesquita.net.br © 2026 */}
      <Footer />

      {/* 5. Botão Flutuante de WhatsApp (85) 92001-5069 */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
