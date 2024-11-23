'use client';

import { useState } from 'react';

import Header from '@/components/Header';
import AirportMap from '@/components/AirportMap';
import AirportList from '@/components/AirportList';
import TabView from '@/components/TabView';

export default function Home() {
  const [activeTab, setActiveTab] = useState('map');

  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <TabView.Container
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <TabView.Panel name="map">
            <AirportMap />
          </TabView.Panel>
          <TabView.Panel name="list">
            <AirportList />
          </TabView.Panel>
        </TabView.Container>
      </div>
    </main>
  );
}
