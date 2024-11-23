'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapIcon, ListBulletIcon } from '@heroicons/react/24/outline';

interface TabViewProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface TabPanelProps {
  children: React.ReactNode;
  name: string;
}

const Container = ({ children, activeTab, setActiveTab }: TabViewProps) => {
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger
          value="map"
          className="flex items-center justify-center"
        >
          <MapIcon className="w-5 h-5 mr-2" />
          Map View
        </TabsTrigger>
        <TabsTrigger
          value="list"
          className="flex items-center justify-center"
        >
          <ListBulletIcon className="w-5 h-5 mr-2" />
          List View
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

const Panel = ({ children, name }: TabPanelProps) => (
  <TabsContent
    value={name}
    className="mt-2"
  >
    {children}
  </TabsContent>
);

// eslint-disable-next-line import/no-anonymous-default-export
export default { Container, Panel };
