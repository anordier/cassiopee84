---------------------
| Détails du projet |
---------------------
L’objectif de ce projet est d’établir un site web et une base de données permettant de stocker des modèles 3D de mâchoires, et de pouvoir les consulter et visualiser avec la même aise que si ces mêmes modèles étaient imprimés en solide. De par la nature médicale des données, un aspect de sécurité est aussi attendu.

-------------------------
| Pistes d'amélioration |
-------------------------
* Déplacer la base de données pour la situer dans le serveur lui-même, et non pas sur un serveur tiers (ce qui n'est qu'une solution temporaire à fins de démonstration)
* Ajouter les mâchoires à cette base de données, plutôt que de les coder en dur dans le code
* Implémenter une fonction permettant de trouver les points de contact entre deux mâchoires d'un même set
* Implémenter un service tiers, indépendant de la visualisation, permettant de fermer les modèles des mâchoires comme si ils étaient placés sur des socles (=> recherche des arêtes terminales des modèles .ply)
* Retirer l'option permettant de créer un nouveau compte, les données étant médicales donc privées
* A très long terme, acheter une licence SSL pour activer le HTTPS sur le serveur afin d'encrypter les échanges de données (idéalement juste avant de mettre le serveur en production)

------------------------------------------------
| Installation, démarrage, extinction (Ubuntu) |
------------------------------------------------

----------------
| Installation |
----------------
* Installez Node.js, npm, git, et tmux ("sudo apt install nodejs npm git tmux")
* Clonez le dépôt git du projet ("git clone git@github.com:anordier/cassiopee84.git")
* Placez-vous dans le dossier "cassiopee84" créé (la racine du projet), puis éxécutez la commande "npm install" pour installer les librairies du projet

-------------
| Démarrage |
-------------
* Pour des fins de test, le serveur peut être lancé avec la commande "node server.js" dans la racine du projet. Ce serveur s'éteindra cependant lorsque vous fermerez votre terminal.
* Si le serveur doit être maintenu sur la durée, lancez la commande "tmux" dans la racine du projet
* Cela ouvrira un nouveau champ de texte dans le terminal. Assurez-vous que vous êtes encore dans la racine du projet, puis entrez dans ce champ "node server.js"
* Pressez Ctrl+B, puis la touche d, afin de fermer la fenêtre tmux. Le serveur devrait être opérationnel, et rester opérationnel même si vous fermez le terminal.

--------------
| Extinction |
--------------
* Pour éteindre un serveur lancé de telle manière, replacez-vous dans la racine du projet puis entrez la commande "tmux a -t 0". Cela rouvrira la fenêtre que vous aviez ouverte pour lancer le serveur.
* Faites la combinaison de touches Ctrl+C pour éteindre le serveur, puis Ctrl+B, puis la touche d, afin de fermer la fenêtre tmux.