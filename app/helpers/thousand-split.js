import { helper } from '@ember/component/helper';

export function thousandSplit(params/*, hash*/) {
  let temp = String(params[0]);
  let result = "";

  if (temp.split(".").length === 1) {
    result = temp.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
  } else {
    result = temp.toFixed(temp.split(".")[1].length).replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');//使用正则替换，每隔三个数加一个','
  }
  
  return result;
}

export default helper(thousandSplit);
