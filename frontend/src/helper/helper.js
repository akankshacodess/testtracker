import _ from "lodash";

export function getSum(transaction, type) {
  console.log(transaction);
  let sum = _(transaction)
    .groupBy("type")
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, "amount"); // [4000,250,350]
      return {
        type: key,
        color: objs[0].color,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  return sum;
}

export function getLabels(transaction) {
  let amountSum = getSum(transaction, "type");
  let Total = _.sum(getSum(transaction));

  let percent = _(amountSum)
    .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
    .value();
  return percent;
}

export function chart_Data(transaction, custom) {
  let dataValue = getSum(transaction);

  let bg = _.map(transaction, (a) => a.color);
  bg = _.uniq(bg);
  console.log(bg);

  const config = {
    data: {
      datasets: [
        {
          label: "My First Dataset",
          data: dataValue,
          backgroundColor: bg,
          //   [
          //     "rgb(255, 99, 132)",
          //     "rgb(54, 162, 235)",
          //     "rgb(255, 205, 86)",
          //   ],
          hoverOffset: 5,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };
  return custom ?? config;
}

export function getTotal(transaction) {
  return _.sum(getSum(transaction));
}
