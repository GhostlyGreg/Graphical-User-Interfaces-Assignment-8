/*************************************************************************************
 Name:           Gregory James Caldwell Jr. 
 Email:          Gregory_Caldwell@student.uml.edu or DevilishCrusader@yahoo.com
 Creation Date:  11/26/2014
 Summary:        This is a main file containing javascript code for Assingment 8
 Filename:       main.js
*************************************************************************************/

/*************************************************************************************
 Sorce:          Profressor Jesse M. Heines 
 Link:           https://teaching.cs.uml.edu/~heines/91.461/91.461-2014-15f/461-lecs/code/DynamicTabs.html
 Creation Date:  11/26/2014
 Changes?:       Modifyed to display the data input by the users for the tab titles
                 also changed some a lot of the syntax and comments to fix my style.  
*************************************************************************************/

$(document).ready( function() {
  $("#myTabs").tabs();

  // The division containing the complete tabs structure.
  var tabsdiv = $("#myTabs") ;
  
  // The list of tabs in the structure
  var tabslist = tabsdiv.find("ul") ;
     
  // set the number of the next tab to add
  var nextTabNo = tabslist.find("li").length ;

  
  // This function is executed when an add-tab button is clicked
  var AddTabButtonClickHandler = function() {
    // Resoreces: 
    // The below link was very usful in making this webpage.
    // https://developer.mozilla.org/en-US/docs/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces 
    
    // The below link was used as starter code for this assignment. 
    // https://teaching.cs.uml.edu/~heines/91.461/91.461-2014-15f/461-lecs/code/DynamicTabs.html
    
    // Structure of the Code: 
    // 1. Add Tab Handler 
    // 2 .Gathering the Inputs 
    // 3. Validating the Inputs
    // 4. Upon Click of New Tab should append the Table to the new tab. 
    
 
    // Using remove to refresh.
    var rTable = document.getElementById("myTable");
      
    if (rTable !== null) {
      rTable.remove();
    }

    // Retrieving the 4 Inputs
    // The "+" makes the value treated as a number and not a string.
    var minColumn = +document.getElementById("minColumn").value;
    var maxColumn = +document.getElementById("maxColumn").value;
    var minRow = +document.getElementById("minRow").value;
    var maxRow = +document.getElementById("maxRow").value;

    

    $('#Form').validate( {
      rules : {
        minRow : {
          required: true,
          number: true
        } ,
        maxRow : {
          required: true,
          number: true
        } ,
        minColumn : {
          required: true,
          number: true
        } ,
        maxColumn : {
          required: true,
          number: true
        }
      },
      messages : {
        minRow : {
          required : function() {
            tblValidator.highlightError( "minRow" ) ;
              return "<br>The Minimum Column Value is<br> &nbsp; required." ;
          } ,
          digits : function() {
            tblValidator.highlightError( "minRow" ) ;
              return "<br>Please enter only digits for the<br> &nbsp; Minimum Column Value." ;
          }
        } ,
        maxRow : {
          required : function() {
            tblValidator.highlightError( "maxRow" ) ;
              return "<br>The Maximum Column Value is<br> &nbsp; required." ;
          } ,
          digits : function() {
            tblValidator.highlightError( "maxRow" ) ;
              return "<br>Please enter only digits for the<br> &nbsp; Maximum Column Value." ;
          }
        } ,
        minColumn : {
          required : function() {
            tblValidator.highlightError( "minColumn" ) ;
              return "<br>The Minimum Row Value is<br> &nbsp; required." ;
          } ,
          digits : function() {
            tblValidator.highlightError( "minColumn" ) ;
              return "<br>Please enter only digits for the<br> &nbsp; Minimum Row Value." ;
          }
        } ,
        maxColumn : {
          required : function() {
            tblValidator.highlightError( "maxColumn" ) ;
              return "<br>The Maximum Row Value is<br> &nbsp; required." ;
          } ,
          digits : function() {
            tblValidator.highlightError( "maxColumn" ) ;
              return "<br>Please enter only digits for the<br> &nbsp; Maximum Row Value." ;
          }
        }
      } ,
      errorPlacement : function( error, element ) {
        $(error).appendTo( $("#Form") ) ;
      } ,
      success : function( error, element ) {
        $(element).css( { "border" : "" } ) ; 
      }
    } ) ;
    
    // Creates the <table> element and the <tbody> element
    // In html used to make a table. 
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Creating all the cells.
    for (var i = minRow, ii = maxRow + 1; i <= ii; ++i) {
      // Createing the row.  
      var tblRow = document.createElement("tr");
      for (var j = minColumn, jj = maxColumn + 1; j <= jj; ++j) {
        // Creates a cell
        var cell = document.createElement("td");
        var cellText;
        
        // Giving some style to the cell/table.
        var cellStyle = "padding: 6px; ";
        if (i === minRow && j === minColumn) {
          cellText = document.createTextNode("");
          cell.setAttribute("style", cellStyle + "background-color: #777");
        } 
        else if (i === minRow) {
          cellText = document.createTextNode(j - 1);
          cell.setAttribute("style", cellStyle + "background-color: #ccc");
        } 
        else if (j === minColumn) {
          cellText = document.createTextNode(i - 1);
          cell.setAttribute("style", cellStyle + "background-color: #ccc");
       } 
       else {
         cellText = document.createTextNode((i - 1) * (j - 1));
         cell.setAttribute("style", cellStyle + "background-color: #ddd");
      }

      //  Adding the text to cell.
      cell.appendChild(cellText);
      // Adding the cell to row.
      tblRow.appendChild(cell);
    }
    // Adding the row to the end of the table body.
    tblBody.appendChild(tblRow);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // setting an id for tbl
  tbl.setAttribute("id", "myTable");
    
  // Creating a New Tab named after the input values. 
  tabslist.append( '<li><a href="#' + 
    document.getElementById("minRow").value + '-' +
    document.getElementById("maxRow").value + ' ~ ' +
    document.getElementById("minColumn").value +'-' +
    document.getElementById("maxColumn").value + '">' + '</a></li>' ) ;
    
    // Adding Content( Table ) to the new tab.
    tabsdiv.append( tbl  ) ;
    
    $("#" + String.fromCharCode( 97+nextTabNo) ).append(  
            '<button class="remove-tab">Remove Tab</button>' ) ;

    
    // refresh the tab structure to make the newly added components appear
    $("#myTabs").tabs( "refresh" ) ;
    
    $("#" + String.fromCharCode( 97+nextTabNo ) + " .add-tab").click( AddTabButtonClickHandler ) ;
    $("#" + String.fromCharCode( 97+nextTabNo ) + " .remove-tab").click( RemoveTabButtonClickHandler ) ;

  
  } ;

  // This function is executed when an Remove-tab button is clicked
  var RemoveTabButtonClickHandler = function() {
    // console.log( $(this).parent().attr("id") ) ;

    // remove tab content
    $(this).parent().remove() ;

    // remove tab itself        
    var id = $(this).parent().attr("id") ;
    // console.log( "need to remove tab with href = #" + id ) ;
    var tabToRemove = tabslist.find( "li a[href='#" + id + "']").parent() ;
    // console.log( "tabToRemove = " + tabToRemove.html() ) ;
    tabToRemove.remove() ;

    // refresh the tab structure to make the newly added components appear
    $("#myTabs").tabs( "refresh" ) ;
  } ;

  // add the Add Tab button click handler to all All Tab buttons
  $(".add-tab").click( AddTabButtonClickHandler ) ;

  // add the Add Tab button click handler to all All Tab buttons
  $(".remove-tab").click( RemoveTabButtonClickHandler ) ;

} ) ;
