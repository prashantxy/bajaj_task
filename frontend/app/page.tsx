import MainSection from '../components/main-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Data Processing Interface
        </h1>
        <MainSection />
      </div>
    </main>
  );
}
