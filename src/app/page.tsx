import { BroadcastBar } from '@/components/navigation/BroadcastBar';
import Layer00Hero from '@/components/sections/Layer00Hero';
import { Layer01Manifesto } from '@/components/sections/Layer01Manifesto';
import { Layer02Wednesday } from '@/components/sections/Layer02Wednesday';
import { Layer03Exchange } from '@/components/sections/Layer03Exchange';
import { Layer04Archive } from '@/components/sections/Layer04Archive';
import Layer05Outcomes from '@/components/sections/Layer05Outcomes';
import Layer06Join from '@/components/sections/Layer06Join';

export default function Home() {
  return (
    <main className="bg-void min-h-screen relative overflow-hidden">
      <BroadcastBar />
      <Layer00Hero />
      <Layer01Manifesto />
      <Layer02Wednesday />
      <Layer03Exchange />
      <Layer04Archive />
      <Layer05Outcomes />
      <Layer06Join />
    </main>
  );
}
