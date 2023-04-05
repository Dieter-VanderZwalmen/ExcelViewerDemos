<template>
    <div>
      <gc-spread-sheets class="spread-host" @workbookInitialized="initSpread">
      </gc-spread-sheets>
      <div class="options-container">
        <div class="option-row">
          <div class="inputContainer">
            <input
              type="file"
              id="fileDemo"
              class="input"
              @change="changeFileDemo"
            />
            <input
              type="button"
              id="loadExcel"
              value="import"
              class="button"
              @click="loadExcel"
            />
          </div>
          <div class="inputContainer">
            <input
              id="exportFileName"
              value="export.xlsx"
              class="input"
              @change="changeExportFileName"
            />
            <input
              type="button"
              id="saveExcel"
              value="export"
              class="button"
              @click="saveExcel"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
    import * as GC from "@grapecity/spread-sheets";
    import * as ExcelIO from "@grapecity/spread-excelio";
    import { saveAs } from "file-saver";
  
    var SpreadJSKey = "xxxx";
    GC.Spread.Sheets.LicenseKey = SpreadJSKey;
  
    // You need to license the ExcelIO module separately using the same license key
    ExcelIO.LicenseKey = SpreadJSKey;
  
    export default {
      name: "App",
      methods: {
        initSpread: function (spread) {
          this.spread = spread;
          let sheet = this.spread.getActiveSheet();
          sheet
            .getCell(0, 0)
            .vAlign(GC.Spread.Sheets.VerticalAlign.center)
            .value("SpreadJS");
        },
        changeFileDemo(e) {
          this.importExcelFile = e.target.files[0];
        },
        changeExportFileName(e) {
          this.exportFileName = e.target.value;
        },
        loadExcel() {
          let spread = this.spread;
          let excelIo = new ExcelIO.IO();
          let excelFile = this.importExcelFile;
          excelIo.open(
            excelFile,
            function (json) {
              spread.fromJSON(json);
            },
            function (error) {
              console.log(error);
            }
          );
        },
        saveExcel() {
          let spread = this.spread;
          let excelIo = new ExcelIO.IO();
          let fileName = this.exportFileName || "export";
          if (fileName.substr(-5, 5) !== ".xlsx") {
            fileName += ".xlsx";
          }
          let json = spread.toJSON();
          excelIo.save(
            json,
            function (blob) {
              saveAs(blob, fileName);
            },
            function (error) {
              console.log(error);
            }
          );
        },
      },
    };
  </script>
  
  <style>
    .spread-host {
      width: 100%;
      height: 600px;
    }
    .inputContainer {
      width: 100%;
      height: auto;
      border: 1px solid #eee;
      padding: 6px 12px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
    .options-container {
      width: 280px;
      padding: 12px;
      height: 100%;
      box-sizing: border-box;
      background: #fbfbfb;
      overflow: auto;
    }
  </style>