Source code:


# Syncfusion


## Importeren van test file
Importeren van test file. werkt niet.

## Opzetten

Stappenplan:

1) Standaard vue project genereren
```
npm create vue@latest
```
packages installeren
```
npm i @syncfusion/ej2-vue-spreadsheet
npm i @syncfusion/ej2-base
```
<hr>
2) License key

````
import { registerLicense } from '@syncfusion/ej2-base';

let key = "Mgo+DEE9"
registerLicense(key);
````
<hr>
3) Template 

``` html
<template>
  <ejs-spreadsheet :openUrl="openUrl" :saveUrl="saveUrl" @cell-save="onCellSave" @select="onCellSelected">
    <e-sheets>
      <e-sheet :frozenRows=2  :frozenColumns=2>
        <e-ranges>
          <e-range :dataSource="data"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
  
</template>
```
Spreekt voor zich.
e-sheets gaat over de sheets, de ejs-spreadsheet is het geheel etc etc.
<hr>
4) functionaliteiten

Op de spreadsheet kan je extra functies toevoegen.

open- en saveURL dienen voor het openen en opslaan van bestanden. Deze functies moeten zelf gedefineerd worden.
```
openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save',
```
de @cell-save en @select zijn ingebouwde event (er zijn er nog veel meer) die je kan koppelen aan een functie.
```
onCellSelected: function (args) {
         console.log('Cell selected',args);
        }
```

Documentatie:
https://ej2.syncfusion.com/vue/demos/#/bootstrap5/spreadsheet/default.html

Veel beschikbare voorbeelden voor vue,
maar allemaal voor vue2.

## Mijn mening
Simpel maar lijkt mij beperkt.



# OnlyOffice


## Importeren van test file
- Openklapbare secties werken
- Formules werken. (alle resultaten zijn hetzelfde ook op dezelfde manier afgerond)
- Kleuren ook
- In en uitzoomen mogelijk.
- Freezen van kolomen/ rijen is mogelijk.


Kleine opmerkingen: 
- Q2 22 MGT Fees Recalculated is een beetje laggy.

- Default regio is America. 
Dit verander je door File > Advanced Settings > Region.



## Opzetten van project.

### Docker document server opzetten
https://hub.docker.com/r/onlyoffice/documentserver/

sudo docker run -it -d -p 80:80 onlyoffice/documentserver

Je kan dit ook opzetten op poort 443 maar dit heb ik niet gedaan. <br>
Je kan ook met mounts werken. Deze werken behalve voor de plugins voor onbekende rede. <br>
-> Plugins wouden niet inladen indien je een mount had met een plugin.


Ik gebruik Docker desktop.
Hierin kon ik zien dat er een nieuwe container was.

Je kan nu normaal gezien naar 

http://localhost/ surfen.

Voer de 2 commandos uit onder "Testing before integration" in je terminal (van je eigen computer niet je docker container).

Hierna kan je op "Go to test example" duwen.

Hierin staat alles omtrent uploaden, downloaden, bekijken en bewerken van documenten.

Deze site heeft geen extra configuratie nodig.

<hr>

### Toevoegen van een plugin

Wanneer je in een document zit is er een tab plugins. Hierin staan alle plugins. Indien je een eigen plugin wilt maken surf naar https://api.onlyoffice.com/plugin/installation/onpremises en volg "Adding plugins through the sdkjs-plugins folder". 

In essentie moet je het volgende doen:

Ga naar /var/www/onlyoffice/documentserver/sdkjs-plugins/

Maak hier een folder aan en 3 files ().
- config.json
- index.html
- plugin.js


"Uitleg" over hoe je een plugin moet maken:
https://api.onlyoffice.com/plugin/code

Opensource plugin voorbeelden: 
https://api.onlyoffice.com/plugin/example/


een plugin dat niets zou doen zou denk ik er als volgt moeten uitzien:
``` javascript
(function (window, undefined) {
    window.Asc.plugin.init = function () {
        this.callCommand(function() {
            //doet niets
        }, true);
    };
    window.Asc.plugin.button = function (id) {
    };
})(window, undefined);
```

Zie dat je in de index.html de juiste imports hebt staan.
Dit voorbeeld is van: https://api.onlyoffice.com/plugin/example/languagetool

In commentaar staat welke scripts voor wat dienen. (hier ben ik niet 100% zeker van)

``` html
	<head>
		<meta charset="UTF-8">
		<title>synonim</title>
		
        <!--css-->
		<link rel="stylesheet" href="vendor/select2-4.0.13/css/select2.css"/>

        <!--extra imports-->
		<script src="vendor/jQuery-2.2.2-min/jquery-v2.2.2-min.js"></script>
		<script src="vendor/select2-4.0.13/js/select2.js"></script>

        <!--essentiele imports voor de werking van het geheel-->
		<script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
		<script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js"></script>

        <!--css-->
		<link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">

        <!--je eigen script !als laatste importen!-->
		<script src="scripts/langTool.js"></script>

		<link rel="stylesheet" href="resources/css/plugin_style.css">

	</head>
```


Wat er exact in de config.json moet staan snap ik zelf niet.
Maar wat ik wel weet is dat je hier data kan meegeven zoals wat is de naam wat is het icoontje etc etc.




Hoe heb ik ervoor gezorgd dat je de aangeduide cells kan toevoegen aan een map:
Ik heb de translate tool helemaal ge copy paste en het volgende toegevoegd.

in de index.html voeg ik een nieuwe knop toe.
``` html
<div onсlick="" id="replace" class="noselect btn-text-default i18n" style="height: fit-content; min-height: 20px;">Insert to document</div>

<!--toegevoegd-->
<div onсlick="" id="addToCategory" class="noselect btn-text-default i18n" style="height: fit-content; min-height: 20px;">add to category</div>

			
```


in de langTool.js voeg je boven " $('#clear').click(function() { " het volgende toe.

``` javascript
		$('#addToCategory').click(function () {
			//ask for a category
			var catergory = prompt("enter category name:")

			console.log("addToCategory");
			txt = document.getElementById("textarea").innerText;
			//Create map
			var map = new Map();
			//add the txt to the map
			map.set(catergory, txt);

			//clear the text area
			$("#result").empty();
		});
```
Dit werkt met jQuery en maakt van je aangemaakt div een "knop".
Deze knop vraagt een categorie naam.
Haalt uit textarea alle informatie. (textarea is het invulveldje dat dankzij translatetool wordt opgevuld bij het selecteren van cellen)
Normaal gezien zit in txt al de gewenste waarden maar dit is "veiliger" denk ik.

Hoe haalt de translatetool informatie uit de geselecteerde cellen?

Geen idee.
Indien je cellen selecteerd en een debug bolletje zet op de lijn 
``` javascript 
window.Asc.plugin.init = function(text)	{
```

Zal je zien dat de functie wordt opgeroepen met text als parameter waar alle waarden inzitten. Hoe dit gebeurt begrijp ik niet.

Daarom heb ik gewoon heel de translatetool plugin ge copypaste en aangepast.
<hr>

## hoe krijg je dit in vue?

Zet dit in je app.vue
``` javascript
<template>
  <DocumentEditor id="docEditor" documentServerUrl="http://localhost:80/" :config="config"
    :events_onDocumentReady="onDocumentReady" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DocumentEditor } from "@onlyoffice/document-editor-vue";

export default defineComponent({
  name: 'ExampleComponent',
  components: {
    DocumentEditor
  },
  data() {
    return {
      //parameters voor de OnlyOffice api
      config: {
        document: {
          fileType: "xlsx",
          //unique identifier for the document
          key: "bv48M5r64Sf9",
          title: "test",
          //beide urls zijn bruikbaar:
          //url: "http://localhost/example/download?fileName=new.xlsx",
          url: "http://localhost/cache/files/data/172.17.0.1new.xlsx11680531729607_4983/output.xlsx/new.xlsx?md5=tZQ0Bu6raZhepqvj7XQGAQ&expires=1680537964&filename=new.xlsx",

        },
        documentType: "spreadsheet",
        editorConfig: {
        }
      }
    }
  },
  methods: {
    onDocumentReady() {
      console.log("Document is loaded");
    }
  },
});
</script>
```

Hier mee kan je steeds opnieuw 1 bepaalde file opendoen.

Hoe dat de key en url samenwerken begrijp ik niet.

Waar de files opgeslagen staan is ook een mysterie.

maar je kan beide url links gebruiken die gegeven staan in het voorbeeld.

en indien je deze app opendoet op verschillende tabs kan je wel zien dat er updates zijn na een refresh.


## Conclusie / mijn mening

De documentatie is zo slecht dat je er vrijwel niets mee bent.
Je kan gelukkig wel alle code bekijken aangezien deze opensource is of lokaal draait. Zo kan je begrijpen hoe alles werkt.