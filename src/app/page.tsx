import { Suspense } from 'react';
import { SlowComponent } from './slow-component';

export const dynamic = 'force-dynamic';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">App router test on netlify</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowComponent message="Slow component loaded with suspense manually" />
      </Suspense>
    </main>
  );
}
