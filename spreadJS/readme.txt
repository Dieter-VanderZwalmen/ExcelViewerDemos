{\rtf1\ansi\ansicpg1252\cocoartf2706
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fmodern\fcharset0 Courier;\f2\fnil\fcharset0 Menlo-Regular;
}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\csgray\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 OnlyOffice:\
\
\
\
Docker server:
\f1\fs26 \expnd0\expndtw0\kerning0
\
\pard\pardeftab720\partightenfactor0
\cf0 https://helpcenter.onlyoffice.com/installation/docs-developer-install-docker.aspx?_ga=2.80696855.1074939283.1680508321-495970992.1680508321\
\
\
!! Dit is momenteel zonder SSL/HTTPS of JWT token !!
\f0\fs24 \kerning1\expnd0\expndtw0 \

\f1\fs26 \expnd0\expndtw0\kerning0
sudo docker run -i -t -d -p 80:80 --restart=always -e JWT_SECRET=my_jwt_secret onlyoffice/documentserver-de\
\
!! commando met mount !! \
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural\partightenfactor0

\f2\fs22 \cf3 \kerning1\expnd0\expndtw0 \CocoaLigature0 docker run -it -d -p 80:80 --restart=always -e JWT_ENABLED=false -v /Users/dietervanderzwalmen/ooDocuments:/app/data onlyoffice/documentserver
\f1\fs26 \cf0 \expnd0\expndtw0\kerning0
\CocoaLigature1 \
\pard\pardeftab720\partightenfactor0
\cf0 \
momenteel heb ik \
JWT_ENABLED=false \
geen idee hoe jullie jwt gebruiken.\
\
De fileserver moet een docsAPI? bevatten dus je kan niet eender welke server gebruiken.\
\
\
Probleem: \
ik krijg geen files van de docker container.\
\
\
}