export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur Immo3</h1>
      <p className="text-lg mb-4">
        Votre plateforme immobilière pour trouver votre prochain bien.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Recherche de biens</h2>
          <p>
            Explorez notre catalogue de propriétés et trouvez celle qui vous
            correspond.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Estimation gratuite</h2>
          <p>
            Obtenez une estimation gratuite de votre bien immobilier en quelques
            clics.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Conseils experts</h2>
          <p>
            Bénéficiez des conseils de nos experts immobiliers pour votre
            projet.
          </p>
        </div>
      </div>
    </div>
  );
}
