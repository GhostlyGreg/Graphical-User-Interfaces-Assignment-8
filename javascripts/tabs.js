
  $("#myTabs").tabs();

  // The division containing the complete tabs structure.
  var tabsdiv = $("#myTabs") ;
  
  // The list of tabs in the structure
  var tabslist = tabsdiv.find("ul") ;
  
  var AddTabButtonClickHandler = function() {
      
        // Creating a New Tab named after the input values. 
  tabslist.append( '<li><a href="#' + 
    document.getElementById("minRow").value + '-' +
    document.getElementById("maxRow").value + ' ~ ' +
    document.getElementById("minColumn").value +'-' +
    document.getElementById("maxColumn").value + '">' + '</a></li>' ) ;
    
    // Adding Content( Table ) to the new tab.
    tabsdiv.append( tbl ) ;
    
    // refresh the tab structure to make the newly added components appear
    $("#myTabs").tabs( "refresh" ) ;
    
      // this function is executed when an add-tab button is clicked
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