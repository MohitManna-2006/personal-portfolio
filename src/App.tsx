import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-center">
            Mohit Manna-Personal Portfolio
          </h1>
        </div>
      </main>
    </div>
  );
}
