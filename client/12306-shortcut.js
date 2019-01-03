/**
 * 
 */

function setDefaultTimeRange() {
  var select = document.getElementById('cc_start_time');
  var likeIndex = 3;
  var opt = document.querySelectorAll('#cc_start_time option')[likeIndex];
  opt.value = '12002300';
  opt.innerHTML = '12:00--23:00';
  select.value = opt.value;
  select.dispatchEvent(new Event('change'));
}

setDefaultTimeRange();
