// ============================================================
//  CONFIG — tout ce qui est à modifier se trouve dans ce fichier
// ============================================================
//  Règles :
//   - Garder les guillemets "" autour des textes.
//   - Laisser "" (vide) pour masquer un élément : rien ne s'affiche.
//   - Ne jamais mettre de mot de passe ou de clé secrète ici :
//     ce fichier est lisible par tous les visiteurs du site.
// ============================================================

window.CONFIG = {

  // --- Identité (affichée dans l'en-tête et dans l'onglet du navigateur) ---
  nom: "Prénom Nom",                         // À REMPLACER par le vrai nom
  titre: "Étudiant en IA & Big Data",
  accroche: "En recherche de stage d'application",

  // --- Liens rapides (boutons en bas à droite) ---
  cv: "",                                    // Ex : "cv.pdf" (fichier placé à côté de index.html) ou lien complet https://...
  github: "",                                // Ex : "https://github.com/pseudo"
  linkedin: "",                              // Ex : "https://www.linkedin.com/in/pseudo"
  email: "cedricran00449@gmail.com",
  telephone: ""                              // Ex : "038 50 124 33"

};

// ============================================================
//  À MODIFIER AUSSI, DANS LES AUTRES FICHIERS
// ============================================================
//  moi.json
//    - Territoire « Contact » : email, téléphone, localisation
//    - Textes, rôles et technologies de chaque lieu
//    - Nouveaux projets (voir guide-moi-json.md)
//
//  index.html
//    - Durée d'affichage du message d'accueil : chercher « 8000 »
//    - Espace entre les zones du globe : MARGE_DEG
//    - Taille des zones : FACTEUR_TAILLE
// ============================================================
