# Challenge

## Objectif

Dans ce défi, tu devras installer un paquet appelé **CowSay**. C'est un paquet qui affichera dans ton terminal une petite vache avec le message de ton choix :

```javascript
 ______________________________
< Hello I'm Romain from Reims! >
 ------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Etapes

1. Crée un nouveau dossier avec le nom de ton choix et initialise un projet dedans avec `npm`. Tu vas utiliser pour cet exercice la syntaxe **ESM** : import pour importer un module, et `"type": "module"` dans ton `package.json`.
2. Crée un fichier `.env` et un fichier `index.js` dans ton projet.
3. Dans ton fichier `.env`, crée une variable `NAME` avec ton nom et une variable `CAMPUS` avec le nom de ton campus.
4. Installe les modules `dotenv` et `cowsay`. Pour le module cowsay, lis la documentation pour apprendre à l'utiliser dans ton fichier `index.js`.
5. Exécute ton fichier `index.js` à l'aide de la commande `node` et assure-toi que la vache affiche un message qui utilise les informations de ton fichier `.env`.
6. Crée maintenant un fichier `.gitignore` afin d'ignorer ton dossier `node_modules` et ton fichier `.env`.
7. Push ton travail sur **GitHub**. Partage le lien du repo comme solution du challenge.

## Critères de validation

- Les modules dotenv et cowsay sont installés et correctement utilisés.
- Le dossier node_modules et le fichier .env ne sont pas dans le dépôt GitHub.

## Explication

1. Clonez le dépôt.
2. Copiez le fichier `.env.sample`.
3. Renommez la copie en `.env`.
4. Remplacez les valeurs par votre nom, votre ville et le votre language.
