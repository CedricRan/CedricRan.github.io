# Guide : créer et modifier `moi.json`

Le fichier `moi.json` contient tout le contenu du portfolio. Il doit rester dans le même dossier que `index.html`.

## 1. Structure générale

Le fichier a deux niveaux :

- **Territoire** : un bouton de la barre du bas (par exemple « Projets »). Dans le code, c'est un élément de `continents`.
- **Lieu** : une zone sur le globe, à l'intérieur d'un territoire (par exemple « AINGANA »). Dans le code, c'est un élément de `countries`.

```json
{
  "continents": [
    {
      "...": "un territoire",
      "countries": [
        { "...": "un lieu" },
        { "...": "un autre lieu" }
      ]
    }
  ]
}
```

## 2. Ajouter un lieu

À copier dans la liste `countries` d'un territoire existant. Une virgule sépare deux lieux, mais il n'y en a pas après le dernier.

```json
{
  "id": "nouveau_lieu",
  "name": "Titre affiché",
  "lat": 35.68,
  "lng": 139.69,
  "size": 2.5,
  "role": "Intitulé du rôle",
  "technologies": ["Python", "SQL"],
  "details": "Une phrase de présentation.\n- Première réalisation\n- Deuxième réalisation"
}
```

| Champ | Obligatoire | Description |
|---|---|---|
| `id` | oui | Identifiant unique, sans espace ni accent. |
| `name` | oui | Titre affiché dans le panneau et au survol. |
| `lat` | oui | Latitude, de -90 (sud) à 90 (nord). |
| `lng` | oui | Longitude, de -180 (ouest) à 180 (est). |
| `size` | non | Taille de la zone, entre 1.5 (petite) et 3.5 (grande). Valeur par défaut : 1. |
| `role` | non | Texte de la première carte du panneau. |
| `technologies` | non | Liste de badges affichés dans le panneau. |
| `details` | non | Texte du panneau (voir ci-dessous). |

### Écrire `details`

- Les lignes qui ne commencent pas par `-` forment le **paragraphe** de présentation.
- Les lignes qui commencent par `- ` deviennent des **puces**.
- `\n` sépare les lignes.
- Les adresses email et les numéros de téléphone français (format `038 50 124 33`) deviennent des liens cliquables.

### Trouver des coordonnées

Dans Google Maps, un clic droit sur un endroit affiche deux nombres. Le premier est `lat`, le second est `lng`. Ces positions sont décoratives : elles servent seulement à placer la zone sur le globe.

## 3. Ajouter un territoire

À copier dans la liste `continents`.

```json
{
  "id": "experiences",
  "name": "Expériences",
  "court": "Expériences",
  "color": "#C792EA",
  "icon": "briefcase",
  "domain": "Parcours pro",
  "detail": "Texte d'introduction du territoire.",
  "libelles": { "role": "Poste", "tech": "Outils", "liste": "Missions" },
  "countries": [ ]
}
```

| Champ | Obligatoire | Description |
|---|---|---|
| `id` | oui | Identifiant unique, sans espace ni accent. |
| `name` | oui | Titre du panneau du territoire. |
| `court` | non | Nom court sous l'icône dans la barre du bas. À défaut, `name` est utilisé. |
| `color` | oui | Couleur au format `#RRGGBB`, utilisée pour les zones et les boutons. |
| `icon` | non | Nom d'une icône (voir la liste plus bas). |
| `domain` | non | Texte de la carte « Thème ». |
| `detail` | non | Texte d'introduction affiché à l'ouverture du territoire. |
| `libelles` | non | Renomme les titres de section du panneau (voir ci-dessous). |
| `countries` | oui | Liste des lieux du territoire. |

### Renommer les titres de section avec `libelles`

| Clé | Titre par défaut |
|---|---|
| `role` | Rôle |
| `tech` | Technologies |
| `resume` | En quelques mots |
| `liste` | Réalisations |

Exemple : `"libelles": { "role": "Poste", "liste": "Missions" }`. Seules les clés indiquées sont remplacées.

### Icônes disponibles

`compass`, `tools`, `layers`, `mail`, `globe`, `code`, `briefcase`, `book`, `star`, `user`

Pour en ajouter une, il faut ajouter son dessin SVG dans l'objet `ICONS` de `index.html`.

## 4. Règles à respecter

- Une virgule sépare deux éléments, mais il n'y en a pas après le dernier.
- Les textes sont entre guillemets doubles `"`. Pour afficher un guillemet dans un texte, écrire `\"`.
- Les `id` doivent être uniques dans tout le fichier.
- Les nombres (`lat`, `lng`, `size`) s'écrivent sans guillemets.
- Au-delà de six territoires, les boutons de la barre du bas deviennent très étroits.
- Pour vérifier le fichier avant de l'utiliser, le coller sur [jsonlint.com](https://jsonlint.com).

## 5. Comportement automatique des zones

Quand deux lieux sont proches, `index.html` empêche automatiquement qu'ils se superposent :

1. Les zones sont écartées, d'au plus 8° par rapport à leur position d'origine.
2. Si elles se touchent encore, elles sont réduites.
3. Elles sont ensuite rapprochées de leur vraie position, puis agrandies, tant qu'elles ne se chevauchent pas.

Deux constantes se règlent dans `index.html` :

- `MARGE_DEG` : l'espace entre deux zones (0 pour les coller).
- `DEPLACEMENT_MAX` : le décalage maximal autorisé.

## 6. Exemple minimal complet

```json
{
  "continents": [
    {
      "id": "profile",
      "name": "Profil",
      "court": "Profil",
      "color": "#F4E3C1",
      "icon": "user",
      "domain": "Parcours",
      "detail": "Présentation générale.",
      "countries": [
        {
          "id": "about",
          "name": "Point de départ",
          "lat": -18.88,
          "lng": 47.51,
          "size": 3.0,
          "role": "Étudiant",
          "technologies": ["IA", "Big Data"],
          "details": "Présentation en une phrase.\n- Première information\n- Deuxième information"
        }
      ]
    }
  ]
}
```
