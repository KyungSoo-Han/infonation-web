
$(() => {
 //await loginUser();
 $('#gridContainer').dxDataGrid({
   dataSource:  {

   }, 
   
   allowColumnReordering: true,
   showBorders: true,
   grouping: {
    autoExpandAll: true,
  },
  groupPanel: {
    visible: true,
  },
   filterRow: {
     visible: true,
     applyFilter: 'auto',
   },
   headerFilter: {
    visible: true,
  },
   columns: [
          {
            dataField:'id',caption:'ID',alignment: 'center'
          }, 
          {
            dataField: 'title',caption:'제목',alignment: 'left'
          }, 
            'userName',
            'viewCnt'],
   showBorders: true,
   scrolling: {
     rowRenderingMode: 'virtual',
   },
   paging: {
     pageSize: 10,
   },
   pager: {
     visible: true,
     allowedPageSizes: [5, 10, 'all'],
     showPageSizeSelector: true,
     showInfo: true,
     showNavigationButtons: true,
     noDataText:"",
   },
 });
});
