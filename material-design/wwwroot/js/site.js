// Write your Javascript code.
var drawerEl = document.querySelector('.mdc-temporary-drawer');
var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
var drawer = new MDCTemporaryDrawer(drawerEl);
document
    .querySelector('.demo-menu')
    .addEventListener('click', function () {
        drawer.open = true;
    });
drawerEl.addEventListener('MDCTemporaryDrawer:open', function () {
    console.log('Received MDCTemporaryDrawer:open');
});
drawerEl.addEventListener('MDCTemporaryDrawer:close', function () {
    console.log('Received MDCTemporaryDrawer:close');
});