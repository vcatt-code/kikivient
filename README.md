# Kikivient?

Outil de sondage / inscription aux activités du GAAC.
Un administrateur crée des sondages (nom d'évènement, date, horaire, commentaire, options de réponse configurables). Chaque sondage génère un lien à partager. Les participants s'inscrivent via ce lien et voient en direct qui vient.

Infrastructure : **GitHub Pages** (hébergement statique) + **Firebase Firestore** (données) + **Firebase Auth** (admin par e-mail, participants anonymes).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Page participant (vue du sondage via `?id=...`) |
| `admin.html` | Page administrateur (création / gestion) |
| `style.css` | Charte graphique GAAC |
| `firebase-config.js` | **À éditer** : clés du projet Firebase + e-mails admin |
| `firestore.rules` | Règles de sécurité à publier dans la console |
| `gaac-logo.png` | Logo GAAC affiché dans l'en-tête et le formulaire (à déposer aussi dans le dépôt) |

## Ajouter un second administrateur
1. Firebase > **Authentication > Users > Ajouter un utilisateur** : créez le compte (e-mail + mot de passe).
2. Ajoutez cette adresse **dans les deux fichiers** : `firebase-config.js` (`ADMIN_EMAILS`) et `firestore.rules` (liste de `isAdmin`). Les deux listes doivent rester identiques.
3. Republiez les règles (Firestore > Règles > Publier).

## Image d'illustration
Un sondage peut porter une image (lien direct ou fichier). Les fichiers déposés sont redimensionnés puis stockés directement dans Firestore : pas besoin d'activer Storage ni de passer au plan payant. Pour une image lourde, préférez un lien.

## Installation

### 1. Projet Firebase
1. [console.firebase.google.com](https://console.firebase.google.com) > **Ajouter un projet**.
2. **Firestore Database** > Créer une base (mode production).
3. **Authentication** > Commencer > activez deux fournisseurs :
   - **E-mail/Mot de passe** (pour les organisateurs)
   - **Anonyme** (pour les participants)
4. **Authentication > Users > Ajouter un utilisateur** : créez un compte pour chaque organisateur (e-mail + mot de passe).

### 2. Clés de configuration
1. **Paramètres du projet** (roue crantée) > section *Vos applications* > **Web** (`</>`).
2. Enregistrez l'appli, copiez l'objet `firebaseConfig`.
3. Collez les valeurs dans `firebase-config.js`.
4. Dans ce même fichier, renseignez `ADMIN_EMAILS` avec le(s) e-mail(s) créés à l'étape 1.4.

### 3. Règles de sécurité
1. Ouvrez `firestore.rules`, remplacez `contact@astrogaac.fr` par vos e-mails admin (mêmes que `ADMIN_EMAILS`).
2. Console Firebase > **Firestore > Règles** : collez le contenu et **Publier**.

### 4. Domaine autorisé
Console Firebase > **Authentication > Settings > Domaines autorisés** : ajoutez votre domaine GitHub Pages (ex. `votrepseudo.github.io`).

### 5. Déploiement GitHub Pages
1. Poussez ces fichiers dans un dépôt (ex. `kikivient`).
2. Dépôt > **Settings > Pages** > Source : branche `main`, dossier `/root`.
3. Le site est publié sur `https://votrepseudo.github.io/kikivient/`.

## Utilisation
- **Administrateur** : ouvrez `.../admin.html`, connectez-vous, créez un sondage, cliquez **Copier le lien**.
- **Participants** : partagez le lien copié (`.../index.html?id=...`). Ils s'inscrivent et voient les autres réponses en direct.
- Gestion : **Clôturer** (fige les inscriptions), **Archiver** (range sans supprimer), **Supprimer** (efface sondage + réponses).

## Notes techniques
- SDK Firebase modulaire chargé via CDN, version `10.12.2` (identique dans les 3 fichiers `.js`/`.html`). Pour mettre à jour, changez le numéro partout.
- Les participants sont authentifiés en anonyme : chaque navigateur garde une identité stable, ce qui permet de modifier/retirer sa propre réponse sans compte.
- Aucune donnée sensible n'est stockée ; les réponses (nom, présence, commentaire) sont volontairement publiques pour les membres qui ont le lien.
