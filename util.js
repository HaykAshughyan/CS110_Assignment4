module.exports = {
    matrixProduct: function (m1, m2){
        for (let i = 0; i < m1.length ; i++){
            if(m1[i].length != m2.length){
                return;
            }
        }

        let result = [];

        for (let row = 0; row < m1.length; row++){
            result[row] = [];
            for (let col = 0; col < m2[0].length; col++){
                let sum = 0;
                
                for (let i = 0; i < m1[0].length; i++){
                    sum += m1[row][i] * m2[i][col];

                }
                result[row][col] = sum;
            }
        }
        return result;
    },
    
    sumOfMatrices: function(m1,m2){
        for (let i = 0; i < m1.length; i++){
            if(m1[i].length != m2[i].length && m1.length != m2.length){
                return;
            }
        }

        let result = [];

        for(let row = 0; row < m1.length; row++){
            result[row] = [];
            for(let col = 0; col < m2[row].length; col++){
                result[row][col] = m1[row][col] + m2[row][col];
            }
        }
        return result;
    },

    sumOfEachRow: function (m){
        let result = [];
        for (let row = 0; row < m.length; row++){
            let sum = 0;
            for (let col = 0; col < m[row].length; col++){
                sum += m[row][col];
            }
            result.push(sum);
        }
        return result;
    }
}