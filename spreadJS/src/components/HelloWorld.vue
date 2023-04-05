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
