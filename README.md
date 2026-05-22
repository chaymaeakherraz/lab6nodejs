# CRUD Express MongoDB Mongoose EJS

Application web CRUD développée avec Node.js, Express.js, MongoDB, Mongoose et EJS.  
Elle permet de gérer des produits avec les opérations : ajouter, afficher, modifier et supprimer.

## Technologies utilisées

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Bootstrap
- dotenv
- express-session
- nodemon

## Fonctionnalités

- Ajouter un produit
- Afficher la liste des produits
- Voir les détails d’un produit
- Modifier un produit
- Supprimer un produit
- Connexion MongoDB avec Mongoose
- Interface web dynamique avec EJS
- Design avec Bootstrap

## Structure du projet

```text
crud-express-mongodb/
├── db/
│   └── mongoose.js
├── models/
│   └── product.js
├── services/
│   └── productService.js
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── public/
│   └── css/
│       └── style.css
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── products/
│   │   ├── index.ejs
│   │   ├── create.ejs
│   │   ├── edit.ejs
│   │   └── details.ejs
│   ├── error.ejs
│   └── layout.ejs
├── .env
├── app.js
├── package.json
└── README.md
```

## Installation

```bash
git clone https://github.com/USERNAME/crud-express-mongodb.git
cd crud-express-mongodb
npm install
```

## Configuration MongoDB

MongoDB doit être installé et lancé localement.

Dans MongoDB Compass, utiliser l’URI suivante :

```text
mongodb://localhost:27017
```

## Configuration du fichier .env

Créer un fichier `.env` à la racine du projet :

```env
MONGODB_URI=mongodb://127.0.0.1:27017/crud_app
PORT=3000
SESSION_SECRET=secret123
```

## Lancement du projet

Mode développement :

```bash
npm run dev
```

Ou lancement normal :

```bash
npm start
```

L’application sera disponible sur :

```text
http://localhost:3000
```

## Routes principales

```text
/products
/products/create
/products/:id
/products/edit/:id
/products/:id/update
/products/:id/delete
```

## CRUD disponible

- Create → Ajouter un produit
- Read → Afficher les produits
- Update → Modifier un produit
- Delete → Supprimer un produit



https://github.com/user-attachments/assets/fb10fc64-dff9-4f0f-8775-34b338b377a7

