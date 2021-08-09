const vegetables = [{
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
    },
    {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
    },
    {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
    }
]
const metric = 'redness'

// We want to find loop through the object array and determine: //
// The name of the submitter of the BEST vegetables //
// Best in redness OR plumpness //

const judgeVegetable = function(vegetables, metric) {
    var best = 0;
    var bestInShow;

    for (var i = 0; i < vegetables.length; i++) {

        if (vegetables[i][metric] > best) {
            best = vegetables[i][metric];
            bestInShow = vegetables[i].submitter;
        }
    }
    return bestInShow;
};
console.log(judgeVegetable);