import Head from 'next/head';
import Dashboard from '../components/Dashboard';

export default function DashboardPage() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h1 className="text-3xl font-bold text-gold mb-4">Dashboard</h1>
        <Dashboard />
      </div>
    </div>
  );
}