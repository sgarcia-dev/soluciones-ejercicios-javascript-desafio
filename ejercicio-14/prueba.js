var $leftSelect = $('#options_available');
var $rightSelect = $('#options_enabled');

$('input[name=btn_add]').on('click', function(event) {
  moveElements($leftSelect, $rightSelect);
});

$('input[name=btn_remove]').on('click', function(event) {
  moveElements($rightSelect, $leftSelect);
});

function moveElements($srcElement, $destElement) {
  var valuesSelected = $srcElement.val();
  var $valuesSelected = valuesSelected.map(function(valueName) {
    return $srcElement.find('option[value=' + valueName + ']');
  });
  $valuesSelected.forEach(function($selectedValue) {
    $destElement.append($selectedValue);
  });
}
