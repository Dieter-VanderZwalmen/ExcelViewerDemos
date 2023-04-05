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

<script>
import syncfusionUpload from './components/syncfusionUpload.vue'
import { SpreadsheetComponent, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";

  export default {
    name: "App",
    // Declaring component and its directives
    components: {
      "ejs-spreadsheet": SpreadsheetComponent,
      "e-sheets": SheetsDirective,
      "e-sheet": SheetDirective,
      "e-ranges": RangesDirective,
      "e-range": RangeDirective,
    },
    // Bound properties declarations
    data() {
      return {
        data: [
          {
            OrderID: 10248,
            Name: "VINET",
            Country: "France",
          },
          {
            OrderID: 10249,
            Name: "TOMSP",
            Country: "Germany",
          },
        ],
        openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save',
        onCellSave: function (args) {
         console.log('Cell saved', args);
        },
        onCellSelected: function (args) {
         console.log('Cell selected',args);
        }
       
        
      };
    },
  };
</script>

<style>
  @import "style.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>
