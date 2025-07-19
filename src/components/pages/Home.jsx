import React from "react";

export default function Home() {
  return (
    <div class="bg-gray-50 min-h-screen">
      <section class="bg-gradient-to-r from-teal-50 to-teal-100 py-16">
        <div class="container mx-auto flex flex-col md:flex-row items-center px-6">
          <div class="flex-1 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-teal-800">
              Plateforme de{" "}
              <span class="text-teal-600">formation en ligne</span> & gestion
              d'événements
            </h1>
            <p class="mb-6 text-lg text-gray-700">
              Accédez à des centaines de cours, participez à des événements
              exclusifs et suivez votre progression en temps réel. Rejoignez une
              communauté d'apprenants et de formateurs passionnés !
            </p>
            <router-link
              to="/formations"
              class="bg-teal-600 text-white px-6 py-3 rounded font-semibold hover:bg-teal-700 transition flex items-center gap-2"
            >
              <i class="bi bi-book"></i> Découvrir les formations
            </router-link>
          </div>
          <div class="flex-1 flex justify-center">
            <img
              src="https://i.pinimg.com/736x/85/8b/fc/858bfcee14fd2460c9cf74bdec223a05.jpg"
              alt="Formation en ligne"
              class="w-80 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section class="container mx-auto py-16 px-6">
        <h2 class="text-3xl font-bold text-center mb-10 text-teal-800">
          Pourquoi choisir FormEvent ?
        </h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded shadow text-center">
            <i class="bi bi-laptop text-4xl text-teal-600 mb-4"></i>
            <h3 class="font-semibold text-xl mb-2">Cours interactifs</h3>
            <p class="text-gray-600">
              Des modules variés, vidéos, quiz et supports téléchargeables pour
              un apprentissage dynamique.
            </p>
          </div>
          <div class="bg-white p-6 rounded shadow text-center">
            <i class="bi bi-calendar-event text-4xl text-teal-600 mb-4"></i>
            <h3 class="font-semibold text-xl mb-2">Gestion d'événements</h3>
            <p class="text-gray-600">
              Inscrivez-vous à des ateliers, webinaires et conférences
              directement depuis la plateforme.
            </p>
          </div>
          <div class="bg-white p-6 rounded shadow text-center">
            <i class="bi bi-bar-chart-line text-4xl text-teal-600 mb-4"></i>
            <h3 class="font-semibold text-xl mb-2">Suivi personnalisé</h3>
            <p class="text-gray-600">
              Visualisez vos progrès, obtenez des badges et des certificats à
              chaque étape franchie.
            </p>
          </div>
          <div class="bg-white p-6 rounded shadow text-center">
            <i class="bi bi-people text-4xl text-teal-600 mb-4"></i>
            <h3 class="font-semibold text-xl mb-2">Communauté active</h3>
            <p class="text-gray-600">
              Partagez, échangez et collaborez avec d'autres apprenants et
              formateurs.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-teal-50 py-16 px-6">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-teal-800 mb-8 text-center">
            Événements à venir
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded shadow p-6">
              <div class="flex items-center gap-2 mb-2 text-teal-600">
                <i class="bi bi-calendar3"></i>
                <span class="font-semibold">15 septembre 2025</span>
              </div>
              <h4 class="font-bold text-lg mb-2">
                Webinaire : Les clés de l'apprentissage en ligne
              </h4>
              <p class="text-gray-600 mb-2">
                Découvrez les meilleures pratiques pour réussir vos formations à
                distance.
              </p>
              <router-link
                to="/evenements/1"
                class="text-teal-600 hover:underline"
              >
                En savoir plus
              </router-link>
            </div>
            <div class="bg-white rounded shadow p-6">
              <div class="flex items-center gap-2 mb-2 text-teal-600">
                <i class="bi bi-calendar3"></i>
                <span class="font-semibold">28 septembre 2025</span>
              </div>
              <h4 class="font-bold text-lg mb-2">
                Atelier : Gestion du temps pour les apprenants
              </h4>
              <p class="text-gray-600 mb-2">
                Un atelier interactif pour optimiser votre organisation et
                booster votre efficacité.
              </p>
              <router-link
                to="/evenements/2"
                class="text-teal-600 hover:underline"
              >
                En savoir plus
              </router-link>
            </div>
            <div class="bg-white rounded shadow p-6">
              <div class="flex items-center gap-2 mb-2 text-teal-600">
                <i class="bi bi-calendar3"></i>
                <span class="font-semibold">10 octobre 2025</span>
              </div>
              <h4 class="font-bold text-lg mb-2">
                Conférence : L'avenir de la formation digitale
              </h4>
              <p class="text-gray-600 mb-2">
                Experts et professionnels débattent des tendances et innovations
                du secteur.
              </p>
              <router-link
                to="/evenements/3"
                class="text-teal-600 hover:underline"
              >
                En savoir plus
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <section class="container mx-auto py-16 px-6">
        <h2 class="text-3xl font-bold text-teal-800 mb-10 text-center">
          Ils nous font confiance
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded shadow p-6">
            <div class="flex items-center gap-3 mb-4">
              <i class="bi bi-person-circle text-3xl text-teal-600"></i>
              <span class="font-semibold">Sophie L.</span>
            </div>
            <p class="text-gray-700 italic">
              “Grâce à FormEvent, j'ai pu suivre des formations certifiantes
              tout en participant à des événements enrichissants. La plateforme
              est intuitive et très complète.”
            </p>
          </div>
          <div class="bg-white rounded shadow p-6">
            <div class="flex items-center gap-3 mb-4">
              <i class="bi bi-person-circle text-3xl text-teal-600"></i>
              <span class="font-semibold">Karim M.</span>
            </div>
            <p class="text-gray-700 italic">
              “La gestion des événements est un vrai plus ! J’ai pu assister à
              des webinaires de qualité et échanger avec des experts.”
            </p>
          </div>
          <div class="bg-white rounded shadow p-6">
            <div class="flex items-center gap-3 mb-4">
              <i class="bi bi-person-circle text-3xl text-teal-600"></i>
              <span class="font-semibold">Julie R.</span>
            </div>
            <p class="text-gray-700 italic">
              “L’accompagnement personnalisé m’a permis de progresser rapidement
              et d’obtenir mon certificat sans stress.”
            </p>
          </div>
        </div>
      </section>

      <section class="bg-teal-600 py-12">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold text-white mb-4">
            Prêt à rejoindre l’aventure ?
          </h2>
          <p class="text-teal-100 mb-6 text-lg">
            Inscrivez-vous gratuitement et commencez votre parcours de formation
            et d’événement dès aujourd’hui.
          </p>
          <router-link
            to="/register"
            class="bg-white text-teal-700 font-semibold px-8 py-3 rounded shadow hover:bg-teal-50 transition"
          >
            <i class="bi bi-arrow-right-circle"></i> S’inscrire maintenant
          </router-link>
        </div>
      </section>
      <section class="container mx-auto py-16 px-6">
        <h2 class="text-3xl font-bold text-teal-800 mb-10 text-center">
          Fonctionnalités avancées
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded shadow">
            <i class="bi bi-pencil-square text-4xl text-teal-600 mb-4"></i>
            <h3 class="font-semibold text-xl mb-2">
              Création de contenus sur-mesure
            </h3>
            <p class="text-gray-600">
              Créez facilement des modules interactifs, quiz, vidéos et supports
              variés, même sans expertise technique, grâce à notre outil auteur
              intégré[1][2][5].
            </p>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <i class="bi bi-bar-chart text-4xl text-teal-600 mb-4"></i>
            <h3 class="font-semibold text-xl mb-2">Suivi & Analytics</h3>
            <p class="text-gray-600">
              Suivez la progression de chaque apprenant, analysez l’efficacité
              des formations et générez des rapports détaillés pour optimiser
              vos parcours[3][6].
            </p>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <i class="bi bi-robot text-4xl text-teal-600 mb-4"></i>
            <h3 class="font-semibold text-xl mb-2">IA pédagogique</h3>
            <p class="text-gray-600">
              Profitez de l’intelligence artificielle pour proposer des parcours
              personnalisés, générer des quiz automatiques et offrir un
              accompagnement sur mesure[2][5].
            </p>
          </div>
        </div>
      </section>

      <section class="bg-teal-50 py-16 px-6">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-teal-800 mb-8 text-center">
            Parcours d'apprentissage personnalisés
          </h2>
          <div class="flex flex-col md:flex-row gap-8">
            <div class="flex-1 bg-white p-6 rounded shadow">
              <h4 class="font-semibold text-lg mb-2">Progression guidée</h4>
              <p class="text-gray-600">
                Suivez des séries de modules thématiques pour atteindre vos
                objectifs, avec des jalons, badges et certificats à chaque
                étape[4].
              </p>
            </div>
            <div class="flex-1 bg-white p-6 rounded shadow">
              <h4 class="font-semibold text-lg mb-2">Adaptatif & flexible</h4>
              <p class="text-gray-600">
                Laissez la plateforme vous recommander les contenus les plus
                pertinents selon votre profil, vos résultats et vos préférences
                d’apprentissage[2][4].
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="container mx-auto py-16 px-6">
        <h2 class="text-3xl font-bold text-teal-800 mb-10 text-center">
          Avantages pour tous
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded shadow">
            <i class="bi bi-person-badge text-4xl text-teal-600 mb-4"></i>
            <h3 class="font-semibold text-xl mb-2">Pour les apprenants</h3>
            <ul class="list-disc pl-6 text-gray-600 space-y-1">
              <li>
                Accès 24/7 à tous les contenus, sur tous les appareils[3].
              </li>
              <li>
                Apprentissage à votre rythme, supports variés (vidéo, audio,
                quiz)[3].
              </li>
              <li>
                Forums, messagerie, et communauté pour échanger et progresser.
              </li>
              <li>Certificats et badges à chaque niveau atteint.</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <i class="bi bi-briefcase text-4xl text-teal-600 mb-4"></i>
            <h3 class="font-semibold text-xl mb-2">
              Pour les formateurs & organisateurs
            </h3>
            <ul class="list-disc pl-6 text-gray-600 space-y-1">
              <li>
                Création de modules et d’événements sans compétence
                technique[1][2][5].
              </li>
              <li>Gestion des groupes, invitations, et suivi des présences.</li>
              <li>
                Outils d’évaluation, questionnaires de satisfaction,
                statistiques avancées[6][10].
              </li>
              <li>
                Personnalisation graphique et gestion multi-organisations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-teal-100 py-12">
        <div class="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div class="flex-1">
            <h2 class="text-2xl font-bold text-teal-800 mb-4">
              Sécurité & conformité
            </h2>
            <ul class="list-disc pl-6 text-gray-700 space-y-1">
              <li>Données hébergées en France/Europe, conformité RGPD.</li>
              <li>Authentification sécurisée, gestion des droits d’accès.</li>
              <li>
                Signature électronique, émargement en ligne pour les
                événements[10].
              </li>
              <li>
                Sauvegardes régulières et chiffrement des données sensibles.
              </li>
            </ul>
          </div>
          <div class="flex-1 flex justify-center">
            <i class="bi bi-shield-lock-fill text-7xl text-teal-600"></i>
          </div>
        </div>
      </section>
      <footer class="bg-white mt-12 border-t">
        <div class="container mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <div class="flex items-center gap-2 mb-4 md:mb-0">
            <i class="bi bi-mortarboard-fill text-teal-600 text-xl"></i>
            <span class="font-bold">FormEvent</span>
          </div>
          <div class="flex gap-6">
            <router-link to="/terms" class="hover:text-teal-600">
              Conditions
            </router-link>
            <router-link to="/privacy" class="hover:text-teal-600">
              Confidentialité
            </router-link>
            <router-link to="/about" class="hover:text-teal-600">
              À propos
            </router-link>
            <router-link to="/contact" class="hover:text-teal-600">
              Contact
            </router-link>
          </div>
          <div class="mt-4 md:mt-0">
            <span class="text-sm">
              &copy; 2025 FormEvent. Tous droits réservés.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
