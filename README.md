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